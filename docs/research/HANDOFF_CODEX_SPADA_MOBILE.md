# Handoff Master — Proyek UAS IMK: SPADA UNS Mobile

**Kelompok 9 · IMK UNS · Status: Locked Spec (Final Alignment Tim — 24 November 2026)**  
**Tenggat UAS:** 7 Desember 2026 (Week 16)  
**Luaran Akhir:**
1. **Aset Visual & Design System** (export PNG/PDF rapi dari FigCraft untuk laporan & slide presentasi)
2. **Live Interactive HTML Prototype V1** (mobile-first web app, di-host ke Netlify / GitHub Pages) + **Revisi V2** pasca-pengujian
3. **Evaluasi Usability Testing V1** (~5 mahasiswa UNS) + **Artikel & Laporan UAS**

---

## 0. Aturan Sumber Kebenaran (Source of Truth) di Folder Ini

Saat bekerja di folder workspace ini, gunakan prioritas dokumen berikut:

- **ACUAN UTAMA (IKUTI INI 100%):** `HANDOFF_CODEX_SPADA_MOBILE.md` *(dokumen ini — sudah menggabungkan seluruh keputusan final dan revisi tim)*.
- **CHECKPOINT EKSEKUSI:** `HANDOVER_ANTIGRAVITY_SPADA_MOBILE.md` memuat status FigCraft, review batch pertama Fase 3, dan langkah melanjutkan di Antigravity.
- **REFERENSI RISET & BUKTI AKADEMIK:**
  - `Handoff Riset UX SPADA UNS Mobile.md` (kutipan wawancara Aqil/Ade/Yahya, tabel audit 21 SS SPADA `A01–A11`, benchmark 10 SS Ruangguru `RG-01–RG-10`, dan pemetaan 2 paper).
  - `SS Spada/` dan `SS Ruang Guru Mobile/` (31 screenshot bukti as-is & benchmark).
  - `A Systematic Literature Review of Mobile Application Usability.pdf` (Huang & Benyoucef — prinsip desain mobile).
  - `itse-07-2023-0122.pdf` (Kumar & Chand — instrumen UEQ Mobile Learning skala 1–4 untuk evaluasi **setelah** prototipe dicoba).
- **ARSIP / SUDAH USANG (JANGAN DIIKUTI LAGI):** empat berkas berikut berada di `Arsip/Dokumen lama/`.
  - `Handoff Google Form - Survei Kebutuhan Mobile Learning.md` & `create_google_form.gs` *(alur lama survei pra-desain SPADA — batal disebar; kuesioner dipindah untuk evaluasi Prototype V1)*.
  - `Catatan Riset UX SPADA UNS Mobile.md` & `Recap End-to-End Proyek IMK - Review Aqil.md` *(versi draft sebelum finalisasi)*.

---

## 1. Strategi & Pipeline Eksekusi (FigCraft → HTML Prototype)

Kita **tidak** memakai Figma Make dan **tidak** membuat garis interaksi (*noodle prototype*) di FigCraft. Interaksi nyata dibangun di HTML/CSS/JS agar search bar, filter, tab, upload simulasi, kuis pilgan + essay, timer, dan state perubahan benar-benar hidup di HP responden.

