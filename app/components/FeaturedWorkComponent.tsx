import ProjectCard from "./LargeCardComponent"
import SmallProjectCard from "./SmallCardComponent"






const FeaturedWork = () => {
    return (
        <div className="mt-16">
            <div className="">
                <h2 className="text-5xl text-var(--grey)">Featured Work</h2>
            </div>
            {/* Big container */}
            <div className="mt-10">
                <ProjectCard
                    title="Tip Calculator"
                    image="/images/tipCalculator.png"
                    description="Frontend-focused UI implementation based on a design challenge. Delivered pixel‑accurate layout, input validation, and a mobile-first experience using Next.js and TypeScript."
                    tags={["React", "TypeScript", "Tailwind CSS"]}
                    githubLink="https://github.com"
                    websiteLink="https://example.com"
                />
            </div>
            {/* Small containers */}
            <div className="grid grid-cols-2 gap-4 mt-4">
                <SmallProjectCard
                    title="Most Influential Person"
                    image="/images/tylerImg.png"
                    description="Content-driven site emphasizing accessibility and SEO. Built a simple content pipeline and responsive templates to improve readability and load performance."
                    tags={["React", "Markdown", "Tailwind CSS"]}
                    githubLink="https://github.com/AidanYounathan/YounathanAInfluentialPersonWebsite"
                    websiteLink="https://younathan-a-influential-person-website.vercel.app/"
                />
                <SmallProjectCard
                    title="One Dex"
                    image="/images/oneDexImg.png"
                    description="Pokedex-style single-pagae app consuming the public Pokemon API. Focused on performant search, filtering, and a lightweight, accessible UI built with React and TypeScript."
                    tags={["Next.js", "Node.js"]}
                    githubLink="https://github.com/AidanYounathan/younathanapokemonapireactbuild"
                    websiteLink="https://younathanapokemonapireactbuild.vercel.app/"
                />
            </div>
        </div>
    )
}


export default FeaturedWork