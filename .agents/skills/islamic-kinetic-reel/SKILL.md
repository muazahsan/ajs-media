---
name: islamic-kinetic-reel
description: End-to-end workflow to design, build, and optimize modern, minimal, cinematic Islamic kinetic typography reels, event promos, and videos using HyperFrames, image-generator, and media-use. Adaptable to any custom duration or aspect ratio. Strictly enforces a staged visual-first workflow where audio/voiceover is NEVER added until visual layouts are reviewed and explicitly approved by the user.
---

# Islamic Kinetic Reel Workflow

Standardized procedure for crafting high-quality, cinematic Islamic event promos, kinetic typography announcements, and Bayan videos using HyperFrames (`/hyperframes`, `/hyperframes-cli`, `/hyperframes-registry`), AI visual generation (`image-generator`), and audio mixing (`/media-use`).

---

## ⚠️ THE GOLDEN RULE: AUDIO AT THE VERY END

> [!CRITICAL]
> **NEVER GENERATE OR EMBED AUDIO IN THE FIRST PASS.**
> Audio (BGM, sound effects, voiceover/TTS) must **NEVER** be created or added to the project until:
> 1. All visuals, scenes, layouts, and animations are built, linted, and reviewed.
> 2. The user has inspected the visual preview and explicitly instructed to add audio.
> 
> *Always present the silent visual preview first!*

---

## Core Skills & Tooling Integration

This workflow orchestrates the following specialized capabilities:

1. **`/hyperframes`**: Core framework for DOM-to-video declarative animation and rendering contracts.
2. **`/hyperframes-cli`**: CLI commands for development (`preview`), quality auditing (`lint`, `check`), snapshots (`snapshot`), and export (`render`).
3. **`/hyperframes-registry`**: Search and reuse pre-built components and motion graphics primitives where applicable.
4. **`image-generator`**: AI subagent invoked to produce photorealistic thematic images (e.g. parenting concepts, serene mosque courtyards).
5. **`/media-use`**: Invoked **only after user review** to source, speed-tune, duck, and mix audio tracks and voiceover clips.

---

## Phase 0: Project Directory Naming Convention

> [!IMPORTANT]
> **Directory Naming Rule**:
> Every time a new project is created, create a dedicated directory named using the pattern:
> **`<topic>-<date>`** where the date is formatted strictly as **`DD-MM-YYYY`** (e.g., `jumma-13-11-2026`, `ramadan-bayan-01-04-2026`).
> Never create loose files in the root workspace or reuse generic project folders.

---

## Phase 1: Dimensions & Flexible Timeline Sizing

1. **Aspect Ratio & Framing**:
   - **Vertical Reels / Shorts**: `1080x1920` (9:16) with center-safe margins.
   - **Horizontal / Standard Video**: `1920x1080` (16:9).
   - Set attributes dynamically on `<div id="root">` (`data-width`, `data-height`).
2. **Duration (No Fixed Limits)**:
   - Adapt to the specific event requirements (e.g. 18s, 26s, 34s, 38s, 40s+).
   - Set the root `data-duration="<seconds>"`.
3. **Scene Separation & Full-Screen Layout Principles**:
   - **Avoid Cluttered Cards**: Rather than squeezing speaker names, venue info, and topic art into a single cramped card with empty space above and below, split complementary information into distinct, rhythmically timed screens:
     - **Screen A (Speaker / Venue)**: Focused card showcasing the venue and speaker name.
     - **Screen B (Thematic Topic)**: Full-bleed edge-to-edge cinematic photography dedicated to the topic with a subtle camera push-in.
   - **Un-occluded Imagery**: Never place opaque background boxes directly over the center of thematic images. Use transparent floating containers at the lower third with high-contrast dropshadows and gentle gradient scrims so the visual subject remains 100% visible.

---

## Phase 2: Design Language & Visual System

1. **Background & Color Theme**:
   - **No Default Theme Restriction**: There is no mandatory default color aesthetic (no locked "Dark navy and gold" requirement). Choose flexible palettes suited to the event theme and user preference.
   - **Green Restriction**: **Do NOT use green color backgrounds** under any circumstances unless explicitly and specifically requested by the user.
2. **Opening Hook Scene**:
   - Avoid plain flat text on a blank background.
   - Utilize a grand, real architectural mosque photograph (`venue-mosque-real.jpg`) with soft gradient lighting, Arabic Salam/Bismillah, and an explicit **`UPCOMING JUMMA | DATE`** badge.
3. **Terminology Standards**:
   - For Jumma speakers / Bayan deliverers: Use **`பேச்சாளர்`** (Speaker) instead of *கத்தீப்* unless specifically instructed otherwise.
   - Avoid generic "SPECIAL TOPIC" badge clutter; keep topic typography clean, bold, and centered.
