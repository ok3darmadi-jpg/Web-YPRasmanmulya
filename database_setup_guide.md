# Panduan Upload & Konfigurasi Hosting Domain (MySQL)
**Yayasan Pendidikan Rasman Mulya (SMP & SMK)**

Panduan ini ditujukan bagi pengelola website untuk meng-upload aplikasi dan database MySQL ke layanan Web Hosting (cPanel, DirectAdmin, CyberPanel, Hostinger, Niagahoster, DomaiNesia, VPS, dll) dengan domain sendiri.

---

## 1. Import Database MySQL (`database.sql`) ke Hosting

File database telah disediakan di root: `database.sql`.

### Langkah-langkah di cPanel / Hosting:
1. **Login ke cPanel Hosting** Anda (misal: `https://namadomainanda.com/cpanel`).
2. Masuk ke menu **MySQL Databases** atau **MySQL Database Wizard**:
   - Buat nama database baru, misal: `u1234567_rasmanmulya`.
   - Buat user database baru, misal: `u1234567_admin`.
   - Masukkan password user database yang kuat.
   - Tambahkan user tersebut ke database dengan memberikan centang pada **ALL PRIVILEGES**.
3. Kembali ke Beranda cPanel, klik menu **phpMyAdmin**:
   - Di panel kiri, klik nama database yang baru dibuat (`u1234567_rasmanmulya`).
   - Di tab menu atas, klik **Import**.
   - Klik tombol **Choose File** / **Pilih Berkas**, lalu pilih file `database.sql`.
   - Pastikan Character set disetel ke `utf8` (atau collation `utf8_general_ci`). Sangat kompatibel dengan semua versi MySQL / MariaDB di hosting cPanel.
   - Gulir ke bawah lalu klik tombol **Import** / **Kirim / Go**.
   - Database berhasil di-import dengan 15 tabel lengkap dan data awal bawaan sekolah!

> ⚠️ **Catatan Penting Menghindari Error 1044 (`Access denied for user...`):**
> - **Penyebab:** Terjadi apabila file SQL mencoba mengeksekusi `CREATE DATABASE rasmanmulya_db;` sedangkan akun hosting cPanel Anda tidak berizin membuat database dengan nama tanpa awalan cPanel (prefix username cPanel).
> - **Solusi:** File `database.sql` sudah disiapkan **bebas dari perintah CREATE DATABASE**. Pastikan Anda mengklik nama database Anda di panel kiri phpMyAdmin terlebih dahulu (misal: `rasg1538_...`) sebelum mengklik menu **Import**.
> - Pastikan pula di cPanel (menu **MySQL Databases**), user database Anda sudah ditambahkan ke database dengan izin **ALL PRIVILEGES**.

> 💡 **Solusi Jika Website Muncul Layar Putih Kosong (Blank White Screen):**
> 1. **Jangan upload folder `dist` secara utuh ke `public_html`**: Buka folder `dist`, lalu upload **isi filenya langsung** ke dalam `public_html`. Di dalam `public_html` harus langsung terlihat file `index.html`, folder `assets/`, dan file `.htaccess`.
> 2. **Base Path Relatif**: File konfigurasi `vite.config.ts` sudah disetel `base: './'` sehingga path file JavaScript & CSS dapat dimuat baik di domain utama maupun sub-folder/sub-domain tanpa gagal (404).
> 3. **File `.htaccess`**: Pastikan file `.htaccess` (yang ada di dalam folder `dist`) ikut ter-upload ke `public_html`. (Di cPanel File Manager, aktifkan *Settings > Show Hidden Files (dotfiles)* jika file berekstensi titik tidak tampak).

---

## 2. Halaman Login Administrator & Kredensial Bawaan
- **Akses Halaman Login**: 
  - Klik tombol **"Login Admin"** berwarna emas di bagian atas (Top Bar) website.
  - Atau akses melalui tautan langsung navigasi.
  - Jika belum login dan mencoba membuka panel admin, sistem akan secara otomatis mengarahkan ke halaman login yang aman.
- **Username / Email Default**: `admin` atau `admin@rasmanmulya.sch.id`
- **Password Default**: `admin123`
- **Fitur Halaman Login & Keamanan**:
  - Tombol **"Isi Otomatis"** untuk pengujian cepat.
  - Opsi tampilkan / sembunyikan kata sandi (*Show/Hide Password*).
  - Centang *"Ingat Sesi Saya"* agar tidak perlu login berulang kali.
  - Sesi tersimpan aman dan terproteksi di browser.
- **Menu Pengaturan Akun di Panel Admin**:
  - Di bilah menu panel admin atau dengan mengklik profil admin di bagian atas (topbar), buka menu **"Pengaturan Akun"**.
  - Administrator dapat mengubah **Nama Lengkap**, **Username Login**, **Alamat Email**, **Role / Peran**, serta mengganti **Kata Sandi (Password) Baru**.
  - Perubahan langsung tersimpan dan berlaku untuk sesi login berikutnya maupun saat login ulang.
- **Filter Jenjang (SMP / SMK) pada Data Pendaftar SPMB**:
  - Pada menu **"Data Pendaftar SPMB"**, tersedia tab filter tombol **"Semua Siswa"**, **"Jenjang SMP Saja"**, dan **"Jenjang SMK Saja"**.
  - Memilih filter tab akan memfilter tabel siswa secara instan lengkap dengan indikator jumlah pendaftar per jenjang dan ekspor data CSV khusus jenjang terpilih.
- **Menu Database & Hosting**:
  - Di dalam Panel Admin, tersedia menu khusus **"Database & Hosting"** di mana Anda dapat mengunduh file `.sql` terkini, menyalin query SQL, mengunduh file koneksi `db.php`, dan membaca panduan interaktif langsung dari browser.

---

## 3. Struktur Tabel Database MySQL yang Disediakan
1. `admin_users`: Pengguna admin, password hash, role hak akses.
2. `web_settings`: Identitas sekolah, kontak telepon, WA, email, alamat, logo transparan, sosmed.
3. `home_content`: Narasi sambutan pimpinan, visi & misi yayasan, foto pimpinan proporsional.
4. `home_stats`: 4 blok statistik pencapaian beranda.
5. `slides`: Slider headline promosi dan kegiatan beranda.
6. `quick_links`: 8 menu pintasan kotak di bawah slider.
7. `menus`: Struktur menu navigasi dan submenu dropdown.
8. `articles`: Berita, agenda, kegiatan, dan prestasi sekolah.
9. `pages`: Konten halaman statis (Profil Yayasan, Profil SMP, Profil SMK, Fasilitas).
10. `teachers`: Direktori dewan guru & instruktur kejuruan.
11. `teacher_header_settings`: Pengaturan judul, tagline kicker, dan banner header guru.
12. `spmb_settings`: Pengaturan formulir SPMB, gelombang, status buka/tutup, narahubung WA, dan rincian biaya.
13. `spmb_cost_items`: Komponen rincian biaya pendidikan SMP & SMK.
14. `spmb_applicants`: Data calon siswa pendaftar SPMB online.
15. `galleries`: Koleksi foto dan video dokumentasi kegiatan.

---

---

## 4. Cara Upload File Website ke Hosting (Solusi Folder dist & assets Tidak Ada)

### ❓ Mengapa folder `dist` dan `assets` awalnya tidak ada di komputer/laptop Anda?
- **Folder `dist` dan folder `assets` BUKAN file bawaan awal**, melainkan file yang tercipta dari proses kompilasi (*build*).
- Jika Anda mendownload source code dari repository / AI Studio, folder ini belum ada sebelum Anda menjalankan `npm run build`, atau folder tersebut sebelumnya di-ignore oleh `.gitignore`.
- Sekarang kami telah menyiapkan **Paket Siap Upload** (`website_siap_upload_cpanel.zip` dan `website_siap_upload_cpanel.tar.gz`).

---

### 🌟 Rekomendasi Terbaik (100% Bebas Eror Ekstrak cPanel): Ekstrak di Laptop Dulu!
Jika saat mengklik **Extract** di cPanel Anda mendapati pesan eror seperti *"Extraction Error"* atau *"Unable to extract"*:
1. **Unduh** file `website_siap_upload_cpanel.zip` ke laptop Anda.
2. Di laptop Anda, **klik kanan** file tersebut &rarr; pilih **Extract All** (Ekstrak Semua).
3. Hasil ekstraksi akan memunculkan:
   - File `index.html`
   - Folder `assets` (berisi file JavaScript `.js` dan CSS `.css`)
   - File `.htaccess`
4. Buka cPanel **File Manager** &rarr; masuk ke folder **`public_html`**.
5. Klik **Upload** di cPanel:
   - Upload file `index.html` dan `.htaccess`.
   - Buat folder bernama `assets` di dalam `public_html`, lalu masuk ke folder `assets` dan upload file-file di dalamnya (atau drag & drop langsung folder `assets` ke cPanel File Manager).
6. **Keuntungan cara ini:** Anda **tidak perlu mengklik tombol Extract di cPanel sama sekali**, sehingga 100% bebas dari masalah eror unzip di hosting!

---

### 🛠️ Solusi Jika Tetap Ingin Mengekstrak Langsung di cPanel:
1. **Gunakan Format TAR.GZ (`website_siap_upload_cpanel.tar.gz`):**
   - cPanel Linux memiliki dukungan bawaan yang sangat stabil untuk format `.tar.gz`. Upload file `.tar.gz` ke `public_html`, lalu klik kanan &rarr; **Extract**.
2. **Periksa Target Folder Saat Ekstrak:**
   - Ketika jendela popup konfirmasi Extract muncul di cPanel, pastikan kotak isian direktori terisi `/public_html` (jangan dikosongkan).
3. **Cek Kapasitas Disk (Hosting Penuh):**
   - Jika disk space akun cPanel Anda sudah 100% penuh, proses ekstrak akan gagal. Cek bar **Disk Usage** di sidebar cPanel.
4. **Masalah Izin `.htaccess`:**
   - Beberapa server hosting mengunci file `.htaccess` dari penimpaan file arsip. Jika gagal karena `.htaccess`, hapus file `.htaccess` lama di cPanel sebelum mengekstrak arsip baru.

---

### 💻 Opsi Alternatif: Build Manual di Komputer / Laptop Anda (Jika Punya Node.js)
1. Buka folder proyek di komputer Anda menggunakan terminal / CMD.
2. Jalankan perintah:
   ```bash
   npm run build
   ```
3. Folder **`dist`** akan otomatis tercipta, yang di dalamnya berisi:
   - `index.html`
   - `assets/` (berisi file JavaScript `.js` dan CSS `.css`)
   - `.htaccess`
4. Buka cPanel **File Manager** &rarr; masuk ke folder **`public_html`**.
5. Upload seluruh isi di dalam folder `dist` (ingat: **isinya**, bukan foldernya) langsung ke dalam `public_html`.

