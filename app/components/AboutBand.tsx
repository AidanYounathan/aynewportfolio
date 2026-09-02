import Terminal from "./Terminal"

const stats = [
    { value: "85–90+", label: "Lighthouse" },
    { value: "4", label: "In production" },
    { value: "3", label: "Engineers led" },
]

const AboutBand = () => {
    return (
        <section className="bg-[var(--cardbg)] border-b border-[var(--hairline)] px-5 sm:px-12 py-12 sm:py-14">
            <div className="max-w-[1080px] mx-auto grid lg:grid-cols-[470px_1fr] gap-11 items-center">
                <Terminal />
                <div className="flex flex-col gap-[18px]">
                    <h2 className="font-serif text-[40px] text-[var(--ink)]">Hey, I&apos;m Aidan</h2>
                    <p className="text-[17px] leading-[1.7] text-pretty">
                        I&apos;m a full-stack engineer at DigitalNEST, promoted to Senior Software Engineering Associate within a year — I lead a team of three engineers and own client projects end to end, from scoping through deployment.
                    </p>
                    <p className="text-[17px] leading-[1.7] text-pretty">
                        My work spans accessibility engineering on high-revenue production platforms, real-time computer vision for public installations, and independently built apps serving real users.
                    </p>
                    <div className="flex flex-wrap gap-[26px] mt-1">
                        {stats.map(({ value, label }) => (
                            <div key={label} className="flex flex-col gap-0.5">
                                <div className="font-mono text-[24px] text-[var(--ink)]">{value}</div>
                                <div className="text-[13px] text-[#7C8178]">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutBand
