import Image from "next/image"
import Link from "next/link"
import type { Project } from "../data/projects"

type Props = {
    project: Project
    mark: string
    /** "featured" = home list (#3a): amber tagline, 96px thumb, row links to /work.
     *  "work" = work page (#4a): green tagline, 110px thumb, explicit github/live links. */
    variant?: "featured" | "work"
}

const Thumb = ({ project, height }: { project: Project; height: number }) => {
    if (!project.image) {
        return (
            <div
                style={{ height }}
                className="w-full border border-dashed border-[#C6C2B5] bg-[var(--cardbg)] flex items-center justify-center font-mono text-[10px] tracking-[0.1em] text-[var(--faint)]"
            >
                FIG — PENDING
            </div>
        )
    }
    return (
        <Image
            src={project.image}
            alt={project.title}
            width={440}
            height={height * 2}
            style={{ height }}
            className="w-full object-cover border border-[var(--hairline)]"
        />
    )
}

const WorkRow = ({ project, mark, variant = "featured" }: Props) => {
    const { title, year, blurb, tagline, github, site } = project

    const links = [
        github && { label: "github ↗", href: `https://${github}` },
        site && { label: `${site} ↗`, href: `https://${site}` },
    ].filter(Boolean) as { label: string; href: string }[]

    if (variant === "work") {
        return (
            <div className="border-b border-[var(--hairline)] py-[26px] grid grid-cols-[32px_1fr] sm:grid-cols-[44px_1fr_220px] gap-4 sm:gap-[26px] items-start transition-colors hover:bg-[var(--row-hover)]">
                <div className="font-mono text-[12px] text-[var(--amber-text)] pt-2">{mark}</div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-baseline gap-4">
                        <h3 className="font-serif text-[24px] sm:text-[27px] text-[var(--ink)]">{title}</h3>
                        <div className="font-mono text-[12px] text-[var(--faint)]">{year}</div>
                    </div>
                    <p className="text-[14px] leading-[1.6] text-[var(--muted)] max-w-[66ch] text-pretty">{blurb}</p>
                    <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-[var(--forestgreen)]">{tagline}</div>
                    {links.length > 0 && (
                        <div className="flex gap-[18px] mt-0.5">
                            {links.map(({ label, href }) => (
                                <a
                                    key={href}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-mono text-[12px] text-[var(--amber-text)] border-b border-[#E8D5AC] transition-colors hover:text-[var(--forestgreen)]"
                                >
                                    {label}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
                <div className="max-sm:hidden">
                    <Thumb project={project} height={110} />
                </div>
            </div>
        )
    }

    return (
        <Link
            href="/work"
            className="border-t border-[var(--hairline)] py-[22px] grid grid-cols-[32px_1fr] sm:grid-cols-[44px_1fr_190px] gap-4 sm:gap-[26px] items-center transition-colors hover:bg-[var(--row-hover)]"
        >
            <div className="font-mono text-[12px] text-[var(--amber-text)]">{mark}</div>
            <div className="flex flex-col gap-[7px]">
                <div className="flex items-baseline gap-4">
                    <h3 className="font-serif text-[24px] sm:text-[26px] text-[var(--ink)]">{title}</h3>
                    <div className="font-mono text-[12px] text-[var(--faint)]">{year}</div>
                </div>
                <p className="text-[14px] leading-[1.55] text-[var(--muted)] max-w-[68ch] text-pretty">{blurb}</p>
                <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-[var(--amber-text)]">{tagline}</div>
            </div>
            <div className="max-sm:hidden">
                <Thumb project={project} height={96} />
            </div>
        </Link>
    )
}

export default WorkRow
