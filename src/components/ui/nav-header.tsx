"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      className={cn(
        "relative mx-auto flex w-fit rounded-full border border-white/10 p-1",
        "bg-black/20 backdrop-blur-xl shadow-2xl transition-all duration-300"
      )}
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      {navItems.map((item) => (
        <Tab key={item.label} setPosition={setPosition} href={item.href}>
          {item.label}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({
  children,
  setPosition,
  href,
}: {
  children: React.ReactNode;
  setPosition: any;
  href: string;
}) => {
  const ref = useRef<HTMLLIElement>(null);

  const handleClick = () => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <li
      ref={ref}
      onClick={handleClick}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-4 py-2 text-xs uppercase text-zinc-400 hover:text-white transition-colors duration-300 md:px-6 md:py-3 md:text-sm font-medium tracking-wider"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/10 md:h-12 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
    />
  );
};

export default NavHeader;
