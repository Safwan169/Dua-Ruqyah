"use client";

import { useContext } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,

  // TransitionChild,
} from "@headlessui/react";
import Setting from "./Setting";
import {my_context} from "../../ContextProvider"




export default function SettingSmallDevice() {


  const { setting,setSetting }=useContext(my_context);



  return (
    // <>
    // </>
    <Dialog open={setting} onClose={setSetting} className="relative z-50">
    <DialogBackdrop
      transition
      className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
    />

    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <DialogPanel
            transition
            className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
          >
           
           <Setting/>
            
          </DialogPanel>
        </div>
      </div>
    </div>

  </Dialog>
  );
}
