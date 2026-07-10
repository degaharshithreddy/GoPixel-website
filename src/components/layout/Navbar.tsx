import { useState } from "react";
import { Menu, X, MessageSquare, ChevronDown } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";

const links = [
  { label: "Home" },
  { label: "Products", dropdown: true },
  { label: "Kits/Combos", dropdown: true },
  { label: "Inspiration Hub" },
  { label: "Why GoPixel" },
  { label: "About Us" },
  { label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[110] bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold text-ink leading-none">
            Go<span className="text-primary">Pixel</span>
          </h1>
          <p className="text-[11px] text-muted tracking-wide mt-0.5">
            Print Your Vibe.
          </p>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-ink/80">
          {links.map((l) => (
            <a
              key={l.label}
  href="#"
  className={`relative flex items-center gap-1 py-1 group hover:text-primary transition-colors ${
    l.label === "Home" ? "text-primary" : ""
  }`}
>
  {l.label}
  {l.dropdown && <ChevronDown size={14} />}
  <span className="absolute -bottom-0.5 left-0 h-[1.5px] bg-primary w-0 group-hover:w-full transition-all duration-300 ease-out" />
</a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <MagneticButton variant="primary" className="!py-3 !px-5 text-sm">
            <MessageSquare size={16} /> Request a Quote
          </MagneticButton>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden flex flex-col gap-4 px-6 pb-6">
          {links.map((l) => (
            <a key={l.label} href="#" className="text-ink/80 text-sm font-medium">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}