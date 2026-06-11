// ==========================================
// STATE APLIKASI
// ==========================================
let protaData = [];
let paguJP = 0;

// ==========================================
// 1. LOGIKA DROPDOWN BERTINGKAT
// ==========================================
document.getElementById('f-jenjang').addEventListener('change', function() {
    const jenjang = this.value;
    const kelasSelect = document.getElementById('f-kelas');
    kelasSelect.innerHTML = '<option value="">Pilih Kelas</option>';
    
    if (!jenjang) return;
    
    const kelasList = jenjang === 'MI' ? ['1','2','3','4','5','6'] : 
                      jenjang === 'MTs' ? ['7','8','9'] : ['10','11','12'];
                      
    kelasList.forEach(k => {
        kelasSelect.innerHTML += `<option value="${k}">Kelas ${k}</option>`;
    });
});

document.getElementById('f-kelas').addEventListener('change', function() {
    const jenjang = document.getElementById('f-jenjang').value;
    const kelas = this.value;
    const mapelSelect = document.getElementById('f-mapel');
    mapelSelect.innerHTML = '<option value="">Pilih Mata Pelajaran</option>';
    
    if (!jenjang || !kelas) return;
    
    // Ambil mapel yang tersedia untuk jenjang tersebut dari database regulasi
    const mapelList = Object.keys(regulasiJP[jenjang] || {});
    mapelList.forEach(m => {
        mapelSelect.innerHTML += `<option value="${m}">${m}</option>`;
    });
});

// ==========================================
// 2. GENERATE PROTA (OTAK UTAMA)
// ==========================================
function generatePROTA() {
    const jenjang = document.getElementById('f-jenjang').value;
    const kelas = document.getElementById('f-kelas').value;
    const mapel = document.getElementById('f-mapel').value;
    
    if (!jenjang || !kelas || !mapel) {
        return alert('⚠️ Harap pilih Jenjang, Kelas, dan Mata Pelajaran terlebih dahulu!');
    }

    // Hitung Pagu JP (JP per minggu x 36 minggu efektif)
    const jpPerMinggu = getJPPerMinggu(jenjang, mapel);
    paguJP = getTotalJP(jenjang, mapel);
    
    // Tampilkan Info Banner
    document.getElementById('pagu-info').style.display = 'flex';
    document.getElementById('pagu-text').innerHTML = 
        `<strong>${mapel} Kelas ${kelas}</strong> memiliki beban <strong>${jpPerMinggu} JP/minggu</strong>. ` +
        `Total pagu 1 tahun (36 minggu efektif) = <strong>${paguJP} JP</strong>. Sistem otomatis mendistribusikan ke semua Bab.`;

    // Ambil semua Bab (Ganjil + Genap)
    const allBab = getSemuaBab(jenjang, mapel, kelas);
    
    if (allBab.length === 0) {
        return alert('⚠️ Data bab untuk mapel ini belum tersedia di database.');
    }

    // Auto-Distribusi JP
    protaData = [];
    const tbody = document.getElementById('prota-body');
    tbody.innerHTML = '';

    const jpPerBab = Math.floor(paguJP / allBab.length);
    let sisaJP = paguJP % allBab.length;

    allBab.forEach((bab, idx) => {
        // Tentukan Semester (Setengah pertama Ganjil, setengah kedua Genap)
        const isGanjil = idx < Math.ceil(allBab.length / 2);
        const sem = isGanjil ? 'Ganjil' : 'Genap';
        
        // Bagi JP (sisa ditambahkan ke bab paling depan)
        const jp = jpPerBab + (sisaJP > 0 ? 1 : 0);
        sisaJP = Math.max(0, sisaJP - 1);
        
        // Default Elemen CP (bisa diedit user)
        const elemenDefault = 'Memahami & Menerapkan';

        protaData.push({ no: idx + 1, bab, sem, jp, elemen: elemenDefault });
        
        // Render Baris Tabel
        const row = `
        <tr>
            <td>${idx + 1}</td>
            <td>${bab}</td>
            <td>${sem}</td>
            <td><input type="number" value="${jp}" min="1" onchange="updateJP(${idx}, this.value)" style="text-align:center; font-weight:bold;"></td>
            <td><input type="text" value="${elemenDefault}" onchange="updateElemen(${idx}, this.value)"></td>
        </tr>`;
        tbody.innerHTML += row;
    });

    validateJP();
}

// ==========================================
// 3. UPDATE & VALIDASI REAL-TIME
// ==========================================
function updateJP(idx, val) {
    protaData[idx].jp = parseInt(val) || 0;
    validateJP();
}

function updateElemen(idx, val) {
    protaData[idx].elemen = val;
}

function validateJP() {
    const total = protaData.reduce((sum, item) => sum + item.jp, 0);
    document.getElementById('total-jp').textContent = total;
    const status = document.getElementById('status-validasi');
    
    if (total === paguJP) {
        status.textContent = '✅ Sesuai Pagu'; 
        status.style.color = 'var(--primary)';
    } else if (total < paguJP) {
        status.textContent = `⚠️ Kurang ${paguJP - total} JP`; 
        status.style.color = '#f59e0b';
    } else {
        status.textContent = `❌ Melebihi ${total - paguJP} JP`; 
        status.style.color = '#ef4444';
    }
}

// ==========================================
// 4. SIMPAN DATA (HOOK KE PROMES)
// ==========================================
function savePROTA() {
    if (protaData.length === 0) return alert('⚠️ Belum ada data PROTA!');
    
    const total = protaData.reduce((sum, item) => sum + item.jp, 0);
    if (total !== paguJP) {
        return alert(`⚠️ Total JP (${total}) belum sesuai pagu regulasi (${paguJP}). Sesuaikan alokasi JP sebelum melanjutkan.`);
    }
    
    // Simpan ke LocalStorage agar bisa dibaca oleh halaman PROMES nanti
    const dataToSave = {
        jenjang: document.getElementById('f-jenjang').value,
        kelas: document.getElementById('f-kelas').value,
        mapel: document.getElementById('f-mapel').value,
        paguJP: paguJP,
        prota: protaData
    };
    localStorage.setItem('kbc_prota_data', JSON.stringify(dataToSave));
    
    alert('✅ PROTA berhasil disimpan! Data siap diproses ke halaman PROMES.');
    // Nanti di sini kita akan tambahkan logika pindah halaman ke PROMES
}
