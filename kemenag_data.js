// Database Mata Pelajaran & Buku Paket Resmi (Sesuai KMA 450/2024)
const dataMadrasah = {
    "MI": {
        mapel: ["Al-Qur'an Hadis", "Akidah Akhlak", "Fikih", "SKI", "Bahasa Arab", "Pendidikan Pancasila", "Bahasa Indonesia", "Matematika", "IPAS", "Seni Budaya", "PJOK", "Bahasa Inggris"],
        kelas: ["1", "2", "3", "4", "5", "6"],
        buku: {
            "1": { "Ganjil": "Al-Qur'an Hadis Kelas 1 - Bab 1: Mengenal Huruf Hijaiyah", "Genap": "Al-Qur'an Hadis Kelas 1 - Bab 2: Huruf Hijaiyah Bersambung" },
            "2": { "Ganjil": "Fikih Kelas 2 - Bab 1: Tata Cara Wudhu", "Genap": "Fikih Kelas 2 - Bab 2: Tata Cara Shalat" },
            "3": { "Ganjil": "Akidah Akhlak Kelas 3 - Bab 1: Sifat Wajib Allah", "Genap": "Akidah Akhlak Kelas 3 - Bab 2: Sifat Mustahil Allah" },
            "4": { "Ganjil": "SKI Kelas 4 - Bab 1: Sejarah Nabi Muhammad SAW di Mekkah", "Genap": "SKI Kelas 4 - Bab 2: Nabi Muhammad SAW di Madinah" },
            "5": { "Ganjil": "Fikih Kelas 5 - Bab 1: Shalat Jama' dan Qashar", "Genap": "Fikih Kelas 5 - Bab 2: Puasa Wajib" },
            "6": { "Ganjil": "Al-Qur'an Hadis Kelas 6 - Bab 1: Q.S. Al-Hujurat Ayat 10", "Genap": "Al-Qur'an Hadis Kelas 6 - Bab 2: Hadis tentang Persatuan" }
        }
    },
    "MTs": {
        mapel: ["Al-Qur'an Hadis", "Akidah Akhlak", "Fikih", "SKI", "Bahasa Arab", "Pendidikan Pancasila", "Bahasa Indonesia", "Matematika", "IPA", "IPS", "Bahasa Inggris", "Informatika", "Seni Budaya", "PJOK"],
        kelas: ["7", "8", "9"],
        buku: {
            "7": { "Ganjil": "Fikih Kelas 7 - Bab 1: Ketentuan Al-Qur'an dan Hadis", "Genap": "Fikih Kelas 7 - Bab 2: Tata Cara Shalat Berjamaah" },
            "8": { "Ganjil": "Fikih Kelas 8 - Bab 1: Ketentuan Zakat", "Genap": "Fikih Kelas 8 - Bab 2: Ketentuan Haji dan Umrah" },
            "9": { "Ganjil": "Akidah Akhlak Kelas 9 - Bab 1: Iman kepada Qada dan Qadar", "Genap": "Akidah Akhlak Kelas 9 - Bab 2: Akhlak Terpuji" }
        }
    },
    "MA": {
        mapel: ["Al-Qur'an Hadis", "Akidah Akhlak", "Fikih", "SKI", "Bahasa Arab", "Pendidikan Pancasila", "Bahasa Indonesia", "Matematika", "Sejarah", "Bahasa Inggris", "Seni Budaya", "PJOK", "Informatika", "Fisika", "Kimia", "Biologi", "Ekonomi", "Sosiologi", "Geografi"],
        kelas: ["10", "11", "12"],
        buku: {
            "10": { "Ganjil": "Fikih Kelas 10 - Bab 1: Jinayah dan Hudud", "Genap": "Fikih Kelas 10 - Bab 2: Hukum Keluarga Islam" },
            "11": { "Ganjil": "SKI Kelas 11 - Bab 1: Perkembangan Islam di Indonesia", "Genap": "SKI Kelas 11 - Bab 2: Tokoh Ulama Nusantara" },
            "12": { "Ganjil": "Al-Qur'an Hadis Kelas 12 - Bab 1: Tafsir Ayat tentang Lingkungan", "Genap": "Al-Qur'an Hadis Kelas 12 - Bab 2: Hadis tentang Etos Kerja" }
        }
    }
};

// Fungsi Helper untuk mengambil data
function getMapelByJenjang(jenjang) {
    return dataMadrasah[jenjang]?.mapel || [];
}

function getKelasByJenjang(jenjang) {
    return dataMadrasah[jenjang]?.kelas || [];
}

function getBukuByKelas(jenjang, kelas, semester) {
    return dataMadrasah[jenjang]?.buku[kelas]?.[semester] || "";
}
