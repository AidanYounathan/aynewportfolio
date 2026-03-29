import Image from "next/image"

type ProjectCardProps = {
    title: string
    image: string
    description?: string
    tags?: string[]
    githubLink?: string
    websiteLink?: string
}


const SmallProjectCard = ({ title, image, description, tags, githubLink, websiteLink }: ProjectCardProps) => {
    return (
        <div className="rounded-3xl bg-(--cardbg) p-4 w-full">
            <div className="relative w-full aspect-2/1 overflow-hidden rounded-xl">
                <Image className="object-cover" src={image} alt={title} fill />
            </div>
            <div className="mt-4">
                <h3 className="text-[20px] text-var(--grey)">{title}</h3>
                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="bg-(--lightgreen) text-[#555954] text-[12px] font-normal px-3 py-0.5 rounded-full whitespace-nowrap"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {description && <p className="mt-3 text-sm md:text-[18px] text-var(--grey)">{description}</p>}

                <div className="mt-4 flex justify-end gap-2">
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
                            <Image src="/images/arrow.svg" alt="arrow" width={12} height={12} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SmallProjectCard