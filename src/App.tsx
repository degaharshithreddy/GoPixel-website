import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/home/Hero";
import LookingFor from "./components/home/LookingFor";
import BuildKit from "./components/home/BuildKit";
import InspirationHub from "./components/home/InspirationHub";
import InfoCards from "./components/home/InfoCards";
import ProductOfMonth from "./components/home/ProductOfMonth";
import CTABanner from "./components/home/CTABanner";
import IntroLoader from "./components/IntroLoader";
// IntroLoader's props are not typed (or mismatch); cast to any for this usage
const IntroLoaderAny = IntroLoader as any;

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [showIntro, setShowIntro] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("gopixel-intro-seen");
    if (!seen) {
      setShowIntro(true);
      sessionStorage.setItem("gopixel-intro-seen", "true");
      window.scrollTo(0, 0);
    } else {
      setIntroDone(true);
    }
  }, []);

  return (
    <>
      {showIntro && !introDone && <IntroLoaderAny onDone={() => setIntroDone(true)} />}

      <div className="bg-white overflow-x-hidden">
        <Navbar />
        <Hero animateIn />
        <Reveal><LookingFor /></Reveal>
        <Reveal><BuildKit /></Reveal>
        <Reveal><InspirationHub /></Reveal>
        <Reveal><InfoCards /></Reveal>
        <Reveal><ProductOfMonth /></Reveal>
        <Reveal><CTABanner /></Reveal>
        <Footer />
      </div>
    </>
  );
}