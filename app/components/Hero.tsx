import Image from "next/image"

const Hero = () => {
    return (
        <section className="grid-paper border-b border-[var(--hairline)] px-5 sm:px-12 pt-12 sm:pt-[68px] pb-10 sm:pb-14">
            <div className="max-w-[1080px] mx-auto grid lg:grid-cols-[1.3fr_1fr] gap-11 items-end">
                <div className="flex flex-col gap-[22px]">
                    <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--amber-text)]">
                        $ whoami — senior software engineering associate @ DigitalNEST · Modesto, CA
                    </div>
                    <h1 className="font-serif font-normal text-[clamp(56px,9vw,100px)] leading-[0.9] tracking-[-0.03em] text-[var(--ink)]">
                        Aidan<br />Younathan
                    </h1>
                    <div className="h-[5px] w-[92px] bg-[var(--amber)]" />
                    <p className="text-[19px] leading-[1.55] max-w-[36ch] text-pretty">
                        Full-stack engineer building production web applications and real-time interactive systems — accessible, reliable, maintainable.
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
                <div className="relative hidden lg:block">
                    <Image
                        src="/images/halfDome.jpg"
                        alt="Half Dome, Yosemite"
                        width={900}
                        height={660}
                        priority
                        className="w-full h-[330px] object-cover border border-[var(--hairline-2)]"
                    />
                    <div className="absolute left-3.5 bottom-3.5 bg-[var(--dark)] text-[#F4F2EB] font-mono text-[11px] tracking-[0.08em] px-3 py-[7px] rounded-[3px]">
                        37.7459° N, 119.5332° W
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
