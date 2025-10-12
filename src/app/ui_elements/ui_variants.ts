import { Variants } from "motion";

export const highlight_variants_x: Variants = {
  rest: { 
    scaleX: 0,
    opacity: 0,
    transition: { ease: "easeOut", duration: 0.15 }
  },
  hover: {
    scaleX: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 2500, damping: 100 }
  }
};

export const highlight_variants_y: Variants = {
  rest: { 
    scaleY: 0,
    opacity: 0,
    transition: { ease: "easeOut", duration: 0.15 }
  },
  hover: {
    scaleY: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 2500, damping: 100 }
  }
};