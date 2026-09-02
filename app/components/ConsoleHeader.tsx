'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
    { label: "home", href: "/" },
    { label: "work", href: "/work" },
    { label: "about", href: "/about" },
    { label: "resume", href: "/resume" },
]

const ConsoleHeader = () => {
    const pathname = usePathname()

    return (
        <header className="sticky top-0 z-50 flex justify-between items-center px-5 sm:px-12 py-3.5 sm:py-[18px] bg-[var(--ink)] text-[#F4F2EB]">
            <Link href="/" className="font-mono text-[13px] tracking-[0.04em] max-[420px]:hidden">
                aidanyounathan.dev
            </Link>
            <Link href="/" className="font-mono text-[13px] tracking-[0.04em] min-[421px]:hidden">
                ay.dev
            </Link>
            <nav className="flex gap-1 sm:gap-2 font-mono text-[12px] sm:text-[13px]">
                {navItems.map(({ label, href }) => {
                    const active = pathname === href
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`px-2.5 sm:px-3.5 py-1.5 rounded-[3px] transition-colors ${active
                                ? "bg-[var(--amber)] text-[#2B2E29]"
                                : "hover:bg-[#4C514A]"
                                }`}
                        >
                            {label}
                        </Link>
                    )
                })}
            </nav>
        </header>
    )
}

export default ConsoleHeader
