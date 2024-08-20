import React from "react";
import { createClient } from "@/prismicio";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
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
  <Card
    key={uid}
    className="rounded-xl w-full flex flex-col sm:shadow-lg shadow-none"
  >
    <CardHeader className="p-0 flex-col items-start">
      <PrismicImage field={gambar} alt="" />
    </CardHeader>
    <CardBody className="overflow-visible p-4 w-full justify-end">
      <h4 className="font-bold text-4xl">{judul}</h4>
      <small className="text-default-500 flex items-end gap-1 justify-start">
        <Calendar width={16} />
        {tanggal}
      </small>
      <div className="overflow-hidden h-20 text-sm mt-4 text-gray-500">
        <RichText field={konten} />
      </div>
    </CardBody>
    <CardFooter>
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
    </CardFooter>
  </Card>
);

const Blog = async () => {
  const client = createClient();
  const blogs = await client.getAllByType("blog");
  return (
    <div className="flex flex-wrap basis-80 overflow-x-auto gap-4 sm:grid sm:grid-cols-2 md:gap-6 md:grid md:grid-cols-3 py-4">
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
