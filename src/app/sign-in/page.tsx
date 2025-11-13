"use client"

export default function SignIn() {
  return (
    <div>
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
        </div>
    </div>
  );
}