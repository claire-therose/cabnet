"use client";

import CabnetLogo from "./cabnet_logo";
import MenuButton from "./menu_button";

export default function Home() {
  return (
    <div className="">
      {/* <div className="w-full h-11"></div>  */}
      <div className="absolute top-0 w-full">
        <div className="inline-flex flex-row h-11 w-full brightness-100">
          <div className="grow justify-self-start flex p-2.5">
            <CabnetLogo /> 
          </div>
          <MenuButton /> 
        </div>
      </div>
    </div>
  );
}