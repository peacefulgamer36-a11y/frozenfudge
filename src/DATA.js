/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║         🎬 NETFLIX LOVE APP — EDIT EVERYTHING HERE          ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║  Sirf is ek file mein saara content change karo!            ║
 * ║  Thumbnail, video, title, description — sab yahan hai.      ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

// ─────────────────────────────────────────────
//  WHO'S WATCHING — Profile Screen
// ─────────────────────────────────────────────
export const PROFILE = {
  name: "Love",
  image: "/thumb/main1.jpg",
};

// ─────────────────────────────────────────────
//  HERO — Main Billboard Section
// ─────────────────────────────────────────────
export const HERO = {
  // Desktop background (laptop/tablet pe dikhega)
  backgroundSrc: "/thumb/main.png",

  // Mobile background — phone pe yeh image dikhegi
  backgroundMobileSrc: "/thumb/mainph.png",

  // Hero Video — Hero Play button dabaane par FULLSCREEN mein chalega
  videoSrc: "/videos/main.mp4",

  // Thumbnail — Video se pehle dikhega (hero background ke upar nahi, sirf player mein)
  videoThumbnail: "/thumb/img1.png",

  // Labels & Title
  badgeLabel: "Series",
  title: "Something\nSpecial",
  match: "99% Match",
  year: "2026",
  duration: "1 Season",
  quality: "4K Ultra",
  ageRating: "13+",

  description:
    "There's something truly wonderful I've been waiting to tell you... that's exactly why I crafted this little universe just for you. Are you ready to discover the full story?",
};

// ─────────────────────────────────────────────
//  ROWS — Thumbnail Grid Sections
// ─────────────────────────────────────────────
export const ROWS = [
  {
    id: "row-popular",
    rowTitle: "Popular on Netflix",
    items: [
      {
        id: "p1",
        title: "Our Memories",
        img: "/thumb/img1.png",
        videoSrc: "/videos/v7.mp4",
        tags: ["Romantic", "Nostalgic"],
        match: "98% Match",
        age: "13+",
        duration: "10s",
        desc: "When a beautiful journey of shared smiles and unforgettable milestones unfolds, two hearts create a timeless masterpiece of memories.",
      },
      {
        id: "p2",
        title: "Favorite Moments",
        img: "/thumb/img2.png",
        videoSrc: "/videos/v6.mp4",
        tags: ["Heartfelt", "Deep Connections"],
        match: "95% Match",
        age: "16+",
        duration: "27s",
        desc: "A curated collection of absolute candid gold. From silent glances to endless laughter, explore the guide to why every second spent together is a blockbuster.",
      },
      {
        id: "p3",
        title: "Late Night Chats",
        img: "/thumb/img3.png",
        videoSrc: "/videos/v5.mp4",
        tags: ["Witty", "Charming"],
        match: "99% Match",
        age: "All",
        duration: "16s",
        desc: "Screens glow under blankets as midnight rules disappear. Dive into the witty banter, spontaneous confessions, and sleepy moments that kept the moon awake.",
      },
      {
        id: "p4",
        title: "The Beginning",
        img: "/thumb/img4.png",
        videoSrc: "/videos/v4.mp4",
        tags: ["Slow Burn", "Rom-Com"],
        match: "92% Match",
        age: "13+",
        duration: "1 Season",
        desc: "Step back to day one. The nervous text messages, the accidental eye contact, and the beautiful spark that ignited an unexpected but magnificent story.",
      },
      {
        id: "p5",
        title: "Cute Fights",
        img: "/thumb/img5.png",
        videoSrc: "/videos/v3.mp4",
        tags: ["Drama", "Playful"],
        match: "89% Match",
        age: "18+",
        duration: "2 Seasons",
        desc: "Overdramatic pouting, fake angry faces, and the legendary debates about who loves whom more. Witness the chaotic, funny, and utterly adorable friction.",
      },
    ],
  },
  {
    id: "row-trending",
    rowTitle: "Trending Now",
    items: [
      {
        id: "t1",
        title: "Special Days",
        img: "/thumb/img6.png",
        videoSrc: "/videos/v2.mp4",
        tags: ["Celebration", "Feel-good"],
        match: "97% Match",
        age: "All",
        duration: "1h 15m",
        desc: "Every anniversary, birthday, and random surprise date packed into a high-energy saga of joy. A beautiful reminder that everyday moments become historic milestones.",
      },
      {
        id: "t2",
        title: "Long Calls",
        img: "/thumb/img7.png",
        videoSrc: "/videos/v1.mp4",
        tags: ["Calm", "Intimate"],
        match: "94% Match",
        age: "13+",
        duration: "3h 05m",
        desc: "Miles melt away through copper wires and digital screens. An emotional look into how voices across distances build an unshakeable bridge of warmth and security.",
      },
      {
        id: "t3",
        title: "First Impression",
        img: "/thumb/main.png",
        videoSrc: "/videos/main.mp4",
        tags: ["Awkward", "Adorable"],
        match: "91% Match",
        age: "13+",
        duration: "25m",
        desc: "The untold behind-the-scenes thoughts from the very first meeting. Unfiltered, slightly clumsy, completely endearing reflections of two souls meeting their favorite destiny.",
      },
      {
        id: "t4",
        title: "Inside Jokes",
        img: "/thumb/img4.png",
        videoSrc: "/videos/v4.mp4",
        tags: ["Hilarious", "Eccentric"],
        match: "96% Match",
        age: "All",
        duration: "5 Seasons",
        desc: "A secret language built over shared glances across crowded rooms. Warning: High doses of humor that absolutely no one else in the world will ever understand.",
      },
      {
        id: "t5",
        title: "Infinite Love",
        img: "/thumb/img5.png",
        videoSrc: "/videos/v3.mp4",
        tags: ["Timeless", "Masterpiece"],
        match: "99% Match",
        age: "All",
        duration: "Forever",
        desc: "The grand finale that never ends. A deep, cinematic exploration of commitment, shared dreams, and a bond configured to outlast the stars themselves.",
      },
    ],
  },
];

// ─────────────────────────────────────────────
//  AUDIO
// ─────────────────────────────────────────────
export const AUDIO = {
  introSound: "/videos/netflix.mp3",
  bgMusic: "/music.mp4",
};