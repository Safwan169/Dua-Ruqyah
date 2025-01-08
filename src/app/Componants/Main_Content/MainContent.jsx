"use client";
import { my_context } from "@/app/ContextProvider";
import React, { useContext } from "react";
import DuaStructure from "./DuaStructure";
const MainContent = () => {
  const { dua } = useContext(my_context);
  return (
    <div className=" overflow-hidden mt-5 overflow-y-scroll ">
      {dua.map((data, index) => (
        <section key={index} className="   ">
          <div className="bg-white w-full my-2 p-5 text-left text-green-500 font-medium rounded-lg ">
            Section:{" "}
            <span className="text-gray-500 font-normal text-[14px] ">
              {data?.name}
            </span>
          </div>
          <div className="max-w-4xl mx-auto   rounded-lg shadow-md ">
            <div className="">
              {data?.duas?.map((data, index) => (
                <DuaStructure  key={index} data={data} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default MainContent;
