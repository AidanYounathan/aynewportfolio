import Image from "next/image";
import HeaderComponent from "./components/HeaderComponent";
import HeroComponent from "./components/HeroComponent";
import AboutMeComponent from "./components/AboutMeComponent";


export default function Home() {
  return (
    <main className="px-55">
      <HeaderComponent />
      <HeroComponent />
      <AboutMeComponent />
    </main>
  );
}
