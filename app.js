// ==========================================
// STATE APLIKASI
// ==========================================
let protaData = [];
let paguJP = 0;
let promesData = { Ganjil: [], Genap: [] };
let currentSemester = 'Ganjil';

// ==========================================
// NAVIGASI HALAMAN (SPA)
// ==========================================
function switchPage(page) {
    document.querySelectorAll('.page-section').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'));
    
    document.getElementById('page-' + page).classList.add('active');
    event?.target?.closest('.menu-item')?.classList.add('active');
    
    if (page === 'promes') loadPROMES();
}

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
    kelasList.forEach(k => kelasSelect.innerHTML += `<option value="${k}">Kelas ${k}</option>`);
});

document.getElementById('f-kelas').addEventListener('change', function() {
    const jenjang = document.getElementById('f-jenjang').value;
    const mapelSelect = document.getElementById('f-mapel');
    mapelSelect.innerHTML = '<option value="">Pilih Mata Pelajaran</option>';
    if (!jenjang) return;
    const mapelList = Object.keys(regulasiJP[jenjang] || {});
    mapelList.forEach(m => mapelSelect.innerHTML += `<option value="${m}">${m}</option>`);
});

// ==========================================
// 2. GENERATE PROTA
// ==========================================
function generatePROTA() {
    const jenjang = document.getElementById('f-jenjang').value;
    const kelas = document.getElementById('f-kelas').value;
    const mapel = document.getElementById('f-mapel').value;
    
    if (!jenjang || !kelas || !mapel) return alert('⚠️ Harap pilih Jenjang, Kelas, dan Mata Pelajaran!');

    const jpPerMinggu = getJPPerMinggu(jenjang, mapel);
    paguJP = getTotalJP(jenjang, mapel);
    
    document.getElementById('pagu-info').style.display = 'flex';
    document.getElementById('pagu-text').innerHTML = 
        `<strong>${mapel} Kelas ${kelas}</strong> memiliki beban <strong>${jpPerMinggu} JP/minggu</strong>. Total pagu 1 tahun (36 minggu efektif) = <strong>${paguJP} JP</strong>.`;

    const allBab = getSemuaBab(jenjang, mapel, kelas);
    if (allBab.length === 0) return alert('⚠️ Data bab untuk mapel ini belum tersedia.');

    protaData = [];
    const tbody = document.getElementById('prota-body');
    tbody.innerHTML = '';

    const jpPerBab = Math.floor(paguJP / allBab.length);
    let sisaJP = paguJP % allBab.length;
    const cpList = CP_ELEMENTS[mapel] || ['Kompetensi Inti'];
    const elemenDefault = cpList.join(' & ');

    allBab.forEach((bab, idx) => {
        const isGanjil = idx < Math.ceil(allBab.length / 2);
        const sem = isGanjil ? 'Ganjil' : 'Genap';
        const jp = jpPerBab + (sisaJP > 0 ? 1 : 0);
        sisaJP = Math.max(0, sisaJP - 1);
        
        protaData.push({ no: idx + 1, bab, sem, jp, elemen: elemenDefault });
        
        tbody.innerHTML += `
        <tr>
            <td>${idx + 1}</td>
            <td>${bab}</td>
            <td>${sem}</td>
            <td><input type="number" value="${jp}" min="1" onchange="updateJP(${idx}, this.value)" style="text-align:center; font-weight:bold;"></td>
            <td><input type="text" value="${elemenDefault}" onchange="updateElemen(${idx}, this.value)"></td>
        </tr>`;
    });
    validateJP();
}

function updateJP(idx, val) { protaData[idx].jp = parseInt(val) || 0; validateJP(); }
function updateElemen(idx, val) { protaData[idx].elemen = val; }

