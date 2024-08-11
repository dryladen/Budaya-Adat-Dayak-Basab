import Image from "next/image";
import Link from "next/link";
import NavbarCompt from "./components/navbar";
import CardComp from "./components/card";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen w-full">
        <NavbarCompt />
        <section id="hero-image" className="p-4 pb-20 sm:px-16">
          <div className=" mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-4 md:gap-8 xl:gap-20 md:items-center">
              <div className="">
                <h1 className="block text-2xl font-bold text-gray-800 sm:text-4xl lg:text-[40px] lg:leading-tight dark:text-white">
                  <span className="">Dayak Basab Jonggon</span>
                </h1>
                <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
                  Mari kita lestarikan budaya adat Dayak Basab, yang merupakan
                  salah satu budaya adat yang ada di Kalimantan. Budaya ini
                  memiliki banyak keunikan dan keindahan yang patut kita jaga
                  dan lestarikan.
                </p>
                <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                  <Link
                    className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                  >
                    Mari Cari Tahu !
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
        <section id="content1" className="bg-gray-100">
          <div
            id="sejarah"
            className="py-20 px-4 md:px-24 lg:px-16 gap-16 grid grid-cols-1 sm:grid-cols-2"
          >
            <div className="relative mx-auto lg:max-w-2xl">
              <div className="w-full relative transition-shadow duration-300 hover:shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt=""
                  className="w-full h-56 rounded shadow-lg object-cover sm:h-64 md:h-80 lg:h-96"
                />
              </div>
            </div>
            <div className="flex flex-col md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div className="mx-auto my-6 text-3xl font-bold leading-none text-gray-900 max-w-lg sm:text-4xl">
                <p className="text-3xl font-bold tracking-tight font-sans sm:text-4xl sm:leading-none">
                  Sejarah
                </p>
              </div>
              <p className="text-start text-gray-700 md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Animi sunt voluptas suscipit deleniti tempora
                saepe quia beatae. Cum, aut accusamus, cumque possimus, eius
                quam fuga porro exercitationem animi vero architecto! Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Delectus
                praesentium ipsam porro ex beatae quis ipsum rerum, doloremque
              </p>
            </div>
          </div>
        </section>
        <section id="content-2" className="bg-gray-100 py-16 px-16 lg:py-20">
          <div className="">
            <div className="mt-0 mr-auto mb-0 ml-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full">
              <div className="mt-0 mr-auto mb-10 ml-auto max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div
                  className="mt-0 mr-auto mb-6 ml-auto font-bold leading-none text-gray-900 text-3xl max-w-lg font-sans
tracking-tight sm:text-4xl md:mx-auto"
                >
                  <p
                    className="font-bold leading-none text-gray-900 text-3xl max-w-lg font-sans tracking-tight sm:text-4xl md:mx-auto
inline"
                  >
                    Blog
                  </p>
                </div>
                <p className="text-gray-700 text-base md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim.
                </p>
              </div>
              <div className="grid mb-8 max-w-sm gap-5 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
                <CardComp />
                <CardComp />
                <CardComp />
                <CardComp />
                <CardComp />
                <CardComp />
              </div>
            </div>
          </div>
        </section>
        <section className="p-16 bg-white flex flex-col gap-8">
          <p className="text-3xl font-bold tracking-tight text-center font-sans sm:text-4xl sm:leading-none">
            Lokasi
          </p>
          <iframe
            className="w-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255328.22007745947!2d116.51817732243236!3d-0.7198426769241854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df6ee9473d127b1%3A0x23ca67a59104ceec!2sJonggon%20Desa%2C%20Kec.%20Loa%20Kulu%2C%20Kabupaten%20Kutai%20Kartanegara%2C%20Kalimantan%20Timur!5e0!3m2!1sid!2sid!4v1723367809697!5m2!1sid!2sid"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </main>
      <Footer />
    </>
  );
}
