import Image from "next/image"

const figures = [
    { src: "/images/yosemiteValley.jpg", alt: "Yosemite Valley", label: "FIG. 01 — VALLEY", accent: false },
    { src: "/images/hikingGranite.jpg", alt: "Hiking granite in Yosemite", label: "FIG. 02 — GRANITE", accent: false },
    { src: "/images/halfDome.jpg", alt: "Half Dome", label: "FIG. 03 — EL 8,842", accent: true },
]

const FigRow = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-[var(--hairline)]">
            {figures.map(({ src, alt, label, accent }) => (
                <div
                    key={label}
                    className="relative sm:not-last:border-r max-sm:not-last:border-b border-[var(--hairline)]"
                >
                    <Image
                        src={src}
                        alt={alt}
                        width={720}
                        height={420}
                        className="w-full h-[210px] object-cover block saturate-[0.85]"
                    />
                    <div
                        className={`absolute left-3 bottom-3 font-mono text-[10px] tracking-[0.1em] bg-[var(--background)] px-2 py-1 ${accent ? "text-[var(--amber-text)]" : "text-[var(--muted)]"}`}
                    >
                        {label}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FigRow
