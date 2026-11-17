window.__timelines = window.__timelines || {};

const tl = gsap.timeline({ paused: true });

const SCENES = [
  { id: 's-hook',  start: 0.00,  duration: 4.50,  photo: 'hook-photo' },
  { id: 's-m1',    start: 4.50,  duration: 8.48,  photo: 'm1-photo' },
  { id: 's-m2',    start: 12.98, duration: 7.00,  photo: 'm2-photo' },
  { id: 's-m3',    start: 19.98, duration: 8.38,  photo: 'm3-photo' },
  { id: 's-m4',    start: 28.36, duration: 11.50, photo: 'm4-photo' },
  { id: 's-outro', start: 39.86, duration: 8.45,  photo: 'outro-photo' }
];

SCENES.forEach((sc, idx) => {
  const el = document.getElementById(sc.id);
  const photo = document.getElementById(sc.photo);
  const rvs = el.querySelectorAll('.rv');
  const hairline = el.querySelector('.hairline');
  const portrait = el.querySelector('.portrait');
  const isLast = idx === SCENES.length - 1;

  tl.fromTo(
    el,
    { opacity: 0, filter: 'blur(8px)' },
    { opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power2.out' },
    sc.start
  );

  if (photo) {
    tl.fromTo(
      photo,
      { scale: 1.0 },
      { scale: 1.06, duration: sc.duration, ease: 'none' },
      sc.start
    );
  }

  if (portrait) {
    tl.fromTo(
      portrait,
      { scale: 0.7, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.65, ease: 'back.out(1.6)' },
      sc.start + 0.45
    );
  }

  if (hairline) {
    tl.fromTo(
      hairline,
      { width: 0 },
      { width: 300, duration: 0.7, ease: 'expo.out' },
      sc.start + 0.35
    );
  }

  if (rvs.length) {
    tl.fromTo(
      rvs,
      { yPercent: 115, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: 'expo.out'
      },
      sc.start + 0.2
    );
  }

  if (!isLast) {
    tl.to(
      el,
      {
        opacity: 0,
        filter: 'blur(8px)',
        duration: 0.45,
        ease: 'power2.in'
      },
      sc.start + sc.duration - 0.45
    );
  }
});

window.__timelines['main'] = tl;
