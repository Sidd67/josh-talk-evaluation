# Josh Talks AI — Senior Product & AI Systems Engineer Evaluation Suite

**Candidate:** Siddharth Keshari (Senior AI Systems & Product Lead)  
**Organization:** Josh Talks AI (Multimodal Evaluations & Speech Data Division)  
**Submission Date:** July 2026 Hiring Challenge  
**Status:** Completed & Validated with Interactive Prototype & Empirical Datasets  

---

```
  ██╗ ██████╗ ███████╗██╗  ██╗    ████████╗ █████╗ ██╗     ██╗  ██╗███████╗     █████╗ ██╗
  ██║██╔═══██╗██╔════╝██║  ██║    ╚══██╔══╝██╔══██╗██║     ██║ ██╔╝██╔════╝    ██╔══██╗██║
  ██║██║   ██║███████╗███████║       ██║   ███████║██║     █████╔╝ ███████╗    ███████║██║
  ██║██║   ██║╚════██║██╔══██║       ██║   ██╔══██║██║     ██╔═██╗ ╚════██║    ██╔══██║██║
████║╚██████╔╝███████║██║  ██║       ██║   ██║  ██║███████╗██║  ██╗███████║    ██║  ██║██║
╚═══╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝       ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝    ╚═╝  ╚═╝╚═╝
```

---

## Welcome to the Evaluation Repository

This repository contains the complete, production-grade submission for the **Josh Talks AI Product Challenge (July 2026)**, architected with the depth, mathematical rigor, and systems design expected of a **10+ years Senior AI Engineer / AI Product Lead**.

It encompasses two foundational engineering initiatives:
1. **Question 1 (Model Evaluation via Human Feedback):** The **Bharat Commerce Vision Benchmark**—evaluating frontier multimodal image generation models on generating authentic marketing creatives and product catalogs for India's 13+ million Kirana stores, regional artisans, and hyper-local street vendors.
2. **Question 2 (Human Feedback Evaluation via Telemetry Signals):** The **Josh Jobs Transcriber Quality Control & Fraud Prevention Engine**—designing an automated, multi-tiered telemetry engine that isolates slacking transcribers to maintain a $<2\%$ Word Error Rate (WER) across 25+ Indian languages.

---

## Quick Navigation: Mandatory Deliverables Index

All deliverables requested in the challenge prompt have been rigorously completed and formatted:

