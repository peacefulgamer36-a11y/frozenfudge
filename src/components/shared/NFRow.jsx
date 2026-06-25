"use client";

/**
 * NFRow — thumbnail grid.
 * Card par click → onSelect (detail modal open)
 * Row mein koi video inline nahi chalta — sirf thumbnail dikhta hai
 */
export default function NFRow({ title, items = [], onSelect }) {
  return (
    <div style={{ width: "100%" }}>
      <h2 style={{
        fontSize: "clamp(13px, 2vw, 18px)",
        fontWeight: 700,
        color: "#e5e5e5",
        marginBottom: 10,
        letterSpacing: "0.02em",
      }}>
        {title}
      </h2>

      <div
        className="nf-row-scroll"
        style={{
          display: "flex",
          gap: 6,
          overflowX: "auto",
          paddingBottom: 8,
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelect?.(item)}
            className="nf-card"
            style={{
              position: "relative",
              flexShrink: 0,
              width: "clamp(140px, 44vw, 240px)",
              aspectRatio: "16/9",
              borderRadius: 4,
              background: "#181818",
              overflow: "hidden",
              cursor: "pointer",
              border: "1px solid rgba(255,255,255,0.06)",
              scrollSnapAlign: "start",
            }}
          >
            {/* Static Thumbnail only — no inline video */}
            <img
              src={item.img}
              alt={item.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.3s",
              }}
              draggable={false}
            />

            {/* Dark gradient overlay */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 55%)",
              pointerEvents: "none",
            }} />

            {/* Title */}
            <div style={{
              position: "absolute",
              bottom: 6,
              left: 8,
              right: 8,
              fontSize: "clamp(9px, 1.8vw, 12px)",
              fontWeight: 500,
              color: "#e5e5e5",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}>
              {item.title}
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        .nf-row-scroll::-webkit-scrollbar { display: none !important; }
        .nf-row-scroll { scrollbar-width: none; -ms-overflow-style: none; }

        @media (min-width: 640px) {
          .nf-card { width: clamp(160px, 32vw, 240px) !important; }
        }
        @media (min-width: 1024px) {
          .nf-card { width: clamp(160px, 18vw, 240px) !important; }
        }

        @media (hover: hover) {
          .nf-card:hover { transform: scale(1.05); transition: transform 0.2s ease; z-index: 10; }
          .nf-card:hover img { transform: scale(1.04); }
        }
      `}</style>
    </div>
  );
}