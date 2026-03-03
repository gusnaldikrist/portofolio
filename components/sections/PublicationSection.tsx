"use client"

import { cvData } from "@/lib/data"
import { BrutalCard } from "@/components/ui/BrutalCard"
import { BrutalBadge } from "@/components/ui/BrutalBadge"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronDown, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

export function PublicationSection() {
    return (
        <section id="publikasi" className="py-24 px-6 md:px-12 lg:px-20 border-t-8 border-border bg-main bg-dot-pattern">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="bg-white border-4 border-border brutal-shadow p-8 md:p-12 lg:p-16 relative"
                >
                    {/* Decorative Top Bar */}
                    <div className="absolute top-0 left-0 w-full h-4 border-b-4 border-border flex">
                        <div className="w-1/3 h-full bg-accent border-r-4 border-border"></div>
                        <div className="w-2/3 h-full bg-secondary"></div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 mt-4 gap-6 border-b-8 border-border pb-8">
                        <div>
                            <div className="font-mono font-bold uppercase tracking-widest text-sm mb-2 bg-main text-main-foreground px-2 py-1 inline-block border-2 border-border brutal-shadow">
                                Jurnal & Tulisan
                            </div>
                            <h2 className="text-5xl md:text-7xl font-heading font-black uppercase leading-[0.85] tracking-tighter">
                                Publikasi
                            </h2>
                        </div>
                        <div className="text-right flex-shrink-0">
                            <span className="font-heading font-black text-6xl md:text-8xl text-transparent [-webkit-text-stroke:2px_black] opacity-20">
                                {cvData.publikasi.length.toString().padStart(2, '0')}
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        {cvData.publikasi.map((pub, index) => (
                            <PublicationCard key={index} pub={pub} index={index} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

type PublicationType = {
    judul: string;
    peran: string;
    penerbit: string;
    deskripsi: string;
    link?: string;
};

function PublicationCard({ pub, index }: { pub: PublicationType, index: number }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
        >
            <BrutalCard
                className={`p-0 overflow-hidden bg-white group cursor-pointer border-4 border-border transition-all duration-300 ${isOpen ? 'shadow-[8px_8px_0_#1111] translate-x-0' : 'brutal-shadow hover:-translate-y-1 hover:translate-x-1 hover:shadow-[10px_10px_0_#1111]'}`}
                color="white"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex flex-col md:flex-row">
                    {/* Number / Index Block */}
                    <div className="bg-accent text-accent-foreground border-b-4 md:border-b-0 md:border-r-4 border-border w-full md:w-24 shrink-0 flex items-center justify-center p-4">
                        <span className="font-heading font-black text-4xl">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                    </div>

                    {/* Main Content Area */}
                    <div className="p-6 md:p-8 flex-1 relative flex flex-col justify-center">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <BrutalBadge color="white" className="border-border text-foreground text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-[2px_2px_0_#111]">
                                {pub.peran}
                            </BrutalBadge>
                            <BrutalBadge color="secondary" className="border-border text-secondary-foreground text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-[2px_2px_0_#111]">
                                {pub.penerbit}
                            </BrutalBadge>
                        </div>

                        {pub.link ? (
                            <a
                                href={pub.link}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-2xl md:text-3xl font-black font-heading leading-tight group-hover:text-main transition-colors pr-12 inline-flex flex-wrap items-center gap-2 hover:underline"
                            >
                                {pub.judul}
                                <ExternalLink className="w-6 h-6 shrink-0 opacity-50 group-hover:text-main group-hover:opacity-100 transition-opacity" />
                            </a>
                        ) : (
                            <h3 className="text-2xl md:text-3xl font-black font-heading leading-tight group-hover:text-main transition-colors pr-12">
                                {pub.judul}
                            </h3>
                        )}

                        {/* Toggle Button Inside Card */}
                        <div className={`absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 border-4 border-border shadow-[4px_4px_0_#111] flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-main text-main-foreground scale-90 shadow-[2px_2px_0_#111] translate-x-1 translate-y-1' : 'bg-white group-hover:bg-main group-hover:text-main-foreground'}`}>
                            <ChevronDown className={cn("w-6 h-6 transition-transform duration-500", isOpen ? "rotate-180" : "rotate-0")} />
                        </div>
                    </div>
                </div>

                {/* Expandable description */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                        >
                            <div className="border-t-4 border-border bg-muted/20 p-6 md:p-8 ml-0 md:ml-24">
                                <div className="border-l-4 border-main pl-4 font-sans font-medium text-foreground/80 md:text-lg leading-relaxed">
                                    <div className="font-mono bg-main text-main-foreground text-xs font-bold uppercase inline-block px-2 py-0.5 mb-3 brutal-shadow-sm border-2 border-border">
                                        Intisari _
                                    </div>
                                    <p>{pub.deskripsi}</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </BrutalCard>
        </motion.div>
    )
}
