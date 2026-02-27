import { cn } from "@/utils/cn"

export function Section({ id, children, className }) {
    return (
        <section
            id={id}
            className={cn("w-full max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40", className)}
        >
            {children}
        </section>
    )
}
