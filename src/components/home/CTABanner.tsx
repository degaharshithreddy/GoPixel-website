import { Gift, Lightbulb, Smile } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";

export default function CTABanner() {
  return (
    <section className="bg-primary-light">
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold text-ink mb-2">
            Can't find what you're looking for?
          </h3>
          <p className="text-muted mb-6 max-w-sm leading-relaxed">
            We love creating custom products. Share your idea and we'll bring
            it to life.
          </p>
          <MagneticButton variant="primary">Share Your Idea →</MagneticButton>
        </div>

        <div className="flex items-center justify-center gap-6 text-primary">
          <Gift size={44} strokeWidth={1.5} />
          <span className="text-3xl font-bold text-ink/70">+</span>
          <Lightbulb size={44} strokeWidth={1.5} />
          <span className="text-3xl font-bold text-ink/70">=</span>
          <Smile size={44} strokeWidth={1.5} />
        </div>
      </div>
    </section>
  );
}