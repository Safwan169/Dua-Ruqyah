"use client"
import { useContext } from "react";
import Dua from "../Dua/Dua";
import { my_context } from "@/app/ContextProvider";
const SubCategory = ({data}) => {


  
  const {subCatId,setSubCatId}=useContext(my_context)
  return (
    <div
      onClick={() =>setSubCatId(data?.id)}
      className="border-l-2 border-dotted  text-center w-full px-6 mx-5 py-2 text-[16px]  relative border-l-green-600     "
    >
      <div
        className={` ${
          subCatId == data?.id ? "text-green-600" : ""
        } flex items-center text-left justify-start `}
      >
        <p className="w-2 h-2 absolute -left-1 bg-green-500 rounded-full "></p>
        {data?.name} <br />
      </div>
      <div>
        {data?.id == subCatId && (<div className="">
            {data?.duas?.map((data, index) => (
              <Dua kay={index} text={data} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubCategory;
