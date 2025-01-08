import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdArrowDropDown } from "react-icons/md";

const NavbarBigDevice = () => {
  return (
    <div className="xl:flex hidden justify-between">
      <div className=" flex mx-10  justify-between items-center w-full ">
        <div className="text-lg font-semibold text-gray-800">Duas Page</div>

        {/* this is for search bar  */}

        <div className="relative  flex-1 max-w-md -translate-x-1/2 ">
          <input
            type="text"
            placeholder="Search by Dua Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 "
          />
          <button className="absolute bg-gray-100 p-2 rounded-md top-1/2 right-1 transform -translate-y-1/2 text-gray-500">
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
          </button>
        </div>
      </div>

      <div className="  text-left flex  gap-5   justify-end">
        {/* this is for user  */}
        <p className="flex gap-1 w-full justify-end items-center">
          <Image src={"/user.png"} alt="user" width={40} height={40} />
          <MdArrowDropDown size={20} />
        </p>
      </div>
    </div>
  );
};

export default NavbarBigDevice;
