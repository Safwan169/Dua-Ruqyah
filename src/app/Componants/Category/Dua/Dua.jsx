"use client"
import { my_context } from "@/app/ContextProvider";
import React, { useContext, useState } from "react";
import { PiArrowBendDownRightThin } from "react-icons/pi";

const Dua = ({ text }) => {

  const {duaId,setDuaId}=useContext(my_context)
  const handleDua = (id) => {
    console.log("Dua Clicked" ,duaId,id);
    setDuaId(id)
  };
    console.log(text,'text dua')
  return (
    <a href={`/#${text?.id}`} onClick={()=>handleDua(text?.id)} className="mt-5">
      <p className="flex gap-2 items-center ">
        <PiArrowBendDownRightThin size={20} className="text-green-600 " />
       <span className={`${duaId==text?.id&&'text-green-600'} text-justify text-[14px] w-fit`}>
       {text?.name}
       </span>
      </p>
    </a>
  );
};

export default Dua;
