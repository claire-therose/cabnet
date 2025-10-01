//  
//  File: menu_item.tsx
//  Description: A component for large menu items
//
//

import { motion } from "motion/react"
import { highlight_variants_y } from "./ui_variants";
import { usePathname } from "next/navigation";
import Link from 'next/link';
import clsx from 'clsx';
import "material-symbols";
import { MouseEventHandler } from "react";

export default function SettingsCategory({symbol, text, link, selected, onButtonClick}: {symbol: string, text: string, link: string, selected: boolean, onButtonClick: MouseEventHandler<HTMLButtonElement>}) {
  return (
    <motion.button 
    className="outline-0 w-full relative flex"
    initial="rest"
    whileHover="hover"
    whileFocus="hover"
    animate="rest"
    onClick={onButtonClick}>
      <div className="grow"/>
      <div className={clsx("flex items-center rounded-lg p-1.5",{"bg-zinc-700":selected==true})}>
        <div className="material-symbols-outlined text-zinc-100 p-1">{symbol}</div>
        <div className="text-zinc-100 w-fit rounded-lg">{text}</div>
      </div>
      <motion.div className="relative -right-0.25 h-8 top-1.75 w-0.75 bg-cpink-400 opacity-0" variants={highlight_variants_y}></motion.div>
    </motion.button>
  )
}

// select bar underneath?