function validateJP() {
    const total = protaData.reduce((sum, item) => sum + item.jp, 0);
    document.getElementById('total-jp').textContent = total;
    const status = document.getElementById('status-validasi');
    if (total === paguJP) { status.textContent = '✅ Sesuai Pagu'; status.style.color = 'var(--success)'; }
    else if (total < paguJP) { status.textContent = `⚠️ Kurang ${paguJP - total} JP`; status.style.color = 'var(--warning)'; }
    else { status.textContent = `❌ Melebihi ${total - paguJP} JP`; status.style.color = 'var(--error)'; }
}

// ==========================================
// 3. SIMPAN PROTA & LANJUT KE PROMES
// ==========================================
function saveAndGoPromes() {
    if (protaData.length === 0) return alert('⚠️ Generate PROTA dulu!');
    const total = protaData.reduce((sum, item) => sum + item.jp, 0);
    if (total !== paguJP) return alert(`⚠️ Total JP (${total}) belum sesuai pagu (${paguJP}).`);
    
    const dataToSave = {
        jenjang: document.getElementById('f-jenjang').value,
        kelas: document.getElementById('f-kelas').value,
        mapel: document.getElementById('f-mapel').value,
        paguJP: paguJP,
        prota: protaData
    };
    localStorage.setItem('kbc_prota_data', JSON.stringify(dataToSave));
    
    // Pindah ke halaman PROMES
    switchPage('promes');
    document.querySelectorAll('.menu-item')[1].classList.add('active');
    document.querySelectorAll('.menu-item')[0].classList.remove('active');
}

// ==========================================
// 4. LOGIKA PROMES (OTAK PEMECAHAN PERTEMUAN)
// ==========================================
function loadPROMES() {
    const saved = localStorage.getItem('kbc_prota_data');
    if (!saved) {
        document.getElementById('promes-empty').style.display = 'block';
        document.getElementById('promes-content').style.display = 'none';
        return;
    }
    
    const data = JSON.parse(saved);
    protaData = data.prota;
    paguJP = data.paguJP;
    
    // Filter bab per semester
    promesData.Ganjil = protaData.filter(item => item.sem === 'Ganjil');
    promesData.Genap = protaData.filter(item => item.sem === 'Genap');
    
    // Info Banner
    document.getElementById('promes-info-text').innerHTML = 
        `<strong>${data.mapel} Kelas ${data.kelas}</strong> | Total Pagu: <strong>${data.paguJP} JP/Tahun</strong> | ` +
        `Semester Ganjil: <strong>${promesData.Ganjil.reduce((s,i)=>s+i.jp,0)} JP</strong> | ` +
        `Semester Genap: <strong>${promesData.Genap.reduce((s,i)=>s+i.jp,0)} JP</strong>`;
    
    document.getElementById('promes-empty').style.display = 'none';
    document.getElementById('promes-content').style.display = 'block';
    
    renderPromesTable();
}

function switchSemester(sem) {
    currentSemester = sem;
    document.querySelectorAll('.sem-tab').forEach(el => el.classList.remove('active'));
    event.target.closest('.sem-tab').classList.add('active');
    renderPromesTable();
}

