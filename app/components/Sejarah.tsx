import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const History = () => {
  return (
    <section
      id="sejarah"
      className="bg-gradient-to-b from-white from-90% to-gray-100 relative p-4 md:p-12 lg:p-20 md:gap-8 lg:gap-16 grid grid-cols-1 lg:grid-cols-2 justify-end"
    >
      <div className="flex flex-col">
        <h2 className="mt-6 mb-4 md:justify-center text-3xl md:text-6xl font-bold flex flex-wrap text-gray-900">
          Sejarah
        </h2>
        <p className="text-justify indent-8 text-gray-700 md:text-lg mb-4">
          <span className="font-bold">Basab</span> asal kata dari asab, ditambah
          awalan Be (B) menjadi Be Asab, dalam bahasa Kutai Be Asab berarti ada
          kelihatan Asab, yaitu dimana ada kelihatan Asab (Asab api) di dalam
          hutan belantara, menunjukkan bahwa disitu ada berdiam Suku Dayak yang
          disebut SUKU DAYAK BASAB.
        </p>
        <p className="text-justify indent-8 text-gray-700 md:text-lg">
          Pada tahun 1730, berpindah sekelompok Suku Dayak Basab dari Daerah
          Manubar menunju selatan dan mendarat di daerah Sepaku, kemudian menuju
          ke Gunung Parung dan bediam di GOA HUNGAK. Suku Dayak Basab di bawah
          pimpinan seorang Kepala Adat yang bernama MAH TOREK dengan anggota
          sebanyak 27 Kepala Keluarga. Mata pencaharian pada saat itu adalah
          berburu binatang dan mengumpulkan sarang burung di Goa Parung (bekas
          peninggalan mereka adalah batang kayu ulin dengan ukuran besar, yang
          dijadikan mereka jembatan di dalam goa parung untuk memetik sarang
          burung dan melintasi sebuah jurang yang dalam)...
        </p>
        <div className="my-7 grid gap-3 w-full sm:inline-flex">
          <Link
            className="p-4 sm:py-5 sm:px-8 inline-flex text-lg justify-center items-center font-medium rounded-full text-white bg-yellow-400 hover:bg-yellow-600 focus:outline-none hover:-top-1 relative transition-all"
            href="#sejarah"
          >
            <ChevronRight size={24} className="mr-2" />
            Baca Selengkapnya
          </Link>
        </div>
      </div>
      <div className="relative flex justify-center">
        <Image
          src="/a17cc.jpeg"
          alt="gambar-ilustrasi"
          width={800}
          height={600}
          className="w-full h-fit rounded-3xl shadow-3xl "
        />
      </div>
    </section>
  );
};

export default History;
