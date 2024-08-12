import HeroImage from "./components/HeroImage";
import Sejarah from "./components/Sejarah";
import Lokasi from "./components/Lokasi";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <>
      <HeroImage />
      <Sejarah />
      <Blog />
      <Lokasi />
    </>
  );
}
