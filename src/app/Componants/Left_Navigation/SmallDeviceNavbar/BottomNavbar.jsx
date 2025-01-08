import React from "react";

import LeftNavigationBigDevice from '../LeftNavigatinBigDevice'
import Image from "next/image";

const BottomNavbar = () => {

  const icons = [
    { icon: "/home.png" },
    { icon: "/Alldua.png" },
    { icon: "/memorize.png" },
    { icon: "/books.png" },
    { icon: "/ruqyah.png" },
    { icon: "/dua-info.png" },
    { icon: "/bookMark.png" },
  ];
  return (
    <div className="z-50 flex fixed  bottom-0 p-3 text-gray-900 justify-evenly bg-white w-full">

       {/* <div className="  "> */}
              {icons.map((icon, i) => (
                <Image key={i} src={icon.icon} alt="dua" width={24} height={24} />
              ))}
            </div>
    // </div>
  );
};

export default BottomNavbar;
