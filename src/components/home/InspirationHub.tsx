import { motion } from "framer-motion";
import TiltCard from "../ui/TiltCard";

const categories = [
  { label: "Tech Companies", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80" },
  { label: "Startups", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80" },
  { label: "Colleges", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&q=80" },
  { label: "Healthcare", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80" },
  { label: "Events", img: "https://images.unsplash.com/photo-1519750783826-e2420f4d687f?w=500&q=80" },
  { label: "Travel & Hospitality", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80" },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as any },
  },
};

export default function InspirationHub() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-ink mb-1">Inspiration Hub</h3>
          <p className="text-muted text-sm">Ideas to inspire your next big impression.</p>
        </div>
        <button className="text-sm font-semibold border border-black/10 rounded-full px-5 py-2 hover:bg-black/5 transition-colors">
          View All
        </button>
      </div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={container}
      >
        {categories.map((c) => (
          <motion.div key={c.label} variants={item}>
            <TiltCard className="aspect-[4/5] relative !p-0 overflow-hidden">
              <img
                src={c.img}
                alt={c.label}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold z-10 leading-tight">
                {c.label}
              </p>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}