import { motion, Variants } from "motion/react";
import { JSX, useState } from "react";

export default function FAQ_Piece({title, text}:{title: string, text: JSX.Element}) {

  const container_variants = {
    hidden: {
    },
    show: {
      transition: {
        delayChildren: 0.05,
        staggerChildren: 0.07
      }
    }
  }

  const item_variants = {
    hidden: {
      x: -20,
      opacity: 0,
      transition: { ease: "easeOut", duration: 0.15 }
    },
    show: {
      x: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 500,
        damping: 50}
    }
  };

  const faq_arrow_variants : Variants = {
    closed: {
      rotate: 0,
      transition: { ease: "easeOut", duration: 0.15 }
    },
    open: {
      rotate: 90,
      transition: { 
        type: "spring",
        stiffness: 1500,
        damping: 70}
    }
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <motion.button className="flex items-center"
      onClick={() => setIsOpen(!isOpen)
      }>
        <div className="font-[family-name:var(--font-outfit)] font-semibold text-white text-6xl text-left pl-10">
        {title}</div>
        <motion.div className="h-15 w-15 flex place-items-center place-content-center"
          variants={faq_arrow_variants}
          animate={isOpen ? "open" : "closed"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            fill="#ffffff"
            viewBox="0 -960 960 960"
            className="rotate-180"
          >
            <path d="m382-480 294 294q15 15 14.5 35T675-116t-35 15-35-15L297-423q-12-12-18-27t-6-30 6-30 18-27l308-308q15-15 35.5-14.5T676-844t15 35-15 35z"></path>
          </svg>
        </motion.div>
      </motion.button>

      {isOpen && (text)}
    </div>
)
}
