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
    <Card className="rounded-3xl w-full ">
      <CardHeader className="p-0 flex-col items-start">
        <div className="object-bottom overflow-hidden h-60">
          <PrismicImage
            field={image}
            alt=""
          />
        </div>
      </CardHeader>
      <CardBody className="overflow-visible p-4 w-full ">
        <h4 className="font-bold text-4xl">{title}</h4>
        <small className="text-default-500 flex items-end gap-1 justify-start">
          <Calendar width={16} />
          {date}
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
            <span className="text-center text-white text-lg">Baca Selengkapnya</span>
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
}
