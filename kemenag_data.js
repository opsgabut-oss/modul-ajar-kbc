// ==========================================
// DATABASE LENGKAP KURIKULUM MADRASAH (KMA 450/2024)
// Mencakup MI, MTs, MA - Semester Ganjil & Genap
// ==========================================

const dataMadrasah = {
    "MI": {
        mapel: ["Al-Qur'an Hadis", "Akidah Akhlak", "Fikih", "SKI", "Bahasa Arab", "Pendidikan Pancasila", "Bahasa Indonesia", "Matematika", "IPAS", "Seni Budaya", "PJOK", "Bahasa Inggris"],
        kelas: ["1", "2", "3", "4", "5", "6"],
        buku: {
            "1": {
                "Ganjil": "Al-Qur'an Hadis: Bab 1 Mengenal Huruf Hijaiyah, Bab 2 Huruf Hijaiyah Bersambung",
                "Genap": "Al-Qur'an Hadis: Bab 3 Surat Al-Fatihah, Bab 4 Hadis Tentang Bersuci"
            },
            "2": {
                "Ganjil": "Fikih: Bab 1 Tata Cara Wudhu, Bab 2 Tata Cara Shalat Fardhu",
                "Genap": "Fikih: Bab 3 Bacaan Shalat, Bab 4 Shalat Berjamaah"
            },
            "3": {
                "Ganjil": "Akidah Akhlak: Bab 1 Sifat Wajib Allah, Bab 2 Sifat Mustahil Allah",
                "Genap": "Akidah Akhlak: Bab 3 Sifat Jaiz Allah, Bab 4 Akhlak Terpuji (Jujur & Amanah)"
            },
            "4": {
                "Ganjil": "SKI: Bab 1 Sejarah Nabi Muhammad SAW di Mekkah, Bab 2 Nabi Muhammad SAW di Madinah",
                "Genap": "SKI: Bab 3 Khulafaur Rasyidin, Bab 4 Perkembangan Islam di Nusantara"
            },
            "5": {
                "Ganjil": "Bahasa Arab: Bab 1 At-Ta'aruf (Perkenalan), Bab 2 Al-Usrah (Keluarga)",
                "Genap": "Bahasa Arab: Bab 3 Al-Madrasah (Sekolah), Bab 4 Al-Hiwayah (Hobi)"
            },
            "6": {
                "Ganjil": "Al-Qur'an Hadis: Bab 1 Q.S. Al-Hujurat Ayat 10, Bab 2 Hadis tentang Persatuan",
                "Genap": "Al-Qur'an Hadis: Bab 3 Q.S. Al-Maidah Ayat 3, Bab 4 Hadis tentang Perintah Belajar"
            }
        }
    },
    "MTs": {
        mapel: ["Al-Qur'an Hadis", "Akidah Akhlak", "Fikih", "SKI", "Bahasa Arab", "Pendidikan Pancasila", "Bahasa Indonesia", "Matematika", "IPA", "IPS", "Bahasa Inggris", "Informatika", "Seni Budaya", "PJOK"],
        kelas: ["7", "8", "9"],
        buku: {
            "7": {
                "Ganjil": "Al-Qur'an Hadis: Bab 1 Ketentuan Al-Qur'an dan Hadis, Bab 2 Q.S. An-Nahl Ayat 68-69",
                "Genap": "Al-Qur'an Hadis: Bab 3 Hadis tentang Perilaku Jujur, Bab 4 Q.S. Ali Imran Ayat 159"
            },
            "8": {
                "Ganjil": "Fikih: Bab 1 Ketentuan Zakat, Bab 2 Ketentuan Haji dan Umrah",
                "Genap": "Fikih: Bab 3 Ketentuan Qurban dan Aqiqah, Bab 4 Wakaf dan Hibah"
            },
            "9": {
                "Ganjil": "Akidah Akhlak: Bab 1 Iman kepada Qada dan Qadar, Bab 2 Akhlak Terpuji (Tawadhu, Taat, Qanaah, Tasamuh)",
                "Genap": "Akidah Akhlak: Bab 3 Akhlak Tercela (Takabbur, Fitnah, Hasad), Bab 4 Adab Bermedia Sosial"
            }
        }
    },
    "MA": {
        mapel: ["Al-Qur'an Hadis", "Akidah Akhlak", "Fikih", "SKI", "Bahasa Arab", "Pendidikan Pancasila", "Bahasa Indonesia", "Matematika", "Sejarah", "Bahasa Inggris", "Seni Budaya", "PJOK", "Informatika", "Fisika", "Kimia", "Biologi", "Ekonomi", "Sosiologi", "Geografi"],
        kelas: ["10", "11", "12"],
        buku: {
            "10": {
                "Ganjil": "Al-Qur'an Hadis: Bab 1 Fungsi Al-Qur'an, Bab 2 Metode Tafsir",
                "Genap": "Al-Qur'an Hadis: Bab 3 Ulumul Hadis, Bab 4 Kritik Sanad dan Matan"
            },
            "11": {
                "Ganjil": "Fikih: Bab 1 Jinayah dan Hudud, Bab 2 Hukum Keluarga Islam (Munakahat)",
                "Genap": "Fikih: Bab 3 Hukum Waris Islam (Faraidh), Bab 4 Hukum Tata Negara Islam (Siyasah)"
            },
            "12": {
                "Ganjil": "SKI: Bab 1 Perkembangan Islam di Timur Tengah, Bab 2 Perkembangan Islam di Indonesia",
                "Genap": "SKI: Bab 3 Tokoh Ulama Nusantara, Bab 4 Peran Madrasah dalam Sejarah"
            }
        }
    }
};

// ==========================================
// FUNGSI HELPER UNTUK DROPDOWN
// ==========================================

function getMapelByJenjang(jenjang) {
    return dataMadrasah[jenjang]?.mapel || [];
}

function getKelasByJenjang(jenjang) {
    return dataMadrasah[jenjang]?.kelas || [];
}

// Fungsi ini mengambil daftar Bab untuk dropdown "Rujukan Buku Paket"
function getBukuByKelas(jenjang, kelas, semester) {
    // Mengembalikan string panjang berisi daftar Bab, atau array jika ingin dipisah
    return dataMadrasah[jenjang]?.buku[kelas]?.[semester] || "Belum ada data buku untuk kelas ini.";
}

// Fungsi untuk memisahkan Bab jika ingin dijadikan opsi dropdown terpisah
function getDaftarBab(jenjang, kelas, semester) {
    const dataBuku = getBukuByKelas(jenjang, kelas, semester);
    if (!dataBuku || dataBuku.startsWith("Belum ada")) return [];
    // Memisahkan berdasarkan koma jika ada banyak bab
    return dataBuku.split(',').map(bab => bab.trim());
}
