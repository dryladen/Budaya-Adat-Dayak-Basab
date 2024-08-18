import Blog from "@/app/components/Blog";
import CardComp from "@/app/components/card";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BagianBlog`.
 */
export type BagianBlogProps = SliceComponentProps<Content.BagianBlogSlice>;

/**
 * Component for "BagianBlog" Slices.
 */
const BagianBlog =  ({ slice }: BagianBlogProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="blog"
      className="bg-gray-100 p-4 md:p-12 lg:p-20 "
    >
      <div className=" mb-4 w-full sm:text-center md:mb-12">
        <h2 className="mt-6 mb-4 md:justify-center text-3xl md:text-6xl font-bold flex flex-wrap text-gray-900">
          {slice.primary.judul}
        </h2>
        <p className="text-gray-500 text-base md:text-lg">
          {slice.primary.deskripsi}
        </p>
      </div>
      <div className="grid mb-8 gap-5 md:gap-10 sm:grid-cols-2 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
        <Blog />
      </div>
    </section>
  );
};

export default BagianBlog;
