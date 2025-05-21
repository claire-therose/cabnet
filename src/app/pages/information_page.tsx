//  
//  File: information_page.tsx
//  Description: An encapsulation of the main menu panel
//
//

import { motion } from "motion/react"
import InfoCard from "../ui_elements/info_card"

export default function InformationPage() {
  return (
    <div className="w-full h-full flex-col items-center inline-flex px-10 box-border">
      <div className="w-fit h-fit my-80 mb-90 font-[family-name:var(--font-outfit)] font-semibold text-6xl md:text-9xl text-center text-transparent bg-linear-60/oklch from-cpink-400 to-purple-500 bg-clip-text drop-shadow-xl/20 drop-shadow-blue-1000">
        your online <br/> video store
      </div>
      <div className="font-[family-name:var(--font-outfit)] font-medium text-stone-200 text-3xl text-center">
        Cabnet is an online space to buy and store your favorite pieces of media.</div>
      <InfoCard line1="buy once" line2="keep forever."/>
      <div className="font-[family-name:var(--font-noto-sans)] font-medium text-stone-200 text-xl">
        super test</div>
      <InfoCard line1="buy once" line2="keep forever."/>    
      
    </div>
  )
}