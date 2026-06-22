"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function NFDetailModal({ media, onClose, onPlayNow }) {
  return (
    <AnimatePresence>
      {media && (
        <div className="fixed inset-0 z-50 w-full h-screen bg-black/80 backdrop-blur-[2px] flex items-start justify-center overflow-y-auto pt-8 sm:pt-16 pb-8 px-4">
          <div
            className="fixed inset-0 bg-transparent"
            role="button"
            tabIndex={0}
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-2xl bg-[#181818] rounded-md overflow-hidden shadow-2xl z-10 border border-white/10"
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-50 w-7 h-7 rounded-full bg-[#181818]/80 text-white flex items-center justify-center text-sm border border-white/10 hover:bg-white hover:text-black transition-colors"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="relative w-full aspect-video bg-black">
              <img
                src={media.img}
                alt={media.title}
                className="w-full h-full object-cover brightness-[0.6]"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181818] to-transparent" />

              <div className="absolute bottom-4 left-4 sm:left-8 z-20">
                <h2 className="text-lg sm:text-2xl font-black mb-2 text-white uppercase tracking-wide">
                  {media.title}
                </h2>
                <button
                  onClick={onPlayNow}
                  className="bg-white text-black font-bold px-5 py-1.5 rounded hover:bg-white/80 transition-colors text-xs sm:text-sm flex items-center gap-1 shadow-md active:scale-95"
                >
                  ▶ Play Now
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#181818] text-left">
              <div className="sm:col-span-2 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[11px] sm:text-xs">
                  <span className="text-green-400 font-bold">{media.match}</span>
                  <span className="text-gray-400">{media.duration}</span>
                  <span className="border border-gray-600 px-1 text-[8px] rounded-sm font-bold text-gray-300">
                    {media.age}
                  </span>
                  <span className="border border-gray-600 px-0.5 text-[8px] text-gray-400 rounded-sm">HD</span>
                </div>

                <p className="text-xs sm:text-sm text-gray-200 font-light leading-relaxed">
                  {media.desc}
                </p>
              </div>

              <div className="flex flex-col gap-2 text-[11px] sm:text-xs border-t sm:border-t-0 sm:border-l border-white/10 pt-3 sm:pt-0 sm:pl-4">
                <div>
                  <span className="text-gray-500">Cast:</span>{" "}
                  <span className="text-gray-300">You, Me</span>
                </div>
                <div>
                  <span className="text-gray-500">Genres:</span>{" "}
                  <span className="text-gray-300">Romantic Reality</span>
                </div>

                <div className="flex flex-wrap gap-1 mt-1">
                  {media.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#2f2f2f] text-gray-300 px-1.5 py-0.5 rounded text-[9px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

