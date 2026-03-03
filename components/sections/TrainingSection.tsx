"use client"

import { cvData } from "@/lib/data"
import { BrutalCard } from "@/components/ui/BrutalCard"
import { BrutalBadge } from "@/components/ui/BrutalBadge"
import { motion } from "framer-motion"

export function TrainingSection() {
    return (
        <section id="pelatihan" className="py-20 px-6 md:px-12 lg:px-20 border-t-4 border-border bg-white">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-block mb-10">
                        <h2 className="text-4xl md:text-5xl font-heading font-black uppercase inline-block border-b-8 border-secondary pb-2 pr-8">
                            Pelatihan
                        </h2>
                    </div>

                    <div className="grid gap-6">
                        {cvData.pelatihan.map((training, index) => (
                            <BrutalCard
                                key={index}
                                className="p-6 md:p-8 hover:-translate-y-1 transition-transform group"
                                color={index % 2 === 0 ? "white" : "muted"}
                            >
                                <div className="flex flex-col md:flex-row gap-6">
                                    {/* Left sidebar / date */}
                                    <div className="md:w-1/4 shrink-0 border-l-4 border-main pl-4 md:border-l-0 md:border-r-4 md:pl-0 md:pr-4 text-left md:text-right">
                                        <p className="font-bold font-heading text-lg">{training.periode}</p>
                                        <p className="text-sm font-bold text-foreground/60 mt-1">{training.penyelenggara}</p>
                                    </div>

                                    {/* Right content */}
                                    <div className="md:w-3/4">
                                        <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-main transition-colors">{training.judul}</h3>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {training.badge.map((b, i) => (
                                                <BrutalBadge key={i} color={i === 0 ? "secondary" : "white"}>
                                                    {b}
                                                </BrutalBadge>
                                            ))}
                                        </div>

                                        <p className="text-foreground/80 font-medium font-sans">
                                            {training.deskripsi}
                                        </p>
                                    </div>
                                </div>
                            </BrutalCard>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