4. **Typography Standards**:
   - **Tamil**: Clean Unicode Tamil typography (`Mukta Malar` / modern sans-serif fallback) with generous line heights.
   - **English**: Modern sans-serif (`Inter` or `Poppins`, weights 300 to 800).
   - **Arabic**: Clean classic script (`Amiri`) with vertical padding (`padding: 12px 14px; overflow: visible;`) to prevent diacritic clipping.
   - **Mobile Text Floor**: All readable secondary text/tags must be **$\ge 28\text{px}$** (`font-size: 28px; line-height: 1.3;`).
5. **Imagery Standards**:
   - **Existing Media First**: Search workspace and local media folders for actual speaker portraits and organization logos (`assets/speaker.png`, `assets/logo.png`).
   - **AI Photographic Imagery**: Use `image-generator` subagents to create photorealistic, high-context vertical/horizontal imagery. Avoid flat icons or generic clip-art.

---

## Phase 3: Motion & Animation Architecture

1. **GSAP Setup & Offline Safety**:
   - **Always bundle GSAP locally** at `./assets/gsap.min.js`.
   - Timeline must be initialized paused and registered:
     ```javascript
     window.__timelines = window.__timelines || {};
     const tl = gsap.timeline({ paused: true });
     // ... animation tweens ...
     window.__timelines["main"] = tl;
     ```
2. **Atmospheric Background Motion**:
   - Continuous slow camera push-in across the full duration (`scale: 1.0` to `1.06`, `ease: "none"`).
   - Soft blurred gradient light orbs drifting gently.
   - Subtle architectural dome silhouette line at the bottom.
   - Faint film grain overlay for cinematic texture.
3. **Kinetic Text Reveals**:
   - Masked slide-ups using `overflow: hidden` containers (`.mask-box`).
   - Smooth easing (`expo.out`, duration `0.6s - 0.8s`).
   - Self-drawing gold/accent hairlines (`width: 0 -> width: 300px`).
   - Soft blur-fade scene exits (`opacity: 0, filter: "blur(8px)"`, duration `0.4s - 0.5s`).

---

## Phase 4: Verification & Silent Visual Review Checkpoint

1. **Run Linter**:
   ```bash
   npx hyperframes lint --verbose
   ```
   Must return **0 errors and 0 warnings**.
   - *Line Count Watch*: If index.html approaches 300 lines, compact whitespace/comments to prevent `composition_file_too_large` warnings.
   - *Attribute Hygiene*: Ensure non-audio timeline elements do not have loose `data-start`/`data-duration` attributes that conflict with Studio clip rules.
2. **Capture Frame Snapshots**:
   ```bash
   npx hyperframes snapshot --at <key_seconds>
   ```
3. **Start Studio Preview**:
   ```bash
   npx hyperframes preview --background
   ```
4. **Present Visuals to User**:
   - Report visual status and preview URL.
   - **STOP HERE**. Present the silent visual composition to the user for feedback.

---

## Phase 5: Audio & Voiceover Integration (ONLY AFTER APPROVAL)

1. **Voice Character & Tone**:
   - Use high-fidelity neural voices with **warm, deep, authoritative male presence** (e.g. `ta-IN-ValluvarNeural` tuned with `-5Hz` to `-6Hz` pitch).
   - Post-process with FFmpeg parametric EQ:
     - Low-end warmth: `equalizer=f=110:width_type=o:width=1.2:g=5.5`
     - Vocal presence: `equalizer=f=2800:width_type=o:width=1.0:g=2.0`
     - Dynamic compressor: `acompressor=threshold=-12dB:ratio=3:attack=10:release=120`
2. **Script Structure & Hierarchy**:
   - **Opening Hook**: Introduce upcoming Jumma (*“அஸ்ஸலாமு அலைக்கும். வரும் ஜும்மா சிறப்பு பயான்.”*).
   - **Speaker Scenes**: *Place $\rightarrow$ Speaker Title $\rightarrow$ Speaker Name* (*“இடம் மஸ்ஜிதே..., பேச்சாளர் சகோதரர் / மவ்லவி...”*).
   - **Topic Scenes**: *Topic Title $\rightarrow$ Topic Headline* (*“தலைப்பு, ...”*).
   - **Outro**: *Prayer timing & organizing body invitation*.
3. **Strict Zero-Overlap Rule**:
   - Every audio line must conclude before the current scene's transition out starts. Leave a `0.3s - 0.8s` natural silence cushion between scene handoffs.
   - **Leading Silence Removal**: Run `silenceremove` filter so voice clips speak immediately on scene entry without delayed fades.
4. **Background Music (BGM)**:
   - Mastered ambient spiritual track looping seamlessly with 1.5s fade-in and 2.8s fade-out, ducked at `0.20 - 0.22` volume.
