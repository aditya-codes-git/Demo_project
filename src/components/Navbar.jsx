import { motion } from "framer-motion"
import { portfolioData } from "@/data"
import { Magnetic } from "@/components/Magnetic"

export function Navbar() {
    const links = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
    ]

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 glass border-b-0"
        >
            <div className="max-w-[1400px] mx-auto px-6 h-24 flex items-center justify-between">
                <Magnetic>
                    <a href="#hero" className="text-2xl font-heading font-bold tracking-tighter text-white">
                        {portfolioData.profile.name}<span className="text-zinc-600">.dev</span>
                    </a>
                </Magnetic>

                <nav className="hidden md:flex items-center gap-10">
                    {links.map((link) => (
                        <Magnetic key={link.name}>
                            <a
                                href={link.href}
                                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                            </a>
                        </Magnetic>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <Magnetic>
                        <a href="#contact" className="text-sm font-bold tracking-wide uppercase px-6 py-3 rounded-full bg-white text-black hover:bg-zinc-200 transition-colors">
                            Let's Talk
                        </a>
                    </Magnetic>
                </div>
            </div>
        </motion.header>
    )
}
