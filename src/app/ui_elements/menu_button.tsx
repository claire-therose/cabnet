//  
//  File: menu_button.tsx
//  Description: An encapsulation of the main menu button
//
//

import { motion, useCycle } from "motion/react"

const highlight_variants = {
  rest: { 
    scaleX: 0,
    transition: { ease: "easeOut", duration: 0.15 }
  },
  hover: {
    scaleX: 1,
    transition: { type: "spring", stiffness: 2500, damping: 100 }
  }
};

const menu_open_variants = {
  closed: { 
    scaleX: 0.5,
    scaleY: 0,
    y: "-18.5rem",
    x: "5rem",
    transition: { ease: "easeOut", duration: 0.15 }
  },
  open: {
    scaleX: 1,
    scaleY: 1,
    y: 0,
    x:0,
    transition: { type: "spring", stiffness: 2500, damping: 100 }
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
      className="h-11 w-11 relative outline-0"  
      onClick={() => toggleOpen()}>
        <motion.div 
          className="absolute h-0.75 bottom-0 inset-x-0 justify-center bg-cpink-400" 
          variants={highlight_variants}></motion.div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            className="fill-stone-200 place-self-center"
            >
            <path d="M153.33-240q-14.16 0-23.75-9.62-9.58-9.61-9.58-23.83 0-14.22 9.58-23.72 9.59-9.5 23.75-9.5h653.34q14.16 0 23.75 9.62 9.58 9.62 9.58 23.83 0 14.22-9.58 23.72-9.59 9.5-23.75 9.5H153.33zm0-206.67q-14.16 0-23.75-9.61-9.58-9.62-9.58-23.84 0-14.21 9.58-23.71 9.59-9.5 23.75-9.5h653.34q14.16 0 23.75 9.61 9.58 9.62 9.58 23.84 0 14.21-9.58 23.71-9.59 9.5-23.75 9.5H153.33zm0-206.66q-14.16 0-23.75-9.62-9.58-9.62-9.58-23.83 0-14.22 9.58-23.72 9.59-9.5 23.75-9.5h653.34q14.16 0 23.75 9.62 9.58 9.61 9.58 23.83 0 14.22-9.58 23.72-9.59 9.5-23.75 9.5H153.33z" />
        </svg>
      </motion.button>
      <motion.div 
        className="absolute top-11 right-0 h-150 w-70 rounded-lg bg-stone-800 shadow-xl/20 border-2 border-stone-500"
        variants={menu_open_variants}
        animate={isOpen ? "open" : "closed"}
      >
      </motion.div>
    </div>
  )
}