import { Mail, Phone } from "lucide-react";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const FooterCompt = () => {
  return (
    <footer
      id="footer"
      className="bg-red-600 w-full pt-8 px-4 md:p-12 lg:px-20 lg:pb-0 lg:pt-12 "
    >
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 mb-4 ">
        <div className="flex flex-col  justify-between mb-6">
          <p className="text-gray-100 text-2xl md:text-4xl mb-4">Budaya Adat Dayak Basab</p>
          <div className="gap-2 flex flex-col">
            <div className="flex gap-2">
              <Phone className="text-white" width={14} />
              <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-white">
                +62-xxx-xxx-xxxx
              </p>
            </div>
            <div className="flex gap-2">
              <Mail className="text-white" width={14} />
              <p className="transition-colors duration-300 text-gray-100">
                dayakbasab@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 mb-4">
          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold text-gray-100">Kunjungi</p>
            <Link
              href="#sejarah"
              className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-100 hover:animate-appearance-in "
            >
              <span className="hover:border-b-3 hover:border-yellow-400 transition-colors">Sejarah</span>
            </Link>
            <Link
              href="#blog"
              className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-100 hover:animate-appearance-in "
            >
              <span className="hover:border-b-3 hover:border-yellow-400 transition-colors">Blog</span>
            </Link>
            <Link
              href="#lokasi"
              className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-100 hover:animate-appearance-in "
            >
              <span className="hover:border-b-3 hover:border-yellow-400 transition-colors">Lokasi</span>
            </Link>
          </div>
          <div className="flex flex-col gap-4 text-gray-100">
            <p className="text-xl font-semibold ">Media Sosial</p>
            <Link
              href="#"
              className="text-sm hover:animate-appearance-in transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-100 flex gap-2 items-center"
            >
              <FaFacebook fontSize={14} className="text-white" /><span>@dayak_basab</span>
            </Link>
            <Link
              href="#"
              className=" text-sm hover:animate-appearance-in transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-100 flex gap-2 items-center"
            >
              <FaInstagram fontSize={14} className="text-white" /><span>@dayak_basab</span>
            </Link>
            <Link
              href="#"
              className=" text-sm hover:animate-appearance-in transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-100 flex gap-2 items-center"
            >
              <FaWhatsapp fontSize={14} className="text-white" /><span>+62-8xx-xxx-xxxx</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between py-5 border-t border-white sm:flex-row">
        <p className="text-sm text-gray-100">
          © Copyright 2024 Budaya Adat Dayak Basab.
        </p>
      </div>
    </footer>
  );
};

export default FooterCompt;
