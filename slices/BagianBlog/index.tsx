import Blog from "@/app/components/Blog";
import CardComp from "@/app/components/card";
import { createClient } from "@/prismicio";
import { Button } from "@nextui-org/react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

/**
 * Props for `BagianBlog`.
 */
export type BagianBlogProps = SliceComponentProps<Content.BagianBlogSlice>;

/**
 * Component for "BagianBlog" Slices.
 */
const BagianBlog = ({ slice }: BagianBlogProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="blog"
      className="bg-gray-100 p-4 md:p-12 lg:p-20 "
    >
      <div className=" mb-4 w-full sm:text-center md:mb-12">
        <div className="flex py-4 md:py-8 md:justify-center relative">
          <h2 className="md:justify-center text-3xl md:text-6xl font-bold flex flex-wrap text-gray-900">
            {slice.primary.judul}
          </h2>
          <Link href="/blog" className="absolute right-1 bottom-11 flex items-center">
            <Button
              className="border-gray-700 text-gray-700 px-8 rounded-full"
              color="primary"
              variant="bordered"
            >
              Lihat Semua
            </Button>
          </Link>
        </div>
        <p className="text-gray-500 text-base md:text-lg">
          {slice.primary.deskripsi}
        </p>
      </div>
      <Blog />
    </section>
  );
};

export default BagianBlog;
