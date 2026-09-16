import { useEffect, useState } from "react";

import FilterGroup from "./FilterGroup";
import Moviecard from "./Moviecard";

const Movielist = () => {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

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

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((preVal) => ({ ...preVal, [name]: value }));
  };

  console.log(sort);

  useEffect(() => {
    fetchApiData();
  }, []);
  0;

  return (
    <section className="main_content">
      <header className="movielist_header flex justify-between h-10 items-center ">
        <h2 className="movielist_heading">Popular 🔥</h2>
        <div className="movielist_fs flex">
          <FilterGroup
            minRating={minRating}
            onRatingClick={handleFilter}
            ratings={[8, 7, 6]}
          />

          <select
            name="by"
            id=""
            onChange={handleSort}
            value={sort.by}
            className="movie_sorting mx-2 bg-neutral-500 rounded-md p-1"
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select
            name="order"
            id=""
            onChange={handleSort}
            value={sort.order}
            className="movie_sorting bg-neutral-500 rounded-md p-1"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
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
