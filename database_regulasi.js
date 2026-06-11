// ==========================================
// DATABASE REGULASI ALOKASI WAKTU (JP)
// Dasar: KMA 1503/2025 & Struktur Kurikulum Madrasah (Mengadopsi Kurikulum Merdeka)
// Total JP Tahunan = JP per Minggu x 36 Minggu Efektif
// ==========================================

const regulasiJP = {
  "MI": {
    // Mapel Khas Madrasah (Kemenag)
    "Al-Qur'an Hadis": 4, "Akidah Akhlak": 2, "Fikih": 2, "SKI": 2, "Bahasa Arab": 2,
    // Mapel Umum (Kemendikdasmen)
    "Pendidikan Pancasila": 3, "Bahasa Indonesia": 5, "Matematika": 5, "IPAS": 3, "Seni Budaya": 3, "PJOK": 3, "Bahasa Inggris": 2
  },
  "MTs": {
    // Mapel Khas Madrasah (Kemenag)
    "Al-Qur'an Hadis": 3, "Akidah Akhlak": 2, "Fikih": 2, "SKI": 2, "Bahasa Arab": 3,
    // Mapel Umum (Kemendikdasmen)
    "Pendidikan Pancasila": 3, "Bahasa Indonesia": 5, "Matematika": 5, "IPA": 4, "IPS": 3, "Bahasa Inggris": 3, "Informatika": 2, "Seni Budaya": 2, "PJOK": 3
  },
  "MA": {
    // Mapel Khas Madrasah (Kemenag) - Berlaku untuk Kelas 10, 11, 12
    "Al-Qur'an Hadis": 3, "Akidah Akhlak": 2, "Fikih": 2, "SKI": 2, "Bahasa Arab": 3,
    // Mapel Umum Wajib (Kemendikdasmen)
    "Pendidikan Pancasila": 3, "Bahasa Indonesia": 4, "Matematika": 4, "Bahasa Inggris": 3, "Informatika": 2, "Seni Budaya": 2, "PJOK": 3, "Sejarah": 2,
    // Mapel Umum Peminatan (Dipecah dari IPA & IPS sesuai permintaan)
    "Fisika": 4, "Kimia": 4, "Biologi": 4, 
    "Ekonomi": 4, "Sosiologi": 4, "Geografi": 4
  }
};

// ==========================================
// FUNGSI HELPER UNTUK MENGHITUNG JP
// ==========================================

// Mengambil JP per Minggu
function getJPPerMinggu(jenjang, mapel) {
  return regulasiJP[jenjang]?.[mapel] || 0;
}

// Menghitung Total JP Tahunan (Asumsi 36 Minggu Efektif)
function getTotalJP(jenjang, mapel) {
  const jpMinggu = getJPPerMinggu(jenjang, mapel);
  return jpMinggu * 36;
}

// Menghitung Total JP per Semester (Setengah dari Tahunan)
function getTotalJPSemester(jenjang, mapel) {
  return getTotalJP(jenjang, mapel) / 2;
}
// ==========================================
// MAPPING ELEMEN CP RESMI KURIKULUM MERDEKA
// ==========================================
const CP_ELEMENTS = {
  "Al-Qur'an Hadis": ["Membaca", "Menghafal", "Menerjemahkan", "Menelaah", "Merefleksi"],
  "Akidah Akhlak": ["Keimanan", "Akhlak Terpuji", "Akhlak Tercela", "Fiqh Akhlak"],
  "Fikih": ["Fikih Ibadah", "Fikih Muamalah", "Fikih Siyasah", "Fikih Lingkungan"],
  "SKI": ["Sejarah Nabi & Sahabat", "Peradaban Islam", "Islam Nusantara", "Tokoh Ulama"],
  "Bahasa Arab": ["Menyimak", "Membaca", "Menulis", "Berbicara", "Unsur Kebahasaan"],
  "Matematika": ["Bilangan", "Aljabar", "Pengukuran", "Geometri", "Analisis Data & Peluang"],
  "Bahasa Indonesia": ["Menyimak", "Membaca & Memirsa", "Menulis", "Berbicara & Mempresentasikan"],
  "IPA": ["Pemahaman IPA", "Keterampilan Proses IPA", "Dampak IPA"],
  "IPS": ["Pemahaman IPS", "Keterampilan IPS", "Keterampilan Berpikir Kritis"],
  "Bahasa Inggris": ["Menyimak", "Membaca & Memirsa", "Menulis", "Berbicara & Mempresentasikan"],
  "Pendidikan Pancasila": ["Pancasila", "UUD 1945", "Bhinneka Tunggal Ika", "NKRI"],
  "Informatika": ["Berpikir Komputasional", "TIK", "Sistem Komputer", "Jaringan", "Analisis Data", "Algoritma & Pemrograman"],
  "Seni Budaya": ["Mengalami", "Menciptakan", "Merefleksikan", "Menganalisis"],
  "PJOK": ["Keterampilan Gerak", "Pengetahuan Gerak", "Pengembangan Karakter"],
  "Fisika": ["Pemahaman Konsep", "Keterampilan Proses Sains", "Dampak Fisika"],
  "Kimia": ["Pemahaman Konsep", "Keterampilan Proses Sains", "Dampak Kimia"],
  "Biologi": ["Pemahaman Konsep", "Keterampilan Proses Sains", "Dampak Biologi"],
  "Ekonomi": ["Pemahaman Konsep", "Analisis Ekonomi", "Literasi Keuangan"],
  "Sosiologi": ["Pemahaman Konsep", "Penelitian Sosial", "Kesadaran Sosial"],
  "Geografi": ["Pemahaman Konsep", "Keterampilan Geospasial", "Kesadaran Lingkungan"],
  "Sejarah": ["Pemahaman Sejarah", "Berpikir Sejarah", "Kesadaran Sejarah"],
  "IPAS": ["Pemahaman IPAS", "Keterampilan Proses Sains", "Dampak IPAS"]
};
