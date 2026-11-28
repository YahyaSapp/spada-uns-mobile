# Product Specification & Information Architecture — SPADA UNS Mobile

**Team 9 · Human-Computer Interaction (IMK) · Universitas Sebelas Maret (UNS)**  
**Status:** Locked Spec (Final Team Alignment — 24 November 2026)  
**Target UAS:** 7 Desember 2026 (Week 16)  
**Final Deliverables:**
1. **Visual Assets & Design System** (exported PNG/PDF from Figma for the report & presentation slides)
2. **Live Interactive HTML Prototype V1** (mobile-first web app, hosted on Vercel) + **V2 Revision** post-testing
3. **Usability Testing V1 Evaluation** (~5 UNS students) + **HCI Final Project Article & Report**

---

## 0. Research & Reference Sources

- **Primary Specification:** `docs/research/product-specification.md` *(this document — consolidates all locked product & UX decisions)*.
- **UX Research & Academic Evidence:**
  - `docs/research/Handoff Riset UX SPADA UNS Mobile.md` (user interview synthesis, 21 SPADA UNS as-is audit screenshots `A01–A11`, 10 Ruangguru benchmark screenshots `RG-01–RG-10`, and literature mapping).
  - `docs/benchmarks/SS Spada/` & `docs/benchmarks/SS Ruang Guru Mobile/` (visual audit & benchmark screenshots).
  - `docs/research/A Systematic Literature Review of Mobile Application Usability.pdf` (Huang & Benyoucef — mobile usability principles).
  - `docs/research/itse-07-2023-0122.pdf` (Kumar & Chand — Mobile Learning UEQ instrument, 1–4 scale, for post-prototype evaluation).

---

## 1. Execution Pipeline (UX Research → Figma → HTML Prototype)

Instead of static click-through noodle prototypes, real interactions are engineered in HTML/CSS/JS so search bars, filters, tabs, simulated file uploads, multiple-choice + essay quizzes, countdown timers, and persistent state work natively on respondents' mobile devices.

```text
[Phase 0] Visual Inspection of As-Is & Benchmark Screenshots
    Review `SS Spada/` and `SS Ruang Guru Mobile/` (RG-01–RG-10 & SP-11–SP-31)
    to lock the SPADA blue accent, retained strengths, and clean mobile interaction patterns.
        │
        ▼
[Phase 1] Figma — Page 1: User Flow & Screen Inventory (IA)
    Lock primary user flows and screen architecture before visual styling.
        │
        ▼
[Phase 2] Figma — Page 2: Design System & Variables (Light)
    Define Light-theme color variables, typography scale, spacing, radii, and core components.
        │
        ▼
[Phase 3] Figma — Page 3: Hi-Fi Mobile Screens (390×844)
    Build all V1 screens bound to Page 2 tokens & components; export PNG previews for documentation.
        │
        ▼
[Phase 4] Figma → Interactive HTML Prototype (`prototype/`)
    Translate Page 2 Variables 1:1 into CSS Custom Properties (:root) and Page 3 screens into
    a 100% client-side mobile-first web app (max-width 430px, 100dvh) with localStorage persistence.
        │
        ▼
[Phase 5] Deploy & Usability Testing V1 (~5 UNS Students)
    Deploy `prototype/` to Vercel (HTTPS + QR Code).
    Run T1–T4 mobile tests → collect UEQ V1 responses (Kumar & Chand) → V2 iteration & UAS Article.
```

---

## 2. Locked Product & Visual Specifications

### A. Concept, Identity & Visual Direction
- **Object:** Mobile Learning Application Prototype based on **SPADA UNS** academic workflows for UNS students, adopting clean mobile interaction patterns benchmarked from **Ruangguru** *(without promotional banners or ads)*.
- **Visual Direction (Clean Light UI):**
  - Retains **SPADA UNS signature blue as the primary accent**, avoiding full-blue screens or raw web-to-mobile shrinking.
  - Modern, clean, airy layout — light neutral canvas (`#F8FAFC` / `#FFFFFF`), high text contrast, clear card hierarchy, and minimum **44×44 px** touch targets.
- **Theme:** Light theme across all screens.

### B. Locked Dummy Dataset
- **Demo Account:** UNS Informatics Student (*Yahya Saputra*, Semester 5 — Academic Year 2026/2027).
- **Primary Enrolled Course:** **Interaksi Manusia & Komputer (IMK) — Kelas A** (`TIF305 · Kelas A`, status: *Diikuti*).
  - Supported by 2 additional realistic courses (*Rekayasa Perangkat Lunak — Kelas A* and *Pemrograman Web — Kelas A*) for natural Home & Activity density.
- **Catalog Comparison Courses (Testing K05 — similar course names & 3 access states):**
  1. `Interaksi Manusia & Komputer (IMK) — Kelas A` → Status: **Sudah diikuti** (*Buka Kelas*).
  2. `Interaksi Manusia & Komputer (IMK) — Kelas B` (`TIF305 · Kelas B`) → Status: **Akses dibatasi** (requires lecturer permission or enrollment key; displays reason and next steps).
  3. `Desain Sistem & Prototipe Mobile — Kelas A` (`TIF312 · Kelas A`) → Status: **Daftar dengan enrollment key** (*Gabung Kelas* opens the enrollment key form in the catalog).
  - **Enrollment rules:** Enrolled courses open directly. Unenrolled courses require a valid enrollment key before access is granted. Empty/invalid keys show clear error feedback and retry; Cancel returns to catalog unchanged; valid keys add the course to *Kelas Saya*, persist membership in state, and unlock course details.
- **Dummy Learning Materials (IMK — Kelas A):**
  - Organized by meeting/topic (Meetings 1–4, *collapsible accordion*) with explicit file-type badges (`PPT`, `PDF`, `Video`):
    - **Target T1 (PPT):** Meeting 3 — *"Prinsip Usability & Evaluasi Heuristik"* → `PPT · Slide Pertemuan 3 - Usability & Heuristik.pptx` (4–5 readable mobile slide previews + download action).
    - **Target T2 (Video):** Meeting 3 — *"Video Pembahasan: Studi Kasus Mobile Usability"* (`Video · 12:40`) with interactive mock player (play/pause, progress bar, duration).
  - **Explore Materials (Outside Enrolled Courses):**
    - Cross-course open campus learning materials (PPT, PDF, Video) with real-time search bar, type filter chips (`Semua`, `PPT`, `PDF`, `Video`), source course labels, and empty state + reset filter action.
- **Dummy Assignments & Statuses (Testing K02 & T3):**
  - At least 4 activity items with distinct states visible across **Beranda / Aktivitas / Detail Kelas IMK**:
    1. **Tugas 2 — Audit Usability Aplikasi Mobile** (IMK Kelas A) → Status: **Belum dikumpulkan**, urgent deadline (*Besok, 23:59 WIB*). **Target for Scenario T3.**
       - Rules: `.pdf` format, max 1 file, max `20 MB`.
       - Supports real file picker (`<input type="file">`) **AND** quick dummy file buttons for seamless mobile testing:
         - Valid file: `Audit_Usability_IMK_Kelompok9.pdf` (2.4 MB) → passes validation.
         - Error-trigger file (mandatory T3 error recovery): `Lampiran_Video_Mentah.mp4` (34 MB — invalid format & size) → shows clear error banner + **Pilih Berkas Lain / Ganti Berkas**.
       - Strict state progression: *Belum dikumpulkan* → *Error berkas* → *Berkas terpilih (Ganti & Kirim)* → *Mengunggah (progress bar 0–100%)* → *Terkirim / Submitted* (submission receipt card with status, filename, actual timestamp).
    2. **Tugas 1 — Laporan Wawancara Pengguna** (IMK Kelas A) → Status: **Sudah dikirim** (includes receipt card as visual contrast).
    3. **Tugas 3 — Pengumpulan Draft Artikel UAS** (IMK Kelas A) → Status: **Belum dikumpulkan**, deadline: **"Tenggat belum ditetapkan"** (explicit label per K02).
    4. **Kuis 1 — Evaluasi Usability & Prinsip Desain Mobile** (IMK Kelas A) → Status: **Tersedia** (**target for Scenario T4**).
- **Dummy Quiz Content (Target T4 — 5 Questions: Multiple Choice + Essay):**
  - **Quiz Metadata:** 5 questions, `15:00` countdown timer, free navigation across questions before submission.
  - **Question Composition:**
    - **Q1 (Multiple Choice — Concise):** Core *usability* / *visibility of system status* concept.
    - **Q2 (Multiple Choice — Long Case Study):** Full paragraph (~70–100 words) to test mobile reading comfort & scrolling.
    - **Q3 (Multiple Choice — Concise):** Mobile navigation principles / minimum touch target size.
    - **Q4 (Multiple Choice / True-False):** Distinguishing upload-in-progress vs confirmed-submission feedback.
    - **Q5 (Essay):** Short reflective prompt with spacious textarea, character/word counter, and automatic *Terjawab* state update in the question number drawer.

---

## 3. Information Architecture, Navigation & V1 Screen Inventory

### Primary Navigation
- **Top Header (Main Tabs):** Greeting/page title + **Account** avatar/button (confirms active SSO session; opens **Account / Settings**).
- **Bottom Navigation Bar (4 Tabs):**
  1. **Beranda** — Semester info, *Perlu Dikerjakan* summary (nearest deadlines + status), *Kelas Saya* shortcuts.
  2. **Kelas** — *Kelas Saya* list + **Cari Kelas (Katalog)** entry point.
  3. **Cari Materi** — Cross-course learning material discovery (search + PPT/PDF/Video filters + instant preview).
  4. **Aktivitas** — Unified Assignments & Quizzes list across courses with status filters (`Semua`, `Belum dikerjakan`, `Sudah dikirim`, `Selesai`).
- **Focus Screens (No Bottom Nav):** PPT/PDF Preview, Video Player, Assignment Detail & Upload, entire Quiz flow, and Account/Settings → use a **Contextual Header** with a clear **Back** button.

### Complete V1 Screen List (Figma Page 3 & HTML Prototype Views)

| ID | Screen Name | Navigation Mode | Key Elements / States |
|---|---|---|---|
| `S01` | **Masuk SSO UNS** | Standalone | Brand identity, standard *Masuk dengan SSO UNS* button. |
| `S02` | **Beranda** | Bottom Nav (`Beranda`) | SSO header + semester, *Perlu Dikerjakan* section (deadlines + status + *Tenggat belum ditetapkan*), *Kelas Saya* shortcuts. |
| `S03` | **Kelas Saya** | Bottom Nav (`Kelas`) | Enrolled course cards (`IMK — Kelas A`, etc.) + **Cari Kelas** shortcut. |
| `S04` | **Cari Kelas (Katalog)** | Contextual Header | Search bar, filter chips, three access states (*Sudah diikuti*, *Daftar dengan enrollment key*, *Akses dibatasi*), empty state, enrollment key form, error & success states. |
| `S05` | **Cari Materi (Luar Kelas)** | Bottom Nav (`Cari Materi`) | Real-time search bar, filter chips (`Semua`, `PPT`, `PDF`, `Video`), cross-course material cards + source course badge, empty state + reset filter. |
| `S06` | **Aktivitas** | Bottom Nav (`Aktivitas`) | Cross-course Assignments & Quizzes summary, status filters (`Semua`, `Perlu dikerjakan`, `Sudah dikirim`, `Selesai`), clear deadline/status badges. |
| `S07` | **Detail Kelas (IMK — Kelas A)** | Contextual Header | Course identity + progress header, tabs (`Materi`, `Tugas`, `Kuis`), collapsible meeting accordions to prevent long scrolling. |
| `S08` | **Pratinjau Materi PPT/PDF** | Contextual Header | Meaningful title, `PPT` badge, mobile-readable slide viewer, Previous/Next slide controls, Download button (simulated toast). |
| `S09` | **Pemutar Video** | Contextual Header | Title & meeting context, interactive mock video player (Play/Pause, seek bar, time), brief summary. |
| `S10` | **Detail Tugas & Pengumpulan** | Contextual Header | Instructions, deadline, file rules upfront, **Pilih Berkas** button, error + replace file state, selected file state, upload progress bar, & **Submitted Receipt Card** (status, filename, timestamp). |
| `S11` | **Petunjuk Kuis** | Contextual Header | Title, question count (`5 Soal: Pilgan & Essay`), duration (`15 menit`), navigation rules, **Mulai Kuis** button. |
| `S12` | **Layar Soal Kuis (+ Drawer Nomor Soal)** | Contextual Header | Live timer, `Soal X/5` indicator, **Nomor Soal** drawer (1–5 grid with answered/unanswered/active states), MCQ view (including long case study, ≥44px touch targets), **Essay** textarea view, Prev/Next buttons. |
| `S13` | **Tinjauan Jawaban Kuis** | Contextual Header | Question 1–5 status list (*Terjawab* / *Belum dijawab*), tap to edit, **Kirim Semua Jawaban** button + confirmation dialog. |
| `S14` | **Konfirmasi Kuis Terkirim** | Contextual Header | **Selesai / Terkirim** status, submission timestamp, answered count, return to Course Detail / Activity. |
| `S15` | **Account / Settings** | Contextual Header | SSO profile (name, NIM, department, active session status), basic preferences, *Keluar (Logout)* action. |

---

## 4. Research → Design → Usability Test Scenario Mapping (`T1–T4`)

