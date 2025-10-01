"use client"
import { motion, useCycle } from "motion/react"
import { highlight_variants_x, highlight_variants_y } from "../ui_elements/ui_variants"
import SettingsCategory from "../ui_elements/settings_category"
import { useState } from "react"

export default function Settings() {

  const [settingCategory, setSettingCategory] = useState(0);

  return (
    <div className="">
      <div className="h-11"></div>
      <div className="font-[family-name:var(--font-outfit)] font-semibold text-white text-4xl text-center p-10">Settings</div>
      <div className="flex">
        <div className="h-200 w-60 bg-black rounded-tr-xl border-r-1 border-t-1 border-zinc-400">
          <ul className="p-3 font-[family-name:var(--font-outfit)] font-semibold flex-col space-y-3 text-stone-200 text-xl">
            <SettingsCategory symbol={"account_circle"} text={"Account"} link={"settings_tab"} selected={settingCategory==0} onButtonClick={() => setSettingCategory(0)} />
            <SettingsCategory symbol={"theaters"} text={"Video Quality"} link={"settings_tab"} selected={settingCategory==1} onButtonClick={() => setSettingCategory(1)} />
            <SettingsCategory symbol={"folder"} text={"Locations"} link={"settings_tab"} selected={settingCategory==2} onButtonClick={() => setSettingCategory(2)} />
            <SettingsCategory symbol={"account_circle"} text={"Account"} link={"settings_tab"} selected={settingCategory==3} onButtonClick={() => setSettingCategory(3)} />
          </ul>
        </div>
        <div className="h-200 w-full px-10">
          <div className="font-[family-name:var(--font-outfit)] font-semibold text-white text-4xl text-left">
            cabnet is a video store for an online world</div>
        </div>
      </div>
    </div>
  );
}