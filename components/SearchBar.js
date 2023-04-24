import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const SearchBar = ({ label, placeholder }) => {
  return (
    <div className="">
      <div className="w-2/3 lg:w-full  max-w-lg lg:max-w-2xl content-center mx-auto my-8">
        <label htmlFor="search" className="sr-only">
          {label}
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon
              className="h-5 w-5 text-gray"
              aria-hidden="true"
            />
          </div>
          <input
            id="search"
            name="search"
            className="block w-full rounded-full border border-transparent bg-white py-2 pl-10 pr-3 leading-5 text-gray lg:text-xl sm:text-sm placeholder-gray focus:border-gray focus:bg-white focus:text-gray focus:outline-none focus:ring-gray "
            placeholder={placeholder}
            type="search"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
