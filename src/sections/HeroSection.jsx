import { motion } from "framer-motion"
import { portfolioData } from "@/data"
import { ArrowDownRight } from "lucide-react"

export function HeroSection() {
    const { profile } = portfolioData

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-background to-background" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-start">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 glass text-sm font-medium text-zinc-300 mb-6"
                >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Available for new opportunities
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-primary max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <span className="block text-zinc-500">{profile.title}</span>
                    building powerful web experiences.
                </motion.h1>

                <motion.p
                    className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {profile.tagline}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-10 flex items-center gap-6"
                >
                    <a href="#projects" className="group flex items-center gap-2 bg-primary text-background font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform">
                        View Work
                        <ArrowDownRight className="w-5 h-5 group-hover:rotate-[-45deg] transition-transform" />
                    </a>
                    <a href="#contact" className="text-zinc-400 hover:text-primary font-medium transition-colors">
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
