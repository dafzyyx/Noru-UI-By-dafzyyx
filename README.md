# NORUUI — Liquid Glass

Design system / landing page HTML, CSS, dan JavaScript dengan gaya **Liquid Glass**.

Dibuat oleh **dafzyyx**.

## ✨ Fitur

- Liquid Glass / glassmorphism
- Soft white + blue aesthetic
- Responsive mobile & desktop
- Animated liquid background
- Scroll reveal animation
- Animated gradient
- Progress animation
- Tombol dengan animasi ombang-ambing berbeda
- Random animation delay agar tombol tidak bergerak bersamaan
- Tanpa framework
- Tanpa dependency
- Bisa langsung dipakai di GitHub Pages, Vercel, Netlify, atau hosting biasa

## 📁 Struktur

```text
NORUUI/
├── index.html
├── README.md
├── LICENSE
├── css/
│   └── style.css
└── js/
    └── script.js
```

## 🚀 Cara Menggunakan

1. Download / clone repository.
2. Pastikan struktur folder tetap sama.
3. Buka `index.html` untuk melihat website secara lokal.
4. Kalau mau mengubah tampilan, edit:
   - `css/style.css` → semua styling dan animasi
   - `js/script.js` → interaksi dan random animation
   - `index.html` → isi dan struktur website

## 🌐 GitHub Pages

Upload semua file ke repository GitHub.

Kemudian:

**Settings → Pages → Deploy from a branch → pilih branch `main` → folder `/ (root)` → Save**

Setelah beberapa saat website akan tersedia melalui GitHub Pages.

## 🖥️ Vercel / Netlify

Upload repository ini atau import repository GitHub.

Tidak membutuhkan build command karena ini adalah static website.

## 🎨 Mengubah Tombol

Class tombol tersedia di `index.html`:

```html
<a class="btn btn-primary">Button</a>
<a class="btn btn-secondary glass">Button</a>
<a class="btn btn-cta">Button</a>
```

Animasi tombol berada di `css/style.css`.

Setiap tipe tombol menggunakan pola gerakan berbeda sehingga tidak semuanya terlihat sama.

## 👤 Credit

**NORUUI** dibuat oleh:

- Creator: **dafzyyx**
- TikTok: **dafzxnoru**
- Telegram: **@DaFzyyx**

Jangan menghapus credit creator jika menggunakan atau memodifikasi project ini.

## 📄 License

Project ini menggunakan MIT License. Lihat `LICENSE`.
