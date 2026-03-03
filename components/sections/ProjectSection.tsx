"use client"

import { useState } from "react"
import { cvData } from "@/lib/data"
import { BrutalCard } from "@/components/ui/BrutalCard"
import { BrutalBadge } from "@/components/ui/BrutalBadge"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

// Carousel Component for Project Images
function ProjectGallery({ images, title, className = "" }: { images: string[], title: string, className?: string }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length)
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)

    // Wait for client to render due to image error handling
    const [imgError, setImgError] = useState<Record<string, boolean>>({})

    const handleImageError = (img: string) => {
        setImgError(prev => ({ ...prev, [img]: true }))
    }

    // Determine if we have any valid images
    const currentImage = images[currentIndex];
    const hasError = imgError[currentImage];
    const totalImgs = images.length;

    return (
        <div className={`relative w-full h-full aspect-video bg-muted overflow-hidden group ${className}`}>
            {hasError ? (
                // Placeholder when image is missing or errors
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-accent/20 bg-dot-pattern">
                    <div className="w-20 h-20 border-4 border-border brutal-shadow bg-main mb-4 flex items-center justify-center">
                        <span className="font-heading font-black text-4xl text-main-foreground">P</span>
                    </div>
                    <span className="font-sans font-bold text-foreground/50 uppercase tracking-widest text-lg">Screenshot Placeholder</span>
                </div>
            ) : (
                <img
                    src={`/projects/${currentImage}`}
                    alt={`${title} screenshot ${currentIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                    onError={() => handleImageError(currentImage)}
                />
            )}

            {/* Navigation Controls (Only show if more than 1 image) */}
            {totalImgs > 1 && (
                <>
                    <button
                        onClick={(e) => { e.preventDefault(); prevSlide(); }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-4 border-border brutal-shadow flex items-center justify-center hover:bg-main hover:text-main-foreground transition-colors z-10"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>

                    <button
                        onClick={(e) => { e.preventDefault(); nextSlide(); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-4 border-border brutal-shadow flex items-center justify-center hover:bg-main hover:text-main-foreground transition-colors z-10"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-white border-4 border-border px-3 py-2 brutal-shadow">
                        {images.map((_, i) => (
                            <div
                                key={i}
                                className={`w-3 h-3 border-2 border-border ${i === currentIndex ? 'bg-main' : 'bg-transparent'}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export function ProjectSection() {
    return (
        <section id="proyek" className="py-24 px-6 md:px-12 lg:px-20 border-t-4 border-border bg-background">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <h2 className="text-5xl md:text-7xl font-heading font-black uppercase inline-block border-b-8 border-main pb-2 pr-8">
                            Proyek
                            <span className="block text-xl md:text-2xl mt-2 text-main">.Featured Work</span>
                        </h2>
                        <p className="font-sans font-bold text-foreground/80 max-w-md text-lg">
                            Implementasi nyata penyelesaian masalah tata kelola informasi dengan estetika dan teknologi modern.
                        </p>
                    </div>

                    <div className="flex flex-col gap-16 lg:gap-24">
                        {cvData.proyek.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                {project.link ? (
                                    <a href={project.link} target="_blank" rel="noreferrer" className="group block focus:outline-none">
                                        <ProjectCardContent project={project} isLink index={index} />
                                    </a>
                                ) : (
                                    <div className="group block">
                                        <ProjectCardContent project={project} isLink={false} index={index} />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

type ProjectType = {
    id: string;
    nama: string;
    tech: string[];
    link: string;
    images: string[];
    deskripsi: string[];
};

function ProjectCardContent({ project, isLink, index }: { project: ProjectType, isLink: boolean, index: number }) {
    const isEven = index % 2 === 0;

    return (
        <BrutalCard
            className={`flex flex-col p-0 overflow-hidden transition-all duration-300 ${isLink ? 'group-hover:-translate-y-2 group-hover:shadow-[12px_12px_0_#111111]' : ''}`}
            color="white"
        >
            <div className={`w-full border-b-4 border-border relative z-0`}>
                <ProjectGallery images={project.images} title={project.nama} />

                {/* Decorative absolute element */}
                <div className={`absolute top-4 ${isEven ? 'left-4' : 'right-4'} z-20 pointer-events-none`}>
                    <div className="bg-accent text-accent-foreground font-mono font-bold text-sm px-3 py-1 border-2 border-border brutal-shadow inline-block uppercase">
                        PROYEK_0{index + 1}
                    </div>
                </div>
            </div>

            <div className="w-full p-8 md:p-10 lg:p-12 flex flex-col relative z-10 bg-muted/10 items-start">
                <div className="flex justify-between items-start gap-4 mb-6 w-full">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading group-hover:text-main transition-colors leading-tight">
                        {project.nama}
                    </h3>
                    {isLink && (
                        <div className="shrink-0 mt-2 w-10 h-10 border-4 border-border shadow-[4px_4px_0_#111111] flex items-center justify-center bg-white group-hover:bg-main group-hover:text-main-foreground group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[6px_6px_0_#111111] transition-all">
                            <ExternalLink className="w-5 h-5" />
                        </div>
                    )}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t: string, i: number) => (
                        <BrutalBadge key={i} color="white" className="border-main text-foreground font-bold text-xs uppercase tracking-widest px-3 py-1">
                            {t}
                        </BrutalBadge>
                    ))}
                </div>

                <div className="space-y-4 font-sans font-medium text-foreground/90 mt-auto text-lg">
                    {project.deskripsi.map((desc: string, i: number) => (
                        <p key={i}>{desc}</p>
                    ))}
                </div>
            </div>
        </BrutalCard>
    )
}
