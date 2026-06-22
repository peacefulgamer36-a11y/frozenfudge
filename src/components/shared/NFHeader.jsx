"use client";

export default function NFHeader({ isScrolled = false }) {
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-2 sm:py-4 transition-all duration-300 ${
        isScrolled ? "bg-[#141414]" : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="flex items-center gap-4 sm:gap-8">
        <img
          src="/images/netflix.svg"
          alt="Netflix"
          className="w-16 sm:w-20 md:w-24 object-contain"
          draggable={false}
        />

        <div className="hidden md:flex items-center gap-4 text-xs sm:text-sm text-gray-300 font-light">
          <span className="text-white font-medium cursor-pointer">Home</span>
          <span className="hover:text-gray-400 cursor-pointer transition-colors">TV Shows</span>
          <span className="hover:text-gray-400 cursor-pointer transition-colors">Movies</span>
          <span className="hover:text-gray-400 cursor-pointer transition-colors">New & Popular</span>
          <span className="hover:text-gray-400 cursor-pointer transition-colors">My List</span>
        </div>

        <div className="flex md:hidden items-center bg-black/40 border border-white/20 px-2 py-0.5 rounded text-[11px]">
          Browse ▼
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-4 h-4 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.603 10.601z"
          />
        </svg>

        <span className="cursor-pointer hidden sm:block text-gray-300 hover:text-white">Kids</span>

        <div className="w-7 h-7 rounded overflow-hidden border border-white/10 flex-shrink-0">
          <img src="/images/1.png" alt="Profile" className="w-full h-full object-cover" draggable={false} />
        </div>
      </div>
    </nav>
  );
}

