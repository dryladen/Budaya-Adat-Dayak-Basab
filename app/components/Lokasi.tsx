import React from "react";

const Lokasi = () => {
  return (
    <section id="lokasi" className="p-4 sm:p-16 bg-gray-100">
      <p className="text-3xl mb-6 font-bold tracking-tight text-center font-sans sm:text-4xl sm:leading-none">
        Lokasi
      </p>
      <iframe
        className="w-full rounded-lg"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1325.7696670610608!2d116.76141468246078!3d-0.6149928865750185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMzYnNTMuOSJTIDExNsKwNDUnNDQuNiJF!5e1!3m2!1sid!2sid!4v1723385171830!5m2!1sid!2sid"
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
