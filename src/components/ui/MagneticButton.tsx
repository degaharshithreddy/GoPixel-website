/** @jsxRuntime classic */
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setPos({ x: relX * 0.3, y: relY * 0.3 });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const content = (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.5 }}
      className={clsx(
        "relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-colors",
        variant === "primary" && "bg-primary text-white hover:bg-primary-dark",
        variant === "secondary" && "bg-white text-ink border border-black/10 hover:bg-black/5",
        className
      )}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }
  return content;
}