```
[Fase 0] Inspeksi Visual Screenshot As-Is & Benchmark (WAJIB DI AWAL)
    Buka & tinjau tangkapan layar di `SS Spada/` dan `SS Ruang Guru Mobile/` (RG-01–RG-10 Ruangguru
    & SP-11–SP-31 SPADA UNS) agar arah warna aksen biru SPADA, pola baik yang dipertahankan,
    dan pola interaksi bersih ala Ruangguru benar-benar akurat secara visual.
        │
        ▼
[Fase 1] FigCraft — Page 1: User Flow & Daftar Layar (IA)
    Kunci alur utama & daftar screen agar struktur navigasi tidak berubah saat coding.
        │
        ▼
[Fase 2] FigCraft — Page 2: Design System & Variables (Light)
    Kunci token warna (Light), tipografi, spacing, radius, dan komponen inti.
    (Opsional: gunakan Stitch hanya untuk inspirasi 1–2 hero screen di awal, lalu kunci di FigCraft.)
        │
        ▼
[Fase 3] FigCraft — Page 3: Hi-Fi Mobile Screens (390×844)
    Bangun seluruh screen utama V1 memakai komponen & token Page 2.
    SKIP fitur Prototype/noodle di FigCraft. Siap export PNG/PDF untuk laporan & slide.
        │
        ▼
[Fase 4] FigCraft → HTML Prototype (via MCP figcraft / figcraft-app)
    Inspeksi desain (inspect_document + screenshot) → terjemahkan 1:1 ke HTML/CSS/JS.
    Token Variables FigCraft → CSS Variables (:root).
    100% client-side + localStorage state persistence + frame mobile-first (max-width 430px, 100dvh).
        │
        ▼
[Fase 5] Deploy & Usability Testing V1 (~5 Mahasiswa UNS)
    Deploy folder prototype/ ke Netlify / GitHub Pages (HTTPS + QR Code).
    Responden uji T1–T4 di HP → isi Google Form Evaluasi Prototype V1 (Kumar & Chand).
    Hasil tes → Revisi V2 → Artikel & Laporan UAS (7 Desember 2026).
```

---

## 2. Keputusan Produk & Visual yang Sudah Dikunci (Locked Specs)

### A. Konsep, Identitas, & Arah Visual
- **Objek:** Prototipe Aplikasi Pembelajaran Mobile berbasis alur **SPADA UNS** untuk mahasiswa UNS, mengambil pola interaksi mobile yang bersih dari **Ruangguru** *(tanpa elemen promosi/banner iklan)*.
- **Arah Visual (Clean Light UI):**
  - Membawa **nuansa biru khas SPADA UNS sebagai warna aksen utama**, tetapi **TIDAK full biru** dan **BUKAN adaptasi mentah tampilan web SPADA**.
  - Desain modern, bersih, dan lega — dominasi latar putih/netral terang (`#F8FAFC` / `#FFFFFF`), kontras teks tinggi, hierarki kartu rapi, dan ukuran target sentuh minimal **44×44 px**.
- **Tema aplikasi:** Light pada seluruh layar.

### B. Data Dummy Terkunci
- **Akun Dummy:** Mahasiswa Informatika UNS (mis. *Raka Pratama*, NIM fiktif `M0522048`, Semester 5 — Tahun Akademik 2026/2027).
- **Mata Kuliah Utama (Diikuti):** **Interaksi Manusia & Komputer (IMK) — Kelas A** (`TIF305 · Kelas A`, status: *Diikuti*).
  - Tambahkan 2 mata kuliah pendukung realistis agar Beranda & Aktivitas terasa natural (mis. *Rekayasa Perangkat Lunak — Kelas A* dan *Pemrograman Web — Kelas A*).
- **Mata Kuliah Pembanding di Katalog (Uji K05 — kelas bernama mirip & 3 status akses):**
  1. `Interaksi Manusia & Komputer (IMK) — Kelas A` → Status: **Sudah diikuti** (*Buka Kelas*).
  2. `Interaksi Manusia & Komputer (IMK) — Kelas B` (`TIF305 · Kelas B`) → Status: **Akses dibatasi** (minta izin atau enrollment key dari dosen; tampilkan alasan dan langkah untuk mendapatkannya).
  3. `Desain Sistem & Prototipe Mobile — Kelas A` (`TIF312 · Kelas A`) → Status: **Daftar dengan enrollment key** (tombol *Gabung Kelas* membuka form enrollment key di katalog).
  - **Aturan akses kelas:** Kelas yang sudah diikuti langsung menawarkan *Buka Kelas*. Untuk setiap kelas yang belum diikuti, mahasiswa harus memasukkan enrollment key yang valid untuk kelas tersebut sebelum dibolehkan masuk. Key kosong atau salah menampilkan pesan dan opsi coba lagi. Batal kembali ke katalog tanpa mengubah status. Key yang valid menambahkan kelas ke *Kelas Saya*, menyimpan keanggotaan di prototipe, dan membuka akses ke detail kelas. Gunakan key dummy untuk pengujian.
