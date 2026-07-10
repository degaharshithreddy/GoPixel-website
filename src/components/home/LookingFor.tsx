import { motion, cubicBezier } from "framer-motion";
import { User, Calendar, GraduationCap, Gift, Building2 } from "lucide-react";
import TiltCard from "../ui/TiltCard";

const items = [
  { icon: User, label: "Employee Welcome Kit" },
  { icon: Calendar, label: "Corporate Event" },
  { icon: GraduationCap, label: "College Fest" },
  { icon: Gift, label: "Personalized Gift" },
  { icon: Building2, label: "Office Branding" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
};

export default function LookingFor() {
  return (
    <section className="bg-primary-light pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-2xl p-8 grid lg:grid-cols-[260px_1fr] gap-8 items-center shadow-sm">
          <div>
            <h3 className="text-xl font-bold text-ink mb-2 leading-snug">
              What are you looking for today?
            </h3>
            <p className="text-sm text-muted">
              We'll help you find the perfect experience.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-5 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={container}
          >
            {items.map(({ icon: Icon, label }) => (
              <motion.div key={label} variants={item}>
                <TiltCard className="p-5 flex flex-col items-center text-center gap-3 border border-black/5">
                  <Icon className="text-primary" size={28} />
                  <p className="text-sm font-semibold text-ink leading-tight">{label}</p>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}