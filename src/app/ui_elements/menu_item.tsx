//  
//  File: menu_item.tsx
//  Description: A component for large menu items
//
//

import { motion } from "motion/react"
import "material-symbols";
import { highlight_variants_y } from "./ui_variants";

export default function MenuItem({symbol, text}) {
  return (
    <motion.button 
    className="flex items-center outline-0 relative"
    initial="rest"
    whileHover="hover"
    whileFocus="hover"
    animate="rest">
      <motion.div className="absolute -left-1 h-6 w-0.75 bg-cpink-400 opacity-0" variants={highlight_variants_y}></motion.div>
      <div className="material-symbols-rounded msr-inline text-stone-200 p-1">{symbol}</div>
      <div className="pr-2 text-stone-200">{text}</div>
    </motion.button>
  )
}