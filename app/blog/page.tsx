import React from "react";
import Blog from "../components/Blog";

const blog = () => {
  return (
    <section id="blog" className="bg-white p-4 md:p-12 lg:p-20 ">
      <div className=" mb-4 sm:text-center md:mb-12">
        <h2 className="mt-6 text-3xl md:text-6xl font-bold flex flex-wrap text-gray-900">
          Blog
        </h2>
        <p className="text-gray-500 text-base md:text-lg text-start">
          Kunjungi blog kami untuk mendapatkan informasi terbaru seputar Dayak
          Basab
        </p>
      </div>
      <Blog />
    </section>
  );
};

export default blog;
