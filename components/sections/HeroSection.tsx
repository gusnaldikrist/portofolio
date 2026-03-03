"use client"

import { cvData } from "@/lib/data"
import { Mail, Phone, ArrowRight } from "lucide-react"
import { BrutalBadge } from "@/components/ui/BrutalBadge"
import { motion } from "framer-motion"
import profileImg from "@/assets/profile.jpg"

export function HeroSection() {
    return (
        <section id="hero" className="min-h-[85vh] flex flex-col justify-center py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-dot-pattern">
            <div className="absolute top-20 right-10 w-64 h-64 bg-accent/20 rotate-12 border-4 border-border brutal-shadow opacity-50 pointer-events-none" />

            <div className="max-w-5xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Left Content */}
                <motion.div
                    className="lg:col-span-7 flex flex-col items-start gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex gap-2 mb-2">
                        <BrutalBadge color="accent" className="text-sm px-3 py-1">
                            ✨ Available for work
                        </BrutalBadge>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black leading-[1.1] tracking-tight uppercase">
                        <span className="block">HI, I'M</span>
                        <span className="block text-main">{cvData.profil.nama.split(" ")[0]}</span>
                    </h1>

                    <p className="text-xl md:text-2xl font-bold font-sans max-w-2xl text-foreground/90 border-l-8 border-main pl-4">
                        {cvData.profil.tagline}
                    </p>

                    <div className="bg-white border-4 border-border brutal-shadow p-5 max-w-xl my-4 relative">
                        {/* Pin accesoris neo-brutalism */}
                        <div className="absolute -top-3 -right-3 w-6 h-6 bg-accent border-2 border-border shadow-[2px_2px_0px_#111] rounded-full z-10"></div>
                        <p className="text-lg font-sans text-foreground font-bold leading-relaxed">
                            Pustakawan mandiri yang adaptif terhadap teknologi baru (seperti AI) dan berorientasi pada pemecahan masalah TI. Fokus pada tata kelola perpustakaan (SLiMS, DDC), penelusuran informasi, serta dukungan riset akademik (Mendeley, VOSviewer, SLR).
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-2">
                        <a href="#proyek" className="inline-flex items-center justify-center px-6 py-3 font-heading font-bold text-lg bg-main text-main-foreground border-4 border-border brutal-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#1A1A1A] transition-all">
                            Lihat Proyek <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-8">
                        <a href={`mailto:${cvData.profil.email}`} className="group relative">
                            <BrutalBadge color="white" className="px-4 py-2 text-sm hover:bg-main hover:text-main-foreground transition-colors cursor-pointer flex items-center gap-2">
                                <Mail className="h-4 w-4" /> {cvData.profil.email}
                            </BrutalBadge>
                        </a>
                        <a href={`tel:${cvData.profil.telepon}`} className="group relative">
                            <BrutalBadge color="white" className="px-4 py-2 text-sm hover:bg-secondary hover:text-secondary-foreground transition-colors cursor-pointer flex items-center gap-2">
                                <Phone className="h-4 w-4" /> {cvData.profil.telepon}
                            </BrutalBadge>
                        </a>
                    </div>
                </motion.div>

                {/* Right Photo */}
                <motion.div
                    className="lg:col-span-5 flex justify-center lg:justify-end"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="relative group">
                        {/* Offset border decoration */}
                        <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 border-4 border-border z-0 transition-transform group-hover:translate-x-6 group-hover:translate-y-6 duration-300" />
                        <div className="absolute inset-0 bg-secondary -translate-x-4 translate-y-8 border-4 border-border z-0 transition-transform group-hover:-translate-x-6 group-hover:translate-y-10 duration-300" />

                        {/* Main photo container */}
                        <div className="w-64 h-64 md:w-80 md:h-80 border-4 border-border bg-white brutal-shadow overflow-hidden relative z-10 flex items-center justify-center">
                            {/* Fallback pattern / image */}
                            <div className="absolute inset-0 bg-[url('https://neobrutalism.dev/assets/images/pattern.svg')] opacity-20" />

                            <div className="w-full h-full">
                                <img src={profileImg.src} alt={cvData.profil.nama} className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
                            </div>
                        </div>

                        {/* Floating badge */}
                        <div className="absolute -bottom-6 -right-6 z-30">
                            <div className="bg-main text-main-foreground font-heading font-black border-4 border-border brutal-shadow p-3 rotate-6 group-hover:rotate-12 transition-transform">
                                BASED IN<br />GARUT
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
