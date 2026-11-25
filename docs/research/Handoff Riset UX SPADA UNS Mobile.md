# Handoff Riset UX SPADA UNS Mobile

Proyek IMK · Riset kebutuhan pengguna dan audit tangkapan layar · Progres 24 November 2026

**Temuan utama.** Mahasiswa perlu menemukan dan membuka materi kuliah yang benar dengan cepat dari HP. Aqil ingin langkah menuju materi lebih pendek. Ade membutuhkan akses cepat ke materi kelas dan tenggat tugas. Yahya bisa tersendat sejak mencari kelas. Prioritas wireframe adalah jalur **menemukan kelas → membuka materi**, dengan akses yang jelas ke **tugas terdekat dan statusnya**. **Kelas Saya** menjadi hipotesis desain yang akan dicek saat mahasiswa mulai dari sebelum masuk kelas.

## Ringkasan untuk anggota tim

- **Cakupan.** Prototipe SPADA UNS untuk mahasiswa, dengan tugas inti membuka PPT, membuka video, mengumpulkan tugas, dan mengerjakan kuis.
- **Bukti.** Tim menyebut lima responden. Analisis saat ini memakai tiga jawaban yang tersedia, satu tab analisis tim, 21 screenshot SPADA pada browser ponsel, 10 screenshot Ruangguru, dan dua paper rujukan. Versi ini memasukkan jawaban Yahya dan mempertahankan nomor K01–K04, lalu menambahkan K05 untuk kebutuhan akses kelas.
- **Arah desain.** Mulai dari menemukan kelas, membuka materi yang tepat, dan mengenali aktivitas mendesak. Siapkan pengumpulan tugas dan kuis sebagai alur uji inti berikutnya.
- **Status proyek.** Hasil yang dibawa untuk progres adalah analisis kebutuhan awal dan arah wireframe. Masalah login, enrolment, dan alur kuis di ponsel masih terbuka untuk pengecekan lewat demonstrasi atau pengujian.
- **Luaran UAS.** Satu artikel dan satu laporan. Brief menyebut dua progress update dan pengumpulan 7 Desember 2026, Week 16.

## Ringkasan progres 24 November 2026

Cakupan yang dilaporkan tim adalah **lima responden**. Untuk progres ini, analisis menggunakan **tiga jawaban wawancara yang tersedia** di dokumen tim, yaitu Aqil, ade, dan Yahya. Dua jawaban lainnya belum tersedia sebagai bahan analisis.

**Hasil sementara.** Ketiga jawaban mendukung kebutuhan untuk menemukan dan membuka materi kuliah yang tepat dari HP. Ade dan Yahya juga secara eksplisit ingin melihat tugas yang perlu ditindaklanjuti beserta tenggat atau statusnya. Hambatan mencari kelas terlihat paling jelas pada jawaban Yahya. Pengumpulan tugas dan kuis memberi kebutuhan tambahan terkait pemilihan berkas, keterbacaan soal, navigasi, dan konfirmasi akhir.

**Arah wireframe.** Mulai dari alur masuk, menemukan kelas yang tepat, dan membuka materi. Tampilkan akses yang jelas ke tugas terdekat serta statusnya. Kelas Saya menjadi hipotesis yang diuji dari titik masuk yang realistis. Setelah struktur awal siap, lanjutkan alur pengumpulan berkas dan kuis.

**Dasar desain dan evaluasi.** Wawancara menentukan kebutuhan. Huang dan Benyoucef mendukung keputusan desain mobile. Kumar dan Chand menjadi rujukan instrumen setelah pengguna mencoba prototipe. Ruangguru memberi contoh pola UI mobile yang relevan.

## 1. Dasar bukti dan sumber wawancara

