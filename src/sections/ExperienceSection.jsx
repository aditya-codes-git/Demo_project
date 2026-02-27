import { FadeIn } from "@/components/FadeIn"
import { Section } from "@/components/Section"
import { portfolioData } from "@/data"

export function ExperienceSection() {
    const { experience } = portfolioData

    return (
        <Section id="experience">
            <FadeIn>
                <h2 className="text-3xl font-bold mb-16">Experience</h2>
            </FadeIn>

            <div className="space-y-12">
                {experience.map((job, idx) => (
                    <FadeIn key={idx} delay={idx * 0.1}>
                        <div className="relative pl-8 md:pl-0">

                            {/* Desktop Timeline Layout */}
                            <div className="hidden md:grid grid-cols-12 gap-8 items-baseline">
                                <div className="col-span-3 text-sm font-medium text-zinc-500 uppercase tracking-widest mt-1">
                                    {job.duration}
                                </div>

                                <div className="col-span-9 relative border-l border-zinc-800 pl-8 pb-12 last:border-transparent last:pb-0">
                                    <div className="absolute w-3 h-3 bg-zinc-800 rounded-full -left-[6.5px] top-2 shadow-[0_0_0_8px_#18181b]" />
                                    <h3 className="text-xl font-bold text-primary">{job.role}</h3>
                                    <div className="text-lg font-medium text-zinc-400 mb-6">{job.company}</div>

                                    <ul className="space-y-4">
                                        {job.highlights.map((item, i) => (
                                            <li key={i} className="flex gap-3 text-zinc-400">
                                                <span className="text-emerald-500 mt-1.5">•</span>
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Mobile Timeline Layout */}
                            <div className="md:hidden relative border-l border-zinc-800 pl-6 pb-12 last:border-transparent last:pb-0">
                                <div className="absolute w-3 h-3 bg-zinc-800 rounded-full -left-[6.5px] top-6 shadow-[0_0_0_8px_#09090b]" />
                                <div className="text-sm font-medium text-zinc-500 mb-2">{job.duration}</div>
                                <h3 className="text-lg font-bold text-primary">{job.role}</h3>
                                <div className="text-base font-medium text-zinc-400 mb-4">{job.company}</div>

                                <ul className="space-y-3">
                                    {job.highlights.map((item, i) => (
                                        <li key={i} className="flex gap-2 text-zinc-400 text-sm">
                                            <span className="text-emerald-500 mt-1">•</span>
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
