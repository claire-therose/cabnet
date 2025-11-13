import { motion } from "motion/react";
import { highlight_variants_x } from "./ui_variants";
import Link from "next/link";

export default function SignInButton() {
  return (
    <motion.button 
    initial="rest"
    whileHover="hover"
    whileFocus="hover"
    animate="rest"
    className="h-11 px-3 relative">
      <Link href={"/sign-in"}></Link>
      <motion.div 
          className="absolute h-0.75 bottom-0 inset-x-0 justify-center bg-cpink-400"
          variants={highlight_variants_x} />
      <div className="font-[family-name:var(--font-outfit)] font-medium text-xl text-white text-center">Sign In</div>
    </motion.button>
  )
}