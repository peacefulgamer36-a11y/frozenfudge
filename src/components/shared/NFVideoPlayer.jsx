"use client";

import { useRef, useState, useEffect } from "react";

/**
 * NFVideoPlayer — thumbnail dikhata hai, play karo toh video chalega.
 * Agar videoSrc null hai toh sirf thumbnail dikh‑ta hai.
 */
export default function NFVideoPlayer({ videoSrc, thumbnailSrc, autoPlay = false, className = "", style = {} }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Auto‑play (hero section mein use hoga)
  useEffect(() => {
    if (!autoPlay || !videoSrc || !videoRef.current) return;
    videoRef.current.play().then(() => setPlaying(true)).catch(() => {});
  }, [autoPlay, videoSrc]);

  const handlePlay = () => {
    if (!videoSrc || hasError) return;
    if (videoRef.current) {
      videoRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <div className={className} style={{ position: "relative", width: "100%", height: "100%", background: "#000", ...style }}>
      {/* Thumbnail */}
      {thumbnailSrc && (
        <img
          src={thumbnailSrc}
          alt="Thumbnail"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 0.4s",
            opacity: playing ? 0 : 1,
            zIndex: 1,
          }}
          draggable={false}
        />
      )}

      {/* Video */}
      {videoSrc && !hasError && (
        <video
          ref={videoRef}
          src={videoSrc}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 2,
            opacity: playing ? 1 : 0,
            transition: "opacity 0.4s",
          }}
          onError={() => { setHasError(true); setPlaying(false); }}
          onEnded={() => setPlaying(false)}
          playsInline
          controls={playing}
        />
      )}

      {/* Play Button Overlay — sirf tab dikhega jab video ho aur play nahi ho raha */}
      {videoSrc && !hasError && !playing && (
        <button
          onClick={handlePlay}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          aria-label="Play video"
        >
          <div style={{
            width: 52,
            height: 52,
            borderRadius: "50%",
            background: "rgba(0,0,0,0.6)",
            border: "2px solid rgba(255,255,255,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(4px)",
            transition: "background 0.2s, transform 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(229,9,20,0.85)"; e.currentTarget.style.transform = "scale(1.1)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(0,0,0,0.6)"; e.currentTarget.style.transform = "scale(1)"; }}
          >
            <svg viewBox="0 0 24 24" fill="white" style={{ width: 22, height: 22, marginLeft: 3 }}>
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}
