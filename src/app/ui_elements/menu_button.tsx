//  
//  File: menu_button.tsx
//  Description: An encapsulation of the main menu button
//
//

import { motion, useCycle } from "motion/react"
import MenuItem from "./menu_item";
import { highlight_variants_x } from "./ui_variants"
import "material-symbols";

const menu_open_variants = {
  closed: { 
    opacity: 0,
    scaleX: 0.5,
    scaleY: 0,
    y: "-45%",
    x: "50%",
    transition: { 
      ease: "easeOut", 
      duration: 0.15}
  },
  open: {
    opacity: 1,
    scaleX: 1,
    scaleY: 1,
    y: 0,
    x:0,
    transition: { 
      type: "spring", 
      stiffness: 2500, 
      damping: 100,
      delayChildren: 0.02,
      staggerChildren: 0.04}
  }
};

const item_variants = {
  closed: {
    scale: 0.95,
    x: 10,
    y: -1,
    opacity: 0,
    transition: { ease: "easeOut", duration: 0.15 }
  },
  open: {
    scale: 1,
    x: 0,
    y: 0,
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 1500,
      damping: 100}
  }
};



export default function MenuButton() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div>
      <motion.button 
      initial="rest"
      whileHover="hover"
      whileFocus="hover"
      animate="rest"
      className="h-11 w-11 relative outline-0 z-50"
      onClick={() => toggleOpen()}
      >
        <motion.div 
          className="absolute h-0.75 bottom-0 inset-x-0 justify-center bg-cpink-400" 
          variants={highlight_variants_x} />
        <div className="material-symbols-rounded text-white align-middle">menu</div>
      </motion.button>
      <div className="absolute right-0 top-0 h-screen w-50 overflow-hidden">
      <motion.ul 
        className="absolute top-11 right-0 h-fit w-fit p-3.5 rounded-lg border-1 border-zinc-200 bg-zinc-800 opacity-0 shadow-xl/20 font-[family-name:var(--font-outfit)] font-medium flex-col space-y-3 text-stone-200 text-xl"
        variants={menu_open_variants}
        animate={isOpen ? "open" : "closed"}
      >
        <motion.li variants={item_variants}><MenuItem symbol="home" text="Home" link="/"/></motion.li>
        <motion.li variants={item_variants}><MenuItem symbol="search" text="Search" link="/search"/></motion.li>
        <motion.li variants={item_variants}><MenuItem symbol="settings" text="Settings" link="/settings"/></motion.li>
        <motion.li variants={item_variants}><MenuItem symbol="account_circle" text="Account" link="/account"/></motion.li>
        <motion.li variants={item_variants}><MenuItem symbol="partner_exchange" text="About Us" link="/about-us"/></motion.li>
      </motion.ul>
      </div>
    </div>
  )
}