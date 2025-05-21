//  
//  File: info_card.tsx
//  Description: An encapsulation of an info card for the pitch
//
//

import { motion } from "motion/react"

export default function InfoCard({line1, line2}) {
  return (
    <div className="w-full h-70 md:w-120 md:h-100 flex place-items-center place-content-center mx-5 my-30 bg-linear-30/oklch from-purple-900 to-fuchsia-500 drop-shadow-xl/20 drop-shadow-blue-1000 rounded-xl">
      <div className="text-center text-stone-200 font-[family-name:var(--font-outfit)] font-semibold text-5xl md:text-7xl">
        {line1} <br /> {line2}
      </div>
    </div>
  )
}