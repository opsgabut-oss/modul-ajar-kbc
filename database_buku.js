// ==========================================
// DATABASE BUKU PAKET & DAFTAR BAB (SIKURMA & SIBI)
// Mencakup Mapel Agama (Kemenag) & Mapel Umum (Kemendikdasmen)
// ==========================================

const databaseBuku = {
  "MI": {
    // --- MAPEL AGAMA (SIKURMA) ---
    "Al-Qur'an Hadis": {
      "1": { "Ganjil": ["Mengenal Huruf Hijaiyah", "Huruf Hijaiyah Bersambung"], "Genap": ["Surat Al-Fatihah", "Hadis Tentang Bersuci"] },
      "2": { "Ganjil": ["Surat Pendek Pilihan", "Hadis Tentang Perilaku Baik"], "Genap": ["Bacaan Mad", "Huruf Hijaiyah Berharakat"] },
      "3": { "Ganjil": ["Q.S. Al-Fil", "Q.S. Al-Kautsar"], "Genap": ["Hadis Tentang Kebersihan", "Menulis Huruf Hijaiyah"] },
      "4": { "Ganjil": ["Q.S. Al-Ma'un", "Q.S. An-Nasr"], "Genap": ["Hadis Tentang Silaturahmi", "Kisah Nabi dalam Al-Qur'an"] },
      "5": { "Ganjil": ["Q.S. Al-Asr", "Q.S. Al-Kafirun"], "Genap": ["Hadis Tentang Menuntut Ilmu", "Membaca Qiraah Sab'ah"] },
      "6": { "Ganjil": ["Q.S. Al-Hujurat: 10", "Hadis Tentang Persatuan"], "Genap": ["Q.S. Al-Maidah: 3", "Hadis Tentang Perintah Belajar"] }
    },
    "Fikih": {
      "1": { "Ganjil": ["Tata Cara Berwudhu", "Tata Cara Shalat Fardhu"], "Genap": ["Bacaan Shalat", "Shalat Berjamaah"] },
      "2": { "Ganjil": ["Tata Cara Tayamum", "Shalat Jama'ah di Sekolah"], "Genap": ["Bacaan Dzikir", "Shalat Sunnah Rawatib"] },
      "3": { "Ganjil": ["Tata Cara Mandi Wajib", "Shalat Jumat"], "Genap": ["Shalat Jamak & Qashar", "Puasa Ramadhan"] },
      "4": { "Ganjil": ["Zakat Fitrah", "Zakat Mal"], "Genap": ["Haji & Umrah", "Qurban & Aqiqah"] },
      "5": { "Ganjil": ["Muamalah: Jual Beli", "Muamalah: Pinjam Meminjam"], "Genap": ["Waris Islam Dasar", "Makanan Halal & Haram"] },
      "6": { "Ganjil": ["Muamalah: Gadai & Riba", "Akad Nikah Dasar"], "Genap": ["Penyelesaian Sengketa Islam", "Fiqh Lingkungan"] }
    },
    // --- MAPEL UMUM (SIBI / KEMENDIKDASMEN) ---
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
    }
  },

  "MTs": {
    // --- MAPEL AGAMA (SIKURMA) ---
    "Al-Qur'an Hadis": {
      "7": { "Ganjil": ["Fungsi Al-Qur'an & Hadis", "Q.S. An-Nahl: 68-69"], "Genap": ["Hadis Tentang Kejujuran", "Q.S. Ali Imran: 159"] },
      "8": { "Ganjil": ["Q.S. Al-Hujurat: 10", "Hadis Tentang Persatuan"], "Genap": ["Q.S. Al-Maidah: 3", "Hadis Tentang Toleransi"] },
      "9": { "Ganjil": ["Q.S. Ar-Rum: 41-42", "Hadis Tentang Lingkungan"], "Genap": ["Q.S. Al-Baqarah: 164", "Hadis Tentang Etos Kerja"] }
    },
    "Fikih": {
      "7": { "Ganjil": ["Ketentuan Al-Qur'an & Hadis", "Tata Cara Shalat Berjamaah"], "Genap": ["Shalat Jumat & Jamak", "Puasa Wajib & Sunnah"] },
      "8": { "Ganjil": ["Ketentuan Zakat", "Ketentuan Haji & Umrah"], "Genap": ["Qurban & Aqiqah", "Wakaf & Hibah"] },
      "9": { "Ganjil": ["Muamalah Ekonomi Islam", "Waris Islam"], "Genap": ["Hukum Keluarga Islam", "Etika Bermedia Sosial Islam"] }
    },
    // --- MAPEL UMUM (SIBI / KEMENDIKDASMEN) ---
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
    "Matematika": {
      "7": { "Ganjil": ["Bilangan Bulat", "Aljabar Dasar"], "Genap": ["Persamaan Linear", "Himpunan"] },
      "8": { "Ganjil": ["Teorema Pythagoras", "Lingkaran"], "Genap": ["Bangun Ruang Sisi Lengkung", "Statistika"] },
      "9": { "Ganjil": ["Perpangkatan & Akar", "Barisan & Deret"], "Genap": ["Peluang", "Transformasi Geometri"] }
    }
  },

  "MA": {
    // --- MAPEL AGAMA (SIKURMA) ---
    "Al-Qur'an Hadis": {
      "10": { "Ganjil": ["Fungsi Al-Qur'an & Hadis", "Metode Tafsir"], "Genap": ["Ulumul Hadis", "Kritik Sanad & Matan"] },
      "11": { "Ganjil": ["Tafsir Ayat Ekonomi", "Tafsir Ayat Sosial"], "Genap": ["Tafsir Ayat Sains", "Tafsir Ayat Lingkungan"] },
      "12": { "Ganjil": ["Tafsir Ayat Politik", "Tafsir Ayat Budaya"], "Genap": ["Tafsir Ayat Pendidikan", "Tafsir Ayat Kesehatan"] }
    },
    "Fikih": {
      "10": { "Ganjil": ["Jinayah & Hudud", "Hukum Keluarga Islam"], "Genap": ["Hukum Waris Islam", "Hukum Tata Negara Islam"] },
      "11": { "Ganjil": ["Fikih Lingkungan", "Fikih Kesehatan"], "Genap": ["Fikih Ekonomi Kontemporer", "Fikih Siyasah"] },
      "12": { "Ganjil": ["Fikih Lintas Agama", "Fikih Gender"], "Genap": ["Fikih Digital", "Fikih Kebencanaan"] }
    },
    // --- MAPEL UMUM WAJIB (SIBI) ---
    "Matematika": {
      "10": { "Ganjil": ["Eksponen & Logaritma", "Persamaan & Pertidaksamaan"], "Genap": ["Fungsi", "Statistika Data"] },
      "11": { "Ganjil": ["Komposisi Fungsi", "Limit Fungsi"], "Genap": ["Turunan", "Integral"] },
      "12": { "Ganjil": ["Matriks", "Transformasi Geometri"], "Genap": ["Barisan & Deret", "Peluang"] }
    },
    "Bahasa Indonesia": {
      "10": { "Ganjil": ["Teks Laporan Hasil Observasi", "Teks Eksposisi"], "Genap": ["Teks Anekdot", "Teks Negosiasi"] },
      "11": { "Ganjil": ["Cerpen", "Puisi"], "Genap": ["Drama", "Resensi Buku"] },
      "12": { "Ganjil": ["Artikel Ilmiah", "Proposal"], "Genap": ["Karya Ilmiah", "Pidato"] }
    },
    // --- MAPEL PEMINATAN IPA (Dipecah) ---
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
    // --- MAPEL PEMINATAN IPS (Dipecah) ---
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
