import React from "react";
import CardComp from "@/app/components/card";
import { createClient } from "@/prismicio";

const Blog = async () => {
  const client = createClient();

  const blogs = await client.getAllByType("blog");
  return (
    <div className="snap-x py-2 sm:snap-none flex overflow-x-scroll sm:overflow-x-hidden sm:grid mb-8 gap-5 md:gap-10 sm:grid-cols-2 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
      {blogs.map((blog) => (
        <>
          <div className="snap-start">
            <CardComp
              key={blog.uid}
              title={blog.data.judul}
              date={blog.data.tanggal}
              image={blog.data.gambar}
              konten={blog.data.konten}
              uid={blog.uid}
            />
          </div>
        </>
      ))}
    </div>
  );
};

export default Blog;
