import Image from "next/image";
import Link from "next/link";
import NavbarCompt from "./components/navbar";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <NavbarCompt />
        <section id="hero-image" className="bg-gray-100 min-h-screen p-8">
          <div className="max-w-[85rem] mx-auto">
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
              <div className="">
                <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-[40px] lg:leading-tight dark:text-white">
                  Budaya Adat{" "}
                  <span className="text-blue-600">Dayak Basab </span>
                </h1>
                <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
                  Mari kita lestarikan budaya adat Dayak Basab, yang merupakan
                  salah satu budaya adat yang ada di Kalimantan. Budaya ini
                  memiliki banyak keunikan dan keindahan yang patut kita jaga
                  dan lestarikan.
                </p>

                <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                  <Link
                    className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                  >
                    Mari Cari Tahu !
                  </Link>
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
        <section id="content1">
          <div className="bg-white pt-16 pr-4 pb-16 pl-4 md:px-24 lg:px-8 lg:py-20">
            <div className="mr-auto ml-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl flex-row bg-white">
              <div className="flex flex-col md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                  <p
                    className="mb-2 pt-3 pr-3 pb-3 pl-3 text-center text-white font-semibold bg-blue-700 tracking-wider text-xs
inline-block rounded-full uppercase"
                  >
                    Latest Package
                  </p>
                </div>
                <div
                  className="mt-6 mr-auto mb-6 ml-auto text-3xl font-bold leading-none tracking-tight text-gray-900 max-w-lg
font-sans sm:text-4xl"
                >
                  <div className="inline relative">
                    <span
                      className="items-center justify-center w-32 text-blue-300 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block flex absolute
  top-0 left-0 z-0 -mt-8 -ml-20"
                    >
                      
                    </span>
                    <p className="font-bold text-3xl inline tracking-tight font-sans sm:text-4xl sm:leading-none">
                      Improve
                    </p>
                  </div>
                  <p className="inline font-bold text-3xl tracking-tight ml-1 font-sans sm:text-4xl sm:leading-none">
                    your day
                  </p>
                  <p className="text-3xl font-bold tracking-tight font-sans sm:text-4xl sm:leading-none">
                    to the MAX with Music
                  </p>
                </div>
                <p className="text-base text-center text-gray-700 md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
              </div>
              <div className="relative mr-auto ml-auto lg:max-w-2xl">
                <div className="w-full relative transition-shadow duration-300 hover:shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                    className="w-full h-56 rounded shadow-lg object-cover sm:h-64 md:h-80 lg:h-96"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="content-2"
          className="bg-gray-100 pt-16 pr-4 pb-16 pl-4 md:px-24 lg:px-8 lg:py-20"
        >
          <div className="">
            <div className="mt-0 mr-auto mb-0 ml-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full">
              <div className="mt-0 mr-auto mb-10 ml-auto max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                  <p
                    className="inline-block pt-px pr-3 pb-px pl-3 mt-0 mr-0 mb-4 ml-0 text-xs font-semibold text-pink-200
rounded-full bg-pink-500 tracking-wider uppercase "
                  >
                    Brand new
                  </p>
                </div>
                <div
                  className="mt-0 mr-auto mb-6 ml-auto font-bold leading-none text-gray-900 text-3xl max-w-lg font-sans
tracking-tight sm:text-4xl md:mx-auto"
                >
                  <div className="relative inline-block">
                    
                    <p
                      className="font-bold leading-none text-gray-900 text-3xl relative max-w-lg font-sans tracking-tight sm:text-4xl
  md:mx-auto inline"
                    >
                      Improve
                    </p>
                  </div>
                  <p className="inline"></p>
                  <p
                    className="font-bold leading-none text-gray-900 text-3xl max-w-lg font-sans tracking-tight sm:text-4xl md:mx-auto
inline"
                  >
                    your day to the MAX with Music
                  </p>
                </div>
                <p className="text-gray-700 text-base md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim.
                </p>
              </div>
              <div className="grid mt-0 mr-0 mb-8 ml-0 max-w-sm gap-5 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
                <div className="pt-20 pr-10 pb-20 pl-10 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
                  <p className="mb-2 text-xs font-semibold text-gray-600 tracking-wide uppercase">
                    20 Nov 2020
                  </p>
                  <p
                    className="inline-block mt-0 mr-auto mb-3 ml-auto font-extrabold text-2xl leading-7 max-w-xs transition-colors
duration-200 hover:text-blue-900"
                  >
                    Nori grape silver beet broccoli kombu beet
                  </p>
                  <p className="mt-0 mr-auto mb-2 ml-auto text-gray-700 max-w-xs">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque.
                  </p>
                  <p
                    className="inline-flex items-center font-semibold text-blue-700 transition-colors duration-200
hover:text-blue-900"
                  >
                    Read more
                  </p>
                </div>
                <div className="pt-20 pr-10 pb-20 pl-10 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
                  <p className="mb-2 text-xs font-semibold text-gray-600 tracking-wide uppercase">
                    20 Dec 2020
                  </p>
                  <p
                    className="inline-block mt-0 mr-auto mb-3 ml-auto font-extrabold text-2xl leading-7 max-w-xs transition-colors