function renderPromesTable() {
    const data = promesData[currentSemester];
    const tbody = document.getElementById('promes-body');
    tbody.innerHTML = '';
    
    if (data.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:var(--text-muted); padding:40px;">Tidak ada bab untuk semester ${currentSemester}.</td></tr>`;
        return;
    }
    
    // Hitung JP per minggu dari regulasi
    const saved = JSON.parse(localStorage.getItem('kbc_prota_data'));
    const jpPerMinggu = getJPPerMinggu(saved.jenjang, saved.mapel);
    
    let pertemuanCounter = 1;
    let totalJP = 0;
    let totalPertemuan = 0;
    
    data.forEach((item, idx) => {
        const jumlahPertemuan = Math.ceil(item.jp / jpPerMinggu);
        const pertemuanStart = pertemuanCounter;
        const pertemuanEnd = pertemuanCounter + jumlahPertemuan - 1;
        const pertemuanRange = jumlahPertemuan === 1 ? `${pertemuanStart}` : `${pertemuanStart} - ${pertemuanEnd}`;
        
        totalJP += item.jp;
        totalPertemuan += jumlahPertemuan;
        
        tbody.innerHTML += `
        <tr>
            <td>${idx + 1}</td>
            <td><strong>${item.bab}</strong></td>
            <td style="text-align:center; font-weight:bold; color:var(--primary);">${item.jp} JP</td>
            <td style="text-align:center;"><span class="badge">${pertemuanRange}</span></td>
            <td style="text-align:center; font-weight:bold;">${jumlahPertemuan}</td>
            <td style="font-size:12px;">${item.elemen}</td>
        </tr>`;
        
        pertemuanCounter += jumlahPertemuan;
    });
    
    document.getElementById('promes-total-jp').textContent = totalJP + ' JP';
    document.getElementById('promes-total-pertemuan').textContent = totalPertemuan + ' Pertemuan';
}

// ==========================================
// 5. SIMPAN PROMES & LANJUT KE ATP
// ==========================================
function saveAndGoATP() {
    const saved = JSON.parse(localStorage.getItem('kbc_prota_data'));
    const promesToSave = {
        ...saved,
        promes: {
            Ganjil: promesData.Ganjil,
            Genap: promesData.Genap,
            jpPerMinggu: getJPPerMinggu(saved.jenjang, saved.mapel)
        }
    };
    localStorage.setItem('kbc_prota_data', JSON.stringify(promesToSave));
    alert('✅ PROMES berhasil disimpan! Fitur ATP akan segera hadir.');
}

// ==========================================
// 6. LOGIKA ATP (TUJUAN PEMBELAJARAN PER PERTEMUAN)
// ==========================================
let atpData = { Ganjil: [], Genap: [] };
let currentATPSemester = 'Ganjil';

function loadATP() {
    const saved = localStorage.getItem('kbc_prota_data');
    if (!saved) {
        document.getElementById('atp-empty').style.display = 'block';
        document.getElementById('atp-content').style.display = 'none';
        return;
    }
    
    const data = JSON.parse(saved);
    
    // Cek apakah PROMES sudah ada
    if (!data.promes) {
        document.getElementById('atp-empty').style.display = 'block';
        document.getElementById('atp-content').style.display = 'none';
        return;
    }
    
    // Generate TP untuk setiap pertemuan
    const jpPerMinggu = data.promes.jpPerMinggu;
    
    ['Ganjil', 'Genap'].forEach(sem => {
        atpData[sem] = [];
        let pertemuanCounter = 1;
        
        data.promes[sem].forEach(bab => {
            const jumlahPertemuan = Math.ceil(bab.jp / jpPerMinggu);
            
            for (let i = 0; i < jumlahPertemuan; i++) {
                const pertemuanKe = pertemuanCounter + i;
                const tp = generateTP(bab.bab, bab.elemen, pertemuanKe, jumlahPertemuan, data.mapel);
                
                atpData[sem].push({
                    bab: bab.bab,
                    pertemuan: pertemuanKe,
                    tp: tp,
                    jp: jpPerMinggu,
                    elemen: bab.elemen
                });
            }
            pertemuanCounter += jumlahPertemuan;
        });
    });
    
    // Info Banner
    const totalTP = atpData.Ganjil.length + atpData.Genap.length;
    document.getElementById('atp-info-text').innerHTML = 
        `<strong>${data.mapel} Kelas ${data.kelas}</strong> | Total: <strong>${totalTP} Tujuan Pembelajaran</strong> | ` +
        `Ganjil: ${atpData.Ganjil.length} TP | Genap: ${atpData.Genap.length} TP`;
    
    document.getElementById('atp-empty').style.display = 'none';
    document.getElementById('atp-content').style.display = 'block';
    
    renderATPTable();
}

