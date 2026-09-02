const Footer = () => {
    return (
        <footer className="flex flex-col sm:flex-row gap-3 justify-between items-center px-5 sm:px-12 py-5 bg-[var(--ink)] text-[#9AA095] font-mono text-[12px]">
            <div>© {new Date().getFullYear()} Aidan Younathan — Modesto, CA</div>
            <div className="flex gap-6">
                <a
                    href="https://github.com/AidanYounathan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F4F2EB] transition-colors"
                >
                    github ↗
                </a>
                <a
                    href="https://www.linkedin.com/in/aidan-younathan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F4F2EB] transition-colors"
                >
                    linkedin ↗
                </a>
                <a
                    href="/Aidan_Younathan_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F4F2EB] transition-colors"
                >
                    resume ↓
                </a>
            </div>
        </footer>
    )
}

export default Footer
