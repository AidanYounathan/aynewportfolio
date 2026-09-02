import type { Metadata } from "next";
import { work } from "../data/projects";
import Reveal from "../components/Reveal";
import WorkRow from "../components/WorkRow";

export const metadata: Metadata = {
    title: "Work — Aidan Younathan",
};

export default function Work() {
    return (
        <main className="min-h-screen w-full bg-[var(--background)] font-sans">
            <Reveal>
                <section className="grid-paper border-b border-[var(--hairline)] px-5 sm:px-12 pt-12 sm:pt-[60px] pb-5">
                    <div className="max-w-[1080px] mx-auto">
                        <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--amber-text)]">
                            $ ls ~/projects — {work.length} entries
                        </div>
                        <h1 className="mt-3.5 font-serif font-normal text-[clamp(48px,7vw,76px)] leading-[0.95] tracking-[-0.03em] text-[var(--ink)]">
                            My Works
                        </h1>
                        <div className="h-[5px] w-[92px] bg-[var(--amber)] mt-[22px] mb-10" />
                    </div>
                </section>
            </Reveal>

            <Reveal delay={60}>
                <section className="px-5 sm:px-12 pt-3 pb-16 sm:pb-[68px]">
                    <div className="max-w-[1080px] mx-auto flex flex-col">
                        {work.map((project, i) => (
                            <WorkRow key={project.title} project={project} mark={"0" + (i + 1)} variant="work" />
                        ))}
                    </div>
                </section>
            </Reveal>
        </main>
    );
}
