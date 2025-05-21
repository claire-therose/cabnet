"use client";
import Image from "next/image";
import { color, motion, spring } from "motion/react";
import CabnetLogo from "./ui_elements/cabnet_logo";
import MenuButton from "./ui_elements/menu_button";
import MenuPanel from "./ui_elements/menu_panel";

export default function Home() {
  return (
    <div className="">
      <div className="absolute bg-linear-to-r/oklch from-cpink-400/70 md:via-pink-500/1 to-fuchsia-400/70 h-11 w-full mask-position-[left_top_426.5px] topology_background mask-size-[20rem]" />
      <MenuPanel />
      <div className="inline-flex flex-row h-11 w-full content-center brightness-100">
        <div className="grow justify-self-start flex p-2.5">
          <CabnetLogo /> 
        </div>
        <MenuButton /> 
      </div>


      <div className="font-[family-name:var(--font-noto-sans)] font-medium text-stone-200 p-2.5 bg-stone-800">
        <p>
          so there I was, barebeque sauce on my titties
        </p>
      </div>


        {/* <motion.button
          className="font-[family-name:var(--font-outfit)] font-medium text-xl p-3 rounded-2xl bg-gray-100 text-gray-600 border-2 border-gray-300"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.97}}
          transition={{
            type: "spring",
            stiffness: 2000,
            damping: 40,
            mass: 1
          }}
          onHoverStart={() => console.log('hover started!')}
        >
          activate
        </motion.button>
        <div className="font-[family-name:var(--font-outfit)] font-semibold text-8xl text-cpink-500">
          cabnet
        </div>
        <p className="font-[family-name:var(--font-noto-sans)] font-medium text-base">
          this is truly the test of the times
        </p> */}
    </div>
  );
}
