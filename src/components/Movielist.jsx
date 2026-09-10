import Moviecard from "./Moviecard";

const Movielist = () => {
  return (
    <section className="main_content">
      <header className="movielist_header flex justify-between h-10 items-center ">
        <h2 className="movielist_heading">Popular 🔥</h2>
        <div className="movielist_fs flex">
          <ul className="movie_filter flex gap-2">
            <li className="movie_filter_item px-2 cursor-pointer active:underline underline">
              8+ Star
            </li>
            <li className="movie_filter_item px-2 cursor-pointer">7+ Star</li>
            <li className="movie_filter_item px-2 cursor-pointer">6+ Star</li>
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

      <div className="movie_cards">
        <Moviecard />
      </div>
    </section>
  );
};

export default Movielist;
