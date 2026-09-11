const Moviecard = ({ movie }) => {
  return (
    <>
      <div className="flex flex-col w-70 h-110  m-3 ">
        <a
          href={`https://www.themoviedb.org/movie/${movie.id}`}
          target="_blank"
          className="h-full w-full border rounded-md shadow-lg shadow-amber-200 overflow-hidden  relative hover:scale-[1.01] transition-all duration-400 group"
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
            className="movie_poster w-full h-full"
          />
          <div className="movie_details absolute top-0 h-full w-full p-2.5 flex flex-col justify-end bg-linear-30  from-[rgba(0,0,0,1)] to-[rgba(255,255,255,0)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="movie_details_heading text-xl font-bold-">
              {movie.original_title}
            </h3>
            <div className="movie_date_rate flex justify-between">
              <p>{movie.release_date}</p>
              <p>{Math.round(movie.vote_average)} ⭐️</p>
            </div>
            <p className="movie_description">
              {movie.overview.slice(0, 100) + " ..."}
            </p>
          </div>
        </a>
        <h1 className="mt-2">Movie Name</h1>
      </div>
    </>
  );
};

export default Moviecard;
