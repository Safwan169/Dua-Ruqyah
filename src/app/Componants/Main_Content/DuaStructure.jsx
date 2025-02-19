'use client'

import { useRef } from "react";

const DuaStructure = ({ data }) => {

  console.log(data,'adfsf')
  const audioRef = useRef(null);

  const handlePlayAudio = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };  return (
    <div
      id={`${data.id}`}
      className="mb-2 bg-white text-left p-5 rounded-lg space-y-5"
    >
      <h2 className="text-lg  flex items-center  gap-2 font-bold text-green-600 ">
        <img className="w-10 h-10" src="/duacard.svg" alt="duacard" />
        {data?.id}.{data?.name}
      </h2>
      <div>{data?.top_en}</div>
      <div>{data?.dua_arabic}</div>
      {data?.transliteration_en && (
        <div className="font-semibold text-gray-800">
          Transliteration:{data?.transliteration_en}
        </div>
      )}
      {data?.translation_en && (
        <div className="text-gray-500">Translation:{data?.translation_en}</div>
      )}{" "}
      <div> {data?.bottom_en}</div>
      <div>
        <span className="text-green-600 font-semibold mr-1">Reference:</span>
        {data?.refference_en}
      </div>
      <div className={`${data?.audio?'block':'hidden'}`}>
        <img
          src="/audiobtn.svg" 
          alt=" Icon"
          title="Data Base given link is not working"
          className="w-10 h-10 cursor-pointer rounded-full"
          onClick={handlePlayAudio}
        />
        <audio ref={audioRef} src={`${data?.audio}`}></audio>{" "}
      </div>
    </div>
  );
};

export default DuaStructure;
