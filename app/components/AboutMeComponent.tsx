'use client'

import Image from "next/image"

const AboutMeComponent = () => {
    return (
        <div className="flex flex-col mt-36 font-[family-name:var(--font-manrope)]">
            <div className="grid grid-cols-[400px_1fr] rounded-3xl bg-[var(--cardbg)] p-6 gap-8 w-full">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                    <Image
                        src="/images/aidanonrock.JPG"
                        alt="Aidan on a rock"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="col-span-1">
                    <h2 className="text-[32px] font-semibold">Hey, I&apos;m Aidan!</h2>
                    <p className="mt-2 text-[18px]">
                        I build production web applications using TypeScript, Next.js, React, Node.js, and PostgreSQL. I focus on shipping maintainable code, improving performance, and delivering accessible user experiences.
                    </p>
                    <p className="mt-2 text-[18px]">
                        I enjoy collaborating with product and design teams to turn ideas into measurable features and improving systems through testing and observability.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMeComponent