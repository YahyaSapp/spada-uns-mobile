# Team 9 Collaboration Guide (`docs/article/`)

Panduan singkat untuk anggota Kelompok 9 agar kolaborasi penulisan artikel UAS di GitHub rapi, aman, dan bebas konflik.

## 1. Setup Awal (Sekali Saja)

```bash
git clone https://github.com/YahyaSapp/spada-uns-mobile.git
cd spada-uns-mobile
git checkout docs/uas-article
```

Pastikan nama & email Git kamu cocok dengan akun GitHub supaya kontribusimu tercatat:
```bash
git config user.name "NamaGitHubKamu"
git config user.email "email-github-kamu@example.com"
```

## 2. Alur Kerja Saat Menulis Bagian Artikel

1. **Selalu tarik update terbaru dulu sebelum mulai nulis:**
   ```bash
   git checkout docs/uas-article
   git pull origin docs/uas-article
   ```
2. **Buat branch pribadi untuk bagian yang kamu kerjakan** *(jangan commit langsung ke `main`!)*:
   ```bash
   git checkout -b docs/nama-bagian
   # Contoh: git checkout -b docs/aqil-evaluation-ueq
   ```
3. **Tulis atau edit file bagianmu** di `docs/article/` (misalnya `docs/article/sections/04-evaluation-ueq.md` atau perbarui `docs/article/outline.md`).
4. **Commit dengan format Conventional Commits (English):**
   ```bash
   git add docs/article/
   git commit -m "docs(article): draft usability evaluation and UEQ analysis"
   ```
5. **Push branch kamu & buka Pull Request:**
   ```bash
   git push -u origin docs/nama-bagian
   ```
   Lalu buka GitHub → klik **Compare & pull request** → pastikan target **`base: docs/uas-article`** (bukan `main`) → tambahkan `Refs #4` di deskripsi → klik **Create pull request**.

## 3. Aturan Kebersihan Repo
- Jangan mengunggah file mentah sementara (`*.tmp`, `~$*.docx`, screenshot duplikat di root) atau data pribadi/NIM asli responden.
- Gunakan kode responden anonim (`P01–P05`) pada tabel hasil pengujian.
- Referensikan gambar yang sudah tersedia di `design/previews/` dan `docs/benchmarks/` agar ukuran repo tetap ringan.
