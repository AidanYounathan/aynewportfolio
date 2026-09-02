'use client'
import { useEffect, useRef, useState } from "react"
import { work, stackLayers } from "../data/projects"

type TermLine = { prefix: string; text: string; color?: string }

const OUTPUT = "#C8D9B7"
const ENTERED = "#F4F2EB"
const HIGHLIGHT = "#D18F1E"
const ERROR = "#E0A0A0"
const BOOT_GRAY = "#9AA095"

const BOOT: TermLine[] = [
    { prefix: "", text: "ay-portfolio v2 — type `help` for commands", color: BOOT_GRAY },
    { prefix: "$", text: "whoami", color: ENTERED },
    { prefix: "", text: "Aidan Younathan — Senior Software Engineering Associate, DigitalNEST", color: OUTPUT },
    { prefix: "", text: "production web apps · real-time interactive systems · Modesto, CA", color: OUTPUT },
]

const out = (text: string, color: string = OUTPUT): TermLine => ({ prefix: "", text, color })

// `null` means clear the screen
const run = (raw: string): TermLine[] | null => {
    const cmd = raw.trim().toLowerCase()
    if (!cmd) return []
    if (cmd === "help") return [
        out("available: whoami, projects, stack, contact, uptime, clear", HIGHLIGHT),
        out("hint: `projects` lists shipped work with links"),
    ]
    if (cmd === "whoami") return [
        out("Aidan Younathan — Senior SWE Associate @ DigitalNEST, Modesto CA"),
        out("TypeScript · React · Node.js · C#/.NET · Python · PostgreSQL"),
    ]
    if (cmd === "projects") return work.map(p => out(p.year + "  " + p.title.padEnd(18) + p.tagline))
    if (cmd === "stack") return stackLayers.map(l => out(l.mark + "  " + l.label.padEnd(13) + l.items.join(", ")))
    if (cmd === "contact") return [
        out("ayounathan05@gmail.com · (209) 985-2689", HIGHLIGHT),
        out("linkedin.com/in/aidan-younathan · github.com/AidanYounathan", HIGHLIGHT),
    ]
    if (cmd === "uptime") return [out("team of 3 led · ~200 users on CVYG Check-In · $1.8M platform maintained · lighthouse 85–90+")]
    if (cmd === "clear") return null
    return [out("zsh: command not found: " + cmd + " — try `help`", ERROR)]
}

const Terminal = () => {
    const [lines, setLines] = useState<TermLine[]>(BOOT)
    const [input, setInput] = useState("")
    const scrollRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const el = scrollRef.current
        if (el) el.scrollTop = el.scrollHeight
    }, [lines])

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const res = run(input)
        setLines(prev => res === null
            ? []
            : [...prev, { prefix: "$", text: input, color: ENTERED }, ...res])
        setInput("")
    }

    return (
        <div
            className="bg-[var(--dark)] rounded-md overflow-hidden shadow-[0_22px_44px_-28px_rgba(43,46,41,0.6)] cursor-text"
            onClick={() => inputRef.current?.focus()}
        >
            <div className="flex items-center gap-2 px-3.5 py-[11px] bg-[#35392F]">
                <div className="w-[9px] h-[9px] rounded-full bg-[var(--amber)]" />
                <div className="w-[9px] h-[9px] rounded-full bg-[#6E7568]" />
                <div className="w-[9px] h-[9px] rounded-full bg-[#6E7568]" />
                <div className="font-mono text-[11px] text-[#9AA095] ml-1.5">ay@portfolio — zsh</div>
            </div>
            <div
                ref={scrollRef}
                className="px-4 pt-4 pb-1.5 font-mono text-[13px] leading-[1.75] h-[244px] overflow-auto flex flex-col"
                data-lenis-prevent
                aria-live="polite"
            >
                {lines.map((ln, i) => (
                    <div key={i} className="flex gap-2 whitespace-pre-wrap">
                        {ln.prefix && <span style={{ color: HIGHLIGHT }}>{ln.prefix}</span>}
                        <span style={{ color: ln.color ?? OUTPUT }}>{ln.text}</span>
                    </div>
                ))}
            </div>
            <form
                onSubmit={onSubmit}
                className="flex items-center gap-2 px-4 py-3 border-t border-[#3D4239] bg-[var(--dark)]"
            >
                <span className="font-mono text-[13px] text-[var(--amber)]">$</span>
                <input
                    ref={inputRef}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="try: help"
                    spellCheck={false}
                    aria-label="Portfolio terminal input"
                    className="flex-1 bg-transparent border-none outline-none text-[#F4F2EB] font-mono text-[13px] placeholder:text-[#6E7568]"
                />
                <span className="w-[7px] h-[15px] bg-[var(--amber)] animate-caret" aria-hidden />
            </form>
        </div>
    )
}

export default Terminal
