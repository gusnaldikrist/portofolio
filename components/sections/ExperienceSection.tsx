"use client"

import { cvData } from "@/lib/data"
import { BrutalCard } from "@/components/ui/BrutalCard"
import { BrutalBadge } from "@/components/ui/BrutalBadge"
import { TimelineItem } from "@/components/ui/TimelineItem"
import { motion } from "framer-motion"

export function ExperienceSection() {
    return (
        <section id="pengalaman" className="py-20 px-6 md:px-12 lg:px-20 border-t-4 border-border bg-white">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-block mb-10">
                        <h2 className="text-4xl md:text-5xl font-heading font-black uppercase inline-block border-b-8 border-main pb-2 pr-8">
                            Pengalaman<br />Kerja
                        </h2>
                    </div>

                    <div className="mt-8 border-l-4 border-border ml-3 md:ml-4">
                        {cvData.pengalaman.map((exp, index) => (
                            <TimelineItem key={index} isActive={index === 0}>
                                <BrutalCard
                                    className={`p-6 md:p-8 ${index === 0 ? 'bg-main/5' : 'bg-muted/10'} hover:-translate-y-1 transition-transform`}
                                    color="white"
                                >
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                                        <div>
                                            <h3 className="text-2xl font-bold font-heading">{exp.posisi}</h3>
                                            <p className="text-lg font-bold text-foreground/80 font-sans">{exp.institusi}</p>
                                        </div>
                                        <div>
                                            <BrutalBadge color={index === 0 ? "primary" : "white"} className="text-sm shadow-[2px_2px_0_#1A1A1A]">
                                                {exp.periode}
                                            </BrutalBadge>
                                        </div>
                                    </div>

                                    <ul className="list-disc list-outside ml-5 space-y-3 font-medium text-foreground/80 font-sans">
                                        {exp.deskripsi.map((desc, i) => (
                                            <li key={i} className="pl-1 marker:text-main">{desc}</li>
                                        ))}
                                    </ul>
                                </BrutalCard>
                            </TimelineItem>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
