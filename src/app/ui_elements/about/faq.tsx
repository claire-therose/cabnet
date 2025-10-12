import { motion, useMotionValue, Variants } from "motion/react";
import { useState } from "react"
import FAQ_Piece from "./faq_piece";

export default function FAQ() {
  const [isOpen, setIsOpen] = useState(false);

  const container_variants: Variants = {
    hidden: {
    },
    show: {
      transition: {
        delayChildren: 0.05,
        staggerChildren: 0.07
      }
    }
  }

  const item_variants: Variants = {
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

  const faq_arrow_variants: Variants = {
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

  return (
    <div>
      {/* faq */}
      <div className="pb-20 flex">
        <div className="w-full font-[family-name:var(--font-outfit)] font-semibold text-white text-8xl text-center
          underline decoration-8 underline-offset-8 decoration-cpink-500">faq</div>
      </div>

      <div className="flex-col"> 
        <FAQ_Piece title="Where is the search bar?" text={
          <motion.div
          initial="hidden"
          animate="show"
          variants={container_variants}
          >
            <motion.div className="flex pt-20 pb-15"
            variants={item_variants}>
              <div className="font-[family-name:var(--font-noto-sans)] font-semibold text-white text-4xl text-left pl-30">
                Surprise! <a className="underline decoration-4 underline-offset-4 decoration-cpink-500">There isn't one.
                </a> Cabnet operates like the old internet, before the domination of search engines.</div>
            </motion.div>

            <motion.div className="flex"
            variants={item_variants}>
              <div className="font-[family-name:var(--font-noto-sans)] font-semibold text-white text-4xl text-left pl-30">
                We believe that this creates a more organic experience of discovery. <br /> No search prioritization. <br />  No algorithms. <br /> Just good old fashioned recommendations.</div>
              </motion.div>
          </motion.div>} />

        <div className="pb-30"></div>

        <FAQ_Piece title="How do I find things to buy?" text={
          <motion.div
          initial="hidden"
          animate="show"
          variants={container_variants}
          >
            <motion.div className="flex pt-20 pb-15"
            variants={item_variants}>
              <div className="font-[family-name:var(--font-noto-sans)] font-semibold text-white text-4xl text-left pl-30">
                Each artist or studio has <a className="underline decoration-4 underline-offset-4 decoration-cpink-500">their own cabnet store
                  </a>, which has links to the releases you can buy from their site.</div>
            </motion.div>

            <motion.div className="flex"
            variants={item_variants}>
              <div className="font-[family-name:var(--font-noto-sans)] font-semibold text-white text-4xl text-left pl-30">
                If you found cabnet from somewhere other than a store and need a starting place, check out <a href="https://claire-therose.tumblr.com/" className="underline decoration-2 underline-offset-2">
                Claire's development blog</a>.</div>
              </motion.div>
          </motion.div>} />

        <div className="pb-30"></div>

        <FAQ_Piece title="Is cabnet a streaming service?" text={
          <motion.div
          initial="hidden"
          animate="show"
          variants={container_variants}
          >
            <motion.div className="flex pt-20 pb-15"
            variants={item_variants}>
              <div className="font-[family-name:var(--font-noto-sans)] font-semibold text-white text-4xl text-left pl-30">
                <a className="underline decoration-4 underline-offset-4 decoration-cpink-500">Nope!</a> Cabnet is a place to buy, own, and display films and TV shows.</div>
            </motion.div>

            <motion.div className="flex"
            variants={item_variants}>
              <div className="font-[family-name:var(--font-noto-sans)] font-semibold text-white text-4xl text-left pl-30">
                When you buy something on cabnet, <br /> that purchase is downloaded to your device in full.</div>
              </motion.div>
          </motion.div>} />

        <div className="pb-30"></div>

        <FAQ_Piece title="Is cabnet legal?" text={
          <motion.div
          initial="hidden"
          animate="show"
          variants={container_variants}
          >
            <motion.div className="flex pt-20 pb-15"
            variants={item_variants}>
              <div className="font-[family-name:var(--font-noto-sans)] font-semibold text-white text-4xl text-left pl-30">
                Cabnet only sells and distributes titles we have contracts for. <br />We aren't a piracy service or anything like that.</div>
            </motion.div>

            <motion.div className="flex"
            variants={item_variants}>
              <div className="font-[family-name:var(--font-noto-sans)] font-semibold text-white text-4xl text-left pl-30">
                If you're looking for free streaming options, check out <a href="https://tinyurl.com/mr3eajdc" className="underline decoration-2 underline-offset-2">these sites</a>.</div>
              </motion.div>
          </motion.div>} />
        
        <div className="pb-30"></div>

        <FAQ_Piece title="Can I try it out?" text={
          <motion.div
          initial="hidden"
          animate="show"
          variants={container_variants}
          >
            <motion.div className="flex pt-20 pb-15"
            variants={item_variants}>
              <div className="font-[family-name:var(--font-noto-sans)] font-semibold text-white text-4xl text-left pl-30">
                Sure! We have a little demo that illustrates the basic features.</div>
            </motion.div>

            <motion.div className="flex"
            variants={item_variants}>
              <div className="font-[family-name:var(--font-noto-sans)] font-semibold text-white text-4xl text-left pl-30">
                <a href="https://localhost:3000/demo" className="underline decoration-2 underline-offset-2">Click here</a> to check it out.</div>
              </motion.div>
          </motion.div>} />
        
        <div className="pb-20"></div>
      </div>
  </div>
  )
}