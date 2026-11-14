# Web Portofolio - Ananda Satria Ariyanto (React + Vite + Tailwind CSS)

Web portofolio modern yang dikembangkan dengan teknologi **React 19**, **Vite**, dan **Tailwind CSS**, dengan referensi desain dari [https://anandasatriaa.github.io/](https://anandasatriaa.github.io/).

---

## 🚀 Fitur Unggulan

- ⚡ **React + Vite Ultra Fast**: Hot Module Replacement (HMR) instan dan build produksi super cepat (< 120ms).
- 🎨 **Desain Identik & Ditingkatkan**: Layout, tipografi (Inter), warna utama (`#6d28d9`), dan animasi SVG Blob yang setia pada referensi.
- 🌓 **Dark & Light Mode**: Tombol toggle tema dengan penyimpanan otomatis di `localStorage`.
- 📱 **100% Responsif**: Navigasi hamburger mulus untuk mobile tablet, dan desktop layout.
- 🔍 **Filter & Pencarian Proyek**: Filter berdasarkan kategori (*Web App, Internal System, Website, Visualisasi Data, Self Service*) serta pencarian instan berdasarkan judul/teknologi.
- 🖼️ **Image Fallback Ready**: Komponen `ImageWithFallback` sehingga jika ada foto yang belum diupload atau sedang dimuat, tampilan UI tetap rapi tanpa broken image.
- 📁 **Data Terpusat**: Semua konten (biodata, proyek, riwayat pendidikan, pengalaman kerja, blog, dan kontak) dapat diubah langsung di satu file: [`src/data/portfolioData.js`](src/data/portfolioData.js).

---

## 🛠️ Cara Menjalankan Proyek

Masuk ke folder `portofolio`:

```bash
cd /Users/nugroho/Project/portofolio
```

### 1. Menjalankan Server Development
```bash
npm run dev
```
Buka browser di alamat yang tertera (biasanya `http://localhost:5173`).

### 2. Build untuk Produksi
```bash
npm run build
```

### 3. Menjalankan Pratinjau Build
```bash
npm run preview
```

---

## 📸 Panduan Upload & Ganti Foto

Semua aset gambar diletakkan di dalam folder `public/dist/img/`. Anda cukup menimpa file gambar yang diinginkan dengan foto Anda sendiri:

1. **Foto Profil Utama (Hero Section)**:
   - Lokasi: `public/dist/img/satria-1.png`
   - Rekomendasi: Foto berformat PNG transparan (tanpa background) beresolusi ~800x800 px.

2. **Foto / Screenshot Proyek (Portfolio)**:
   - Lokasi: `public/dist/img/portfolio/`
   - Format: PNG/JPG/WebP aspek rasio 16:9 (misal 1280x720 px).

3. **Logo Pendidikan & Bootcamp**:
   - Lokasi: `public/dist/img/pendidikan/`

4. **Logo Pengalaman Kerja / Perusahaan**:
   - Lokasi: `public/dist/img/pengalaman/`

5. **Cover Artikel Blog**:
   - Lokasi: `public/dist/img/blog/`

---

## 📂 Struktur Direktori

```text
portofolio/
├── public/
│   └── dist/
│       └── img/                # Aset gambar & foto
│           ├── blog/
│           ├── pendidikan/
│           ├── pengalaman/
│           ├── portfolio/
│           └── satria-1.png    # Foto profil Hero
├── src/
│   ├── components/
│   │   ├── About.jsx           # Section Tentang Saya (4 Card Grid)
│   │   ├── BackToTop.jsx       # Tombol kembali ke atas
│   │   ├── Blog.jsx            # Section Tulisan Blog
│   │   ├── Contact.jsx         # Section Kontak & Form
│   │   ├── Education.jsx       # Section Pendidikan & Bootcamp
│   │   ├── Experience.jsx      # Section Pengalaman Kerja
│   │   ├── Footer.jsx          # Footer & Copyright
│   │   ├── Hero.jsx            # Hero banner & Blob SVG
│   │   ├── ImageWithFallback.jsx # Placeholder gambar cerdas
│   │   ├── Navbar.jsx          # Fixed header & Mobile menu
│   │   ├── Portfolio.jsx       # Grid project & filter modal
│   │   └── SocialIcons.jsx     # Ikon SVG sosial media
│   ├── data/
│   │   └── portfolioData.js    # Data konten portofolio lengkap
│   ├── App.jsx                 # Komponen utama & state tema
│   ├── index.css               # Konfigurasi Tailwind v4
│   └── main.jsx                # Entry point React
├── index.html
├── package.json
└── vite.config.js
```
# portofolio
