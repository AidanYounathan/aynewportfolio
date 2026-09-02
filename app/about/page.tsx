import type { Metadata } from "next";
import Image from "next/image";
import PhotoCarousel from "../components/PhotoCarousel";
import Reveal from "../components/Reveal";
import { experience, shootPhotos, naturePhotos } from "../data/projects";

export const metadata: Metadata = {
    title: "About — Aidan Younathan",
};

export default function About() {
    return (
        <main className="min-h-screen w-full bg-[var(--background)] font-sans">
            {/* Hero (design #4b) */}
            <Reveal>
                <section className="grid-paper border-b border-[var(--hairline)] px-5 sm:px-12 pt-12 sm:pt-[60px] pb-12 sm:pb-[52px]">
                    <div className="max-w-[1080px] mx-auto grid grid-cols-1 lg:grid-cols-[440px_1fr] gap-11 items-center">
                        <div className="relative max-lg:order-last">
                            <Image
                                src="/images/aidanonrock.JPG"
                                alt="Aidan on a granite outcrop"
                                width={880}
                                height={660}
                                priority
                                className="w-full aspect-[4/3] object-cover border border-[var(--hairline-2)]"
                            />
                            <div className="absolute left-3 bottom-3 font-mono text-[10px] tracking-[0.1em] bg-[var(--background)] px-2 py-1 text-[var(--muted)]">
                                FIG. 00 — AIDAN ON ROCK
                            </div>
                        </div>
                        <div className="flex flex-col gap-[18px]">
                            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--amber-text)]">
                                $ cat about.md
                            </div>
                            <h1 className="font-serif font-normal text-[clamp(44px,7vw,72px)] leading-[0.95] tracking-[-0.03em] text-[var(--ink)]">
                                Hey, I&apos;m Aidan
                            </h1>
                            <div className="h-[5px] w-[92px] bg-[var(--amber)]" />
                            <p className="text-[18px] leading-[1.6] text-pretty">
                                I&apos;m a software engineer based in Modesto, California.
                            </p>
                            <p className="text-[18px] leading-[1.6] text-pretty">
                                When I&apos;m off the clock I love taking photos. Scroll to see some pictures.
                            </p>
                            <div className="flex flex-wrap gap-3 font-mono text-[14px]">
                                <a
                                    href="/Aidan_Younathan_Resume.pdf"
                                    download="Aidan_Younathan_Resume.pdf"
                                    className="bg-[var(--forestgreen)] text-[#FFFDF6] px-[22px] py-3 rounded-[3px] transition-colors hover:bg-[var(--forestgreen-deep)]"
                                >
                                    resume.pdf ↓
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/aidan-younathan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-[#C6C2B5] px-[22px] py-3 rounded-[3px] transition-colors hover:border-[var(--amber)] hover:text-[var(--amber-text)]"
                                >
                                    linkedin ↗
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </Reveal>

            {/* Photo carousels */}
            <Reveal delay={60}>
                <section className="border-b border-[var(--hairline)] px-5 sm:px-12 py-12 sm:py-[52px]">
                    <div className="max-w-[1080px] mx-auto">
                        <PhotoCarousel label="I shoot what I see." photos={shootPhotos} tone="cream" />
                    </div>
                </section>
            </Reveal>
            <Reveal delay={120}>
                <section className="bg-[var(--cardbg)] border-b border-[var(--hairline)] px-5 sm:px-12 py-12 sm:py-[52px]">
                    <div className="max-w-[1080px] mx-auto">
                        <PhotoCarousel label="Every frame tells a story." photos={naturePhotos} tone="card" />
                    </div>
                </section>
            </Reveal>

            {/* Experience (design #4b) */}
            <Reveal>
                <section className="px-5 sm:px-12 pt-12 sm:pt-14 pb-16 sm:pb-[72px]">
                    <div className="max-w-[1080px] mx-auto flex flex-col gap-[26px]">
                        <h2 className="font-serif text-[36px] sm:text-[46px] text-[var(--ink)]">Experience</h2>
                        <div className="flex flex-col">
                            {experience.map((entry) => (
                                <div
                                    key={`${entry.company}-${entry.dates}`}
                                    className="border-t border-[var(--hairline)] py-[30px] grid grid-cols-1 sm:grid-cols-[260px_1fr] gap-4 sm:gap-8 items-start"
                                >
                                    <div className="font-mono text-[12px] tracking-[0.04em] text-[var(--amber-text)] sm:pt-1.5">
                                        {entry.dates}
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <div className="flex items-baseline gap-3.5 flex-wrap">
                                            <h3 className="font-serif text-[24px] sm:text-[27px] text-[var(--ink)]">{entry.title}</h3>
                                            <div className="text-[15px] text-[var(--faint)]">{entry.company}</div>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {entry.tags.map((tag) => (
                                                <div
                                                    key={tag}
                                                    className="font-mono text-[11px] tracking-[0.05em] bg-[var(--lightgreen)] text-[#3F5B2B] px-2.5 py-1"
                                                >
                                                    {tag}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex flex-col gap-2 mt-1">
                                            {entry.bullets.map((bullet, j) => (
                                                <div key={j} className="flex gap-3 text-[14px] leading-[1.6] text-[var(--muted)]">
                                                    <div className="text-[var(--amber-text)] flex-none">–</div>
                                                    <div className="text-pretty">{bullet}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Reveal>
        </main>
    );
}
