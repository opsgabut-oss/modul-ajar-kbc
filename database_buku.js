// ==========================================
// DATABASE LENGKAP BUKU PAKET & DAFTAR BAB
// SIKURMA (Kemenag) + SIBI (Kemendikdasmen)
// UNTUK MI, MTs, MA - SEMUA MAPEL - SEMUA KELAS
// ==========================================

const databaseBuku = {
  "MI": {
    // === MAPEL AGAMA (KEMENAG) ===
    "Al-Qur'an Hadis": {
      "1": { "Ganjil": ["Mengenal Huruf Hijaiyah", "Huruf Hijaiyah Bersambung"], "Genap": ["Surat Al-Fatihah", "Hadis Tentang Bersuci"] },
      "2": { "Ganjil": ["Surat Pendek Pilihan", "Hadis Tentang Perilaku Baik"], "Genap": ["Bacaan Mad", "Huruf Hijaiyah Berharakat"] },
      "3": { "Ganjil": ["Q.S. Al-Fil", "Q.S. Al-Kautsar"], "Genap": ["Hadis Tentang Kebersihan", "Menulis Huruf Hijaiyah"] },
      "4": { "Ganjil": ["Q.S. Al-Ma'un", "Q.S. An-Nasr"], "Genap": ["Hadis Tentang Silaturahmi", "Kisah Nabi dalam Al-Qur'an"] },
      "5": { "Ganjil": ["Q.S. Al-Asr", "Q.S. Al-Kafirun"], "Genap": ["Hadis Tentang Menuntut Ilmu", "Membaca Qiraah Sab'ah"] },
      "6": { "Ganjil": ["Q.S. Al-Hujurat: 10", "Hadis Tentang Persatuan"], "Genap": ["Q.S. Al-Maidah: 3", "Hadis Tentang Perintah Belajar"] }
    },
    "Akidah Akhlak": {
      "1": { "Ganjil": ["Rukun Iman", "Iman Kepada Allah"], "Genap": ["Iman Kepada Malaikat", "Akhlak Terpuji"] },
      "2": { "Ganjil": ["Iman Kepada Kitab", "Iman Kepada Rasul"], "Genap": ["Iman Kepada Hari Akhir", "Akhlak Tercela"] },
      "3": { "Ganjil": ["Sifat Wajib Allah", "Sifat Mustahil Allah"], "Genap": ["Sifat Jaiz Allah", "Akhlak Mulia"] },
      "4": { "Ganjil": ["Asmaul Husna", "Iman Kepada Qada dan Qadar"], "Genap": ["Qada dan Qadar dalam Kehidupan", "Akhlak Terhadap Diri Sendiri"] },
      "5": { "Ganjil": ["Iman Kepada Hari Akhir", "Tanda-Tanda Kiamat"], "Genap": ["Kiamat Sugra dan Kubra", "Akhlak Terhadap Sesama"] },
      "6": { "Ganjil": ["Qada dan Qadar", "Hikmah Beriman Kepada Qada Qadar"], "Genap": ["Akhlak Terpuji (Sabar, Syukur)", "Akhlak Tercela (Dendam, Iri Hati)"] }
    },
    "Fikih": {
      "1": { "Ganjil": ["Tata Cara Berwudhu", "Tata Cara Shalat Fardhu"], "Genap": ["Bacaan Shalat", "Shalat Berjamaah"] },
      "2": { "Ganjil": ["Tata Cara Tayamum", "Shalat Jama'ah di Sekolah"], "Genap": ["Bacaan Dzikir", "Shalat Sunnah Rawatib"] },
      "3": { "Ganjil": ["Tata Cara Mandi Wajib", "Shalat Jumat"], "Genap": ["Shalat Jamak & Qashar", "Puasa Ramadhan"] },
      "4": { "Ganjil": ["Zakat Fitrah", "Zakat Mal"], "Genap": ["Haji & Umrah", "Qurban & Aqiqah"] },
      "5": { "Ganjil": ["Muamalah: Jual Beli", "Muamalah: Pinjam Meminjam"], "Genap": ["Waris Islam Dasar", "Makanan Halal & Haram"] },
      "6": { "Ganjil": ["Muamalah: Gadai & Riba", "Akad Nikah Dasar"], "Genap": ["Penyelesaian Sengketa Islam", "Fiqh Lingkungan"] }
    },
    "SKI": {
      "1": { "Ganjil": ["Kisah Nabi Adam", "Kisah Nabi Nuh"], "Genap": ["Kisah Nabi Ibrahim", "Kisah Nabi Ismail"] },
      "2": { "Ganjil": ["Kisah Nabi Musa", "Kisah Nabi Harun"], "Genap": ["Kisah Nabi Yusuf", "Kisah Nabi Ayub"] },
      "3": { "Ganjil": ["Kisah Nabi Yunus", "Kisah Nabi Zakaria"], "Genap": ["Kisah Nabi Yahya", "Kisah Nabi Isa"] },
      "4": { "Ganjil": ["Sejarah Nabi Muhammad SAW di Mekkah", "Nabi Muhammad SAW di Madinah"], "Genap": ["Khulafaur Rasyidin: Abu Bakar", "Khulafaur Rasyidin: Umar bin Khattab"] },
      "5": { "Ganjil": ["Khulafaur Rasyidin: Utsman bin Affan", "Khulafaur Rasyidin: Ali bin Abi Thalib"], "Genap": ["Perkembangan Islam di Nusantara", "Walisongo"] },
      "6": { "Ganjil": ["Kerajaan Islam di Indonesia", "Peran Ulama dalam Kemerdekaan"], "Genap": ["Sejarah Madrasah", "Tokoh-Tokoh Islam Indonesia"] }
    },
    "Bahasa Arab": {
      "1": { "Ganjil": ["At-Ta'aruf (Perkenalan)", "Al-Adawat Al-Madrasiah (Peralatan Sekolah)"], "Genap": ["Al-Alwan (Warna)", "Al-A'dad (Angka)"] },
      "2": { "Ganjil": ["Al-Usrah (Keluarga)", "Al-A'dha (Anggota Tubuh)"], "Genap": ["Al-Hayawanat (Hewan)", "An-Nabat (Tumbuhan)"] },
      "3": { "Ganjil": ["Al-Mawad Al-Ghiza'iyyah (Makanan)", "Al-Malabis (Pakaian)"], "Genap": ["Al-Bait (Rumah)", "Al-Fushul (Kelas)"] },
      "4": { "Ganjil": ["Al-A'mal Al-Yaumiyah (Kegiatan Sehari-hari)", "Al-Mawaqi' (Tempat)"], "Genap": ["Az-Zaman (Waktu)", "Al-Fushul Al-Arba'ah (Musim)"] },
      "5": { "Ganjil": ["As-Sa'ah (Jam)", "Al-As'irah (Harga)"], "Genap": ["Al-Jumal Al-Mufidah (Kalimat Bermanfaat)", "Al-Qira'ah (Membaca)"] },
      "6": { "Ganjil": ["Al-Kitabah (Menulis)", "Al-Kalam (Berbicara)"], "Genap": ["Al-Istima' (Mendengar)", "Al-Muhadatsah (Percakapan)"] }
    },
    // === MAPEL UMUM (KEMENDIKDASMEN) ===
    "Pendidikan Pancasila": {
      "1": { "Ganjil": ["Diri Sendiri", "Keluargaku"], "Genap": ["Sekolahku", "Lingkungan Sekitar"] },
      "2": { "Ganjil": ["Hak dan Kewajiban", "Aturan di Rumah"], "Genap": ["Aturan di Sekolah", "Gotong Royong"] },
      "3": { "Ganjil": ["Simbol Pancasila", "Sila Pertama"], "Genap": ["Sila Kedua", "Sila Ketiga"] },
      "4": { "Ganjil": ["Sila Keempat", "Sila Kelima"], "Genap": ["Norma dan Aturan", "Hak dan Kewajiban"] },
      "5": { "Ganjil": ["Keberagaman Budaya", "Kearifan Lokal"], "Genap": ["Demokrasi Pancasila", "Musyawarah"] },
      "6": { "Ganjil": ["Indonesia di Era Global", "Cinta Tanah Air"], "Genap": ["Bela Negara", "NKRI"] }
    },
    "Bahasa Indonesia": {
      "1": { "Ganjil": ["Membaca Huruf", "Kata Sederhana"], "Genap": ["Kalimat Sederhana", "Membaca Nyaring"] },
      "2": { "Ganjil": ["Teks Pendek", "Cerita Rakyat"], "Genap": ["Puisi Anak", "Dongeng"] },
      "3": { "Ganjil": ["Teks Deskripsi", "Teks Narasi"], "Genap": ["Teks Prosedur", "Teks Eksplanasi"] },
      "4": { "Ganjil": ["Teks Laporan", "Teks Eksposisi"], "Genap": ["Teks Argumentasi", "Teks Persuasi"] },
      "5": { "Ganjil": ["Cerpen", "Novel Remaja"], "Genap": ["Drama", "Pantun & Syair"] },
      "6": { "Ganjil": ["Teks Ilmiah Populer", "Artikel"], "Genap": ["Pidato", "Debat"] }
    },
    "Matematika": {
      "1": { "Ganjil": ["Bilangan Cacah 0-10", "Penjumlahan & Pengurangan"], "Genap": ["Bangun Datar Dasar", "Pengukuran Waktu"] },
      "2": { "Ganjil": ["Bilangan Cacah 0-100", "Perkalian & Pembagian"], "Genap": ["Bangun Ruang Sederhana", "Pengukuran Panjang & Berat"] },
      "3": { "Ganjil": ["Bilangan Cacah 0-1000", "Operasi Hitung Campuran"], "Genap": ["Pecahan Sederhana", "Bangun Datar & Simetri"] },
      "4": { "Ganjil": ["Bilangan Bulat", "Faktor & Kelipatan"], "Genap": ["Pecahan Senilai", "Bangun Ruang & Jaring-jaring"] },
      "5": { "Ganjil": ["Operasi Hitung Pecahan", "Skala & Perbandingan"], "Genap": ["Bangun Datar (Luas & Keliling)", "Statistika Dasar"] },
      "6": { "Ganjil": ["Bilangan Bulat Negatif", "Sistem Koordinat"], "Genap": ["Penyajian Data", "Peluang Sederhana"] }
    },
    "IPAS": {
      "1": { "Ganjil": ["Anggota Tubuh", "Kebutuhan Tubuh"], "Genap": ["Hewan & Tumbuhan", "Benda di Sekitarku"] },
      "2": { "Ganjil": ["Wujud Benda", "Perubahan Wujud Benda"], "Genap": ["Energi & Perubahannya", "Bumi & Tata Surya"] },
      "3": { "Ganjil": ["Bagian Tubuh Tumbuhan", "Daur Hidup Hewan"], "Genap": ["Ekosistem", "Gaya & Gerak"] },
      "4": { "Ganjil": ["Sumber Daya Alam", "Perubahan Lingkungan"], "Genap": ["Sistem Tata Surya", "Teknologi Sederhana"] },
      "5": { "Ganjil": ["Sistem Organ Tubuh", "Zat & Perubahannya"], "Genap": ["Gaya & Pesawat Sederhana", "Lingkungan Sehat"] },
      "6": { "Ganjil": ["Sistem Reproduksi", "Adaptasi Makhluk Hidup"], "Genap": ["Listrik & Magnet", "Rotasi & Revolusi Bumi"] }
    },
    "Seni Budaya": {
      "1": { "Ganjil": ["Menggambar Bebas", "Bernyanyi Lagu Anak"], "Genap": ["Menari Sederhana", "Kerajinan Tangan"] },
      "2": { "Ganjil": ["Melukis", "Musik Tradisional"], "Genap": ["Tari Daerah", "Seni Rupa 3 Dimensi"] },
      "3": { "Ganjil": ["Seni Grafis", "Lagu Daerah"], "Genap": ["Tari Kreasi", "Seni Teater"] },
      "4": { "Ganjil": ["Seni Rupa Modern", "Alat Musik Tradisional"], "Genap": ["Tari Tradisional Nusantara", "Seni Pertunjukan"] },
      "5": { "Ganjil": ["Desain Komunikasi Visual", "Musik Kontemporer"], "Genap": ["Tari Modern", "Seni Instalasi"] },
      "6": { "Ganjil": ["Fotografi Dasar", "Produksi Musik"], "Genap": ["Koreografi", "Seni Multimedia"] }
    },
    "PJOK": {
      "1": { "Ganjil": ["Gerak Dasar Lokomotor", "Permainan Sederhana"], "Genap": ["Gerak Non-Lokomotor", "Kebugaran Jasmani"] },
      "2": { "Ganjil": ["Senam Lantai", "Permainan Bola Kecil"], "Genap": ["Renang Dasar", "Atletik"] },
      "3": { "Ganjil": ["Senam Irama", "Permainan Bola Besar"], "Genap": ["Bela Diri", "Kebugaran"] },
      "4": { "Ganjil": ["Aktivitas Air", "Permainan Tradisional"], "Genap": ["Senam Artistik", "Olahraga Prestasi"] },
      "5": { "Ganjil": ["Pencak Silat", "Sepak Bola"], "Genap": ["Bola Voli", "Bulu Tangkis"] },
      "6": { "Ganjil": ["Basket", "Softball"], "Genap": ["Tenis Meja", "Catur"] }
    },
    "Bahasa Inggris": {
      "1": { "Ganjil": ["Greetings", "Numbers"], "Genap": ["Colors", "Animals"] },
      "2": { "Ganjil": ["Family", "Body Parts"], "Genap": ["Food and Drink", "Clothes"] },
      "3": { "Ganjil": ["Daily Activities", "Time"], "Genap": ["Places", "Directions"] },
      "4": { "Ganjil": ["Past Tense", "Narrative Text"], "Genap": ["Future Tense", "Descriptive Text"] },
      "5": { "Ganjil": ["Report Text", "Procedure Text"], "Genap": ["Recount Text", "Explanation Text"] },
      "6": { "Ganjil": ["Discussion Text", "Review Text"], "Genap": ["Analytical Exposition", "Hortatory Exposition"] }
    }
  },

  "MTs": {
    // === MAPEL AGAMA (KEMENAG) ===
    "Al-Qur'an Hadis": {
      "7": { "Ganjil": ["Fungsi Al-Qur'an & Hadis", "Q.S. An-Nahl: 68-69"], "Genap": ["Hadis Tentang Kejujuran", "Q.S. Ali Imran: 159"] },
      "8": { "Ganjil": ["Q.S. Al-Hujurat: 10", "Hadis Tentang Persatuan"], "Genap": ["Q.S. Al-Maidah: 3", "Hadis Tentang Toleransi"] },
      "9": { "Ganjil": ["Q.S. Ar-Rum: 41-42", "Hadis Tentang Lingkungan"], "Genap": ["Q.S. Al-Baqarah: 164", "Hadis Tentang Etos Kerja"] }
    },
    "Akidah Akhlak": {
      "7": { "Ganjil": ["Rukun Iman", "Iman Kepada Allah"], "Genap": ["Iman Kepada Malaikat", "Asmaul Husna"] },
      "8": { "Ganjil": ["Iman Kepada Kitab", "Iman Kepada Rasul"], "Genap": ["Iman Kepada Hari Akhir", "Qada dan Qadar"] },
      "9": { "Ganjil": ["Akhlak Terpuji (Tawadhu, Taat)", "Akhlak Tercela (Takabbur, Dusta)"], "Genap": ["Adab Bermedia Sosial", "Akhlak dalam Islam"] }
    },
    "Fikih": {
      "7": { "Ganjil": ["Ketentuan Al-Qur'an & Hadis", "Tata Cara Shalat Berjamaah"], "Genap": ["Shalat Jumat & Jamak", "Puasa Wajib & Sunnah"] },
      "8": { "Ganjil": ["Ketentuan Zakat", "Ketentuan Haji & Umrah"], "Genap": ["Qurban & Aqiqah", "Wakaf & Hibah"] },
      "9": { "Ganjil": ["Muamalah Ekonomi Islam", "Waris Islam"], "Genap": ["Hukum Keluarga Islam", "Etika Bermedia Sosial Islam"] }
    },
    "SKI": {
      "7": { "Ganjil": ["Sejarah Nabi Muhammad SAW", "Dakwah di Mekkah"], "Genap": ["Hijrah ke Madinah", "Piagam Madinah"] },
      "8": { "Ganjil": ["Khulafaur Rasyidin", "Bani Umayyah"], "Genap": ["Bani Abbasiyah", "Perkembangan Ilmu Pengetahuan Islam"] },
      "9": { "Ganjil": ["Islam di Nusantara", "Walisongo"], "Genap": ["Kerajaan Islam di Indonesia", "Peran Ulama dalam Kemerdekaan"] }
    },
    "Bahasa Arab": {
      "7": { "Ganjil": ["At-Ta'aruf", "Al-Usrah"], "Genap": ["Al-Madrasah", "Al-Hiwayah"] },
      "8": { "Ganjil": ["As-Sa'ah", "Al-A'mal Al-Yaumiyah"], "Genap": ["Al-Mawaqi'", "Al-Fushul"] },
      "9": { "Ganjil": ["Al-Qira'ah", "Al-Kitabah"], "Genap": ["Al-Kalam", "Al-Muhadatsah"] }
    },
    // === MAPEL UMUM (KEMENDIKDASMEN) ===
    "Pendidikan Pancasila": {
      "7": { "Ganjil": ["Norma dan Aturan", "Hak dan Kewajiban"], "Genap": ["Pancasila dalam Kehidupan", "Bhinneka Tunggal Ika"] },
      "8": { "Ganjil": ["Demokrasi Pancasila", "Musyawarah Mufakat"], "Genap": ["Otonomi Daerah", "Pemerintahan Daerah"] },
      "9": { "Ganjil": ["Indonesia di Era Global", "Cinta Tanah Air"], "Genap": ["Bela Negara", "NKRI Harga Mati"] }
    },
    "Bahasa Indonesia": {
      "7": { "Ganjil": ["Teks Deskripsi", "Teks Prosedur"], "Genap": ["Teks Laporan Hasil Observasi", "Teks Fabel"] },
      "8": { "Ganjil": ["Teks Eksposisi", "Teks Puisi"], "Genap": ["Teks Eksplanasi", "Teks Cerpen"] },
      "9": { "Ganjil": ["Teks Diskusi", "Teks Pidato"], "Genap": ["Teks Cerita Pendek", "Teks Novel"] }
    },
    "Matematika": {
      "7": { "Ganjil": ["Bilangan Bulat", "Aljabar Dasar"], "Genap": ["Persamaan Linear", "Himpunan"] },
      "8": { "Ganjil": ["Teorema Pythagoras", "Lingkaran"], "Genap": ["Bangun Ruang Sisi Lengkung", "Statistika"] },
      "9": { "Ganjil": ["Perpangkatan & Akar", "Barisan & Deret"], "Genap": ["Peluang", "Transformasi Geometri"] }
    },
    "IPA": {
      "7": { "Ganjil": ["Klasifikasi Makhluk Hidup", "Ekosistem"], "Genap": ["Tata Surya", "Lapisan Bumi"] },
      "8": { "Ganjil": ["Struktur & Fungsi Jaringan", "Sistem Gerak"], "Genap": ["Sistem Pencernaan", "Sistem Pernapasan"] },
      "9": { "Ganjil": ["Sistem Reproduksi", "Pewarisan Sifat"], "Genap": ["Listrik Statis", "Listrik Dinamis"] }
    },
    "IPS": {
      "7": { "Ganjil": ["Interaksi Sosial", "Lingkungan Hidup"], "Genap": ["Kegiatan Ekonomi", "Sejarah Indonesia Kuno"] },
      "8": { "Ganjil": ["Perdagangan Internasional", "ASEAN"], "Genap": ["Pergerakan Nasional", "Proklamasi Kemerdekaan"] },
      "9": { "Ganjil": ["Perubahan Sosial Budaya", "Globalisasi"], "Genap": ["Kerjasama Internasional", "Indonesia Maju"] }
    },
    "Bahasa Inggris": {
      "7": { "Ganjil": ["Simple Present Tense", "Descriptive Text"], "Genap": ["Present Continuous Tense", "Recount Text"] },
      "8": { "Ganjil": ["Simple Past Tense", "Narrative Text"], "Genap": ["Past Continuous Tense", "Procedure Text"] },
      "9": { "Ganjil": ["Present Perfect Tense", "Report Text"], "Genap": ["Future Tense", "Explanation Text"] }
    },
    "Informatika": {
      "7": { "Ganjil": ["Dasar-Dasar Teknologi Informasi", "Pengolahan Kata"], "Genap": ["Pengolahan Angka", "Presentasi"] },
      "8": { "Ganjil": ["Jaringan Komputer", "Internet"], "Genap": ["Pemrograman Dasar", "Algoritma"] },
      "9": { "Ganjil": ["Basis Data", "Sistem Operasi"], "Genap": ["Keamanan Informasi", "Etika Digital"] }
    },
    "Seni Budaya": {
      "7": { "Ganjil": ["Seni Rupa 2 Dimensi", "Seni Musik Tradisional"], "Genap": ["Seni Tari Tradisional", "Seni Teater"] },
      "8": { "Ganjil": ["Seni Rupa 3 Dimensi", "Musik Modern"], "Genap": ["Tari Kreasi", "Seni Pertunjukan"] },
      "9": { "Ganjil": ["Desain Grafis", "Produksi Musik Digital"], "Genap": ["Koreografi", "Seni Multimedia"] }
    },
    "PJOK": {
      "7": { "Ganjil": ["Aktivitas Kebugaran", "Permainan Bola Kecil"], "Genap": ["Senam Lantai", "Renang"] },
      "8": { "Ganjil": ["Permainan Bola Besar", "Bela Diri"], "Genap": ["Atletik", "Aktivitas Air"] },
      "9": { "Ganjil": ["Pencak Silat", "Sepak Bola"], "Genap": ["Bola Voli", "Bulu Tangkis"] }
    }
  },

  "MA": {
    // === MAPEL AGAMA (KEMENAG) ===
    "Al-Qur'an Hadis": {
      "10": { "Ganjil": ["Fungsi Al-Qur'an & Hadis", "Metode Tafsir"], "Genap": ["Ulumul Hadis", "Kritik Sanad & Matan"] },
      "11": { "Ganjil": ["Tafsir Ayat Ekonomi", "Tafsir Ayat Sosial"], "Genap": ["Tafsir Ayat Sains", "Tafsir Ayat Lingkungan"] },
      "12": { "Ganjil": ["Tafsir Ayat Politik", "Tafsir Ayat Budaya"], "Genap": ["Tafsir Ayat Pendidikan", "Tafsir Ayat Kesehatan"] }
    },
    "Akidah Akhlak": {
      "10": { "Ganjil": ["Tauhid & Syirik", "Sifat-Sifat Allah"], "Genap": ["Qada dan Qadar", "Hikmah Beriman"] },
      "11": { "Ganjil": ["Akhlak Tasawuf", "Tazkiyatun Nafs"], "Genap": ["Filsafat Akhlak", "Etika Islam"] },
      "12": { "Ganjil": ["Akhlak dalam Kehidupan Modern", "Islam dan Sains"], "Genap": ["Akhlak Lingkungan", "Akhlak Digital"] }
    },
    "Fikih": {
      "10": { "Ganjil": ["Jinayah & Hudud", "Hukum Keluarga Islam"], "Genap": ["Hukum Waris Islam", "Hukum Tata Negara Islam"] },
      "11": { "Ganjil": ["Fikih Lingkungan", "Fikih Kesehatan"], "Genap": ["Fikih Ekonomi Kontemporer", "Fikih Siyasah"] },
      "12": { "Ganjil": ["Fikih Lintas Agama", "Fikih Gender"], "Genap": ["Fikih Digital", "Fikih Kebencanaan"] }
    },
    "SKI": {
      "10": { "Ganjil": ["Peradaban Islam Klasik", "Bani Umayyah & Abbasiyah"], "Genap": ["Islam di Andalusia", "Ilmuwan Muslim"] },
      "11": { "Ganjil": ["Islam di Nusantara", "Kerajaan Islam Indonesia"], "Genap": ["Peran Ulama dalam Kemerdekaan", "Sejarah Madrasah"] },
      "12": { "Ganjil": ["Islam di Era Modern", "Organisasi Islam Indonesia"], "Genap": ["Islam dan Globalisasi", "Masa Depan Peradaban Islam"] }
    },
    "Bahasa Arab": {
      "10": { "Ganjil": ["Nahwu Dasar", "Sharaf"], "Genap": ["Balaghah", "Insya'"] },
      "11": { "Ganjil": ["Qira'ah Mutawassithah", "Maharatul Kalam"], "Genap": ["Tarjamah", "Adab"] },
      "12": { "Ganjil": ["Balaghah Lanjut", "Nahwu Lanjut"], "Genap": ["Mantiq", "Arudh"] }
    },
    // === MAPEL UMUM WAJIB (KEMENDIKDASMEN) ===
    "Pendidikan Pancasila": {
      "10": { "Ganjil": ["Pancasila sebagai Ideologi", "Nilai-Nilai Pancasila"], "Genap": ["Implementasi Pancasila", "Pancasila di Era Global"] },
      "11": { "Ganjil": ["Demokrasi dan HAM", "Rule of Law"], "Genap": ["Good Governance", "Anti Korupsi"] },
      "12": { "Ganjil": ["Globalisasi dan Nasionalisme", "Cinta Tanah Air"], "Genap": ["Bela Negara", "Indonesia Emas 2045"] }
    },
    "Bahasa Indonesia": {
      "10": { "Ganjil": ["Teks Laporan Hasil Observasi", "Teks Eksposisi"], "Genap": ["Teks Anekdot", "Teks Negosiasi"] },
      "11": { "Ganjil": ["Cerpen", "Puisi"], "Genap": ["Drama", "Resensi Buku"] },
      "12": { "Ganjil": ["Artikel Ilmiah", "Proposal"], "Genap": ["Karya Ilmiah", "Pidato"] }
    },
    "Matematika": {
      "10": { "Ganjil": ["Eksponen & Logaritma", "Persamaan & Pertidaksamaan"], "Genap": ["Fungsi", "Statistika Data"] },
      "11": { "Ganjil": ["Komposisi Fungsi", "Limit Fungsi"], "Genap": ["Turunan", "Integral"] },
      "12": { "Ganjil": ["Matriks", "Transformasi Geometri"], "Genap": ["Barisan & Deret", "Peluang"] }
    },
    "Bahasa Inggris": {
      "10": { "Ganjil": ["Narrative Text", "Descriptive Text"], "Genap": ["Recount Text", "Procedure Text"] },
      "11": { "Ganjil": ["Report Text", "Explanation Text"], "Genap": ["Discussion Text", "Review Text"] },
      "12": { "Ganjil": ["Analytical Exposition", "Hortatory Exposition"], "Genap": ["Speech", "Debate"] }
    },
    "Informatika": {
      "10": { "Ganjil": ["Berpikir Komputasional", "Teknologi Informasi"], "Genap": ["Sistem Komputer", "Jaringan"] },
      "11": { "Ganjil": ["Analisis Data", "Algoritma Pemrograman"], "Genap": ["Praktik Lintas Bidang", "Dampak Sosial TI"] },
      "12": { "Ganjil": ["Kecerdasan Buatan", "Big Data"], "Genap": ["Internet of Things", "Cyber Security"] }
    },
    "Seni Budaya": {
      "10": { "Ganjil": ["Seni Rupa Modern", "Musik Kontemporer"], "Genap": ["Tari Kontemporer", "Teater Modern"] },
      "11": { "Ganjil": ["Desain Komunikasi Visual", "Produksi Musik"], "Genap": ["Koreografi", "Seni Pertunjukan"] },
      "12": { "Ganjil": ["Seni Multimedia", "Kuratorial Seni"], "Genap": ["Manajemen Seni", "Industri Kreatif"] }
    },
    "PJOK": {
      "10": { "Ganjil": ["Kebugaran Jasmani", "Permainan Bola Besar"], "Genap": ["Senam", "Aktivitas Ritmik"] },
      "11": { "Ganjil": ["Pencak Silat", "Renang"], "Genap": ["Atletik", "Bela Diri"] },
      "12": { "Ganjil": ["Olahraga Prestasi", "Kesehatan Olahraga"], "Genap": ["Rekreasi dan Petualangan", "Gaya Hidup Sehat"] }
    },
    "Sejarah": {
      "10": { "Ganjil": ["Sejarah sebagai Ilmu", "Manusia dan Sejarah"], "Genap": ["Peradaban Awal", "Asal-Usul Manusia"] },
      "11": { "Ganjil": ["Sejarah Indonesia Kuno", "Kerajaan Hindu-Buddha"], "Genap": ["Kerajaan Islam", "Kolonialisme"] },
      "12": { "Ganjil": ["Pergerakan Nasional", "Proklamasi"], "Genap": ["Indonesia Merdeka", "Reformasi"] }
    },
    // === MAPEL PEMINATAN IPA (DIPECAH) ===
    "Fisika": {
      "10": { "Ganjil": ["Besaran & Satuan", "Kinematika Gerak Lurus"], "Genap": ["Dinamika Newton", "Usaha & Energi"] },
      "11": { "Ganjil": ["Listrik Statis", "Arus Searah"], "Genap": ["Gelombang Cahaya", "Optik Geometri"] },
      "12": { "Ganjil": ["Relativitas Khusus", "Fisika Kuantum"], "Genap": ["Fisika Inti & Radioaktivitas", "Aplikasi Fisika Modern"] }
    },
    "Kimia": {
      "10": { "Ganjil": ["Struktur Atom", "Tabel Periodik"], "Genap": ["Ikatan Kimia", "Tata Nama Senyawa"] },
      "11": { "Ganjil": ["Larutan Elektrolit", "Reaksi Redoks"], "Genap": ["Termokimia", "Laju Reaksi"] },
      "12": { "Ganjil": ["Kesetimbangan Kimia", "Asam Basa"], "Genap": ["Stoikiometri Larutan", "Kimia Koloid"] }
    },
    "Biologi": {
      "10": { "Ganjil": ["Ruang Lingkup Biologi", "Keanekaragaman Hayati"], "Genap": ["Klasifikasi Makhluk Hidup", "Ekosistem"] },
      "11": { "Ganjil": ["Sel & Jaringan", "Sistem Gerak"], "Genap": ["Sistem Sirkulasi", "Sistem Imun"] },
      "12": { "Ganjil": ["Metabolisme", "Fotosintesis"], "Genap": ["Reproduksi Sel", "Pewarisan Sifat"] }
    },
    // === MAPEL PEMINATAN IPS (DIPECAH) ===
    "Ekonomi": {
      "10": { "Ganjil": ["Konsep Dasar Ekonomi", "Permintaan & Penawaran"], "Genap": ["Pasar & Harga", "Kebijakan Moneter"] },
      "11": { "Ganjil": ["Manajemen & Kewirausahaan", "BUMN & BUMS"], "Genap": ["APBN & APBD", "Perpajakan"] },
      "12": { "Ganjil": ["Akuntansi Dasar", "Laporan Keuangan"], "Genap": ["Analisis Rasio Keuangan", "Investasi & Pasar Modal"] }
    },
    "Sosiologi": {
      "10": { "Ganjil": ["Fungsi Sosiologi", "Interaksi Sosial"], "Genap": ["Nilai & Norma", "Sosialisasi"] },
      "11": { "Ganjil": ["Perubahan Sosial", "Globalisasi"], "Genap": ["Konflik & Integrasi", "Ketimpangan Sosial"] },
      "12": { "Ganjil": ["Penelitian Sosial", "Metode Kuantitatif"], "Genap": ["Metode Kualitatif", "Laporan Penelitian"] }
    },
    "Geografi": {
      "10": { "Ganjil": ["Konsep Dasar Geografi", "Pemetaan"], "Genap": ["Penginderaan Jauh", "Sistem Informasi Geografis"] },
      "11": { "Ganjil": ["Dinamika Atmosfer", "Dinamika Hidrosfer"], "Genap": ["Dinamika Litosfer", "Dinamika Biosfer"] },
      "12": { "Ganjil": ["Sumber Daya Alam", "Ketahanan Pangan"], "Genap": ["Mitigasi Bencana", "Pembangunan Berkelanjutan"] }
    }
  }
};

// ==========================================
// FUNGSI HELPER UNTUK DROPDOWN
// ==========================================

// Mengambil daftar Bab untuk semester tertentu
function getDaftarBab(jenjang, mapel, kelas, semester) {
  return databaseBuku[jenjang]?.[mapel]?.[kelas]?.[semester] || [];
}

// Mengambil semua Bab (Ganjil + Genap) untuk PROTA
function getSemuaBab(jenjang, mapel, kelas) {
  const ganjil = getDaftarBab(jenjang, mapel, kelas, 'Ganjil');
  const genap = getDaftarBab(jenjang, mapel, kelas, 'Genap');
  return [...ganjil, ...genap];
}

// Mengecek apakah mapel tersedia untuk jenjang/kelas tertentu
function isMapelTersedia(jenjang, mapel, kelas) {
  return databaseBuku[jenjang]?.[mapel]?.[kelas] !== undefined;
}
