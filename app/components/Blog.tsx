import React from "react";
import CardComp from "./card";

const Blog = () => {
  return (
    <section id="content-2" className="bg-white p-4 sm:p-16 lg:py-20">
      <div className="">
        <div className="mt-0 mr-auto mb-0 ml-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full">
          <div className="mt-0 mr-auto mb-10 ml-auto max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div className="mt-0 mr-auto mb-6 ml-auto font-bold leading-none text-gray-900 text-3xl max-w-lg font-sans tracking-tight sm:text-4xl md:mx-auto">
              <p className="font-bold leading-none text-gray-900 text-3xl max-w-lg font-sans tracking-tight sm:text-4xl md:mx-auto inline">
                Blog
              </p>
            </div>
            <p className="text-gray-700 text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </p>
          </div>
          <div className="grid mb-8 max-w-sm gap-5 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
            <CardComp />
            <CardComp />
            <CardComp />
            <CardComp />
            <CardComp />
            <CardComp />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
