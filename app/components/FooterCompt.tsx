import { Mail, Phone } from "lucide-react";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const FooterCompt = () => {
  return (
    <footer
      id="footer"
      className="bg-red-600 w-full pt-8 px-4 md:p-12 lg:px-20 lg:pb-0 lg:pt-12 "
    >
      <div className="grid gap-5 grid-cols-2 mb-4 ">
        <div className="flex sm:flex-col  justify-between">
          <p className="text-gray-100 text-4xl">Budaya Adat Dayak Basab</p>
          <div className="gap-2 flex flex-col">
            <div className="flex gap-3">
              <Phone className="text-white" />
              <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-white">
                +62-xxx-xxx-xxxx
              </p>
            </div>
            <div className="flex gap-3">
              <Mail className="text-white" />
              <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-100">
                budayaadatdayakbasab@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold text-gray-100">Kunjungi</p>
            <Link
              href="#"
              className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-100"
            >
              Sejarah
            </Link>
            <Link
              href="#"
              className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-100"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-100"
            >
              Lokasi
            </Link>
          </div>
          <div className="flex flex-col gap-4 text-gray-100">
            <p className="text-xl font-semibold ">Media Sosial</p>
            <Link
              href="#"
              className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-100 flex gap-2"
            >
              <FaFacebook fontSize={24} className="text-white" /><span>@dayak_basab</span>
            </Link>
            <Link
              href="#"
              className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-100 flex gap-2"
            >
              <FaInstagram fontSize={24} className="text-white" /><span>@dayak_basab</span>
            </Link>
            <Link
              href="#"
              className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-100 flex gap-2"
            >
              <FaWhatsapp fontSize={24} className="text-white" /><span>+62-8xx-xxx-xxxx</span>
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
