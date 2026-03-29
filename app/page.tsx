import HeaderComponent from "./components/HeaderComponent";
import HeroComponent from "./components/HeroComponent";
import AboutMeComponent from "./components/AboutMeComponent";
import FeaturedWork from "./components/FeaturedWorkComponent";


export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-[var(--background)] font-sans">
      <HeaderComponent />
      <section className="w-full max-w-5xl px-4">
        <HeroComponent />
        <AboutMeComponent />
        <FeaturedWork />
      </section>
    </main>
  );
}
