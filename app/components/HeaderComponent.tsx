'use client'
import Link from "next/link"

const HeaderComponent = () => {
    return (
        <nav className="sticky top-0 z-50 flex justify-center py-6 bg-[var(--background)]/80 backdrop-blur-md">
            <ul className="flex flex-wrap bg-[var(--lightgreen)] text-base sm:text-lg gap-8 sm:gap-16 py-3 px-6 sm:py-4 sm:px-8 rounded-full list-none font-sans shadow-md">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/work">Work</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default HeaderComponent