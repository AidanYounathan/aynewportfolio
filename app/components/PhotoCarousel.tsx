"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

type Photo = { src: string; alt: string };

type Props = {
    label: string;
    photos: Photo[];
};

export default function PhotoCarousel({ label, photos }: Props) {
    const [center, setCenter] = useState(0);
    const n = photos.length;

    const go = (d: 1 | -1) => setCenter(c => (c + d + n) % n);

    const visible = [
        { photo: photos[(center - 1 + n) % n], isCenter: false },
        { photo: photos[center],                isCenter: true  },
        { photo: photos[(center + 1) % n],      isCenter: false },
    ];

    return (
        <section className="w-full max-w-5xl px-4 mt-20">
            <div className="flex items-center justify-between mb-6">
                <p className="text-2xl sm:text-3xl font-bold text-[#555954]">{label}</p>
                <div className="flex gap-2">
                    <button
                        onClick={() => go(-1)}
                        aria-label="Previous"
                        className="w-10 h-10 rounded-full border-2 border-[#406B2A] flex items-center justify-center text-[#406B2A] hover:bg-[#f0f5f1] transition-colors text-lg"
                    >
                        ←
                    </button>
                    <button
                        onClick={() => go(1)}
                        aria-label="Next"
                        className="w-10 h-10 rounded-full bg-[#406B2A] flex items-center justify-center text-[#F5F0E8] hover:opacity-90 transition-opacity text-lg"
                    >
                        →
                    </button>
                </div>
            </div>
            <LayoutGroup id={label}>
                <div className="flex gap-3 items-end">
                    <AnimatePresence mode="popLayout" initial={false}>
                        {visible.map(({ photo, isCenter }) => (
                            <motion.div
                                key={photo.src}
                                layoutId={`${label}::${photo.src}`}
                                className={`relative rounded-2xl overflow-hidden ${isCenter ? "flex-[2]" : "flex-[1]"}`}
                                style={{ aspectRatio: "4/3" }}
                                animate={{ opacity: isCenter ? 1 : 0.6 }}
                                initial={{ opacity: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            >
                                <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </LayoutGroup>
        </section>
    );
}
