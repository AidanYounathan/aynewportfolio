'use client'
import { motion } from 'framer-motion'

const HeaderComponent = () => {
    return (
        <div className="flex flex-col items-start mt-10 sm:mt-14 w-full">
            <div className="text-3xl sm:text-[64px] font-bold text-[var(--foreground)] w-full">
                <h1 className="leading-[1.2] mb-3">
                    <span className="block">Aidan</span>
                    <span className="block">Younathan</span>
                </h1>
                <p className="text-lg sm:text-2xl font-semibold text-[#555954] max-w-2xl">Software engineer building end-to-end systems with a focus on accessibility, reliability, and maintainable architecture.</p>
                <div className="flex flex-row gap-3 sm:gap-4 mt-8 sm:mt-14">
                    <a
                        href="/Aidan_Younathan_Resume.pdf"
                        download='Aidan_Younathan_Resume.pdf'
                        className="px-6 py-2 bg-[#406B2A] text-white rounded-full font-semibold text-lg sm:text-xl hover:bg-[#234A31] transition-colors text-center"
                    >
                        Resume
                    </a>
                    <a
                        href="https://www.linkedin.com/in/aidan-younathan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-white text-[#2D5A3D] border-2 border-[#406B2A] rounded-full font-semibold text-lg sm:text-xl hover:bg-[#f0f5f1] transition-colors text-center"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent