'use client'
import { useEffect, useRef } from "react"
import type { ReactNode } from "react"

type Props = {
    children: ReactNode
    /** transition-delay in ms, for staggering bands that enter together */
    delay?: number
    className?: string
}

// Scroll-reveal per the design spec: fade + 26px rise, 0.65s cubic-bezier(0.22,1,0.36,1),
// IntersectionObserver at threshold 0.12. Elements already in view on load are skipped
// so nothing blinks, and prefers-reduced-motion is handled in the CSS. Classes are
// applied imperatively (mirroring the design's implementation) so the server-rendered
// markup stays visible without JavaScript.
const Reveal = ({ children, delay = 0, className }: Props) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
        const rect = el.getBoundingClientRect()
        // already visible on load: don't blink
        if (rect.top < window.innerHeight && rect.bottom > 0) return
        el.classList.add("om-reveal")
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        el.classList.add("om-in")
                        io.disconnect()
                    }
                })
            },
            { threshold: 0.12 }
        )
        io.observe(el)
        return () => io.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            className={className}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
        >
            {children}
        </div>
    )
}

export default Reveal
