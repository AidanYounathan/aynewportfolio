import Hero from "./components/Hero";
import SkillsMarquee from "./components/SkillsMarquee";
import FigRow from "./components/FigRow";
import AboutBand from "./components/AboutBand";
import FeaturedWork from "./components/FeaturedWorkComponent";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[var(--background)] font-sans">
      <Reveal><Hero /></Reveal>
      <Reveal delay={60}><SkillsMarquee /></Reveal>
      <Reveal delay={120}><FigRow /></Reveal>
      <Reveal><AboutBand /></Reveal>
      <Reveal delay={60}><FeaturedWork /></Reveal>
    </main>
  );
}
