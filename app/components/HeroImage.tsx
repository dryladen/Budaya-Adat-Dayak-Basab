import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const response = await fetch(`${process.env.NEXT_HYGRAPH_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query MyQuery {
  heroImage(where: {id: "clzu22i5g7a0o07zlh4k2b0ye"}) {
    id
    judul
    deskripsi
    gambar {
      url
    }
  }
}`,
    }),
  });
  const json = await response.json();
  return json.data.heroImage;
}

const HeroImage = async () => {
  const data = await getData();
  console.log(data)
  return (
    <section
      id="hero-image"
      className="p-4 pb-20 md:px-12 lg:px-20 bg-gradient-to-b from-white from-90%  to-gray-100 relative mt-16 md:mt-24"
    >
      <div className="hidden md:flex bg-red-400 p-10 rounded-full w-20 h-20 absolute top-14 -left-10"></div>
      <div className="hidden md:flex bg-red-400 p-10 rounded-full w-20 h-20 absolute bottom-20 left-96"></div>
      <div className="hidden md:flex bg-red-400 p-20 rounded-full w-44 h-44 absolute bottom-10 -right-20"></div>
      <div className=" mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div className="">
            <h1 className="block font-bold text-gray-900 text-4xl sm:text-6xl md:text-6xl lg:text-[88px] lg:leading-tight">
              {data.judul}
            </h1>
            <p className="mt-3 md:text-medium lg:text-lg text-gray-500">
              {data.deskripsi}
            </p>
            <Button className="sm:py-6 sm:px-8 inline-flex my-7 text-lg justify-center items-center rounded-full text-white font-medium bg-amber-400 hover:bg-yellow-600 hover:-translate-y-2 focus:ring-0 transition-all focus:outline-none ">
              <Link href="#sejarah">Mari Jelajahi</Link>
            </Button>
          </div>
          <div className="relative">
            <Image
              priority={true}
              src={data.gambar.url}
              alt="hero"
              width={1200}
              height={200}
              className="rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
