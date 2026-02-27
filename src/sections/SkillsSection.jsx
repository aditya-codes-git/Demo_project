import { FadeIn } from "@/components/FadeIn"
import { Section } from "@/components/Section"
import { portfolioData } from "@/data"

export function SkillsSection() {
    const { skills } = portfolioData

    return (
        <Section id="skills">
            <FadeIn>
                <h2 className="text-3xl font-bold mb-12">Stack & Capabilities</h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skillGroup, idx) => (
                    <FadeIn key={skillGroup.category} delay={idx * 0.1}>
                        <div className="p-6 rounded-2xl glass hover:bg-white/[0.02] transition-colors border border-white/5 h-full">
                            <h3 className="text-xl font-heading font-semibold text-zinc-200 mb-6">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map(item => (
                                    <span key={item} className="px-3 py-1 text-sm font-medium rounded-md bg-zinc-800/50 text-zinc-300 border border-white/5">
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
