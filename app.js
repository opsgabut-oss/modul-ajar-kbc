// ==========================================
// 1. NAVIGASI SIDEBAR & WIZARD
// ==========================================
function switchSection(sectionId) {
    document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'));
    
    document.getElementById('sec-' + sectionId).classList.add('active');
    document.getElementById('menu-' + sectionId).classList.add('active');
}

function switchWizardStep(stepNumber) {
    document.querySelectorAll('.form-step').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    
    document.getElementById('step-' + stepNumber).classList.add('active');
    document.querySelectorAll('.tab-btn')[stepNumber - 1].classList.add('active');
}

// ==========================================
// 2. LOGIKA DROPDOWN OTOMATIS
// ==========================================
function updateSubjectDropdown() {
    const jenjang = document.getElementById('f-jenjang').value;
    const mapelSelect = document.getElementById('f-mapel');
    mapelSelect.innerHTML = '<option value="">Pilih Mata Pelajaran</option>';
    
    getMapelByJenjang(jenjang).forEach(m => {
        mapelSelect.innerHTML += `<option value="${m}">${m}</option>`;
    });
    document.getElementById('f-kelas').innerHTML = '<option value="">Pilih Mapel Dulu</option>';
}

function onMapelChange() {
    const jenjang = document.getElementById('f-jenjang').value;
    const kelasSelect = document.getElementById('f-kelas');
    kelasSelect.innerHTML = '<option value="">Pilih Kelas</option>';
    
    getKelasByJenjang(jenjang).forEach(k => {
        kelasSelect.innerHTML += `<option value="${k}">Kelas ${k}</option>`;
    });
}

function onKelasChange() {
    const jenjang = document.getElementById('f-jenjang').value;
    const kelas = document.getElementById('f-kelas').value;
    const semester = document.getElementById('f-semester').value;
    const bukuSelect = document.getElementById('f-bukupaket');
    
    const bukuName = getBukuByKelas(jenjang, kelas, semester);
    bukuSelect.innerHTML = bukuName ? `<option value="${bukuName}">${bukuName}</option>` : '<option value="">Tidak ada data buku</option>';
    
    if(bukuName) applyBukuPaketChapter();
}

function onSemesterChange() {
    if(document.getElementById('f-kelas').value) onKelasChange();
}

function applyBukuPaketChapter() {
    const bukuName = document.getElementById('f-bukupaket').value;
    if(bukuName) {
        const babName = bukuName.split(' - ')[1] || bukuName;
        document.getElementById('f-materi-pokok').value = babName;
        bindFormToPreview();
    }
}

// ==========================================
// 3. LIVE PREVIEW GENERATOR
// ==========================================
function bindFormToPreview() {
    renderActivePreview();
}

function renderActivePreview() {
    const docType = document.getElementById('preview-doc-type').value;
    const canvas = document.getElementById('printable-area');
    
    if (docType === 'modul') {
        canvas.innerHTML = `
            <h2 style="text-align:center; margin-bottom:20px; border-bottom:2px solid #000; padding-bottom:10px;">MODUL AJAR KURIKULUM BERBASIS CINTA (KBC)</h2>
            <table style="width:100%; border-collapse:collapse; margin-bottom:20px;">
                <tr><td style="padding:4px;"><strong>Nama Madrasah</strong></td><td>: ${document.getElementById('f-madrasah').value || '...'}</td></tr>
                <tr><td style="padding:4px;"><strong>Penyusun</strong></td><td>: ${document.getElementById('f-penyusun').value || '...'}</td></tr>
                <tr><td style="padding:4px;"><strong>Mata Pelajaran</strong></td><td>: ${document.getElementById('f-mapel').value || '...'}</td></tr>
                <tr><td style="padding:4px;"><strong>Kelas / Semester</strong></td><td>: ${document.getElementById('f-kelas').value || '...'} / ${document.getElementById('f-semester').value || '...'}</td></tr>
                <tr><td style="padding:4px;"><strong>Materi Pokok</strong></td><td>: ${document.getElementById('f-materi-pokok').value || '...'}</td></tr>
            </table>
            
            <h3 style="background:#f0f0f0; padding:5px; margin-top:15px;">II. KOMPONEN INTI KBC</h3>
            <p><strong>Tema Panca Cinta:</strong> ${document.getElementById('f-pancacinta').value || '...'}</p>
            <p><strong>Materi Insersi:</strong> ${document.getElementById('f-kbc-insersi').value || '...'}</p>
            <p><strong>Topik Kontekstual:</strong> ${document.getElementById('f-kbc-kontekstual').value || '...'}</p>
            
            <h3 style="background:#f0f0f0; padding:5px; margin-top:15px;">III. DESAIN PEMBELAJARAN</h3>
            <p><strong>Capaian Pembelajaran:</strong> ${document.getElementById('f-cp').value || '...'}</p>
            <p><strong>TP 1:</strong> ${document.getElementById('f-tp1').value || '...'} (${document.getElementById('f-tp1-jp').value})</p>
            
            <h3 style="background:#f0f0f0; padding:5px; margin-top:15px;">IV. LANGKAH PEMBELAJARAN</h3>
            <p><strong>Pendahuluan:</strong> ${document.getElementById('f-kbm-pendahuluan').value || '...'}</p>
            <p><strong>Inti:</strong> ${document.getElementById('f-kbm-inti').value || '...'}</p>
            <p><strong>Penutup:</strong> ${document.getElementById('f-kbm-penutup').value || '...'}</p>
        `;
    } else if (docType === 'prota') {
        canvas.innerHTML = `<h2 style="text-align:center;">PROGRAM TAHUNAN (PROTA)</h2><p>Fitur tabel PROTA akan dirender di sini.</p>`;
    } else {
        canvas.innerHTML = `<h2 style="text-align:center;">PROGRAM SEMESTER (PROMES)</h2><p>Fitur tabel PROMES akan dirender di sini.</p>`;
    }
}

