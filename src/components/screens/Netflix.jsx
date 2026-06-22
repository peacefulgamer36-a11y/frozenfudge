"use client";

import { useState, useEffect, useRef } from "react";

import ScreenContainer from "../ScreenContainer";

import NFHeader from "@/components/shared/NFHeader";
import NFRow from "@/components/shared/NFRow";
import NFDetailModal from "@/components/shared/NFDetailModal";

import { AnimatePresence } from "framer-motion";

const SECTIONS_DATA = [
  {
    id: "row-popular",
    rowTitle: "Popular on Netflix",
    items: [
      { id: "p1", title: "Our Memories", tags: ["Romantic", "Nostalgic"], match: "98% Match", age: "13+", duration: "1h 45m", img: "/images/1.png", desc: "When a beautiful journey of shared smiles and unforgettable milestones unfolds, two hearts create a timeless masterpiece of memories. Revisit the chapters that defined love." },
      { id: "p2", title: "Favorite Moments", tags: ["Heartfelt", "Deep Connections"], match: "95% Match", age: "16+", duration: "2h 10m", img: "/images/2.png", desc: "A curated collection of absolute candid gold. From silent glances to endless laughter, explore the definitive guide to why every second spent together is a blockbuster hit." },
      { id: "p3", title: "Late Night Chats", tags: ["Witty", "Charming"], match: "99% Match", age: "All", duration: "45m", img: "/images/3.png", desc: "Screens glow under blankets as midnight rules disappear. Dive into the witty banter, spontaneous confessions, and sleepy moments that kept the moon awake." },
      { id: "p4", title: "The Beginning", tags: ["Slow Burn", "Rom-Com"], match: "92% Match", age: "13+", duration: "1 Season", img: "/images/4.png", desc: "Step back to day one. The nervous text messages, the accidental eye contact, and the beautiful spark that ignited an unexpected but magnificent story of togetherness." },
      { id: "p5", title: "Cute Fights", tags: ["Drama", "Playful"], match: "89% Match", age: "18+", duration: "2 Seasons", img: "/images/5.png", desc: "Overdramatic pouting, fake angry faces, and the legendary debates about who loves whom more. Witness the chaotic, funny, and utterly adorable friction of true companionship." },
    ]
  },
  {
    id: "row-trending",
    rowTitle: "Trending Now",
    items: [
      { id: "t1", title: "Special Days", tags: ["Celebration", "Feel-good"], match: "97% Match", age: "All", duration: "1h 15m", img: "/images/1.png", desc: "Every anniversary, birthday, and random surprise date packed into a high-energy saga of joy. A beautiful reminder that everyday moments become historic milestones together." },
      { id: "t2", title: "Long Calls", tags: ["Calm", "Intimate"], match: "94% Match", age: "13+", duration: "3h 05m", img: "/images/3.png", desc: "Miles melt away through copper wires and digital screens. An emotional look into how voices across distances build an unshakeable bridge of unconditional warmth and security." },
      { id: "t3", title: "First Impression", tags: ["Awkward", "Adorable"], match: "91% Match", age: "13+", duration: "25m", img: "/images/2.png", desc: "The untold behind-the-scenes thoughts from the very first meeting. Unfiltered, slightly clumsy, completely endearing reflections of two souls meeting their favorite destiny." },
      { id: "t4", title: "Inside Jokes", tags: ["Hilarious", "Eccentric"], match: "96% Match", age: "All", duration: "5 Seasons", img: "/images/4.png", desc: "A secret language built over shared glances across crowded rooms. Warning: High doses of humor that absolutely no one else in the world will ever understand." },
      { id: "t5", title: "Infinite Love", tags: ["Timeless", "Masterpiece"], match: "99% Match", age: "All", duration: "Forever", img: "/images/5.png", desc: "The grand finale that never ends. A deep, cinematic exploration of commitment, shared dreams, and a bond configured to outlast the stars themselves." },
    ]
  }
];

