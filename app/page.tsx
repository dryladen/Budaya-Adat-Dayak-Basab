import HeroImage from "./components/HeroImage";
import Sejarah from "./components/Sejarah";
import Lokasi from "./components/Lokasi";
import Blog from "./components/Blog";
import Video from "./components/Video";

export default function Home() {
  return (
    <>
      <HeroImage />
      <Video />
      <Sejarah />
      <Blog />
      <Lokasi />
    </>
  );
}
