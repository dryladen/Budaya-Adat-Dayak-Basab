import HeroImage from "@/app/components/HeroImage";
import Sejarah from "@/app/components/Sejarah";
import Lokasi from "@/app/components/Lokasi";
import Blog from "@/app/components/Blog";
import Video from "@/app/components/Video";

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
