import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Lokasi`.
 */
export type LokasiProps = SliceComponentProps<Content.LokasiSlice>;

/**
 * Component for "Lokasi" Slices.
 */
const Lokasi = ({ slice }: LokasiProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="lokasi"
      className="p-4 md:p-12 lg:p-20 bg-gray-100"
    >
      <p className="mb-4 md:justify-center text-3xl md:text-6xl font-bold flex flex-wrap text-gray-900">
        {slice.primary.judul}
      </p>
      <iframe
        className="w-full rounded-3xl shadow-lg"
        src={`${slice.primary.link_google_maps}`}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Lokasi;
