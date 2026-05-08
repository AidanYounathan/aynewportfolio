import HeaderComponent from "../components/HeaderComponent";
import ProjectCard from "../components/LargeCardComponent";

const projects = [
    {
        title: "CVYG Check-In",
        image: "/images/cvygCheck.png",
        description: "QR-code-based event check-in system for a church youth group. Built rotating single-use tokens, GPS geofencing, and device fingerprinting for attendance integrity — plus an admin dashboard with analytics and a no-code form builder.",
        tags: ["Next.js + TypeScript", "PostgreSQL", "Prisma"],
        githubLink: "https://github.com/AidanYounathan/cvygcheck",
        websiteLink: "https://cvygcheck.vercel.app",
    },
    {
        title: "Seledon Literacy",
        image: "/images/seledonLiteracy.png",
        description: "Site for the Susie Seledon Literacy Fund, connecting Gilroy families with free books for children ages 0–5. Built enrollment flows, multilingual support, and a content-rich community literacy section.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        websiteLink: "https://seledon-literacy.pages.dev/",
    },
    {
        title: "Brown Issues",
        image: "/images/brownIssues.png",
        description: "WordPress site for a Bay Area digital news publication. Built a custom auto-scrolling marquee and reusable page templates. Led a full accessibility overhaul and SEO initiative that pushed performance scores to 85–90+.",
        tags: ["WordPress", "Accessibility", "SEO"],
        websiteLink: "https://brownissuestv.org/",
    },
    {
        title: "One Dex",
        image: "/images/oneDex.png",
        description: "Pokedex-style single-page app consuming the public Pokemon API. Focused on performant search, filtering, and a lightweight, accessible UI built with React and TypeScript.",
        tags: ["Next.js + TypeScript", "Tailwind CSS", "REST API"],
        githubLink: "https://github.com/AidanYounathan/younathanapokemonapireactbuild",
        websiteLink: "https://younathanapokemonapireactbuild.vercel.app/",
    },
    {
        title: "Most Influential Person",
        image: "/images/tylerImg.png",
        description: "Content-driven site emphasizing accessibility and SEO. Built a simple content pipeline and responsive templates to improve readability and load performance.",
        tags: ["React", "Markdown", "Tailwind CSS"],
        githubLink: "https://github.com/AidanYounathan/AYTylerFanRedo.git",
        websiteLink: "https://ay-tyler-fan-redo.vercel.app",
    },
    {
        title: "Tip Calculator",
        image: "/images/tipCalculator.png",
        description: "Frontend-focused UI implementation based on a design challenge. Delivered pixel-accurate layout, input validation, and a mobile-first experience using Next.js and TypeScript.",
        tags: ["React", "TypeScript", "Tailwind CSS"],
    },
];

export default function Work() {
    return (
        <main className="min-h-screen w-full flex flex-col items-center bg-[var(--background)] font-sans">
            <HeaderComponent />
            <section className="w-full max-w-5xl px-4 py-12 sm:py-16">
                <h1 className="text-3xl sm:text-5xl font-bold text-[#555954] tracking-tight">My Works</h1>
                <div className="mt-10 flex flex-col gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </section>
        </main>
    );
}
