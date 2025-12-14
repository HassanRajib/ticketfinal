"use client";
import ColourfulText from "@/components/ui/colourful-text";


export function ColourfulTextDemo() {
  return (
    <div className="h-auto w-full flex items-center justify-center relative overflow-hidden bg-white dark:bg-[#0a0a0a] p-4 mt-3" >
      <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center text-black dark:text-white relative z-2 font-other">
        Upcoming <ColourfulText text="Events" /> <br /> 
      </h1>
    </div>
  );
}
