-- =====================================================================
-- DATABASE MYSQL YAYASAN PENDIDIKAN RASMAN MULYA (SMP & SMK)
-- Sistem Informasi Akademik, Portal Web, Direktori Guru & SPMB Online
-- Dibuat untuk Hosting cPanel / phpMyAdmin / VPS / Shared Hosting
-- Charset: utf8 / Collation: utf8_general_ci
-- =====================================================================

-- CATATAN CPANEL / HOSTING (Mencegah Error 1044):
-- Pada cPanel / Shared Hosting, pembuatan database dilakukan via cPanel (MySQL Databases / Wizard).
-- Database user tidak memiliki hak 'CREATE DATABASE' di server root, sehingga baris CREATE DATABASE dihilangkan.
-- Cukup pilih database Anda di phpMyAdmin (panel kiri) lalu klik menu 'Import'.
-- (Jika Anda menggunakan VPS/Root Server: CREATE DATABASE IF NOT EXISTS `rasmanmulya_db` CHARACTER SET utf8 COLLATE utf8_general_ci; USE `rasmanmulya_db`;)

SET FOREIGN_KEY_CHECKS = 0;

-- ---------------------------------------------------------------------
-- 1. Tabel Administrator (admin_users)
-- ---------------------------------------------------------------------
DROP TABLE IF EXISTS `admin_users`;
CREATE TABLE `admin_users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(50) NOT NULL UNIQUE,
  `email` VARCHAR(100) NOT NULL UNIQUE,
  `password_hash` VARCHAR(255) NOT NULL,
  `full_name` VARCHAR(100) NOT NULL,
  `role` ENUM('superadmin', 'admin', 'operator') DEFAULT 'superadmin',
  `status` ENUM('active', 'inactive') DEFAULT 'active',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- Data Default Akun Admin
-- Password default: admin123
INSERT INTO `admin_users` (`id`, `username`, `email`, `password_hash`, `full_name`, `role`, `status`) VALUES
(1, 'admin', 'admin@rasmanmulya.sch.id', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Administrator Utama', 'superadmin', 'active');

-- ---------------------------------------------------------------------
-- 2. Tabel Pengaturan Website (web_settings)
-- ---------------------------------------------------------------------
DROP TABLE IF EXISTS `web_settings`;
CREATE TABLE `web_settings` (
  `id` INT PRIMARY KEY DEFAULT 1,
  `nama_web` VARCHAR(100) NOT NULL,
  `nama_perusahaan` VARCHAR(255) NOT NULL,
  `owner` VARCHAR(100) NOT NULL,
  `telp` VARCHAR(50) NOT NULL,
  `whatsapp` VARCHAR(50) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `alamat` TEXT NOT NULL,
  `domain` VARCHAR(100) NOT NULL,
  `logo_url` TEXT,
  `favicon_url` TEXT,
  `footer_text` TEXT,
  `sosmed_facebook` TEXT,
  `sosmed_instagram` TEXT,
  `sosmed_youtube` TEXT,
  `sosmed_twitter` TEXT,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO `web_settings` (`id`, `nama_web`, `nama_perusahaan`, `owner`, `telp`, `whatsapp`, `email`, `alamat`, `domain`, `logo_url`, `favicon_url`, `footer_text`, `sosmed_facebook`, `sosmed_instagram`, `sosmed_youtube`, `sosmed_twitter`) VALUES
(1, 'YAYASAN RASMAN MULYA', 'YAYASAN PENDIDIKAN RASMAN MULYA', 'H. Rasman Mulya & Rekan', '(021) 8899-7711', '0898-0440-088', 'info@rasmanmulya.sch.id', 'Jl. Pendidikan No. 45, Kecamatan Sukamaju, Kota Pendidikan, Indonesia 40123', 'rasmanmulya.sch.id', 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&w=200&q=80', 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&w=64&q=80', 'Yayasan Pendidikan Rasman Mulya berkomitmen menyelenggarakan pendidikan terpadu jenjang SMP dan SMK dengan memadukan keunggulan akademik, pembentukan karakter akhlakul karimah, serta kompetensi teknologi vokasi abad ke-21.', 'https://facebook.com/yayasanrasmanmulya', 'https://instagram.com/rasmanmulya_official', 'https://youtube.com/@rasmanmulyatv', 'https://twitter.com/rasmanmulya');

-- ---------------------------------------------------------------------
-- 3. Tabel Konten Beranda & Pimpinan (home_content)
-- ---------------------------------------------------------------------
DROP TABLE IF EXISTS `home_content`;
CREATE TABLE `home_content` (
  `id` INT PRIMARY KEY DEFAULT 1,
  `sambutan` TEXT NOT NULL,
  `visi` TEXT NOT NULL,
  `misi` TEXT NOT NULL,
  `kepsek_name` VARCHAR(150) NOT NULL,
  `kepsek_image` TEXT NOT NULL,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO `home_content` (`id`, `sambutan`, `visi`, `misi`, `kepsek_name`, `kepsek_image`) VALUES
(1, 'Kami dengan bangga mempersembahkan Yayasan Pendidikan Rasman Mulya sebagai wadah pendidikan yang dirancang penuh dedikasi untuk menciptakan masa depan cerah bagi seluruh peserta didik. Kami mengundang seluruh masyarakat dan wali murid untuk mengeksplorasi seluruh program unggulan, fasilitas, dan prestasi membanggakan di portal resmi ini.', 'Menghasilkan Pemimpin yang Berdedikasi untuk Agama, Negara, dan Masyarakat.', 'Kami bertujuan menyelenggarakan pendidikan yang holistik dalam lingkungan yang memaksimalkan potensi setiap siswa. Membangun karakter moral yang teguh berlandaskan iman dan takwa, serta melatih kecakapan vokasi dan teknologi terkini untuk menghadapi dinamika abad 21.', 'Daruna Tarihoran, M.Pd.', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80');

-- ---------------------------------------------------------------------
-- 4. Tabel Statistik Beranda (home_stats)
-- ---------------------------------------------------------------------
DROP TABLE IF EXISTS `home_stats`;
CREATE TABLE `home_stats` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `stat_value` VARCHAR(50) NOT NULL,
  `stat_label` VARCHAR(100) NOT NULL,
  `sort_order` INT DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO `home_stats` (`id`, `stat_value`, `stat_label`, `sort_order`) VALUES
(1, '1.250+', 'Siswa & Siswi Aktif', 1),
(2, '65+', 'Guru & Tenaga Pendidik', 2),
(3, '18', 'Ruang Kelas & Lab Komputer', 3),
(4, '99%', 'Tingkat Kelulusan & Kerja', 4);

-- ---------------------------------------------------------------------
-- 5. Tabel Slider Beranda (slides)
-- ---------------------------------------------------------------------
DROP TABLE IF EXISTS `slides`;
CREATE TABLE `slides` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `image_url` TEXT NOT NULL,
  `badge_type` VARCHAR(50) DEFAULT 'card1',
  `sort_order` INT DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO `slides` (`id`, `title`, `description`, `image_url`, `badge_type`, `sort_order`) VALUES
(1, 'Selamat & Sukses', 'Juara II Lomba Desain Sistem Jaringan Tingkat Provinsi Tahun 2026. Teruslah berprestasi dan mengharumkan nama sekolah kita.', 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80', 'card1', 1),
(2, 'Mastery Learning', 'Peserta didik dipastikan menguasai materi secara menyeluruh sebelum melanjutkan ke level berikutnya. Pendidikan yang fokus pada pemahaman mendalam.', 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80', 'card2', 2),
(3, 'Pendidikan Karakter Islami', 'Membina generasi berakhlak karimah, berilmu amaliah, dan siap menjadi panutan bagi kemaslahatan umat.', 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80', 'card3', 3);

-- ---------------------------------------------------------------------
-- 6. Tabel Menu Pintasan Cepat Beranda (quick_links)
-- ---------------------------------------------------------------------
DROP TABLE IF EXISTS `quick_links`;
CREATE TABLE `quick_links` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `icon` VARCHAR(50) NOT NULL,
  `label` VARCHAR(100) NOT NULL,
  `path` VARCHAR(100) NOT NULL,
  `sort_order` INT DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO `quick_links` (`id`, `icon`, `label`, `path`, `sort_order`) VALUES
(1, 'Monitor', 'E-Learning', 'home', 1),
(2, 'User', 'Sambutan', 'home', 2),
(3, 'Binoculars', 'Visi dan Misi', 'profil_yayasan', 3),
(4, 'Megaphone', 'Pengumuman', 'news', 4),
(5, 'GraduationCap', 'SPMB', 'spmb', 5),
(6, 'Calendar', 'Agenda', 'news', 6),
(7, 'Activity', 'Ekstra', 'home', 7),
(8, 'Trophy', 'Prestasi', 'news', 8);

-- ---------------------------------------------------------------------
-- 7. Tabel Menu Navigasi Utama (menus)
-- ---------------------------------------------------------------------
DROP TABLE IF EXISTS `menus`;
CREATE TABLE `menus` (
  `id` VARCHAR(50) PRIMARY KEY,
  `label` VARCHAR(100) NOT NULL,
  `path` VARCHAR(100) NOT NULL,
  `parent_id` VARCHAR(50) DEFAULT NULL,
  `is_visible` TINYINT(1) DEFAULT 1,
  `sort_order` INT DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO `menus` (`id`, `label`, `path`, `parent_id`, `is_visible`, `sort_order`) VALUES
('home', 'Beranda', 'home', NULL, 1, 1),
('artikel', 'Artikel', 'news', NULL, 1, 2),
('profil', 'Profil', 'profil', NULL, 1, 3),
('p1', 'Profil Yayasan', 'profil_yayasan', 'profil', 1, 4),
('p2', 'Profil SMP', 'profil_smp', 'profil', 1, 5),
('p3', 'Profil SMK', 'profil_smk', 'profil', 1, 6),
('informasi', 'Informasi', 'informasi', NULL, 1, 7),
('i1', 'Galeri Kegiatan', 'gallery', 'informasi', 1, 8),
('i2', 'Tenaga Pendidik', 'teachers', 'informasi', 1, 9),
('spmb', 'SPMB', 'spmb', NULL, 1, 10);

-- ---------------------------------------------------------------------
-- 8. Tabel Artikel & Berita (articles)
-- ---------------------------------------------------------------------
DROP TABLE IF EXISTS `articles`;
CREATE TABLE `articles` (
  `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) DEFAULT NULL,
  `category` VARCHAR(50) NOT NULL,
  `date` VARCHAR(50) NOT NULL,
  `status` ENUM('Published', 'Draft') DEFAULT 'Published',
  `image_url` TEXT,
  `content` LONGTEXT NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO `articles` (`id`, `title`, `slug`, `category`, `date`, `status`, `image_url`, `content`) VALUES
