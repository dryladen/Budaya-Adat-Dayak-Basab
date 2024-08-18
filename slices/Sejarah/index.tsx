"use client";
import { RichText } from "@/app/components/RichText";
import { Button } from "@nextui-org/react";
import { Content } from "@prismicio/client";
import { PrismicImage, SliceComponentProps } from "@prismicio/react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
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
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:justify-center text-3xl md:text-6xl font-bold flex flex-wrap text-gray-900"
        >
          {slice.primary.judul}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:text-medium lg:text-lg text-gray-500 "
        >
          <RichText field={slice.primary.konten} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="my-7 flex"
        >
          <Link href="/blog/sejarah">
            <Button
              startContent={<ChevronRight size={16} />}
              className="py-6 px-8 inline-flex text-lg justify-center items-center rounded-full text-white font-medium bg-amber-400 hover:bg-yellow-600 hover:-translate-y-2 focus:ring-0 transition-all focus:outline-none "
            >
              Baca Selengkapnya
            </Button>
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.75 }}
        className="relative flex justify-center"
      >
        <PrismicImage
          field={slice.primary.gambar}
          alt=""
          className="w-full h-fit rounded-3xl shadow-3xl"
        />
      </motion.div>
    </section>
  );
};

export default Sejarah;