- **Konten Dummy Materi (IMK — Kelas A):**
  - Disusun per pertemuan/topik (Pertemuan 1 s.d. 4, *collapsible accordion*) dengan badge jenis file eksplisit (`PPT`, `PDF`, `Video`):
    - **Target T1 (PPT):** mis. Pertemuan 3 — *"Prinsip Usability & Evaluasi Heuristik"* → file `PPT · Slide Pertemuan 3 - Usability & Heuristik.pptx` (pratinjau 4–5 slide dummy terbaca di HP + tombol unduh).
    - **Target T2 (Video):** mis. Pertemuan 3 — *"Video Pembahasan: Studi Kasus Mobile Usability"* (`Video · 12:40`) dengan player interaktif mock (play/pause, progress bar, durasi).
  - **Konten Dummy Cari Materi (di Luar Kelas):**
    - Katalog materi lintas mata kuliah / sumber belajar terbuka kampus (PPT, PDF, Video) dari matkul di luar kelas yang diikuti mahasiswa, lengkap dengan *search bar* aktif, chip filter jenis materi (`Semua`, `PPT`, `PDF`, `Video`), nama matkul sumber, dan *empty state* + tombol reset filter jika tidak ditemukan.
- **Konten Dummy Tugas & Status (Uji K02 & T3):**
  - Minimal 4 item aktivitas dengan state berbeda terlihat di **Beranda / Aktivitas / Detail Kelas IMK**:
    1. **Tugas 2 — Audit Usability Aplikasi Mobile** (IMK Kelas A) → Status: **Belum dikumpulkan**, tenggat dekat (mis. *Besok, 23:59 WIB*). **Ini target skenario T3.**
       - Aturan: Format `.pdf`, maks. 1 berkas, maks. `20 MB`.
       - Menyediakan pemilih berkas nyata (`<input type="file">`) **DAN** tombol pilihan berkas dummy cepat (agar responden di HP tidak repot mencari file asli):
         - Berkas valid: `Audit_Usability_IMK_Kelompok9.pdf` (2.4 MB) → lolos validasi.
         - Berkas pemicu error (simulasi 1 kasus error wajib T3): `Lampiran_Video_Mentah.mp4` (34 MB — format & ukuran tidak sesuai) → muncul banner error jelas + tombol **Pilih Berkas Lain / Ganti Berkas**.
       - Urutan state ketat: *Belum dikumpulkan* → *Error berkas (bila pilih salah)* → *Berkas terpilih (belum dikirim, ada tombol Ganti & Kirim)* → *Mengunggah (progress bar 0–100%)* → *Terkirim / Submitted* (kartu bukti pengumpulan berisi status, nama file, timestamp aktual).
    2. **Tugas 1 — Laporan Wawancara Pengguna** (IMK Kelas A) → Status: **Sudah dikirim** (sudah punya kartu bukti pengumpulan sebagai pembanding status).
    3. **Tugas 3 — Pengumpulan Draft Artikel UAS** (IMK Kelas A) → Status: **Belum dikumpulkan**, tenggat: **"Tenggat belum ditetapkan"** (label eksplisit sesuai K02).
    4. **Kuis 1 — Evaluasi Usability & Prinsip Desain Mobile** (IMK Kelas A) → Status: **Tersedia** (**target skenario T4**).
- **Konten Dummy Kuis (Target T4 — 5 Soal: Pilihan Ganda + Essay):**
  - **Metadata Kuis:** 5 soal, durasi `15:00` (timer berjalan), bebas berpindah antarsoal sebelum kirim.
  - **Komposisi 5 Soal:**
    - **Soal 1 (Pilihan Ganda — Ringkas):** Konsep dasar *usability* / *visibility of system status*.
    - **Soal 2 (Pilihan Ganda — Teks Panjang / Studi Kasus):** Skenario kasus 1 paragraf penuh (±70–100 kata) untuk menguji kenyamanan ruang baca & scroll di layar HP.
    - **Soal 3 (Pilihan Ganda — Ringkas):** Prinsip navigasi mobile / ukuran area sentuh.
    - **Soal 4 (Pilihan Ganda / Benar-Salah):** Perbedaan umpan balik unggahan sedang diproses vs sudah diterima.
    - **Soal 5 (Essay):** Pertanyaan reflektif singkat (dengan *textarea* lega, penghitung karakter/kata opsional, status otomatis berubah menjadi *Terjawab* di drawer nomor soal setelah diisi).