export default function Netflix({ onNext }) { 
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const containerRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && containerRef.current.scrollTop > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    const container = containerRef.current;
    if (container) container.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScreenContainer>
      <div
        ref={containerRef}
        className="relative w-full h-screen bg-[#000000] text-white overflow-y-auto overflow-x-hidden font-sans antialiased select-none scrollbar-none"
      >
        {/* Netflix Header */}
        <NFHeader isScrolled={isScrolled} />

        {/* Hero */}
        <div className="relative z-10 w-full h-[56vw] min-h-[340px] sm:min-h-[440px] md:min-h-[500px] lg:h-[80vh] flex items-center px-4 sm:px-8 md:px-12 lg:px-16 pt-16 sm:pt-20">
          <div className="absolute inset-0 z-0 bg-black">
            <img
              src="/gifs/intro.gif"
              alt="Billboard Background"
              className="w-full h-full object-cover brightness-[0.55] contrast-[1.02] object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/20 to-transparent w-full md:w-[55%]" />
            <div className="absolute bottom-0 left-0 w-full h-[15%] bg-gradient-to-t from-[#141414] to-transparent" />
          </div>

          <div className="relative z-10 w-full max-w-[90%] sm:max-w-md md:max-w-xl lg:max-w-2xl flex flex-col items-start gap-1.5 sm:gap-3">
            <div className="flex items-center gap-1">
              <span className="text-[#e50914] font-black text-xl sm:text-3xl tracking-tighter">N</span>
              <span className="text-[9px] sm:text-[11px] font-bold tracking-[0.3em] uppercase text-gray-300 pt-1">Series</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[0.95] drop-shadow-md">
              Something <br /> Special
            </h1>

            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold">
              <span className="text-green-400">99% Match</span>
              <span className="border border-white/40 px-1 text-[8px] rounded-sm bg-black/30">2026</span>
              <span className="text-gray-300">1 Season</span>
              <span className="border border-red-600 px-1 text-[8px] text-red-500 font-extrabold rounded-sm">4K Ultra</span>
            </div>

            <p className="text-[11px] sm:text-xs md:text-sm lg:text-base text-gray-200 font-normal leading-snug sm:leading-relaxed max-w-xs sm:max-w-sm md:max-w-lg text-left line-clamp-3 sm:line-clamp-none">
              There’s something truly wonderful I've been waiting to tell you... that's exactly why I crafted this little universe just for you. Are you ready to discover the full story?
            </p>

            <div className="flex items-center gap-2 sm:gap-3 mt-1 sm:mt-2">
              <button onClick={onNext} className="flex items-center justify-center gap-1.5 bg-white text-black font-bold px-4 sm:px-6 py-1.5 sm:py-2 rounded hover:bg-white/80 transition-all text-xs sm:text-sm shadow-md active:scale-95 whitespace-nowrap">
                ▶ Play
              </button>
              <button
                onClick={() => setSelectedMedia(SECTIONS_DATA[0].items[0])}
                className="flex items-center justify-center gap-1.5 bg-[#6d6d6e]/60 text-white font-bold px-3 sm:px-5 py-1.5 sm:py-2 rounded hover:bg-[#6d6d6e]/40 transition-all text-xs sm:text-sm backdrop-blur-md active:scale-95 whitespace-nowrap"
              >
                ⓘ More Info
              </button>
            </div>
          </div>

          <div className="absolute right-0 bottom-[18%] z-20 flex items-center bg-black/30 border-l-4 border-gray-400 py-0.5 px-3 text-[10px] sm:text-xs font-normal">
            13+
          </div>
        </div>

        {/* Rows */}
        <div className="relative z-20 pb-24 px-4 sm:px-8 md:px-12 lg:px-16 -mt-4 sm:-mt-8 lg:-mt-16 flex flex-col gap-6 sm:gap-10">
          {SECTIONS_DATA.map((section) => (
            <NFRow
              key={section.id}
              title={section.rowTitle}
              items={section.items}
              onSelect={(item) => setSelectedMedia(item)}
            />
          ))}
        </div>

        {/* Modal */}
        <NFDetailModal
          media={selectedMedia}
          onClose={() => setSelectedMedia(null)}
          onPlayNow={() => {
            setSelectedMedia(null);
            onNext();
          }}
        />


        {/* ==================== 5. COMPACT CLEAN FOOTER ==================== */}
        <footer className="w-full max-w-4xl mx-auto px-4 pb-8 text-gray-500 text-[11px] flex flex-col gap-4 mt-6 border-t border-white/5 pt-6 text-center sm:text-left">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <span className="hover:underline cursor-pointer">Help Center</span>
            <span className="hover:underline cursor-pointer">Terms of Use</span>
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span className="hover:underline cursor-pointer">Contact Us</span>
          </div>
          <p className="text-[10px] text-gray-600 mt-2">© 1997-2026 Netflix, Inc. Built with love and absolute layout precision.</p>
        </footer>

      </div>

      <style jsx global>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none !important;
        }
      `}</style>
    </ScreenContainer>
  );
}