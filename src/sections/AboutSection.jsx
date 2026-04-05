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
                            Ship Fast.<br />
                            Learn Faster.<br />
                        </div>
                    </div>

                    <div className="md:col-span-8 flex flex-col gap-8 text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
                        <p className="border-l border-white/[0.08] pl-8">
                            I'm <strong className="text-white font-medium">{profile.name}</strong>. {profile.bio}
                        </p>
                        <p className="border-l border-emerald-500/50 pl-8">
                            I don't wait for assignments — I find problems and build solutions. Every project in my portfolio started from a real frustration: slow QA cycles, lost context during deep work, or resumes that get filtered by bots.
                        </p>
                    </div>
                </div>
            </FadeIn>
        </Section>
    )
}