---

## 3. Arsitektur Informasi, Navigasi, & Daftar Layar V1

### Navigasi Utama
- **Top Header (Halaman Utama):** Sapaan/judul halaman + avatar/tombol **Akun** (memperjelas status sudah login SSO; tap untuk buka **Account / Settings**).
- **Bottom Navigation Bar (4 Tab — direkomendasikan agar fitur baru Aqil langsung terlihat & terstruktur):**
  1. **Beranda** — Info semester, ringkasan *Perlu Dikerjakan* (tenggat terdekat + status), pintasan *Kelas Saya*.
  2. **Kelas** — Daftar *Kelas Saya* + tombol/tab **Cari Kelas (Katalog)**.
  3. **Cari Materi** — Fitur eksplorasi & pencarian **materi pembelajaran di luar kelas yang diikuti** (search + filter PPT/PDF/Video + pratinjau langsung).
  4. **Aktivitas** — Daftar terpusat semua Tugas & Kuis lintas mata kuliah dengan filter status (`Semua`, `Belum dikerjakan`, `Sudah dikirim`, `Selesai`).
- **Layar Fokus (Tanpa Bottom Nav):** Pratinjau PPT/PDF, Pemutar Video, Detail & Unggah Tugas, seluruh alur Kuis, dan Account/Settings → menggunakan **Contextual Header** dengan tombol **Kembali** yang jelas.

### Daftar Lengkap Layar V1 (Untuk FigCraft Page 3 & View HTML)

