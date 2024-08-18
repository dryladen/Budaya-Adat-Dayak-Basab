import { RichText } from "@/app/components/RichText";
import { Button } from "@nextui-org/react";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

/**
 * Props for `HeroImage`.
 */
export type HeroImageProps = SliceComponentProps<Content.HeroImageSlice>;

/**
 * Component for "HeroImage" Slices.
 */
const HeroImage = ({ slice }: HeroImageProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="hero-image"
      className="p-4 w-full sm:w-fit pb-20 md:px-12 lg:px-20 bg-gradient-to-b from-white from-90%  to-gray-100 relative mt-16 md:mt-24"
    >
      <div className="hidden md:flex bg-red-400 p-10 rounded-full w-20 h-20 absolute top-14 -left-10"></div>
      <div className="hidden md:flex bg-red-400 p-10 rounded-full w-20 h-20 absolute bottom-20 left-96"></div>
      <div className="hidden md:flex bg-red-400 p-20 rounded-full w-44 h-44 absolute bottom-10 -right-20"></div>
      <div className=" mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div className="">
            <h1 className="block font-bold text-gray-900 text-4xl sm:text-6xl md:text-6xl lg:text-[88px] lg:leading-tight">
              {slice.primary.judul}
            </h1>
            <div className="mt-3 mb-0 md:text-medium lg:text-lg text-gray-500">
              {<RichText field={slice.primary.deskripsi} />}
            </div>
            <Link href="#sejarah">
              <Button className="py-6 px-8 inline-flex my-7 text-lg justify-center items-center rounded-full text-white font-medium bg-amber-400 hover:bg-yellow-600 hover:-translate-y-2 focus:ring-0 transition-all focus:outline-none ">
                Mari Jelajahi
              </Button>
            </Link>
          </div>
          <div className="relative">
            <PrismicNextImage
              field={slice.primary.gambar}
              alt=""
              className="rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
