
const Page = ({ params }: { params: { slug: string } }) => {
  return <div className="mt-28">{params.slug}</div>;
};

export default Page;
