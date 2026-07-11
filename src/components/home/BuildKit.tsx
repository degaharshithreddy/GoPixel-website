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
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl font-bold text-ink mb-1">Build Your Welcome Kit</h3>
          <p className="text-primary font-semibold mb-3">Your kit, your way!</p>
          <p className="text-muted mb-6 max-w-sm leading-relaxed">
            Choose products, see them come together in a box and request your
            custom kit.
          </p>
          <MagneticButton variant="primary">Start Building →</MagneticButton>
        </div>

        <div>
          <h4 className="font-bold text-ink mb-6">How it works?</h4>
          <div className="grid grid-cols-4 gap-2">
            {steps.map((s, i) => (
              <div key={s.n} className="flex items-center">
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-primary-light flex items-center justify-center font-bold text-primary text-lg">
                    {s.n}
                  </div>
                  <p className="text-xs text-muted font-medium leading-tight">{s.label}</p>
                </div>
                {i < steps.length - 1 && (
                  <span className="text-muted/40 text-lg -mt-6 shrink-0">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}