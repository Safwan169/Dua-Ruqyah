"use client ";

import { my_context } from "@/app/ContextProvider";
import { useContext } from "react";

const CategorySearchBar = () => {

  const {setSearchValue}=useContext(my_context)

  const handleSearchValue=e=>{
    setSearchValue(e.target.value.toLowerCase())
    // console.log(e.target.value)

  }
  return (
    <div className="mt-4 px-2">
      <div className="relative">
        <input
        onChange={handleSearchValue}
          type="text"
          placeholder="Search Categories"
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zm-6 4a6 6 0 1110.392 4.145l4.854 4.854a1 1 0 01-1.414 1.414l-4.854-4.854A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default CategorySearchBar;
