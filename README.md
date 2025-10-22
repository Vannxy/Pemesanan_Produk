# KIOS REFRESHA

Proyek ini dibuat sebagai pemenuhan tugas di sekolah untuk menjual produk makanan atau minuman. KIOS REFRESHA adalah solusi pemesanan *pre-order* minuman digital yang bertujuan untuk **mempermudah pelanggan** melakukan pemesanan tanpa antrian dan mempermudah pencatatan bagi tim penjual.

## 🥤 Cara Kerja dan Fitur Utama

Aplikasi ini dirancang untuk alur pemesanan yang sederhana dan cepat:

### 1. Akses dan Pemesanan

* **Akses:** Pelanggan dapat mengakses aplikasi melalui *link* GitHub yang telah dipublikasikan menggunakan *browser* apa pun (seperti Chrome).
* **Memilih Produk:** Pelanggan memilih minuman yang ingin dipesan dengan menekan tombol **"+"**.
* **Pembatasan Pesanan:** Setiap produk dibatasi hingga **10 pesanan** per sesi untuk menyesuaikan dengan batas *budget* dan stok kami.
* **Data Pelanggan:** Pelanggan wajib menginput identitas mereka dalam format: `nama_kelas_jurusan` sebelum memesan.

### 2. Proses Pengiriman Pesanan (Integrasi WhatsApp)

* **Pesan Sekarang:** Pelanggan menekan tombol **"Pesan Sekarang"**.
* **Validasi:** Jika pelanggan tidak memilih produk atau tidak menginput nama, pesanan akan secara otomatis ditolak, dan sistem akan menampilkan **peringatan (*warning*)** kepada pengguna.
* **Pengiriman Otomatis:** Sistem kami bekerja dengan mengirimkan detail pesanan ke salah satu nomor WhatsApp tim penjual.
    * **Randomisasi Nomor:** Proses pemilihan nomor WhatsApp (nomor saya atau nomor teman saya) dilakukan secara acak (*random*) untuk pemerataan pesanan.
    * **Pesan Otomatis:** Setelah diarahkan ke WhatsApp, kolom *chat* akan terisi otomatis dengan rincian pesanan pelanggan. Pelanggan hanya perlu menekan tombol kirim.

## 🛠️ Teknologi yang Digunakan

| Kategori | Detail |
| :--- | :--- |
| **Bahasa Pemrograman** | HTML, CSS, dan JavaScript |
| **Editor Kode** | Visual Studio Code (VSCode) |
| **Hosting Server** | GitHub Pages (untuk mempublikasikan aplikasi) |

## 🌟 Harapan Kami

Kami berharap karya sederhana ini tidak hanya memenuhi tugas sekolah, tetapi juga dapat menjadi inspirasi dan referensi bagi para **UMKM** di luar sana untuk beralih ke sistem pemesanan digital yang lebih efisien.
