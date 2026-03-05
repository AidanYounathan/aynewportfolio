'use client'
import Link from "next/link"

const HeaderComponent = () => {
    return (
        <nav className="sticky top-0 z-50 flex justify-center py-10">
            <ul className="flex bg-[var(--lightgreen)] text-lg gap-16 py-4 px-8 rounded-[100px] list-none font-[family-name:var(--font-manrope)]">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/work">Work</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default HeaderComponent