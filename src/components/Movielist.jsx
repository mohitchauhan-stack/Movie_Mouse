import Moviecard from "./Moviecard";

import { useEffect, useState } from "react";

const Movielist = () => {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);

  const fetchApiData = async () => {
    const resposne = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=58fa44c040037d0c23ad43428f1a5588",
    );
    const data = await resposne.json();
    // console.log(data);
    setMovies(data.results);
    setFilterMovies(data.results);
  };

  const handleFilter = (rate) => {
    if (rate === minRating) {
      setMinRating(0);
      setFilterMovies(movies);
    } else {
      setMinRating(rate);
      const filtered = movies.filter((movie) => movie.vote_average >= rate);
      setFilterMovies(filtered);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <section className="main_content">
      <header className="movielist_header flex justify-between h-10 items-center ">
        <h2 className="movielist_heading">Popular 🔥</h2>
        <div className="movielist_fs flex">
          <ul className="movie_filter flex gap-2">
            <li
              className={
                minRating === 8
                  ? "movie_filter_item px-2 cursor-pointer underline"
                  : "movie_filter_item px-2 cursor-pointer"
              }
              onClick={() => handleFilter(8)}
            >
              8+ Star
            </li>
            <li
              className={
                minRating === 7
                  ? "movie_filter_item px-2 cursor-pointer underline"
                  : "movie_filter_item px-2 cursor-pointer"
              }
              onClick={() => handleFilter(7)}
            >
              7+ Star
            </li>
            <li
              className={
                minRating === 6
                  ? "movie_filter_item px-2 cursor-pointer underline"
                  : "movie_filter_item px-2 cursor-pointer"
              }
              onClick={() => handleFilter(6)}
            >
              6+ Star
            </li>
          </ul>

          <select
            name=""
            id=""
            className="movie_sorting mx-2 bg-neutral-500 rounded-md p-1"
          >
            <option value="">SortBy</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>
          <select
            name=""
            id=""
            className="movie_sorting bg-neutral-500 rounded-md p-1"
          >
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards flex flex-wrap">
        {filterMovies.map((movie) => (
          <Moviecard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default Movielist;
