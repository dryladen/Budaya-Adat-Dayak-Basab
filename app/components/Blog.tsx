import React from "react";
import CardComp from "@/app/components/card";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-100 p-4 sm:p-16 lg:py-20 "
    >
      <div className="mt-0 mr-auto mb-10 ml-auto max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="font-bold leading-none text-gray-900 text-3xl tracking-tight sm:text-4xl lg:text-6xl mb-4">
          Blog
        </h2>
        <p className="text-gray-500 text-base md:text-lg">
          Kunjungi blog kami untuk mendapatkan informasi terbaru seputar Dayak
          Basab
        </p>
      </div>
      <div className="grid mb-8 gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
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
