import Image from "next/image";
import Link from "next/link";

const HeroImage = () => {
  return (
    <section
      id="hero-image"
      className="p-4 pb-20 sm:px-16 bg-gradient-to-b from-white from-90%  to-gray-100 relative"
    >
      <div className="bg-red-500 p-10 rounded-full w-20 h-20 absolute top-14 -left-10"></div>
      <div className="bg-red-500 p-10 rounded-full w-20 h-20 absolute bottom-20 left-96"></div>
      <div className="bg-red-500 p-20 rounded-full w-44 h-44 absolute bottom-10 -right-20"></div>
      <div className=" mx-auto relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div className="">
            <h1 className="block font-bold text-gray-900 sm:text-4xl lg:text-[88px] lg:leading-tight">
              <span className="">Dayak Basab</span>
            </h1>
            <p className="mt-3 text-lg text-gray-500">
              Mari mengenal lebih dekat tentang Suku Dayak Basab yang ada di
              Kalimantan Timur. Suku Dayak Basab memiliki kebudayaan yang unik
              dan menarik untuk dijelajahi.
            </p>
            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <Link
                className="py-5 px-8 inline-flex justify-center items-center font-medium rounded-full text-white bg-red-600 hover:bg-red-700 focus:outline-none "
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
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
