import { Camera, Link, MessageCircle, Mail } from "lucide-react";

const quickLinks = ["Home", "Kits/Combos", "Products", "Inspiration Hub", "Why GoPixel","Careers"];
const help = ["FAQs", "My Orders", "Shipping & Delivery", "Returns & Refunds", "Terms & Conditions"];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h4 className="text-xl font-bold mb-2">GoPixel</h4>
          <p className="text-sm text-white/60 mb-5 leading-relaxed">
            Creating Experiences. <br /> Preserving Memories.
          </p>
          <div className="flex gap-3">
            {[Camera, Link, MessageCircle, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h5 className="font-semibold mb-4">Quick Links</h5>
          <ul className="space-y-2.5 text-sm text-white/60">
            {quickLinks.map((i) => (
              <li key={i}>
                <a href="#" className="hover:text-white transition-colors">
                  {i}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-4">Help</h5>
          <ul className="space-y-2.5 text-sm text-white/60">
            {help.map((i) => (
              <li key={i}>
                <a href="#" className="hover:text-white transition-colors">
                  {i}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-4">Contact Us</h5>
          <p className="text-sm text-white/60 mb-2">+91 8978064392</p>
          <p className="text-sm text-white/60 mb-2">hello@gopixel.com</p>
          <p className="text-sm text-white/60 mb-6">Villa no 3 ,Palam pally villas,Nizampet, Hyderabad, Telangana, India 500090</p>

          <h5 className="font-semibold mb-3">Stay Connected</h5>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 rounded-full px-4 py-2.5 text-sm flex-1 outline-none placeholder:text-white/40 focus:ring-2 focus:ring-primary min-w-0"
            />
            <button className="bg-primary hover:bg-primary-dark transition-colors rounded-full px-4 py-2.5 text-sm font-semibold whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 text-center text-xs text-white/40 py-5">
        © 2026 GoPixel. All Rights Reserved.
      </div>
    </footer>
  );
}