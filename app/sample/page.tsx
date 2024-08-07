export default function Sample() {
  // Please use 'useState()' to implement Navbar functionality
  return (
    <div>
      <div className="bg-white pt-4 pr-8 pb-4 pl-8">
        <nav className="w-full">
          <div className="flex w-full justify-between max-w-screen-2xl md:flex-row mt-auto mr-auto mb-auto ml-auto">
            <div className="flex flex-row bg-white justify-between items-center mt-2 mb-2 md:m-0 md:flex">
              <a
                href="#"
                className="text-gray-600 text-center mr-6 font-medium text-base"
              >
                Product
              </a>
              <a
                href="#"
                className="text-gray-600 text-center mr-6 font-medium text-base"
              >
                Features
              </a>
              <a
                href="#"
                className="text-gray-600 text-center font-medium text-base"
              >
                Pricing
              </a>
            </div>
            <div className="flex flex-row justify-center items-center order-first md:order-none">
              <img
                src="https://res.cloudinary.com/speedwares/image/upload/v1659284687/windframe-logo-main_daes7r.png"
                className="w-12 md:w-16"
              />
            </div>
            <div className="flex flex-row bg-white justify-center items-center md:m-0 md:flex">
              <a
                href="#"
                className="text-gray-600 text-center mr-6 font-medium text-base"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-600 text-center mr-6 font-medium text-lg"
              >
                Sign In
              </a>
              <a
                href="#"
                className="text-gray-600 text-center font-medium text-lg"
              >
                Sign Up
              </a>
            </div>
            <div className="md:hidden flex ml-auto items-center">
              <div className="outline-none mobile-menu-button">
                <svg
                  id="Windframe_aVroxDBF0z"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500 hover:text-green-500"
                >
                  <path
                    id="Windframe_MeQpy967Nxs"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="hidden md:hidden mobile-menu">
            <div>
              <div className="flex flex-col">
                <a
                  href="#"
                  className="text-gray-600 text-center mt-2 font-medium text-base"
                >
                  Product
                </a>
                <a
                  href="#"
                  className="text-gray-600 text-center mt-2 font-medium text-base"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="text-gray-600 text-center mt-2 font-medium text-base"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-gray-600 text-center mt-2 font-medium text-base"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-gray-600 text-center mt-2 font-medium text-lg"
                >
                  Sign In
                </a>
                <a
                  href="#"
                  className="text-gray-600 text-center mt-2 font-medium text-lg"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="bg-white pt-0 pr-16 pb-0 pl-16">
        <div
          className="bg-transparent pt-16 pr-4 pb-16 pl-4 flex mr-auto ml-auto flex-col items-center relative lg:flex-row
lg:py-32 xl:py-48 md:px-8 max-w-screen-2xl"
        >
          <div
            className="flex justify-center items-center w-full h-full overflow-hidden lg:w-1/2 lg:justify-end lg:bottom-0
lg:left-0 lg:items-center"
          >
            <img
              src="https://res.cloudinary.com/macxenon/image/upload/v1626953574/Group_1_zrmcxj.png"
              className="object-contain
object-top lg:w-auto lg:h-full w-full h-auto"
            />
          </div>
          <div className="mr-auto ml-auto flex justify-end relative max-w-xl xl:pr-32 lg:max-w-screen-xl">
            <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
              <div className="mb-6 max-w-xl">
                <p
                  className="inline-block pt-1 pr-3 pb-1 pl-3 mb-4 text-pink-200 bg-pink-500 rounded-2xl uppercase text-xs
  font-semibold tracking-wider"
                >
                  Brand new
                </p>
                <div className="text-3xl font-bold tracking-tight text-gray-900 max-w-lg sm:text-4xl sm:leading-none mb-6">
                  <p className="text-black text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                    Write anything and start
                  </p>
                  <p
                    className="inline-block text-black text-3xl font-bold tracking-tight mr-2 sm:text-4xl
    sm:leading-none"
                  >
                    being
                  </p>
                  <p
                    className="inline-block text-blue-500 text-3xl font-bold tracking-tight sm:text-4xl
    sm:leading-none"
                  >
                    creative
                  </p>
                </div>
                <p className="text-gray-700 text-base md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim.
                </p>
              </div>
              <div className="flex flex-col md:flex-row">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="md:mr-2 focus:border-blue-700
  focus:outline-none focus:shadow-outline flex-grow transition duration-200 appearance-none text-black
  bg-gray-100 font-normal w-full h-12 text-xs rounded-md pt-3 pr-4 pb-3 pl-4 mb-2 border-2 shadow-sm
  border-gray-300"
                />
                <input
                  type="text"
                  placeholder="Email Address"
                  className="md:mr-2 focus:border-blue-700
  focus:outline-none focus:shadow-outline flex-grow transition duration-200 appearance-none text-black
  bg-gray-100 font-normal w-full h-12 text-xs rounded-md pt-3 pr-4 pb-3 pl-4 mb-2 border-2 shadow-sm
  border-gray-300"
                />
              </div>
              <div className="flex items-center mt-4 mr-0 mb-0 ml-0">
                <button
                  className="transition duration-200 hover:bg-blue-900 focus:shadow-outline focus:outline-none bg-blue-700
  text-white inline-flex font-semibold tracking-wide text-medium h-12 shadow-md items-center justify-center
  pr-6 pl-6 mr-6 rounded-lg"
                >
                  Get Started
                </button>
                <a
                  href="#"
                  className="text-black items-center inline-flex font-semibold pt-2 pr-2 pb-2 pl-2 transition-colors
  duration-200 hover:text-blue-300"
                >
                  <p>Learn More</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="w-full h-full"
                  >
                    <defs>
                      <pattern
                        id="9ef1ff62-feb2-41fe-8163-772b4c79de7b"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#9ef1ff62-feb2-41fe-8163-772b4c79de7b)"
                      width="52"
                      height="24"
                    />
                  </svg>
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
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
      <div className="bg-white pt-16 pr-4 pb-16 pl-4 md:px-24 lg:px-8 lg:py-20">
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
                <svg
                  id="Windframe_2c0umsqva8"
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden
  w-32 -mt-8 -ml-20 text-blue-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <div>
                    <div className="w-.135 h-.30">
                      <circle id="Windframe_i-ntUDJp14" cx="1" cy="1" r=".7" />
                    </div>
                  </div>
                  <rect
                    id="Windframe_XJIHtvXpbN"
                    fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                    className="w-52 h-24"
                  />
                </svg>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
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
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque.
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
                Taking the mick middle className bog roll bow ties are cool posh
                nosh off t'shop, stew and dumps.
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
      <div
        className="bg-white pt-16 pr-4 pb-16 pl-4 mr-auto ml-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full md:px-24 lg:px-8
lg:py-20"
      >
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
          <div className="text-center md:border-r">
            <p className="text-center text-4xl mb-2 font-bold lg:text-5xl xl:text-6xl text-blue-700">
              144K
            </p>
            <p className="text-center text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Downloads
            </p>
          </div>
          <div className="text-center md:border-r">
            <p className="text-center text-4xl mb-2 font-bold text-blue-700 lg:text-5xl xl:text-6xl">
              12.9K
            </p>
            <p className="text-center text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Subscribers
            </p>
          </div>
          <div className="text-center md:border-r">
            <p className="text-center text-4xl mb-2 font-bold text-blue-700 lg:text-5xl xl:text-6xl">
              48.3K
            </p>
            <p className="text-center text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Users
            </p>
          </div>
          <div className="text-center md:border-r">
            <p className="text-center text-4xl mb-2 font-bold text-blue-700 lg:text-5xl xl:text-6xl">
              24.5K
            </p>
            <p className="text-center text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Cookies
            </p>
          </div>
        </div>
      </div>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minimh.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between pt-5 pr-0 pb-10 pl-0 border-t border-gray-800 sm:flex-row">
            <p className="text-sm text-gray-500">
              © Copyright 2021 Lorem Inc. All rights reserved.
            </p>
            <div className="flex items-center mt-4 space-x-4 sm:mt-0">
              <a
                href=""
                className="fa-twitter h-5 fab text-gray-500
transition-colors duration-300 hover:text-teal-accent-400"
              ></a>
              <a
                href=""
                className="fa-instagram h-5 fab
text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
              ></a>
              <a
                href=""
                className="fa-facebook h-5
fab text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
