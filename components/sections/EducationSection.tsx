"use client"

import { cvData } from "@/lib/data"
import { BrutalCard } from "@/components/ui/BrutalCard"
import { BrutalBadge } from "@/components/ui/BrutalBadge"
import { motion } from "framer-motion"

export function EducationSection() {
    const { pendidikan } = cvData;

    return (
        <section id="pendidikan" className="py-20 px-6 md:px-12 lg:px-20 border-t-4 border-border bg-accent/20 bg-dot-pattern">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-block mb-10">
                        <h2 className="text-4xl md:text-5xl font-heading font-black uppercase inline-block border-b-8 border-main pb-2 pr-8 bg-white/80 p-2">
                            Pendidikan
                        </h2>
                    </div>

                    <BrutalCard className="p-8 md:p-10 relative overflow-hidden bg-white">
                        {/* BIG DECORATIVE TEXT */}
                        <div className="absolute -right-10 -bottom-10 text-[150px] font-heading font-black text-muted/30 select-none z-0 rotate-[-10deg]">
                            UNDIP
                        </div>

                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="md:col-span-2">
                                <div className="flex flex-wrap gap-3 items-center mb-4">
                                    <h3 className="text-3xl font-bold font-heading">{pendidikan.kampus}</h3>
                                    <BrutalBadge color="secondary" className="shadow-[2px_2px_0_#1A1A1A]">{pendidikan.lokasi}</BrutalBadge>
                                </div>

                                <p className="text-xl font-bold mb-1 text-main">{pendidikan.jurusan}</p>
                                <p className="text-foreground/70 font-bold mb-6">{pendidikan.periode}</p>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-bold border-b-2 border-border inline-block mb-2">Skripsi</h4>
                                        <p className="text-foreground/80 font-medium italic">"{pendidikan.skripsi}"</p>
                                    </div>

                                    <div>
                                        <h4 className="font-bold border-b-2 border-border inline-block mb-2">Mata Kuliah Relevan</h4>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {pendidikan.mataKuliah.map((mk, i) => (
                                                <span key={i} className="bg-muted px-3 py-1 font-medium border-2 border-border text-sm">
                                                    {mk}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Highlight IPK */}
                            <div className="flex items-start justify-start md:justify-end">
                                <div className="border-4 border-border brutal-shadow p-6 bg-accent text-center transform rotate-3 hover:rotate-0 transition-transform">
                                    <p className="text-sm font-bold uppercase tracking-widest mb-2 border-b-2 border-border pb-2">IPK Akhir</p>
                                    <p className="text-5xl font-black font-heading tracking-tighter">
                                        {pendidikan.ipk.split('/')[0]}<span className="text-xl text-foreground/60">/4.00</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </BrutalCard>
                </motion.div>
            </div>
        </section>
    )
}
