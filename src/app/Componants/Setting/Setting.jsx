"use client";
import Image from "next/image";
import React, { useState } from "react";

const Setting = () => {
  const SettingsData = [
    {
      id: 1,
      icon: "/language.png",
      text: "Language Settings",
    },
    {
      id: 2,
      icon: "/generalSetting.png",
      text: "General Settings",
    },
    {
      id: 3,
      icon: "/Alldua.png",
      text: "Font Settings",
    },
    {
      id: 4,
      icon: "/Alldua.png",
      text: "Appearance settings",
    },
  ];
  const [settingsId, setSettingsId] = useState(1);
  const handleSetting = (id) => {
    setSettingsId(id);
  };
  return (
    <div className="bg-white rounded-3xl min-w-[330px] mb-10 mt-5 p-5">
      <h1 className="font-bold text-xl">Settings</h1>

      <div className="space-y-[15px]">
        {SettingsData.map((item, index) => (
          <div
            onClick={() => handleSetting(item.id)}
            key={index}
            className={`${
              settingsId == item.id
                ? "border-l-4  border-l-green-700"
                : " border-l-white"
            } border-l-4 flex gap-4 p-2 mt-5 rounded-md  bg-[#F7F8FA]  items-center`}
          >
            <p className="bg-[#E8F0F5] rounded-full p-2">
              <Image src={item.icon} width={20} height={20} />
            </p>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Setting;
