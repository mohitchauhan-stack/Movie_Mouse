import { IoMoonOutline } from "react-icons/io5";

import { IoSunnyOutline } from "react-icons/io5";

const DarkMode = () => {
  return (
    <div className="dark_mode">
      <input
        type="checkbox"
        name="dark_mode_input"
        id="dark_mode_toggle"
        className="peer hidden"
      />

      <label
        htmlFor="dark_mode_toggle"
        className="
          relative flex h-9 w-18 cursor-pointer items-center
          rounded-full bg-neutral-700
          p-1
          transition-colors duration-300
          peer-checked:bg-amber-100
        "
      >
        {/* Sun */}
        <span
          className="
            flex h-7 w-7 items-center justify-center
            rounded-full bg-amber-400
            transition-transform duration-300 ease-in-out
            peer-checked:translate-x-9
          "
        >
          <IoSunnyOutline className="h-6 w-6" />
        </span>

        {/* Moon */}
        <span
          className="
            absolute right-2
            flex h-6 w-6 items-center justify-center
            opacity-80
            transition-opacity duration-300
            peer-checked:opacity-40
          "
        >
          <IoMoonOutline className="h-6 w-6" />
        </span>
      </label>
    </div>
  );
};

export default DarkMode;
