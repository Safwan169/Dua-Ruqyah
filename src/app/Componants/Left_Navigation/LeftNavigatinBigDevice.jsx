import Image from "next/image";
import React from "react";

const LeftNavigatinBigDevice = () => {
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
    <div className="flex w-fit rounded-3xl   flex-col h-full bg-white  justify-between">
      <Image className="p-3 xl:block hidden " src={"/Dua.png"} alt="dua" width={100} height={100} />
      <div className=" grid text-center gap-y-[27px] mx-auto">
        {icons.map((icon, i) => (
          <Image key={i} src={icon.icon} alt="dua" width={24} height={24} />
        ))}
      </div>

      <div className="mb-5 xl:block hidden bg-[#1FA45B] w-fit mx-auto p-3 rounded-[12px]">
        <Image src={"/heart.png"} alt="dua" width={24} height={24} />
      </div>
    </div>
  );
};

export default LeftNavigatinBigDevice;
