"use client";
import ProjectCard from "./LargeCardComponent";
import SmallProjectCard from "./SmallCardComponent";

const FeaturedWork = () => {
    return (
        <section className="mt-16 w-full max-w-5xl mx-auto ">
            <header className="mb-10">
                <h2 className="text-3xl sm:text-5xl font-bold text-[#555954] tracking-tight">Featured Work</h2>
            </header>
            <div className="flex flex-col gap-6">
                {/* Large card on desktop/tablet, small card on mobile */}
                <div className="hidden sm:block">
                    <ProjectCard
                        title="CVYG Check-In"
                        image="/images/cvygCheck.png"
                        description="QR-code-based event check-in system for a church youth group. Built rotating single-use tokens, GPS geofencing, and device fingerprinting for attendance integrity — plus an admin dashboard with analytics and a no-code form builder."
                        tags={["Next.js + TypeScript", "PostgreSQL", "Prisma"]}
                        githubLink="https://github.com/AidanYounathan/cvygcheck"
                        websiteLink="https://cvygcheck.vercel.app"
                    />
                </div>
                <div className="block sm:hidden">
                    <SmallProjectCard
                        title="CVYG Check-In"
                        image="/images/cvygCheck.png"
                        description="QR-code-based event check-in system for a church youth group. Built rotating single-use tokens, GPS geofencing, and device fingerprinting for attendance integrity — plus an admin dashboard with analytics and a no-code form builder."
                        tags={["Next.js + TypeScript", "PostgreSQL", "Prisma"]}
                        githubLink="https://github.com/AidanYounathan/cvygcheck"
                        websiteLink="https://cvygcheck.vercel.app"
                    />
                </div>
                {/* Small cards grid, responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <SmallProjectCard
                        title="Seledon Literacy"
                        image="/images/seledonLiteracy.png"
                        description="Site for the Susie Seledon Literacy Fund, connecting Gilroy families with free books for children ages 0–5. Built enrollment flows, multilingual support, and a content-rich community literacy section."
                        tags={["Next.js", "TypeScript", "Tailwind CSS"]}
                        websiteLink="https://seledon-literacy.pages.dev/"
                    />
                    <SmallProjectCard
                        title="Brown Issues"
                        image="/images/brownIssues.png"
                        description="WordPress site for a Bay Area digital news publication. Built a custom auto-scrolling marquee and reusable page templates. Led a full accessibility overhaul and SEO initiative that pushed performance scores to 85–90+."
                        tags={["WordPress", "Accessibility", "SEO"]}
                        websiteLink="https://brownissuestv.org/"
                    />
                </div>
            </div>
        </section>
    );
};


export default FeaturedWork