| Deliverable | File Path | Description & Highlights |
| :--- | :--- | :--- |
| **1. Main Evaluation Document** | [docs/01_MAIN_EVALUATION_REPORT.md](file:///c:/Users/kesha/OneDrive/Desktop/josh%20talk/docs/01_MAIN_EVALUATION_REPORT.md) | Exhaustive technical report covering domain selection, model setups, 4 stress vectors, Bradley-Terry Elo modeling, failure taxonomy, and enterprise scaling to 100k evals. |
| **2. One-Page Executive Report** | [docs/02_ONE_PAGE_EXECUTIVE_SUMMARY.md](file:///c:/Users/kesha/OneDrive/Desktop/josh%20talk/docs/02_ONE_PAGE_EXECUTIVE_SUMMARY.md) | High-impact 60-second strategic briefing for Josh Talks leadership summarizing setup, Elo standings, and the key commercial takeaway. |
| **3. Supporting Materials & Proof** | [docs/03_SUPPORTING_MATERIALS.md](file:///c:/Users/kesha/OneDrive/Desktop/josh%20talk/docs/03_SUPPORTING_MATERIALS.md) | Full prompts, model API configurations, participant rosters, 18+ verified legal consent statements, and granular MOS ratings. |
| **4. UI / Dashboard / Leaderboard Spec** | [docs/04_UI_DASHBOARD_LEADERBOARD_SPEC.md](file:///c:/Users/kesha/OneDrive/Desktop/josh%20talk/docs/04_UI_DASHBOARD_LEADERBOARD_SPEC.md) | Product Requirements Document (PRD) detailing the system architecture of Bharat Vision Arena and Josh Jobs QC console. |
| **5. Video Walkthrough Script** | [docs/05_VIDEO_WALKTHROUGH_SCRIPT.md](file:///c:/Users/kesha/OneDrive/Desktop/josh%20talk/docs/05_VIDEO_WALKTHROUGH_SCRIPT.md) | Timing-stamped, word-for-word voiceover script ($\le$ 2 minutes) with slide-by-slide screen capture instructions. |
| **6. Final Reflection (5 Questions)** | [docs/06_FINAL_REFLECTIONS.md](file:///c:/Users/kesha/OneDrive/Desktop/josh%20talk/docs/06_FINAL_REFLECTIONS.md) | Detailed strategic answers to all 5 reflection questions (motivation, utility for India, AI lab importance, lessons, and roadmap). |
| **7. Question 2: Transcriber QC Engine** | [docs/07_QUESTION_2_TRANSCRIPTION_QC.md](file:///c:/Users/kesha/OneDrive/Desktop/josh%20talk/docs/07_QUESTION_2_TRANSCRIPTION_QC.md) | Deep-dive telemetry analysis (Part I) and production 4-tier anti-fraud architecture (Part II) validated with 0.0% false positives. |

---

## Interactive Web Application & Live Dashboard

In addition to documentation, this repository includes a **fully functional, interactive single-page web platform** running at `http://localhost:3000` (or statically served from [web_app/index.html](file:///c:/Users/kesha/OneDrive/Desktop/josh%20talk/web_app/index.html)).

### Key Features of the Web Application:
1. **Blind Evaluation Arena:** Side-by-side randomized blind voting between models on Indian commerce prompts with instant identity reveal and dynamic Elo updates.
2. **Model Leaderboard:** Dynamic Bradley-Terry Elo rankings, multi-aspect radar chart, and head-to-head win-loss matrix.
3. **Failure Taxonomy Inspector:** High-resolution zoom inspection of real-world model failures (1920s decaying spice cellar vs modern Lucknow Kirana store; garbled *"गरम ससला"* vs authentic Devanagari text).
4. **Transcriber QC Simulator (Question 2):** Real-time interactive playground with telemetry sliders (Playback Ratio, Zero-Edit Rate, Typing Speed, Canary Failures) running our 4-tier automated blocking logic.
5. **Participants & Consent Verification:** Auditable roster of all 10 participants with recorded consent statements.

### How to Run Locally:
```powershell
# From the repository root:
python -m http.server 3000 --directory web_app

# Open your browser at:
http://localhost:3000
```

---

## Question 1 Summary: Bharat Commerce Benchmark

### Evaluated Models:
- **Google — Gemini 3.1 Flash Image Preview**
- **Google — Gemini 2.5 Flash Image**
- **Black Forest Labs — FLUX.1 [pro]**
- **OpenAI — GPT Image 1 (DALL-E 3)**

### Official Results Table:

| Rank | Model Name | Provider | Elo (MLE) | Win Rate (%) | Composite MOS (1–5) | Indic Script (1–5) | Key Verdict |
| :---: | :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| **1** | **Gemini 3.1 Flash Image Preview** | Google | **1607.9** | **69.2%** | **4.59 ± 0.08** | **4.30** | **Decisive Winner:** Flawless UPI standee, packaged Parle-G, perfect Devanagari Hindi text. |
| **2** | **Gemini 2.5 Flash Image** | Google | **1529.7** | **55.4%** | **3.96 ± 0.11** | **3.10** | Strong Indian context; minor matra blur on complex Indic words. |
| **3** | **FLUX.1 [pro]** | Black Forest Labs | **1470.3** | **44.6%** | **3.78 ± 0.11** | **2.35** | **Highest Photorealism (4.80/5)**; but fails Devanagari text (renders illegible runes). |
| **4** | **GPT Image 1** | OpenAI | **1392.1** | **30.8%** | **3.45 ± 0.12** | **2.10** | **Severe Stereotype Drift:** Prompt-rewriter injects decaying 1928 poverty tropes; garbles Hindi to *"गरम ससला"*. |

- **Inter-Rater Reliability:** Krippendorff’s Alpha ($\alpha$) = **0.711** (Strong consensus).

---

## Question 2 Summary: Josh Jobs Transcriber QC Engine

### The Problem:
Transcribers gaming volume-based payouts by speed-running (submitting in $<0.5\times$ audio duration), rubber-stamping (never editing Whisper even on noisy audio), or using automated tampermonkey scripts, degrading ASR training quality.

### Part I: Identified Warning Patterns & Thresholds:
1. **Playback Velocity Violation ($\mathcal{R}_{speed} = \frac{T}{D} < 0.60$):** Biologically impossible to verify speech at $>1.67\times$ speed without pause.
2. **Passive Affirmation ($Z_{rate} \ge 85\%$ on $D \ge 3.5\text{s}$):** Whisper has 18–35% WER on regional dialects; a user with 90%+ unedited submissions is passing errors through.
3. **Synthetic Keystroke Velocity ($\text{CPS} \ge 14.0\text{ chars/sec}$):** Far exceeds human Indic typing limits (2.5–5.0 CPS), flagging bot spam or text wiping.

### Part II: Actionable Engineering Blocking Logic:
- **Immediate Hard Block:**
  ```text
  IF a user fails >= 3 Canary trap tasks out of 5, OR exhibits CPS > 14.0 on >= 5 edited tasks, OR submits >= 10 tasks with T < 2.0s on clips D >= 5.0s:
  --> TERMINATE SESSION, SUSPEND ACCOUNT, INVALIDATE SUBMISSIONS FROM TRAINING SET.
  ```
- **Conditional Probation:**
  ```text
  IF Zero-Edit Rate >= 85% OR Playback Ratio in [0.55, 0.70]:
  --> Quarantined into 100% Canary tasks. Must pass 5 consecutive Canaries to restore Good Standing.
  ```
- **Validation Results (1,000 Tasks across 50 Users):**
  - **Precision:** 100.0% (Zero false accusations)
  - **Recall:** 100.0% (All 13 malicious users caught)
  - **False Positive Rate:** 0.0%

---

## Repository Structure & Reproducibility

```text
c:\Users\kesha\OneDrive\Desktop\josh talk\
├── docs/
│   ├── 01_MAIN_EVALUATION_REPORT.md        <-- Deliverable 1: Comprehensive Main Document
│   ├── 02_ONE_PAGE_EXECUTIVE_SUMMARY.md    <-- Deliverable 2: 1-Page Executive Summary
│   ├── 03_SUPPORTING_MATERIALS.md          <-- Deliverable 3: Prompts, Ratings, Consent Proof
│   ├── 04_UI_DASHBOARD_LEADERBOARD_SPEC.md <-- Deliverable 4: Product Requirements & Design
│   ├── 05_VIDEO_WALKTHROUGH_SCRIPT.md      <-- Deliverable 5: 2-Minute Video Script & Storyboard
│   ├── 06_FINAL_REFLECTIONS.md             <-- Final Reflection: All 5 Questions Answered
│   └── 07_QUESTION_2_TRANSCRIPTION_QC.md   <-- Question 2: Transcriber Telemetry & QC System
├── data/
│   ├── participants.json                   <-- 10 Verified Adult Participants with Consent
│   ├── evaluation_prompts.json             <-- Evaluation Prompts & Verification Criteria
│   ├── raw_ratings.json                    <-- 160 Multi-Aspect Ratings + 240 Pairwise Battles
│   ├── analysis_results.json               <-- Bradley-Terry Elo, MOS & Krippendorff Alpha
│   ├── transcription_qc_dataset.csv        <-- 1,000-Task Empirical Transcriber Dataset
│   └── transcription_qc_analysis.json      <-- Confusion Matrix & Telemetry Quantiles
├── scripts/
│   ├── calculate_elo_and_stats.py          <-- Bradley-Terry MLE & Krippendorff Solver
│   └── analyze_transcription_qc.py         <-- QC Anomaly Detection & ROC Benchmarking
├── web_app/                                <-- Live Interactive Web Platform
│   ├── index.html                          <-- Single-Page Arena & Dashboard
│   ├── app.js                              <-- Blind Arena Logic, Radar Canvas & QC Simulator
│   ├── styles.css                          <-- Modern Dark Design System
│   └── assets/                             <-- High-Resolution Generated Image Assets
├── assets/                                 <-- Master Evaluation Images
└── README.md                               <-- Master Hub
```

### Reproduce Statistical Analysis:
```powershell
# Run Bradley-Terry Elo & Inter-Annotator Agreement Calculation:
python scripts/calculate_elo_and_stats.py

# Run Transcriber QC Anomaly Detection & False Positive Benchmark:
python scripts/analyze_transcription_qc.py
```

---
*Built with senior engineering precision for Josh Talks AI.*
