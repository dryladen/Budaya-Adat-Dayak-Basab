import React from "react";
import CardComp from "@/app/components/card";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-100 p-4 md:p-12 lg:p-20 "
    >
      <div className=" mb-4 max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="mt-6 mb-4 md:justify-center text-3xl md:text-6xl font-bold flex flex-wrap text-gray-900">
          Blog
        </h2>
        <p className="text-gray-500 text-base md:text-lg">
          Kunjungi blog kami untuk mendapatkan informasi terbaru seputar Dayak
          Basab
        </p>
      </div>
      <div className="grid mb-8 gap-5 md:gap-10 sm:grid-cols-2 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
        <CardComp />
        <CardComp />
        <CardComp />
        <CardComp />
        <CardComp />
        <CardComp />
      </div>
    </section>
  );
};

export default Blog;
