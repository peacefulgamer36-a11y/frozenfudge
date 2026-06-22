"use client";

export default function NFRow({ title, items = [], onSelect }) {
  return (
    <div className="w-full">
      <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-200 mb-2 tracking-wide">
        {title}
      </h2>

      <div
        className="nf-row-scroll flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelect?.(item)}
            className="nf-card snap-start relative w-[46vw] sm:w-[33vw] md:w-[22vw] lg:w-[17vw] max-w-[240px] aspect-video rounded-sm bg-[#181818] overflow-hidden cursor-pointer border border-white/5 shadow-md flex-shrink-0 group transition-transform duration-200"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-80" />
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
              loading="lazy"
              draggable={false}
            />
            <div className="absolute bottom-1.5 left-2 z-20 text-[10px] sm:text-xs font-medium truncate max-w-[90%] text-gray-200">
              {item.title}
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        .nf-row-scroll::-webkit-scrollbar {
          display: none !important;
        }
        .nf-row-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .nf-card {
          transform: translateZ(0);
        }
        @media (hover: hover) {
          .nf-card:hover {
            transform: scale(1.06);
          }
        }
      `}</style>
    </div>
  );
}

