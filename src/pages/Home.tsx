"use client";

import HeroCaro from "@/components/hero/ContentCarousel";
import HeroSlider from "@/components/hero/HeroSlider";
import ColourfulText from "@/components/ui/colourful-text";

const Home = () => {
  return (
    <div className=" overflow-hidden">
      <div className="w-auto">
        <HeroSlider />
      </div>
      <div className="h-auto w-full flex items-center justify-center relative overflow-hidden bg-white dark:bg-[#0a0a0a] p-4 mt-3">
        <h1 className="text-3xl font-bold text-center">
          Upcoming <ColourfulText text="Events" />
        </h1>
      </div>
      <HeroCaro type="Event" />
      <div className="h-auto w-full flex items-center justify-center relative overflow-hidden bg-white dark:bg-[#0a0a0a] p-4 mt-3">
        <h1 className="text-3xl font-bold text-center">
          <ColourfulText text="Movie" /> Shows
        </h1>
      </div>
      <div>
        <HeroCaro type="Movie" />
      </div>
      <div className="h-auto w-full flex items-center justify-center relative overflow-hidden bg-white dark:bg-[#0a0a0a] p-4 mt-3">
        <h1 className="text-3xl font-bold text-center">
          <ColourfulText text="Festivals" />
        </h1>
      </div>
      <div>
        <HeroCaro type="Festival" />
      </div>
    </div>
  );
};

export default Home;
