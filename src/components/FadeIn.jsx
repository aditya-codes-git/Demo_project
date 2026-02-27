import { motion } from "framer-motion"
import { cn } from "@/utils/cn"

export function FadeIn({ children, delay = 0, className }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={cn("w-full", className)}
        >
            {children}
        </motion.div>
    )
}
