import { RichText } from "@/app/components/RichText";
import { Button } from "@nextui-org/react";
import { Content } from "@prismicio/client";
import { PrismicImage, SliceComponentProps } from "@prismicio/react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

/**
 * Props for `Sejarah`.
 */
export type SejarahProps = SliceComponentProps<Content.SejarahSlice>;

/**
 * Component for "Sejarah" Slices.
 */
const Sejarah = ({ slice }: SejarahProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="sejarah"
      className="bg-gradient-to-b from-white from-90% to-gray-100 relative p-4 md:p-12 lg:p-20 md:gap-8 lg:gap-16 grid grid-cols-1 lg:grid-cols-2 justify-end"
    >
      <div className="flex flex-col">
        <h2 className="md:justify-center text-3xl md:text-6xl font-bold flex flex-wrap text-gray-900">
          {slice.primary.judul}
        </h2>
        <div className="md:text-medium lg:text-lg text-gray-500 ">
          <RichText field={slice.primary.konten} />
        </div>
        <div className="my-7 flex">
          <Button
            startContent={<ChevronRight size={16} />}
            className="py-6 px-8 inline-flex text-lg justify-center items-center rounded-full text-white font-medium bg-amber-400 hover:bg-yellow-600 hover:-translate-y-2 focus:ring-0 transition-all focus:outline-none "
          >
            <Link href="#sejarah">Baca Selengkapnya</Link>
          </Button>
        </div>
      </div>
      <div className="relative flex justify-center">
        <PrismicImage
          field={slice.primary.gambar}
          alt=""
          className="w-full h-fit rounded-3xl shadow-3xl"
        />
      </div>
    </section>
  );
};

export default Sejarah;
