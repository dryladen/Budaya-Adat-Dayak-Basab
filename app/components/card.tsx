"use client";
import React from "react";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { ChevronRight } from "lucide-react";

export default function CardComp() {
  return (
    <Card className="p-3 rounded-3xl">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">Frontend Radio</h4>
        {/* <p className="text-tiny uppercase font-bold">Artikel</p> */}
        <small className="text-default-500">Sunday, 11 Aug 2024</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2 w-full ">
        <Image
          alt="Card background"
          className="rounded-xl w-full object-cover"
          src="/a17c.jpeg"
          width={600}
        />
        <p className="mt-4 text-sm text-default-500">
          Frontend Radio adalah sebuah podcast yang membahas tentang teknologi
          frontend yang sedang trending...
        </p>
        <Button
          className="mt-4 py-6 flex bg-yellow-400 hover:bg-yellow-700 text-white transition-all focus:outline-none focus:ring-0"
          color="default"
          
          radius="full"
          startContent={<ChevronRight size={24} />}
        >
          <span className="text-center text-white">Baca Selengkapnya</span>
        </Button>
      </CardBody>
    </Card>
  );
}
