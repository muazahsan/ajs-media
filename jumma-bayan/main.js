window.__timelines = window.__timelines || {};
const tl = gsap.timeline({ paused: true });

// Slow cinematic camera push-in across 40.5 seconds
tl.fromTo(
  "#camera-rig",
  { scale: 1.0, y: 0 },
  { scale: 1.06, y: -30, duration: 40.5, ease: "none" },
  0
);

// Ambient light orb drift
tl.fromTo(
  "#orb-1",
  { x: -30, y: -20, opacity: 0.6 },
  { x: 30, y: 30, opacity: 0.85, duration: 20.0, yoyo: true, repeat: 1, ease: "sine.inOut" },
  0
);

tl.fromTo(
  "#orb-2",
  { x: 25, y: 20, opacity: 0.5 },
  { x: -25, y: -30, opacity: 0.75, duration: 20.0, yoyo: true, repeat: 1, ease: "sine.inOut" },
  0
);

tl.fromTo(
  "#orb-3",
  { scale: 0.95, opacity: 0.5 },
  { scale: 1.08, opacity: 0.75, duration: 20.0, yoyo: true, repeat: 1, ease: "sine.inOut" },
  0
);

// =========================================================================
// SCENE 1: HOOK & DATE (0.0s - 4.6s) | Audio: 0.3s - 4.31s
// =========================================================================
tl.set("#scene-hook", { opacity: 1, filter: "blur(0px)" }, 0);

tl.fromTo(
  "#scene-hook .fullscreen-bg-img",
  { scale: 1.12, opacity: 0 },
  { scale: 1.0, opacity: 1, duration: 4.5, ease: "power1.out" },
  0
);

tl.fromTo(
  "#scene-hook .assalam-text",
  { y: 35, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.6, ease: "expo.out" },
  0.1
);

tl.fromTo(
  "#scene-hook .salam-tamil",
  { y: 30, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.6, ease: "expo.out" },
  0.3
);

tl.fromTo(
  "#hairline-1",
  { width: 0 },
  { width: 300, duration: 0.6, ease: "expo.out" },
  0.5
);

tl.fromTo(
  "#scene-hook .upcoming-jumma-badge-box",
  { scale: 0.85, opacity: 0 },
  { scale: 1.0, opacity: 1, duration: 0.5, ease: "back.out(1.4)" },
  0.7
);

tl.fromTo(
  "#scene-hook .title-hero",
  { y: 40, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.7, ease: "expo.out" },
  1.0
);

tl.fromTo(
  "#scene-hook .intro-badges-row",
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.6, ease: "expo.out" },
  1.4
);

tl.to(
  "#scene-hook",
  { opacity: 0, filter: "blur(8px)", duration: 0.4, ease: "power2.inOut" },
  4.4
);

// =========================================================================
// MOSQUE 1: MASJIDE MUHAMMADIYA
// Speaker: 4.6s - 9.2s (Audio: 4.8s - 9.15s)
// Topic:   9.2s - 12.1s (Audio: 9.4s - 11.66s)
// =========================================================================
tl.set("#scene-m1-speaker", { opacity: 1, filter: "blur(0px)" }, 4.6);

tl.fromTo(
  "#scene-m1-speaker .venue-tag-badge",
  { y: 30, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.5, ease: "expo.out" },
  4.7
);

tl.fromTo(
  "#hairline-m1",
  { width: 0 },
  { width: 300, duration: 0.6, ease: "expo.out" },
  4.9
);

tl.fromTo(
  "#scene-m1-speaker .speaker-large-card",
  { scale: 0.9, opacity: 0 },
  { scale: 1.0, opacity: 1, duration: 0.6, ease: "back.out(1.2)" },
  5.1
);

tl.to(
  "#scene-m1-speaker",
  { opacity: 0, filter: "blur(8px)", duration: 0.4, ease: "power2.inOut" },
  9.0
);

// Topic 1
tl.set("#scene-m1-topic", { opacity: 1, filter: "blur(0px)" }, 9.2);

tl.fromTo(
  "#scene-m1-topic .fullscreen-bg-img",
  { scale: 1.15, opacity: 0 },
  { scale: 1.02, opacity: 1, duration: 2.9, ease: "power1.out" },
  9.2
);

tl.fromTo(
  "#scene-m1-topic .topic-glass-container",
  { y: 30, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.6, ease: "expo.out" },
  9.4
);

tl.to(
  "#scene-m1-topic",
  { opacity: 0, filter: "blur(8px)", duration: 0.4, ease: "power2.inOut" },
  11.9
);

// =========================================================================
// MOSQUE 2: MASJIDE TAWHEED
// Speaker: 12.1s - 15.8s (Audio: 12.3s - 15.64s)
// Topic:   15.8s - 19.2s (Audio: 16.0s - 18.88s)
// =========================================================================
tl.set("#scene-m2-speaker", { opacity: 1, filter: "blur(0px)" }, 12.1);

tl.fromTo(
  "#scene-m2-speaker .venue-tag-badge",
  { y: 30, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.5, ease: "expo.out" },
  12.2
);

tl.fromTo(
  "#hairline-m2",
  { width: 0 },
  { width: 300, duration: 0.6, ease: "expo.out" },
  12.4
);

tl.fromTo(
  "#scene-m2-speaker .speaker-large-card",
  { scale: 0.9, opacity: 0 },
  { scale: 1.0, opacity: 1, duration: 0.6, ease: "back.out(1.2)" },
  12.6
);

tl.to(
  "#scene-m2-speaker",
  { opacity: 0, filter: "blur(8px)", duration: 0.4, ease: "power2.inOut" },
  15.6
);

