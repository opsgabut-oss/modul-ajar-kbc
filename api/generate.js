export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { section, data } = req.body;
  const GROQ_API_KEY = process.env.GROQ_API_KEY;

  const jenjang = data.jenjang;
  const mapel = data.mapel;
  const kelas = data.kelas;
  const materi = data.materi;

  let prompt = '';

  if (section === 'kbm') {
    prompt = `Berdasarkan materi "${materi}" untuk mata pelajaran ${mapel} kelas ${kelas} ${jenjang}:

Buatkan LANGKAH PEMBELAJARAN INTI (60 menit) yang SPESIFIK dan DETAIL dengan pendekatan Deep Learning (Mindful, Meaningful, Joyful) dan Diferensiasi:

1. **Mindful (Refleksi - 10 menit)**: Aktivitas spesifik yang membuat siswa merenungkan keagungan/hikmah materi ${materi}. Berikan contoh pertanyaan pemantik atau aktivitas konkret.

2. **Meaningful (Konseptual - 20 menit)**: Penjelasan guru yang mengaitkan teori ${materi} dengan kehidupan nyata siswa. Berikan contoh konkret relevansi ${materi} dalam kehidupan sehari-hari.

3. **Joyful & Diferensiasi (Aktivitas Kelompok - 25 menit)**:
   - Diferensiasi Proses: Bagaimana membagi siswa berdasarkan gaya belajar (Visual, Auditori, Kinestetik) untuk mempelajari ${materi}
   - Diferensiasi Produk: Berikan 3-4 pilihan produk yang bisa dibuat siswa (misal: peta konsep, video pendek, presentasi, poster, drama, dll) yang spesifik tentang ${materi}
   
4. **Kolaborasi & Penguatan (5 menit)**: Bagaimana presentasi dan apresiasi dilakukan.

Gunakan bahasa Indonesia formal pedagogis. Buat sangat spesifik untuk materi ${materi}, jangan generik.`;
  }
  else if (section === 'kbc') {
    prompt = `Untuk materi "${materi}" mata pelajaran ${mapel} kelas ${kelas}:

Tentukan:
1. Tema Panca Cinta yang PALING RELEVAN (pilih 1: Cinta Allah & Rasul, Cinta Sesama, Cinta Tanah Air, Cinta Lingkungan, Cinta Ilmu)
2. Materi insersi nilai spiritual yang SPESIFIK terkait ${materi}
3. Topik pembelajaran kontekstual yang MENYENTUH HATI tentang ${materi} (buat kalimat yang emosional dan menginspirasi)

Format JSON:
{
  "panca_cinta": "nama tema",
  "insersi": "nilai spiritual spesifik",
  "kontekstual": "kalimat menyentuh hati"
}`;
  }
  else if (section === 'cp_tp') {
    prompt = `Untuk ${mapel} kelas ${kelas} ${jenjang} materi "${materi}":

Berikan:
1. Capaian Pembelajaran (CP) yang sesuai dengan fase ${kelas}
2. 4 Tujuan Pembelajaran (TP) yang SPESIFIK, terukur, dan relevan dengan materi ${materi}

Format JSON:
{
  "cp": "teks CP",
  "tps": ["TP 1", "TP 2", "TP 3", "TP 4"]
}`;
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7
      })
    });

    const result = await response.json();
    const content = result.choices[0].message.content;
    
    // Parse JSON jika perlu
    try {
      return res.status(200).json(JSON.parse(content));
    } catch {
      return res.status(200).json({ raw: content });
    }
  } catch (error) {
    console.error('AI Error:', error);
    return res.status(500).json({ error: 'Gagal generate konten AI' });
  }
}
