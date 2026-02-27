import { motion } from "framer-motion"
import { portfolioData } from "@/data"

export function Navbar() {
    const links = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ]

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="fixed top-0 left-0 right-0 z-50 glass border-b-0"
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <a href="#hero" className="text-xl font-heading font-bold tracking-tighter text-primary">
                    {portfolioData.profile.name}<span className="text-zinc-500">.dev</span>
                </a>

                <nav className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-zinc-400 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Simple CTA for Desktop */}
                <div className="hidden md:block">
                    <a href={portfolioData.resumeFile} target="_blank" rel="noreferrer" className="text-sm font-medium px-4 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors">
                        Resume
                    </a>
                </div>
            </div>
        </motion.header>
    )
}
