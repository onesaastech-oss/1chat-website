"use client";
import React, { useRef, useState } from "react";
import { motion } from "motion/react";

export const PointerHighlight = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <span
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative inline-block"
        >
            <motion.span
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(34, 197, 94, 0.15), transparent 40%)`,
                }}
                animate={{ opacity }}
            />
            <span className="relative z-10">{children}</span>
        </span>
    );
};
