const FilterGroup = ({ minRating, onRatingClick, ratings }) => {
  return (
    <ul className="movie_filter flex gap-2">
      {ratings.map((rate) => (
        <li
          className={
            minRating === rate
              ? "movie_filter_item px-2 cursor-pointer underline"
              : "movie_filter_item px-2 cursor-pointer"
          }
          key={rate}
          onClick={() => onRatingClick({ rate })}
        >
          {rate}+ Star
        </li>
      ))}
    </ul>
  );
};

export default FilterGroup;
