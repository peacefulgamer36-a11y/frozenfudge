"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScreenContainer from "../ScreenContainer";
import { PROFILE } from "@/DATA";

export default function NetflixIntro({ onComplete }) {
  const [selected, setSelected] = useState(false);

  return (
    <ScreenContainer>
      <div style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 20px",
      }}>
        {/* Netflix Logo */}
        <div style={{ position: "fixed", top: "clamp(12px, 3vw, 24px)", left: "clamp(12px, 4vw, 32px)", zIndex: 50 }}>
          <img
            src="/videos/netflix.svg"
            alt="Netflix"
            style={{ width: "clamp(56px, 10vw, 80px)", height: "auto", objectFit: "contain" }}
            draggable={false}
          />
        </div>

        {/* Main content */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0,
          marginTop: "-24px",
        }}>
          {/* "Who's Watching?" heading */}
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              textAlign: "center",
              fontWeight: 400,
              fontSize: "clamp(22px, 6vw, 44px)",
              letterSpacing: "-0.01em",
              color: "#fff",
              marginBottom: "clamp(24px, 5vw, 48px)",
            }}
          >
            Who&#39;s Watching?
          </motion.h1>

          {/* Profile Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            onClick={() => { setSelected(true); setTimeout(onComplete, 180); }}
            style={{ cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center" }}
            className="nf-profile-wrap"
          >
            <div
              className="nf-profile-avatar"
              style={{
                width: "clamp(120px, 28vw, 200px)",
                height: "clamp(120px, 28vw, 200px)",
                borderRadius: "50%",
                overflow: "hidden",
                border: selected ? "3px solid #fff" : "3px solid rgba(255,255,255,0.2)",
                transition: "border-color 0.3s, transform 0.3s",
              }}
            >
              <img
                src={PROFILE.image}
                alt={PROFILE.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                draggable={false}
              />
            </div>

            <span
              className="nf-profile-name"
              style={{
                marginTop: "clamp(12px, 2.5vw, 20px)",
                fontSize: "clamp(15px, 3.5vw, 24px)",
                fontWeight: 500,
                color: selected ? "#fff" : "#808080",
                transition: "color 0.3s",
              }}
            >
              {PROFILE.name}
            </span>
          </motion.div>

          {/* Done Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            onClick={onComplete}
            disabled={!selected}
            style={{
              marginTop: "clamp(32px, 6vw, 56px)",
              padding: "clamp(8px, 2vw, 14px) clamp(24px, 6vw, 44px)",
              border: `1px solid ${selected ? "#e50914" : "#555"}`,
              background: selected ? "#e50914" : "transparent",
              color: selected ? "#fff" : "#808080",
              fontSize: "clamp(11px, 1.8vw, 14px)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              cursor: selected ? "pointer" : "not-allowed",
              transition: "all 0.3s",
              opacity: selected ? 1 : 0.5,
              borderRadius: 0,
            }}
          >
            Done
          </motion.button>
        </div>

        <style jsx global>{`
          @media (hover: hover) {
            .nf-profile-wrap:hover .nf-profile-avatar {
              border-color: #fff !important;
              transform: scale(1.04);
            }
            .nf-profile-wrap:hover .nf-profile-name {
              color: #fff !important;
            }
          }
        `}</style>
      </div>
    </ScreenContainer>
  );
}
