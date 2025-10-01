"use client"

import { Parallax } from "react-scroll-parallax"

export default function AboutUs() {

  return (
    <div>
      <Parallax className="absolute top-0 left-0 -z-10" speed={-70}>
        <img src="/The-Owl-House-key-art.jpg"></img>
      </Parallax>
      <div className="fixed bg-black w-screen h-screen -z-20"></div>
      <div className="p-20 bg-transparent">

        {/* main title */}
        <div className="h-200 flex place-items-center">
          <div className="font-[family-name:var(--font-outfit)] font-semibold text-white text-8xl text-center">
            cabnet is a video store for an online world</div>
        </div>

        <div className="pt-20 pb-80 flex">
          <div className="font-[family-name:var(--font-outfit)] font-semibold text-white text-7xl text-center w-full">
            buy something once <br /> keep it forever (actually)</div>
        </div>

        {/* how it works */}
        <div className="pb-20 flex">
          <div className="w-full font-[family-name:var(--font-outfit)] font-semibold text-white text-7xl text-center">how it works</div>
        </div>
        <div className="flex-col"> 
          <div className="flex pb-20">
            <div className="font-[family-name:var(--font-outfit)] font-semibold text-white text-6xl text-left pl-10">
            • Buy a film or TV show on cabnet.media</div>
          </div>
          <div className="flex pb-20">
            <div className="font-[family-name:var(--font-outfit)] font-semibold text-white text-6xl text-left pl-10">
            • Download at your desired quality</div>
          </div>
          <div className="flex pb-20">
            <div className="font-[family-name:var(--font-outfit)] font-semibold text-white text-6xl text-left pl-10">
            • Watch and enjoy (ᵔ◡ᵔ)</div>
          </div>
        </div>

        <div className="pb-40"></div>

        {/* core principles */}
        <div className="pb-20 flex">
          <div className="w-full font-[family-name:var(--font-outfit)] font-semibold text-white text-7xl text-center">our core principles</div>
        </div>
        <div className="flex-col gap-5"> 
          <div className="absolute h-140 w-0.5 right-1/2 bg-white"></div>
          <div className="flex pb-20">
            <div className="pr-10 font-[family-name:var(--font-noto-sans)] font-semibold text-white text-4xl text-right basis-1/2">
            Cabnet purchases work like DVDs. <br /> Use any video player you want.</div>
            <div className="pl-10 font-[family-name:var(--font-outfit)] font-semibold text-white text-7xl text-left basis-1/2">interoperability</div>
          </div>
          <div className="flex pb-20">
            <div className="pr-10 font-[family-name:var(--font-noto-sans)] font-semibold text-white text-4xl text-right basis-1/2">
            90% of revenue goes to the seller. <br /> 10% goes to us.</div>
            <div className="pl-10 font-[family-name:var(--font-outfit)] font-semibold text-white text-7xl text-left basis-1/2">9:1 revenue split</div>
          </div>
          <div className="flex pb-20">
            <div className="pr-10 font-[family-name:var(--font-noto-sans)] font-semibold text-white text-4xl text-right basis-1/2">
            No exclusive contracts or deals.</div>
            <div className="pl-10 font-[family-name:var(--font-outfit)] font-semibold text-white text-7xl text-left basis-1/2">open contracts</div>
          </div>
          <div className="flex">
            <div className="pr-10 font-[family-name:var(--noto-sans)] font-semibold text-white text-4xl text-right basis-1/2">
            We are a privately held company <br /> to uphold our principles.</div>
            <div className="pl-10 font-[family-name:var(--font-outfit)] font-semibold text-white text-7xl text-left basis-1/2">private</div>
          </div>
        </div>

        <div className="pb-40"></div>

        {/* our team */}
        <div className="pb-20 flex">
          <div className="w-full font-[family-name:var(--font-outfit)] font-semibold text-white text-8xl text-center">our team</div>
        </div>
        <div className="flex-col place-items-center"> 
          <div className="h-80 w-80 mb-5 rounded-lg">
            <img src="/claire_bunny.jpg" className="rounded-4xl"></img>
          </div>
          <div className="pb-5 w-full font-[family-name:var(--font-outfit)] font-semibold text-white text-5xl text-center">Claire Rosenthal</div>
          <div className="w-full font-[family-name:var(--font-outfit)] font-semibold text-white text-3xl text-center">Lead Developer</div>
        </div>
      </div>
      <div className="py-5 font-[family-name:var(--noto-sans)] font-semibold text-white text-center bg-black">© 2025 Cabnet Media Inc.</div>
    </div>
  );
}