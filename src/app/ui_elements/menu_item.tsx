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

export default function MenuItem({symbol, text, link}: {symbol: string, text: string, link: string}) {
  const pathname = usePathname()

  return (
    <motion.button 
    className="flex items-center outline-0 relative"
    initial="rest"
    whileHover="hover"
    whileFocus="hover"
    animate="rest">
      <Link 
      href={link}
      className={clsx("flex items-center outline-0 rounded-lg relative",{"bg-zinc-700":pathname==link})}>
        <motion.div className="absolute -left-1 h-6 w-0.75 bg-cpink-400 opacity-0" variants={highlight_variants_y}></motion.div>
        <div className="material-symbols-rounded msr-inline text-zinc-100 p-1">{symbol}</div>
        <div className="pr-2 text-white">{text}</div>
      </Link>
    </motion.button>
  )

}

// select bar underneath?