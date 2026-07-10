import TiltCard from "../ui/TiltCard";
import { ShieldCheck } from "lucide-react";

const cards = [
  {
    title: "Memory Wall",
    desc: "Real stories. Real people. Real happiness.",
    link: "See Stories",
  },
  {
    title: "Before → After",
    desc: "See the magic of transformation.",
    link: "See More",
  },
  {
    title: "Design Journey",
    desc: "From idea to delivery, crafted with care.",
    link: null,
  },
  {
    title: "GoPixel Promise",
    desc: "We don't just print products, we create experiences.",
    link: "Our Promise",
    badge: true,
  },
];

export default function InfoCards() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((c) => (
        <TiltCard key={c.title} className="p-6 border border-black/5 relative">
          {c.badge && (
            <ShieldCheck className="absolute top-5 right-5 text-primary" size={22} />
          )}
          <h4 className="font-bold text-ink mb-2">{c.title}</h4>
          <p className="text-sm text-muted mb-5 leading-relaxed pr-6">{c.desc}</p>
          {c.link && (
            <a href="#" className="text-primary text-sm font-semibold">
              {c.link} →
            </a>
          )}
        </TiltCard>
      ))}
    </section>
  );
}