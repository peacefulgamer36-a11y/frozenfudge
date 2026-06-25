"use client";

export default function NFHeader({ isScrolled = false }) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        /* ✅ Always transparent — scroll pe bhi transparent */
        background: "transparent",
        padding: "8px clamp(12px, 4vw, 32px)",
        transition: "none",
      }}
    >
      {/* Left — Logo + Nav */}
      <div style={{ display: "flex", alignItems: "center", gap: "clamp(12px, 3vw, 28px)" }}>
        <img
          src="/thumb/netflix.svg"
          alt="Netflix"
          style={{ width: "clamp(60px, 8vw, 92px)", height: "auto" }}
          draggable={false}
          onError={e => {
            e.target.style.display = "none";
          }}
        />

        {/* Desktop nav */}
        <div style={{
          display: "none",
          alignItems: "center",
          gap: 18,
          fontSize: 13,
          color: "#ccc",
          fontWeight: 300,
        }}
        className="nf-desktop-nav"
        >
          <span style={{ color: "#fff", fontWeight: 500, cursor: "pointer" }}>Home</span>
          <span style={{ cursor: "pointer", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color="#aaa"} onMouseLeave={e => e.target.style.color="#ccc"}>TV Shows</span>
          <span style={{ cursor: "pointer", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color="#aaa"} onMouseLeave={e => e.target.style.color="#ccc"}>Movies</span>
          <span style={{ cursor: "pointer", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color="#aaa"} onMouseLeave={e => e.target.style.color="#ccc"}>New &amp; Popular</span>
          <span style={{ cursor: "pointer", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color="#aaa"} onMouseLeave={e => e.target.style.color="#ccc"}>My List</span>
        </div>

        {/* Mobile browse pill */}
        <div style={{
          display: "flex",
          alignItems: "center",
          background: "rgba(0,0,0,0.35)",
          border: "1px solid rgba(255,255,255,0.2)",
          padding: "4px 10px",
          borderRadius: 4,
          fontSize: 11,
          gap: 4,
          cursor: "pointer",
          color: "#ddd",
          backdropFilter: "blur(4px)",
        }}
        className="nf-mobile-browse"
        >
          Browse <span style={{ fontSize: 8 }}>▼</span>
        </div>
      </div>

      {/* Right — Search + Kids + Avatar */}
      <div style={{ display: "flex", alignItems: "center", gap: "clamp(10px, 2.5vw, 20px)" }}>
        {/* Search icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"
          style={{ width: 18, height: 18, cursor: "pointer", color: "#fff" }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.603 10.601z" />
        </svg>

        <span style={{ fontSize: 13, cursor: "pointer", color: "#ccc", display: "none" }} className="nf-kids-link">Kids</span>

        <div style={{
          width: 32,
          height: 32,
          borderRadius: 4,
          overflow: "hidden",
          border: "2px solid rgba(255,255,255,0.15)",
          flexShrink: 0,
        }}>
          <img src="/thumb/main1.jpg" alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} draggable={false}
            onError={e => { e.target.src="/thumb/img1.png"; }}
          />
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 768px) {
          .nf-desktop-nav { display: flex !important; }
          .nf-mobile-browse { display: none !important; }
          .nf-kids-link { display: block !important; }
        }
      `}</style>
    </nav>
  );
}