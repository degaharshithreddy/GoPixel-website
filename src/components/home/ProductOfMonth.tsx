import { Laptop, Rocket, GraduationCap, HeartPulse, Building2, PartyPopper } from "lucide-react";

const stats = [
  { value: "2+", label: "Happy Employees" },
  { value: "6+", label: "Companies" },
  { value: "900+", label: "Products Delivered" },
  { value: "99%", label: "On-time Delivery" },
];

const industries = [
  { icon: Laptop, label: "IT & Tech" },
  { icon: Rocket, label: "Startups" },
  { icon: GraduationCap, label: "Colleges" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Building2, label: "Corporate" },
  { icon: PartyPopper, label: "Events & Celebrations" },
];

export default function ProductOfMonth() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-16 grid lg:grid-cols-3 gap-4">
      <div className="lg:col-span-1 bg-gradient-to-br from-[#2a1a4a] to-ink text-white rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative min-h-[280px]">
        <img
          src="https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=80"
          alt="Acrylic QR Memory Frame"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10">
          <p className="text-xs text-white/60 mb-2 font-medium">Product of the Month</p>
          <h4 className="text-xl font-bold mb-2">Acrylic QR Memory Frame</h4>
          <p className="text-sm text-white/70">Scan. Watch. Relive memories forever.</p>
        </div>
        <button className="bg-white text-ink rounded-full px-5 py-2.5 text-sm font-semibold w-fit relative z-10 hover:bg-white/90 transition-colors">
          Explore Now
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 content-start">
        {stats.map((s) => (
          <div key={s.label} className="bg-primary-light rounded-2xl p-6">
            <p className="text-2xl lg:text-3xl font-bold text-primary mb-1">{s.value}</p>
            <p className="text-sm text-muted">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-black/5 rounded-2xl p-6">
        <h4 className="font-bold text-ink mb-5">Industries We Serve</h4>
        <div className="grid grid-cols-3 gap-5">
          {industries.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-2">
              <div className="w-11 h-11 rounded-full bg-primary-light flex items-center justify-center">
                <Icon className="text-primary" size={20} />
              </div>
              <p className="text-xs text-muted leading-tight">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}