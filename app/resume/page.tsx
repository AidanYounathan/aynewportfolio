import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import { experience, stackLayers } from "../data/projects";

export const metadata: Metadata = {
    title: "Resume — Aidan Younathan",
};

const certifications = [
    "Anthropic — AI Fluency: Framework & Foundations",
    "Anthropic — Claude 101",
    "Codecademy — JavaScript · TypeScript · React · Python 3",
];

export default function Resume() {
    return (
        <main className="min-h-screen w-full bg-[var(--background)] font-sans">
            {/* Header band (design #4c) */}
            <Reveal>
                <section className="grid-paper border-b border-[var(--hairline)] px-5 sm:px-12 pt-12 sm:pt-14 pb-10">
                    <div className="max-w-[1080px] mx-auto flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 sm:gap-10">
                        <div className="flex flex-col gap-3.5">
                            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--amber-text)]">
                                $ open resume — senior software engineering associate, DigitalNEST
                            </div>
                            <h1 className="font-serif font-normal text-[clamp(40px,6vw,68px)] leading-[0.95] tracking-[-0.03em] text-[var(--ink)]">
                                Aidan Younathan
                            </h1>
                            <div className="font-mono text-[13px] leading-[1.7] text-[var(--muted)]">
                                Modesto, CA · U.S. Citizen · open to relocation and remote<br />
                                ayounathan05@gmail.com · (209) 985-2689 · github.com/AidanYounathan · linkedin.com/in/aidan-younathan
                            </div>
                        </div>
                        <a
                            href="/Aidan_Younathan_Resume.pdf"
                            download="Aidan_Younathan_Resume.pdf"
                            className="flex-none bg-[var(--forestgreen)] text-[#FFFDF6] px-[26px] py-3.5 rounded-[3px] font-mono text-[14px] transition-colors hover:bg-[var(--forestgreen-deep)]"
                        >
                            resume.pdf ↓
                        </a>
                    </div>
                </section>
            </Reveal>

            <div className="max-w-[1080px] mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr]">
                {/* Sidebar */}
                <Reveal delay={60}>
                    <aside className="lg:border-r border-[var(--hairline)] bg-[var(--cardbg)] px-5 sm:px-9 pt-11 pb-16 flex flex-col gap-[34px] h-full">
                        <div className="flex flex-col gap-4">
                            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--faint)]">
                                The stack, by layer
                            </div>
                            {stackLayers.map((layer) => (
                                <div key={layer.mark} className="flex flex-col gap-[7px] border-t border-[#E0DDD1] pt-3.5">
                                    <div className="flex items-baseline gap-3">
                                        <div className="font-mono text-[11px] text-[var(--amber-text)]">{layer.mark}</div>
                                        <div className="font-serif text-[21px] text-[var(--ink)]">{layer.label}</div>
                                    </div>
                                    {layer.items.map((item) => (
                                        <div key={item} className="text-[13.5px] text-[var(--muted)] pl-6">{item}</div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--faint)]">
                                Education
                            </div>
                            <div className="border-t border-[#E0DDD1] pt-3.5 flex flex-col gap-1">
                                <div className="font-serif text-[21px] text-[var(--ink)]">CodeStack Academy</div>
                                <div className="text-[13.5px] text-[var(--muted)]">Certified Software Engineer · 1,100+ hours full-time</div>
                                <div className="text-[13.5px] text-[var(--muted)]">Congressional Recognition</div>
                                <div className="font-mono text-[11px] text-[var(--amber-text)] mt-0.5">2023 – 2024</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--faint)]">
                                Certifications
                            </div>
                            <div className="border-t border-[#E0DDD1] pt-3.5 flex flex-col gap-1.5">
                                {certifications.map((cert) => (
                                    <div key={cert} className="text-[13.5px] text-[var(--muted)]">{cert}</div>
                                ))}
                            </div>
                        </div>
                    </aside>
                </Reveal>

                {/* Experience */}
                <Reveal delay={120}>
                    <section className="px-5 sm:px-12 pt-11 pb-16 sm:pb-[72px] flex flex-col gap-2">
                        <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--faint)] pb-3.5">
                            Experience
                        </div>
                        {experience.map((entry) => (
                            <div
                                key={`${entry.company}-${entry.dates}`}
                                className="border-t border-[var(--hairline)] py-[26px] flex flex-col gap-2.5"
                            >
                                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                                    <div className="flex items-baseline gap-3.5 flex-wrap">
                                        <h3 className="font-serif text-[22px] sm:text-[25px] text-[var(--ink)]">{entry.title}</h3>
                                        <div className="text-[14px] text-[var(--faint)]">{entry.company}</div>
                                    </div>
                                    <div className="font-mono text-[11.5px] text-[var(--amber-text)] whitespace-nowrap">
                                        {entry.dates}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[7px]">
                                    {entry.bullets.map((bullet, j) => (
                                        <div key={j} className="flex gap-3 text-[13.5px] leading-[1.6] text-[var(--muted)]">
                                            <div className="text-[var(--amber-text)] flex-none">–</div>
                                            <div className="text-pretty">{bullet}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>
                </Reveal>
            </div>
        </main>
    );
}