(1, 'Kegiatan Perkemahan Pramuka & Pelantikan Dewan Ambalan', 'perkemahan-pramuka-pelantikan-ambalan', 'Kegiatan', '28 Sep 2026', 'Published', 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80', 'Kegiatan perkemahan pramuka yang diadakan di bumi perkemahan terpadu berjalan dengan sangat lancar dan penuh khidmat. Seluruh siswa-siswi sangat antusias mengikuti berbagai perlombaan kecakapan, api unggun inspiratif, serta kegiatan membangun kerja sama tim yang tangguh dan mandiri.'),
(2, 'Kunjungan Industri Jurusan TKJ & Rekayasa Perangkat Lunak', 'kunjungan-industri-tkj-rpl', 'Berita', '15 Sep 2026', 'Published', 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', 'Siswa SMK Rasman Mulya melakukan kunjungan industri komprehensif ke pusat data dan perusahaan teknologi mitra terkemuka. Dalam kunjungan ini, siswa melihat langsung operasional server berskala besar, praktik DevOps, dan implementasi keamanan jaringan modern.'),
(3, 'Peringatan Hari Guru Nasional: Dedikasi Tanpa Batas', 'peringatan-hari-guru-nasional', 'Informasi', '25 Nov 2026', 'Published', 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80', 'Sekolah mengadakan upacara bendera dan berbagai pertunjukan pentas seni kolaboratif guru dan siswa untuk memperingati Hari Guru Nasional sebagai bentuk apresiasi setinggi-tingginya kepada para pendidik mulia.'),
(4, 'Prestasi Juara Umum Olimpiade Sains Nasional (OSN) 2026', 'juara-umum-olimpiade-sains-2026', 'Prestasi', '10 Agt 2026', 'Published', 'https://images.unsplash.com/photo-1567168544686-2a77a947d159?auto=format&fit=crop&w=800&q=80', 'Selamat dan sukses kepada ananda perwakilan SMP dan SMK Rasman Mulya yang berhasil memboyong piala Juara Umum pada ajang bergengsi Olimpiade Sains Nasional tingkat Kabupaten dan Provinsi.');

-- ---------------------------------------------------------------------
-- 9. Tabel Halaman Statis (pages)
-- ---------------------------------------------------------------------
DROP TABLE IF EXISTS `pages`;
CREATE TABLE `pages` (
  `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(150) NOT NULL UNIQUE,
  `status` ENUM('Published', 'Draft') DEFAULT 'Published',
  `image_url` TEXT,
  `date` VARCHAR(50) DEFAULT '01 Jan 2026',
  `content` LONGTEXT NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO `pages` (`id`, `title`, `slug`, `status`, `image_url`, `date`, `content`) VALUES
(1, 'Profil Yayasan Pendidikan Rasman Mulya', '/profil-yayasan', 'Published', 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80', '01 Jan 2026', 'Yayasan Pendidikan Rasman Mulya didirikan dengan cita-cita luhur mencerdaskan kehidupan bangsa melalui pendidikan terpadu yang berakar kuat pada nilai-nilai ketakwaan, budi pekerti luhur, dan penguasaan sains teknologi modern.'),
(2, 'Profil SMP Rasman Mulya', '/profil-smp', 'Published', 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80', '01 Jan 2026', 'SMP Rasman Mulya hadir sebagai jenjang peralihan emas bagi putra-putri untuk menumbuhkan rasa ingin tahu, kemandirian belajar, dan kecintaan pada ilmu pengetahuan.'),
(3, 'Profil SMK Rasman Mulya', '/profil-smk', 'Published', 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80', '01 Jan 2026', 'SMK Rasman Mulya berfokus pada kesiapan kerja nyata dan daya saing global melalui kurikulum berbasis industri dan sertifikasi keahlian berstandar BNSP.'),
(4, 'Visi dan Misi', '/visi-misi', 'Published', NULL, '01 Jan 2026', 'Visi: Menghasilkan Pemimpin yang Berdedikasi untuk Agama, Negara, dan Masyarakat.\n\nMisi:\n1. Menyelenggarakan pendidikan holistik.\n2. Membangun karakter moral yang teguh.\n3. Menguasai sains dan teknologi terkini.'),
(5, 'Fasilitas Sekolah', '/fasilitas', 'Published', NULL, '01 Jan 2026', 'Yayasan Rasman Mulya dilengkapi dengan berbagai fasilitas modern penunjang pembelajaran: Lab Komputer, Perpustakaan Digital, Lapangan Olahraga, Masjid Raya, Ruang Praktik Siswa TEFA, dan Wi-Fi Kampus.');

-- ---------------------------------------------------------------------
-- 10. Tabel Tenaga Pendidik / Guru (teachers)
-- ---------------------------------------------------------------------
DROP TABLE IF EXISTS `teachers`;
CREATE TABLE `teachers` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(150) NOT NULL,
  `subject_tag` VARCHAR(150) NOT NULL,
  `role` VARCHAR(100) NOT NULL,
  `subject` VARCHAR(100) NOT NULL,
  `category` VARCHAR(50) NOT NULL,
  `badge_color` VARCHAR(50) DEFAULT 'bg-blue-600',
  `image_url` TEXT NOT NULL,
  `education` TEXT,
  `bio` TEXT,
  `email` VARCHAR(100),
  `motto` TEXT,
  `experience` VARCHAR(150),
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO `teachers` (`id`, `name`, `subject_tag`, `role`, `subject`, `category`, `badge_color`, `image_url`, `education`, `bio`, `email`, `motto`, `experience`) VALUES
(1, 'OKTRI DARMADI, S.Kom., M.T.', 'Guru Produktif IT & Pemrograman', 'Kepala Sekolah SMK', 'Teknik Jaringan & Rekayasa Perangkat Lunak', 'SMK Rasman Mulya', 'bg-blue-600', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80', 'S1 Teknik Informatika - Telkom University | S2 Teknik Elektro ITB', 'Berpengalaman lebih dari 10 tahun di industri arsitektur sistem komputasi sebelum mendedikasikan diri penuh membina talenta muda di SMK Rasman Mulya.', 'oktri.darmadi@rasmanmulya.sch.id', 'Teknologi adalah sarana, adab dan integritas adalah fondasi peradaban manusia.', '12 Tahun Mengajar & Konsultan IT Sekolah'),
(2, 'Nasrullah Iswahyudi, S.Pd.I.', 'Guru PAI & Kajian Fiqih Kontemporer', 'Wakil Kepala Kurikulum SMP', 'Pendidikan Agama Islam', 'SMP Rasman Mulya', 'bg-yellow-600', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80', 'S1 Pendidikan Agama Islam - UIN Syarif Hidayatullah Jakarta', 'Berdedikasi menanamkan ketauhidan yang kokoh, adab pergaulan islami, dan hafalan juz amma dengan metode menyenangkan.', 'nasrullah.i@rasmanmulya.sch.id', 'Menuntut ilmu adalah ibadah, mengamalkannya adalah wujud rasa syukur.', '10 Tahun Pengabdian Pendidikan Karakter'),
(3, 'Daruna Tarihoran, M.Pd.', 'Guru Fisika Terapan & Robotika', 'Kepala Sekolah SMP & Dewan Pembina', 'Ilmu Pengetahuan Alam', 'Pimpinan & Yayasan', 'bg-blue-600', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80', 'S1 Pendidikan Fisika UNY | S2 Manajemen Pendidikan UPI', 'Menghadirkan pembelajaran sains aplikatif dengan eksperimen laboratorium yang merangsang daya nalar kritis dan kreativitas pemecahan masalah.', 'daruna.t@rasmanmulya.sch.id', 'Belajar sains adalah proses mengagumi keagungan alam semesta.', '16 Tahun Pengalaman Manajerial & Pembina Olimpiade'),
(4, 'Bancar Wasita, S.Pd.', 'Guru IPS & Sejarah Kebangsaan', 'Koordinator Ekstrakurikuler', 'Ilmu Pengetahuan Sosial', 'Pimpinan & Yayasan', 'bg-purple-600', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80', 'S1 Pendidikan Sejarah - Universitas Negeri Malang', 'Mengajarkan sejarah peradaban nusantara dan analisis sosial kemasyarakatan dengan sudut pandang kritis serta semangat cinta tanah air.', 'bancar.wasita@rasmanmulya.sch.id', 'Bangsa yang besar adalah bangsa yang tak melupakan sejarah masa lalunya.', '9 Tahun Membina Pengembangan Kepemimpinan Siswa'),
(5, 'Siti Aminah, S.Pd., M.Hum.', 'Guru Bahasa Inggris & Literasi', 'Koordinator Bahasa & Debat', 'Bahasa Inggris', 'SMP Rasman Mulya', 'bg-blue-600', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80', 'S1 Pendidikan Bahasa Inggris UNJ | S2 Linguistik Terapan UI', 'Fokus pada penguasaan kemampuan komunikasi lisan dan tulisan bertaraf global agar siswa percaya diri berbicara di forum internasional.', 'siti.aminah@rasmanmulya.sch.id', 'A foreign language is a passport to global opportunities.', '8 Tahun Pembina English Club & Debat Bahasa'),
(6, 'Rahmat Kurniawan, S.T.', 'Instruktur Jaringan Komputer & Cloud', 'Kepala Lab Komputer & TKJ', 'Teknik Komputer Jaringan', 'SMK Rasman Mulya', 'bg-emerald-600', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80', 'S1 Teknik Komputer - Institut Teknologi Sepuluh Nopember (ITS)', 'Memegang sertifikasi MikroTik MTCNA/MTCRE dan Cisco CCNA. Membimbing siswa dalam perancangan infrastruktur jaringan skala enterprise.', 'rahmat.k@rasmanmulya.sch.id', 'Practice makes progress, code with precision.', '7 Tahun Praktisi Network Security & Trainer SMK');

-- ---------------------------------------------------------------------
-- 11. Tabel Pengaturan Header Halaman Guru (teacher_header_settings)
-- ---------------------------------------------------------------------
DROP TABLE IF EXISTS `teacher_header_settings`;
CREATE TABLE `teacher_header_settings` (
  `id` INT PRIMARY KEY DEFAULT 1,
  `tagline` VARCHAR(150) NOT NULL,
  `judul` VARCHAR(255) NOT NULL,
  `subjudul` TEXT NOT NULL,
  `banner_url` TEXT,
  `badge_text` VARCHAR(100) NOT NULL,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO `teacher_header_settings` (`id`, `tagline`, `judul`, `subjudul`, `banner_url`, `badge_text`) VALUES
(1, 'DIREKTORI PENDIDIK & TENAGA KEPENDIDIKAN', 'Dewan Guru & Tenaga Pendidik Berdedikasi', 'Membimbing dan menginspirasi putra-putri bangsa dengan kompetensi profesional, keteladanan akhlak mulia, dan inovasi pembelajaran berbasis teknologi modern.', 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80', 'SMP & SMK Rasman Mulya');

-- ---------------------------------------------------------------------
-- 12. Tabel Pengaturan SPMB Online (spmb_settings)
-- ---------------------------------------------------------------------
DROP TABLE IF EXISTS `spmb_settings`;
CREATE TABLE `spmb_settings` (
  `id` INT PRIMARY KEY DEFAULT 1,
  `judul` VARCHAR(255) NOT NULL,
  `subjudul` TEXT NOT NULL,
  `is_opened` TINYINT(1) DEFAULT 1,
  `gelombang` VARCHAR(150) NOT NULL,
  `biaya_pendaftaran` VARCHAR(100) NOT NULL,
  `jalur_pendaftaran` VARCHAR(255) NOT NULL,
  `kontak_panitia` VARCHAR(100) NOT NULL,
  `banner_url` TEXT,
  `persyaratan` TEXT NOT NULL,
  `alur_pendaftaran` TEXT NOT NULL,
  `catatan_tambahan` TEXT,
  `judul_biaya` VARCHAR(255) DEFAULT 'Rincian Biaya Masuk & Investasi Pendidikan',
  `subjudul_biaya` TEXT,
  `total_biaya_smp` VARCHAR(50) DEFAULT 'Rp 3.850.000',
  `total_biaya_smk` VARCHAR(50) DEFAULT 'Rp 4.450.000',
  `kebijakan_cicilan` TEXT,
  `foto_rincian_biaya_url` TEXT,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO `spmb_settings` (`id`, `judul`, `subjudul`, `is_opened`, `gelombang`, `biaya_pendaftaran`, `jalur_pendaftaran`, `kontak_panitia`, `banner_url`, `persyaratan`, `alur_pendaftaran`, `catatan_tambahan`, `judul_biaya`, `subjudul_biaya`, `total_biaya_smp`, `total_biaya_smk`, `kebijakan_cicilan`, `foto_rincian_biaya_url`) VALUES
(1, 'Penerimaan Murid Baru (SPMB) Online 2026/2027', 'Pendaftaran Peserta Didik Baru SMP & SMK Rasman Mulya. Wujudkan masa depan gemilang dengan pendidikan karakter dan keahlian vokasi unggul!', 1, 'Gelombang I: 01 Januari s/d 30 Juni 2026', 'Gratis Biaya Pendaftaran (Rp 0,-)', 'Jalur Reguler, Prestasi Akademik/Non-Akademik, & Beasiswa Tahfidz Al-Quran', '0898-0440-088', 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80', '1. Mengisi Formulir Pendaftaran Online secara lengkap dan benar.\n2. Fotokopi Kartu Keluarga (KK) & Akta Kelahiran (masing-masing 2 lembar).\n3. Fotokopi Ijazah / Surat Keterangan Lulus (SKL) yang dilegalisir basah.\n4. Pas foto formal terbaru ukuran 3x4 berwarna dengan latar biru/merah (3 lembar).\n5. Fotokopi sertifikat/piagam prestasi kejuaraan minimal tingkat Kabupaten (khusus pendaftar Jalur Prestasi).', 'Langkah 1: Mengisi formulir pendaftaran online di laman SPMB ini.\nLangkah 2: Konfirmasi pendaftaran melalui WhatsApp panitia untuk verifikasi data awal.\nLangkah 3: Mengikuti observasi minat & bakat serta tes potensi akademik (jadwal dikirim via WA).\nLangkah 4: Pengumuman kelulusan hasil seleksi dan proses daftar ulang / pengukuran seragam.', 'Tersedia Program Beasiswa Bebas SPP hingga 1 Tahun Penuh bagi siswa berprestasi Juara Umum 1-3 dan Penghafal Al-Quran minimal 3 Juz.', 'Rincian Biaya Masuk & Investasi Pendidikan', 'Transparansi pembiayaan pendidikan awal masuk Tahun Ajaran 2026/2027 dengan kemudahan skema cicilan 0%.', 'Rp 3.850.000', 'Rp 4.450.000', 'Biaya masuk dapat diangsur hingga 3 kali selama semester pertama tanpa dikenakan bunga tambahan. Keringanan khusus 50% tersedia untuk siswa yatim/piatu dan keluarga pra-sejahtera.', 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80');

-- ---------------------------------------------------------------------
-- 13. Tabel Rincian Komponen Biaya SPMB (spmb_cost_items)
-- ---------------------------------------------------------------------
DROP TABLE IF EXISTS `spmb_cost_items`;
CREATE TABLE `spmb_cost_items` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `komponen` VARCHAR(150) NOT NULL,
  `biaya_smp` VARCHAR(50) NOT NULL,
  `biaya_smk` VARCHAR(50) NOT NULL,
  `keterangan` TEXT,
  `sort_order` INT DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO `spmb_cost_items` (`id`, `komponen`, `biaya_smp`, `biaya_smk`, `keterangan`, `sort_order`) VALUES
(1, 'Uang Pangkal / Pengembangan Sarana Gedung', 'Rp 1.500.000', 'Rp 1.800.000', 'Dibayarkan 1x selama masa studi', 1),
(2, 'Paket Seragam Lengkap & Atribut (5 Stel)', 'Rp 950.000', 'Rp 1.150.000', 'Termasuk seragam OSIS, Batik, Pramuka, Olahraga, Kejuruan', 2),
(3, 'Iuran SPP Bulan Pertama (Juli 2026)', 'Rp 350.000', 'Rp 400.000', 'Sudah termasuk praktikum lab komputer', 3),
(4, 'Kegiatan Pengenalan Lingkungan Sekolah (MPLS)', 'Rp 300.000', 'Rp 300.000', 'Termasuk modul orientasi karakter & konsumsi', 4),
(5, 'Asuransi Kesehatan Siswa & Kartu Pelajar Digital', 'Rp 150.000', 'Rp 150.000', 'Berlaku perlindungan 1 tahun akademik', 5),
(6, 'Modul Pembelajaran & Akun E-Learning', 'Rp 600.000', 'Rp 650.000', 'Akses LMS cloud dan materi digital setahun', 6);

-- ---------------------------------------------------------------------
-- 14. Tabel Pendaftar SPMB Siswa Baru (spmb_applicants)
-- ---------------------------------------------------------------------
DROP TABLE IF EXISTS `spmb_applicants`;
CREATE TABLE `spmb_applicants` (
  `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(150) NOT NULL,
  `jenjang` ENUM('SMP', 'SMK') NOT NULL,
  `asal_sekolah` VARCHAR(150) DEFAULT NULL,
  `phone` VARCHAR(50) DEFAULT NULL,
  `parent_name` VARCHAR(150) DEFAULT NULL,
  `status` ENUM('Menunggu Verifikasi', 'Diterima', 'Cadangan', 'Ditolak') DEFAULT 'Menunggu Verifikasi',
  `registered_at` DATE DEFAULT (CURRENT_DATE),
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO `spmb_applicants` (`id`, `name`, `jenjang`, `asal_sekolah`, `phone`, `parent_name`, `status`, `registered_at`) VALUES
(101, 'Ahmad Faiz Zaidan', 'SMK', 'SMP Negeri 1 Harapan', '081234567890', 'H. Sudirman', 'Diterima', '2026-10-01'),
(102, 'Siti Rahma Azzahra', 'SMP', 'SDIT Bina Umat', '082198765432', 'Rahmat Hidayat', 'Menunggu Verifikasi', '2026-10-05'),
(103, 'Muhammad Rayhan Pratama', 'SMK', 'SMP Nusantara', '085712349988', 'Gunawan Prasetyo', 'Menunggu Verifikasi', '2026-10-08'),
(104, 'Nabila Putri Santoso', 'SMP', 'SD Negeri Harapan Baru', '081399887766', 'Agus Santoso', 'Diterima', '2026-10-09');

-- ---------------------------------------------------------------------
-- 15. Tabel Galeri Kegiatan (galleries)
-- ---------------------------------------------------------------------
DROP TABLE IF EXISTS `galleries`;
CREATE TABLE `galleries` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `type` ENUM('foto', 'video') DEFAULT 'foto',
  `image_url` TEXT NOT NULL,
  `date` VARCHAR(50) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO `galleries` (`id`, `title`, `type`, `image_url`, `date`) VALUES
(1, 'Acara Penutupan HUT RI: Gebyar Kemerdekaan & Karnaval Seni', 'foto', 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80', '17 Agt 2026'),
(2, 'Perayaan Halal Bihalal & Silaturahmi Keluarga Besar Sekolah', 'foto', 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80', '10 Mei 2026'),
(3, 'Kunjungan Industri Cyber Valley: Pengenalan Server & Cloud', 'foto', 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80', '15 Sep 2026'),
(4, 'Shalat Dhuha & Dzuhur Berjamaah Tanamkan Kedisiplinan Siswa', 'foto', 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=800&q=80', '12 Okt 2026'),
(5, 'Video Dokumenter Pembelajaran Aktif & Kreatif di Kelas', 'video', 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80', '01 Nov 2026'),
(6, 'High Excellence Spirit: Liputan Kejuaraan Olahraga Terpadu', 'video', 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80', '05 Nov 2026'),
(7, 'The Ramadan Camp: Pembinaan Spiritual & Berbagi Berkah', 'video', 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80', '10 Mar 2026');

SET FOREIGN_KEY_CHECKS = 1;

-- =====================================================================
-- SELESAI. Database siap di-import ke phpMyAdmin cPanel / Hosting MySQL
-- =====================================================================
