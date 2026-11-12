---
name: islamic-kinetic-reel-v2
description: Staged workflow to design, build, verify, and render modern, minimal, cinematic Islamic kinetic typography reels (Jumma/Bayan promos, event announcements, Ramadan/Eid greetings) using HyperFrames, image-generator, and media-use. Supports any duration or aspect ratio, with a built-in Tamil Jumma template. Enforces an intake checklist, religious-accuracy checks, a silent visual-review checkpoint (NO audio until the user approves), audio-driven retiming, and a final render phase.
---

# Islamic Kinetic Reel Workflow — v2

Procedure for building cinematic Islamic promo reels with HyperFrames (`/hyperframes`, `/hyperframes-cli`, `/hyperframes-registry`), AI imagery (`image-generator`), and audio mixing (`/media-use`).

Phases: **0 Intake → 1 Project Setup → 2 Layout → 3 Design → 4 Motion → 5 Silent Review (STOP) → 6 Audio (after approval) → 7 Final Render**

---

## ⚠️ THE GOLDEN RULE: AUDIO AT THE VERY END

> [!CAUTION]
> **Never generate or embed audio (BGM, SFX, voiceover/TTS) in the first pass.**
> Audio is added only when:
> 1. All visuals, scenes, and animations are built, linted, and snapshotted, **and**
> 2. The user has reviewed the silent preview and **explicitly** asked for audio.

---

## Tooling

| Tool | Use |
|---|---|
| `/hyperframes` | Composition and animation rules, rendering contract |
| `/hyperframes-cli` | `preview`, `lint`, `check`, `snapshot`, `render` |
| `/hyperframes-registry` | Reuse pre-built components and motion primitives |
| `image-generator` | Photorealistic thematic imagery |
| `/media-use` | Audio sourcing, TTS, ducking, mixing (**Phase 6 only**) |

---

## Phase 0: Intake Checklist (Ask Before Building)

Collect these before writing any code. Ask the user for anything missing in **one** message. Don't guess names, dates, or times.

- **Event type**: Jumma / Bayan / Ramadan / Eid / Lecture / Other
- **Event date** (and day)
- **Speaker**: title (Moulavi / Brother / Sheikh…) + full name
- **Venue**: masjid name + area
- **Topic**: title (Tamil and/or English)
- **Timing**: prayer / Bayan start time
- **Organizer** name + logo
- **Format**: vertical `1080x1920` (default for reels) or horizontal `1920x1080`
- **Target duration** (default: 25–35s)
- **Languages** on screen (Tamil / English / Arabic)
- **Assets available**: speaker photo, logo, venue photo

---

## Phase 1: Project Setup

1. **Directory naming**: `<topic>-<DD-MM-YYYY>`, where the date is the **event date** (e.g. `jumma-13-11-2026`). Never put loose files in the workspace root.
2. **Assets** (in `./assets/`):
   - Search the workspace first for existing `speaker.png`, `logo.png`, `venue-*.jpg`.
   - Opening venue photo: use a real venue/mosque photo if available. Otherwise generate one with `image-generator`, or ask the user.
   - Bundle GSAP locally at `./assets/gsap.min.js` (no CDN).
3. **Root sizing**: set `data-width`, `data-height`, `data-duration` on `<div id="root">`.

---

## Phase 2: Layout & Scene Structure

1. **One idea per screen.** Split information into rhythmically timed scenes instead of one cramped card:
   - **Hook**: venue photo + Salam/Bismillah + `UPCOMING <EVENT> | DATE` badge
   - **Speaker / Venue**: focused card
   - **Topic**: full-bleed cinematic photo with slow push-in
   - **Outro**: time + organizer invitation + logo
2. **Keep imagery visible.** Never put opaque boxes over the center of a photo. Use lower-third floating text with drop shadows and soft gradient scrims.
3. **Safe areas (vertical)**: keep key text inside ~150px top / ~250px bottom margins (platform UI overlap).
4. **Default scene timing** (adjust to duration): Hook 4–5s · Speaker 6–8s · Topic 6–8s · Outro 5–6s.

### Built-in Template: Tamil Jumma
- Badge: `UPCOMING JUMMA | DD.MM.YYYY`
- Speaker label: **`பேச்சாளர்`** (not *கத்தீப்*, unless instructed)
- Topic label: `தலைப்பு` — no generic "SPECIAL TOPIC" badges

For other event types, adapt the badge and labels (e.g. `RAMADAN SPECIAL BAYAN`, `EID MUBARAK`).

---

## Phase 3: Design System

1. **Color**
   - No locked default palette. Pick one suited to the event (e.g. midnight + gold, warm sand + ivory, deep maroon + cream).
   - **No green backgrounds** unless the user explicitly asks.
   - Max 1 accent color + neutrals.
2. **Typography**
   - Tamil: `Mukta Malar` (fallback: modern sans), line-height ≥ 1.4
   - English: `Inter` or `Poppins`, weights 300–800
   - Arabic: `Amiri`, with `padding: 12px 14px; overflow: visible;` to prevent diacritic clipping
   - **Mobile text floor**: secondary text ≥ 28px (`line-height: 1.3`). Headlines ≥ 64px.
   - Bundle fonts locally when possible.
