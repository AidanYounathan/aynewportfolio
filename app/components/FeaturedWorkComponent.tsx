import Link from "next/link"
import { featuredProjects } from "../data/projects"
import WorkRow from "./WorkRow"

const FeaturedWork = () => {
    return (
        <section className="px-5 sm:px-12 pt-12 sm:pt-[52px] pb-16 sm:pb-[68px]">
            <div className="max-w-[1080px] mx-auto flex flex-col gap-5">
                <div className="flex items-baseline justify-between">
                    <h2 className="font-serif text-[36px] sm:text-[46px] text-[var(--ink)]">Featured work</h2>
                    <Link
                        href="/work"
                        className="font-mono text-[13px] text-[var(--amber-text)] hover:text-[var(--forestgreen)] transition-colors"
                    >
                        all projects ↗
                    </Link>
                </div>
                <div className="flex flex-col">
                    {featuredProjects.map((project, i) => (
                        <WorkRow key={project.title} project={project} mark={"0" + (i + 1)} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedWork
