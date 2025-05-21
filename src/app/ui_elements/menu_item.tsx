//  
//  File: menu_item.tsx
//  Description: A component for large menu items
//
//

import { motion } from "motion/react"
import "material-symbols";

const highlight_variants = {
  rest: { 
    scaleY: 0,
    opacity: 0,
    transition: { ease: "easeOut", duration: 0.15 }
  },
  hover: {
    scaleY: 1,
    opacity: 0.7,
    transition: { type: "spring", stiffness: 2500, damping: 100 }
  }
};

export default function MenuItem({symbol, text}) {
  return (
    <motion.button 
    className="flex items-center outline-0 relative"
    initial="rest"
    whileHover="hover"
    whileFocus="hover"
    animate="rest">
      <motion.div className="absolute -left-0.75 h-6 w-0.75 bg-cpink-400 opacity-0" variants={highlight_variants}></motion.div>
      <div className="material-symbols-rounded msr-inline text-stone-200 p-1">{symbol}</div>
      <div className="pr-2 text-stone-200">{text}</div>
    </motion.button>
  )
}