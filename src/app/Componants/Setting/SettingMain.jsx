import React from "react";
import Setting from "./Setting";
import SettingSmallDevice from "./SettingSmallDevice";

const SettingMain = () => {
  return (
    <>
      <div className="hidden xl:block   overflow-hidden ">
        <Setting />
      </div>
      <div className="block xl:hidden">
        <SettingSmallDevice/>
      </div>
    </>
  );
};

export default SettingMain;
