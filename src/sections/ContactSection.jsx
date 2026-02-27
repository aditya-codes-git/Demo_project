import { FadeIn } from "@/components/FadeIn"
import { Section } from "@/components/Section"
import { portfolioData } from "@/data"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"

export function ContactSection() {
    const { socialLinks } = portfolioData

    return (
        <Section id="contact" className="pb-32">
            <FadeIn className="text-center max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together.</h2>
                <p className="text-xl text-zinc-400 mb-12">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
                </p>

                <a
                    href={`mailto:${socialLinks.email}`}
                    className="inline-flex items-center justify-center gap-2 bg-primary text-background font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform"
                >
                    <Mail className="w-5 h-5" />
                    Say Hello
                </a>
            </FadeIn>

            <FadeIn delay={0.2} className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center justify-center gap-6">
                    <a href={socialLinks.github} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors p-2 glass rounded-full">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors p-2 glass rounded-full">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={socialLinks.twitter} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors p-2 glass rounded-full">
                        <Twitter className="w-5 h-5" />
                    </a>
                </div>

                <p className="text-sm font-medium text-zinc-500">
                    Designed & Built dynamically by Antigravity using Vite + React.
                </p>
            </FadeIn>
        </Section>
    )
}
