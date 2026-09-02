import { marqueeSkills } from "../data/projects"

const SkillsMarquee = () => {
    const row = (ariaHidden: boolean) => (
        <div
            aria-hidden={ariaHidden}
            className="flex gap-10 pr-10 w-max flex-none items-center"
        >
            {marqueeSkills.map((skill) => (
                <span key={skill} className="flex gap-10 items-center whitespace-nowrap">
                    {skill}
                    <span aria-hidden>·</span>
                </span>
            ))}
        </div>
    )

    return (
        <div className="overflow-hidden bg-[var(--lightgreen)] border-b border-[#C8D9B7] py-[13px]">
            <div className="animate-marquee flex w-max font-mono text-[13px] tracking-[0.1em] uppercase text-[#3F5B2B]">
                {row(false)}
                {row(true)}
            </div>
        </div>
    )
}

export default SkillsMarquee
