"use client";
import Image from "next/image";
import { useState } from "react";

type Photo = { src: string; alt: string };

type Props = {
    label: string;
    photos: Photo[];
    /** background of the band the carousel sits on — controls the prev-arrow hover fill */
    tone?: "cream" | "card";
};

// About-page carousel (design #4b): three visible slots, center emphasized
// (flex 2 / opacity 1 vs flex 1 / opacity 0.55), wrap-around navigation.
export default function PhotoCarousel({ label, photos, tone = "cream" }: Props) {
    const [center, setCenter] = useState(0);
    const n = photos.length;

    const go = (d: 1 | -1) => setCenter(c => (c + d + n) % n);

    const visible = [-1, 0, 1].map(d => ({
        photo: photos[(center + d + n) % n],
        isCenter: d === 0,
    }));

    const prevHover = tone === "card" ? "hover:bg-[var(--background)]" : "hover:bg-[var(--cardbg)]";

    return (
        <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-baseline gap-[18px] min-w-0">
                    <h2 className="font-serif text-[28px] sm:text-[38px] text-[var(--ink)]">{label}</h2>
                    <div className="font-mono text-[12px] text-[var(--faint)] whitespace-nowrap">
                        {center + 1} / {n}
                    </div>
                </div>
                <div className="flex gap-2.5">
                    <button
                        onClick={() => go(-1)}
                        aria-label="Previous photo"
                        className={`cursor-pointer w-[42px] h-[42px] border border-[#C6C2B5] flex items-center justify-center text-[17px] text-[var(--forestgreen)] transition-colors hover:border-[var(--forestgreen)] ${prevHover}`}
                    >
                        ←
                    </button>
                    <button
                        onClick={() => go(1)}
                        aria-label="Next photo"
                        className="cursor-pointer w-[42px] h-[42px] bg-[var(--forestgreen)] text-[#FFFDF6] flex items-center justify-center text-[17px] transition-colors hover:bg-[var(--forestgreen-deep)]"
                    >
                        →
                    </button>
                </div>
            </div>
            <div className="flex gap-3 items-end h-[220px] sm:h-[300px]">
                {visible.map(({ photo, isCenter }, slot) => (
                    <div
                        key={slot}
                        className="h-full overflow-hidden transition-[flex,opacity] duration-[400ms] ease-[ease]"
                        style={{ flex: isCenter ? 2 : 1, opacity: isCenter ? 1 : 0.55 }}
                    >
                        <Image
                            src={photo.src}
                            alt={photo.alt}
                            width={800}
                            height={600}
                            className="w-full h-full object-cover block"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
