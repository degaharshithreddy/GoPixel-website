import { motion } from "framer-motion";
import MagneticButton from "../ui/MagneticButton";
import { Package } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

interface HeroProps {
  animateIn?: boolean;
}

export default function Hero({ animateIn = true }: HeroProps) {
  return (
    <section className="bg-primary-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          animate={animateIn ? "visible" : "hidden"}
          variants={container}
        >
          <motion.p variants={item} className="text-primary font-semibold mb-3">
            Creating Experiences.
          </motion.p>
          <motion.h1
            variants={item}
            className="text-5xl lg:text-6xl font-bold text-ink leading-[1.05] mb-5"
          >
            Preserving Memories.
          </motion.h1>
          <motion.p variants={item} className="text-muted text-lg mb-8 max-w-md leading-relaxed">
            Premium welcome kits, corporate merchandise, personalized gifts
            &amp; event branding that leave a lasting impression.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 mb-10">
            <MagneticButton variant="primary">Explore Experiences →</MagneticButton>
            <MagneticButton variant="secondary">
              Build Your Kit <Package size={16} />
            </MagneticButton>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {[
                "https://randomuser.me/api/portraits/women/44.jpg",
                "https://randomuser.me/api/portraits/men/32.jpg",
                "https://randomuser.me/api/portraits/men/65.jpg",
              ].map((src) => (
                <img
                  key={src}
                  src={src}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <p className="text-sm text-muted leading-tight">
              Trusted by 200+ companies <br /> and 5000+ happy employees.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={animateIn ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
        >
          <div className="absolute w-[420px] h-[420px] rounded-full bg-primary/25 blur-3xl -z-10" />
          <div className="grid grid-cols-2 gap-4 max-w-md">
            <img
              src="https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=500&q=80"
              className="rounded-2xl shadow-xl col-span-2 h-48 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80"
              className="rounded-2xl shadow-xl h-36 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1517705008128-361805f42e86?w=400&q=80"
              className="rounded-2xl shadow-xl h-36 w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}