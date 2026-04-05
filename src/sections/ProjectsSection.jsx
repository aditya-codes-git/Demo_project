import { FadeIn } from "@/components/FadeIn"
import { Section } from "@/components/Section"
import { portfolioData } from "@/data"
import { Github, ExternalLink } from "lucide-react"

export function ProjectsSection() {
    const { projects } = portfolioData

    return (
        <Section id="projects" className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-32">
            <FadeIn>
                <h2 className="text-[5vw] leading-none font-bold tracking-tighter mb-24 text-white">SELECTED WORKS</h2>
            </FadeIn>

            <div className="space-y-32">
                {projects.map((project, idx) => (
                    <FadeIn key={project.title} delay={0.1}>
                        <div className="group grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                            {/* Image Placeholder / Visual Area */}
                            <div
                                className={`relative lg:col-span-7 aspect-[4/3] rounded-3xl overflow-hidden glass-heavy group-hover:bg-white/[0.06] transition-all duration-700 ease-out border border-white/[0.05] ${idx % 2 === 1 ? 'lg:order-2' : ''
                                    }`}
                            >
                                {/* Subtle Inner Glow on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 lg:p-8">
                                    <div className="w-full h-full border border-white/[0.08] rounded-xl bg-black/50 shadow-2xl overflow-hidden relative transform group-hover:scale-[1.03] transition-transform duration-700 ease-out backdrop-blur-md">
                                        {/* Browser Header Bar */}
                                        <div className="h-8 w-full bg-white/[0.02] border-b border-white/[0.08] flex items-center px-4 gap-2">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-400/20" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/20" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/20" />
                                        </div>

                                        {/* Image or Placeholder */}
                                        <div className="relative h-[calc(100%-32px)] w-full overflow-hidden">
                                            {project.image ? (
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                                />
                                            ) : (
                                                <div className="p-4 flex items-center justify-center opacity-30 h-full text-sm font-mono text-white">
                                                    <span className="group-hover:opacity-100 transition-opacity duration-500">Preview Render</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col lg:col-span-5 relative">
                                {/* Decorative index number */}
                                <div className="absolute -top-16 -left-8 text-[8rem] font-bold text-white/[0.03] font-heading pointer-events-none select-none z-[-1]">
                                    0{idx + 1}
                                </div>

                                <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">{project.title}</h3>
                                <p className="text-zinc-400 text-lg leading-relaxed mb-8 font-light">
                                    {project.description}
                                </p>

                                <div className="glass p-6 rounded-2xl mb-10">
                                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-3 block">Impact & Case Study</span>
                                    <p className="text-zinc-300 text-sm leading-relaxed">{project.caseStudy}</p>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-10">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="px-4 py-1.5 text-xs font-medium tracking-wide rounded-full border border-white/10 text-zinc-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-8 mt-auto">
                                    <a href={project.repoLink} target="_blank" rel="noreferrer" className="group/link flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-bold tracking-wide uppercase">
                                        <Github className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5" />
                                        Source
                                    </a>
                                    <a href={project.demoLink} target="_blank" rel="noreferrer" className="group/link flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-bold tracking-wide uppercase">
                                        <ExternalLink className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                                        Live Site
                                    </a>
                                </div>
                            </div>

                        </div>
                    </FadeIn>
                ))}
            </div>
        </Section>
    )
}
