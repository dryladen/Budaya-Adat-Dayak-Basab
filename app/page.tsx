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
                <h1 className="block text-2xl font-bold text-red-600 sm:text-4xl lg:text-[40px] lg:leading-tight dark:text-white">
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
                    className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-1000 text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
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
            <div className="flex flex-col md:mx-auto lg:max-w-2xl md:mb-12">
              <div className="mx-auto my-6 text-3xl font-bold leading-none text-gray-900 max-w-lg sm:text-4xl">
                <p className="text-3xl font-bold tracking-tight font-sans sm:text-4xl sm:leading-none text-start sm:text-center">
                  Sejarah
                </p>
              </div>
              <p className="text-start text-gray-700 md:text-lg mb-4">
                <span className="font-bold">Basab</span> asal kata dari asab,
                ditambah awalan Be (B) menjadi Be Asab, dalam bahasa Kutai Be
                Asab berarti ada kelihatan Asab, yaitu dimana ada kelihatan Asab
                (Asab api) di dalam hutan belantara, menunjukkan bahwa disitu
                ada berdiam Suku Dayak yang disebut SUKU DAYAK BASAB.
              </p>
              <p className="text-justify first: text-gray-700 md:text-lg">
                Pada tahun 1730, berpindah sekelmpok Suku Dayak Basab dari
                Daerah Manubar menunju selatan dan mendarat di daerah Sepaku,
                kemudian menuju ke Gunung Parung dan bediam di GOA HUNGAK. Suku
                Dayak Basab di bawah pimpinan seorang Kepala Adat yang bernama
                MAH TOREK dengan anggota sebanyak 27 Kepala Keluarga. Mata
                pencaharian pada saat itu adalah berburu binatang dan
                mengumpulkan sarang burung di Goa Parung (bekas peninggalan
                mereka adalah batang kayu ulin dengan ukuran besar, yang
                dijadikan mereka jembatan di dalam goa parung untuk memetik
                sarang burung dan melintasi sebuah jurang yang dalam)
              </p>
            </div>
          </div>
        </section>
        <section id="content-2" className="bg-white p-4 sm:p-16 lg:py-20">
          <div className="">
            <div className="mt-0 mr-auto mb-0 ml-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full">
              <div className="mt-0 mr-auto mb-10 ml-auto max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div className="mt-0 mr-auto mb-6 ml-auto font-bold leading-none text-gray-900 text-3xl max-w-lg font-sans tracking-tight sm:text-4xl md:mx-auto">
                  <p className="font-bold leading-none text-gray-900 text-3xl max-w-lg font-sans tracking-tight sm:text-4xl md:mx-auto inline">
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
        <section id="lokasi" className="p-4 sm:p-16 bg-gray-100">
          <p className="text-3xl mb-6 font-bold tracking-tight text-center font-sans sm:text-4xl sm:leading-none">
            Lokasi
          </p>
          <iframe
          className="w-full"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1325.7696670610608!2d116.76141468246078!3d-0.6149928865750185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMzYnNTMuOSJTIDExNsKwNDUnNDQuNiJF!5e1!3m2!1sid!2sid!4v1723385171830!5m2!1sid!2sid"
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
