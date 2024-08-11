"use client";
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function CardComp() {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">Frontend Radio</h4>
        <p className="text-tiny uppercase font-bold">Artikel</p>
        <small className="text-default-500">Sunday, 11 Aug 2024</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2 ">
        <Image
          alt="Card background"
          className=" rounded-xl w-full"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={300}
        />
      </CardBody>
    </Card>
  );
}
