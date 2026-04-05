# 🛡️ Elite Vault v8.1.1 — Master-Optimized Core
### **"Architecting Digital Sovereignty."**
Developed by **Frans Marcellino** | *Engineering Digital Authority*

**Elite Vault v8.1.1** adalah sistem repositori aset digital premium yang dirancang untuk performa ekstrem dan estetika industrial. Dibangun dengan Vanilla JavaScript murni, sistem ini memastikan kecepatan akses maksimal tanpa beban *library* pihak ketiga yang berat.

---

## 💎 Technical Mastery & Features

* **High-FPS UI Engine**: Menggunakan `translate3d` dan `requestAnimationFrame` untuk memastikan pergerakan kursor kustom tetap mulus di 60+ FPS tanpa *lag*.
* **LCP (Largest Contentful Paint) Optimized**: Logika perenderan cerdas yang membedakan *loading strategy* antara aset utama (`eager`) dan aset sekunder (`lazy`) untuk mencapai skor Performa 100.
* **Zero-CLS Architecture**: Penanganan *layout shift* pada grid produk dengan mengunci `aspect-ratio` gambar untuk stabilitas visual total.
* **Passive Event Listeners**: Optimasi pada pendeteksian kursor untuk mengurangi beban kerja *main-thread* browser.
* **SPA Seamless Navigation**: Sistem navigasi antar halaman (Home, Vault, About) berbasis state tanpa perlu memuat ulang (*refresh*) halaman.
* **Dynamic Theme Recovery**: Integrasi `localStorage` yang mengingat pilihan tema (Dark/Light) pengunjung meskipun browser ditutup.

---

## 🛠️ Engine Specifications

| Modul | Teknologi | Deskripsi |
| :--- | :--- | :--- |
| **Core Logic** | Vanilla JS ES6+ | "Master-Optimized" tanpa jQuery/Framework eksternal. |
| **Render Engine** | DocumentFragment | Efisiensi tinggi dalam manipulasi DOM untuk grid produk. |
| **UX System** | Custom Cursor | Interaksi kursor berbasis *mix-blend-mode* & *shadow glow*. |
| **Payment Logic** | Automated Inquiry | Integrasi pemilihan gateway (PayPal, Card, Crypto). |
| **Validation** | W3C Standard | Memenuhi standar kepatuhan HTML4.01 & CSS resmi. |

---

## 📂 Installation & Structure

1.  **Deployment**: Cukup unggah folder proyek ke GitHub Pages, Vercel, Netlify, atau hosting pilihan Anda.
2.  **File Structure**:
    * `index.html`: Struktur semantik & SEO Meta.
    * `assets/css/style.css`: Sistem visual responsif & manajemen tema.
    * `assets/js/script.js`: Mesin utama & pusat data produk.

---

## ⚙️ Client Customization Guide

Instruksi modifikasi untuk pemilik baru:

### **1. Management Asset (Database)**
Buka file `assets/js/script.js` dan temukan bagian `VAULT_DATA.products`. Anda bisa menambah atau mengubah aset dengan format JSON:
```javascript
{ 
  name: "Vortex DB", 
  price: "$980", 
  desc: "Real-time Vector Database.", 
  img: "url_gambar_anda.jpg" 
}
