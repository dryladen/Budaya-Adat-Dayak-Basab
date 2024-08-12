const Video = () => {
  return (
    <section className="relative md:p-20 flex gap-20 bg-gray-100">
      <div className="p-20 absolute bg-red-500 left-0 top-10 w-[680px] h-[430px] rounded-r-[1.8rem]"></div>
      <iframe
        className="rounded-3xl shadow-xl w-full relative z-10 border-5 border-white "
        width="640"
        height="350"
        src="https://www.youtube.com/embed/Xby6hbn1aAw?si=CRBcZbfoo1yYBcw8"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div>
        <h2 className="text-6xl font-bold flex flex-wrap">
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
