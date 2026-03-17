'use client'
import { motion } from 'framer-motion'

const HeaderComponent = () => {
    return (
        <div className=" flex mt-14 font-(family-name:--font-manrope)">
            <div className="text-[64px] font-bold text-var(--foreground)">
                <h1 className="leading-[1.2] mb-3">
                    <span className="block">Aidan</span>
                    <span className="block">Younathan</span>
                </h1>
                <p className="text-2xl font-semibold text-[#555954]">Software engineer building end-to-end systems with a focus on accessibility, reliability, and maintainable architecture.</p>
                <div className="flex gap-4 mt-14">
                    <a
                        href="/Aidan_Younathan_Resume.pdf"
                        download='Aidan_Younathan_Resume.pdf'
                        className="px-6 py-1 bg-[#406B2A] text-white rounded-full font-semibold text-xl hover:bg-[#234A31] transition-colors"
                    >
                        Resume
                    </a>
                    <a
                        href="https://www.linkedin.com/in/aidan-younathan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-1 bg-white text-[#2D5A3D] border-2 border-[#406B2A] rounded-full font-semibold text-xl hover:bg-[#f0f5f1] transition-colors"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent