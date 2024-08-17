import { RichText } from "@/app/components/RichText";
import { createClient } from "@/prismicio";
import { PrismicImage } from "@prismicio/react";
import { notFound } from "next/navigation";
type Params = { uid: string };
export default async function Page({ params }: { params: Params }) {
  const client = createClient();

  const page = await client
    .getByUID("blog", params.uid)
    .catch(() => notFound());

  return (
    <section className="pt-28">
      <h1 className="text-6xl">{page.data.judul}</h1>
      <p>{page.data.tanggal}</p>
      <PrismicImage field={page.data.gambar} />
      <div>
        <RichText field={page.data.konten} />
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
