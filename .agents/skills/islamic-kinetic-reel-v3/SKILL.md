---
name: islamic-kinetic-reel-v3
description: Refined staged workflow to design, build, verify, and render modern, minimal, cinematic Islamic kinetic typography reels using HyperFrames, image-generator, Sarvam AI Bulbul v3, and FFmpeg audio muxing. Includes fixes for Studio timeline visibility, audio-driven retiming, and reliable MP4 audio muxing.
---

# Islamic Kinetic Reel Workflow — v3

Phases: **0 Intake → 1 Project Setup → 2 Layout → 3 Design → 4 Motion → 5 Silent Review (STOP) → 6 Audio (after approval) → 7 Final Render**

## Key Improvements in v3
1. **Confirm Event & Script Summaries First**: Always echo the exact parsed event data (and later, the spoken audio script excluding `no voice, only text` items) and wait for user confirmation before building or generating TTS.
2. **No Blank First Scene**: Never use `visibility: hidden` on `.scene` or zero-duration `tl.set(..., { autoAlpha: 1 }, 0)`. Use `opacity: 0` in CSS and an interpolated `tl.fromTo(el, { opacity: 0, filter: 'blur(8px)' }, { opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power2.out' }, sc.start)` in `main.js`.
3. **Clean `<section>` & `<audio>` Markup**:
   - Keep `<section>` elements free of stray `data-start` / `data-track-index` attributes when GSAP drives the timeline.
   - Use `<audio id="vo-..." src="./assets/vo-....mp3" data-start="..." data-duration="..." data-volume="1.0" preload="auto"></audio>` and run `npx -y hyperframes lint --verbose` (**0 errors, 0 warnings**).
4. **Reliable Audio Muxing Fallback**: If `hyperframes render` reports `audioCount: 0` / `hasAudio: false`, mux all `vo-*.mp3` tracks into the rendered MP4 with `ffmpeg` (`adelay` + `amix`) at their exact `data-start` millisecond offsets.
5. **Sarvam AI Bulbul v3**: Use `anand`, `vijay`, `gokul`, or `mani` (`abhilash` is `bulbul:v2`-only). Store `SARVAM_API_KEY` in git-ignored `.env`.
