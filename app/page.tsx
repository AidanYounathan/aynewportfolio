import HeaderComponent from "./components/HeaderComponent";
import HeroComponent from "./components/HeroComponent";
import AboutMeComponent from "./components/AboutMeComponent";
import FeaturedWork from "./components/FeaturedWorkComponent";


export default function Home() {
  return (
    <main className="px-55 font-(family-name:--) ">
      <HeaderComponent />
      <HeroComponent />
      <AboutMeComponent />
      <FeaturedWork />
    </main>
  );
}
