import { useRef, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltStrength?: number;
}

export default function TiltCard({
  children,
  className,
  tiltStrength = 10,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * tiltStrength;
    const rotateX = (0.5 - py) * tiltStrength;
    setRotate({ x: rotateX, y: rotateY });
    setGlow({ x: px * 100, y: py * 100 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlow({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className={clsx(
        "relative rounded-2xl bg-white border border-black/5 shadow-sm overflow-hidden",
        "hover:shadow-xl transition-shadow duration-300",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(124,58,237,0.12), transparent 60%)`,
        }}
      />
      <div style={{ transform: "translateZ(20px)" }}>{children}</div>
    </motion.div>
  );
}