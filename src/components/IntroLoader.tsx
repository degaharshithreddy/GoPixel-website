import { useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

interface IntroLoaderProps {
  onDone: () => void;
}

export default function IntroLoader({ onDone }: IntroLoaderProps) {
  const { scrollY } = useScroll();
  const [dismissed, setDismissed] = useState(false);

  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, -120]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.06]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 300 && !dismissed) {
      setDismissed(true);
      onDone();
    }
  });

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-primary-light flex items-center justify-center pointer-events-none"
      style={{ opacity }}
    >
      <motion.h1 className="text-4xl font-bold text-ink" style={{ y, scale }}>
        Go<span className="text-primary">Pixel</span>
      </motion.h1>
    </motion.div>
  );
}