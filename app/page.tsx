import Image from "next/image";
import HeaderComponent from "./components/HeaderComponent";
import HeroComponent from "./components/HeroComponent";


export default function Home() {
  return (
    <main>
      <HeaderComponent />
      <HeroComponent />
    </main>
  );
}
