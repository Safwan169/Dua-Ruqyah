"use client"
import { my_context } from '@/app/ContextProvider';
import React, { useContext } from 'react'
import { FaCog, FaSearch } from 'react-icons/fa'

const NavbarSmallDevice = () => {

    const {setting,setSetting}=useContext(my_context)
    console.log(setting,'asdff')
    const handleClick = () => {
        setSetting(!setting);
  
    };
  return (
    <nav className="bg-white shadow-lg z-50 px-4 py-2 xl:hidden flex items-center justify-between">
    {/* Logo and Title */}
    <div className="flex items-center space-x-5">
      <div className="bg-green-500 p-2 rounded-md">
        {/* <img
          src="/Dua.png" // Replace with your logo
          alt="Logo"
          className="w-6 h-6"
        /> */}
      </div>
      <h1 className="text-gray-800 font-medium text-lg">Dua & Ruqyah</h1>
    </div>

    {/* Search Bar */}
    <div className="sm:flex hidden items-center space-x-2 bg-gray-100 px-3 py-2 rounded-md w-1/2">
      <input
        type="text"
        placeholder="Search by Dua Name"
        className="bg-transparent w-full focus:outline-none text-sm"
      />
      <FaSearch className="text-gray-400" />
    </div>

    {/* Icons */}
    <div className="flex items-center space-x-4">
      <FaCog onClick={handleClick} className="text-green-500 w-5 h-5 cursor-pointer" />
      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
        <img
          src="/user.png" // Replace with your user avatar
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  </nav>
  )
}

export default NavbarSmallDevice
