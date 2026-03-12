import Image from "next/image"


type ProjectCardProps = {
    title: string
    image: string
    description?: string
    tags?: string[]
    githubLink?: string
    websiteLink?: string
}

const ProjectCard = ({ title, image, description, tags, githubLink, websiteLink }: ProjectCardProps) => {
    return (
        <div className="rounded-3xl bg-(--cardbg) p-6 w-full">
            <div className="relative w-full aspect-2/1 overflow-hidden rounded-xl">
                <Image className="object-cover" src={image} alt={title} fill />
            </div>
            <div className="mt-8">
                <div className="flex items-center justify-between">
                    <h3 className="text-[32px] text-var(--grey)">{title}</h3>
                    {tags && tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-(--lightgreen) text-[#555954] text-[16px] font-normal px-4 py-1 rounded-full whitespace-nowrap"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {description && <p className="mt-6 text-var(--grey)">{description}</p>}

                <div className="mt-6 flex justify-end gap-3">
                    {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-1 bg-white text-[#2D5A3D] border-2 border-[#406B2A] rounded-full font-semibold text-xl hover:bg-[#f0f5f1] transition-colors"
                        >
                            GitHub
                        </a>
                    )}
                    {websiteLink && (
                        <a
                            href={websiteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-1 bg-[#406B2A] text-[#F5F0E8] border-2 border-[#406B2A] rounded-full font-semibold text-xl hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                        >
                            Website
                            <span className="text-xl"></span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

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
            <div className="grid grid-cols-2 gap-6 mt-6">

            </div>
        </div>
    )
}


export default FeaturedWork