| User Need | Literature Basis (`Huang & Benyoucef`) | Mobile Test Scenario (~5 UNS Students) | Evaluation Items (`Kumar & Chand`, 1–4 scale) |
|---|---|---|---|
| **K01 · Material Access** & **K05 · Course Recognition** | Short navigation paths (`UA18F1`), meaningful titles (`UA21F9`), educational menu hierarchy (`UA20F4`, `UA20F9`) | **T1 (PPT):** Locate IMK Kelas A & open the requested topic PPT.<br>**T2 (Video):** Locate & play the IMK discussion video. | `CO3`, `CO5` (+ exploring *Cari Materi*) |
| **K02 · Tasks & Deadlines** & **K03 · File Upload** | Scannable status info (`UA11F1`), clear system feedback (`UA7F2`) | **T3 (Assignment):** Open IMK assignment, handle 1 invalid-file error, switch to valid file, submit, & verify receipt. | `NV1`, `FB1`, `FB3`, `FB4`, `FB6` |
| **K04 · Mobile Quiz** | Small-screen readability & navigation | **T4 (Quiz):** Complete 5 questions (MCQ + long question + essay), jump via Question Number drawer, review, submit, & confirm completion. | `CO1`, `CL1`, `CL3`, `NV2`, `FB4` |

---

## 5. Design System & Prototype Architecture

### A. Figma File Structure (3 Pages)
1. **Page 1 — `01 · User Flow & IA`:** End-to-end flows (`S01` → `S02–S06` → `S07–S15`) separating `T1`–`T4`, *Cari Kelas*, *Cari Materi*, and *Account/Settings*.
2. **Page 2 — `02 · Design System` (Light Variables & Components):**
   - **Color Variables (`Light`):** `bg/canvas` `#F8FAFC`, `bg/surface` `#FFFFFF`, `bg/surface-subtle` `#F1F5F9`, `text/primary` `#0F172A`, `text/secondary` `#475569`, `border/subtle` `#E2E8F0`, `brand/spada-blue` `#0052CC`, `brand/spada-soft` `#EFF6FF`, `status/success` `#16A34A` (`#DCFCE7`), `status/warning` `#D97706` (`#FEF3C7`), `status/danger` `#DC2626` (`#FEE2E2`).
   - **Typography:** Plus Jakarta Sans / Inter — `H1 22px`, `H2 18px`, `H3 16px`, `Body 14–15px` (line-height 1.5), `Caption/Badge 12px`.
   - **Spacing & Radius:** 4/8px grid, card radius `14–16px`, button/input radius `12px`, pill `999px`, minimum touch target `44×44px`.
   - **Component Library:** Top Header, Contextual Header, 4-Tab Bottom Nav, Course Card, Status Pill, Collapsible Meeting Accordion, Material Row (PPT/PDF/Video), Upload Picker + Error/Progress/Receipt Cards, Quiz Option Card, Question Number Bottom Sheet, Essay Input Card, Empty State.
3. **Page 3 — `03 · Hi-Fi Screens (390×844)`:** Screens `S01`–`S15` + supporting interactive states (25 frames total) organized by flow rows, ready for PNG export.

### B. Interactive HTML Prototype (`prototype/`)
- `index.html` — mobile-first shell (`max-width: 430px; min-height: 100dvh`).
- `styles/tokens.css` — 1:1 CSS Variables (`:root`) mapped from Figma Page 2 Design System.
- `styles/app.css` — responsive component & layout styles.
- `js/data.js` — locked dummy dataset (courses, external materials, T3 assignment, 5-question quiz).
- `js/state.js` — client-side `localStorage` persistence + reset helper.
- `js/app.js` — client-side router & interactive T1–T4 flows + unobtrusive floating *"Panduan Uji T1–T4"* testing helper.

---

## 6. Visual Benchmark Inspection Reference (Phase 0)

- **Ruangguru Mobile UI Benchmarks (`docs/benchmarks/SS Ruang Guru Mobile/`):**
  - `RG-01`–`RG-07`: Clean profile menus, scannable session/status cards, bottom navigation, search with content-type filter chips, empty states, and progress summaries *(excluding promotional banners like `RG-08`)*.
- **SPADA UNS Mobile As-Is Audit (`docs/benchmarks/SS Spada/`):**
  - `SP-11`–`SP-31`: Signature SPADA blue accent, course header/category patterns, retained `Submitted for grading` receipt clarity, and key pain points resolved in V1 (simplified file upload, cleaner quiz navigation, and separated *Kelas Saya* vs *Cari Kelas* catalog).
