# 💳 Subscription Cost Accumulator (Kalkulator Biaya Langganan Bulanan)

Aplikasi pencatat dan pengakumulasi biaya langganan digital (*Subscription Cost Accumulator*) berbasis JavaScript murni untuk melacak total pengeluaran layanan bulanan serta proyeksi beban biaya tahunan secara otomatis.

---

## 🎯 Konsep Pembelajaran RPL / Pemrograman Web

1. **Array Reduction & Accumulation:**
   Mengiterasi data array langganan menggunakan metode perhitungan total biaya (*summation*) untuk menampilkan akumulasi pengeluaran bulanan dan tahunan.
2. **Financial Currency Formatting (`Intl.NumberFormat`):**
   Memformat angka mentah biaya langganan menjadi standar mata uang Rupiah (`IDR`) yang mudah dibaca.
3. **LocalStorage Data Persistence:**
   Menyimpan daftar langganan ke dalam memori lokal peramban (*browser*) agar data tetap tersimpan saat halaman ditutup atau dimuat ulang.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Ringkasan total, form input langganan, & kontainer daftar item
├── style.css        # Desain Neobrutalism kuning-pop, kartu ringkasan, & bayangan keras
└── script.js        # Logika akumulasi total, formatter Rupiah, LocalStorage CRUD, & DOM
