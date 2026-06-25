"use client";

import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NFFullscreenPlayer from "./NFFullscreenPlayer";

/**
 * NFDetailModal — Card click karne par khulta hai.
 * - Thumbnail + description dikhata hai
 * - "Play Now" dabaao → detail modal band, fullscreen player khulta hai
 * - Home ka video touch nahi hota
 */
export default function NFDetailModal({ media, onClose }) {
  const [fullscreenOpen, setFullscreenOpen] = useState(false);

  // Jab media change ho ya modal band ho, fullscreen bhi band karo
  useEffect(() => {
    if (!media) setFullscreenOpen(false);
  }, [media]);

  const handlePlayNow = () => {
    setFullscreenOpen(true);
  };

  const handleFullscreenClose = () => {
    setFullscreenOpen(false);
  };

  return (
    <>
      {/* ── Detail Info Modal ── */}
      <AnimatePresence>
        {media && !fullscreenOpen && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background: "rgba(0,0,0,0.78)",
              backdropFilter: "blur(3px)",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              overflowY: "auto",
              padding: "clamp(12px, 5vw, 60px) 16px 32px",
            }}
          >
            {/* Backdrop to close */}
            <div style={{ position: "fixed", inset: 0 }} onClick={onClose} />

            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.22 }}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 700,
                background: "#181818",
                borderRadius: 8,
                overflow: "hidden",
                boxShadow: "0 24px 64px rgba(0,0,0,0.95)",
                border: "1px solid rgba(255,255,255,0.07)",
                zIndex: 10,
              }}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  zIndex: 50,
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "rgba(20,20,20,0.92)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background="#fff"; e.currentTarget.style.color="#000"; }}
                onMouseLeave={e => { e.currentTarget.style.background="rgba(20,20,20,0.92)"; e.currentTarget.style.color="#fff"; }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 14, height: 14 }}>
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>

              {/* Thumbnail area — 16:9, STATIC (no inline play) */}
              <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "#000", overflow: "hidden" }}>
                <img
                  src={media.img}
                  alt={media.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(0.62)",
                    display: "block",
                  }}
                  draggable={false}
                />
                {/* Gradient overlay */}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "60%",
                  background: "linear-gradient(to top, #181818 0%, transparent 100%)",
                  pointerEvents: "none",
                }} />

                {/* Title + Play button over thumbnail */}
                <div style={{
                  position: "absolute",
                  bottom: 16,
                  left: 20,
                  zIndex: 8,
                }}>
                  <h2 style={{
                    fontSize: "clamp(16px, 4vw, 26px)",
                    fontWeight: 900,
                    color: "#fff",
                    textTransform: "uppercase",
                    letterSpacing: "0.03em",
                    marginBottom: 12,
                    textShadow: "0 2px 8px rgba(0,0,0,0.9)",
                    margin: "0 0 12px 0",
                  }}>
                    {media.title}
                  </h2>

                  <button
                    onClick={handlePlayNow}
                    style={{
                      background: "#fff",
                      color: "#000",
                      fontWeight: 700,
                      fontSize: "clamp(12px, 2vw, 15px)",
                      padding: "9px 22px",
                      borderRadius: 4,
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                      boxShadow: "0 2px 10px rgba(0,0,0,0.6)",
                      transition: "background 0.18s, transform 0.1s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.82)"}
                    onMouseLeave={e => e.currentTarget.style.background = "#fff"}
                    onMouseDown={e => e.currentTarget.style.transform = "scale(0.95)"}
                    onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
                  >
                    <svg viewBox="0 0 24 24" fill="black" style={{ width: 16, height: 16, marginLeft: 1 }}>
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    Play Now
                  </button>
                </div>
              </div>

              {/* Meta info */}
              <div
                className="modal-grid"
                style={{
                  padding: "clamp(14px, 3vw, 24px)",
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: 16,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, fontSize: "clamp(10px, 2vw, 13px)" }}>
                    <span style={{ color: "#46d369", fontWeight: 700 }}>{media.match}</span>
                    <span style={{ color: "#aaa" }}>{media.duration}</span>
                    <span style={{ border: "1px solid #555", padding: "1px 5px", borderRadius: 2, fontSize: "clamp(8px, 1.5vw, 11px)", fontWeight: 700, color: "#ccc" }}>{media.age}</span>
                    <span style={{ border: "1px solid #555", padding: "1px 4px", borderRadius: 2, fontSize: "clamp(8px, 1.5vw, 10px)", color: "#aaa" }}>HD</span>
                  </div>
                  <p style={{ fontSize: "clamp(11px, 2vw, 14px)", color: "#ddd", fontWeight: 300, lineHeight: 1.6, margin: 0 }}>
                    {media.desc}
                  </p>
                </div>

                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  fontSize: "clamp(10px, 2vw, 13px)",
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                  paddingTop: 12,
                }}>
                  <div><span style={{ color: "#666" }}>Cast: </span><span style={{ color: "#ccc" }}>You, Me</span></div>
                  <div><span style={{ color: "#666" }}>Genres: </span><span style={{ color: "#ccc" }}>Romantic Reality</span></div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
                    {media.tags.map((tag, i) => (
                      <span key={i} style={{ background: "#2a2a2a", color: "#bbb", padding: "3px 8px", borderRadius: 3, fontSize: "clamp(9px, 1.5vw, 11px)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <style jsx global>{`
              @media (min-width: 640px) {
                .modal-grid { grid-template-columns: 2fr 1fr !important; }
              }
            `}</style>
          </div>
        )}
      </AnimatePresence>

      {/* ── Fullscreen Video Player ── */}
      <NFFullscreenPlayer
        videoSrc={media?.videoSrc || null}
        thumbnailSrc={media?.img}
        isOpen={fullscreenOpen}
        onClose={handleFullscreenClose}
      />
    </>
  );
}