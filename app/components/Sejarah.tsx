const History = () => {
  return (
    <section
      id="content1"
      className="bg-gradient-to-b from-gray-100 from-90% to-white "
    >
      <div
        id="sejarah"
        className="py-20 px-4 md:px-24 lg:px-16 gap-16 grid grid-cols-1 sm:grid-cols-2"
      >
        <div className="relative mx-auto lg:max-w-2xl">
          <div className="w-full relative transition-shadow duration-300 hover:shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt=""
              className="w-full h-56 rounded shadow-lg object-cover sm:h-64 md:h-80 lg:h-96"
            />
          </div>
        </div>
        <div className="flex flex-col md:mx-auto lg:max-w-2xl md:mb-12">
          <div className="mx-auto my-6 text-3xl font-bold leading-none text-gray-900 max-w-lg sm:text-4xl">
            <p className="text-3xl font-bold tracking-tight font-sans sm:text-4xl sm:leading-none text-start sm:text-center">
              Sejarah
            </p>
          </div>
          <p className="text-justify indent-8 text-gray-700 md:text-lg mb-4">
            <span className="font-bold">Basab</span> asal kata dari asab,
            ditambah awalan Be (B) menjadi Be Asab, dalam bahasa Kutai Be Asab
            berarti ada kelihatan Asab, yaitu dimana ada kelihatan Asab (Asab
            api) di dalam hutan belantara, menunjukkan bahwa disitu ada berdiam
            Suku Dayak yang disebut SUKU DAYAK BASAB.
          </p>
          <p className="text-justify indent-8 text-gray-700 md:text-lg">
            Pada tahun 1730, berpindah sekelompok Suku Dayak Basab dari Daerah
            Manubar menunju selatan dan mendarat di daerah Sepaku, kemudian
            menuju ke Gunung Parung dan bediam di GOA HUNGAK. Suku Dayak Basab
            di bawah pimpinan seorang Kepala Adat yang bernama MAH TOREK dengan
            anggota sebanyak 27 Kepala Keluarga. Mata pencaharian pada saat itu
            adalah berburu binatang dan mengumpulkan sarang burung di Goa Parung
            (bekas peninggalan mereka adalah batang kayu ulin dengan ukuran
            besar, yang dijadikan mereka jembatan di dalam goa parung untuk
            memetik sarang burung dan melintasi sebuah jurang yang dalam)
          </p>
        </div>
      </div>
    </section>
  );
};

export default History;
