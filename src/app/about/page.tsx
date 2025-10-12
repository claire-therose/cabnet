"use client"

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import FAQ from "../ui_elements/about/faq"

export default function About() {

  const { scrollY } = useScroll();

  const scrollYTransformed = useTransform(() => 0 - (scrollY.get() / 10));

  return (
    <div>
      <motion.div style={{top: scrollYTransformed}} className="fixed left-0 w-screen -z-10">
        <img src="/The-Owl-House-key-art.jpg" className="opacity-50"></img>
      </motion.div>
      <div className="fixed bg-black w-screen h-screen -z-20"></div>
      <div className="p-20 bg-transparent">

        {/* main title */}
        <div className="h-200 flex place-items-center">
          <div className="font-[family-name:var(--font-outfit)] font-semibold text-white text-8xl text-center w-full">
            cabnet is a video store for an <br /> online world</div>
        </div>

        <div className="pb-100"></div>

        <div className="pb-80 flex">
          <div className="font-[family-name:var(--font-outfit)] font-semibold text-white text-8xl text-center w-full">
            buy something once <br /> keep it forever (<a className="underline decoration-8 underline-offset-8 decoration-cpink-500">actually</a>)</div>
        </div>

        <div className="pb-80"></div>

        {/* how it works */}
        <div className="pb-30 flex">
          <div className="w-full font-[family-name:var(--font-outfit)] font-semibold text-white text-8xl text-center
           underline decoration-8 underline-offset-8 decoration-cpink-500">how it works</div>
        </div>
        <div className="flex justify-center">
            <div className="flex flex-col gap-20">
              <div className="font-[family-name:var(--font-outfit)] font-semibold text-white text-6xl text-left w-fit">
              • buy a film or TV show on cabnet.media</div>
              <div className="font-[family-name:var(--font-outfit)] font-semibold text-white text-6xl text-left w-fit">
              • download at your desired quality</div>
              <div className="font-[family-name:var(--font-outfit)] font-semibold text-white text-6xl text-left w-fit">
              • watch and enjoy (ᵔ◡ᵔ)</div>
            </div> 
        </div>

        <div className="pb-140"></div>

        {/* core principles */}
        <div className="pb-20 flex">
          <div className="w-full font-[family-name:var(--font-outfit)] font-semibold text-white text-8xl text-center
          underline decoration-8 underline-offset-8 decoration-cpink-500">our core principles</div>
        </div>
        <div className="grid grid-rows-4 grid-cols-2 gap-y-20 w-full">
          <div className="pb-1 pr-10 overflow-hidden">
            <motion.div className="font-[family-name:var(--font-noto-sans)] font-semibold text-white text-4xl text-right basis-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true}}
            transition={{ 
              type: "spring",
              stiffness: 70,
              damping: 20}}
            variants={{
              visible: {opacity: 1, x: 0},
              hidden: {opacity: 1, x: 650}
            }}>
            Cabnet purchases work like DVDs. <br /> Use any video player you want.</motion.div>
          </div>

          <div className="pl-10 font-[family-name:var(--font-outfit)] font-semibold text-white text-7xl text-left basis-1/2">interoperability</div>

          <div className="pb-1 pr-10 overflow-hidden">
            <motion.div className="font-[family-name:var(--font-noto-sans)] font-semibold text-white text-4xl text-right basis-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true}}
              transition={{ 
                type: "spring",
                stiffness: 70,
                damping: 20,
                delay: 0.1}}
              variants={{
                visible: {opacity: 1, x: 0},
                hidden: {opacity: 1, x: 650}
              }}>
              90% of revenue goes to the seller. <br /> 10% goes to us.</motion.div>
          </div>
          <div className="pl-10 font-[family-name:var(--font-outfit)] font-semibold text-white text-7xl text-left basis-1/2">9:1 revenue split</div>
            <div className="pb-1 pr-10 overflow-hidden">
              <motion.div className="font-[family-name:var(--font-noto-sans)] font-semibold text-white text-4xl text-right basis-1/2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true}}
                transition={{ 
                  type: "spring",
                  stiffness: 70,
                  damping: 20,
                  delay: 0.2}}
                variants={{
                  visible: {opacity: 1, x: 0},
                  hidden: {opacity: 1, x: 500}
                }}>
                No exclusive distribution <br /> contracts or deals.</motion.div>
            </div>
          <div className="pl-10 font-[family-name:var(--font-outfit)] font-semibold text-white text-7xl text-left basis-1/2">open contracts</div>
          <div className="pb-1 pr-10 overflow-hidden">
            <motion.div className="font-[family-name:var(--font-noto-sans)] font-semibold text-white text-4xl text-right basis-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true}}
              transition={{ 
                type: "spring",
                stiffness: 70,
                damping: 20,
                delay: 0.2}}
              variants={{
                visible: {opacity: 1, x: 0},
                hidden: {opacity: 1, x: 650}
              }}>
          We are a privately held company <br /> to uphold our principles.</motion.div>
          </div>
          <div className="pl-10 font-[family-name:var(--font-outfit)] font-semibold text-white text-7xl text-left basis-1/2">private</div>

          <div className="absolute h-145 w-0.5 right-1/2 bg-white"></div>

        </div>

        <div className="pb-120"></div>

        {/* our team */}
        <div className="pb-20 flex">
          <div className="w-full font-[family-name:var(--font-outfit)] font-semibold text-white text-8xl text-center
          underline decoration-8 underline-offset-8 decoration-cpink-500">our team</div>
        </div>
        <div className="flex flex-col place-items-center"> 
          <div className="h-80 w-80 mb-5 rounded-lg">
            <img src="/claire_bunny.jpg" className="rounded-4xl"></img>
          </div>
          <div className="pb-5 w-full font-[family-name:var(--font-outfit)] font-semibold text-white text-5xl text-center">Claire Rosenthal</div>
          <div className="w-full font-[family-name:var(--font-outfit)] font-semibold text-white text-3xl text-center">Lead Developer</div>
        </div>

        <div className="pb-100"></div>

        <FAQ />

        <div className="pb-100"></div>

        {/* contact */}
        <div className="pb-20 flex">
          <div className="w-full font-[family-name:var(--font-outfit)] font-semibold text-white text-8xl text-center
          underline decoration-8 underline-offset-8 decoration-cpink-500">contact</div>
        </div>
        <div className="flex flex-col place-items-center"> 
          <div className="pb-5 w-full font-[family-name:var(--font-outfit)] font-semibold text-white text-5xl text-center">Want to learn more?</div>
          <div className="pb-5 w-full font-[family-name:var(--font-outfit)] font-semibold text-white text-5xl text-center">Have a business inquiry?</div>
          <div className="pb-5 w-full font-[family-name:var(--font-outfit)] font-semibold text-white text-5xl text-center">Drop us a line.</div>
          <div className="pb-15" />
          <div className="pb-5 w-full font-[family-name:var(--font-outfit)] font-semibold text-white text-6xl text-center"><a href="mailto:info@cabnet.media">info@cabnet.media</a></div>
        </div>

        <div className="pb-40"></div>
      </div>

      <div className="py-5 font-[family-name:var(--noto-sans)] font-semibold text-white text-center bg-black">© 2025 Cabnet Media Inc.</div>
    </div>
  );
}