// Jumma 13.11.2026 — silent visual pass (no audio until approved)
window.__timelines = window.__timelines || {};
const tl = gsap.timeline({ paused: true });
const TOTAL = 45.97;

// Scene windows [id, start, end]
const scenes = [
  ["#s-hook", 0, 4.54],
  ["#s-m1", 4.54, 11.61],
  ["#s-m2", 11.61, 18.61],
  ["#s-m3", 18.61, 26.78],
  ["#s-m4", 26.78, 33.93],
  ["#s-outro", 33.93, TOTAL],
];

// Atmosphere drift (shows through only on outro; photos cover it elsewhere)
tl.fromTo("#orb-a", { x: -30, y: -20 }, { x: 40, y: 40, duration: TOTAL, ease: "sine.inOut" }, 0);
tl.fromTo("#orb-b", { x: 30, y: 20 }, { x: -40, y: -30, duration: TOTAL, ease: "sine.inOut" }, 0);

scenes.forEach(([sel, start, end], i) => {
  const isLast = i === scenes.length - 1;
  // Enter
  tl.fromTo(sel, { opacity: 0, filter: "blur(8px)" }, { opacity: 1, filter: "blur(0px)", duration: 0.5, ease: "power2.out" }, start);
  // Camera push-in on photos
  const photo = document.querySelector(sel + " .photo");
  if (photo) tl.fromTo(photo, { scale: 1.0 }, { scale: 1.06, duration: end - start, ease: "none" }, start);
  // Kinetic text: masked slide-ups, staggered
  tl.fromTo(sel + " .rv", { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.7, ease: "expo.out", stagger: 0.1 }, start + 0.3);
  // Self-drawing hairlines
  tl.fromTo(sel + " .hairline", { width: 0 }, { width: 300, duration: 0.8, ease: "expo.out" }, start + 0.7);
  // Exit (blur-fade) — last scene holds to the end
  if (!isLast) tl.to(sel, { opacity: 0, filter: "blur(8px)", duration: 0.45, ease: "power2.in" }, end - 0.45);
});

window.__timelines["main"] = tl;

// Portrait pop-in per masjid scene
[4.54, 11.61, 18.61, 26.78].forEach((t, i) => {
  tl.fromTo(`#s-m${i + 1} .portrait`, { scale: 0.6, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.6)" }, t + 0.5);
});
