const Navbar = () => {
  return (
    <nav className="navbar h-20 flex justify-between border-b-2 items-center">
      <h1 className="font-extrabold text-3xl cursor-pointer">MovieMouse</h1>
      <div className="navbar_links flex gap-3 text-2xl">
        <a
          className="hover:bg-neutral-600 transition-all duration-300 h-fit px-3 py-1 rounded-md"
          href=""
        >
          Popular 🔥
        </a>
        <a
          className="hover:bg-neutral-600 transition-all duration-300 h-fit px-3 py-1 rounded-md"
          href=""
        >
          Top Rated ⭐️
        </a>
        <a
          className="hover:bg-neutral-600 transition-all duration-300 h-fit px-3 py-1 rounded-md"
          href=""
        >
          Upcoming 🥳
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