| ID | Nama Layar | Mode Navigasi | Elemen / State Kunci |
|---|---|---|---|
| `S01` | **Masuk SSO UNS** | Standalone | Logo/identitas, tombol *Masuk dengan SSO UNS* standar *(tanpa simulasi tautan WA)*. |
| `S02` | **Beranda** | Bottom Nav (`Beranda`) | Header akun SSO + semester, section *Perlu Dikerjakan* (tenggat + status + label *Tenggat belum ditetapkan*), pintasan *Kelas Saya*. |
| `S03` | **Kelas Saya** | Bottom Nav (`Kelas`) | Kartu kelas (`IMK — Kelas A`, dll.) + tombol pintasan **Cari Kelas**. |
| `S04` | **Cari Kelas (Katalog)** | Contextual Header | Search bar, chip filter, tiga state kelas (*Sudah diikuti*, *Daftar dengan enrollment key*, *Akses dibatasi*), hasil kosong, form enrollment key untuk kelas yang belum diikuti, serta state error dan berhasil. |
| `S05` | **Cari Materi (Luar Kelas)** | Bottom Nav (`Cari Materi`) | Search bar real-time, chip filter (`Semua`, `PPT`, `PDF`, `Video`), kartu materi lintas kelas + nama kelas asal, *empty state* + reset filter. |
| `S06` | **Aktivitas** | Bottom Nav (`Aktivitas`) | Rekap Tugas & Kuis lintas kelas, filter status (`Semua`, `Perlu dikerjakan`, `Sudah dikirim`, `Selesai`), badge tenggat/status jelas. |
| `S07` | **Detail Kelas (IMK — Kelas A)** | Contextual Header | Header identitas kelas + progres, tab/filter (`Materi`, `Tugas`, `Kuis`), daftar pertemuan *collapsible* (expand/collapse) agar tidak scroll panjang. |
| `S08` | **Pratinjau Materi PPT/PDF** | Contextual Header | Judul bermakna, badge `PPT`, tampilan slide nyaman baca di HP, navigasi slide *Sebelumnya/Berikutnya*, tombol *Unduh* (simulasi toast). |
| `S09` | **Pemutar Video** | Contextual Header | Judul & konteks pertemuan, area video player interaktif (Play/Pause, seek bar, waktu), deskripsi ringkas. |
| `S10` | **Detail Tugas & Pengumpulan** | Contextual Header | Instruksi, tenggat, aturan file di atas, tombol **Pilih Berkas** (tanpa metadata Author/Licence), state error + ganti file, state file terpilih, progress bar unggah, & **Kartu Bukti Pengumpulan Terkirim** (status, nama file, timestamp). |
| `S11` | **Petunjuk Kuis** | Contextual Header | Judul, jumlah soal (`5 Soal: Pilgan & Essay`), durasi (`15 menit`), aturan pindah soal, tombol **Mulai Kuis**. |
| `S12` | **Layar Soal Kuis (+ Drawer Nomor Soal)** | Contextual Header | Timer aktif, indikator `Soal X/5`, tombol **Nomor Soal** (membuka bottom-sheet/drawer grid 1–5 dengan status terjawab/belum/aktif), tampilan soal pilgan (termasuk 1 soal panjang, touch target ≥44px) & tampilan **soal Essay** (textarea lega), tombol *Sebelumnya/Selanjutnya*. |
| `S13` | **Tinjauan Jawaban Kuis** | Contextual Header | Daftar status Soal 1–5 (*Terjawab* / *Belum dijawab*), tap untuk edit soal, tombol **Kirim Semua Jawaban** + dialog konfirmasi. |
| `S14` | **Konfirmasi Kuis Terkirim** | Contextual Header | Status **Selesai / Terkirim**, timestamp pengiriman, jumlah soal terjawab, tombol kembali ke Detail Kelas / Aktivitas. |
| `S15` | **Account / Settings** | Contextual Header | Profil akun SSO (nama, NIM, prodi, status sesi aktif), pengaturan dasar (mis. ukuran teks opsional), tombol *Keluar (Logout)*. |

---

## 4. Pemetaan Kebutuhan Riset → Desain → Skenario Uji (`T1–T4`)

| Kebutuhan | Dasar Literatur (`Huang & Benyoucef`) | Skenario Uji HP (~5 Mahasiswa UNS) | Butir Evaluasi (`Kumar & Chand`, skala 1–4) |
|---|---|---|---|
| **K01 · Akses Materi** & **K05 · Kenali Kelas** | Langkah pendek (`UA18F1`), judul bermakna (`UA21F9`), hierarki menu pendidikan (`UA20F4`, `UA20F9`) | **T1 (PPT):** Temukan kelas IMK Kelas A & buka PPT topik yang diminta.<br>**T2 (Video):** Temukan & putar video pembahasan IMK. | `CO3`, `CO5` (+ eksplorasi fitur *Cari Materi* luar kelas) |
| **K02 · Tugas & Tenggat** & **K03 · Unggah Berkas** | Info cepat dipindai (`UA11F1`), umpan balik jelas (`UA7F2`) | **T3 (Tugas):** Buka tugas IMK, hadapi 1 simulasi error berkas, ganti file valid, kirim, & tunjukkan bukti terkirim. | `NV1`, `FB1`, `FB3`, `FB4`, `FB6` |
| **K04 · Kuis di HP** | Keterbacaan & navigasi layar kecil mobile | **T4 (Kuis):** Kerjakan 5 soal (pilgan + 1 soal panjang + essay), lompat lewat drawer Nomor Soal, tinjau, kirim, & tunjukkan status selesai. | `CO1`, `CL1`, `CL3`, `NV2`, `FB4` |

---

## 5. Panduan Teknis untuk Codex

### A. Struktur File di FigCraft (3 Page)
1. **Page 1 — `01 · User Flow & IA`:**
   - Diagram alur utama dari `S01` → `S02–S06` → `S07–S15` (memisahkan jelas alur `T1`, `T2`, `T3`, `T4`, *Cari Kelas*, *Cari Materi*, dan *Account/Settings*).
   - Daftar arsitektur 15 layar beserta ringkasan state.