function generateTP(bab, elemen, pertemuanKe, totalPertemuan, mapel) {
    // Pola progresif KBC: Awal → Mendalam → Aplikasi → Manifestasi
    const polaTP = [
        `Peserta didik mampu memahami konsep dasar ${bab} sebagai langkah awal menumbuhkan cinta pada ilmu`,
        `Peserta didik mampu menganalisis prinsip-prinsip ${bab} untuk memperdalam pemahaman dan keyakinan`,
        `Peserta didik mampu menerapkan konsep ${bab} dalam konteks nyata sebagai bukti penguasaan materi`,
        `Peserta didik mampu mengintegrasikan nilai-nilai ${bab} dalam kehidupan sehari-hari sebagai manifestasi cinta ilmu`
    ];
    
    // Pilih pola berdasarkan posisi pertemuan
    let polaIndex;
    if (totalPertemuan === 1) {
        polaIndex = 0; // Hanya 1 pertemuan, pakai pola awal
    } else if (pertemuanKe === 1) {
        polaIndex = 0; // Pertemuan pertama
    } else if (pertemuanKe === totalPertemuan) {
        polaIndex = 3; // Pertemuan terakhir
    } else if (pertemuanKe <= totalPertemuan / 2) {
        polaIndex = 1; // Tengah awal
    } else {
        polaIndex = 2; // Tengah akhir
    }
    
    return polaTP[polaIndex];
}

function switchATPSemester(sem) {
    currentATPSemester = sem;
    document.querySelectorAll('#atp-content .sem-tab').forEach(el => el.classList.remove('active'));
    event.target.closest('.sem-tab').classList.add('active');
    renderATPTable();
}

function renderATPTable() {
    const data = atpData[currentATPSemester];
    const tbody = document.getElementById('atp-body');
    tbody.innerHTML = '';
    
    if (data.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:var(--text-muted); padding:40px;">Tidak ada TP untuk semester ${currentATPSemester}.</td></tr>`;
        return;
    }
    
    let totalJP = 0;
    
    data.forEach((item, idx) => {
        totalJP += item.jp;
        
        tbody.innerHTML += `
        <tr>
            <td>${idx + 1}</td>
            <td style="font-size:12px;"><strong>${item.bab}</strong></td>
            <td style="text-align:center;"><span class="badge">${item.pertemuan}</span></td>
            <td>
                <textarea class="tp-input" onchange="updateTP(${idx}, this.value)" rows="2" style="width:100%; font-size:13px; line-height:1.4;">${item.tp}</textarea>
            </td>
            <td style="text-align:center; font-weight:bold; color:var(--primary);">${item.jp}</td>
            <td style="text-align:center;">
                <button class="btn-icon" onclick="regenerateTP(${idx})" title="Regenerate TP">
                    <i class="fas fa-sync-alt"></i>
                </button>
            </td>
        </tr>`;
    });
    
    document.getElementById('atp-total-tp').textContent = data.length + ' TP';
    document.getElementById('atp-total-jp').textContent = totalJP + ' JP';
}

function updateTP(idx, val) {
    atpData[currentATPSemester][idx].tp = val;
}

function regenerateTP(idx) {
    const item = atpData[currentATPSemester][idx];
    const saved = JSON.parse(localStorage.getItem('kbc_prota_data'));
    item.tp = generateTP(item.bab, item.elemen, item.pertemuan, 4, saved.mapel);
    renderATPTable();
}

function saveAndGoKKTP() {
    const saved = JSON.parse(localStorage.getItem('kbc_prota_data'));
    saved.atp = atpData;
    localStorage.setItem('kbc_prota_data', JSON.stringify(saved));
    alert('✅ ATP berhasil disimpan! Fitur KKTP akan segera hadir.');
    // Nanti: switchPage('kktp');
}

// Update fungsi switchPage untuk load ATP
const originalSwitchPage = switchPage;
switchPage = function(page) {
    originalSwitchPage(page);
    if (page === 'atp') loadATP();
};
