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
                        title="One Dex"
                        image="/images/oneDexImg2.png"
                        description="Pokedex-style single-pagae app consuming the public Pokemon API. Focused on performant search, filtering, and a lightweight, accessible UI built with React and TypeScript."
                        tags={["Next.js + TypeScript", "Tailwind CSS", "REST API"]}
                        githubLink="https://github.com/AidanYounathan/younathanapokemonapireactbuild"
                        websiteLink="https://younathanapokemonapireactbuild.vercel.app/"
                    />
                </div>
                <div className="block sm:hidden">
                    <SmallProjectCard
                        title="One Dex"
                        image="/images/oneDexImg2.png"
                        description="Pokedex-style single-pagae app consuming the public Pokemon API. Focused on performant search, filtering, and a lightweight, accessible UI built with React and TypeScript."
                        tags={["Next.js + TypeScript", "Tailwind CSS", "REST API"]}
                        githubLink="https://github.com/AidanYounathan/younathanapokemonapireactbuild"
                        websiteLink="https://younathanapokemonapireactbuild.vercel.app/"
                    />
                </div>
                {/* Small cards grid, responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <SmallProjectCard
                        title="Most Influential Person"
                        image="/images/tylerImg.png"
                        description="Content-driven site emphasizing accessibility and SEO. Built a simple content pipeline and responsive templates to improve readability and load performance."
                        tags={["React", "Markdown", "Tailwind CSS"]}
                        githubLink="https://github.com/AidanYounathan/AYTylerFanRedo.git"
                        websiteLink="https://ay-tyler-fan-redo.vercel.app"
                    />
                    <SmallProjectCard
                        title="Tip Calculator"
                        image="/images/tipCalculator.png"
                        description="Frontend-focused UI implementation based on a design challenge. Delivered pixel‑accurate layout, input validation, and a mobile-first experience using Next.js and TypeScript."
                        tags={["React", "TypeScript", "Tailwind CSS"]}
                        githubLink="https://github.com"
                        websiteLink="https://example.com"
                    />
                </div>
            </div>
        </section>
    );
};


export default FeaturedWork