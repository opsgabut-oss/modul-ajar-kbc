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