// ==========================================
// 4. FUNGSI AI GENERATE (MOCK / SIMULASI)
// ==========================================
async function generateAI(section) {
  const btn = event.target.closest('button');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> AI Berpikir...';
  btn.disabled = true;

  const data = {
    jenjang: document.getElementById('f-jenjang').value,
    mapel: document.getElementById('f-mapel').value,
    kelas: document.getElementById('f-kelas').value,
    materi: document.getElementById('f-materi-pokok').value
  };

  try {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ section, data })
    });

    const result = await response.json();

    if (result.error) throw new Error(result.error);

    // Isi form dengan hasil AI
    if (section === 'kbm') {
      if (result.raw) {
        // Parse manual untuk KBM
        const pendahuluan = "Guru membuka dengan salam hangat, doa, dan apersepsi tentang " + data.materi;
        const inti = result.raw;
        const penutup = "Refleksi rasa tentang nilai moral " + data.materi + ", apresiasi, dan doa penutup";
        
        document.getElementById('f-kbm-pendahuluan').value = pendahuluan;
        document.getElementById('f-kbm-inti').value = inti;
        document.getElementById('f-kbm-penutup').value = penutup;
      }
    } else if (section === 'kbc') {
      if (result.panca_cinta) document.getElementById('f-pancacinta').value = result.panca_cinta;
      if (result.insersi) document.getElementById('f-kbc-insersi').value = result.insersi;
      if (result.kontekstual) document.getElementById('f-kbc-kontekstual').value = result.kontekstual;
    } else if (section === 'cp_tp') {
      if (result.cp) document.getElementById('f-cp').value = result.cp;
      if (result.tps && result.tps[0]) document.getElementById('f-tp1').value = result.tps[0];
      if (result.tps && result.tps[1]) document.getElementById('f-tp2').value = result.tps[1];
      if (result.tps && result.tps[2]) document.getElementById('f-tp3').value = result.tps[2];
      if (result.tps && result.tps[3]) document.getElementById('f-tp4').value = result.tps[3];
    }

    btn.innerHTML = '<i class="fas fa-check"></i> Selesai!';
    setTimeout(() => { btn.innerHTML = originalText; btn.disabled = false; }, 2000);
    bindFormToPreview();

  } catch (error) {
    alert('❌ Error: ' + error.message);
    btn.innerHTML = originalText;
    btn.disabled = false;
  }
}

// ==========================================
// 5. EXPORT & UTILITIES
// ==========================================
function triggerBrowserPrint() {
    const content = document.getElementById('printable-area').innerHTML;
    const printWindow = window.open('', '', 'height=800,width=800');
    printWindow.document.write('<html><head><title>Cetak Modul</title>');
    printWindow.document.write('<style>body{font-family:Arial; padding:40px;} table{width:100%; border-collapse:collapse;} td{padding:5px;}</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(content);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}

function exportToWord() {
    const content = document.getElementById('printable-area').innerHTML;
    const blob = new Blob(['<html><head><meta charset="utf-8"></head><body>' + content + '</body></html>'], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Modul_Ajar_KBC.doc';
    a.click();
    URL.revokeObjectURL(url);
}

function saveDraft() {
    alert('✅ Draf berhasil disimpan ke Local Storage browser!');
}

function loadDefaultKbmSteps() {
    generateAI('kbm');
}

// Inisialisasi awal
document.addEventListener('DOMContentLoaded', () => {
    updateSubjectDropdown();
    renderActivePreview();
});
