import Image from "next/image";
import Link from "next/link";

const HeroImage = () => {
  return (
    <section
      id="hero-image"
      className="p-4 pb-20 sm:px-16 bg-gradient-to-b from-white from-90% to-gray-100"
    >
      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div className="">
            <h1 className="block font-bold sm:text-4xl lg:text-[88px] lg:leading-tight">
              <span className="">Dayak Basab</span>
            </h1>
            <p className="mt-3 text-lg text-gray-600">
              Mari mengenal lebih dekat tentang Suku Dayak Basab yang ada di
              Kalimantan Timur. Suku Dayak Basab memiliki kebudayaan yang unik
              dan menarik untuk dijelajahi.
            </p>
            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <Link
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-1000 text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Mari Jelajahi !
              </Link>
            </div>
          </div>
          <div className="relative mt-6">
            <Image
              src="/foto-seni.jpg"
              alt="hero"
              width={1200}
              height={200}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
