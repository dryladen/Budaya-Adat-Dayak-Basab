import React from "react";
import { createClient } from "@/prismicio";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { PrismicImage } from "@prismicio/react";
import { Calendar, ChevronRight } from "lucide-react";
import { RichText } from "./RichText";
import Link from "next/link";
import * as prismic from "@prismicio/client";

type CardLinkProps = {
  uid: string;
  judul: prismic.KeyTextField;
  tanggal: prismic.DateField;
  gambar: any;
  konten: any;
};

const CardLink = ({ uid, judul, tanggal, gambar, konten }: CardLinkProps) => (
  <div className="snap-start">
    <Card key={uid} className="rounded-3xl w-full ">
      <CardHeader className="p-0 flex-col items-start">
        <div className="object-bottom overflow-hidden h-60">
          <PrismicImage field={gambar} alt="" />
        </div>
      </CardHeader>
      <CardBody className="overflow-visible p-4 w-full ">
        <h4 className="font-bold text-4xl">{judul}</h4>
        <small className="text-default-500 flex items-end gap-1 justify-start">
          <Calendar width={16} />
          {tanggal}
        </small>
        <div className="overflow-hidden h-20 text-sm mt-4 text-gray-500">
          <RichText field={konten} />
        </div>
        <Link href={`/blog/${uid}`} className="w-full block">
          <Button
            className="mt-4 rounded-3xl py-6 flex w-full bg-yellow-400 hover:bg-yellow-700 text-white transition-all focus:outline-none focus:ring-0"
            color="default"
            startContent={<ChevronRight size={24} />}
            href={`/blog/${uid}`}
          >
            <span className="text-center text-white text-lg">
              Baca Selengkapnya
            </span>
          </Button>
        </Link>
      </CardBody>
    </Card>
  </div>
);

const Blog = async () => {
  const client = createClient();
  const blogs = await client.getAllByType("blog");
  return (
    <div className="snap-x py-2 sm:snap-none flex overflow-x-scroll sm:overflow-x-hidden sm:grid mb-8 gap-5 md:gap-10 sm:grid-cols-2 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
      {blogs.map((blog) => (
        <CardLink
          key={blog.uid}
          uid={blog.uid}
          judul={blog.data.judul}
          tanggal={blog.data.tanggal}
          gambar={blog.data.gambar}
          konten={blog.data.konten}
        />
      ))}
    </div>
  );
};

export default Blog;
