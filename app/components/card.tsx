"use client";
import React from "react";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import { Calendar, ChevronRight } from "lucide-react";
import { PrismicImage } from "@prismicio/react";
import { RichText } from "./RichText";
import * as prismic from "@prismicio/client";
import Link from "next/link";

type CardProps = {
  uid: string;
  title: prismic.KeyTextField;
  date: prismic.DateField;
  image: prismic.ImageFieldImage;
  konten: prismic.RichTextField;
};

export default function CardComp({
  uid,
  title,
  date,
  image,
  konten,
}: CardProps) {
  return (
    <Card className="p-3 rounded-3xl w-[400px]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-2xl">{title}</h4>
        <small className="text-default-500 flex items-end gap-1 justify-center">
          <Calendar width={16} />
          {date}
        </small>
      </CardHeader>
      <CardBody className="overflow-visible py-2 w-full ">
        <div className="rounded-3xl">
          <PrismicImage
            imgixParams={{ borderRadius: 100, border: [1, "100000"] }}
            field={image}
          />
        </div>
        <div className="overflow-hidden h-24 text-sm ">
          <RichText field={konten} />
        </div>
        <Button
          className="mt-4 py-6 flex bg-yellow-400 hover:bg-yellow-700 text-white transition-all focus:outline-none focus:ring-0"
          color="default"
          radius="full"
          startContent={<ChevronRight size={24} />}
        >
          <Link href={`/blog/${uid}`}>
            <span className="text-center text-white">Baca Selengkapnya</span>
          </Link>
        </Button>
      </CardBody>
    </Card>
  );
}
