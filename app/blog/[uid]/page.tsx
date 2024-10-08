import Blog from "@/app/components/Blog";
import CardComp from "@/app/components/card";
import { RichText } from "@/app/components/RichText";
import { createClient } from "@/prismicio";
import { Button } from "@nextui-org/react";
import { PrismicImage } from "@prismicio/react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
type Params = { uid: string };
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("blog", params.uid)
  .catch(() => notFound());
  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
export default async function Page({ params }: { params: Params }) {
  const client = createClient();

  const page = await client
    .getByUID("blog", params.uid)
    .catch(() => notFound());
  const blogs = await client.getAllByType("blog");

  return (
    <section className="pt-16 lg:pt-28 lg:pb-20 bg-gradient-to-b from-white to-gray-100 from-20%">
      <div className="p-4 lg:px-40">
        <PrismicImage
          
          imgixParams={{ border: [2, "000000"], borderRadius: 20 }}
          field={page.data.gambar}
          alt=""
        />
        <h1 className="mt-6 md:mt-16 mb-4 md:mb-8 text-3xl md:text-6xl font-bold flex flex-wrap text-gray-900">
          {page.data.judul}
        </h1>
        <div className="text-gray-900 leading-8">
          <RichText field={page.data.konten} />
        </div>
      </div>
      <div className="p-4 md:px-20">
        <div className="flex justify-between py-8">
          <h4 className="text-4xl font-bold text-gray-900">Blog Lainnya</h4>
          <Link href="/blog" className="block">
            <Button
              className="border-gray-700 text-gray-700 px-8 rounded-full"
              color="primary"
              variant="bordered"
            >
              Lihat Semua
            </Button>
          </Link>
        </div>
        <div className="grid mb-8 gap-5 md:gap-10 sm:grid-cols-2 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
          {blogs.map(
            (blog) =>
              blog.uid !== page.uid && (
                <CardComp
                  key={blog.uid}
                  title={blog.data.judul}
                  date={blog.data.tanggal}
                  image={blog.data.gambar}
                  konten={blog.data.konten}
                  uid={blog.uid}
                />
              )
          )}
        </div>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("blog");

  return pages.map((page) => {
    return {
      category: page.data.judul,
      uid: page.uid,
    };
  });
}
