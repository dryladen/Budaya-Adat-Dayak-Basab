"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { motion } from "framer-motion";
/**
 * Props for `Video`.
 */
export type VideoProps = SliceComponentProps<Content.VideoSlice>;

/**
 * Component for "Video" Slices.
 */
const Video = ({ slice }: VideoProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative md:p-12 lg:p-20 flex gap-16 bg-gradient-to-b from-gray-100 to-white from-90% p-4 flex-col md:flex-row justify-center"
    >
      <motion.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="p-20 shadow-xl absolute bg-red-500 left-0 -top-5 md:top-5 w-full lg:w-[680px] h-[430px] lg:rounded-r-[1.8rem]"
      ></motion.div>
      <motion.iframe
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="rounded-3xl shadow-xl w-full relative z-10 border-2 border-white"
        width="640"
        height="350"
        src={`${slice.primary.link_youtube}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></motion.iframe>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.15 }}
        className="relative z-10 md:bg-white h-full  md:p-8 lg:p-20 rounded-3xl md:shadow-lg sm:top-20"
      >
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold flex flex-wrap text-gray-900 mb-4">
          {slice.primary.judul}
        </h2>
        <p className="mt-3 md:text-medium lg:text-lg text-gray-500">
          {slice.primary.deskripsi}
        </p>
      </motion.div>
    </section>
  );
};

export default Video;
