'use client'

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const batches = [
    [
        ["JavaScript", "TypeScript", "C#", "Node.js"],
        ["React", "Next.js", "Python", "SQL"],
    ],
    [
        ["RESTful Services", "Git/GitHub", "Jira"],
        ["Production Web Platforms", "CMS-Backed Systems"],
    ],
    [
        ["Postman", "WordPress", "VS Code", "Slack"],
        ["Notion", "Algorithms", "Data Structures"],
    ],
    [
        ["Data Modeling", "Schema Design", "Agile/Scrum"],
        ["Code Reviews", "Backend Service Design"],
    ],
    [
        ["Performance Optimization", "Monitoring"],
        ["Accessibility Standards"],
    ],
]

const pillClass = "bg-[var(--lightgreen)] text-[#555954] text-[18px] font-normal px-4 py-1 rounded-full whitespace-nowrap"

const slideVariants = {
    enter: (d: number) => ({
        x: `${d * 100}%`,
        opacity: 0,
    }),
    center: {
        x: "0%",
        opacity: 1,
    },
    exit: (d: number) => ({
        x: `${d * -100}%`,
        opacity: 0,
    }),
}

const AboutMeComponent = () => {
    const [batchIndex, setBatchIndex] = useState(0)
    const [direction, setDirection] = useState(1)

    const goNext = () => {
        setDirection(1)
        setBatchIndex((prev) => (prev + 1) % batches.length)
    }

    const goPrev = () => {
        setDirection(-1)
        setBatchIndex((prev) => (prev - 1 + batches.length) % batches.length)
    }
    return (
        <div className="flex flex-col mt-20 sm:mt-36 font-sans w-full">
            <div className="flex flex-col sm:grid sm:grid-cols-[320px_1fr] rounded-3xl bg-[var(--cardbg)] p-4 sm:p-6 gap-6 sm:gap-8 w-full">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden min-h-[220px] min-w-[160px] max-w-[320px] mx-auto sm:mx-0">
                    <Image
                        src="/images/aidanonrock.JPG"
                        alt="Aidan on a rock"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="col-span-1">
                    <h2 className="text-2xl sm:text-[32px] font-semibold">Hey, I&apos;m Aidan!</h2>
                    <p className="mt-6 sm:mt-8 text-base sm:text-[18px]">
                        I build production web applications using TypeScript, Next.js, React, Node.js, and PostgreSQL. I focus on shipping maintainable code, improving performance, and delivering accessible user experiences.
                    </p>
                    <p className="mt-4 text-base sm:text-[18px]">
                        I enjoy collaborating with product and design teams to turn ideas into measurable features and improving systems through testing and observability.
                    </p>
                    <div className="mt-8">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                            <h3 className="text-lg sm:text-xl font-black">Tech Stack</h3>
                            <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                <button
                                    onClick={goPrev}
                                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--lightgreen)] text-[#555954] hover:opacity-80 transition-opacity"
                                    aria-label="Previous skills"
                                >
                                    ‹
                                </button>
                                <span className="text-sm text-[#555954]">{batchIndex + 1}/{batches.length}</span>
                                <button
                                    onClick={goNext}
                                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--lightgreen)] text-[#555954] hover:opacity-80 transition-opacity"
                                    aria-label="Next skills"
                                >
                                    ›
                                </button>
                            </div>
                        </div>
                        <div className="mt-2 relative h-20 overflow-hidden">
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={batchIndex}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        type: "tween",
                                        duration: 0.25,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 flex flex-col gap-2 sm:gap-3"
                                >
                                    {batches[batchIndex].map((row, rowIndex) => (
                                        <div key={rowIndex} className="flex gap-2 sm:gap-3 flex-wrap">
                                            {row.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className={pillClass}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                    {/* Remove empty About button for now */}
                </div>
            </div>
        </div>
    )
}

export default AboutMeComponent