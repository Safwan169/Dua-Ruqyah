import React from "react";

import LeftNavigationBigDevice from '../LeftNavigatinBigDevice'

const BottomNavbar = () => {
  return (
    <div className="z-50 flex fixed  bottom-0 pt-3 text-gray-500 justify-evenly bg-white w-full">
      <LeftNavigationBigDevice/>
    </div>
  );
};

export default BottomNavbar;