2. **Page 2 — `02 · Design System`:**
   - **Color Variables (Mode: `Light`):**
     - `bg/canvas`: Light `#F8FAFC`
     - `bg/surface`: Light `#FFFFFF`
     - `bg/surface-subtle`: Light `#F1F5F9`
     - `text/primary`: Light `#0F172A`
     - `text/secondary`: Light `#475569`
     - `border/subtle`: Light `#E2E8F0`
     - `brand/spada-blue` *(aksen utama)*: Light `#0052CC` (atau `#0B63CE`)
     - `brand/spada-soft`: Light `#EFF6FF`
     - `status/success`: `#16A34A` (soft `#DCFCE7`)
     - `status/warning`: `#D97706` (soft `#FEF3C7`)
     - `status/danger`: `#DC2626` (soft `#FEE2E2`)
   - **Typography:** Inter / Plus Jakarta Sans (clean sans-serif mobile), skala `H1 22px`, `H2 18px`, `H3 16px`, `Body 14–15px` (line-height 1.5 untuk kenyamanan baca soal panjang), `Caption/Badge 12px`.
   - **Spacing & Radius:** grid 4/8px, card radius `14–16px`, button/input radius `12px`, chip/badge pill `999px`, minimum touch target `44×44px`.
   - **Component Library:** Top Header, Contextual Header, Bottom Nav 4-Tab, Course Card, Status Pill, Collapsible Meeting Accordion, Material Row (PPT/PDF/Video), Upload Dropzone/Picker + Error/Progress/Receipt Card, Quiz Option Card, Quiz Number Bottom Sheet, Essay Input Card, Empty State.
3. **Page 3 — `03 · Hi-Fi Screens (390×844)`:**
   - Susun layar `S01`–`S15` dalam baris per alur (`Auth & Core Tabs`, `Kelas & Materi`, `Tugas T3 States`, `Kuis T4 States`, `Account`).
   - Pastikan seluruh warna & komponen terikat ke Design System Page 2 (siap export PNG/PDF untuk laporan UAS).
   - **Jangan** membuat *prototype links/noodles* di FigCraft.

### B. Build HTML Prototype (`prototype/`) dari FigCraft
- Gunakan MCP `figcraft` / `figcraft-app` (`inspect_document` + `screenshot`) agar implementasi HTML/CSS/JS **1:1** dengan Page 2 & Page 3 FigCraft.
- Struktur folder yang rapi di `prototype/`:
  - `index.html`
  - `styles/tokens.css` *(CSS Variables `:root` 1:1 dari Variables FigCraft)*
  - `styles/app.css` *(mobile-first `max-width: 430px; min-height: 100dvh`, desktop showcase frame opsional)*
  - `js/data.js` *(seluruh data dummy IMK Kelas A/B, materi luar kelas, tugas T3, 5 soal kuis pilgan + essay)*
  - `js/state.js` *(manajemen `localStorage` + reset state)*
  - `js/app.js` *(router client-side + interaksi nyata: search, filter, accordion, enrol kelas dengan validasi enrollment key, upload + error + progress + receipt, kuis timer + drawer nomor soal + essay + review + submit)*
- Tambahkan **floating helper kecil** (*"Panduan Uji T1–T4"*) yang tidak menghalangi UI utama, berisi checklist tugas uji, tombol **Reset Prototipe**, dan placeholder link **Isi Kuesioner Evaluasi V1 (Google Form)**.
- Siap langsung di-deploy statis ke **Netlify Drop / GitHub Pages** (tanpa build step wajib, atau static output bersih).

---

## 6. Panduan Inspeksi Screenshot Awal (Fase 0)

Sebelum membuat User Flow & Design System di FigCraft, **wajib inspeksi visual tangkapan layar** di folder `SS Spada/` dan `SS Ruang Guru Mobile/` (indeks lengkap 31 berkas juga ada di bagian 11 `Handoff Riset UX SPADA UNS Mobile.md`):

