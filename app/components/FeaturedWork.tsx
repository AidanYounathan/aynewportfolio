import Image from "next/image"


const FeaturedWork = () => {
    return (
        <div className="mt-16">
            <div className="">
                <h2 className="text-5xl text-var(--grey)">Featured Work</h2>
            </div>
            {/* Big container */}
            <div className="mt-10 rounded-3xl bg-(--cardbg) p-6 gap-8 w-full">
                <Image className="rounded-md" src="/path/to/image.jpg" alt="Featured Work" width={800} height={400} />
                <h3 className="text-2xl text-var(--grey)">Project Title</h3>
            </div>
            {/* Small containers */}
            <div className="grid grid-cols-2">

            </div>
        </div>
    )
}


export default FeaturedWork