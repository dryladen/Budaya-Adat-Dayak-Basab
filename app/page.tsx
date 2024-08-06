import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="px-20 py-6">
        <h1 className="font-bold text-xl">Dayak Basab</h1>
        <div className="flex"></div>
      </nav>
      <section id="hero-image" className="bg-gray-100 min-h-screen p-20">
        <div className="max-w-[85rem] mx-auto">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
            <div className="">
              <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-[40px] lg:leading-tight dark:text-white">
                Budaya Adat <span className="text-blue-600">Dayak Basab </span>
              </h1>
              <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
                Mari kita lestarikan budaya adat Dayak Basab, yang merupakan
                salah satu budaya adat yang ada di Kalimantan. Budaya ini
                memiliki banyak keunikan dan keindahan yang patut kita jaga dan
                lestarikan.
              </p>

              <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                <a
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  Mari Cari Tahu !
                </a>
              </div>
            </div>
            <div className="relative ">
              <Image
                src="/foto-seni.jpg"
                alt="hero"
                width={1000}
                height={100}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="tradisi" className="bg-gray-500">
        <Image src="/foto-seni.jpg" alt="hero" width={1920} height={1080} />
      </section>
    </main>
  );
}