- **Benchmark Pola UI Mobile — Ruangguru (`RG-01` s.d. `RG-10`):**
  - `WhatsApp Image 2026-11-23 at 00.43.29.jpeg` (`RG-01` · Profil & menu)
  - `WhatsApp Image 2026-11-23 at 00.43.30.jpeg` (`RG-02` · Kartu sesi & status cepat dipindai)
  - `WhatsApp Image 2026-11-23 at 00.43.31.jpeg` & `00.43.31 (1).jpeg` (`RG-03`, `RG-04` · Home, pintasan belajar, bottom nav)
  - `WhatsApp Image 2026-11-23 at 00.43.32.jpeg` & `00.43.32 (1).jpeg` (`RG-05`, `RG-06` · Pencarian, chip filter jenis konten, & empty state)
  - `WhatsApp Image 2026-11-23 at 00.43.32 (2).jpeg` (`RG-07` · Ringkasan progres & kategori pelajaran)
  - *(Ambil struktur navigasi bawah, keterbacaan kartu, filter chip, & empty state — **buang** banner promosi/pop-up seperti `RG-08`.)*
- **Konteks As-Is & Warna Aksen — SPADA UNS Mobile (`SP-11` s.d. `SP-31`):**
  - `WhatsApp Image 2026-11-23 at 00.43.38 (3).jpeg` (`SP-31` · Beranda SPADA & rujukan nuansa warna aksen biru SPADA)
  - `WhatsApp Image 2026-11-23 at 00.43.36 (3).jpeg` (`SP-23` · Header kelas, progres, & kategori Resources/Assignments/Quizzes)
  - `WhatsApp Image 2026-11-23 at 00.43.36 (1).jpeg` & `00.43.36 (2).jpeg` (`SP-21`, `SP-22` · Daftar kuis & daftar tugas dengan status)
  - `WhatsApp Image 2026-11-23 at 00.43.35.jpeg` s.d. `00.43.36.jpeg` (`SP-16`–`SP-20` · Bukti pengumpulan `Submitted for grading` yang dipertahankan vs form unggah berbelit yang disederhanakan)
  - `WhatsApp Image 2026-11-23 at 00.43.33 (3).jpeg` & `00.43.33 (4).jpeg` (`SP-11`, `SP-12` · Tampilan soal kuis & `Next page`)
  - `WhatsApp Image 2026-11-23 at 00.43.37 (2).jpeg` s.d. `00.43.38 (2).jpeg` (`SP-26`–`SP-30` · Masalah katalog & enrolment yang diperbaiki lewat `Kelas Saya` + `Cari Kelas`)

---

## 7. Urutan Kerja yang Diminta dari Codex

Jalankan secara bertahap dan minta konfirmasi singkat antar-fase besar:
1. **Fase 0 (Wajib di awal):** Inspeksi visual tangkapan layar utama di `SS Spada/` dan `SS Ruang Guru Mobile/` (`RG-01–RG-07` untuk contoh pola UI mobile bagus & `SP-11–SP-31` untuk rujukan aksen biru SPADA + bagian yang dipertahankan/diperbaiki), lalu rangkum singkat *visual takeaways*-nya sebelum menggambar.
2. **Fase 1:** Buat **Page 1 (`01 · User Flow & IA`)** di FigCraft.
3. **Fase 2:** Buat **Page 2 (`02 · Design System` Light Variables + Components)** di FigCraft.
4. **Fase 3:** Buat **Page 3 (`03 · Hi-Fi Screens` `S01–S15`)** di FigCraft dan cek visual via screenshot.
5. **Fase 4:** Baca balik desain dari FigCraft via MCP dan bangun **HTML/CSS/JS Mobile-First Prototype** di folder `prototype/`, lalu uji seluruh alur `T1–T4` + `Cari Materi`.
6. **Fase 5 (opsional setelah prototipe final):** Buat skrip/spesifikasi **Google Form Evaluasi Prototype V1** (adaptasi Kumar & Chand 1–4) untuk 5 responden mahasiswa UNS.