3. **Imagery**
   - Real assets first. Otherwise photorealistic `image-generator` images matching the aspect ratio. No flat icons or clip-art.
   - **Content guidelines**: never depict prophets, companions, or angels. Prefer architecture, nature, light, calligraphy, hands, and silhouettes over identifiable faces. No music instruments or immodest imagery.

### Religious Accuracy Check (Required)
- Verify spelling and diacritics of all Arabic text (Bismillah, Salam, du'a).
- Any Qur'an verse or hadith: cite the source (Surah:Ayah / collection + number) and confirm the text against a trusted reference. If you can't verify it, flag it to the user rather than inventing it.
- Honorifics (ﷺ, رضي الله عنه) used correctly.

---

## Phase 4: Motion

1. **GSAP timeline** (paused + registered):
   ```javascript
   window.__timelines = window.__timelines || {};
   const tl = gsap.timeline({ paused: true });
   // ... tweens ...
   window.__timelines["main"] = tl;
   ```
2. **Atmosphere (text scenes only)**: soft drifting gradient orbs, faint dome silhouette at bottom, light film grain. Turn these **off** over full-bleed photo scenes.
3. **Camera**: slow push-in on photo layers (`scale 1.0 → 1.06`, `ease: "none"`).
4. **Kinetic text**:
   - Masked slide-ups (`.mask-box { overflow: hidden }`), `expo.out`, 0.6–0.8s
   - Staggered words/lines 0.08–0.12s
   - Self-drawing accent hairlines (`width: 0 → 300px`)
   - Scene exits: blur-fade (`opacity: 0, filter: "blur(8px)"`, 0.4–0.5s)
5. **Readability**: every text element stays fully visible for ≥ 1.5s + ~0.3s per word.
6. **File size**: if `index.html` nears ~300 lines, split scenes into sub-compositions/partials (if supported) rather than stripping comments.

---

## Phase 5: Verification & Silent Review — STOP

1. `npx hyperframes lint --verbose` → **0 errors, 0 warnings**
   - Non-audio timeline elements must not carry stray `data-start` / `data-duration` attributes.
2. `npx hyperframes snapshot --at <key seconds>` (one per scene, mid-hold). Inspect for clipping, overlap, safe-area violations, and contrast.
3. `npx hyperframes preview --background`
4. Report to the user: preview URL, scene list with timings, snapshot paths, and any unverified religious text.
5. **STOP. Wait for feedback.** Repeat Phases 2–5 until the user approves and asks for audio.

---

## Phase 6: Audio (Only After Explicit Approval)

1. **Script** (Tamil Jumma template):
   - Hook: *"அஸ்ஸலாமு அலைக்கும். வரும் ஜும்மா சிறப்பு பயான்."*
   - Speaker: place → title → name (*"இடம் மஸ்ஜிதே…, பேச்சாளர் மவ்லவி…"*)
   - Topic: *"தலைப்பு, …"*
   - Outro: timing + organizer invitation
   - Show the script to the user before generating TTS.
2. **Voice**: warm, deep, authoritative male. Default is Edge TTS `ta-IN-ValluvarNeural`, pitch `-5Hz` to `-6Hz`. If unavailable, use the best available Tamil neural voice and tell the user.
3. **Voice post-processing** (FFmpeg):
   ```
   silenceremove=start_periods=1:start_threshold=-45dB,
   equalizer=f=110:width_type=o:width=1.2:g=5.5,
   equalizer=f=2800:width_type=o:width=1.0:g=2.0,
   acompressor=threshold=-12dB:ratio=3:attack=10:release=120
   ```
4. **Retiming (voice drives timing)**:
   - Measure each clip's duration.
   - Each clip must end **0.3–0.8s before** its scene's exit transition begins.
   - If a clip is too long: first extend the scene hold (update the GSAP timeline + root `data-duration`), then shorten the script. Never overlap lines across scenes.
   - Re-run lint + snapshots after retiming.
5. **BGM**: ambient, spiritual, non-instrumental/nasheed-style preferred (ask the user if unsure about instruments). Loop seamlessly, 1.5s fade-in, 2.8s fade-out, volume `0.20–0.22` under voice.
6. Preview again and get user sign-off on the mix.

---

## Phase 7: Final Render & Delivery

1. `npx hyperframes render` → MP4 (H.264, AAC, 30fps) at the composition resolution.
2. Output name: `<project-dir>/output/<topic>-<DD-MM-YYYY>-<WxH>.mp4`
3. QA: check duration, final-frame snapshots, audio peak ≤ -1 dBFS, and that nothing gets cut off at the end.
4. Report the output path, duration, and file size to the user.

---

## Quick Checklist
- [ ] Intake complete, nothing guessed
- [ ] Folder `<topic>-<DD-MM-YYYY>` (event date)
- [ ] No green backgrounds; text ≥ 28px; Arabic padded
- [ ] Religious text verified or flagged
- [ ] Lint clean, snapshots reviewed
- [ ] **Silent preview approved before any audio**
- [ ] Voice retimed with no overlaps; BGM ducked
- [ ] Final MP4 rendered and QA'd
