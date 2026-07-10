import MagneticButton from "../ui/MagneticButton";

const steps = [
  { n: 1, label: "Choose Products" },
  { n: 2, label: "Customize It" },
  { n: 3, label: "Preview Your Kit" },
  { n: 4, label: "Request & Relax" },
];

export default function BuildKit() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-center mb-14">
        <div>
          <h3 className="text-2xl font-bold text-ink mb-1">Build Your Welcome Kit</h3>
          <p className="text-primary font-semibold mb-3">Your kit, your way!</p>
          <p className="text-muted mb-6 max-w-sm leading-relaxed">
            Choose products, see them come together in a box and request your
            custom kit.
          </p>
          <MagneticButton variant="primary">Start Building →</MagneticButton>
        </div>

        <img
          src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&q=80"
          alt="Welcome kit box"
          className="rounded-2xl aspect-video w-full object-cover shadow-lg"
        />
      </div>

      <h4 className="font-bold text-ink mb-6">How it works?</h4>
      <div className="flex flex-wrap items-start gap-6">
        {steps.map((s, i) => (
          <div key={s.n} className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-2 text-center w-28">
              <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center font-bold text-primary text-lg">
                {s.n}
              </div>
              <p className="text-sm text-muted font-medium">{s.label}</p>
            </div>
            {i < steps.length - 1 && (
              <span className="hidden sm:block text-muted/40 text-xl">→</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}