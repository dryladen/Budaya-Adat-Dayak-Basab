import { Button } from "@nextui-org/react";
import { Content } from "@prismicio/client";
import { PrismicImage, SliceComponentProps } from "@prismicio/react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

/**
 * Props for `Sejarah`.
 */
export type SejarahProps = SliceComponentProps<Content.SejarahSlice>;

/**
 * Component for "Sejarah" Slices.
 */
const Sejarah = ({ slice }: SejarahProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="sejarah"
      className="bg-gradient-to-b from-white from-90% to-gray-100 relative p-4 md:p-12 lg:p-20 md:gap-8 lg:gap-16 grid grid-cols-1 lg:grid-cols-2 justify-end"
    >
      <div className="flex flex-col">
        <h2 className="mt-6 mb-4 md:justify-center text-3xl md:text-6xl font-bold flex flex-wrap text-gray-900">
          {slice.primary.judul}
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
          <Button
            className="p-4 sm:py-6 sm:px-8 inline-flex text-lg justify-center items-center font-medium rounded-full text-white bg-yellow-400 hover:bg-yellow-600 focus:outline-none hover:-translate-y-2 relative transition-all"
            startContent={<ChevronRight size={24} className="mr-2" />}
          >
            <Link className="" href="#sejarah">
              Baca Selengkapnya
            </Link>
          </Button>
        </div>
      </div>
      <div className="relative flex justify-center">
        <PrismicImage
          field={slice.primary.gambar}
          alt=""
          className="w-full h-fit rounded-3xl shadow-3xl"
        />
      </div>
    </section>
  );
};

export default Sejarah;
