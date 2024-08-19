import Blog from "../components/Blog";
import { createClient } from "@/prismicio";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Blogs",
  };
}
const blog = () => {
  return (
    <section id="blog" className="bg-white pt-16 p-4 md:p-12 lg:p-20 lg:pt-28 ">
      <div className=" mb-4 sm:text-center md:mb-12">
        <h2 className="mb-4 text-3xl md:text-6xl font-bold flex flex-wrap text-gray-900">
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
