import { FadeIn } from "@/components/FadeIn"
import { Section } from "@/components/Section"
import { portfolioData } from "@/data"
import { Mail, Github, Linkedin } from "lucide-react"

export function ContactSection() {
    const { socialLinks } = portfolioData

    return (
        <Section id="contact" className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-32 border-t border-white/[0.05]">
            <FadeIn className="text-center max-w-4xl mx-auto">
                <h2 className="text-[8vw] leading-[0.85] font-bold tracking-tighter mb-8 text-white">LET'S TALK</h2>
                <p className="text-2xl md:text-3xl text-zinc-400 mb-16 font-light leading-relaxed">
                    Looking for Summer 2026 internships<br />
                    in full-stack or AI engineering.
                </p>

                <a
                    href={`mailto:${socialLinks.email}`}
                    className="inline-flex items-center justify-center gap-3 bg-white text-black font-bold tracking-widest uppercase px-12 py-6 rounded-full hover:scale-105 hover:bg-zinc-200 transition-all duration-300"
                >
                    <Mail className="w-6 h-6" />
                    Get In Touch
                </a>
            </FadeIn>

            <FadeIn delay={0.2} className="mt-32 pt-12 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center justify-center gap-8">
                    <a href={socialLinks.github} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors p-4 glass-heavy rounded-full hover:scale-110">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors p-4 glass-heavy rounded-full hover:scale-110">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={`mailto:${socialLinks.email}`} className="text-zinc-500 hover:text-white transition-colors p-4 glass-heavy rounded-full hover:scale-110">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>

                <p className="text-sm font-bold tracking-widest uppercase text-zinc-600">
                    © {new Date().getFullYear()} Aditya
                </p>
            </FadeIn>
        </Section>
    )
}
