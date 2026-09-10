const Moviecard = () => {
  return (
    <>
      <div className="flex flex-col w-60 h-80 m-3 ">
        <a
          href=""
          className="h-full w-full border rounded-md shadow-lg shadow-amber-200 overflow-hidden  relative hover:scale-[1.01] transition-all duration-400 group"
        >
          <img
            src="public/logo.jpg"
            alt=""
            className="movie_poster w-full h-full"
          />
          <div className="movie_details absolute top-0 h-full w-full p-2.5 flex flex-col justify-end bg-linear-30  from-[rgba(0,0,0,1)] to-[rgba(255,255,255,0)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="movie_details_heading text-xl font-bold-">
              Movie Name
            </h3>
            <div className="movie_date_rate flex justify-between">
              <p>10-20-2020</p>
              <p>9.8 ⭐️</p>
            </div>
            <p className="movie_description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus asperiores repellendus veritatis ea doloremque.
            </p>
          </div>
        </a>
        <h1 className="mt-2">Movie Name</h1>
      </div>
    </>
  );
};

export default Moviecard;
