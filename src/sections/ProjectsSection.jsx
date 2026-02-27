import { FadeIn } from "@/components/FadeIn"
import { Section } from "@/components/Section"
import { portfolioData } from "@/data"
import { Github, ExternalLink } from "lucide-react"

export function ProjectsSection() {
    const { projects } = portfolioData

    return (
        <Section id="projects" className="bg-zinc-900/40">
            <FadeIn>
                <h2 className="text-3xl font-bold mb-16">Selected Work.</h2>
            </FadeIn>

            <div className="space-y-24">
                {projects.map((project, idx) => (
                    <FadeIn key={project.title} delay={0.1}>
                        <div className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                            {/* Image Placeholder / Visual Area */}
                            <div
                                className={`relative aspect-video rounded-xl overflow-hidden glass border-white/10 group-hover:border-white/20 transition-colors ${idx % 2 === 1 ? 'lg:order-2' : ''
                                    }`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 flex flex-col items-center justify-center p-8">
                                    <div className="w-full h-full border border-white/5 rounded-lg bg-zinc-900 shadow-2xl overflow-hidden relative">
                                        <div className="h-6 w-full bg-zinc-800 border-b border-white/5 flex items-center px-4 gap-2">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                        </div>
                                        <div className="p-4 flex items-center justify-center opacity-50 h-[calc(100%-24px)] text-sm font-mono text-zinc-500">
                        // Screenshot Placeholder
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col">
                                <h3 className="text-2xl font-bold text-primary mb-4">{project.title}</h3>
                                <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="bg-zinc-900/50 border border-white/5 rounded-lg p-4 mb-8">
                                    <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 block">Impact & Case Study</span>
                                    <p className="text-zinc-300 text-sm">{project.caseStudy}</p>
                                </div>

                                <div className="flex flex-wrap gap-3 mb-8">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="px-3 py-1 text-sm font-medium rounded-full bg-white/[0.03] text-zinc-400 border border-white/5">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-6 mt-auto">
                                    <a href={project.repoLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium">
                                        <Github className="w-4 h-4" />
                                        Source Code
                                    </a>
                                    <a href={project.demoLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium">
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
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
