"use client";

import CabnetLogo from "./cabnet_logo";
import MenuButton from "./menu_button";

export default function Home() {
  return (
    <div className="">
      <div className="w-full h-11"></div> 
      <div className="absolute top-0 w-full">
        {/* <div className="absolute bg-linear-to-r/oklch from-cpink-400/70 md:via-pink-500/1 to-fuchsia-400/70 h-11 w-full mask-position-[left_top_426.5px] topology-background mask-size-[20rem]" /> */}
        <div className="inline-flex flex-row h-11 w-full content-center brightness-100 shadow-md">
          <div className="grow justify-self-start flex p-2.5">
            <CabnetLogo /> 
          </div>
          <MenuButton /> 
        </div>
      </div>
    </div>
  );
}