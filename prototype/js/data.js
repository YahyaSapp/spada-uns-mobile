/* ==========================================================================
   SPADA UNS Mobile — Data Real Mata Kuliah Semester 5 Informatika UNS
   ========================================================================== */

window.SPADA_DATA = {
  student: {
    initials: "YS",
    firstName: "Yahya",
    name: "Yahya Saputra",
    nim: "L0123089",
    prodi: "S1 Informatika UNS",
    shortProdi: "Informatika UNS",
    faculty: "FATISDA",
    email: "yahya.saputra@student.uns.ac.id",
    semester: "Semester 5",
    academicYear: "Tahun akademik 2026/2027"
  },

  // Hierarki filter resmi UNS untuk S04 · Cari kelas di UNS
  unsHierarchy: {
    faculties: [
      {
        id: "FATISDA",
        label: "FATISDA",
        fullName: "Fakultas Teknologi Informasi & Sains Data",
        available: true,
        prodis: [
          { id: "S1 Informatika", label: "S1 Informatika", available: true },
          { id: "S1 Sains Data", label: "S1 Sains Data", available: false }
        ]
      },
      {
        id: "FMIPA",
        label: "FMIPA",
        fullName: "Fakultas Matematika & IPA",
        available: false,
        prodis: [
          { id: "S1 Matematika", label: "S1 Matematika", available: false },
          { id: "S1 Statistika", label: "S1 Statistika", available: false }
        ]
      },
      {
        id: "FT",
        label: "FT",
        fullName: "Fakultas Teknik",
        available: false,
        prodis: [
          { id: "S1 Teknik Elektro", label: "S1 Teknik Elektro", available: false },
          { id: "S1 Teknik Industri", label: "S1 Teknik Industri", available: false }
        ]
      },
      {
        id: "FEB",
        label: "FEB",
        fullName: "Fakultas Ekonomi & Bisnis",
        available: false,
        prodis: [
          { id: "S1 Manajemen", label: "S1 Manajemen", available: false }
        ]
      }
    ],
    semesters: [1, 2, 3, 4, 5, 6, 7, 8]
  },

  // Seluruh 8 mata kuliah Semester 5 Informatika UNS (sesuai daftar SPADA riil)
  // Hanya Interaksi Manusia & Komputer (Kelas A) yang aktif penuh di prototipe ini
  courses: [
    {
      id: "imk-a",
      code: "TIF305",
      kelas: "Kelas A",
      title: "Interaksi Manusia & Komputer",
      lecturer: "Rini Anggrainingsih",
      faculty: "FATISDA",
      prodi: "S1 Informatika",
      semesterNum: 5,
      featured: true,
      prototypeFullAccess: true,
      accessType: "enrolled",
      enrollmentKey: null,
      activeTopic: "Pertemuan 3 · Prinsip Usability",
      totalMaterials: 6,
      meetings: [
        {
          id: "m1",
          num: "01",
          title: "Pengantar IMK",
          completedByDefault: true,
          materials: [
            {
              id: "imk-m1-ppt",
              type: "PPT",
              singlePage: true,
              title: "Konsep Dasar Interaksi Manusia & Komputer",
              fileName: "Slide_Pertemuan_1_Pengantar_IMK.pptx",
              meta: "PPT · Ringkasan Pertemuan 1",
              size: "1.4 MB",
              meetingLabel: "Pertemuan 1",
              courseLabel: "Interaksi Manusia & Komputer",
              lecturer: "Rini Anggrainingsih",
              paragraphs: [
                "Interaksi Manusia & Komputer (IMK) mempelajari bagaimana manusia berinteraksi dengan sistem digital agar setiap tugas dapat diselesaikan secara efektif, efisien, dan nyaman. Pada konteks layanan akademik seperti SPADA UNS, fokus perancangan bukan sekadar kelengkapan fitur, melainkan memastikan mahasiswa dapat langsung menemukan materi, mengumpulkan tugas, serta mengerjakan kuis tanpa kebingungan di layar ponsel.",
                "Tiga pilar utama usability menjadi tolok ukur keberhasilan rancangan antarmuka mobile: efektivitas (ketepatan menyelesaikan tugas), efisiensi (pendeknya jumlah langkah menuju tujuan), dan kepuasan pengguna (tampilan tenang, rapi, dan mudah dipindai).",
                "Pada versi mobile SPADA UNS, penyederhanaan dilakukan dengan memisahkan secara tegas kelas yang diikuti, pencarian materi pada kelas sendiri, daftar tugas aktif yang mudah dibedakan statusnya, serta kartu bukti pengumpulan yang langsung muncul setelah unggah berkas berhasil."
              ]
            },
            {
              id: "imk-m1-pdf",
              type: "PDF",
              singlePage: true,
              title: "Silabus & Rencana Pembelajaran IMK",
              fileName: "RPS_IMK_Semester5_UNS.pdf",
              meta: "PDF · 4 halaman",
              size: "820 KB",
              meetingLabel: "Pertemuan 1",
              courseLabel: "Interaksi Manusia & Komputer",
              lecturer: "Rini Anggrainingsih",
              paragraphs: [
                "Mata kuliah Interaksi Manusia & Komputer (TIF305 — Kelas A, pengampu Rini Anggrainingsih) membekali mahasiswa S1 Informatika UNS Semester 5 dengan kemampuan meriset kebutuhan pengguna, menyusun arsitektur informasi, membangun prototipe antarmuka mobile, dan mengevaluasi kegunaannya melalui pengujian langsung.",
                "Komponen penilaian terdiri atas tugas proyek riset dan audit usability (35%), kuis dan partisipasi perkuliahan (25%), serta proyek akhir perancangan ulang antarmuka aplikasi mobile berbasis data wawancara mahasiswa (40%).",
                "Rangkaian materi disusun berurutan dari pengantar IMK dan pemetaan masalah pengguna (Pertemuan 1–2), prinsip usability serta evaluasi heuristik Nielsen (Pertemuan 3), hingga teknik evaluasi prototipe memakai instrumen terukur (Pertemuan 4)."
              ]
            }
          ]
        },
        {
          id: "m2",
          num: "02",
          title: "Memahami pengguna",
          completedByDefault: false,
          materials: [
            {
              id: "imk-m2-pdf",
              type: "PDF",
              singlePage: true,
              title: "Panduan Wawancara & Pemetaan Kebutuhan",
              fileName: "Panduan_Riset_Pengguna_IMK.pdf",
              meta: "PDF · 6 halaman",
              size: "1.1 MB",
              meetingLabel: "Pertemuan 2",
              courseLabel: "Interaksi Manusia & Komputer",
              lecturer: "Rini Anggrainingsih",
              paragraphs: [
                "Wawancara kontekstual dilakukan dengan meminta mahasiswa menunjukkan langsung cara mereka membuka materi, mencari kelas, mengunggah laporan tugas, dan mengerjakan kuis melalui browser ponsel. Pengamatan langsung jauh lebih akurat dibandingkan sekadar menanyakan pendapat umum karena memperlihatkan titik ragu dan kesalahan klik yang nyata.",
                "Setiap hambatan dicatat bersama konteksnya: misalnya kesulitan membedakan kelas yang sudah diikuti dengan kelas yang memerlukan enrollment key, keraguan saat mengunggah berkas tanpa progres yang jelas, hingga ketidaknyamanan membaca soal studi kasus panjang di layar kecil.",
                "Temuan lapangan kemudian dirangkum menjadi lima kelompok kebutuhan desain (K01–K05) yang langsung dipetakan menjadi empat skenario uji utama (T1–T4) pada prototipe SPADA UNS Mobile."
              ]
            }
          ]
        },
        {
          id: "m3",
          num: "03",
          title: "Prinsip Usability & Evaluasi Heuristik",
          completedByDefault: false,
          expandedByDefault: true,
          materials: [
            {
              id: "imk-m3-ppt",
              type: "PPT",
              singlePage: false,
              isT1Target: true,
              title: "Slide Usability & Heuristik",
              fileName: "Slide_Pertemuan_3.pptx",
              meta: "PPT · 5 slide",
              size: "1.8 MB",
              meetingLabel: "Pertemuan 3",
              courseLabel: "Interaksi Manusia & Komputer",
              lecturer: "Rini Anggrainingsih",
              slides: [
                {
                  heading: "Pengantar Evaluasi Heuristik Mobile",
                  paragraphs: [
                    "Evaluasi heuristik adalah metode inspeksi cepat untuk menemukan masalah kegunaan pada antarmuka mobile sebelum prototipe diuji langsung oleh mahasiswa. Pendekatan ini memadukan 10 Heuristik Jakob Nielsen dengan prinsip navigasi mobile Huang & Benyoucef.",
                    "Pada pertemuan ini, fokus utama diarahkan pada empat alur harian mahasiswa di SPADA UNS: akses materi kuliah (PPT & video), pengenalan status kelas, pengumpulan tugas tanpa form berbelit, serta pengerjaan kuis di layar sempit."
                  ]
                },
                {
                  heading: "Visibility of System Status & Istilah Akademik",
                  paragraphs: [
                    "Sistem wajib selalu memberi tahu kondisi proses secara jelas dan tepat waktu — misalnya menampilkan progres persentase unggah berkas serta kartu bukti pengiriman segera setelah berkas diterima.",
                    "Selain itu, gunakan istilah akademik yang akrab bagi mahasiswa UNS (Kelas saya, Cari materi, Tugas, Bukti pengumpulan) alih-alih istilah teknis bawaan LMS yang membingungkan."
                  ]
                },
                {
                  heading: "Hierarki Informasi & Area Sentuh Mobile",
                  paragraphs: [
                    "Di layar selebar 390px, setiap elemen interaktif utama seperti tombol aksi, tab navigasi, dan pilihan jawaban kuis disarankan memiliki tinggi area sentuh minimal 44px agar nyaman diketuk dengan ibu jari.",
                    "Daftar pertemuan sebaiknya dikemas dalam accordion ringkas sehingga mahasiswa tidak perlu melakukan scroll terlalu panjang hanya untuk membuka materi minggu aktif."
                  ]
                },
                {
                  heading: "Pencegahan & Pemulihan Error Unggah Berkas",
                  paragraphs: [
                    "Aturan berkas (format .pdf, batas 1 berkas, ukuran maks. 20 MB) harus tampil jelas di bagian atas halaman tugas sebelum mahasiswa memilih file.",
                    "Apabila berkas yang dipilih melanggar aturan, pesan error harus menjelaskan penyebab spesifik secara ramah sekaligus langsung menyediakan tombol Ganti berkas di tempat yang sama."
                  ]
                },
                {
                  heading: "Kenyamanan Membaca & Navigasi Kuis di Ponsel",
                  paragraphs: [
                    "Soal studi kasus panjang membutuhkan ukuran huruf 14px ke atas dengan jarak antarbaris lega (line-height 1.55) agar nyaman dibaca tanpa perlu memperbesar layar.",
                    "Penyediaan drawer Nomor soal dan layar Tinjauan jawaban sebelum pengiriman akhir membantu mahasiswa memastikan seluruh soal pilihan ganda maupun esai telah terjawab lengkap."
                  ]
                }
              ]
            },
            {
              id: "imk-m3-video",
              type: "Video",
              isT2Target: true,
              title: "Studi kasus mobile usability",
              fileName: "Video_Pembahasan_Mobile_Usability.mp4",
              meta: "Video · 12:40",
              durationSeconds: 760,
              durationLabel: "12:40",
              meetingLabel: "Pertemuan 3",
              courseLabel: "Interaksi Manusia & Komputer",
              lecturer: "Rini Anggrainingsih",
              description: "Evaluasi alur pencarian materi, unggah tugas, dan pengerjaan kuis pada layar ponsel bersama Rini Anggrainingsih.",
              chapters: [
                { time: 0, label: "00:00", title: "Masalah navigasi LMS di ponsel" },
                { time: 250, label: "04:10", title: "Hierarki tugas & umpan balik unggah" },
                { time: 525, label: "08:45", title: "Keterbacaan soal kuis layar kecil" }
              ]
            }
          ]
        },
        {
          id: "m4",
          num: "04",
          title: "Evaluasi antarmuka",
          completedByDefault: false,
          materials: [
            {
              id: "imk-m4-pdf",
              type: "PDF",
              singlePage: true,
              title: "Instrumen Evaluasi Kumar & Chand (Skala 1–4)",
              fileName: "Instrumen_Evaluasi_Prototipe_V1.pdf",
              meta: "PDF · 5 halaman",
              size: "960 KB",
              meetingLabel: "Pertemuan 4",
              courseLabel: "Interaksi Manusia & Komputer",
              lecturer: "Rini Anggrainingsih",
              paragraphs: [
                "Instrumen evaluasi prototipe V1 mengadaptasi kuesioner evaluasi mobile learning Kumar & Chand dengan skala Likert 1 hingga 4 (tanpa nilai tengah netral) agar responden memberikan sikap yang tegas terhadap kemudahan navigasi, kejelasan umpan balik unggahan, serta keterbacaan kuis di ponsel.",
                "Setiap responden mahasiswa Informatika UNS diminta menyelesaikan empat tugas utama (T1–T4) secara mandiri di ponselnya masing-masing, kemudian mengisi kuesioner evaluasi dan menuliskan catatan perbaikan prioritas untuk iterasi berikutnya."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "etika-c",
      code: "TIF302",
      kelas: "Kelas C",
      title: "Etika Profesi",
      lecturer: "Haryono Setiadi",
      faculty: "FATISDA",
      prodi: "S1 Informatika",
      semesterNum: 5,
      featured: false,
      prototypeFullAccess: false,
      accessType: "key",
      enrollmentKey: "EP-2026",
      totalMaterials: 6,
      meetings: []
    },
    {
      id: "pcd-c",
      code: "TIF304",
      kelas: "Kelas C",
      title: "Pengolahan Citra Digital",
      lecturer: "Herdito Ibnu Dewangkoro",
      faculty: "FATISDA",
      prodi: "S1 Informatika",
      semesterNum: 5,
      featured: false,
      prototypeFullAccess: false,
      accessType: "key",
      enrollmentKey: "PCD-2026",
      totalMaterials: 8,
      meetings: []
    },
    {
      id: "sister-a",
      code: "TIF306",
      kelas: "Kelas A",
      title: "Sistem Terdistribusi",
      lecturer: "Wisnu Widiarto",
      faculty: "FATISDA",
      prodi: "S1 Informatika",
      semesterNum: 5,
      featured: false,
      prototypeFullAccess: false,
      accessType: "key",
      enrollmentKey: "ST-2026",
      totalMaterials: 6,
      meetings: []
    },
    {
      id: "ro-a",
      code: "TIF307",
      kelas: "Kelas A",
      title: "Riset Operasi",
      lecturer: "Bambang Harjito",
      faculty: "FATISDA",
      prodi: "S1 Informatika",
      semesterNum: 5,
      featured: false,
      prototypeFullAccess: false,
      accessType: "key",
      enrollmentKey: "RO-2026",
      totalMaterials: 6,
      meetings: []
    },
    {
      id: "tg-a",
      code: "TIF309",
      kelas: "Kelas A",
      title: "Teori Game",
      lecturer: "Nughthoh Arfawi Kurdhi",
      faculty: "FATISDA",
      prodi: "S1 Informatika",
      semesterNum: 5,
      featured: false,
      prototypeFullAccess: false,
      accessType: "key",
      enrollmentKey: "TG-2026",
      totalMaterials: 6,
      meetings: []
    },
    {
      id: "ml-a",
      code: "TIF311",
      kelas: "Kelas A",
      title: "Machine Learning",
      lecturer: "Shaifudin Zuhdi",
      faculty: "FATISDA",
      prodi: "S1 Informatika",
      semesterNum: 5,
      featured: false,
      prototypeFullAccess: false,
      accessType: "key",
      enrollmentKey: "ML-2026",
      totalMaterials: 8,
      meetings: []
    },
    {
      id: "dm-d",
      code: "TIF312",
      kelas: "Kelas D",
      title: "Data Mining",
      lecturer: "Wiranto",
      faculty: "FATISDA",
      prodi: "S1 Informatika",
      semesterNum: 5,
      featured: false,
      prototypeFullAccess: false,
      accessType: "key",
      enrollmentKey: "DM-2026",
      totalMaterials: 6,
      meetings: []
    },
    {
      id: "imk-b",
      code: "TIF305",
      kelas: "Kelas B",
      title: "Interaksi Manusia & Komputer",
      lecturer: "Rini Anggrainingsih",
      faculty: "FATISDA",
      prodi: "S1 Informatika",
      semesterNum: 5,
      featured: false,
      prototypeFullAccess: false,
      accessType: "restricted",
      enrollmentKey: "IMK-B-OK",
      restrictionNote: "Khusus mahasiswa kelas B. Minta izin atau enrollment key dari dosen pengampu (Rini Anggrainingsih).",
      totalMaterials: 6,
      meetings: []
    }
  ],

  tasks: [
    {
      id: "tugas-2",
      courseId: "imk-a",
      courseTag: "TIF305 · IMK Kelas A",
      title: "Tugas 2 — Audit Usability Aplikasi Mobile",
      deadline: "Besok, 23:59 WIB",
      deadlineUrgent: true,
      instruction: "Susun temuan evaluasi heuristik pada alur materi, tugas, dan kuis SPADA mobile dalam 1 berkas laporan PDF.",
      rules: {
        ext: ".pdf",
        maxFiles: 1,
        maxSizeMB: 20,
        summary: "Format .pdf · Maks. 1 berkas · Maks. 20 MB"
      },
      sampleValid: {
        name: "Audit_Usability_IMK_Kelompok9.pdf",
        sizeMB: 2.4
      },
      sampleInvalid: {
        name: "Lampiran_Video_Mentah.mp4",
        sizeMB: 34.0
      },
      defaultSubmitted: false
    },
    {
      id: "tugas-3",
      courseId: "imk-a",
      courseTag: "TIF305 · IMK Kelas A",
      title: "Tugas 3 — Pengumpulan Draft Artikel UAS",
      deadline: "Tenggat belum ditetapkan",
      deadlineUrgent: false,
      instruction: "Unggah draft awal artikel UAS IMK Kelompok 9 sesuai template jurnal kampus setelah tenggat diumumkan dosen.",
      rules: {
        ext: ".pdf",
        maxFiles: 1,
        maxSizeMB: 20,
        summary: "Format .pdf · Maks. 1 berkas · Maks. 20 MB"
      },
      sampleValid: {
        name: "Draft_Artikel_UAS_IMK_Kelompok9.pdf",
        sizeMB: 1.9
      },
      sampleInvalid: {
        name: "Rekaman_Presentasi_Besar.mp4",
        sizeMB: 28.5
      },
      defaultSubmitted: false
    },
    {
      id: "tugas-1",
      courseId: "imk-a",
      courseTag: "TIF305 · IMK Kelas A",
      title: "Tugas 1 — Laporan Wawancara Pengguna",
      deadline: "18 Nov 2026, 23:59 WIB",
      deadlineUrgent: false,
      instruction: "Rangkum hasil wawancara kebutuhan pengguna SPADA UNS Mobile bersama 5 mahasiswa.",
      rules: {
        ext: ".pdf",
        maxFiles: 1,
        maxSizeMB: 20,
        summary: "Format .pdf · Maks. 1 berkas · Maks. 20 MB"
      },
      defaultSubmitted: true,
      defaultReceipt: {
        fileName: "Laporan_Wawancara_Kelompok9.pdf",
        sizeText: "1.8 MB",
        submittedAt: "18 November 2026 · 14:18 WIB",
        graded: true,
        score: 92,
        gradeStatus: "Dinilai · 92"
      }
    }
  ],

  quiz: {
    id: "kuis-1",
    courseId: "imk-a",
    courseTag: "TIF305 · IMK Kelas A",
    title: "Kuis 1 — Evaluasi Usability & Prinsip Desain Mobile",
    shortTitle: "Kuis 1 — Evaluasi Usability & Mobile",
    coverage: "Pertemuan 1–3 · Interaksi Manusia & Komputer",
    durationMinutes: 15,
    durationSeconds: 900,
    questions: [
      {
        id: 1,
        type: "mcq",
        tag: "KONSEP DASAR",
        shortTitle: "Visibility of system status",
        prompt: "Dalam heuristik usability Nielsen, apa tujuan utama prinsip Visibility of System Status pada aplikasi pembelajaran mobile?",
        options: [
          { key: "A", text: "Memberi informasi jelas tentang apa yang sedang terjadi melalui umpan balik tepat waktu." },
          { key: "B", text: "Menambahkan sebanyak mungkin animasi dekoratif pada setiap perpindahan layar." },
          { key: "C", text: "Menyembunyikan progres pengumpulan agar tampilan halaman terlihat lebih pendek." },
          { key: "D", text: "Menampilkan seluruh menu tingkat lanjut secara bersamaan di halaman utama." }
        ]
      },
      {
        id: 2,
        type: "mcq",
        tag: "STUDI KASUS",
        shortTitle: "Studi kasus umpan balik unggah",
        heading: "Umpan balik saat mengunggah tugas",
        prompt: "Yahya mengunggah laporan audit dari ponsel saat jaringan kampus melambat. Setelah menekan Kirim, nama berkas masih terlihat dan tombol tetap aktif sehingga ia ragu apakah laporan sudah diterima. Ia mencoba mengirim ulang, lalu membuka halaman kelas untuk mencari bukti pengumpulan. Umpan balik apa yang paling tepat ditampilkan agar Yahya yakin berkas sedang diproses hingga benar-benar terkirim?",
        options: [
          { key: "A", text: "Membiarkan tombol kirim tetap aktif agar mahasiswa dapat menekan ulang." },
          { key: "B", text: "Menampilkan progres unggah, lalu kartu bukti pengumpulan beserta waktu kirim." },
          { key: "C", text: "Langsung menutup halaman ke Beranda tanpa pesan status tambahan." },
          { key: "D", text: "Meminta mahasiswa mengisi ulang metadata penulis dan lisensi berkas." }
        ]
      },
      {
        id: 3,
        type: "mcq",
        tag: "NAVIGASI MOBILE",
        shortTitle: "Area sentuh navigasi mobile",
        prompt: "Berapa ukuran minimal area sentuh (touch target) yang direkomendasikan agar tombol dan pilihan jawaban kuis nyaman diketuk di layar ponsel?",
        options: [
          { key: "A", text: "Minimal 20 × 20 px agar muat lebih banyak tombol dalam satu baris." },
          { key: "B", text: "Minimal 28 × 28 px khusus untuk ikon navigasi bawah saja." },
          { key: "C", text: "Minimal 44 × 44 px dengan jarak antar-elemen yang cukup lega." },
          { key: "D", text: "Tidak ada batasan khusus selama teks tombol masih terbaca." }
        ]
      },
      {
        id: 4,
        type: "mcq",
        tag: "BENAR / SALAH",
        shortTitle: "Status proses vs bukti diterima",
        prompt: "Pernyataan: Indikator progress bar saat mengunggah berkas dan kartu Bukti Pengumpulan setelah terkirim memiliki peran yang berbeda, sehingga keduanya penting ditampilkan secara berurutan.",
        options: [
          { key: "Benar", text: "Benar — progress bar menunjukkan proses berjalan, sedangkan bukti pengumpulan memastikan berkas sudah diterima sistem." },
          { key: "Salah", text: "Salah — cukup tampilkan salah satunya agar layar tidak perlu diperbarui lagi." }
        ]
      },
      {
        id: 5,
        type: "essay",
        tag: "SOAL ESAI",
        shortTitle: "Refleksi perbaikan SPADA mobile",
        prompt: "Jelaskan satu perbaikan paling berdampak bagi kenyamanan mahasiswa saat memakai SPADA di ponsel.",
        placeholder: "Tulis refleksi singkatmu di sini..."
      }
    ]
  },

  evaluationFormUrl: "https://forms.gle/Hwj5pgipVbVQouN66"
};
