const Moviecard = () => {
  return (
    <a href="" className="movie_card w-30">
      <img src="public/logo.jpg" alt="" className="movie_poster" />
      <div className="movie_details">
        <h3 className="movie_details_heading">Movie Name</h3>
        <div className="movie_date_rate">
          <p>10-20-2020</p>
          <p>9.8 ⭐️</p>
        </div>
        <p className="movie_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus asperiores repellendus veritatis ea doloremque.
        </p>
      </div>
    </a>
  );
};

export default Moviecard;
