import { FadeIn } from "@/components/FadeIn"
import { Section } from "@/components/Section"
import { portfolioData } from "@/data"

export function AboutSection() {
    const { profile } = portfolioData

    return (
        <Section id="about" className="bg-surface/30">
            <FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                    <div className="md:col-span-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">About.</h2>
                        <div className="mt-4 w-12 h-1 bg-primary rounded-full" />
                    </div>

                    <div className="md:col-span-8 space-y-6 text-lg text-zinc-400 leading-relaxed">
                        <p>
                            Hi, I'm <strong className="text-primary font-medium">{profile.name}</strong>. {profile.bio}
                        </p>
                        <p>
                            My approach blends technical precision with a strong understanding of product design. I believe the best software disappears, leaving only a seamless experience for the user.
                        </p>
                    </div>
                </div>
            </FadeIn>
        </Section>
    )
}
