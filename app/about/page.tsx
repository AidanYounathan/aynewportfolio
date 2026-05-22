import HeaderComponent from "../components/HeaderComponent";
import Image from "next/image";
import PhotoCarousel from "../components/PhotoCarousel";

const shootingPhotos = [
    { src: "/images/halfDome.jpg", alt: "Half Dome" },
    { src: "/images/hikingGranite.jpg", alt: "Hiking granite" },
    { src: "/images/yosemiteValley.jpg", alt: "Yosemite valley" },
    { src: "/images/E6E7A27B-AA2D-4A6C-9DFB-AA94C812AEA4_1_105_c.jpeg", alt: "Yosemite panoramic" },
    { src: "/images/aidanonrock.JPG", alt: "Rock climbing" },
];

const naturePhotos = [
    { src: "/images/EC867AEB-7134-484C-B686-3A0E6259B7E3_1_105_c.jpeg", alt: "Misty beach" },
    { src: "/images/5F7D56C0-6683-46F3-9403-ECF5405EA876_1_105_c.jpeg", alt: "Ocean bay" },
    { src: "/images/EE18136C-234A-4C55-A90D-76B7DF230340_1_105_c.jpeg", alt: "Golden Gate Bridge" },
    { src: "/images/9312424D-400B-41B1-9A0E-505DBEA27117_1_105_c.jpeg", alt: "Golden Gate structure" },
    { src: "/images/F9CC4FFE-7AA6-4999-8DBD-280FD2A9C89C_1_105_c.jpeg", alt: "Mission district mural" },
];

const experience = [
    {
        dates: "September 2025 – Present",
        title: "Software Engineer",
        company: "DigitalNEST",
        tags: ["React", "Next.js", "WordPress", "Node.js"],
        bullets: [
            "Led accessibility and SEO overhauls on client production sites, implementing ARIA standards, semantic HTML, and structured content improvements that pushed Lighthouse scores into the 85–90+ range.",
            "Shipped client-facing features across React, Next.js, WordPress, and Node.js, including animated page sections, reusable component libraries, and responsive layouts for external partners.",
            "Integrated AI-assisted development tools, including Copilot and Claude, into daily engineering workflows and evaluated new tooling for team-wide adoption.",
            "Delivered features through Agile sprint planning, standups, code reviews, and pair programming alongside cross-functional engineering and design teammates.",
        ],
    },
    {
        dates: "June 2024 – December 2024",
        title: "Software Engineer",
        company: "Trinchero Family Estates",
        tags: ["React", "TypeScript", "WCAG", "REST APIs"],
        bullets: [
            "Refactored and modernized legacy React-based e-commerce platforms generating $1.8M+ annually, improving sales conversion by 10%.",
            "Led accessibility upgrade across product suite, raising WCAG 2.2 AA compliance by 30% to expand user inclusivity.",
            "Built reusable UI components and API integrations across 600+ hours of hands-on development.",
            "Debugged legacy React code paths to resolve production issues across business-critical e-commerce flows, coordinating fixes with engineering and QA.",
        ],
    },
    {
        dates: "September 2023 – September 2024",
        title: "Apprentice Software Engineer",
        company: "CodeStack Academy",
        tags: ["Next.js", "C#/.NET", "TypeScript", "React"],
        bullets: [
            "Led a 3-person Agile team building a full-stack web application using Next.js and C#/.NET, including PR management, sprint planning, standups, and conflict resolution.",
            "Completed full-stack development training across 1,100+ hours, covering REST APIs, cloud deployment, and peer reviews.",
            "Delivered 8 solo web applications demonstrating proficiency in React, TypeScript, and responsive UI development.",
            "Owned end-to-end project lifecycle on solo builds, from requirements and design through deployment and technical documentation.",
        ],
    },
];

export default function About() {
    return (
        <main className="min-h-screen w-full flex flex-col items-center bg-[var(--background)] font-sans">
            <HeaderComponent />

            {/* Hero */}
            <section className="w-full max-w-5xl px-4 pt-12 sm:pt-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl">
                        <Image
                            src="/images/aidanonrock.JPG"
                            alt="Aidan rock climbing"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h1 className="text-3xl sm:text-5xl font-bold text-[#555954] tracking-tight">
                            Hey, I'm Aidan
                        </h1>
                        <p className="mt-4 text-base sm:text-lg text-[#555954]">
                            I'm a software developer located in California.
                        </p>
                        <p className="mt-2 text-base sm:text-lg text-[#555954]">
                            When I'm off the clock I love taking photos. Scroll to see some pictures.
                        </p>
                        <div className="mt-6 flex gap-3 flex-wrap">
                            <a
                                href="https://linkedin.com/in/aidan-younathan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 bg-white text-[#2D5A3D] border-2 border-[#406B2A] rounded-full font-semibold text-lg hover:bg-[#f0f5f1] transition-colors"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="/Aidan_Younathan_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 bg-[#406B2A] text-[#F5F0E8] border-2 border-[#406B2A] rounded-full font-semibold text-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                            >
                                Resume
                                <Image src="/images/arrow.svg" alt="" width={12} height={12} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <PhotoCarousel label="I shoot what I see." photos={shootingPhotos} />
            <PhotoCarousel label="Every frame tells a story." photos={naturePhotos} />

            {/* Experience */}
            <section className="w-full max-w-5xl px-4 mt-20 pb-20">
                <h2 className="text-3xl sm:text-5xl font-bold text-[#555954] tracking-tight">Experience</h2>
                <div className="mt-10 flex flex-col gap-10">
                    {experience.map((entry, i) => (
                        <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-8">
                            <p className="text-base sm:text-lg text-[#555954]">{entry.dates}</p>
                            <div>
                                <p className="text-xl sm:text-2xl font-semibold text-[#555954]">{entry.title}</p>
                                <p className="mt-1 text-base text-[#555954] opacity-60">{entry.company}</p>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {entry.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-(--lightgreen) text-[#555954] text-sm font-normal px-3 py-1 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <ul className="mt-4 flex flex-col gap-2">
                                    {entry.bullets.map((bullet, j) => (
                                        <li key={j} className="text-sm sm:text-base text-[#555954] opacity-80 pl-4 relative before:content-['–'] before:absolute before:left-0">
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
