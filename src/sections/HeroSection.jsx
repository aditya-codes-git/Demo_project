import { motion } from "framer-motion"
import { portfolioData } from "@/data"
import { ArrowDownRight } from "lucide-react"
import { Magnetic } from "@/components/Magnetic"

export function HeroSection() {
    const { profile } = portfolioData

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden"
        >
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6">

                {/* Massive Typography Stack */}
                <div className="flex flex-col mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <h1 className="text-[12vw] leading-[0.85] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/20">
                            SOFTWARE<br />
                            ENGINEER
                        </h1>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end mt-12">
                    {/* Availability Badge */}
                    <motion.div
                        className="md:col-span-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-heavy text-xs font-semibold tracking-widest uppercase text-zinc-300">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Available
                        </div>
                    </motion.div>

                    {/* Description & CTA */}
                    <motion.div
                        className="md:col-span-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="text-xl md:text-2xl text-zinc-400 max-w-xl font-light leading-relaxed">
                            {profile.tagline} Building powerful, minimal, and scalable web experiences.
                        </p>

                        <Magnetic>
                            <a href="#projects" className="group relative flex items-center justify-center w-32 h-32 rounded-full glass-heavy hover:bg-white/[0.08] transition-colors border border-white/[0.08]">
                                <div className="text-center">
                                    <span className="block text-sm font-medium text-white mb-1">Explore</span>
                                    <ArrowDownRight className="w-5 h-5 mx-auto text-zinc-400 group-hover:text-white transition-colors group-hover:rotate-[-45deg] duration-300" />
                                </div>
                            </a>
                        </Magnetic>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}
