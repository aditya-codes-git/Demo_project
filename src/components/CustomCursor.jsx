import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isPointer, setIsPointer] = useState(false)

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        const updateCursorType = () => {
            const target = document.elementFromPoint(position.x, position.y)
            if (
                target?.tagName === "A" ||
                target?.tagName === "BUTTON" ||
                target?.closest("a") ||
                target?.closest("button")
            ) {
                setIsPointer(true)
            } else {
                setIsPointer(false)
            }
        }

        window.addEventListener("mousemove", (e) => {
            updatePosition(e)
        })
        window.addEventListener("mouseover", updateCursorType)

        return () => {
            window.removeEventListener("mousemove", updatePosition)
            window.removeEventListener("mouseover", updateCursorType)
        }
    }, [position.x, position.y])

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference"
                animate={{
                    x: position.x - 6,
                    y: position.y - 6,
                    scale: isPointer ? 0.5 : 1,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-white/30 rounded-full pointer-events-none z-[99]"
                animate={{
                    x: position.x - 20,
                    y: position.y - 20,
                    scale: isPointer ? 1.5 : 1,
                    backgroundColor: isPointer ? "rgba(255,255,255,0.05)" : "transparent"
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
            />
        </>
    )
}