- **Cakupan dan sumber analisis.** Tim melaporkan lima responden. Untuk sintesis ini, tab Aqil, ade, dan Yahya masing-masing memuat sembilan jawaban. Tab analisis teman sebelumnya memakai kode P01 untuk Aqil dan P02 untuk ade. Handoff versi lama memakai kode P01 untuk Yahya. Edisi ini memakai nama tab agar sumbernya jelas. Catatan wawancara Yahya sebelumnya dan tab Yahya adalah satu respons. [Aqil](https://docs.google.com/document/d/1HsTQXRD6Em63LkgelUaJI3_h0NwoxGXVlqig3QVuunE/edit?tab=t.nt2t99i50yof) · [ade](https://docs.google.com/document/d/1HsTQXRD6Em63LkgelUaJI3_h0NwoxGXVlqig3QVuunE/edit?tab=t.x292qmr6hvhf) · [Yahya](https://docs.google.com/document/d/1HsTQXRD6Em63LkgelUaJI3_h0NwoxGXVlqig3QVuunE/edit?tab=t.6zhui3x568if) · [Analisis awal tim](https://docs.google.com/document/d/1HsTQXRD6Em63LkgelUaJI3_h0NwoxGXVlqig3QVuunE/edit?tab=t.w19qj8l0sgqw)
- **Peran Yahya.** Ia mahasiswa UNS pengguna SPADA sekaligus anggota tim berlatar UI/UX. Pengalaman penggunaan seperti meminta tautan atau beralih ke laptop adalah data wawancara. Gagasan seperti aplikasi tersendiri, penataan kelas, dan daftar tugas ala Google Classroom adalah masukan desain. Catat peran ganda dalam metode dan cek temanya dengan peserta lain.
- **Audit visual.** Bukti terdiri dari 21 tangkapan layar SPADA di browser ponsel dan 10 tangkapan aplikasi Ruangguru. ID gambar mengacu pada bagian 11. Urutan berkas adalah urutan ekspor, dan alur saat ini direkonstruksi dari isi layar dan pengalaman yang dilaporkan.
- **Konteks versi.** SPADA baru menjelaskan bahwa kelas mengikuti data KRS di SIAKAD, sementara katalog publik juga memuat sebagian kelas dengan pendaftaran mandiri. Selama masa transisi, catat versi dan konteks kelas bila membandingkan pengalaman. [SPADA UNS](https://spada.uns.ac.id/) · [Pengumuman migrasi LPPMP UNS](https://lppmp.uns.ac.id/2026/09/30/spada-uns-resmi-bermigrasi-ke-versi-baru/)

## 2. Jawaban wawancara dan perbandingan per pertanyaan

### Aqil dan ade

Ringkasan berikut memparafrasakan isi tab masing-masing. Nomor mengikuti pertanyaan wawancara.

| Pertanyaan | Aqil | ade |
|---|---|---|
| **Q1 · Tujuan terakhir dari HP** | Mengecek materi dan tugas pada satu mata kuliah. | Mencari materi terkait mata kuliah yang diambil. |
| **Q2 · Titik masuk** | Browser seperti Chrome, lalu dashboard mata kuliah. | Browser, lalu mencari SPADA UNS. |
| **Q3 · Aktivitas dan perangkat** | Pernah mencoba semuanya. Paling sering buka materi saat belum bisa membuka laptop. | Pernah mencoba semuanya. Biasanya lebih nyaman memakai laptop karena tampilannya lebih jelas. |
| **Q4 · Memastikan materi yang benar** | Konten yang tampil sesuai dengan item yang diklik. | Mengandalkan judul dalam daftar atau bagian materi yang dibagikan. |
| **Q5 · Pengumpulan tugas** | Login, buka kelas, lalu cari minggu atau tugas yang ingin dikumpulkan. | Cari kelas dan tugas, tambahkan berkas, lalu cek status Submitted. |
| **Q6 · Kuis** | Buka kelas dan kuis, mulai Attempt quiz, lalu pindah soal lewat tombol lanjut atau bagan nomor soal. | Mulai Attempt quiz. Berpindah lewat Next page atau Quiz navigation, lalu Finish attempt dan Submit all and finish. Cek status Finished. |
| **Q7 · Lancar dan tersendat** | Jalur sampai halaman kuis biasanya lancar. Sesekali terkendala saat Attempt quiz. Bagan nomor soal di sidebar kurang terlihat. | Unduh materi dan cek status tugas lancar. Pindah ke laptop saat soal panjang sulit digulir atau unggahan besar terasa berat. |
| **Q8 · Isi halaman kelas yang diinginkan** | Materi dengan langkah akses yang lebih pendek. | Tugas dan tenggat terdekat dulu, disusul materi pertemuan terbaru. |
| **Q9 · Prioritas prototipe** | Akses PDF, PPT, atau video sebelum sempat buka laptop. | Akses cepat ke materi dan tenggat/status tugas, misalnya di perjalanan atau saat kelas mulai. |

### Yahya

Jawaban berikut adalah parafrasa dari dikte. Catatan setelah tiap jawaban memberi konteks audit dan rincian yang masih perlu dipastikan.

#### 1. Terakhir kali kamu buka SPADA lewat HP, kamu sedang mau melakukan apa? Bisa ceritakan dari awal sampai selesai?

> Aku jarang banget buka SPADA lewat HP. Yang paling aku ingat pernah aku buka dari HP itu video materi. Aku biasanya buka Chrome, cari “SPADA UNS”, masuk lewat SSO, lalu cari kelas dan aktivitas yang mau kubuka. Aku kurang ingat detail satu kejadian terakhirnya dari awal sampai selesai, tapi kurang lebih itu alur yang biasa aku lewati.
>
> Dari awal masuk, tampilannya terasa kurang nyaman buatku. Ada banyak informasi dan indikator notifikasi yang kelihatan, sementara aku biasanya masuk dengan satu tujuan, misalnya cari materi dari satu kelas. Kalau harus mencari kelas, memastikan kelasnya benar, dan scroll lagi untuk sampai ke materi, aku lebih nyaman lanjut di laptop. Menurutku akan enak kalau ada versi aplikasi yang memang dirancang buat cara pakai di HP.

Dikte belum memberi satu kejadian terakhir yang lengkap dengan tanggal, mata kuliah, dan hasil akhirnya. Video adalah contoh penggunaan HP yang diingat, sedangkan tanggapan tentang aplikasi mobile merupakan ekspektasi Yahya. Sumber penilaian di sesi ini adalah SPADA pada browser ponsel.

#### 2. Biasanya kamu mulai dari mana untuk masuk ke aktivitas itu?

> Kalau belum punya tautan, aku buka Chrome dan ketik “SPADA UNS”, terus masuk dari hasil pencarian. Situsnya gampang ditemukan. Setelah masuk, aku masih harus cari kelas atau aktivitas tujuan.
>
> Untuk tugas, aku sering mulai dari grup WhatsApp. Aku cek instruksi dosen dan apakah ada tautan yang bisa dibuka langsung. Kalau dosen cuma bilang “udah di SPADA”, aku cari sendiri. Kalau ragu sudah di kelas atau tugas yang benar, aku bisa minta tautannya atau tanya teman, “Bener nggak sih yang ini?”

Dua titik masuk yang perlu dibawa ke desain adalah beranda dari pencarian dan tautan langsung dari grup. Yahya juga mengingat tombol SSO yang masih muncul setelah merasa sudah masuk. Status sesi saat itu perlu dicek lewat pengamatan langsung.

#### 3. Aktivitas apa yang pernah kamu lakukan di HP dan mana yang biasanya kamu kerjakan di laptop?

> Yang paling jelas pernah aku lakukan dari HP itu buka video. PPT masih bisa dibuka, tapi aku jarang baca PPT di HP dan lebih nyaman di laptop karena layarnya lebih luas. Kalau materi bisa dibuka dengan nyaman di HP atau iPad, itu bakal membantu.
>
> Kuis biasanya aku kerjakan di laptop karena lebih leluasa baca soal dan pilihan jawabannya. Aku tertarik mengerjakan kuis di HP kalau tampilannya kompatibel dan nyaman dipakai, karena HP lebih gampang diakses. Untuk pengumpulan tugas, proses yang paling aku ingat juga dari laptop.

Proses unggah yang dijelaskan Yahya sebagian merujuk ke laptop. Tangkapan SP-17 sampai SP-20 menunjukkan langkah unggah yang terlihat di browser ponsel. Bedakan pengalaman habitual di tiap perangkat dari fitur yang dapat dibuka pada saat audit.

#### 4. Bagaimana kamu mencari materi dan tahu bahwa PPT atau video yang dibuka sudah benar?

> Aku biasanya buka SPADA dan masuk lewat SSO. Kadang aku bingung karena tombol atau tulisan untuk masuk lewat SSO masih kelihatan walaupun aku merasa sudah masuk. Bagian mencari kelas di SPADA baru juga terasa susah. Saat buka filter, ada banyak pilihan fakultas, program studi, dan dosen. Aku masih harus mikir, “Yang mana sih kelas aku?” Menurutku SPADA lama lebih gampang ditelusuri, walaupun tampilannya lebih sederhana.
>
> Kalau sudah masuk kelas, isinya kadang panjang dan berderet ke bawah. Aku tahu ada kategori seperti Resources, Assignments, dan Quizzes, tapi aku masih bisa ragu materi yang dimaksud ada di bagian mana, apalagi cara dosen menata kontennya beda-beda. Status ikut kelas juga kadang membingungkan. Ada kelas yang kelihatannya butuh enrol dulu, sementara kelas lain seingatku bisa dibuka langsung.
>
> Kalau dosen kasih tautan, aku lebih yakin sudah membuka materi yang dimaksud. Kalau instruksinya cuma menyebut materi ada di SPADA, aku cari di kelasnya. Kalau masih ragu, aku tanya teman atau minta link langsung. Buatku, memastikan aku sudah masuk ke kelas dan materi yang benar itu bagian yang paling menyulitkan.

Yahya menyadari adanya kategori seperti Resources, Assignments, dan Quizzes. Kesulitannya adalah menemukan kelas atau aktivitas yang tepat, dan mengenali materi mana yang relevan atau sudah dikerjakan. Kriteria persis yang dipakai Yahya untuk memastikan PPT atau video benar masih perlu dikonfirmasi.

#### 5. Bagaimana proses mengumpulkan tugas dan memastikan file berhasil terkirim?

> Aku biasanya lihat dulu pesan di WhatsApp. Kalau ada tautan tugas, aku buka dari situ. Kalau nggak ada, aku masuk ke mata kuliah, cari tugas yang dimaksud, baru buka bagian pengumpulan.
>
> Proses unggah sampai selesai yang paling aku ingat itu dari laptop. Dari halaman tugas aku buka bagian pengumpulan dan masuk ke pemilih berkas. Sebelum benar-benar bisa memilih file, ada beberapa pilihan atau isian seperti nama berkas dan lisensi. Aku bingung mana yang perlu diperhatikan. Padahal yang mau kulakukan sederhana, yaitu pilih file tugas dan kirim.
>
> Setelah kirim, aku cek tulisan Submitted for grading. Aku juga bisa lihat nama file dan informasi waktu di halaman tugas. Buatku, status ini membantu karena aku bisa mengecek bahwa berkasnya benar-benar masuk.

Tangkapan SP-16 mendukung keberadaan status itu dan memperlihatkan nama berkas serta waktu aktivitas. Tangkapan SP-17 dan SP-18 memperlihatkan pemilih berkas dan kolom metadata. Penyebutan *outcome* atau istilah lain dalam dikte masih perlu dikonfirmasi. Perlu juga dikonfirmasi kapan Yahya terakhir menuntaskan pengumpulan langsung dari HP.

#### 6. Bagaimana kamu tahu cara memulai, berpindah soal, dan memastikan jawaban kuis sudah dikirim?

> Aku biasanya mengerjakan kuis di laptop. Alur yang aku ingat adalah buka kuis, pilih Start, jawab soalnya, lalu pilih Next page untuk lanjut. Urutannya menurutku cukup gampang diikuti dan aku tahu tombol mana yang dipakai untuk pindah soal.
>
> Di HP, tampilan kuis terasa cukup makan tempat, jadi aku lebih nyaman baca di laptop. Aku tetap tertarik pakai HP kalau tampilannya lebih nyaman. Untuk tulisan persis yang muncul setelah kuis dikirim, aku kurang ingat.

SP-11 dan SP-12 memperlihatkan layar soal, status soal, dan kontrol halaman. Urutan setelah soal terakhir dan teks konfirmasi pengiriman kuis belum teramati. “Submitted for grading” terverifikasi pada layar **tugas**, sehingga status akhir kuis perlu dicek sendiri. Durasi hanya relevan jika kuis yang diperiksa memiliki batas waktu.

#### 7. Bagian mana yang lancar dan bagian mana yang membuatmu berhenti, mengulang, atau pindah perangkat?

> Yang cukup lancar itu urutan pindah soal di kuis. Status pengumpulan tugas juga membantu karena aku bisa mengecek apakah file sudah masuk.
>
> Yang paling bikin aku tersendat itu mencari kelas atau materi dan melewati langkah-langkah buat menambahkan file. Aku bisa berhenti karena ragu kelas yang kubuka sudah benar. Setelah masuk pun kadang aku harus banyak scroll untuk sampai ke materi. Di HP aku juga kurang merasa punya patokan yang jelas untuk tahu sedang ada di bagian mana dan harus kembali lewat mana. Kalau sudah begitu, aku biasanya lanjut di laptop, cari lagi tautan dari WA, atau tanya teman.
>
> Aku juga pernah bingung soal tenggat. Ada tugas yang tanggalnya jelas, ada yang aku nggak menemukan tanggalnya. Pengaturan aksesibilitas di SPADA menurutku bagus sudah ada, tapi cara mengubah pengaturannya terasa kurang gampang.

Untuk revisi, dua hal yang layak dipertahankan adalah urutan kuis yang familiar dan umpan balik pengumpulan tugas. Tenggat perlu dianalisis sebagai dua kondisi yang bisa dibedakan saat pengujian, yaitu tanggal tersedia tetapi sulit ditemukan, atau tanggal memang belum ditetapkan.

#### 8. Saat membuka satu mata kuliah di HP, informasi atau tindakan apa yang paling ingin kamu temukan lebih dulu?

> Setelah login aku ingin langsung lihat kelas mana yang sudah aku ikuti. Kalau belum bisa masuk ke suatu kelas, aku ingin tahu statusnya dan langkah yang bisa kulakukan. Selama ini aku merasa ketemu banyak pilihan dari berbagai fakultas atau program studi, padahal biasanya aku sudah tahu mau buka kelas apa.
>
> Di dalam kelas, aku mau cepat tahu ada tugas atau kuis baru atau nggak, kapan tenggatnya kalau ada, dan mana yang belum kukerjakan. Kalau statusnya kelihatan dari daftar, aku bisa langsung menentukan mana yang perlu dibuka dulu.

Yahya menilai profil aksesibilitas yang sudah disediakan sebagai ide yang baik, tetapi pengaturannya terasa sulit. Keterangan tersebut berasal dari pengalaman Yahya dan membantu kita memilih aspek yang perlu diperiksa, seperti keterbacaan, kejelasan label, dan cara pengaturan ditemukan.

#### 9. Kalau hanya satu aktivitas yang bisa diprioritaskan, kamu pilih apa?

> Aku pilih mempermudah akses ke kelas yang sudah aku ikuti. Misalnya dosen cuma bilang materi ada di SPADA. Aku sudah tahu mata kuliah yang dimaksud, tapi masih harus mencari kelasnya, memastikan sudah benar, lalu mencari lagi materinya. Kalau kelas yang aku ikuti langsung terlihat setelah masuk, aku bisa lebih cepat sampai ke tujuan.
>
> Di dalam kelas, aku ingin bisa lihat mana yang sudah selesai dan apa yang masih perlu dikerjakan. Aku merasa daftar di Google Classroom lumayan jelas untuk itu. Buatku, yang paling membantu adalah langsung menemukan kelas sendiri dan tahu apa yang harus kulakukan di sana.

Google Classroom di sini adalah analogi dari Yahya untuk status pekerjaan. Benchmark utama UI proyek tetap memakai tangkapan Ruangguru di bagian 5.

## 3. Audit SPADA mobile

| Temuan | Bukti yang terlihat atau dilaporkan | Dampak dan keputusan desain sementara |
|---|---|---|
| **A01 · Beranda dan status masuk** | SP-31 memperlihatkan tombol UNS SSO, jelajah kelas, dan pencarian pada layar yang sama. Yahya mengingat kondisi sudah masuk tetapi masih melihat ajakan masuk. Ada badge 21 pada bagian atas SP-23, SP-27, dan SP-31. | Perjelas keadaan sesi, identitas akun setelah masuk, dan tujuan halaman setelah SSO. Badge membuktikan ada indikator, sedangkan frekuensi notifikasi dan perilaku sesi perlu observasi terpisah. |
| **A02 · Katalog dan filter kelas** | SP-27–SP-30 menunjukkan kategori fakultas, prodi atau semester, serta daftar dosen. Yahya kesulitan mengenali kelasnya dari pilihan tersebut. | Buka **Kelas Saya** sebagai jalur utama setelah masuk. Gunakan identitas kelas yang bisa dibedakan seperti nama, kode, dan kelompok/kelas jika tersedia. Letakkan kategori luas dan filternya di katalog. |
| **A03 · Keanggotaan dan izin akses** | SP-26 menampilkan tombol “Enrol now” dan pesan bahwa pengguna tidak bisa mendaftar sendiri pada course yang sama. Yahya mengingat akses yang terasa berbeda antar kelas. | Tampilkan status khusus untuk kelas yang bisa dibuka, kelas yang bisa diikuti mandiri, dan kelas yang hanya dapat diakses dengan izin. Uji keterbacaan status dan tindakan yang tersedia. Kebijakan akses mengikuti pengaturan kelas yang sebenarnya. |
| **A04 · Hierarki halaman kelas** | SP-23 sudah punya header kelas, breadcrumb, progres, dan kategori Resources, Assignments, Quizzes. SP-24–SP-25 menunjukkan halaman dengan bagian penjelasan panjang dan area media yang pada tangkapan itu menampilkan ikon gambar kecil. Yahya melaporkan banyak scroll. | Pertahankan pemisahan jenis aktivitas. Dahulukan identitas kelas, ringkasan pekerjaan, dan akses materi di area atas. Tampilkan informasi pembelajaran yang panjang melalui bagian yang bisa dibuka. |
| **A05 · Status dan tenggat** | SP-21–SP-22 menunjukkan daftar aktivitas per jenis. SP-22 sudah punya kolom status pengumpulan. SP-16 memperlihatkan status rinci satu tugas. Yahya sulit mendapat gambaran mana yang perlu dikerjakan dan merasa tenggat tidak konsisten. | Tampilkan status dengan bahasa yang ringkas di daftar aktivitas dan detail. Bedakan “Belum dikumpulkan”, “Sudah dikumpulkan”, dan “Sudah dinilai” sesuai data. Jika belum ada tanggal, tampilkan “Tenggat belum ditetapkan”. |
| **A06 · Pemilihan berkas** | SP-20 mulai dari “Add submission”. SP-19 menampilkan area berkas dan “Save changes”. SP-18 memperlihatkan dialog dengan sumber berkas serta metadata termasuk “Save as”, “Author”, dan “Choose licence”. SP-17 memperlihatkan pilihan dari perangkat. Pada SP-19 batasnya satu berkas dan 20 MB untuk tugas yang ditangkap. | Jadikan “Pilih berkas” aksi utama. Tampilkan aturan tugas sebelum memilih, pratinjau nama berkas, opsi ganti, dan aksi pengiriman. Metadata yang diwajibkan tetap tersedia sesuai aturan tugas. Simulasikan satu kesalahan berkas dan cara memulihkannya dalam prototipe. |
| **A07 · Konfirmasi pengumpulan** | SP-16 menampilkan “Submitted for grading”, status penilaian, waktu perubahan, dan berkas tersimpan. Yahya mengandalkan tanda ini. | Pertahankan bukti pengumpulan dan angkat ke posisi yang cepat ditemukan. Bedakan berkas terpilih atau tersimpan sementara, berkas terkirim, dan status penilaian. |
| **A08 · Kuis** | SP-11 menampilkan soal dengan beberapa pilihan jawaban. SP-12 menampilkan “Question 1”, status belum dijawab, penanda soal, dan “Next page”. Yahya menilai urutan bisa diikuti dan menyukai ruang baca laptop. | Pertahankan urutan yang familiar. Uji ukuran area pilihan, ruang baca, progres jawaban, dan tinjauan sebelum kirim. Cocokkan aturan pindah soal dan waktu dengan skenario kuis yang dipilih. |
| **A09 · Aksesibilitas** | SP-13–SP-15 menunjukkan pengaturan kontras, teks, profil aksesibilitas, penyorotan kontrol, dan opsi lain. Yahya merasa modifikasinya sulit. | Dalam layar inti, utamakan teks terbaca, label jelas, area sentuh memadai, dan status yang terbaca tanpa mengandalkan warna. Ukur kemudahan menemukan pengaturan jika masuk cakupan tes. Tangkapan ini mendokumentasikan keberadaan kontrol dan keluhan Yahya memberi arah pemeriksaan. |
| **A10 · Navigasi lintas halaman** | Header global terlihat di SP-23, SP-27, dan SP-31. SP-11–SP-12 dan SP-16 memakai header konteks kelas. Pada SP-24–SP-25, area yang terlihat berada di dalam konten. | Rumuskan keluhan “header/footer tidak ada” sebagai masalah orientasi atau konsistensi navigasi yang dirasakan. Gunakan navigasi utama pada Beranda, Kelas, dan Aktivitas. Pada kuis dan unggah, gunakan header konteks dan jalur kembali yang menjaga kejelasan tugas. |
| **A11 · Akses materi** | SP-23 memperlihatkan pintasan Resources dan bagian Course content. Yahya melaporkan sulit mencari sumber, pernah membuka video dari HP, dan lebih nyaman membaca PPT di laptop. | Prioritaskan pengenalan jenis materi dan judul/topik. Untuk PPT dan video, uji keterbacaan label dan keberhasilan membuka materi yang dimaksud. Ambil tangkapan layar langkah pemilihan dan pembukaan konten untuk melengkapi bukti as-is. |

## 4. Sintesis kebutuhan pengguna dan prioritas wireframe

| Kebutuhan | Bukti dari tiga wawancara | Prioritas dan cara mengecek |
|---|---|---|
| **K01 · Menemukan dan membuka materi yang tepat dari HP** | Aqil ingin lebih sedikit langkah dan memeriksa materi yang tampil sesuai pilihan. Ade memakai judul untuk mengenali PPT dan butuh akses cepat saat kelas mulai. Yahya kadang meminta tautan atau konfirmasi karena ragu sudah berada di kelas atau materi yang benar. | **Prioritas pertama.** Uji PPT dan video dari titik mulai sebelum masuk kelas. Cek apakah peserta menemukan kelas, mengenali judul dan jenis materi, serta membuka konten yang tepat tanpa bantuan. |
| **K02 · Mengetahui aktivitas yang perlu dikerjakan dan tenggatnya** | Ade meminta tugas dan tenggat terdekat terlihat lebih dulu. Yahya ingin tahu mana yang belum dikerjakan, apa yang baru, dan mana yang sudah dikumpulkan. Aqil memakai HP untuk mengecek tugas dan materi. | **Prioritas pertama bersama akses materi pada halaman kelas.** Uji apakah peserta bisa menunjukkan tugas yang paling mendesak dan menjelaskan statusnya. Bedakan tanggal yang sulit ditemukan dari tanggal yang belum ditetapkan. |
| **K03 · Memilih berkas dan memastikan tugas terkirim** | Ade mengandalkan status Submitted dan pernah pindah ke laptop untuk unggahan besar. Yahya mengandalkan Submitted for grading dan menjelaskan banyak langkah saat memilih berkas, dengan contoh sampai selesai yang paling diingat dari laptop. Aqil menjelaskan jalur menuju tugas. | **Alur inti setelah struktur awal siap.** Uji apakah peserta bisa memilih berkas, membedakan file yang baru dipilih dari file yang sudah diterima, dan memahami opsi coba lagi bila gagal. Kinerja unggahan diperiksa pada sistem yang berfungsi. |
| **K04 · Membaca, menavigasi, dan menyelesaikan kuis di HP** | Aqil kesulitan melihat pemilih nomor soal. Ade berpindah ke laptop ketika soal panjang menyulitkan dan memakai Finished sebagai tanda akhir. Yahya lebih nyaman membaca di laptop, tetapi menganggap alur Next page cukup mudah diikuti. | **Alur inti setelah struktur awal siap.** Uji satu soal panjang, perpindahan soal sesuai aturan, dan pemahaman atas konfirmasi akhir. Cek kendala saat mulai berdasarkan contoh kejadian baru jika muncul lagi. |
| **K05 · Mengenali kelas dan memahami aksesnya** | Yahya meragukan kelas yang dibuka dan langkah saat enrolment tidak jelas. SP-26–SP-31 memberi konteks visual. Aqil sudah terbiasa lewat dashboard, sehingga hambatannya mungkin berbeda menurut titik masuk, kelas, atau akun. | **Hipotesis pada alur pertama.** Uji Kelas Saya dari titik masuk realistis dengan dua contoh kelas yang mirip. Amati bagaimana peserta menafsirkan status akses. Perbarui prioritas setelah pengamatan berikutnya. |

**Perubahan dari analisis awal tim.** K01 tetap menjadi kebutuhan dengan dukungan paling luas. K02 sekarang mendapat dukungan eksplisit dari ade dan Yahya. K03 dan K04 dipertajam dengan pengalaman perangkat, status akhir, dan perbedaan hambatan. K05 ditambahkan untuk membedakan menemukan kelas dari menemukan materi di dalam kelas. Ketiga respons menyumbang konteks, dan satu screenshot tetap dihitung sebagai bukti visual.

**Arah yang dipakai untuk wireframe.** Mulai dengan satu jalur utama **masuk → temukan kelas yang benar → buka materi yang tepat**. Beri akses yang mudah ditemukan ke tugas terdekat dan status pengumpulan. Pertahankan aspek SPADA yang sudah membantu, seperti judul materi, urutan kuis, dan konfirmasi akhir. Siapkan pengumpulan file dan kuis untuk uji inti. Pada pengujian awal, catat di langkah mana peserta tersendat agar perubahan dipilih sesuai masalahnya.

**Rumusan masalah desain.** Bagaimana membantu mahasiswa UNS menemukan kelas dan aktivitas yang tepat dari ponsel, lalu memakai informasi status untuk menyelesaikan atau menindaklanjuti aktivitas tersebut?

## 5. Audit benchmarking Ruangguru

| Bukti | Pola yang terlihat dan penerapannya ke SPADA |
|---|---|
| **RG-01–RG-04, RG-07** | Menu bawah memberi tujuan yang tetap meski isi halaman berbeda. Ambil prinsip navigasi yang dapat dikenali kembali. Usulan tujuan SPADA adalah Beranda, Kelas, dan Aktivitas, dengan profil pada bagian atas. |
| **RG-02–RG-04, RG-07** | Kartu dan pintasan mengelompokkan tindakan. Gunakan kelompok yang sesuai kebutuhan akademik seperti PPT, Video, Tugas, dan Kuis. Meta kartu mengikuti kebutuhan kelas, seperti status dan tenggat. |
| **RG-05–RG-06** | Pencarian memakai filter jenis konten dan layar hasil kosong yang menjelaskan keadaan. Terapkan filter pada konteks kelas dan beri langkah pemulihan, seperti mengubah kata kunci atau menghapus filter. Perhatikan kategori yang sebagian terlihat ketika baris filter digeser. |
| **RG-02, RG-07** | Sesi dan progres drill memperlihatkan status yang bisa dipindai secara cepat. Untuk SPADA, gunakan bahasa status akademik sesuai aktivitas dan data yang tersedia. |
| **RG-08–RG-10** | Tangkapan memuat promosi layar bawah, opsi masuk aplikasi, dan pemilihan jenjang. Pada konteks SPADA, ruang awal diberikan ke SSO kampus dan akses ke kelas yang diikuti. |

## 6. Alur as-is dan usulan alur to-be

### As-is berdasarkan wawancara dan tangkapan layar

1. Aqil dan ade masuk lewat browser. Aqil terbiasa menuju dashboard mata kuliah. Yahya mencari SPADA UNS di Chrome atau mengikuti tautan dari WhatsApp. Beranda dan pencarian terlihat pada SP-31.
2. Yahya menggunakan SSO. Saat menemukan katalog, ia dapat menghadapi pilihan fakultas, semester, dosen, serta kondisi enrolment. Layar katalog dan kondisi akses tampak pada SP-26–SP-31.
3. Di kelas, mahasiswa dapat membuka konten dan kategori aktivitas. Yahya menyebut scroll, mencari tautan lain, dan meminta konfirmasi teman ketika ragu. Contoh layar kelas dan daftar aktivitas ada pada SP-21–SP-25.
4. Untuk tugas, pemilihan berkas melewati beberapa tampilan lalu mahasiswa memeriksa status pengumpulan. Untuk kuis, tangkapan memverifikasi layar soal dan kontrol navigasi. [Indeks tangkapan layar](#11-indeks-tangkapan-layar)

### To-be untuk wireframe

| Jalur | Urutan yang diusulkan | Kondisi selesai |
|---|---|---|
| **Masuk dan temukan kelas** | Masuk dengan SSO UNS → Beranda dengan akses utama Kelas Saya → pilih mata kuliah dan kelompok yang tepat → Detail kelas. Untuk tautan dari WhatsApp, masuk bila diminta → lanjutkan ke tujuan jika punya akses. | Nama kelas dan kelompok dapat dikenali. Saat akses belum tersedia, mahasiswa memahami alasannya dan tindakan berikutnya. |
| **PPT** | Detail kelas → Materi → pilih PPT berdasarkan judul dan topik → buka pratinjau. | Materi yang benar tampil dan judulnya bisa diperiksa. |
| **Video** | Detail kelas → Materi → pilih Video → buka pemutar → putar. | Video yang benar tampil dan kontrol putar bisa ditemukan. |
| **Tugas** | Detail kelas atau Aktivitas → buka tugas → baca instruksi, tenggat, dan aturan → pilih dan periksa berkas → kirim → lihat bukti pengumpulan. | Status akhir, nama berkas, dan waktu terlihat. Bila berkas ditolak saat pemilihan atau pengiriman, tampilkan cara memperbaikinya. |
| **Kuis** | Detail kelas atau Aktivitas → buka petunjuk kuis → mulai → jawab dan berpindah sesuai aturan → tinjau → kirim → lihat status. | Peserta memahami status jawaban sebelum kirim dan status akhir setelah kirim. Pada kuis berwaktu, waktu tersisa terlihat selama pengerjaan. |
| **Cari kelas di luar daftar pribadi** | Kelas Saya → Cari kelas → cari berdasarkan nama atau kode → cek identitas dan izin → gabung jika tersedia. | Mahasiswa melihat status yang sebenarnya untuk kelas tersebut dan bisa kembali ke Kelas Saya. |

**Cakupan wireframe V1.** Siapkan SSO, beranda, daftar kelas, detail kelas, materi PPT dan video, detail tugas dan pemilih berkas, konfirmasi pengumpulan, serta petunjuk kuis, soal, tinjauan jawaban, dan konfirmasi. Gunakan data kelas, nama berkas, dan akun fiktif. Cukup buat satu keadaan akses kelas yang perlu ditangani dan satu kesalahan berkas untuk mengecek kejelasan pemulihan. Keputusan posisi Kelas Saya dan aktivitas tertunda adalah hipotesis yang bisa diuji tanpa mengunci gaya visual.

## 7. Pertanyaan tindak lanjut

Gunakan panduan sembilan pertanyaan yang sudah ada untuk peserta berikutnya. Minta satu contoh kejadian spesifik sebelum membahas ide solusi. Beri setiap peserta kode dan catat perangkat, URL atau versi SPADA, konteks mata kuliah, tujuan, langkah, hambatan, dampak, dan cara mengatasinya.

| Yang perlu dikonfirmasi | Cara memperoleh bukti |
|---|---|
| Setelah SSO, halaman mana yang benar-benar terbuka dan bagaimana mahasiswa masuk ke kelas sendiri? | Audit singkat dengan peserta yang memperlihatkan tampilan setelah masuk. Bandingkan jalur dari beranda dan dari tautan langsung. |
| Apakah hambatan akses berasal dari pencarian, penyelarasan kelas, aturan enrolment, atau pengenalan status? | Minta peserta menemukan satu kelas yang diikuti dan satu kelas yang belum bisa diakses. Rekam ucapan dan tindakan, lalu cocokkan dengan pesan layar. |
| Di mana PPT atau video biasanya ditemukan dan apa yang menandakan kontennya benar? | Minta peserta mendemonstrasikan satu materi nyata dari HP. Catat judul, topik, petunjuk yang dipakai, dan apakah konten terbuka. |
| Apakah tanggal sulit ditemukan atau belum diisi di tugas yang dimaksud? | Minta satu contoh dari masing-masing kondisi bila tersedia. Catat sumber tanggal yang dipakai mahasiswa, termasuk WhatsApp jika relevan. |
| Bagaimana alur aktual setelah memilih file dan apa yang ditampilkan setelah kuis dikirim? | Periksa contoh tugas dan kuis pada perangkat yang dipakai. Catat status per tahap, termasuk perbedaan simpan dan kirim jika berlaku. Gunakan contoh yang aman untuk didemokan. |
| Apakah kelas dan status pekerjaan juga jadi prioritas bagi peserta lain? | Tanyakan prioritas tanpa membacakan jawaban Yahya. Tinjau pola yang berulang dan catat pengalaman yang berbeda. |

## 8. Keputusan yang bisa mulai diuji di prototipe

### Struktur layar dan prinsip IMK

| Usulan | Penerapan di wireframe | Prinsip IMK dan bukti yang dicari |
|---|---|---|
| **Beranda setelah masuk** | Tampilkan akses ke Kelas Saya dan ringkasan aktivitas yang perlu ditindaklanjuti. Buat identitas akun dan semester mudah dikenali bila datanya tersedia. | Visibilitas status sistem dan pengenalan. Cek apakah peserta tahu sudah masuk dan bisa menemukan kelas tanpa membuka katalog. |
| **Daftar kelas** | Tampilkan nama kelas, kode, dan kelompok jika tersedia. Sediakan pintasan untuk mencari kelas di luar daftar pribadi apabila diperlukan. | Pengenalan dan pencegahan kesalahan. Uji dengan dua kelas bernama mirip dan lihat informasi apa yang dipakai untuk membedakan. |
| **Detail kelas** | Dahulukan judul, kategori aktivitas, dan status. Susun materi berdasarkan topik per contoh kelas. Beri jenis yang eksplisit seperti PPT dan Video. | Hierarki informasi dan konsistensi. Uji apakah peserta dapat memprediksi di mana materi, tugas, dan kuis berada. |
| **Aktivitas** | Simulasikan satu tugas belum dikumpulkan, satu sudah dikirim, satu kuis yang bisa dibuka, dan satu aktivitas dengan tenggat belum ditetapkan. | Visibilitas status dan bahasa yang sesuai konteks. Minta peserta menjelaskan status dengan kata-katanya sendiri. |
| **Pengumpulan tugas** | Perlihatkan instruksi dan syarat berkas, tindakan pilih dan ganti berkas, peringatan yang bisa ditindaklanjuti, serta konfirmasi. | Umpan balik, pencegahan kesalahan, dan pemulihan. Cek apakah peserta tahu beda file terpilih dan file terkirim. |
| **Kuis** | Gunakan judul dan posisi soal yang jelas, aksi berpindah yang mudah ditemukan, dan status akhir. Tampilkan tinjauan atau waktu tersisa bila sesuai skenario. | Orientasi dan kontrol pengguna. Cek apakah peserta tahu posisi, menemukan soal belum dijawab sesuai aturan, dan memahami keadaan setelah kirim. |

### Status yang harus tetap masuk akal saat diklik

- **SSO dan tautan langsung.** Simulasikan alur berhasil masuk dan satu keadaan ketika sesi belum aktif. Untuk tautan dari WhatsApp, alurnya kembali ke aktivitas tujuan setelah masuk jika mahasiswa memiliki izin.
- **Akses kelas.** Gunakan contoh kelas yang sudah diikuti, kelas yang dapat diikuti mandiri, serta kelas yang aksesnya dibatasi. Pilih satu cabang masalah akses untuk diuji. Tampilkan pesan berdasarkan aturan kelas di contoh, termasuk langkah berikutnya bila tersedia.
- **Tenggat dan status tugas.** Tenggat menjawab kapan tugas dikumpulkan, sedangkan status menjawab apa yang sudah dilakukan mahasiswa. Beri label “Tenggat belum ditetapkan” ketika contoh memang tidak memiliki tanggal. Selama simulasi pengumpulan, jaga urutan status dari file dipilih hingga file diterima.
- **Materi.** Gunakan judul fiktif yang cukup mirip untuk menguji pencarian, ditambah penanda jenis dan topik. Pakai konten contoh yang bisa dibuka sampai peserta mengetahui judul PPT atau video yang dibuka.
- **Batas cakupan.** Fokus V1 adalah wireframe dan prototipe interaktif. Komponen seperti sinkronisasi SIAKAD, unggahan sungguhan, pemutar yang terhubung ke layanan produksi, serta aturan ujian diperlakukan sebagai konteks atau disimulasikan sesuai skenario. Validasi implementasi teknis akan membutuhkan akses dan pengujian tersendiri.

## 9. Cara menggali temuan dan menjalankan pengujian

### Panduan pengambilan data berikutnya

Tiga jawaban yang tersedia menjadi dasar arah wireframe awal. Bila dua jawaban tambahan sudah tersedia, cocokkan keduanya dengan K01–K05 dan catat apakah ada temuan baru atau pengalaman yang berbeda. Pada demonstrasi, prioritaskan menemukan kelas setelah masuk, lalu cek tenggat dan materi terbaru di HP. Catat peran Yahya secara eksplisit dan laporkan jumlah wawancara serta sesi usability testing sesuai yang benar-benar terlaksana.

**Urutan sesi wawancara yang diusulkan:** mulai dari kejadian terakhir yang masih diingat, gali konteks dan urutan langkah, lalu beri kesempatan mendemonstrasikan satu aktivitas di HP jika nyaman. Tanyakan apa yang terjadi saat peserta ragu dan bagaimana ia mengatasinya. Baru setelah itu tanyakan prioritas atau perubahan yang mereka inginkan. Gunakan sembilan pertanyaan pada bagian 2 sebagai panduan dan sesuaikan pertanyaan lanjutan dengan pengalaman setiap peserta.

| Temuan sementara | Pertanyaan netral kepada peserta | Bukti yang bisa mengubah keputusan |
|---|---|---|
| Jalur ke kelas pribadi sulit ditemukan. | “Setelah masuk, coba buka kelas yang biasa kamu pakai. Apa yang membuat kamu yakin kelasnya benar?” | Jika peserta umumnya sudah menemukan kelas pribadi dengan mudah, fokus desain bergeser ke pencarian aktivitas di dalam kelas dan akses dari tautan. |
| Status menjadi alasan peserta harus membuka banyak halaman. | “Kalau mau tahu mana yang harus kamu kerjakan hari ini, biasanya kamu cek di mana?” | Jika status sudah jelas tetapi instruksi dosen tersebar, pertimbangkan menonjolkan tautan atau konteks aktivitas di samping ringkasan status. |
| Pemilih berkas menambah langkah yang membingungkan. | “Ceritakan terakhir kali kamu harus pilih file untuk tugas. Setelah memilih, apa yang kamu lakukan?” | Jika hambatan utama terjadi sebelum pemilih berkas, seperti syarat file atau izin kelas, beri prioritas di tahap tersebut. |
| Tampilan ponsel mengganggu kenyamanan kuis. | “Di perangkat mana kamu biasanya mengerjakan kuis? Ceritakan alasan dari satu pengalaman nyata.” | Jika alasan dominan adalah aturan jenis kuis, koneksi, atau kebiasaan, bedakan penyebab tersebut dari kebutuhan keterbacaan dan navigasi. |
| Informasi tenggat tidak mudah dipastikan. | “Terakhir kali kamu ingin tahu kapan harus mengumpulkan tugas, dari mana kamu mendapat tanggalnya?” | Jika tugas memang tidak memiliki tanggal, tampilkan keadaannya dengan jelas. Jika tanggal ada tetapi tidak terlihat, uji posisi dan labelnya. |

Gunakan satu baris untuk satu kejadian. Isi hanya kolom yang diketahui dan beri tanda **Perlu dikonfirmasi** pada detail yang masih belum pasti.

| Kode peserta | Aktivitas dan perangkat | Versi SPADA dan konteks kelas | Tujuan dan langkah | Hambatan dan dampak | Cara mengatasi | Bukti atau kutipan | Implikasi sementara |
|---|---|---|---|---|---|---|---|
| Yahya | Mencari kelas/materi dari HP | SPADA baru. Kelas persis perlu dikonfirmasi. | Masuk via Chrome dan SSO, lalu cari kelas dan materi. | Ragu apakah kelas atau materi yang dipilih benar. | Minta tautan, tanya teman, atau lanjut lewat laptop. | Jawaban Q2, Q4, Q7. SP-27–SP-31 menunjukkan struktur katalog. | Uji apakah kelas pribadi mudah ditemukan setelah masuk. |

### Skenario usability testing V1

Jalankan tugas dengan prototipe di HP. Mulai dari halaman yang sama untuk peserta yang mengerjakan skenario yang sama. Baca tujuan tugas tanpa menyebut label tombol tujuan. Beri waktu kepada peserta untuk mencoba sebelum membantu dan catat bantuan yang diberikan.

| Tugas | Instruksi yang dibacakan | Bukti selesai |
|---|---|---|
| **T1 · PPT** | “Kamu mau membaca materi topik 3 dari kelas yang kamu ikuti. Buka versi PPT-nya.” | Peserta membuka kelas dan berkas PPT yang tepat, lalu dapat menyebutkan judulnya. |
| **T2 · Video** | “Buka dan putar video pembahasan untuk topik yang disebutkan.” | Peserta memilih video yang benar dan berhasil menekan kontrol putar. |
| **T3 · Pengumpulan tugas** | “Kumpulkan berkas yang disediakan untuk tugas ini. Tunjukkan bagaimana kamu tahu berkasnya sudah terkirim.” | Peserta mengirim file yang tepat dan menemukan status pengumpulan berikut nama berkas. Catat pemulihan jika skenario memuat file yang perlu diganti. |
| **T4 · Kuis** | “Kerjakan semua soal kuis contoh sampai jawabanmu dikirim. Tunjukkan bagaimana kamu tahu prosesnya selesai.” | Peserta menyelesaikan alur dan mengenali status akhir. Catat kebingungan sebelum konfirmasi atau saat berpindah soal. |

**Data per tugas:** kode peserta, tugas, hasil mandiri/dengan bantuan/gagal, lokasi hambatan, salah langkah bila ada, bantuan yang diberikan, dan komentar peserta. Jika mencatat waktu, gunakan awal dan akhir tugas yang konsisten serta simpan konteks seperti interupsi. Untuk laporan, gunakan jumlah seperti “3 dari 5 peserta” dengan angka yang berasal dari sesi aktual.

Setelah tugas selesai, gunakan instrumen **Usability Evaluation Questionnaire** oleh Kumar dan Chand. Tabel 2 berisi 35 item dalam delapan dimensi dan menggunakan skala keparahan 1–4. Sebelum sesi utama, petakan item ke bagian prototipe yang benar-benar bisa dinilai. Dokumentasikan keputusan untuk item yang belum dapat diamati dan laporkan jumlah respons yang tersedia bila merangkum hasil per item atau dimensi. Gunakan referensi Huang dan Benyoucef untuk meninjau konteks ponsel seperti ukuran layar dan konektivitas. [Kumar dan Chand, salinan paper dan Tabel 2](https://www.researchgate.net/publication/376644077_Design_and_validation_of_a_usability_evaluation_questionnaire_UEQ_for_mobile_learning_applications) · [Huang dan Benyoucef](https://doi.org/10.1007/s10209-022-00903-w)

**Aturan prioritas revisi yang diusulkan.** Dahulukan hambatan yang mencegah penyelesaian tugas. Berikutnya cek masalah yang memicu bantuan, salah langkah, atau pengulangan. Gunakan jumlah peserta yang terdampak, tingkat keparahan dari instrumen, dan cuplikan observasi untuk menentukan urutan di setiap tingkat. Hasilnya menjawab masalah mana yang perlu diprioritaskan untuk V2 pada pengujian ini.

### Peran kedua paper dalam proyek

| Rujukan | Tahap penggunaan | Penerapan |
|---|---|---|
| **Huang dan Benyoucef, Tabel 10–11** | Setelah kebutuhan dirumuskan, saat membuat wireframe dan membahas dasar desain pada artikel. | Kaitkan akses materi dengan langkah yang lebih pendek (UA18F1) dan judul bermakna (UA21F9). Kaitkan tenggat dan status dengan informasi yang cepat dipindai (UA11F1) serta umpan balik yang jelas (UA7F2). Kategori pendidikan memberi pertimbangan hierarki menu dan jalur informasi (UA20F4, UA20F9). |
| **Kumar dan Chand, Tabel 2** | Setelah prototipe bisa dicoba, saat menyusun metode evaluasi untuk artikel dan laporan. | Pilih butir yang bisa diamati, seperti CO3/CO5 untuk organisasi materi, FB1/FB4/FB6 untuk status dan pemulihan, serta NV2/NV4 dan CL3 untuk navigasi kuis. Catat adaptasi dan butir yang belum bisa dinilai. |

Urutan kerja untuk penyusunan artikel proyek adalah **wawancara → kebutuhan → rancangan dengan pertimbangan literatur → uji tugas dan kuesioner → revisi**. [Huang dan Benyoucef](https://doi.org/10.1007/s10209-022-00903-w) · [Kumar dan Chand](https://doi.org/10.1108/ITSE-07-2023-0122)

## 10. Serah terima sampai artikel dan laporan

| Tahap | Luaran | Bukti yang perlu disimpan |
|---|---|---|
| **Riset awal dan wawancara** | Ringkasan audit, jawaban peserta, dan daftar kebutuhan yang diperbarui. | Kode peserta, konteks kelas/versi, kejadian, kutipan yang akurat atau parafrasa berlabel, dan referensi tangkapan. |
| **Wireframe dan prototipe V1** | Alur ponsel yang bisa didemokan serta empat skenario inti yang bisa dicoba. | Versi prototipe, tangkapan layar per alur, asumsi aturan kelas, dan alasan keputusan yang terhubung ke kebutuhan. |
| **Usability testing** | Rekap hasil tugas, respons kuesioner, dan daftar masalah berurutan. | Skenario, kondisi tes, jumlah peserta, catatan moderator, dan cara merekap respons. |
| **Prototipe V2** | Perbaikan yang bisa ditelusuri ke temuan pengujian. | Catat temuan, bukti, perubahan layar atau alur, serta hasil uji ulang jika sempat dilakukan. |
| **Artikel** | Satu naskah berisi latar belakang, metode, hasil, diskusi, dan kesimpulan. | Nyatakan status riset awal Yahya dan perannya. Gunakan data lintas partisipan untuk temuan akhir, kemudian jelaskan bagaimana evaluasi mengarahkan revisi. Format mengikuti ketentuan dosen saat tersedia. |
| **Laporan** | Satu laporan detail dengan riwayat dua progress update dan lampiran yang dibutuhkan. | Panduan wawancara, catatan anonim, audit dan benchmarking, alur, prototipe, skenario tes, rekap evaluasi, serta log revisi. |

Progres 24 November 2026 mencakup ringkasan kebutuhan pengguna, audit awal, dan arah wireframe. Untuk progress update berikutnya, targetkan demo V1, hasil tes yang sudah terkumpul, dan prioritas revisi. Tenggat pengumpulan menurut brief adalah **7 Desember 2026, Week 16**.

**Cara memperbarui catatan saat ada temuan baru.** Tambahkan bukti pada kebutuhan yang relevan atau buat kebutuhan baru jika berbeda. Catat juga temuan yang berlawanan dan konteksnya, misalnya satu peserta membuka kelas dengan mudah dari Dashboard sementara peserta lain masuk lewat katalog. Jika keputusan desain berubah, simpan alasannya di log revisi.

| Kebutuhan atau temuan | Bukti baru | Keputusan | Layar atau alur terdampak | Cara mengecek |
|---|---|---|---|---|
| K05 · Mengenali kelas dan memahami aksesnya | Isi setelah wawancara dan demo akun mahasiswa berikutnya. | Usulan awal Kelas Saya sebagai pintasan utama. | Beranda, daftar kelas, dan alur dari tautan. | Peserta memilih kelas yang tepat dari beberapa kelas bernama mirip. |

## 11. Indeks tangkapan layar

Indeks ini memuat nama berkas asli dari folder proyek **SS Spada** dan **SS Ruang Guru Mobile**. Deskripsi bukti ada di bagian audit sehingga Markdown tetap bisa dibaca saat dikirim sendiri. Jika tim perlu melihat gambar, gunakan nama berkas untuk mencocokkan salinan. Gambar yang akan dibagikan perlu menyamarkan identitas akun dan nama berkas mahasiswa.

| ID | Layar dan unsur yang dirujuk | Berkas |
|---|---|---|
| RG-01 | Profil dan menu Lainnya | `WhatsApp Image 2026-11-23 at 00.43.29.jpeg` |
| RG-02 | Brain Academy, kartu sesi dan status | `WhatsApp Image 2026-11-23 at 00.43.30.jpeg` |
| RG-03 | Home, pintasan belajar dan laporan | `WhatsApp Image 2026-11-23 at 00.43.31.jpeg` |
| RG-04 | Home, pintasan dan unduhan | `WhatsApp Image 2026-11-23 at 00.43.31 (1).jpeg` |
| RG-05 | Pencarian, filter jenis dan keadaan kosong | `WhatsApp Image 2026-11-23 at 00.43.32.jpeg` |
| RG-06 | Pencarian, filter Semua dan keadaan kosong | `WhatsApp Image 2026-11-23 at 00.43.32 (1).jpeg` |
| RG-07 | Home, ringkasan drill dan kategori pelajaran | `WhatsApp Image 2026-11-23 at 00.43.32 (2).jpeg` |
| RG-08 | Promosi pada lapisan di atas Home | `WhatsApp Image 2026-11-23 at 00.43.33.jpeg` |
| RG-09 | Layar masuk Ruangguru | `WhatsApp Image 2026-11-23 at 00.43.33 (1).jpeg` |
| RG-10 | Pemilihan kelas atau jenjang | `WhatsApp Image 2026-11-23 at 00.43.33 (2).jpeg` |
| SP-11 | Kuis dengan pilihan ganda majemuk | `WhatsApp Image 2026-11-23 at 00.43.33 (3).jpeg` |
| SP-12 | Soal benar/salah, status, dan Next page | `WhatsApp Image 2026-11-23 at 00.43.33 (4).jpeg` |
| SP-13 | Pengaturan warna dan orientasi aksesibilitas | `WhatsApp Image 2026-11-23 at 00.43.34.jpeg` |
| SP-14 | Pengaturan konten dan ukuran teks | `WhatsApp Image 2026-11-23 at 00.43.34 (1).jpeg` |
| SP-15 | Daftar profil aksesibilitas | `WhatsApp Image 2026-11-23 at 00.43.34 (2).jpeg` |
| SP-16 | Status pengumpulan dan berkas tugas | `WhatsApp Image 2026-11-23 at 00.43.35.jpeg` |
| SP-17 | Pemilih sumber berkas perangkat | `WhatsApp Image 2026-11-23 at 00.43.35 (1).jpeg` |
| SP-18 | Dialog unggah serta metadata berkas | `WhatsApp Image 2026-11-23 at 00.43.35 (2).jpeg` |
| SP-19 | Form Add submission dan Save changes | `WhatsApp Image 2026-11-23 at 00.43.35 (3).jpeg` |
| SP-20 | Detail tugas dan tombol Add submission | `WhatsApp Image 2026-11-23 at 00.43.36.jpeg` |
| SP-21 | Daftar kuis pada ringkasan aktivitas | `WhatsApp Image 2026-11-23 at 00.43.36 (1).jpeg` |
| SP-22 | Daftar tugas dan status pengumpulan | `WhatsApp Image 2026-11-23 at 00.43.36 (2).jpeg` |
| SP-23 | Header kelas, progres, dan pintasan aktivitas | `WhatsApp Image 2026-11-23 at 00.43.36 (3).jpeg` |
| SP-24 | Bagian strategi pembelajaran | `WhatsApp Image 2026-11-23 at 00.43.37.jpeg` |
| SP-25 | Pengantar kelas dan area media | `WhatsApp Image 2026-11-23 at 00.43.37 (1).jpeg` |
| SP-26 | Detail kelas dan opsi enrolment | `WhatsApp Image 2026-11-23 at 00.43.37 (2).jpeg` |
| SP-27 | Hasil katalog dengan kategori semester | `WhatsApp Image 2026-11-23 at 00.43.37 (3).jpeg` |
| SP-28 | Filter bertingkat dan dosen | `WhatsApp Image 2026-11-23 at 00.43.38.jpeg` |
| SP-29 | Filter fakultas dan daftar dosen | `WhatsApp Image 2026-11-23 at 00.43.38 (1).jpeg` |
| SP-30 | Filter fakultas dan daftar dosen | `WhatsApp Image 2026-11-23 at 00.43.38 (2).jpeg` |
| SP-31 | Beranda SPADA baru, SSO dan pencarian | `WhatsApp Image 2026-11-23 at 00.43.38 (3).jpeg` |
