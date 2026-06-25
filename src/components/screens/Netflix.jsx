"use client";

import { useState, useEffect, useRef } from "react";

import ScreenContainer from "../ScreenContainer";
import NFHeader from "@/components/shared/NFHeader";
import NFRow from "@/components/shared/NFRow";
import NFDetailModal from "@/components/shared/NFDetailModal";
import NFFullscreenPlayer from "@/components/shared/NFFullscreenPlayer";

import { HERO, ROWS } from "@/DATA";

export default function Netflix({ onNext }) {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [heroFullscreen, setHeroFullscreen] = useState(false);
  const containerRef = useRef(null);

  const titleLines = HERO.title.split("\n");

  return (
    <ScreenContainer>
      <div
        ref={containerRef}
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          background: "#000",
          color: "#fff",
          overflowY: "auto",
          overflowX: "hidden",
          fontFamily: "'Netflix Sans', 'Helvetica Neue', Arial, sans-serif",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {/* ── Header ── always transparent */}
        <NFHeader />

        {/* ─────────────────────────────────────────
            HERO SECTION
        ───────────────────────────────────────── */}
        <div style={{
          position: "relative",
          width: "100%",
          height: "clamp(56vw, 80vh, 90vh)",
          minHeight: 280,
          display: "flex",
          alignItems: "flex-end",
          paddingBottom: "clamp(16px, 5vw, 60px)",
          paddingLeft: "clamp(16px, 5vw, 60px)",
          paddingRight: "clamp(16px, 5vw, 60px)",
          paddingTop: 60,
        }}>

          {/* ── Background — responsive image ── */}
          <div style={{ position: "absolute", inset: 0, background: "#000" }}>
            {/* Mobile image (< 768px) */}
            {HERO.backgroundMobileSrc && (
              <img
                src={HERO.backgroundMobileSrc}
                alt="Hero Mobile"
                className="hero-bg-mobile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  filter: "brightness(0.55) contrast(1.02)",
                  display: "none",
                }}
              />
            )}
            {/* Desktop/tablet image (>= 768px) */}
            <img
              src={HERO.backgroundSrc}
              alt="Hero Desktop"
              className="hero-bg-desktop"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                filter: "brightness(0.55) contrast(1.02)",
              }}
            />

            {/* Gradients */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.25) 45%, transparent 75%)",
            }} />
            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "32%",
              background: "linear-gradient(to top, #141414 0%, transparent 100%)",
            }} />
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "20%",
              background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 100%)",
            }} />
          </div>

          {/* ── Hero Content ── */}
          <div style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "clamp(260px, 55%, 580px)",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(6px, 1.5vw, 14px)",
          }}>
            {/* N Series badge */}
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ color: "#e50914", fontWeight: 900, fontSize: "clamp(18px, 4vw, 32px)", lineHeight: 1 }}>N</span>
              <span style={{ fontSize: "clamp(8px, 1.2vw, 11px)", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#ccc", paddingTop: 2 }}>
                {HERO.badgeLabel}
              </span>
            </div>

            {/* Title */}
            <h1 style={{
              fontSize: "clamp(22px, 6.5vw, 72px)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              color: "#fff",
              textTransform: "uppercase",
              lineHeight: 0.95,
              textShadow: "0 2px 12px rgba(0,0,0,0.6)",
              margin: 0,
            }}>
              {titleLines.map((line, i) => (
                <span key={i} style={{ display: "block" }}>{line}</span>
              ))}
            </h1>

            {/* Meta badges */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(4px, 1vw, 8px)", fontSize: "clamp(9px, 1.5vw, 13px)", fontWeight: 600 }}>
              <span style={{ color: "#46d369" }}>{HERO.match}</span>
              <span style={{ border: "1px solid rgba(255,255,255,0.35)", padding: "0 4px", fontSize: "clamp(7px, 1vw, 10px)", borderRadius: 2, background: "rgba(0,0,0,0.3)" }}>
                {HERO.year}
              </span>
              <span style={{ color: "#ccc" }}>{HERO.duration}</span>
              <span style={{ border: "1px solid #e50914", padding: "0 5px", fontSize: "clamp(7px, 1vw, 10px)", color: "#e50914", fontWeight: 800, borderRadius: 2 }}>
                {HERO.quality}
              </span>
            </div>

            {/* Description */}
            <p style={{
              fontSize: "clamp(11px, 1.8vw, 16px)",
              color: "rgba(230,230,230,0.92)",
              fontWeight: 400,
              lineHeight: 1.55,
              margin: 0,
            }}>
              {HERO.description}
            </p>

            {/* Buttons */}
            <div style={{ display: "flex", alignItems: "center", gap: "clamp(8px, 2vw, 16px)", marginTop: 4 }}>

              {/* ✅ Play → opens FULLSCREEN player */}
              <button
                onClick={() => setHeroFullscreen(true)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 7,
                  background: "#fff",
                  color: "#000",
                  fontWeight: 700,
                  fontSize: "clamp(11px, 1.8vw, 16px)",
                  padding: "clamp(7px, 1.5vw, 13px) clamp(14px, 3vw, 28px)",
                  borderRadius: 4,
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
                  transition: "background 0.18s, transform 0.1s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.82)"}
                onMouseLeave={e => e.currentTarget.style.background = "#fff"}
                onMouseDown={e => e.currentTarget.style.transform = "scale(0.96)"}
                onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
              >
                <svg viewBox="0 0 24 24" fill="black" style={{ width: "clamp(14px, 2vw, 18px)", height: "clamp(14px, 2vw, 18px)" }}>
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Play
              </button>

              {/* More Info → opens detail modal of first item */}
              <button
                onClick={() => setSelectedMedia(ROWS[0].items[0])}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 7,
                  background: "rgba(109,109,110,0.6)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "clamp(11px, 1.8vw, 16px)",
                  padding: "clamp(7px, 1.5vw, 13px) clamp(12px, 2.5vw, 24px)",
                  borderRadius: 4,
                  border: "none",
                  cursor: "pointer",
                  backdropFilter: "blur(6px)",
                  whiteSpace: "nowrap",
                  transition: "background 0.18s, transform 0.1s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(109,109,110,0.38)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(109,109,110,0.6)"}
                onMouseDown={e => e.currentTarget.style.transform = "scale(0.96)"}
                onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
              >
                <svg viewBox="0 0 24 24" fill="white" style={{ width: "clamp(14px, 2vw, 18px)", height: "clamp(14px, 2vw, 18px)" }}>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
                More Info
              </button>
            </div>
          </div>

          {/* Age rating badge */}
          <div style={{
            position: "absolute",
            right: 0,
            bottom: "clamp(20px, 4vw, 45px)",
            zIndex: 20,
            display: "flex",
            alignItems: "center",
            background: "rgba(0,0,0,0.35)",
            borderLeft: "3px solid rgba(255,255,255,0.6)",
            padding: "4px 12px 4px 10px",
            fontSize: "clamp(9px, 1.5vw, 13px)",
            fontWeight: 500,
            color: "#ddd",
            letterSpacing: 1,
          }}>
            {HERO.ageRating}
          </div>
        </div>

        {/* ─────────────────────────────────────────
            ROWS SECTION
        ───────────────────────────────────────── */}
        <div style={{
          position: "relative",
          zIndex: 20,
          paddingBottom: 80,
          paddingLeft: "clamp(16px, 4vw, 60px)",
          paddingRight: "clamp(16px, 4vw, 60px)",
          marginTop: "clamp(-20px, -3vw, -60px)",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(20px, 4vw, 40px)",
        }}>
          {ROWS.map((section) => (
            <NFRow
              key={section.id}
              title={section.rowTitle}
              items={section.items}
              onSelect={(item) => setSelectedMedia(item)}
            />
          ))}
        </div>

        {/* Footer */}
        <footer style={{
          width: "100%",
          maxWidth: 900,
          margin: "0 auto",
          padding: "24px clamp(16px, 4vw, 40px) 40px",
          color: "#555",
          fontSize: "clamp(10px, 1.5vw, 12px)",
          borderTop: "1px solid rgba(255,255,255,0.04)",
          textAlign: "center",
        }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px 24px", marginBottom: 12 }}>
            {["Help Center", "Terms of Use", "Privacy Policy", "Contact Us"].map(link => (
              <span key={link} style={{ cursor: "pointer", textDecoration: "underline", color: "#666" }}>{link}</span>
            ))}
          </div>
          <p style={{ color: "#444", fontSize: "clamp(9px, 1.2vw, 11px)", margin: 0 }}>
            © 1997–2026 Netflix, Inc. Built with love and absolute layout precision.
          </p>
        </footer>

        {/* ── Detail Modal for row cards ── */}
        <NFDetailModal
          media={selectedMedia}
          onClose={() => setSelectedMedia(null)}
        />

        {/* ── Hero Fullscreen Player ── */}
        <NFFullscreenPlayer
          videoSrc={HERO.videoSrc}
          thumbnailSrc={HERO.videoThumbnail || HERO.backgroundSrc}
          isOpen={heroFullscreen}
          onClose={() => setHeroFullscreen(false)}
        />

        <style jsx global>{`
          /* Mobile: show mainph.png, hide main.png */
          @media (max-width: 767px) {
            .hero-bg-mobile { display: block !important; }
            .hero-bg-desktop { display: none !important; }
          }
          /* Desktop: show main.png, hide mainph.png */
          @media (min-width: 768px) {
            .hero-bg-mobile { display: none !important; }
            .hero-bg-desktop { display: block !important; }
          }
        `}</style>
      </div>
    </ScreenContainer>
  );
}