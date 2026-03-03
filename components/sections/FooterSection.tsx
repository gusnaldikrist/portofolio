import { cvData } from "@/lib/data"
import { Github, Linkedin, Instagram } from "lucide-react"

export function FooterSection() {
    return (
        <footer className="border-t-8 border-border bg-foreground text-background">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Left: Copyright */}
                <div className="font-mono font-bold text-sm md:text-base uppercase tracking-widest text-center md:text-left">
                    <p>© {new Date().getFullYear()} {cvData.profil.nama.toUpperCase()}</p>
                    <p className="opacity-60 text-xs mt-1">Built with Next.js & Neo Brutalism</p>
                </div>

                {/* Right: Socials */}
                <div className="flex gap-4">
                    {[
                        { icon: Linkedin, link: cvData.profil.sosial?.linkedin, label: "LinkedIn" },
                        { icon: Github, link: cvData.profil.sosial?.github, label: "GitHub" },
                        { icon: Instagram, link: cvData.profil.sosial?.instagram, label: "Instagram" }
                    ].map((social, i) => (
                        <a
                            key={i}
                            href={social.link || "#"}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={social.label}
                            className="w-10 h-10 bg-accent text-accent-foreground border-2 border-border brutal-shadow flex items-center justify-center hover:bg-main hover:text-main-foreground hover:translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0_#FFF] transition-all"
                        >
                            <social.icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>

            </div>
        </footer>
    )
}
