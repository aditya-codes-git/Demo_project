import { FadeIn } from "@/components/FadeIn"
import { Section } from "@/components/Section"
import { portfolioData } from "@/data"

export function SkillsSection() {
    const { skills } = portfolioData

    return (
        <Section id="skills" className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-32 border-t border-white/[0.05]">
            <FadeIn>
                <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-zinc-500 mb-16">Stack & Capabilities</h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skills.map((skillGroup, idx) => (
                    <FadeIn key={skillGroup.category} delay={idx * 0.1}>
                        <div className="p-10 rounded-3xl glass-heavy hover:bg-white/[0.06] transition-colors h-full flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map(item => (
                                    <span key={item} className="px-5 py-2 text-sm font-medium tracking-wide rounded-full bg-white/[0.03] text-zinc-300 border border-white/5 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </Section>
    )
}