duration-200 hover:text-blue-700"
                  >
                    Well, the way they make shows is, they make one
                  </p>
                  <p className="mt-0 mr-auto mb-2 ml-auto text-gray-700 max-w-xs">
                    Some pilots get picked and become television programs. Some
                    don't, become nothing.
                  </p>
                  <p
                    className="inline-flex items-center font-semibold text-blue-700 transition-colors duration-200
hover:text-blue-900"
                  >
                    Read more
                  </p>
                </div>
                <div className="pt-20 pr-10 pb-20 pl-10 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
                  <p className="mb-2 text-xs font-semibold text-gray-600 tracking-wide uppercase">
                    20 Jan 2021
                  </p>
                  <p
                    className="inline-block mt-0 mr-auto mb-3 ml-auto font-extrabold text-2xl leading-7 max-w-xs transition-colors
duration-200 hover:text-blue-900"
                  >
                    Pommy ipsum smeg head whizz morris himer due
                  </p>
                  <p className="mt-0 mr-auto mb-2 ml-auto text-gray-700 max-w-xs">
                    Taking the mick middle className bog roll bow ties are cool
                    posh nosh off t'shop, stew and dumps.
                  </p>
                  <p
                    className="inline-flex items-center font-semibold text-blue-700 transition-colors duration-200
hover:text-blue-900"
                  >
                    Read more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="footer">
        <div className="bg-gray-900 w-full pt-16 pr-4 pb-16 pl-4 md:px-24 lg:px-8">
          <div className="mr-auto ml-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="mt-0 mr-0 mb-8 ml-0 grid row-gap-10 lg:grid-cols-6">
              <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                <div>
                  <p className="tracking-wide text-gray-300 text-medium">
                    Category
                  </p>
                  <div className="mt-2 mr-0 mb-0 ml-0 space-y-2">
                    <div>
                      <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                        Headlines
                      </p>
                    </div>
                    <div>
                      <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                        World news
                      </p>
                    </div>
                    <div>
                      <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                        Sports
                      </p>
                    </div>
                    <div>
                      <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                        Blogs
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="tracking-wide text-gray-300 text-medium">
                    Category
                  </p>
                  <div className="mt-2 mr-0 mb-0 ml-0 space-y-2">
                    <div>
                      <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                        Headlines
                      </p>
                    </div>
                    <div>
                      <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                        World news
                      </p>
                    </div>
                    <div>
                      <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                        Sports
                      </p>
                    </div>
                    <div>
                      <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                        Blogs
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="tracking-wide text-gray-300 text-medium">
                    Category
                  </p>
                  <div className="mt-2 mr-0 mb-0 ml-0 space-y-2">
                    <div>
                      <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                        Headlines
                      </p>
                    </div>
                    <div>
                      <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                        World news
                      </p>
                    </div>
                    <div>
                      <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                        Sports
                      </p>
                    </div>
                    <div>
                      <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                        Blogs
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="tracking-wide text-gray-300 text-medium">
                    Category
                  </p>
                  <div className="mt-2 mr-0 mb-0 ml-0 space-y-2">
                    <div>
                      <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                        Headlines
                      </p>
                    </div>
                    <div>
                      <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                        World news
                      </p>
                    </div>
                    <div>
                      <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                        Sports
                      </p>
                    </div>
                    <div>
                      <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                        Blogs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:max-w-md lg:col-span-2">
                <p className="tracking-wide text-gray-300 font-medium text-base">
                  Subscribe for updates
                </p>
                <div className="md:flex-row flex flex-col mt-4 mr-0 mb-0 ml-0">
                  <input
                    placeholder="Email"
                    type="text"
                    className="w-full h-12 pt-0 pr-4 pb-0 pl-4 mt-0 mr-0 mb-4 ml-0 bg-white
border-gray-300 border flex-grow transition duration-200 rounded shadow-sm appearance-none md:mr-2 md:mb-0
focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  />
                  <button
                    className="inline-flex items-center justify-center h-12 pt-0 pr-6 pb-0 pl-6 mt-0 mr-0 mb-4 ml-2
font-medium text-white rounded bg-blue-700 tracking-wide transition duration-200 shadow-md
hover:bg-deep-blue-900 focus:shadow-outline focus:outline-none"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="mt-4 mr-0 mb-0 ml-0 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minimh.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between pt-5 pr-0 pb-10 pl-0 border-t border-gray-800 sm:flex-row">
              <p className="text-sm text-gray-500">
                © Copyright 2021 Lorem Inc. All rights reserved.
              </p>
              <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                <Link
                  href=""
                  className="fa-twitter h-5 fab text-gray-500
transition-colors duration-300 hover:text-teal-accent-400"
                ></Link>
                <Link
                  href=""
                  className="fa-instagram h-5 fab
text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
                ></Link>
                <Link
                  href=""
                  className="fa-facebook h-5
fab text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
                ></Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
