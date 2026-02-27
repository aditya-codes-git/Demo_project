import { FadeIn } from "@/components/FadeIn"
import { Section } from "@/components/Section"
import { portfolioData } from "@/data"

export function AboutSection() {
    const { profile } = portfolioData

    return (
        <Section id="about" className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-32 border-t border-white/[0.05]">
            <FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
                    <div className="md:col-span-4">
                        <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-zinc-500 mb-6">About Me</h2>
                        <div className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                            Design.<br />
                            Engineer.<br />
                            Deploy.<br />
                        </div>
                    </div>

                    <div className="md:col-span-8 flex flex-col gap-8 text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
                        <p className="border-l border-white/[0.08] pl-8">
                            Hi, I'm <strong className="text-white font-medium">{profile.name}</strong>. {profile.bio}
                        </p>
                        <p className="border-l border-emerald-500/50 pl-8">
                            My approach blends technical precision with a strong understanding of product design. I believe the best software disappears, leaving only a seamless experience for the user.
                        </p>
                    </div>
                </div>
            </FadeIn>
        </Section>
    )
}
