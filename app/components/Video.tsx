const Video = () => {
  return (
    <section className="relative md:p-20 flex gap-16 bg-gray-100 p-4 flex-col md:flex-row justify-center">
      <div className="p-20 shadow-lg absolute bg-red-500 left-0 -top-5 md:top-10 w-full lg:w-[680px] h-[430px] lg:rounded-r-[1.8rem]"></div>
      <iframe 
        className="rounded-3xl shadow-xl w-full relative z-10 border-2 border-white"
        width="640"
        height="350"
        src="https://www.youtube.com/embed/Xby6hbn1aAw?si=CRBcZbfoo1yYBcw8"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="relative z-10 md:bg-white  md:p-8 lg:p-20 rounded-3xl md:shadow-lg sm:top-10">
        <h2 className="text-6xl font-bold flex flex-wrap ">
          Berada di Desa Jonggon
        </h2>
        <p className="text-medium text-gray-500 mt-5 leading-8">
          Pada tahun 1970 masyarakat Suku Dayak Basab menjadi satu di Desa
          Jonggon Desa antara Dayak Basab Jitan dengan masyarakat yang berada di
          Desa Jonggon.
        </p>
      </div>
    </section>
  );
};

export default Video;
