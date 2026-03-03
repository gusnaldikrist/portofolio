"use client"

import { cvData } from "@/lib/data"
import { motion, Variants } from "framer-motion"

export function SkillsSection() {
    const categories = [
        { key: "teknikal", label: "Teknikal", color: "bg-main", text: "text-main-foreground" },
        { key: "penelitian", label: "Penelitian", color: "bg-secondary", text: "text-secondary-foreground" },
        { key: "bahasa", label: "Bahasa", color: "bg-accent", text: "text-accent-foreground" },
        { key: "sertifikat", label: "Sertifikat Utama", color: "bg-white", text: "text-foreground" },
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } }
    };

    return (
        <section id="keahlian" className="py-20 px-6 md:px-12 lg:px-20 border-t-4 border-border bg-dot-pattern">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="bg-white border-4 border-border brutal-shadow p-8 md:p-12 relative overflow-hidden"
                >
                    {/* Decorative element */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-main rounded-full border-4 border-border opacity-20 pointer-events-none" />

                    <div className="relative z-10 mb-10 text-center">
                        <h2 className="text-4xl md:text-5xl font-heading font-black uppercase inline-block border-b-8 border-accent pb-2">
                            Keahlian
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
                        {categories.map((cat) => {
                            const skills = cvData.keahlian[cat.key as keyof typeof cvData.keahlian];

                            return (
                                <div key={cat.key}>
                                    <h3 className="text-2xl font-bold font-heading mb-4 pb-2 border-b-4 border-border flex items-center gap-3">
                                        <div className={`w-4 h-4 border-2 border-border ${cat.color}`} />
                                        {cat.label}
                                    </h3>

                                    <motion.div
                                        className="flex flex-wrap gap-3"
                                        variants={containerVariants}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true }}
                                    >
                                        {skills.map((skill, index) => (
                                            <motion.span
                                                key={index}
                                                variants={itemVariants}
                                                className={`
                          px-3 py-1.5 font-bold font-sans text-sm border-2 border-border 
                          shadow-[2px_2px_0_#1A1A1A] hover:translate-y-1 hover:shadow-none transition-all cursor-default
                          ${cat.color} ${cat.text}
                        `}
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </motion.div>
                                </div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