// Topic 2
tl.set("#scene-m2-topic", { opacity: 1, filter: "blur(0px)" }, 15.8);

tl.fromTo(
  "#scene-m2-topic .fullscreen-bg-img",
  { scale: 1.15, opacity: 0 },
  { scale: 1.02, opacity: 1, duration: 3.4, ease: "power1.out" },
  15.8
);

tl.fromTo(
  "#scene-m2-topic .topic-glass-container",
  { y: 30, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.6, ease: "expo.out" },
  16.0
);

tl.to(
  "#scene-m2-topic",
  { opacity: 0, filter: "blur(8px)", duration: 0.4, ease: "power2.inOut" },
  19.0
);

// =========================================================================
// MOSQUE 3: MASJIDE RAHMANIA
// Speaker + Portrait: 19.2s - 23.4s (Audio: 19.4s - 23.20s)
// Topic:   23.4s - 26.5s (Audio: 23.6s - 26.27s)
// =========================================================================
tl.set("#scene-m3-speaker", { opacity: 1, filter: "blur(0px)" }, 19.2);

tl.fromTo(
  "#scene-m3-speaker .venue-tag-badge",
  { y: 30, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.5, ease: "expo.out" },
  19.3
);

tl.fromTo(
  "#hairline-m3",
  { width: 0 },
  { width: 300, duration: 0.6, ease: "expo.out" },
  19.5
);

tl.fromTo(
  "#scene-m3-speaker .speaker-avatar-border",
  { scale: 0.8, opacity: 0 },
  { scale: 1.0, opacity: 1, duration: 0.6, ease: "back.out(1.3)" },
  19.7
);

tl.fromTo(
  "#scene-m3-speaker .speaker-large-card",
  { y: 25, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.5, ease: "expo.out" },
  20.0
);

tl.to(
  "#scene-m3-speaker",
  { opacity: 0, filter: "blur(8px)", duration: 0.4, ease: "power2.inOut" },
  23.2
);

// Topic 3
tl.set("#scene-m3-topic", { opacity: 1, filter: "blur(0px)" }, 23.4);

tl.fromTo(
  "#scene-m3-topic .fullscreen-bg-img",
  { scale: 1.15, opacity: 0 },
  { scale: 1.02, opacity: 1, duration: 3.1, ease: "power1.out" },
  23.4
);

tl.fromTo(
  "#scene-m3-topic .topic-glass-container",
  { y: 30, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.6, ease: "expo.out" },
  23.6
);

tl.to(
  "#scene-m3-topic",
  { opacity: 0, filter: "blur(8px)", duration: 0.4, ease: "power2.inOut" },
  26.3
);

// =========================================================================
// MOSQUE 4: MASJIDE HABEEB
// Speaker: 26.5s - 30.6s (Audio: 26.7s - 30.50s)
// Topic:   30.6s - 34.0s (Audio: 30.8s - 34.00s)
// =========================================================================
tl.set("#scene-m4-speaker", { opacity: 1, filter: "blur(0px)" }, 26.5);

tl.fromTo(
  "#scene-m4-speaker .venue-tag-badge",
  { y: 30, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.5, ease: "expo.out" },
  26.6
);

tl.fromTo(
  "#hairline-m4",
  { width: 0 },
  { width: 300, duration: 0.6, ease: "expo.out" },
  26.8
);

tl.fromTo(
  "#scene-m4-speaker .speaker-large-card",
  { scale: 0.9, opacity: 0 },
  { scale: 1.0, opacity: 1, duration: 0.6, ease: "back.out(1.2)" },
  27.0
);

tl.to(
  "#scene-m4-speaker",
  { opacity: 0, filter: "blur(8px)", duration: 0.4, ease: "power2.inOut" },
  30.4
);

// Topic 4
tl.set("#scene-m4-topic", { opacity: 1, filter: "blur(0px)" }, 30.6);

tl.fromTo(
  "#scene-m4-topic .fullscreen-bg-img",
  { scale: 1.15, opacity: 0 },
  { scale: 1.02, opacity: 1, duration: 3.4, ease: "power1.out" },
  30.6
);

tl.fromTo(
  "#scene-m4-topic .topic-glass-container",
  { y: 30, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.6, ease: "expo.out" },
  30.8
);

tl.to(
  "#scene-m4-topic",
  { opacity: 0, filter: "blur(8px)", duration: 0.4, ease: "power2.inOut" },
  33.8
);

// =========================================================================
// OUTRO & AJS PERNAMBUT (33.8s - 40.5s) | Audio: 34.0s - 40.05s
// =========================================================================
tl.set("#scene-outro", { opacity: 1, filter: "blur(0px)" }, 33.8);

tl.fromTo(
  "#ajs-logo-box",
  { scale: 0.8, opacity: 0 },
  { scale: 1.0, opacity: 1, duration: 0.6, ease: "back.out(1.3)" },
  33.9
);

tl.fromTo(
  "#scene-outro .motto-pill",
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.5, ease: "expo.out" },
  34.2
);

tl.fromTo(
  "#scene-outro .important-info-grid",
  { y: 25, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.5, ease: "expo.out" },
  34.5
);

tl.fromTo(
  "#scene-outro .org-invite-label",
  { y: 15, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.4, ease: "expo.out" },
  34.9
);

tl.fromTo(
  "#hairline-outro",
  { width: 0 },
  { width: 300, duration: 0.5, ease: "expo.out" },
  35.1
);

tl.fromTo(
  "#scene-outro .org-name-hero",
  { y: 25, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.6, ease: "expo.out" },
  35.3
);

tl.fromTo(
  "#scene-outro .org-city",
  { y: 15, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.5, ease: "expo.out" },
  35.7
);

window.__timelines["main"] = tl;
