import Image from "next/image";
import Link from "next/link";

const HeroImage = () => {
  return (
    <section
      id="hero-image"
      className="p-4 pb-20 md:px-20 bg-gradient-to-b from-white from-70%  to-gray-100 relative mt-16 md:mt-24"
    >
      <div className="hidden md:flex bg-red-400 p-10 rounded-full w-20 h-20 absolute top-14 -left-10"></div>
      <div className="hidden md:flex bg-red-400 p-10 rounded-full w-20 h-20 absolute bottom-20 left-96"></div>
      <div className="hidden md:flex bg-red-400 p-20 rounded-full w-44 h-44 absolute bottom-10 -right-20"></div>
      <div className=" mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div className="">
            <h1 className="block font-bold text-gray-900 text-4xl sm:text-6xl md:text-6xl lg:text-[88px] lg:leading-tight">
              Dayak Basab
            </h1>
            <p className="mt-3 text-lg text-gray-500">
              Mari mengenal lebih dekat tentang Suku Dayak Basab yang ada di
              Kalimantan Timur. Suku Dayak Basab memiliki kebudayaan yang unik
              dan menarik untuk dijelajahi.
            </p>
            <div className="my-7 grid gap-3 w-full sm:inline-flex">
              <Link
                className="py-5 px-8 inline-flex text-lg justify-center items-center font-medium rounded-full text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none "
                href="#sejarah"
              >
                Mari Jelajahi
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/a7cc.jpeg"
              alt="hero"
              width={1200}
              height={200}
              className="rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
