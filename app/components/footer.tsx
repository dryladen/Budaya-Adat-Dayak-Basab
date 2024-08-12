import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="bg-gray-900 w-full pt-8 px-4 md:px-24 lg:px-8">
        <div className="mr-auto ml-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid gap-5 grid-cols-2 mb-4 row-gap-8">
            <div className="flex flex-col justify-between">
              <p className="text-gray-300 text-4xl">Budaya Adat Dayak Basab</p>
              <div className="gap-2 flex flex-col">
                <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                  @budayaadatdayakbasab
                </p>
                <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                  budayaadatdayakbasab@gmail.com
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-4">
                <p className="text-xl font-semibold text-gray-300">Kunjungi</p>
                <Link
                  href="#"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500"
                >
                  Sejarah
                </Link>
                <Link
                  href="#"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500"
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500"
                >
                  Lokasi
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-xl font-semibold text-gray-300">
                  Media Sosial
                </p>
                <Link
                  href="#"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500"
                >
                  Facebook
                </Link>
                <Link
                  href="#"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500"
                >
                  Instagram
                </Link>
                <Link
                  href="#"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500"
                >
                  WhatsApp
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between py-5 border-t border-gray-800 sm:flex-row">
            <p className="text-sm text-gray-500">
              © Copyright 2024 Budaya Adat Dayak Basab.
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
  );
};

export default Footer;
