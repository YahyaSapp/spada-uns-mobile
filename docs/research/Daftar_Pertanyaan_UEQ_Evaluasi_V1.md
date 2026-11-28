# Instrumen Evaluasi Usability Prototipe Aplikasi Pembelajaran Mobile (V1)

**Kerangka Evaluasi:** Adaptasi Mobile Learning Usability Evaluation Questionnaire (UEQ) — Kumar & Chand (2024)  
**Skala Penilaian:** Nielsen (1995) Severity Rating `1–4` (`1 = Tidak ada kendala`, `4 = Kendala kritis`)  
**Prototipe Uji:** [spada-uns-mobile-prototype.vercel.app](https://spada-uns-mobile-prototype.vercel.app/)  
**Struktur Instrumen:** 11 Bagian · **45 Pertanyaan** (4 Screening + 6 Skenario Uji + 33 Item UEQ + 2 Prioritas Revisi V2)

---

## Ringkasan Skala & Pilihan Jawaban

### A. Hasil Pelaksanaan Skenario Uji (Bagian 2)
- `Berhasil mandiri dengan lancar`
- `Berhasil, tapi sempat bingung / salah ketuk`
- `Gagal atau berhenti sebelum selesai`

### B. Skala Keparahan Usability — Nielsen (1995) (Bagian 3–10)
- `1 · Tidak ada kendala (sudah nyaman)`
- `2 · Kendala ringan pada tampilan (masih mudah dipakai)`
- `3 · Kendala besar (menghambat aktivitas)`
- `4 · Kendala kritis (tidak dapat diselesaikan)`

---

## Bagian 1 · Persetujuan & Screening Responden (4 Pertanyaan)

1. **Persetujuan Partisipasi** *(Kotak centang · Wajib)*  
   *Saya bersedia jawaban saya digunakan untuk evaluasi prototipe dan laporan proyek mata kuliah IMK.*
2. **Identitas Ringkas** *(Jawaban singkat)*  
   *Nama panggilan / inisial responden (tanpa nama lengkap atau NIM).*
3. **Perangkat Uji** *(Pilihan ganda · Wajib)*  
   *Perangkat yang digunakan saat mencoba prototipe mobile?* (`HP Android` | `iPhone (iOS)` | `Tablet / iPad` | `Laptop / Browser desktop`)
4. **Verifikasi Pengujian** *(Pilihan ganda · Wajib · Bercabang)*  
   *Apakah sudah mencoba Prototipe V1 sebelum mengisi kuesioner?* (`Ya, sudah mencoba` → lanjut Bagian 2 | `Belum mencoba` → selesai)

---

## Bagian 2 · Hasil Mencoba Skenario Uji (6 Skenario)

5. **`T1` · Membuka materi PPT** — *Buka IMK Kelas A → Pertemuan 3 → Slide Usability & Heuristik.*
6. **`T2` · Membuka & memutar video pembahasan** — *Buka IMK Kelas A → Pertemuan 3 → Video studi kasus.*
7. **`T3` · Mengumpulkan tugas & mengecek bukti terkirim** — *Uji validasi berkas tidak sesuai → ganti berkas PDF valid → kirim → cek kartu bukti pengumpulan.*
8. **`T4` · Mengerjakan kuis 5 soal (pilihan ganda + esai)** — *Kerjakan soal, pindah nomor lewat drawer, tinjau, dan kirim.*
9. **`K05` · Mencari kelas di katalog & memasukkan enrollment key** — *Bedakan status kelas dan uji alur bergabung dengan kunci kelas.*
10. **`Cari Materi` · Mencari & memfilter materi lewat tab Cari Materi** — *Gunakan pencarian lintas kelas dan filter jenis berkas.*

---

## Bagian 3–10 · 33 Item UEQ Mobile Learning (Skala Keparahan 1–4)

### 1/8 · Organisasi Konten (`CO` · 5 Item)
11. **`CO1`** Apakah ada kendala pada tampilan konten (materi, tugas, dan teks soal) di layar HP?
12. **`CO2`** Apakah ada kendala dalam memahami isi informasi yang ditampilkan (judul, ringkasan, atau instruksi)?
13. **`CO3`** Apakah ada kendala saat melihat daftar konten (daftar kelas, pertemuan, materi, tugas, atau kuis)?
14. **`CO4`** Apakah ada kendala pada cara konten dikelompokkan dan diurutkan?
15. **`CO5`** Apakah ada kendala dalam mengakses konten tambahan di luar halaman kelas utama?

### 2/8 · Tata Letak & Kontrol Tombol (`CL` · 5 Item)
16. **`CL1`** Apakah ada kendala karena ukuran tombol atau area sentuh (seperti pilihan jawaban kuis) terasa terlalu kecil?
17. **`CL2`** Apakah responden masih merasa terlalu banyak mengetik karena kurangnya tombol pilihan cepat (filter, berkas contoh, tab kategori)?
18. **`CL3`** Apakah ada kendala pada posisi/letak tombol utama saat digunakan di HP (Kirim Tugas, Selanjutnya, menu bawah)?
19. **`CL4`** Apakah ditemukan tombol/ikon yang membingungkan karena belum ada keterangan penjelasnya?
20. **`CL5`** Apakah ada kendala dalam memahami tulisan/label pada tombol aksi (`Pilih Berkas`, `Kirim Tugas`, `Ganti Berkas`, `Enroll`, `Tinjau Jawaban`)?

### 3/8 · Navigasi (`NV` · 4 Item)
21. **`NV1`** Apakah ada kendala dalam memahami urutan langkah untuk menyelesaikan tugas dari awal hingga akhir?
22. **`NV2`** Apakah ada kendala saat berpindah antarhalaman, kembali ke halaman sebelumnya, atau lompat antarsoal kuis?
23. **`NV3`** Apakah responden kesulitan mengetahui sedang berada di halaman atau tahap mana (tab aktif, judul header, indikator soal)?
24. **`NV4`** Apakah ada kendala dalam memahami nama menu navigasi utama (`Beranda`, `Kelas`, `Cari Materi`, `Aktivitas`)?

### 4/8 · Umpan Balik Sistem (`FB` · 6 Item)
25. **`FB1`** Apakah ada kendala untuk mengetahui status terkini di aplikasi (sesi aktif, status kelas, status pengumpulan)?
26. **`FB2`** Apakah pilihan pengaturan notifikasi/umpan balik yang tersedia (pengingat tenggat tugas) menjadi kendala?
27. **`FB3`** Apakah ada kendala dalam melihat progres saat suatu proses sedang berjalan?
28. **`FB4`** Apakah ada kendala untuk memastikan aktivitas sudah benar-benar terkirim/selesai?
29. **`FB5`** Apakah pesan notifikasi atau pemberitahuan (`toast`/`alert`) terasa bertele-tele atau sulit dimengerti?
30. **`FB6`** Apakah ada kendala saat mencoba memperbaiki kesalahan yang terjadi?

### 5/8 · Tampilan Visual (`VR` · 5 Item)
31. **`VR1`** Apakah gambar atau ilustrasi (maskot dan pratinjau slide/video) terasa mengganggu atau kurang mendukung?
32. **`VR2`** Apakah ada ikon yang terasa kurang cocok atau sulit ditebak maksudnya?
33. **`VR3`** Apakah ada kendala keterbacaan karena warna teks kurang kontras?
34. **`VR4`** Apakah warna latar belakang (tema terang netral dan aksen biru) terasa kurang nyaman di mata?
35. **`VR5`** Apakah sulit membedakan judul, subjudul, isi teks, dan label status (hierarki tipografi)?

### 6/8 · Konsistensi Antarmuka (`CS` · 3 Item)
36. **`CS1`** Apakah gaya tampilan kartu, tombol, atau warna status terasa tidak seragam di seluruh aplikasi?
37. **`CS2`** Apakah jenis huruf (*font*) terasa tidak konsisten di beberapa halaman?
38. **`CS3`** Apakah ukuran, lebar, atau jarak antar-elemen layar terasa berubah-ubah tidak konsisten antarhalaman?

### 7/8 · Bantuan & Petunjuk (`HP` · 2 Item)
39. **`HP1`** Apakah ketiadaan halaman panduan/FAQ khusus cara memakai aplikasi menjadi kendala?
40. **`HP2`** Apakah petunjuk di dalam halaman aktivitas (syarat file PDF pada tugas dan aturan kuis) terasa kurang jelas?

### 8/8 · Personalisasi / Kustomisasi (`CUS` · 3 Item)
41. **`CUS1`** Apakah ketiadaan opsi ganti bahasa aplikasi (mis. Indonesia / Inggris) menjadi kendala?
42. **`CUS2`** Apakah ketiadaan opsi kustomisasi tampilan (mis. Mode Gelap / Dark Mode) menjadi kendala?
43. **`CUS3`** Apakah ketiadaan opsi mengubah ukuran huruf (kecil / sedang / besar) menjadi kendala?

---

## Bagian 11 · Prioritas Revisi untuk Prototipe V2 (2 Pertanyaan)

44. **Area Prioritas Perbaikan** *(Kotak centang · multi-pilih)*  
    *Bagian mana yang paling perlu diperbaiki pada prototipe?*  
    Opsi: Beranda & ringkasan tugas mendesak · Daftar kelas, pencarian kelas, & enrollment key · Detail kelas & pratinjau materi (PPT/PDF/Video) · Tab Cari Materi & filter berkas · Pengumpulan tugas, validasi error, & bukti terkirim · Tampilan & navigasi kuis (pilihan ganda & esai) · Pengaturan personalisasi (Dark Mode / ukuran huruf / bahasa) · Menu Bantuan / FAQ penggunaan · Tampilan visual, ikon, atau keterbacaan teks · Belum ada bagian yang perlu direvisi.
45. **Masukan Terbuka** *(Paragraf · Opsional)*  
    *Bagian mana yang sudah terasa nyaman untuk dipertahankan, atau adakah saran fitur tambahan untuk iterasi berikutnya?*
