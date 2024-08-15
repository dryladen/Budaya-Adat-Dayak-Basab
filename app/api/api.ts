export async function getData() {
  const response = await fetch(`${process.env.NEXT_HYGRAPH_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query MyQuery {
  heroImage(where: {id: "clzu22i5g7a0o07zlh4k2b0ye"}) {
    id
    judul
    deskripsi
    gambar {
      url
    }
  }
}`,
    }),
  });
  const json = await response.json();
  return json.data.heroImage;
}

type DataSingleProps = {
  query: string;
  slug: string;
};
export async function getSingle({ query, slug }: DataSingleProps) {
  const response = await fetch(`${process.env.NEXT_HYGRAPH_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables: {
        slug: slug,
      },
    }),
  });
  const json = await response.json();
  return json.data;

}
