# Article Outline — Perancangan & Evaluasi Usability Prototipe Aplikasi Pembelajaran Mobile SPADA UNS (Kelompok 9 IMK)

> Draft kerangka terstruktur untuk kolaborasi artikel UAS IMK UNS. Setiap seksi dapat dikerjakan paralel oleh anggota Kelompok 9 di `docs/article/sections/`.

---

## Judul (Draft)
*Perancangan Ulang Antarmuka Mobile dan Evaluasi Usability Prototipe Interaktif SPADA UNS Berbasis Prinsip Mobile Learning*

---

## 1. Abstrak (`sections/01-introduction.md`)
- Ringkas 150–250 kata: latar belakang kendala akses mobile SPADA UNS, metode (wawancara, audit as-is 21 layar, benchmark 24 layar Ruangguru, prototyping HTML interaktif V1, evaluasi UEQ Kumar & Chand 33 item pada ~5 mahasiswa UNS), temuan utama, dan dampak revisi V2.
- Kata kunci: *Mobile Learning*, *SPADA UNS*, *User-Centered Design*, *Design System*, *Usability Evaluation*, *UEQ*.

## 2. Pendahuluan & Audit As-Is (`sections/01-introduction.md`)
- Konteks penggunaan SPADA UNS pada perangkat mobile oleh mahasiswa UNS.
- Ringkasan temuan wawancara & audit 21 tangkapan layar SPADA UNS (`docs/benchmarks/SS Spada/`):
  - Kedalaman navigasi materi (`K01`), visibilitas tugas & tenggat (`K02`), friksi unggah berkas (`K03`), keterbacaan & navigasi kuis di layar kecil (`K04`), serta kerancuan katalog & enrollment kelas (`K05`).
- Rumusan masalah dan tujuan perancangan Prototipe V1 → V2.

## 3. Metode Penelitian & Perancangan (`sections/02-methodology.md`)
- **Landasan Literatur:**
  - *Huang & Benyoucef* — prinsip mobile application usability (`UA7F2`, `UA11F1`, `UA18F1`, `UA20F4`, `UA20F9`, `UA21F9`).
  - *Kumar & Chand (2024)* — adaptasi instrumen 33 item UEQ Mobile Learning dengan skala keparahan *Nielsen (1995)* 1–4.
- **Alur Perancangan End-to-End:**
  1. Inspeksi visual as-is SPADA UNS & benchmark pola interaksi mobile Ruangguru (`docs/benchmarks/SS Ruang Guru Mobile/`).
  2. Penyusunan Arsitektur Informasi & User Flow (`S01–S15`).
  3. Perancangan Light-Theme Design System & 25 layar Hi-Fi (`390×844`) di Figma.
  4. Implementasi prototipe interaktif mobile-first berbasis HTML/CSS/JS (`prototype/`, live di Vercel) dengan *state persistence* `localStorage`.
- **Protokol Pengujian Usability V1:**
  - 4 skenario inti (`T1` PPT, `T2` Video, `T3` Unggah Tugas + error recovery, `T4` Kuis 5 soal pilgan + esai) + 2 alur pendukung (*Enroll Kelas* & *Cari Materi*).

## 4. Hasil Perancangan: Design System & Prototipe V1 (`sections/03-design-and-prototype.md`)
- **Arsitektur Navigasi:** 4-tab Bottom Navigation (*Beranda*, *Kelas*, *Cari Materi*, *Aktivitas*) + Contextual Header untuk layar fokus.
- **Design System Light Theme:** Lampirkan tabel token warna, tipografi `Plus Jakarta Sans`, target sentuh `≥44×44 px`, dan opsi skala teks baca (`design/README.md`).
- **Tangkapan Layar Utama:** Ambil aset bersih dari `design/previews/` (`row1` s.d. `row5` & `page2_interactive_states.png`).
- **Implementasi Interaksi Nyata:** Ringkas mekanisme validasi unggah berkas, timer kuis + drawer nomor soal, dan tombol *Panduan Uji*.

## 5. Evaluasi Usability V1 & Analisis Data (`sections/04-evaluation-ueq.md`)
- Profil singkat peserta pengujian (~5 mahasiswa UNS, kode anonim `P01–P05`, jenis perangkat).
- Tabel tingkat keberhasilan skenario (`T1–T4`, Enroll Kelas, Cari Materi).
- Ringkasan skor 33 item UEQ per dimensi (berdasarkan `docs/research/Daftar_Pertanyaan_UEQ_Evaluasi_V1.md`).
- Identifikasi kendala dengan severity tertinggi (skor 3–4) dan umpan balik kualitatif responden.

## 6. Pembahasan, Rencana Revisi V2 & Kesimpulan (`sections/05-discussion-conclusion.md`)
- Pemetaan temuan evaluasi V1 → daftar perbaikan konkret untuk **Prototipe V2**.
- Keterbatasan prototipe (simulasi client-side, data dummy) & saran pengembangan lanjutan.
- Kesimpulan akhir menjawab rumusan masalah.

## 7. Daftar Pustaka
- Huang, Z., & Benyoucef, M. — *A Systematic Literature Review of Mobile Application Usability* (`docs/research/A Systematic Literature Review of Mobile Application Usability.pdf`).
- Kumar, B. A., & Chand, S. S. (2024) — *Mobile Learning Usability Evaluation Questionnaire (UEQ)* (`docs/research/itse-07-2023-0122.pdf`).
- Nielsen, J. (1995) — *Severity Ratings for Usability Problems*.
