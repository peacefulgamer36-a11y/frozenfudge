"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScreenContainer from "../ScreenContainer";

export default function NetflixIntro({ onComplete }) {
  const [selected, setSelected] = useState(false);

  return (
    <ScreenContainer>
      <div className="relative w-full h-screen overflow-hidden bg-transparent text-white">
        {/* Netflix Logo */}
        <div className="fixed top-4 left-4 md:top-6 md:left-8 z-50">
          <img
            src="/images/netflix.svg"
            alt="Netflix"
            className="w-14 h-14 md:w-20 md:h-20 object-contain"
            draggable={false}
          />
        </div>

        {/* Center Content */}
        <div className="w-full h-full flex items-center justify-center px-6">
          <div className="flex flex-col items-center -mt-6">
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center font-normal tracking-tight text-2xl sm:text-4xl md:text-[40px] mb-10 md:mb-5"
            >
              Who's Watching?
            </motion.h1>

            {/* Profile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              onClick={() => setSelected(true)}
              className="group cursor-pointer flex flex-col items-center"
            >
              <div
                className="
                  w-40 h-40
                  sm:w-44 sm:h-44
                  md:w-52 md:h-52
                  rounded-full
                  overflow-hidden
                  border-[3px]
                  border-white/20
                  group-hover:border-white
                  transition-all
                  duration-300
                "
              >
                <img
                  src="/images/1.png"
                  alt="Love"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  draggable={false}
                />
              </div>

              <span className="mt-5 text-xl md:text-2xl font-medium text-[#808080] group-hover:text-white transition-colors duration-300">
                Love
              </span>
            </motion.div>

            {/* Done Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              onClick={onComplete}
              disabled={!selected}
              className="
                mt-12
                md:mt-14
                px-10
                py-3
                border
                text-sm
                uppercase
                tracking-[0.25em]
                transition-all
                duration-300
                disabled:opacity-40
                disabled:cursor-not-allowed
                border-[#666]
                text-[#808080]
                hover:bg-[#e50914]
                hover:text-white
                hover:border-[#e50914]
              "
            >
              Done
            </motion.button>
          </div>
        </div>
      </div>
    </ScreenContainer>
  );
}

