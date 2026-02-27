import { FadeIn } from "@/components/FadeIn"
import { Section } from "@/components/Section"
import { portfolioData } from "@/data"

export function ExperienceSection() {
    const { experience } = portfolioData

    return (
        <Section id="experience" className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-32 border-t border-white/[0.05]">
            <FadeIn>
                <h2 className="text-[5vw] leading-none font-bold tracking-tighter mb-24 text-white">EXPERIENCE</h2>
            </FadeIn>

            <div className="space-y-16">
                {experience.map((job, idx) => (
                    <FadeIn key={idx} delay={idx * 0.1}>
                        <div className="relative pl-8 md:pl-0 group">

                            {/* Desktop Timeline Layout */}
                            <div className="hidden md:grid grid-cols-12 gap-12 items-baseline">
                                <div className="col-span-3 text-sm font-bold text-zinc-500 uppercase tracking-[0.2em] mt-2">
                                    {job.duration}
                                </div>

                                <div className="col-span-9 relative border-l border-white/10 pl-12 pb-16 last:border-transparent last:pb-0 transition-colors group-hover:border-white/30">
                                    <div className="absolute w-4 h-4 rounded-full -left-[8.5px] top-1.5 shadow-[0_0_0_8px_#030303] bg-white transition-transform group-hover:scale-125" />

                                    <h3 className="text-3xl font-bold text-white tracking-tight">{job.role}</h3>
                                    <div className="text-xl font-medium text-zinc-400 mt-2 mb-8">{job.company}</div>

                                    <ul className="space-y-5">
                                        {job.highlights.map((item, i) => (
                                            <li key={i} className="flex gap-4 text-zinc-400 group/item">
                                                <span className="text-white/20 mt-1.5 transition-colors group-hover/item:text-white">—</span>
                                                <span className="leading-relaxed text-lg tracking-wide font-light">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Mobile Timeline Layout */}
                            <div className="md:hidden relative border-l border-white/10 pl-8 pb-12 last:border-transparent last:pb-0">
                                <div className="absolute w-3 h-3 bg-white rounded-full -left-[6.5px] top-6 shadow-[0_0_0_8px_#030303]" />
                                <div className="text-xs font-bold tracking-widest text-zinc-500 mb-4">{job.duration}</div>
                                <h3 className="text-2xl font-bold text-white mb-1">{job.role}</h3>
                                <div className="text-lg font-medium text-zinc-400 mb-6">{job.company}</div>

                                <ul className="space-y-4">
                                    {job.highlights.map((item, i) => (
                                        <li key={i} className="flex gap-3 text-zinc-400 text-base font-light">
                                            <span className="text-white/20 mt-1">—</span>
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </FadeIn>
                ))}
            </div>
        </Section>
    )
}
