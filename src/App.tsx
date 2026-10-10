import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ChevronRight, User, BookOpen, GraduationCap, 
  MapPin, Phone, Mail, Image as ImageIcon, Calendar, 
  Settings, CheckCircle, ChevronLeft, LayoutDashboard, Layers, Users, Edit, Plus, Trash2, Sliders, Globe, Upload, Save,
  ArrowUp, ArrowDown, Eye, EyeOff, GripVertical, ChevronDown, Undo, Redo, RotateCcw,
  Facebook, Instagram, Youtube, Twitter, Monitor, Binoculars, Megaphone, Activity, Trophy, Briefcase,
  Send, PlayCircle, Award, HeartHandshake, Sparkles, Check, Info, FileCheck, HelpCircle, ArrowRight,
  School, Compass, MessageCircle, AlertCircle, ShieldCheck, Download, FileSpreadsheet, CreditCard,
  Calculator, DollarSign, ListPlus, UsersRound, ChevronUp, ZoomIn,
  Lock, LogOut, Database, Copy, Server, Key, UserPlus, AlertTriangle, Loader2
} from 'lucide-react';

export interface SlideItem {
  id: number;
  image: string;
  title: string;
  desc: string;
  type?: string;
}

export interface QuickLinkItem {
  id: number;
  icon: string;
  label: string;
  path: string;
}

export interface ArticleItem {
  id: number;
  title: string;
  category: string;
  date: string;
  status: string;
  image: string;
  content: string;
  meta?: string;
  slug?: string;
}

export interface PageItem {
  id: number;
  title: string;
  slug: string;
  status: string;
  content: string;
  meta?: string;
  image?: string;
  date?: string;
}

export interface TeacherItem {
  id: number;
  name: string;
  subjectTag: string;
  role: string;
  subject: string;
  category: string;
  badgeColor: string;
  image: string;
  education: string;
  bio: string;
  email?: string;
  motto?: string;
  experience?: string;
}

export interface TeacherHeaderSettings {
  tagline: string;
  judul: string;
  subjudul: string;
  bannerUrl: string;
  badgeText: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  type: 'foto' | 'video';
  image: string;
  date: string;
}

export interface SubMenuItem {
  id: string;
  label: string;
  path: string;
}

export interface MenuItem {
  id: string;
  label: string;
  path: string;
  visible: boolean;
  submenus?: SubMenuItem[];
}

export interface SpmbStudent {
  id: number;
  name: string;
  jenjang: string;
  status: string;
  asalSekolah?: string;
  phone?: string;
  parentName?: string;
  registeredAt?: string;
}

export interface SpmbCostItem {
  id: string;
  komponen: string;
  biayaSmp: string;
  biayaSmk: string;
  keterangan: string;
}

export interface SpmbSettings {
  judul: string;
  subjudul: string;
  isOpened: boolean;
  gelombang: string;
  biayaPendaftaran: string;
  jalurPendaftaran: string;
  kontakPanitia: string;
  bannerUrl: string;
  persyaratan: string;
  alurPendaftaran: string;
  catatanTambahan: string;
  // Rincian Biaya Masuk
  judulBiaya: string;
  subjudulBiaya: string;
  totalBiayaSmp: string;
  totalBiayaSmk: string;
  kebijakanCicilan: string;
  fotoRincianBiayaUrl?: string;
  biayaItems: SpmbCostItem[];
}

export interface HomeContent {
  sambutan: string;
  visi: string;
  misi: string;
  kepsekName: string;
  kepsekImage: string;
}

export interface HomeStat {
  id: number;
  value: string;
  label: string;
}

export interface AdminAccountItem {
  id: number;
  name: string;
  username: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  password?: string;
  createdAt?: string;
}

export interface WebSettings {
  namaWeb: string;
  namaPerusahaan: string;
  owner: string;
  telp: string;
  whatsapp: string;
  email: string;
  alamat: string;
  domain: string;
  logoUrl: string;
  faviconUrl: string;
  footerText: string;
  sosmed: {
    facebook: string;
    instagram: string;
    youtube: string;
    twitter: string;
  };
  hideAdminLogin?: boolean;
}

const INITIAL_SLIDES: SlideItem[] = [
  { 
    id: 1, 
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80', 
    title: 'Selamat & Sukses', 
    desc: 'Juara II Lomba Desain Sistem Jaringan Tingkat Provinsi Tahun 2026. Teruslah berprestasi dan mengharumkan nama sekolah kita.', 
    type: 'card1' 
  },
  { 
    id: 2, 
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80', 
    title: 'Mastery Learning', 
    desc: 'Peserta didik dipastikan menguasai materi secara menyeluruh sebelum melanjutkan ke level berikutnya. Pendidikan yang fokus pada pemahaman mendalam.', 
    type: 'card2' 
  },
  { 
    id: 3, 
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80', 
    title: 'Pendidikan Karakter Islami', 
    desc: 'Membina generasi berakhlak karimah, berilmu amaliah, dan siap menjadi panutan bagi kemaslahatan umat.', 
    type: 'card3' 
  },
];

const INITIAL_QUICK_LINKS: QuickLinkItem[] = [
  { id: 1, icon: 'Monitor', label: 'E-Learning', path: 'home' },
  { id: 2, icon: 'User', label: 'Sambutan', path: 'home' },
  { id: 3, icon: 'Binoculars', label: 'Visi dan Misi', path: 'profil_yayasan' },
  { id: 4, icon: 'Megaphone', label: 'Pengumuman', path: 'news' },
  { id: 5, icon: 'GraduationCap', label: 'SPMB', path: 'spmb' },
  { id: 6, icon: 'Calendar', label: 'Agenda', path: 'news' },
  { id: 7, icon: 'Activity', label: 'Ekstra', path: 'home' },
  { id: 8, icon: 'Trophy', label: 'Prestasi', path: 'news' },
];

const INITIAL_ARTICLES: ArticleItem[] = [
  { 
    id: 1, 
    title: 'Kegiatan Perkemahan Pramuka & Pelantikan Dewan Ambalan', 
    category: 'Kegiatan', 
    date: '28 Sep 2026', 
    status: 'Published', 
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80', 
    content: 'Kegiatan perkemahan pramuka yang diadakan di bumi perkemahan terpadu berjalan dengan sangat lancar dan penuh khidmat. Seluruh siswa-siswi sangat antusias mengikuti berbagai perlombaan kecakapan, api unggun inspiratif, serta kegiatan membangun kerja sama tim yang tangguh dan mandiri.' 
  },
  { 
    id: 2, 
    title: 'Kunjungan Industri Jurusan TKJ & Rekayasa Perangkat Lunak', 
    category: 'Berita', 
    date: '15 Sep 2026', 
    status: 'Published', 
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', 
    content: 'Siswa SMK Rasman Mulya melakukan kunjungan industri komprehensif ke pusat data dan perusahaan teknologi mitra terkemuka. Dalam kunjungan ini, siswa melihat langsung operasional server berskala besar, praktik DevOps, dan implementasi keamanan jaringan modern.' 
  },
  { 
    id: 3, 
    title: 'Peringatan Hari Guru Nasional: Dedikasi Tanpa Batas', 
    category: 'Informasi', 
    date: '25 Nov 2026', 
    status: 'Published', 
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80', 
    content: 'Sekolah mengadakan upacara bendera dan berbagai pertunjukan pentas seni kolaboratif guru dan siswa untuk memperingati Hari Guru Nasional sebagai bentuk apresiasi setinggi-tingginya kepada para pendidik mulia.' 
  },
  { 
    id: 4, 
    title: 'Prestasi Juara Umum Olimpiade Sains Nasional (OSN) 2026', 
    category: 'Prestasi', 
    date: '10 Agt 2026', 
    status: 'Published', 
    image: 'https://images.unsplash.com/photo-1567168544686-2a77a947d159?auto=format&fit=crop&w=800&q=80', 
    content: 'Selamat dan sukses kepada ananda perwakilan SMP dan SMK Rasman Mulya yang berhasil memboyong piala Juara Umum pada ajang bergengsi Olimpiade Sains Nasional tingkat Kabupaten dan Provinsi.' 
  },
];

const INITIAL_PAGES: PageItem[] = [
  { 
    id: 1, 
    title: 'Profil Yayasan Pendidikan Rasman Mulya', 
    slug: '/profil-yayasan', 
    status: 'Published', 
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
    date: '01 Jan 2026',
    content: `Yayasan Pendidikan Rasman Mulya didirikan dengan cita-cita luhur mencerdaskan kehidupan bangsa berlandaskan nilai-nilai ketakwaan, budi pekerti luhur, dan keunggulan teknologi.

Sejak berdirinya, yayasan ini menaungi jenjang pendidikan menengah pertama (SMP) dan kejuruan (SMK) dengan lingkungan belajar yang asri, disiplin, dan didukung tenaga pengajar bersertifikasi nasional.

Visi Utama:
"Menghasilkan Pemimpin yang Berdedikasi untuk Agama, Negara, dan Masyarakat melalui pendidikan holistik berstandar mutu tinggi."

Misi Yayasan:
1. Menyelenggarakan proses pembelajaran aktif, kreatif, dan berbasis penguasaan kompetensi (Mastery Learning).
2. Membentuk insan berkarakter mulia dengan pembiasaan ibadah berjamaah, kejujuran, dan sopan santun.
3. Mengembangkan sarana laboratorium komputer, sains, dan bengkel kejuruan terkini yang relevan dengan kebutuhan dunia kerja.` 
  },
  { 
    id: 2, 
    title: 'Profil SMP Rasman Mulya', 
    slug: '/profil-smp', 
    status: 'Published', 
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    date: '01 Jan 2026',
    content: `SMP Rasman Mulya hadir sebagai jenjang peralihan emas bagi putra-putri untuk menumbuhkan rasa ingin tahu, kemandirian belajar, dan kecintaan pada ilmu pengetahuan.

Program Unggulan:
- Kelas Tahfidz & Bimbingan Ibadah Praktis
- English & Arabic Daily Conversation Club
- Pembinaan Intensif Olimpiade Sains & Matematika
- Ekstrakurikuler Wajib Pramuka, Futsal, Seni Musik, dan Robotik Dasar` 
  },
  { 
    id: 3, 
    title: 'Profil SMK Rasman Mulya', 
    slug: '/profil-smk', 
    status: 'Published', 
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80',
    date: '01 Jan 2026',
    content: `SMK Rasman Mulya berfokus pada kesiapan kerja nyata dan daya saing global melalui kurikulum berbasis industri dan sertifikasi keahlian berstandar BNSP.

Konsentrasi Keahlian:
1. Teknik Komputer & Jaringan (TKJ) - Cloud Computing, Network Engineering & Cybersecurity.
2. Rekayasa Perangkat Lunak (RPL) - Fullstack Web & Mobile Application Development.
3. Bisnis Digital & Manajemen Logistik Modern.

Didukung oleh program Teaching Factory (TEFA) dan kemitraan strategis dengan puluhan perusahaan terkemuka.` 
  },
  { 
    id: 4, 
    title: 'Visi dan Misi', 
    slug: '/visi-misi', 
    status: 'Published', 
    content: `Visi: Menghasilkan Pemimpin yang Berdedikasi untuk Agama, Negara, dan Masyarakat.\n\nMisi:\n1. Menyelenggarakan pendidikan holistik.\n2. Membangun karakter moral yang teguh.\n3. Menguasai sains dan teknologi terkini.` 
  },
  { 
    id: 5, 
    title: 'Fasilitas Sekolah', 
    slug: '/fasilitas', 
    status: 'Published', 
    content: `Yayasan Rasman Mulya dilengkapi dengan berbagai fasilitas modern penunjang pembelajaran:\n- Laboratorium Komputer Terpadu Berpendingin Udara\n- Perpustakaan Digital & Ruang Baca Nyaman\n- Lapangan Olahraga Serbaguna (Futsal, Basket, Voli)\n- Masjid Raya Yayasan untuk Shalat Berjamaah\n- Ruang Praktik Siswa Kejuruan (TEFA)\n- Akses Internet Wi-Fi Berkecepatan Tinggi di Seluruh Area Kampus` 
  },
];

const INITIAL_TEACHERS: TeacherItem[] = [
  { 
    id: 1, 
    name: 'OKTRI DARMADI, S.Kom., M.T.', 
    subjectTag: 'Guru Produktif IT & Pemrograman', 
    role: 'Kepala Sekolah SMK', 
    subject: 'Teknik Jaringan & Rekayasa Perangkat Lunak', 
    category: 'SMK Rasman Mulya', 
    badgeColor: 'bg-blue-600', 
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80', 
    education: 'S1 Teknik Informatika - Telkom University | S2 Teknik Elektro ITB', 
    bio: 'Berpengalaman lebih dari 10 tahun di industri arsitektur sistem komputasi sebelum mendedikasikan diri penuh membina talenta muda di SMK Rasman Mulya.',
    email: 'oktri.darmadi@rasmanmulya.sch.id',
    motto: 'Teknologi adalah sarana, adab dan integritas adalah fondasi peradaban manusia.',
    experience: '12 Tahun Mengajar & Konsultan IT Sekolah'
  },
  { 
    id: 2, 
    name: 'Nasrullah Iswahyudi, S.Pd.I.', 
    subjectTag: 'Guru Agama & Pembina Karakter', 
    role: 'Wakil Kepala Bagian Kesiswaan', 
    subject: 'Pendidikan Agama Islam & Budi Pekerti', 
    category: 'Pimpinan & Yayasan', 
    badgeColor: 'bg-purple-600', 
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80', 
    education: 'S1 Pendidikan Agama Islam - UIN Syarif Hidayatullah', 
    bio: 'Membimbing siswa dalam penguatan moralitas, akhlak karimah, adab keseharian, dan pembiasaan ibadah shalat berjamaah secara istiqomah.',
    email: 'nasrullah@rasmanmulya.sch.id',
    motto: 'Mendidik hati sebelum mencerdaskan akal fikiran.',
    experience: '14 Tahun Mengabdi di Bidang Kesiswaan & Tarbiyah'
  },
  { 
    id: 3, 
    name: 'Daruna Tarihoran, M.Pd.', 
    subjectTag: 'Guru Sains & Fisika Terapan', 
    role: 'Kepala Sekolah SMP', 
    subject: 'Ilmu Pengetahuan Alam (Fisika & Kimia)', 
    category: 'SMP Rasman Mulya', 
    badgeColor: 'bg-blue-600', 
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80', 
    education: 'S1 Pendidikan Fisika UNY | S2 Manajemen Pendidikan UPI', 
    bio: 'Menghadirkan pembelajaran sains aplikatif dengan eksperimen laboratorium yang merangsang daya nalar kritis dan kreativitas pemecahan masalah.',
    email: 'daruna.t@rasmanmulya.sch.id',
    motto: 'Belajar sains adalah proses mengagumi keagungan alam semesta.',
    experience: '16 Tahun Pengalaman Manajerial & Pembina Olimpiade'
  },
  { 
    id: 4, 
    name: 'Bancar Wasita, S.Pd.', 
    subjectTag: 'Guru IPS & Sejarah Kebangsaan', 
    role: 'Koordinator Ekstrakurikuler', 
    subject: 'Ilmu Pengetahuan Sosial', 
    category: 'Pimpinan & Yayasan', 
    badgeColor: 'bg-purple-600', 
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80', 
    education: 'S1 Pendidikan Sejarah - Universitas Negeri Malang', 
    bio: 'Mengajarkan sejarah peradaban nusantara dan analisis sosial kemasyarakatan dengan sudut pandang kritis serta semangat cinta tanah air.',
    email: 'bancar.wasita@rasmanmulya.sch.id',
    motto: 'Bangsa yang besar adalah bangsa yang tak melupakan sejarah masa lalunya.',
    experience: '9 Tahun Membina Pengembangan Kepemimpinan Siswa'
  },
  { 
    id: 5, 
    name: 'Siti Aminah, S.Pd., M.Hum.', 
    subjectTag: 'Guru Bahasa Inggris & Literasi', 
    role: 'Koordinator Bahasa & Debat', 
    subject: 'Bahasa Inggris', 
    category: 'SMP Rasman Mulya', 
    badgeColor: 'bg-blue-600', 
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80', 
    education: 'S1 Pendidikan Bahasa Inggris UNJ | S2 Linguistik Terapan UI', 
    bio: 'Fokus pada penguasaan kemampuan komunikasi lisan dan tulisan bertaraf global agar siswa percaya diri berbicara di forum internasional.',
    email: 'siti.aminah@rasmanmulya.sch.id',
    motto: 'A foreign language is a passport to global opportunities.',
    experience: '8 Tahun Pembina English Club & Debat Bahasa'
  },
  { 
    id: 6, 
    name: 'Rahmat Kurniawan, S.T.', 
    subjectTag: 'Instruktur Jaringan Komputer & Cloud', 
    role: 'Kepala Lab Komputer & TKJ', 
    subject: 'Teknik Komputer Jaringan', 
    category: 'SMK Rasman Mulya', 
    badgeColor: 'bg-emerald-600', 
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80', 
    education: 'S1 Teknik Komputer - Institut Teknologi Sepuluh Nopember (ITS)', 
    bio: 'Memegang sertifikasi MikroTik MTCNA/MTCRE dan Cisco CCNA. Membimbing siswa dalam perancangan infrastruktur jaringan skala enterprise.',
    email: 'rahmat.k@rasmanmulya.sch.id',
    motto: 'Practice makes progress, code with precision.',
    experience: '7 Tahun Praktisi Network Security & Trainer SMK'
  }
];

const INITIAL_TEACHER_HEADER: TeacherHeaderSettings = {
  tagline: 'DIREKTORI PENDIDIK & TENAGA KEPENDIDIKAN',
  judul: 'Dewan Guru & Tenaga Pendidik Berdedikasi',
  subjudul: 'Membimbing dan menginspirasi putra-putri bangsa dengan kompetensi profesional, keteladanan akhlak mulia, dan inovasi pembelajaran berbasis teknologi modern.',
  bannerUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80',
  badgeText: 'SMP & SMK Rasman Mulya'
};

const INITIAL_GALLERY: GalleryItem[] = [
  { id: 1, title: 'Acara Penutupan HUT RI: Gebyar Kemerdekaan & Karnaval Seni', type: 'foto', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80', date: '17 Agt 2026' },
  { id: 2, title: 'Perayaan Halal Bihalal & Silaturahmi Keluarga Besar Sekolah', type: 'foto', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80', date: '10 Mei 2026' },
  { id: 3, title: 'Kunjungan Industri Cyber Valley: Pengenalan Server & Cloud', type: 'foto', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80', date: '15 Sep 2026' },
  { id: 4, title: 'Shalat Dhuha & Dzuhur Berjamaah Tanamkan Kedisiplinan Siswa', type: 'foto', image: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=800&q=80', date: '12 Okt 2026' },
  { id: 5, title: 'Video Dokumenter Pembelajaran Aktif & Kreatif di Kelas', type: 'video', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80', date: '01 Nov 2026' },
  { id: 6, title: 'High Excellence Spirit: Liputan Kejuaraan Olahraga Terpadu', type: 'video', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80', date: '05 Nov 2026' },
  { id: 7, title: 'The Ramadan Camp: Pembinaan Spiritual & Berbagi Berkah', type: 'video', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80', date: '10 Mar 2026' },
];

const INITIAL_MENUS: MenuItem[] = [
  { id: 'home', label: 'Beranda', path: 'home', visible: true, submenus: [] },
  { id: 'artikel', label: 'Artikel', path: 'news', visible: true, submenus: [] },
  { 
    id: 'profil', 
    label: 'Profil', 
    path: 'profil', 
    visible: true, 
    submenus: [
      { id: 'p1', label: 'Profil Yayasan', path: 'profil_yayasan' },
      { id: 'p2', label: 'Profil SMP', path: 'profil_smp' },
      { id: 'p3', label: 'Profil SMK', path: 'profil_smk' },
    ]
  },
  { 
    id: 'informasi', 
    label: 'Informasi', 
    path: 'informasi', 
    visible: true, 
    submenus: [
      { id: 'i1', label: 'Galeri Kegiatan', path: 'gallery' },
      { id: 'i2', label: 'Tenaga Pendidik', path: 'teachers' },
    ]
  },
  { id: 'spmb', label: 'SPMB', path: 'spmb', visible: true, submenus: [] },
];

const INITIAL_SPMB: SpmbStudent[] = [
  { id: 101, name: 'Ahmad Faiz Zaidan', jenjang: 'SMK', status: 'Diterima', asalSekolah: 'SMP Negeri 1 Harapan', phone: '081234567890', parentName: 'H. Sudirman', registeredAt: '2026-10-01' },
  { id: 102, name: 'Siti Rahma Azzahra', jenjang: 'SMP', status: 'Menunggu Verifikasi', asalSekolah: 'SDIT Bina Umat', phone: '082198765432', parentName: 'Rahmat Hidayat', registeredAt: '2026-10-05' },
  { id: 103, name: 'Muhammad Rayhan Pratama', jenjang: 'SMK', status: 'Menunggu Verifikasi', asalSekolah: 'SMP Nusantara', phone: '085712349988', parentName: 'Gunawan Prasetyo', registeredAt: '2026-10-08' },
  { id: 104, name: 'Nabila Putri Santoso', jenjang: 'SMP', status: 'Diterima', asalSekolah: 'SD Negeri Harapan Baru', phone: '081399887766', parentName: 'Agus Santoso', registeredAt: '2026-10-09' },
];

const INITIAL_SPMB_SETTINGS: SpmbSettings = {
  judul: 'Penerimaan Murid Baru (SPMB) Online 2026/2027',
  subjudul: 'Pendaftaran Peserta Didik Baru SMP & SMK Rasman Mulya. Wujudkan masa depan gemilang dengan pendidikan karakter dan keahlian vokasi unggul!',
  isOpened: true,
  gelombang: 'Gelombang I: 01 Januari s/d 30 Juni 2026',
  biayaPendaftaran: 'Gratis Biaya Pendaftaran (Rp 0,-)',
  jalurPendaftaran: 'Jalur Reguler, Prestasi Akademik/Non-Akademik, & Beasiswa Tahfidz Al-Quran',
  kontakPanitia: '0898-0440-088',
  bannerUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
  persyaratan: `1. Mengisi Formulir Pendaftaran Online secara lengkap dan benar.
2. Fotokopi Kartu Keluarga (KK) & Akta Kelahiran (masing-masing 2 lembar).
3. Fotokopi Ijazah / Surat Keterangan Lulus (SKL) yang dilegalisir basah.
4. Pas foto formal terbaru ukuran 3x4 berwarna dengan latar biru/merah (3 lembar).
5. Fotokopi sertifikat/piagam prestasi kejuaraan minimal tingkat Kabupaten (khusus pendaftar Jalur Prestasi).`,
  alurPendaftaran: `Langkah 1: Mengisi formulir pendaftaran online di laman SPMB ini.
Langkah 2: Konfirmasi pendaftaran melalui WhatsApp panitia untuk verifikasi data awal.
Langkah 3: Mengikuti observasi minat & bakat serta tes potensi akademik (jadwal dikirim via WA).
Langkah 4: Pengumuman kelulusan hasil seleksi dan proses daftar ulang / pengukuran seragam.`,
  catatanTambahan: 'Tersedia Program Beasiswa Bebas SPP hingga 1 Tahun Penuh bagi siswa berprestasi Juara Umum 1-3 dan Penghafal Al-Quran minimal 3 Juz.',
  
  // Rincian Biaya Masuk Awal
  judulBiaya: 'Rincian Biaya Masuk & Investasi Pendidikan',
  subjudulBiaya: 'Transparansi pembiayaan pendidikan awal masuk Tahun Ajaran 2026/2027 dengan kemudahan skema cicilan 0%.',
  totalBiayaSmp: 'Rp 3.850.000',
  totalBiayaSmk: 'Rp 4.450.000',
  kebijakanCicilan: 'Biaya masuk dapat diangsur hingga 3 kali selama semester pertama tanpa dikenakan bunga tambahan. Keringanan khusus 50% tersedia untuk siswa yatim/piatu dan keluarga pra-sejahtera.',
  fotoRincianBiayaUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
  biayaItems: [
    { id: '1', komponen: 'Uang Pangkal / Pengembangan Sarana Gedung', biayaSmp: 'Rp 1.500.000', biayaSmk: 'Rp 1.800.000', keterangan: 'Dibayarkan 1x selama masa studi' },
    { id: '2', komponen: 'Paket Seragam Lengkap & Atribut (5 Stel)', biayaSmp: 'Rp 950.000', biayaSmk: 'Rp 1.150.000', keterangan: 'Termasuk seragam OSIS, Batik, Pramuka, Olahraga, Kejuruan' },
    { id: '3', komponen: 'Iuran SPP Bulan Pertama (Juli 2026)', biayaSmp: 'Rp 350.000', biayaSmk: 'Rp 400.000', keterangan: 'Sudah termasuk praktikum lab komputer' },
    { id: '4', komponen: 'Kegiatan Pengenalan Lingkungan Sekolah (MPLS)', biayaSmp: 'Rp 300.000', biayaSmk: 'Rp 300.000', keterangan: 'Termasuk modul orientasi karakter & konsumsi' },
    { id: '5', komponen: 'Asuransi Kesehatan Siswa & Kartu Pelajar Digital', biayaSmp: 'Rp 150.000', biayaSmk: 'Rp 150.000', keterangan: 'Berlaku perlindungan 1 tahun akademik' },
    { id: '6', komponen: 'Modul Pembelajaran & Akun E-Learning', biayaSmp: 'Rp 600.000', biayaSmk: 'Rp 650.000', keterangan: 'Akses LMS cloud dan materi digital setahun' },
  ]
};

// Reusable Modal
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh] border border-slate-100">
        <div className="flex justify-between items-center p-5 border-b border-gray-100 bg-slate-50/50">
          <h3 className="font-bold text-lg text-slate-800">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 hover:bg-gray-100 p-1.5 rounded-lg transition" aria-label="Tutup">
            <X size={20} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpen, onClose, onConfirm, title, message }) => (
  <Modal isOpen={isOpen} onClose={onClose} title={title}>
    <p className="mb-6 text-slate-600 leading-relaxed">{message}</p>
    <div className="flex justify-end space-x-3">
      <button onClick={onClose} className="px-5 py-2.5 border border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition">
        Batal
      </button>
      <button 
        onClick={() => { onConfirm(); onClose(); }} 
        className="px-5 py-2.5 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition shadow-sm"
      >
        Hapus
      </button>
    </div>
  </Modal>
);

interface ImageUploadProps {
  label?: string;
  value?: string;
  onChange: (dataUrl: string) => void;
  hint?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ label, value, onChange, hint }) => {
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          onChange(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full">
      {label && <label className="block text-sm font-semibold text-slate-700 mb-1.5">{label}</label>}
      <div className="flex items-center space-x-4">
        {value ? (
          <div className="w-16 h-16 rounded-xl overflow-hidden bg-transparent shrink-0">
            <img src={value} alt="Preview" className="w-full h-full object-contain" />
          </div>
        ) : (
          <div className="w-16 h-16 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 shrink-0">
            <ImageIcon size={24} />
          </div>
        )}
        <div className="flex-1">
          <label className="cursor-pointer bg-white border border-slate-300 text-slate-700 px-3.5 py-2 rounded-xl hover:bg-slate-50 flex items-center justify-center text-xs font-semibold transition shadow-sm w-fit active:scale-95">
            <Upload size={14} className="mr-2 text-blue-600" /> Unggah Gambar
            <input type="file" className="sr-only" accept="image/*" onChange={handleFile} />
          </label>
          {hint && <p className="text-[11px] text-slate-400 mt-1 leading-snug">{hint}</p>}
        </div>
      </div>
    </div>
  );
};

// Navigation With Transparent Logo (No border, No stroke, No box)
interface NavigationProps {
  currentPath: string;
  setCurrentPath: (path: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  webSettings: WebSettings;
  menus: MenuItem[];
  adminUser?: { username: string; name: string; email: string; role: string } | null;
  onLogout?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  currentPath, 
  setCurrentPath, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen, 
  webSettings, 
  menus,
  adminUser,
  onLogout
}) => {
  const visibleMenus = menus.filter(m => m.visible);

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-200 text-gray-700 hidden md:block">
        <div className="container mx-auto px-4 max-w-6xl py-2 flex justify-between items-center text-xs font-medium">
          <div className="flex space-x-6">
            <span className="flex items-center text-slate-600">
              <Phone size={14} className="mr-1.5 text-blue-800" /> {webSettings.whatsapp}
            </span>
            <span className="flex items-center text-slate-600">
              <Mail size={14} className="mr-1.5 text-blue-800" /> {webSettings.email}
            </span>
          </div>
          <div className="flex space-x-4 items-center">
             <div className="flex space-x-2 text-white">
                <a href={webSettings.sosmed?.facebook || '#'} target="_blank" rel="noreferrer" className="bg-[#1877F2] p-1.5 rounded hover:opacity-80 transition" title="Facebook">
                  <Facebook size={13} fill="currentColor" strokeWidth={0} />
                </a>
                <a href={webSettings.sosmed?.instagram || '#'} target="_blank" rel="noreferrer" className="bg-[#E4405F] p-1.5 rounded hover:opacity-80 transition" title="Instagram">
                  <Instagram size={13} />
                </a>
                <a href={webSettings.sosmed?.youtube || '#'} target="_blank" rel="noreferrer" className="bg-[#FF0000] p-1.5 rounded hover:opacity-80 transition" title="YouTube">
                  <Youtube size={13} fill="currentColor" strokeWidth={0} />
                </a>
                <a href={webSettings.sosmed?.twitter || '#'} target="_blank" rel="noreferrer" className="bg-[#1DA1F2] p-1.5 rounded hover:opacity-80 transition" title="Twitter/X">
                  <Twitter size={13} fill="currentColor" strokeWidth={0} />
                </a>
             </div>

             {/* Admin Session Status / Login Button */}
             {adminUser ? (
               <div className="flex items-center space-x-2 ml-2">
                 <div className="flex items-center bg-blue-50 text-blue-900 border border-blue-200 px-2.5 py-1 rounded-lg text-[11px] font-bold">
                   <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-1.5" />
                   <span className="truncate max-w-[120px]">{adminUser.name || adminUser.username}</span>
                 </div>
                 <button 
                   onClick={() => setCurrentPath('admin')} 
                   className="text-xs font-bold bg-[#1e2a78] hover:bg-blue-900 text-white px-3 py-1 rounded-lg transition flex items-center shadow-xs active:scale-95"
                 >
                    <LayoutDashboard size={13} className="mr-1.5 text-yellow-400" /> Panel Admin
                 </button>
                 <button 
                   onClick={onLogout} 
                   className="text-xs font-bold bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 px-2.5 py-1 rounded-lg transition flex items-center active:scale-95"
                   title="Keluar dari sesi administrator"
                 >
                    <LogOut size={13} className="mr-1" /> Logout
                 </button>
               </div>
             ) : !webSettings.hideAdminLogin ? (
               <button 
                 onClick={() => setCurrentPath('login')} 
                 className="text-xs font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 px-3.5 py-1 rounded-lg transition flex items-center ml-2 shadow-sm active:scale-95"
                 title="Login ke panel administrator"
               >
                  <Lock size={13} className="mr-1.5" /> Login Admin
               </button>
             ) : null}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#1e2a78] text-white">
        <div className="container mx-auto px-4 max-w-6xl py-3 flex justify-between items-center">
          {/* Logo Brand: Completely transparent, NO border, NO stroke */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => setCurrentPath('home')}>
            <div className="h-10 w-auto flex items-center justify-center bg-transparent border-0 ring-0 shadow-none outline-none shrink-0 p-0">
              {webSettings.logoUrl ? (
                <img 
                  src={webSettings.logoUrl} 
                  alt="Logo" 
                  className="h-10 w-auto max-h-10 object-contain bg-transparent border-0 ring-0 shadow-none" 
                />
              ) : (
                <span className="font-black text-2xl text-yellow-400 tracking-wider">RM</span>
              )}
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-extrabold leading-tight tracking-wide text-yellow-400 uppercase group-hover:text-yellow-300 transition">
                {webSettings.namaWeb}
              </h1>
              <h2 className="text-[10px] md:text-[11px] text-white font-medium tracking-wider opacity-90">
                {webSettings.namaPerusahaan}
              </h2>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 text-sm font-semibold">
            {visibleMenus.map((item) => (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => (!item.submenus || item.submenus.length === 0 ? setCurrentPath(item.path) : null)}
                  className={`flex items-center hover:text-yellow-400 transition-colors py-2 ${currentPath === item.path ? 'text-yellow-400 font-bold' : ''}`}
                >
                  {item.label}
                  {item.submenus && item.submenus.length > 0 && <ChevronDown size={14} className="ml-1" />}
                </button>
                {item.submenus && item.submenus.length > 0 && (
                  <div className="absolute left-0 mt-0 w-52 bg-white rounded-xl shadow-xl py-2 hidden group-hover:block border border-gray-100 z-50">
                    {item.submenus.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => setCurrentPath(sub.path)}
                        className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="flex items-center space-x-3 ml-2">
              <button 
                onClick={() => setCurrentPath('spmb')}
                className="bg-yellow-400 text-blue-950 font-black px-5 py-2 rounded-xl hover:bg-yellow-300 transition-all flex items-center shadow-md active:scale-95"
              >
                <GraduationCap size={16} className="mr-1.5" /> SPMB Online
              </button>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button 
            className="md:hidden text-white p-1 rounded-lg hover:bg-white/10" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#182260] border-t border-blue-900/60 animate-in slide-in-from-top-2">
            <div className="flex flex-col px-4 py-3 space-y-1">
              {visibleMenus.map((item) => (
                <div key={item.id} className="border-b border-blue-800/40 pb-1">
                  <button
                    onClick={() => {
                      if (!item.submenus || item.submenus.length === 0) {
                        setCurrentPath(item.path);
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    className={`w-full text-left py-2.5 font-medium flex justify-between items-center ${currentPath === item.path ? 'text-yellow-400 font-bold' : 'text-white'}`}
                  >
                    <span>{item.label}</span>
                    {item.submenus && item.submenus.length > 0 && <ChevronDown size={16} />}
                  </button>
                  {item.submenus && item.submenus.length > 0 && (
                    <div className="pl-4 pb-2 space-y-1 bg-black/10 rounded-lg p-2 my-1">
                      {item.submenus.map(sub => (
                        <button
                          key={sub.id}
                          onClick={() => { setCurrentPath(sub.path); setIsMobileMenuOpen(false); }}
                          className="block w-full text-left py-1.5 text-xs text-blue-200 hover:text-yellow-400"
                        >
                          • {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 flex flex-col space-y-2">
                <button 
                  onClick={() => { setCurrentPath('spmb'); setIsMobileMenuOpen(false); }}
                  className="w-full bg-yellow-400 text-blue-950 font-bold py-2.5 rounded-xl text-center shadow"
                >
                  SPMB Online
                </button>
                {adminUser ? (
                  <>
                    <div className="p-2.5 bg-blue-950/80 border border-blue-800/80 rounded-xl text-xs text-blue-200 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="font-bold text-white truncate max-w-[150px]">{adminUser.name || adminUser.username}</span>
                      </div>
                      <span className="text-[10px] bg-blue-800 px-2 py-0.5 rounded text-yellow-300 font-mono">Super Admin</span>
                    </div>
                    <button 
                      onClick={() => { setCurrentPath('admin'); setIsMobileMenuOpen(false); }}
                      className="w-full bg-[#1e2a78] text-white font-bold py-2 rounded-xl text-center text-xs border border-blue-600 flex items-center justify-center shadow"
                    >
                      <LayoutDashboard size={14} className="mr-1.5 text-yellow-400" /> Buka Panel Admin
                    </button>
                    <button 
                      onClick={() => { onLogout?.(); setIsMobileMenuOpen(false); }}
                      className="w-full bg-red-900/40 text-red-200 font-semibold py-1.5 rounded-xl text-center text-xs border border-red-800/60 flex items-center justify-center"
                    >
                      <LogOut size={13} className="mr-1.5" /> Logout Admin
                    </button>
                  </>
                ) : !webSettings.hideAdminLogin ? (
                  <button 
                    onClick={() => { setCurrentPath('login'); setIsMobileMenuOpen(false); }}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2 rounded-xl text-center text-xs flex items-center justify-center shadow"
                  >
                    <Lock size={14} className="mr-1.5" /> Login Administrator
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

// Hero Slider
const HeroSlider: React.FC<{ slides: SlideItem[] }> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 2);
    };
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, slides.length - itemsPerView);

  useEffect(() => {
    if (slides.length <= itemsPerView) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length, maxIndex, itemsPerView]);

  if (!slides || slides.length === 0) return null;

  return (
    <div className="relative w-full">
      <div className="overflow-hidden w-full h-[240px] sm:h-[320px] md:h-[360px]">
        <div 
          className="flex transition-transform duration-700 ease-out h-full w-full"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="flex-shrink-0 h-full relative group px-2 md:px-3" style={{ width: `${100 / itemsPerView}%` }}>
               <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl bg-slate-900 relative group cursor-pointer border border-white/10">
                 <img src={slide.image} alt={slide.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                 <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 text-white z-10">
                     <span className="inline-block bg-yellow-500/90 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded uppercase tracking-wider mb-2">
                       Sorotan
                     </span>
                     <h2 className="text-lg md:text-2xl lg:text-3xl font-black mb-1.5 md:mb-2 uppercase tracking-wide drop-shadow-md leading-tight text-white">
                       {slide.title}
                     </h2>
                     <p className="text-xs md:text-sm drop-shadow text-gray-200 line-clamp-2 leading-relaxed max-w-xl">
                       {slide.desc}
                     </p>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>

      {slides.length > itemsPerView && (
        <div className="absolute -bottom-7 left-0 right-0 flex justify-center space-x-2 z-20">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentIndex ? 'w-8 bg-yellow-400' : 'w-2.5 bg-white/50 hover:bg-white/80'}`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Teacher Section With Custom Header Inputs, Horizontal Sliding & Full Profile Opener
interface TeachersSectionProps {
  teachers: TeacherItem[];
  headerSettings: TeacherHeaderSettings;
  onSelectTeacher: (teacher: TeacherItem) => void;
  isStandalonePage?: boolean;
}

const TeachersSection: React.FC<TeachersSectionProps> = ({ 
  teachers, 
  headerSettings, 
  onSelectTeacher, 
  isStandalonePage = false 
}) => {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const categories = ['Semua', 'SMP Rasman Mulya', 'SMK Rasman Mulya', 'Pimpinan & Yayasan'];

  const filteredTeachers = activeFilter === 'Semua' 
    ? teachers 
    : teachers.filter(t => t.category === activeFilter);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#0f172a] py-14 font-sans text-white border-t border-slate-800 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Custom Attractive Header Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-10 shadow-2xl border border-slate-800 bg-[#1e293b]">
          {headerSettings.bannerUrl && (
            <div className="absolute inset-0">
              <img 
                src={headerSettings.bannerUrl} 
                alt="Header Guru" 
                className="w-full h-full object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/90 to-transparent"></div>
            </div>
          )}

          <div className="relative z-10 p-6 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 mb-2.5">
                <span className="bg-yellow-400 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded tracking-wider uppercase flex items-center">
                  <Sparkles size={12} className="mr-1" /> {headerSettings.tagline || 'DIREKTORI PENDIDIK'}
                </span>
                <span className="bg-blue-600/60 text-blue-200 border border-blue-400/30 text-xs px-2.5 py-0.5 rounded-full font-semibold">
                  {headerSettings.badgeText}
                </span>
                <span className="bg-slate-800 text-gray-300 text-xs px-2.5 py-0.5 rounded-full border border-slate-700">
                  Total: {teachers.length} Guru
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-white mb-2 leading-tight">
                {headerSettings.judul}
              </h2>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                {headerSettings.subjudul}
              </p>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center space-x-2 shrink-0 self-end md:self-center">
              <button 
                onClick={scrollLeft}
                aria-label="Geser ke kiri"
                className="w-11 h-11 rounded-2xl bg-slate-800/90 hover:bg-yellow-400 hover:text-slate-950 text-white flex items-center justify-center transition border border-slate-700 active:scale-95 shadow-md"
                title="Geser ke kiri"
              >
                <ChevronLeft size={22} />
              </button>
              <button 
                onClick={scrollRight}
                aria-label="Geser ke kanan"
                className="w-11 h-11 rounded-2xl bg-slate-800/90 hover:bg-yellow-400 hover:text-slate-950 text-white flex items-center justify-center transition border border-slate-700 active:scale-95 shadow-md"
                title="Geser ke kanan"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setActiveFilter(cat);
                  if (scrollContainerRef.current) scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                  activeFilter === cat 
                    ? 'bg-yellow-400 text-slate-950 shadow-md' 
                    : 'bg-slate-900 text-gray-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-gray-400 font-medium">
            Menampilkan <span className="text-yellow-400 font-bold">{filteredTeachers.length}</span> Pendidik
          </div>
        </div>

        {/* Horizontal Carousel (Bisa Geser Kanan & Kiri) */}
        <div 
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory scrollbar-none focus:outline-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredTeachers.map((teacher) => (
             <div 
               key={teacher.id} 
               className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] max-w-[320px] shrink-0 snap-start bg-[#1e293b] rounded-3xl overflow-hidden border border-slate-800 hover:border-yellow-400/70 transition-all duration-300 group flex flex-col relative shadow-lg hover:shadow-2xl hover:-translate-y-1.5"
             >
                <div className="relative h-[310px] w-full overflow-hidden bg-slate-800">
                   <img 
                     src={teacher.image} 
                     alt={teacher.name} 
                     className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                   />
                   <div className="absolute top-3.5 left-3.5 z-20">
                     <span className={`${teacher.badgeColor || 'bg-blue-600'} text-white text-[10px] font-bold px-3 py-1 rounded-lg shadow-md uppercase tracking-wider`}>
                       {teacher.category === 'Pimpinan & Yayasan' ? 'Yayasan' : teacher.category}
                     </span>
                   </div>
                   <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-[#1e293b]/20 to-transparent z-10"></div>
                   <div className="absolute bottom-3 left-4 right-4 z-20">
                     <span className="text-yellow-400 font-bold text-xs tracking-wide block truncate">
                       {teacher.subjectTag}
                     </span>
                   </div>
                </div>
                <div className="p-5 flex flex-col flex-grow justify-between">
                   <div>
                     <h3 className="text-base font-extrabold text-white mb-1.5 leading-snug line-clamp-1 group-hover:text-yellow-300 transition">
                       {teacher.name}
                     </h3>
                     <div className="space-y-0.5 mb-4 text-xs text-gray-400">
                       {teacher.role && <p className="font-semibold text-gray-300">{teacher.role}</p>}
                       {teacher.subject && <p className="text-gray-400 truncate">{teacher.subject}</p>}
                     </div>
                   </div>
                   
                   {/* Tombol yang merender halaman detail profil guru secara penuh */}
                   <button 
                     onClick={() => onSelectTeacher(teacher)} 
                     className="w-full py-2.5 rounded-xl flex items-center justify-center text-xs font-bold transition-all bg-yellow-400 text-slate-950 hover:bg-yellow-300 shadow-md active:scale-98"
                   >
                     <User size={14} className="mr-2" /> Lihat Profil Detail Lengkap
                   </button>
                </div>
             </div>
          ))}
        </div>

        {/* Carousel indicator hint */}
        <div className="flex justify-between items-center text-xs text-slate-500 pt-2 border-t border-slate-800/80">
          <span>Geser kartu ke kanan dan kiri untuk melihat seluruh pendidik</span>
          <span className="flex items-center text-yellow-400 font-medium">
            Geser lainnya <ArrowRight size={14} className="ml-1 animate-pulse" />
          </span>
        </div>
      </div>
    </section>
  );
};

// Full Dedicated Teacher Detail Profile Page
interface TeacherDetailViewProps {
  teacher: TeacherItem;
  onBack: () => void;
  allTeachers: TeacherItem[];
  onSelectOtherTeacher: (teacher: TeacherItem) => void;
}

const TeacherDetailView: React.FC<TeacherDetailViewProps> = ({ 
  teacher, 
  onBack, 
  allTeachers, 
  onSelectOtherTeacher 
}) => {
  const otherTeachers = allTeachers.filter(t => t.id !== teacher.id).slice(0, 4);

  return (
    <div className="bg-slate-50 min-h-screen py-10 font-sans">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Back navigation */}
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={onBack} 
            className="flex items-center text-slate-700 hover:text-blue-700 font-bold bg-white border border-slate-200 px-4 py-2.5 rounded-xl shadow-sm transition active:scale-95 text-xs md:text-sm"
          >
            <ChevronLeft size={18} className="mr-1"/> Kembali ke Direktori Guru
          </button>
          <span className="text-xs text-slate-500 hidden sm:inline">
            Halaman Profil Lengkap Pendidik
          </span>
        </div>

        {/* Main Profile Card */}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden mb-10">
          {/* Top Banner Cover */}
          <div className="h-44 md:h-56 bg-gradient-to-r from-[#1e2a78] via-blue-900 to-indigo-950 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="w-96 h-96 rounded-full bg-yellow-400 blur-3xl -top-20 -left-20 absolute"></div>
              <div className="w-96 h-96 rounded-full bg-blue-400 blur-3xl -bottom-20 -right-20 absolute"></div>
            </div>
            <div className="absolute top-4 right-4 md:top-6 md:right-6">
              <span className={`${teacher.badgeColor || 'bg-blue-600'} text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-md uppercase tracking-wider`}>
                {teacher.category}
              </span>
            </div>
          </div>

          {/* Profile Header Info */}
          <div className="px-6 md:px-12 pb-10 pt-0 relative">
            <div className="flex flex-col md:flex-row md:items-end -mt-20 md:-mt-24 mb-8 gap-6">
              {/* Photo */}
              <div className="w-36 h-44 md:w-48 md:h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 shrink-0">
                <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover object-top" />
              </div>
              
              {/* Name & Titles */}
              <div className="flex-1">
                <span className="text-xs font-bold text-yellow-600 uppercase tracking-wider block mb-1">
                  {teacher.subjectTag}
                </span>
                <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-2">
                  {teacher.name}
                </h1>
                <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs md:text-sm text-slate-600">
                  {teacher.role && (
                    <span className="flex items-center font-semibold text-[#1e2a78] bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                      <Briefcase size={15} className="mr-1.5 text-blue-700" /> {teacher.role}
                    </span>
                  )}
                  {teacher.subject && (
                    <span className="flex items-center text-slate-700 bg-slate-100 px-3 py-1 rounded-lg">
                      <BookOpen size={15} className="mr-1.5 text-slate-600" /> Mata Pelajaran: {teacher.subject}
                    </span>
                  )}
                  {teacher.email && (
                    <span className="flex items-center text-slate-600 bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">
                      <Mail size={15} className="mr-1.5 text-slate-500" /> {teacher.email}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Motivational Quote Banner */}
            {teacher.motto && (
              <div className="mb-8 p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-yellow-50 border border-yellow-200 text-yellow-950 flex items-start space-x-3">
                <Sparkles size={20} className="text-yellow-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-black uppercase text-yellow-800 tracking-wider mb-0.5">Moto / Filosofi Pendidik</p>
                  <p className="italic text-sm font-medium">"{teacher.motto}"</p>
                </div>
              </div>
            )}

            {/* Detailed Content Columns */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 border-t border-slate-100">
              {/* Left Column: Bio */}
              <div className="md:col-span-7 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                    <User size={18} className="mr-2 text-[#1e2a78]"/> Biografi Singkat & Profil Mengajar
                  </h3>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 leading-relaxed text-sm md:text-base text-slate-700 whitespace-pre-line">
                    {teacher.bio || 'Data biografi pengajar belum ditambahkan secara rinci oleh administrator.'}
                  </div>
                </div>

                {teacher.experience && (
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                      <Award size={18} className="mr-2 text-[#1e2a78]"/> Pengalaman & Jam Terbang
                    </h3>
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-sm text-slate-700">
                      <p>{teacher.experience}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Education & Info Cards */}
              <div className="md:col-span-5 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                    <GraduationCap size={18} className="mr-2 text-yellow-600"/> Riwayat Pendidikan
                  </h3>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-sm text-slate-700 space-y-3">
                    <p className="leading-relaxed font-medium">
                      {teacher.education || 'Riwayat pendidikan formal guru terdata di data kepegawaian yayasan.'}
                    </p>
                    <div className="pt-3 border-t border-slate-200 text-xs text-slate-500 flex items-center">
                      <CheckCircle size={14} className="mr-1.5 text-emerald-600"/> Ijazah Terverifikasi Lembaga Resmi
                    </div>
                  </div>
                </div>

                {/* Unit Affiliation Card */}
                <div className="bg-[#1e2a78] text-white p-6 rounded-2xl shadow-md space-y-3">
                  <div className="flex items-center space-x-2 text-xs font-bold text-yellow-400 uppercase tracking-wider">
                    <School size={16} /> Unit Pendidikan
                  </div>
                  <h4 className="text-lg font-extrabold">{teacher.category}</h4>
                  <p className="text-xs text-blue-200 leading-relaxed">
                    Berperan aktif dalam proses belajar mengajar, pembinaan ekstrakurikuler, dan pengembangan karakter generasi muda di lingkungan Yayasan Pendidikan Rasman Mulya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Teachers Section */}
        {otherTeachers.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Profil Pendidik Lainnya</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {otherTeachers.map(ot => (
                <div 
                  key={ot.id}
                  onClick={() => { onSelectOtherTeacher(ot); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="bg-white p-4 rounded-2xl border border-slate-200 hover:shadow-md transition cursor-pointer group flex flex-col items-center text-center"
                >
                  <img src={ot.image} alt={ot.name} className="w-16 h-20 object-cover rounded-xl mb-3 shadow-sm group-hover:scale-105 transition" />
                  <h4 className="text-xs font-bold text-slate-800 line-clamp-1 group-hover:text-blue-700">{ot.name}</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">{ot.subjectTag}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Gallery Section
const GallerySection: React.FC<{ galleries: GalleryItem[] }> = ({ galleries }) => {
  const [lightbox, setLightbox] = useState<{ isOpen: boolean; item: GalleryItem | null }>({ isOpen: false, item: null });
  const fotos = galleries.filter(g => g.type === 'foto');
  const videos = galleries.filter(g => g.type === 'video');

  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Photo Gallery */}
        <div className="mb-14">
          <div className="flex justify-between items-end mb-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-blue-100 text-[#1e2a78] text-[10px] font-bold px-2 py-0.5 rounded uppercase">Dokumentasi</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e2a78]">Galeri Kegiatan</h2>
              <p className="text-sm text-gray-500 mt-1">Dokumentasi momen kegiatan dan prestasi Yayasan Pendidikan Rasman Mulya</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {fotos.map(foto => (
              <div 
                key={foto.id} 
                onClick={() => setLightbox({ isOpen: true, item: foto })} 
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md aspect-video bg-slate-100 cursor-zoom-in transition"
              >
                <img src={foto.image} alt={foto.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-4 opacity-95 group-hover:opacity-100 transition">
                  <span className="text-[10px] text-yellow-400 font-semibold mb-1">{foto.date}</span>
                  <h4 className="text-white font-bold text-xs md:text-sm leading-snug line-clamp-2">{foto.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Gallery */}
        <div>
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e2a78]">Galeri Video</h2>
            <p className="text-sm text-gray-500 mt-1">Video liputan kegiatan, profil sekolah, dan acara tahunan</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map(video => (
              <div 
                key={video.id} 
                onClick={() => setLightbox({ isOpen: true, item: video })} 
                className="group relative rounded-2xl overflow-hidden shadow-md aspect-video bg-slate-900 cursor-zoom-in border border-gray-100"
              >
                <img src={video.image} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex flex-col items-center justify-center p-4">
                   <div className="w-14 h-14 bg-white/95 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition">
                      <PlayCircle size={36} className="text-[#1e2a78] ml-0.5" />
                   </div>
                   <div className="absolute bottom-3 left-4 right-4 text-center">
                     <p className="text-white text-xs font-bold truncate drop-shadow">{video.title}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox.isOpen && lightbox.item && (
        <div 
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-10 animate-in fade-in" 
          onClick={() => setLightbox({ isOpen: false, item: null })}
        >
           <button className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-red-400 transition z-50 p-2" aria-label="Tutup">
             <X size={32} />
           </button>
           <div className="relative max-w-4xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
              {lightbox.item.type === 'video' && (
                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md shadow-md z-10 flex items-center">
                  <PlayCircle size={14} className="mr-1.5"/> MEDIA VIDEO
                </div>
              )}
              <img 
                src={lightbox.item.image} 
                alt={lightbox.item.title} 
                className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/10" 
              />
              <div className="bg-white/10 backdrop-blur-md w-full p-4 md:p-6 mt-4 rounded-2xl text-center border border-white/20">
                 <h3 className="text-white text-lg md:text-xl font-bold mb-1">{lightbox.item.title}</h3>
                 <p className="text-gray-300 text-xs">{lightbox.item.date}</p>
              </div>
           </div>
        </div>
      )}
    </section>
  );
};

// Home View
interface HomeProps {
  setCurrentPath: (path: string) => void;
  setViewPost: (post: ArticleItem | PageItem) => void;
  onSelectTeacher: (teacher: TeacherItem) => void;
  slides: SlideItem[];
  articles: ArticleItem[];
  teachers: TeacherItem[];
  teacherHeaderSettings: TeacherHeaderSettings;
  galleries: GalleryItem[];
  homeContent: HomeContent;
  homeStats: HomeStat[];
  quickLinks: QuickLinkItem[];
}

const Home: React.FC<HomeProps> = ({ 
  setCurrentPath, 
  setViewPost, 
  onSelectTeacher,
  slides, 
  articles, 
  teachers, 
  teacherHeaderSettings,
  galleries, 
  homeContent, 
  homeStats, 
  quickLinks 
}) => {
  const getStatIcon = (id: number) => {
    switch (id) {
      case 1: return <Briefcase size={36} className="mb-3 text-yellow-400" strokeWidth={1.5} />;
      case 2: return <GraduationCap size={36} className="mb-3 text-yellow-400" strokeWidth={1.5} />;
      case 3: return <Users size={36} className="mb-3 text-yellow-400" strokeWidth={1.5} />;
      case 4: return <Activity size={36} className="mb-3 text-yellow-400" strokeWidth={1.5} />;
      default: return <Award size={36} className="mb-3 text-yellow-400" strokeWidth={1.5} />;
    }
  };

  const getLucideIcon = (iconName: string) => {
     switch(iconName) {
        case 'Monitor': return <Monitor size={28} className="text-blue-500" strokeWidth={1.8} />;
        case 'User': return <User size={28} className="text-amber-500" strokeWidth={1.8} />;
        case 'Binoculars': return <Binoculars size={28} className="text-indigo-600" strokeWidth={1.8} />;
        case 'Megaphone': return <Megaphone size={28} className="text-emerald-500" strokeWidth={1.8} />;
        case 'GraduationCap': return <GraduationCap size={28} className="text-yellow-500" strokeWidth={1.8} />;
        case 'Calendar': return <Calendar size={28} className="text-slate-500" strokeWidth={1.8} />;
        case 'Activity': return <Activity size={28} className="text-cyan-500" strokeWidth={1.8} />;
        case 'Trophy': return <Trophy size={28} className="text-yellow-600" strokeWidth={1.8} />;
        default: return <Globe size={28} className="text-blue-500" strokeWidth={1.8} />;
     }
  };

  return (
    <div className="bg-white">
      {/* Hero Blue Curved Container */}
      <div className="relative bg-[#1e2a78] pt-6 pb-10 md:pb-14">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
           <div className="-mx-2 md:-mx-3">
              <HeroSlider slides={slides} />
           </div>
        </div>
        
        {/* SVG Curve Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[28px] md:h-[50px] lg:h-[70px]">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
            </svg>
        </div>
      </div>

      {/* Quick Links Section */}
      <section className="pt-4 md:pt-6 pb-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="mb-6 md:mb-8 text-center md:text-left">
             <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#1e2a78] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full mb-2">
                <Sparkles size={14} className="text-yellow-500" /> Portal Terpadu
             </div>
             <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">
               Selamat Datang di Yayasan Pendidikan Rasman Mulya
             </h2>
             <p className="text-sm text-slate-500 mt-1">Pintasan menu cepat untuk akses informasi akademik dan kegiatan sekolah</p>
           </div>
           
           <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3 md:gap-4 w-full">
             {quickLinks.map((item) => (
               <button 
                 key={item.id} 
                 onClick={() => setCurrentPath(item.path)}
                 className="flex flex-col items-center justify-center w-full aspect-square md:aspect-auto md:h-[110px] bg-white border border-slate-200 rounded-2xl hover:border-[#1e2a78] hover:shadow-lg transition-all duration-300 group p-3 active:scale-95"
               >
                 <div className="mb-2 transform group-hover:-translate-y-1 transition-transform duration-300">
                    {getLucideIcon(item.icon)}
                 </div>
                 <span className="text-xs font-bold text-slate-700 group-hover:text-[#1e2a78] text-center leading-tight">
                   {item.label}
                 </span>
               </button>
             ))}
           </div>
        </div>
      </section>

      {/* Sambutan & Visi Misi */}
      <section className="py-12 bg-slate-50/70 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Foto Kepala Sekolah / Pimpinan Yayasan (Ukuran Diperkecil Presisi & Proporsional) */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[250px] sm:max-w-[270px] aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border-2 border-white ring-1 ring-slate-200/90 bg-slate-900 group transition-all duration-300 hover:shadow-xl">
                <img 
                  src={homeContent.kepsekImage} 
                  alt={homeContent.kepsekName || "Pimpinan Sekolah"} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent flex flex-col justify-end p-4 md:p-5">
                  <span className="bg-yellow-400 text-slate-950 text-[9px] font-black px-2 py-0.5 rounded w-fit uppercase tracking-wider mb-1.5 shadow-sm">
                    Kepemimpinan Sekolah
                  </span>
                  <h3 className="text-base md:text-lg font-black text-white leading-snug">
                    {homeContent.kepsekName}
                  </h3>
                  <p className="text-blue-300 text-[11px] font-medium leading-tight">Kepala Sekolah Yayasan Rasman Mulya</p>
                </div>
              </div>
            </div>

            {/* Teks Sambutan & Visi Misi */}
            <div className="lg:col-span-8 flex flex-col justify-center space-y-5">
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#1e2a78] uppercase mb-2">
                  <ShieldCheck size={16} className="text-yellow-500" /> Sambutan Pimpinan
                </div>
                <h3 className="text-2xl font-extrabold text-[#1e2a78] mb-3">Membangun Masa Depan Cerah Bersama</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {homeContent.sambutan}
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                   <button 
                     onClick={() => setCurrentPath('profil_yayasan')} 
                     className="text-blue-700 font-bold hover:text-[#1e2a78] text-sm flex items-center group"
                   >
                     Baca Profil Selengkapnya <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition" />
                   </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <h4 className="text-lg font-bold text-[#1e2a78] mb-2 flex items-center">
                    <Award size={18} className="mr-2 text-yellow-500" /> Visi
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    {homeContent.visi}
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <h4 className="text-lg font-bold text-[#1e2a78] mb-2 flex items-center">
                    <HeartHandshake size={18} className="mr-2 text-yellow-500" /> Misi
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-4">
                    {homeContent.misi}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {homeStats.map((stat) => (
                <div 
                  key={stat.id} 
                  className="bg-[#1e2a78] text-white rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-lg border border-blue-900 group hover:-translate-y-1 transition duration-300"
                >
                  {getStatIcon(stat.id)}
                  <p className="text-2xl md:text-3xl font-black text-white mb-1 group-hover:text-yellow-400 transition">{stat.value}</p>
                  <p className="text-xs md:text-sm text-blue-200 font-medium">{stat.label}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Artikel / Berita Terbaru */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-between items-end mb-8 pb-4">
            <div>
              <span className="bg-blue-100 text-[#1e2a78] text-[10px] font-bold px-2 py-0.5 rounded uppercase">Publikasi Terkini</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e2a78] mt-1">Artikel & Berita Terbaru</h2>
              <p className="text-gray-500 text-sm mt-1">Kabar informasi penting dan prestasi peserta didik Yayasan Rasman Mulya</p>
            </div>
            <button 
              onClick={() => setCurrentPath('news')} 
              className="text-gray-600 text-sm font-semibold hover:text-[#1e2a78] flex items-center transition hidden md:flex"
            >
              Lihat Semua Artikel <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.slice(0, 4).map((news) => (
              <div 
                key={news.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col group cursor-pointer" 
                onClick={() => { setViewPost(news); setCurrentPath('single_post'); }}
              >
                <div className="h-44 relative overflow-hidden bg-slate-100">
                  <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <span className="absolute top-3 left-3 bg-[#1e2a78] text-[11px] font-bold px-3 py-1 rounded-md text-white shadow-sm">
                    {news.category}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-gray-800 leading-snug mb-2 flex-1 group-hover:text-[#1e2a78] transition line-clamp-2 text-base">
                    {news.title}
                  </h3>
                  <div className="flex items-center text-xs text-gray-400 font-medium border-t border-gray-100 pt-3">
                    <Calendar size={14} className="mr-1.5 text-blue-600"/> {news.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <GallerySection galleries={galleries} />

      {/* Teachers Section With Custom Header & Sliding Controls */}
      <TeachersSection 
        teachers={teachers} 
        headerSettings={teacherHeaderSettings}
        onSelectTeacher={onSelectTeacher} 
      />
    </div>
  );
};

// Single Post / Page Detail View
const SinglePostView: React.FC<{ post: ArticleItem | PageItem | null; onBack: () => void }> = ({ post, onBack }) => {
  if (!post) return <div className="text-center py-20 text-slate-500">Halaman atau berita tidak ditemukan.</div>;

  const categoryLabel = ('category' in post && post.category) ? post.category : 'Informasi Sekolah';

  return (
    <div className="container mx-auto px-4 max-w-4xl py-12">
      <button 
        onClick={onBack} 
        className="flex items-center text-slate-600 hover:text-blue-700 mb-6 font-semibold bg-white border border-slate-200 px-4 py-2 rounded-xl w-fit transition shadow-sm active:scale-95 text-sm"
      >
         <ChevronLeft size={18} className="mr-1"/> Kembali ke Beranda
      </button>

      <div className="bg-white rounded-3xl shadow-md border border-slate-200 overflow-hidden">
        {post.image && (
          <div className="w-full h-[280px] sm:h-[400px] relative bg-slate-900">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            <span className="absolute top-4 left-4 bg-yellow-400 text-slate-950 font-black px-3.5 py-1 rounded-lg shadow-md text-xs uppercase tracking-wide">
              {categoryLabel}
            </span>
          </div>
        )}
        <div className="p-6 md:p-12">
          <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center text-xs md:text-sm text-slate-400 mb-8 border-b border-slate-100 pb-5">
            <span className="flex items-center mr-6">
              <Calendar size={16} className="mr-2 text-blue-600"/> {post.date || 'Terbaru 2026'}
            </span>
            <span className="flex items-center">
              <User size={16} className="mr-2 text-blue-600"/> Humas Yayasan Rasman Mulya
            </span>
          </div>
          
          <div 
             className="text-slate-700 leading-relaxed text-sm md:text-base space-y-4 whitespace-pre-line"
          >
            {post.content || 'Belum ada konten detail untuk halaman ini.'}
          </div>
        </div>
      </div>
    </div>
  );
};

// Full Post / Page Editor
interface PostEditorProps {
  item: ArticleItem | PageItem | null;
  isPage: boolean;
  onSave: (savedItem: ArticleItem | PageItem) => void;
  onCancel: () => void;
}

const PostEditorFull: React.FC<PostEditorProps> = ({ item, isPage, onSave, onCancel }) => {
  const [title, setTitle] = useState(item?.title || '');
  const [meta, setMeta] = useState(item?.meta || '');
  const [content, setContent] = useState(item?.content || '');
  const [image, setImage] = useState(item?.image || '');
  const [category, setCategory] = useState(('category' in (item || {})) ? (item as ArticleItem).category : 'Informasi');
  const [slug, setSlug] = useState(('slug' in (item || {})) ? (item as PageItem).slug : '/halaman-baru');
  const [published, setPublished] = useState(true);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (!title.trim()) {
      alert('Judul tidak boleh kosong!');
      return;
    }

    if (isPage) {
      const pageData: PageItem = {
        id: item?.id || Date.now(),
        title,
        slug: slug.startsWith('/') ? slug : `/${slug}`,
        status: published ? 'Published' : 'Draft',
        content,
        meta,
        image
      };
      onSave(pageData);
    } else {
      const articleData: ArticleItem = {
        id: item?.id || Date.now(),
        title,
        category,
        date: item?.date || new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }),
        status: published ? 'Published' : 'Draft',
        content,
        meta,
        image
      };
      onSave(articleData);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen p-6 font-sans">
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row gap-6">
        {/* Main Column */}
        <div className="flex-1 flex flex-col space-y-6">
          <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm space-y-5">
             <div>
                <label className="block text-sm text-slate-700 mb-2 font-bold">Judul {isPage ? 'Halaman' : 'Publikasi'}</label>
                <input 
                  type="text" 
                  value={title} 
                  onChange={e => setTitle(e.target.value)} 
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 text-base font-semibold" 
                  placeholder="Masukkan judul..." 
                />
             </div>
             <div>
                <label className="block text-sm text-slate-700 mb-2 font-bold">Meta Deskripsi (SEO)</label>
                <textarea 
                  rows={2} 
                  value={meta} 
                  onChange={e => setMeta(e.target.value)} 
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-slate-600 resize-none" 
                  placeholder="Ringkasan singkat isi konten..."
                />
             </div>
          </div>

          {/* Editor Area */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm flex flex-col min-h-[450px]">
            <div className="flex px-4 py-2 text-xs text-slate-500 border-b border-slate-200 bg-slate-50/80 space-x-4">
              <span className="font-semibold text-slate-700">Editor Konten Teks</span>
            </div>
            <div className="bg-white border-b border-slate-200 px-4 py-2.5 flex flex-wrap gap-2 items-center text-slate-700">
              <button type="button" className="p-1.5 hover:bg-slate-100 rounded text-slate-600"><Undo size={16}/></button>
              <button type="button" className="p-1.5 hover:bg-slate-100 rounded text-slate-600"><Redo size={16}/></button>
              <div className="w-px h-5 bg-slate-200 mx-1"></div>
              <span className="text-xs text-slate-400 font-mono">Format: Paragraf & Teks Terstruktur</span>
            </div>
            
            {image && (
              <div className="p-4 bg-slate-50 border-b border-slate-100 text-center">
                  <img src={image} alt="Preview" className="max-h-48 mx-auto object-contain rounded-xl border border-gray-200" />
              </div>
            )}
            <textarea 
              value={content} 
              onChange={e => setContent(e.target.value)} 
              className="w-full flex-1 p-6 border-none focus:outline-none focus:ring-0 text-slate-800 resize-none font-sans leading-relaxed text-sm md:text-base min-h-[300px]" 
              placeholder="Tuliskan isi artikel atau konten halaman lengkap di sini..."
            />
          </div>
          
          <div className="flex space-x-3 pt-2">
             <button 
               type="button"
               onClick={handleSave} 
               className="bg-[#1e2a78] text-white px-8 py-3 rounded-xl shadow font-bold hover:bg-blue-900 transition flex items-center active:scale-95"
             >
               <Save size={18} className="mr-2"/> Simpan {isPage ? 'Halaman' : 'Artikel'}
             </button>
             <button 
               type="button"
               onClick={onCancel} 
               className="bg-white border border-slate-300 text-slate-700 px-8 py-3 rounded-xl shadow-sm font-semibold hover:bg-slate-50 transition flex items-center active:scale-95"
             >
               <ChevronLeft size={18} className="mr-1"/> Batalkan
             </button>
          </div>
        </div>

        {/* Sidebar Settings */}
        <div className="w-full lg:w-[320px] space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5">
            <label className="block text-sm text-slate-800 font-bold mb-3">Foto / Thumbnail Utama</label>
            <div className="flex flex-col items-center">
              <div className="w-full h-44 bg-slate-50 border border-slate-300 border-dashed rounded-xl flex items-center justify-center p-2 mb-4 overflow-hidden">
                 {image ? (
                   <img src={image} alt="Thumbnail" className="w-full h-full object-cover rounded-lg"/>
                 ) : (
                   <ImageIcon size={40} className="text-slate-300"/>
                 )}
              </div>
              <label className="cursor-pointer bg-[#1e2a78] hover:bg-blue-900 text-white px-5 py-2.5 rounded-xl flex items-center justify-center text-xs font-bold transition shadow w-full active:scale-95">
                <RotateCcw size={14} className="mr-2"/> {image ? 'Ganti Gambar' : 'Pilih Gambar'}
                <input type="file" className="sr-only" accept="image/*" onChange={handleImageChange} />
              </label>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 space-y-5">
            <div>
              <label className="block text-sm text-slate-800 font-bold mb-2">
                {isPage ? 'Slug / URL Path' : 'Kategori Berita'}
              </label>
              {isPage ? (
                <input 
                  type="text" 
                  value={slug} 
                  onChange={e => setSlug(e.target.value)} 
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm font-mono text-blue-700" 
                  placeholder="/tentang-kami" 
                />
              ) : (
                <select 
                  value={category} 
                  onChange={e => setCategory(e.target.value)} 
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white font-medium"
                >
                  <option value="Informasi">Informasi</option>
                  <option value="Berita">Berita</option>
                  <option value="Kegiatan">Kegiatan</option>
                  <option value="Prestasi">Prestasi</option>
                </select>
              )}
            </div>

            <div className="pt-2 border-t border-slate-100">
              <label className="block text-sm text-slate-800 font-bold mb-2">Status Publikasi</label>
              <div className="flex items-center">
                <button 
                  type="button" 
                  onClick={() => setPublished(!published)} 
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${published ? 'bg-emerald-600' : 'bg-slate-300'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${published ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
                <span className="ml-3 text-sm font-semibold text-slate-700">
                  {published ? 'Published (Aktif)' : 'Draft (Disimpan)'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Generic Admin Table
interface GenericTableProps {
  title: string;
  columns: { key: string; label: string }[];
  data: any[];
  type: string;
  onAddClick: () => void;
  onEditClick: (item: any) => void;
  onDeleteClick: (id: any, type: string) => void;
}

const GenericTable: React.FC<GenericTableProps> = ({ 
  title, 
  columns, 
  data, 
  type, 
  onAddClick, 
  onEditClick, 
  onDeleteClick 
}) => (
  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
    <div className="p-5 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white">
      <div>
        <h3 className="font-extrabold text-slate-800 text-lg">{title}</h3>
        <p className="text-xs text-slate-400 mt-0.5">Total data terdaftar: {data.length}</p>
      </div>
      <button 
        onClick={onAddClick} 
        className="bg-[#1e2a78] text-white px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold flex items-center hover:bg-blue-900 transition shadow-sm active:scale-95"
      >
        <Plus size={16} className="mr-1.5"/> Tambah Data Baru
      </button>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider border-b border-slate-200">
            {columns.map((col, idx) => <th key={idx} className="p-4 font-bold">{col.label}</th>)}
            <th className="p-4 font-bold text-right">Aksi</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {data.length === 0 ? (
             <tr>
               <td colSpan={columns.length + 1} className="p-10 text-center text-gray-400 text-sm bg-slate-50/50">
                 Belum ada data tersedia. Silakan klik tombol Tambah Baru di atas.
               </td>
             </tr>
          ) : (
            data.map((item) => (
              <tr key={item.id} className="hover:bg-blue-50/40 transition">
                {columns.map((col, idx) => (
                  <td key={idx} className="p-4 text-xs md:text-sm text-slate-700 align-middle">
                    {col.key === 'image' && item.image ? (
                       <img src={item.image} alt="Thumb" className="h-10 w-16 object-cover rounded-lg shadow-sm border border-slate-200"/>
                    ) : col.key === 'status' ? (
                       <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                         item.status === 'Published' || item.status === 'Diterima' 
                           ? 'bg-emerald-100 text-emerald-800' 
                           : 'bg-amber-100 text-amber-800'
                       }`}>
                         {item[col.key]}
                       </span>
                    ) : (
                       <span className="line-clamp-2">{item[col.key] || '-'}</span>
                    )}
                  </td>
                ))}
                <td className="p-4 text-right space-x-2 whitespace-nowrap align-middle">
                  <button 
                    onClick={() => onEditClick(item)} 
                    className="text-blue-600 hover:text-white hover:bg-blue-600 bg-blue-50 p-2 rounded-xl transition"
                    title="Edit Data"
                  >
                    <Edit size={16}/>
                  </button>
                  <button 
                    onClick={() => onDeleteClick(item.id, type)} 
                    className="text-red-600 hover:text-white hover:bg-red-600 bg-red-50 p-2 rounded-xl transition"
                    title="Hapus Data"
                  >
                    <Trash2 size={16}/>
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  </div>
);

// Enhanced Public SPMB Page (With Live Applicant Counter, Cost Breakdown Table & Registration Form)
interface SpmbPagePublicProps {
  settings: SpmbSettings;
  applicantCount: number;
  onSubmit: (newStudent: SpmbStudent) => void;
}

const SpmbPagePublic: React.FC<SpmbPagePublicProps> = ({ settings, applicantCount, onSubmit }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCostDropdownOpen, setIsCostDropdownOpen] = useState(true);
  const [costFilterJenjang, setCostFilterJenjang] = useState<'all' | 'smp' | 'smk'>('all');
  const [costTab, setCostTab] = useState<'tabel' | 'brosur'>('tabel');
  const [isBrochureZoomOpen, setIsBrochureZoomOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    onSubmit({ 
      id: Date.now(), 
      name: fd.get('name') as string, 
      jenjang: fd.get('jenjang') as string, 
      status: 'Menunggu Verifikasi', 
      asalSekolah: fd.get('asalSekolah') as string, 
      phone: fd.get('phone') as string,
      parentName: fd.get('parentName') as string,
      registeredAt: new Date().toISOString().split('T')[0]
    });
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 max-w-2xl py-16 min-h-[60vh] flex flex-col items-center justify-center">
         <div className="bg-white border border-emerald-200 text-slate-800 p-8 md:p-12 rounded-3xl shadow-xl max-w-lg text-center animate-in zoom-in-95">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm">
              <CheckCircle size={38} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">Pendaftaran Berhasil Dikirim!</h3>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
              Data pendaftaran SPMB Anda telah tersimpan di sistem panitia. Kami akan segera mengonfirmasi verifikasi melalui nomor WhatsApp: <strong>{settings.kontakPanitia}</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={() => setIsSubmitted(false)} 
                className="bg-[#1e2a78] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-900 transition shadow text-sm"
              >
                Daftarkan Calon Siswa Lain
              </button>
              <a 
                href={`https://wa.me/${settings.kontakPanitia.replace(/[^0-9]/g, '')}`} 
                target="_blank" 
                rel="noreferrer"
                className="bg-emerald-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-emerald-700 transition shadow text-sm flex items-center justify-center"
              >
                <Phone size={15} className="mr-1.5" /> Konfirmasi ke Panitia
              </a>
            </div>
         </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 bg-slate-50">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* SPMB Header Banner */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl bg-[#1e2a78] text-white mb-10 border border-blue-900">
          {settings.bannerUrl ? (
            <div className="absolute inset-0 opacity-25">
              <img src={settings.bannerUrl} alt="Banner SPMB" className="w-full h-full object-cover" />
            </div>
          ) : null}
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider flex items-center ${
                settings.isOpened ? 'bg-emerald-500 text-slate-950' : 'bg-red-500 text-white'
              }`}>
                {settings.isOpened ? <CheckCircle size={13} className="mr-1.5" /> : <AlertCircle size={13} className="mr-1.5" />}
                {settings.isOpened ? 'Pendaftaran Sedang Dibuka' : 'Pendaftaran Ditutup'}
              </span>
              <span className="bg-yellow-400 text-slate-950 px-3 py-1 rounded-full text-xs font-bold">
                {settings.gelombang}
              </span>
              {/* Tampilkan Jumlah Pendaftar Badge */}
              <span className="bg-blue-900/80 text-yellow-300 border border-yellow-400/40 px-3.5 py-1 rounded-full text-xs font-extrabold flex items-center shadow-sm">
                <UsersRound size={13} className="mr-1.5 text-yellow-400" />
                {applicantCount} Calon Siswa Telah Terdaftar
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-black mb-3 leading-tight max-w-3xl">
              {settings.judul}
            </h1>
            <p className="text-blue-100 text-sm md:text-base max-w-2xl leading-relaxed">
              {settings.subjudul}
            </p>
          </div>
        </div>

        {/* 3 Quick Cards: Gelombang, Biaya, Jalur */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-4">
            <div className="p-3 bg-blue-50 text-[#1e2a78] rounded-xl shrink-0">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Periode Gelombang</p>
              <p className="text-sm font-bold text-slate-800 mt-0.5">{settings.gelombang}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-4">
            <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl shrink-0">
              <Trophy size={24} />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Biaya Pendaftaran</p>
              <p className="text-sm font-bold text-slate-800 mt-0.5">{settings.biayaPendaftaran}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-4">
            <div className="p-3 bg-amber-50 text-amber-700 rounded-xl shrink-0">
              <GraduationCap size={24} />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Jalur Penerimaan</p>
              <p className="text-xs font-bold text-slate-800 mt-0.5 leading-snug">{settings.jalurPendaftaran}</p>
            </div>
          </div>
        </div>

        {/* SECTION: Rincian Biaya Masuk & Investasi Pendidikan (Dropdown Tabel & Upload Foto) */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md mb-10 overflow-hidden transition-all duration-300">
          {/* Header Dropdown Toggle */}
          <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-slate-50 via-white to-blue-50/40 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full mb-2">
                <Calculator size={14} className="text-emerald-600" /> Transparansi Pembiayaan
              </div>
              <h3 className="text-xl md:text-2xl font-black text-slate-900">
                {settings.judulBiaya || 'Rincian Biaya Masuk & Investasi Pendidikan'}
              </h3>
              <p className="text-xs md:text-sm text-slate-500 mt-1 max-w-2xl">
                {settings.subjudulBiaya || 'Transparansi pembiayaan pendidikan awal masuk tanpa biaya tersembunyi.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {/* Total Highlight Badges */}
              <div className="flex space-x-2.5">
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-2 px-3 text-center">
                  <span className="text-[9px] font-bold text-blue-700 uppercase block">Total SMP</span>
                  <span className="text-sm font-extrabold text-[#1e2a78]">{settings.totalBiayaSmp || 'Rp 3.850.000'}</span>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-2 px-3 text-center">
                  <span className="text-[9px] font-bold text-yellow-800 uppercase block">Total SMK</span>
                  <span className="text-sm font-extrabold text-amber-900">{settings.totalBiayaSmk || 'Rp 4.450.000'}</span>
                </div>
              </div>

              {/* Tombol Toggle Dropdown Tabel */}
              <button 
                type="button" 
                onClick={() => setIsCostDropdownOpen(!isCostDropdownOpen)} 
                className="flex items-center space-x-2 bg-[#1e2a78] text-white hover:bg-blue-900 px-4 py-2.5 rounded-xl text-xs font-bold transition shadow-sm active:scale-95"
              >
                <span>{isCostDropdownOpen ? 'Tutup Dropdown Tabel' : 'Buka Dropdown Tabel & Brosur'}</span>
                {isCostDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            </div>
          </div>

          {/* Konten Dropdown (Tabel & Foto/Brosur) */}
          {isCostDropdownOpen && (
            <div className="p-6 md:p-8 space-y-6">
              {/* Toolbar Dropdown: Pilih Filter Jenjang & Tab View */}
              <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200">
                {/* Dropdown Filter Jenjang */}
                <div className="flex items-center space-x-2">
                  <label htmlFor="spmbFilterJenjang" className="text-xs font-bold text-slate-700 whitespace-nowrap">
                    Dropdown Tabel:
                  </label>
                  <select 
                    id="spmbFilterJenjang"
                    value={costFilterJenjang} 
                    onChange={e => setCostFilterJenjang(e.target.value as any)}
                    className="bg-white border border-slate-300 font-bold text-xs text-slate-800 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-200 outline-none cursor-pointer shadow-sm"
                  >
                    <option value="all">Dropdown: Tampilkan Semua Jenjang (SMP & SMK)</option>
                    <option value="smp">Dropdown: Khusus Rincian SMP Saja</option>
                    <option value="smk">Dropdown: Khusus Rincian SMK Saja</option>
                  </select>
                </div>

                {/* Tab Switcher: Tabel vs Foto Brosur */}
                <div className="flex items-center bg-white p-1 rounded-xl border border-slate-200 shadow-sm shrink-0">
                  <button 
                    type="button" 
                    onClick={() => setCostTab('tabel')} 
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center ${
                      costTab === 'tabel' 
                        ? 'bg-[#1e2a78] text-white shadow-sm' 
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <FileSpreadsheet size={13} className="mr-1.5" /> Tabel Rincian Biaya
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setCostTab('brosur')} 
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center ${
                      costTab === 'brosur' 
                        ? 'bg-[#1e2a78] text-white shadow-sm' 
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <ImageIcon size={13} className="mr-1.5" /> Foto / Brosur Biaya
                    {settings.fotoRincianBiayaUrl && (
                      <span className="w-2 h-2 rounded-full bg-emerald-500 ml-1.5 inline-block" title="Foto tersedia"></span>
                    )}
                  </button>
                </div>
              </div>

              {/* Tampilan 1: Tabel Rincian Biaya */}
              {costTab === 'tabel' && (
                <div>
                  <div className="overflow-x-auto rounded-2xl border border-slate-200 mb-6 shadow-sm">
                    <table className="w-full text-left border-collapse text-xs md:text-sm">
                      <thead>
                        <tr className="bg-[#1e2a78] text-white">
                          <th className="p-3.5 font-bold">Komponen Pembiayaan</th>
                          {(costFilterJenjang === 'all' || costFilterJenjang === 'smp') && (
                            <th className={`p-3.5 font-bold text-center ${costFilterJenjang === 'smp' ? 'bg-blue-900 text-yellow-300' : ''}`}>
                              Jenjang SMP
                            </th>
                          )}
                          {(costFilterJenjang === 'all' || costFilterJenjang === 'smk') && (
                            <th className={`p-3.5 font-bold text-center ${costFilterJenjang === 'smk' ? 'bg-amber-900 text-yellow-300' : ''}`}>
                              Jenjang SMK
                            </th>
                          )}
                          <th className="p-3.5 font-bold">Keterangan / Fasilitas</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {settings.biayaItems && settings.biayaItems.length > 0 ? (
                          settings.biayaItems.map((item, idx) => (
                            <tr key={item.id || idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                              <td className="p-3.5 font-semibold text-slate-800 flex items-center">
                                <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold flex items-center justify-center mr-2.5 shrink-0">
                                  {idx + 1}
                                </span>
                                {item.komponen}
                              </td>
                              {(costFilterJenjang === 'all' || costFilterJenjang === 'smp') && (
                                <td className={`p-3.5 font-bold text-center text-[#1e2a78] ${costFilterJenjang === 'smp' ? 'bg-blue-50/70 font-black' : ''}`}>
                                  {item.biayaSmp}
                                </td>
                              )}
                              {(costFilterJenjang === 'all' || costFilterJenjang === 'smk') && (
                                <td className={`p-3.5 font-bold text-center text-amber-900 ${costFilterJenjang === 'smk' ? 'bg-amber-50/70 font-black' : ''}`}>
                                  {item.biayaSmk}
                                </td>
                              )}
                              <td className="p-3.5 text-slate-500 text-xs">{item.keterangan || '-'}</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={4} className="p-6 text-center text-slate-400">Rincian komponen biaya belum ditambahkan.</td>
                          </tr>
                        )}
                      </tbody>
                      <tfoot>
                        <tr className="bg-slate-100/90 font-black border-t-2 border-slate-200 text-slate-800">
                          <td className="p-3.5 uppercase tracking-wide text-xs">Total Estimasi Investasi Awal</td>
                          {(costFilterJenjang === 'all' || costFilterJenjang === 'smp') && (
                            <td className="p-3.5 text-center text-sm font-extrabold text-[#1e2a78]">
                              {settings.totalBiayaSmp || 'Rp 3.850.000'}
                            </td>
                          )}
                          {(costFilterJenjang === 'all' || costFilterJenjang === 'smk') && (
                            <td className="p-3.5 text-center text-sm font-extrabold text-amber-900">
                              {settings.totalBiayaSmk || 'Rp 4.450.000'}
                            </td>
                          )}
                          <td className="p-3.5 text-slate-500 text-[11px] font-normal">
                            *Sudah termasuk seragam 5 stel, MPLS, dan modul pembelajaran
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  {/* Kebijakan Cicilan Banner */}
                  {settings.kebijakanCicilan && (
                    <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-[#1e2a78] flex items-start space-x-3 text-xs md:text-sm">
                      <CreditCard size={20} className="shrink-0 mt-0.5 text-blue-700" />
                      <div>
                        <span className="font-extrabold block text-blue-900 mb-0.5">Kemudahan Skema Pembayaran:</span>
                        <p className="leading-relaxed">{settings.kebijakanCicilan}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Tampilan 2: Foto / Brosur Rincian Biaya */}
              {costTab === 'brosur' && (
                <div className="bg-slate-50 rounded-2xl p-4 md:p-6 border border-slate-200 text-center">
                  {settings.fotoRincianBiayaUrl ? (
                    <div className="space-y-4 max-w-2xl mx-auto">
                      <div className="flex flex-wrap items-center justify-between gap-2 px-1">
                        <span className="text-xs font-bold text-slate-700 flex items-center">
                          <Sparkles size={14} className="mr-1.5 text-yellow-500" /> Dokumen Brosur Resmi Panitia SPMB
                        </span>
                        <div className="flex space-x-2">
                          <button 
                            type="button" 
                            onClick={() => setIsBrochureZoomOpen(true)}
                            className="bg-[#1e2a78] text-white hover:bg-blue-900 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center transition shadow-sm active:scale-95"
                          >
                            <ZoomIn size={13} className="mr-1.5" /> Perbesar Foto Brosur
                          </button>
                          <a 
                            href={settings.fotoRincianBiayaUrl} 
                            target="_blank" 
                            rel="noreferrer"
                            className="bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center transition shadow-sm"
                          >
                            <Download size={13} className="mr-1.5" /> Buka Foto Asli
                          </a>
                        </div>
                      </div>

                      {/* Clickable Image Preview */}
                      <div 
                        onClick={() => setIsBrochureZoomOpen(true)}
                        className="relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md cursor-pointer group bg-white"
                        title="Klik untuk memperbesar gambar brosur rincian biaya"
                      >
                        <img 
                          src={settings.fotoRincianBiayaUrl} 
                          alt="Brosur Rincian Biaya SPMB" 
                          className="w-full max-h-[500px] object-contain mx-auto group-hover:scale-[1.02] transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="bg-[#1e2a78] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center shadow-lg">
                            <ZoomIn size={16} className="mr-1.5 text-yellow-400" /> Klik Untuk Memperbesar Teks Tabel
                          </span>
                        </div>
                      </div>

                      <p className="text-[11px] text-slate-400">
                        Dokumen resmi diterbitkan oleh Panitia SPMB Yayasan Pendidikan Rasman Mulya.
                      </p>
                    </div>
                  ) : (
                    <div className="py-10 text-center space-y-3">
                      <div className="w-14 h-14 bg-slate-200 text-slate-400 rounded-2xl flex items-center justify-center mx-auto">
                        <ImageIcon size={28} />
                      </div>
                      <p className="text-sm font-bold text-slate-700">Foto Brosur Belum Diunggah</p>
                      <p className="text-xs text-slate-400 max-w-md mx-auto">
                        Panitia belum mengunggah file foto/brosur rincian biaya. Anda tetap dapat membaca tabel rincian biaya lengkap di tab sebelah.
                      </p>
                      <button 
                        type="button" 
                        onClick={() => setCostTab('tabel')} 
                        className="bg-[#1e2a78] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-blue-900 transition"
                      >
                        Buka Tabel Rincian Biaya
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Lightbox Perbesar Foto Brosur Biaya */}
        {isBrochureZoomOpen && settings.fotoRincianBiayaUrl && (
          <div className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="w-full max-w-4xl flex justify-between items-center text-white mb-3">
              <span className="text-sm font-bold flex items-center">
                <FileSpreadsheet size={16} className="mr-2 text-yellow-400" /> Brosur Resmi Rincian Biaya Masuk & Investasi Pendidikan
              </span>
              <div className="flex space-x-2">
                <a 
                  href={settings.fotoRincianBiayaUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  download
                  className="p-2 bg-white/20 hover:bg-white/30 rounded-xl text-white transition text-xs font-bold flex items-center"
                >
                  <Download size={16} className="mr-1.5" /> Unduh
                </a>
                <button 
                  onClick={() => setIsBrochureZoomOpen(false)} 
                  className="p-2 bg-white/20 hover:bg-white/30 rounded-xl text-white transition"
                  title="Tutup Modal"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="max-w-4xl max-h-[82vh] overflow-auto rounded-2xl bg-slate-950 border border-white/20 shadow-2xl p-2 flex items-center justify-center">
              <img 
                src={settings.fotoRincianBiayaUrl} 
                alt="Brosur Biaya Masuk Resolusi Penuh" 
                className="max-h-[78vh] w-auto object-contain rounded-lg shadow-inner" 
              />
            </div>
          </div>
        )}

        {/* Persyaratan & Alur Pendaftaran */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Persyaratan */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-extrabold text-[#1e2a78] mb-4 flex items-center">
              <FileCheck size={20} className="mr-2 text-yellow-500" /> Persyaratan Dokumen
            </h3>
            <div className="text-xs md:text-sm text-slate-700 space-y-2 whitespace-pre-line leading-relaxed">
              {settings.persyaratan}
            </div>
          </div>

          {/* Alur */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-extrabold text-[#1e2a78] mb-4 flex items-center">
              <Compass size={20} className="mr-2 text-yellow-500" /> Alur & Tahapan Pendaftaran
            </h3>
            <div className="text-xs md:text-sm text-slate-700 space-y-2 whitespace-pre-line leading-relaxed">
              {settings.alurPendaftaran}
            </div>
          </div>
        </div>

        {/* Catatan Beasiswa */}
        {settings.catatanTambahan && (
          <div className="mb-10 p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 flex items-start space-x-3.5">
            <Sparkles size={22} className="text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-extrabold text-xs uppercase tracking-wide text-amber-800 mb-1">Informasi Khusus Beasiswa Yayasan</p>
              <p className="text-xs md:text-sm leading-relaxed">{settings.catatanTambahan}</p>
            </div>
          </div>
        )}

        {/* Registration Form / Closed Notice */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="bg-[#1e2a78] p-6 md:p-8 text-white flex justify-between items-center">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="bg-yellow-400 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded uppercase">
                  Formulir Online
                </span>
                <span className="text-blue-200 text-xs">Pendaftar Terkini: {applicantCount} Siswa</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black">Isi Formulir Pendaftaran SPMB</h3>
              <p className="text-blue-200 text-xs md:text-sm mt-0.5">Lengkapi biodata calon siswa di bawah ini secara cermat</p>
            </div>
            <div className="text-right hidden sm:block">
              <span className="text-[11px] text-blue-300 block">Ada kendala? Hubungi Panitia</span>
              <span className="font-bold text-yellow-400 text-sm">{settings.kontakPanitia}</span>
            </div>
          </div>

          <div className="p-6 md:p-10">
            {settings.isOpened ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                        Nama Lengkap Calon Siswa *
                      </label>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#1e2a78] text-sm" 
                        placeholder="Contoh: Muhammad Farhan" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                        Pilihan Jenjang Pendidikan *
                      </label>
                      <select 
                        name="jenjang" 
                        required 
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#1e2a78] text-sm cursor-pointer"
                      >
                          <option value="">-- Pilih Jenjang --</option>
                          <option value="SMP">SMP Rasman Mulya</option>
                          <option value="SMK">SMK Rasman Mulya</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                        Asal Sekolah Sebelumnya *
                      </label>
                      <input 
                        type="text" 
                        name="asalSekolah" 
                        required 
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#1e2a78] text-sm" 
                        placeholder="Cth: SD Negeri 1 Harapan / SMP Bina Insan" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                        Nama Orang Tua / Wali *
                      </label>
                      <input 
                        type="text" 
                        name="parentName" 
                        required 
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#1e2a78] text-sm" 
                        placeholder="Nama Ayah / Ibu / Wali Siswa" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                        No. WhatsApp Aktif (Untuk Konfirmasi) *
                      </label>
                      <input 
                        type="tel" 
                        name="phone" 
                        required 
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#1e2a78] text-sm" 
                        placeholder="Contoh: 081234567890" 
                      />
                    </div>
                </div>
                <div className="pt-6 border-t border-slate-200">
                    <button 
                      type="submit" 
                      className="w-full bg-yellow-400 text-slate-950 font-black px-8 py-3.5 rounded-xl hover:bg-yellow-300 hover:shadow-lg transition-all flex items-center justify-center text-sm md:text-base active:scale-98"
                    >
                      <Send size={18} className="mr-2"/> Kirim Formulir Pendaftaran SPMB Online
                    </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-10">
                <AlertCircle size={48} className="mx-auto text-amber-500 mb-3" />
                <h4 className="text-xl font-bold text-slate-800 mb-2">Pendaftaran Online Sedang Ditutup</h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                  Saat ini periode pendaftaran sedang ditutup atau dalam proses seleksi berkas gelombang sebelumnya. Untuk informasi pendaftaran gelombang berikutnya silakan hubungi kontak panitia.
                </p>
                <a 
                  href={`https://wa.me/${settings.kontakPanitia.replace(/[^0-9]/g, '')}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center bg-[#1e2a78] text-white px-6 py-2.5 rounded-xl font-bold text-xs md:text-sm hover:bg-blue-900 transition"
                >
                  <MessageCircle size={16} className="mr-2" /> Hubungi Panitia via WhatsApp ({settings.kontakPanitia})
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Admin Login Page
interface AdminLoginPageProps {
  onLoginSuccess: (adminData: { username: string; name: string; email: string; role: string }) => void;
  onBackToHome: () => void;
  webSettings: WebSettings;
}

const AdminLoginPage: React.FC<AdminLoginPageProps> = ({ onLoginSuccess, onBackToHome, webSettings }) => {
  const getAllAdminAccounts = (): AdminAccountItem[] => {
    let list: AdminAccountItem[] = [];
    try {
      const saved = localStorage.getItem('rm_admin_accounts');
      if (saved) list = JSON.parse(saved);
    } catch (e) {}

    let mainCreds: any = null;
    try {
      const savedMain = localStorage.getItem('rm_admin_credentials');
      if (savedMain) mainCreds = JSON.parse(savedMain);
    } catch (e) {}

    const defaultAdmin: AdminAccountItem = {
      id: 1,
      username: mainCreds?.username || 'admin',
      password: mainCreds?.password || 'admin123',
      name: mainCreds?.name || webSettings.owner || 'Daruna Tarihoran, M.Pd.',
      email: mainCreds?.email || webSettings.email || 'admin@rasmanmulya.sch.id',
      role: mainCreds?.role || 'Super Administrator',
      status: 'active',
      createdAt: '2026-01-01'
    };

    if (!Array.isArray(list) || list.length === 0) {
      return [defaultAdmin];
    }
    const exists = list.some(a => a.username.toLowerCase() === defaultAdmin.username.toLowerCase());
    if (!exists) {
      return [defaultAdmin, ...list];
    }
    return list;
  };

  const getActiveCredentials = () => {
    try {
      const saved = localStorage.getItem('rm_admin_credentials');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {
      username: 'admin',
      password: 'admin123',
      name: webSettings.owner || 'Daruna Tarihoran, M.Pd.',
      email: webSettings.email || 'admin@rasmanmulya.sch.id',
      role: 'Super Administrator'
    };
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);

    setTimeout(() => {
      const cleanUser = username.trim().toLowerCase();
      const accounts = getAllAdminAccounts();

      // Check against all registered admin accounts
      const matched = accounts.find(acc => 
        (acc.username.toLowerCase() === cleanUser || acc.email.toLowerCase() === cleanUser) && 
        acc.password === password
      );

      if (matched) {
        if (matched.status === 'inactive') {
          setIsLoading(false);
          setErrorMsg('Akun administrator ini berstatus Non-Aktif. Hubungi Super Administrator untuk mengaktifkan kembali.');
          return;
        }
        onLoginSuccess({
          username: matched.username,
          name: matched.name || 'Administrator',
          email: matched.email || 'admin@rasmanmulya.sch.id',
          role: matched.role || 'Super Administrator'
        });
        return;
      }

      // Check fallback custom credentials or default credentials
      const creds = getActiveCredentials();
      const isCustomMatch = (cleanUser === creds.username.toLowerCase() || cleanUser === creds.email.toLowerCase()) && password === creds.password;
      const isDefaultMatch = (cleanUser === 'admin' || cleanUser === 'admin@rasmanmulya.sch.id') && password === 'admin123';

      if (isCustomMatch) {
        onLoginSuccess({
          username: creds.username,
          name: creds.name || webSettings.owner || 'Administrator',
          email: creds.email || webSettings.email || 'admin@rasmanmulya.sch.id',
          role: creds.role || 'Super Administrator'
        });
      } else if (isDefaultMatch) {
        onLoginSuccess({
          username: 'admin',
          name: webSettings.owner || 'Daruna Tarihoran, M.Pd.',
          email: webSettings.email || 'admin@rasmanmulya.sch.id',
          role: 'Super Administrator'
        });
      } else {
        setIsLoading(false);
        setErrorMsg('Username atau Kata Sandi tidak sesuai. Silakan periksa kembali kredensial akun administrator Anda.');
      }
    }, 350);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-[#0e163b] to-slate-900 flex items-center justify-center p-4 relative overflow-hidden text-slate-800">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="w-full max-w-md relative z-10 animate-in fade-in zoom-in-95 duration-300">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 md:p-10">
          {/* Logo & Header */}
          <div className="text-center mb-8">
            {webSettings.logoUrl ? (
              <div className="h-16 flex items-center justify-center mb-4 bg-transparent border-0 ring-0 shadow-none">
                <img 
                  src={webSettings.logoUrl} 
                  alt={webSettings.namaWeb} 
                  className="h-16 w-auto max-h-16 object-contain bg-transparent border-0 ring-0 shadow-none" 
                />
              </div>
            ) : (
              <div className="w-16 h-16 bg-[#1e2a78] text-yellow-400 rounded-2xl flex items-center justify-center font-black text-2xl mx-auto mb-4 shadow-lg shadow-blue-900/30 border border-yellow-400/30">
                RM
              </div>
            )}
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#1e2a78] text-[10px] font-black uppercase tracking-wider mb-2">
              <Lock size={12} className="text-yellow-600" /> Panel Administrasi & CMS
            </div>
            <h2 className="text-2xl font-black text-slate-900">Login Administrator</h2>
            <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
              {webSettings.namaPerusahaan}
            </p>
          </div>

          {/* Error Message */}
          {errorMsg && (
            <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start space-x-3 animate-in fade-in duration-200">
              <AlertCircle size={18} className="shrink-0 mt-0.5 text-red-600" />
              <div className="flex-1">
                <span className="font-bold block">Autentikasi Gagal:</span>
                <p className="mt-0.5 leading-relaxed">{errorMsg}</p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                Username / Email Administrator
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User size={16} />
                </div>
                <input 
                  type="text" 
                  required
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  placeholder="Masukkan username atau email admin..." 
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e2a78] bg-slate-50 focus:bg-white transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                Kata Sandi (Password)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Key size={16} />
                </div>
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Masukkan kata sandi..." 
                  className="w-full pl-10 pr-11 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e2a78] bg-slate-50 focus:bg-white transition"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-700 transition"
                  title={showPassword ? "Sembunyikan password" : "Lihat password"}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center space-x-2 cursor-pointer select-none text-slate-600">
                <input 
                  type="checkbox" 
                  checked={rememberMe} 
                  onChange={e => setRememberMe(e.target.checked)} 
                  className="w-4 h-4 rounded text-[#1e2a78] focus:ring-blue-400 border-slate-300"
                />
                <span>Ingat sesi saya</span>
              </label>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-[#1e2a78] hover:bg-blue-900 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-950/20 transition duration-200 active:scale-98 flex items-center justify-center text-sm disabled:opacity-75"
            >
              {isLoading ? (
                <span className="flex items-center">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Memverifikasi Akun...
                </span>
              ) : (
                <span className="flex items-center">
                  <Lock size={16} className="mr-2 text-yellow-400" /> Masuk ke Dashboard Admin
                </span>
              )}
            </button>
          </form>

          {/* Back to Home Button */}
          <div className="mt-6 text-center">
            <button 
              type="button" 
              onClick={onBackToHome}
              className="text-xs font-bold text-slate-500 hover:text-[#1e2a78] transition inline-flex items-center"
            >
              <ChevronLeft size={16} className="mr-1" /> Kembali ke Portal Web Sekolah
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-[11px] text-slate-400 mt-6 font-medium">
          &copy; {new Date().getFullYear()} {webSettings.namaPerusahaan}. Database MySQL Siap Hosting & Domain.
        </p>
      </div>
    </div>
  );
};

// Admin Dashboard & Management Panel
interface AdminProps {
  setCurrentPath: (path: string) => void;
  onLogout: () => void;
  adminUser: { username: string; name: string; email: string; role: string; avatar?: string };
  onUpdateAdminUser?: (userData: { username: string; name: string; email: string; role: string; avatar?: string }) => void;
  webSettings: WebSettings;
  setWebSettings: React.Dispatch<React.SetStateAction<WebSettings>>;
  slides: SlideItem[];
  setSlides: React.Dispatch<React.SetStateAction<SlideItem[]>>;
  menus: MenuItem[];
  setMenus: React.Dispatch<React.SetStateAction<MenuItem[]>>;
  galleries: GalleryItem[];
  setGalleries: React.Dispatch<React.SetStateAction<GalleryItem[]>>;
  articles: ArticleItem[];
  setArticles: React.Dispatch<React.SetStateAction<ArticleItem[]>>;
  pages: PageItem[];
  setPages: React.Dispatch<React.SetStateAction<PageItem[]>>;
  teachers: TeacherItem[];
  setTeachers: React.Dispatch<React.SetStateAction<TeacherItem[]>>;
  teacherHeaderSettings: TeacherHeaderSettings;
  setTeacherHeaderSettings: React.Dispatch<React.SetStateAction<TeacherHeaderSettings>>;
  spmbData: SpmbStudent[];
  setSpmbData: React.Dispatch<React.SetStateAction<SpmbStudent[]>>;
  spmbSettings: SpmbSettings;
  setSpmbSettings: React.Dispatch<React.SetStateAction<SpmbSettings>>;
  homeContent: HomeContent;
  setHomeContent: React.Dispatch<React.SetStateAction<HomeContent>>;
  homeStats: HomeStat[];
  setHomeStats: React.Dispatch<React.SetStateAction<HomeStat[]>>;
  quickLinks: QuickLinkItem[];
  setQuickLinks: React.Dispatch<React.SetStateAction<QuickLinkItem[]>>;
}

const AdminDashboard: React.FC<AdminProps> = ({ 
  setCurrentPath, 
  onLogout,
  adminUser,
  onUpdateAdminUser,
  webSettings, 
  setWebSettings, 
  slides, 
  setSlides, 
  menus, 
  setMenus, 
  galleries, 
  setGalleries, 
  articles, 
  setArticles, 
  pages, 
  setPages,
  teachers, 
  setTeachers, 
  teacherHeaderSettings, 
  setTeacherHeaderSettings,
  spmbData, 
  setSpmbData,
  spmbSettings, 
  setSpmbSettings,
  homeContent, 
  setHomeContent, 
  homeStats, 
  setHomeStats,
  quickLinks, 
  setQuickLinks
}) => {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [expandedMenu, setExpandedMenu] = useState('none');
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [currentEditItem, setCurrentEditItem] = useState<any>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<{ isOpen: boolean; id: any; type: string | null }>({ isOpen: false, id: null, type: null });
  const [isLogoutConfirmOpen, setIsLogoutConfirmOpen] = useState(false);
  const [isPostEditorOpen, setIsPostEditorOpen] = useState(false);
  const [copiedSql, setCopiedSql] = useState(false);
  
  // SPMB Jenjang Filter Tab State ('ALL' | 'SMP' | 'SMK')
  const [spmbJenjangFilter, setSpmbJenjangFilter] = useState<'ALL' | 'SMP' | 'SMK'>('ALL');
  const filteredSpmbData = spmbJenjangFilter === 'ALL' 
    ? spmbData 
    : spmbData.filter(s => s.jenjang === spmbJenjangFilter);

  // Local state for forms
  const [settingsForm, setSettingsForm] = useState<WebSettings>(webSettings);
  const [spmbSettingsForm, setSpmbSettingsForm] = useState<SpmbSettings>(spmbSettings);
  const [teacherHeaderForm, setTeacherHeaderForm] = useState<TeacherHeaderSettings>(teacherHeaderSettings);
  const [newMenu, setNewMenu] = useState({ label: '', path: '', parentId: '' });

  // Account Settings Form State
  const getInitialAdminCreds = () => {
    try {
      const saved = localStorage.getItem('rm_admin_credentials');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {
      name: adminUser?.name || webSettings.owner || 'Daruna Tarihoran, M.Pd.',
      username: adminUser?.username || 'admin',
      email: adminUser?.email || webSettings.email || 'admin@rasmanmulya.sch.id',
      role: adminUser?.role || 'Super Administrator',
      password: 'admin123',
      avatar: adminUser?.avatar || ''
    };
  };

  const [accountForm, setAccountForm] = useState(() => {
    const creds = getInitialAdminCreds();
    return {
      name: creds.name || adminUser?.name || 'Administrator',
      username: creds.username || adminUser?.username || 'admin',
      email: creds.email || adminUser?.email || 'admin@rasmanmulya.sch.id',
      role: creds.role || adminUser?.role || 'Super Administrator',
      avatar: creds.avatar || '',
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      hideAdminLogin: !!webSettings.hideAdminLogin
    };
  });
  const [showAccountPassword, setShowAccountPassword] = useState(false);
  // Manajemen Seluruh Akun Administrator
  const getInitialAdminAccounts = (): AdminAccountItem[] => {
    try {
      const saved = localStorage.getItem('rm_admin_accounts');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {}

    const primaryCreds = getInitialAdminCreds();
    return [
      {
        id: 1,
        name: primaryCreds.name || adminUser?.name || 'Daruna Tarihoran, M.Pd.',
        username: primaryCreds.username || adminUser?.username || 'admin',
        email: primaryCreds.email || adminUser?.email || 'admin@rasmanmulya.sch.id',
        role: primaryCreds.role || 'Super Administrator',
        status: 'active',
        password: primaryCreds.password || 'admin123',
        createdAt: '2026-01-01'
      }
    ];
  };

  const [adminAccounts, setAdminAccounts] = useState<AdminAccountItem[]>(getInitialAdminAccounts);
  const [accountSubTab, setAccountSubTab] = useState<'profile' | 'admin_list'>('profile');
  const [isAddAdminOpen, setIsAddAdminOpen] = useState(false);
  const [editingAdminId, setEditingAdminId] = useState<number | null>(null);
  const [newAdminForm, setNewAdminForm] = useState({
    name: '',
    username: '',
    email: '',
    role: 'Administrator Utama',
    status: 'active' as 'active' | 'inactive',
    password: '',
    confirmPassword: ''
  });
  const [showNewAdminPassword, setShowNewAdminPassword] = useState(false);
  const [adminSearchQuery, setAdminSearchQuery] = useState('');

  const [accountAlert, setAccountAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [sqlCharset, setSqlCharset] = useState<'utf8' | 'utf8mb4'>('utf8');

  const handleOpenAddAdmin = () => {
    setActiveMenu('pengaturan_akun');
    setAccountSubTab('admin_list');
    setEditingAdminId(null);
    setNewAdminForm({
      name: '',
      username: '',
      email: '',
      role: 'Administrator Utama',
      status: 'active',
      password: '',
      confirmPassword: ''
    });
    setIsAddAdminOpen(true);
    setAccountAlert(null);
  };

  const handleToggleHideLogin = (val: boolean) => {
    setAccountForm(prev => ({ ...prev, hideAdminLogin: val }));
    setSettingsForm(prev => ({ ...prev, hideAdminLogin: val }));
    const updated = { ...webSettings, hideAdminLogin: val };
    setWebSettings(updated);
    try {
      localStorage.setItem('rm_web_settings', JSON.stringify(updated));
    } catch (e) {}
    setAccountAlert({
      type: 'success',
      message: val 
        ? 'Tombol Login Admin di website publik sekarang disembunyikan. Anda tetap dapat masuk via tautan gembok di footer atau URL #login.' 
        : 'Tombol Login Admin di website publik sekarang ditampilkan di header dan menu navigasi.'
    });
  };

  const handleSaveAccount = (e: React.FormEvent) => {
    e.preventDefault();
    setAccountAlert(null);

    if (!accountForm.name.trim()) {
      setAccountAlert({ type: 'error', message: 'Nama lengkap administrator tidak boleh kosong.' });
      return;
    }
    if (!accountForm.username.trim()) {
      setAccountAlert({ type: 'error', message: 'Username login tidak boleh kosong.' });
      return;
    }
    if (!accountForm.email.trim()) {
      setAccountAlert({ type: 'error', message: 'Alamat email administrator tidak boleh kosong.' });
      return;
    }

    const currentCreds = getInitialAdminCreds();
    let finalPassword = currentCreds.password || 'admin123';

    if (accountForm.newPassword) {
      if (accountForm.newPassword.length < 5) {
        setAccountAlert({ type: 'error', message: 'Kata sandi baru minimal 5 karakter demi keamanan akun.' });
        return;
      }
      if (accountForm.newPassword !== accountForm.confirmPassword) {
        setAccountAlert({ type: 'error', message: 'Konfirmasi password baru tidak cocok dengan kata sandi baru!' });
        return;
      }
      finalPassword = accountForm.newPassword;
    }

    const updatedUser = {
      name: accountForm.name.trim(),
      username: accountForm.username.trim(),
      email: accountForm.email.trim(),
      role: accountForm.role,
      avatar: accountForm.avatar
    };

    const updatedCreds = {
      ...updatedUser,
      password: finalPassword
    };

    try {
      localStorage.setItem('rm_admin_credentials', JSON.stringify(updatedCreds));
      localStorage.setItem('rm_admin_session', JSON.stringify(updatedUser));
    } catch (e) {}

    if (onUpdateAdminUser) {
      onUpdateAdminUser(updatedUser);
    }

    // Sinkronkan pengaturan sembunyikan login
    const updatedWebSettings = {
      ...webSettings,
      hideAdminLogin: !!accountForm.hideAdminLogin
    };
    setWebSettings(updatedWebSettings);
    try {
      localStorage.setItem('rm_web_settings', JSON.stringify(updatedWebSettings));
    } catch (e) {}

    setAccountForm(prev => ({
      ...prev,
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }));

    setAccountAlert({
      type: 'success',
      message: 'Perubahan akun administrator berhasil disimpan! Kredensial username dan password baru telah aktif.'
    });

    // Sinkronkan akun saya ke daftar akun admin
    setAdminAccounts(prev => {
      const updated = prev.map(a => {
        if (a.username.toLowerCase() === currentCreds.username?.toLowerCase() || a.id === 1) {
          return {
            ...a,
            name: updatedUser.name,
            username: updatedUser.username,
            email: updatedUser.email,
            role: updatedUser.role,
            password: finalPassword
          };
        }
        return a;
      });
      try {
        localStorage.setItem('rm_admin_accounts', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });

    const btn = document.getElementById('saveAccountBtn');
    if (btn) {
      btn.innerHTML = 'Perubahan Tersimpan!';
      btn.classList.add('bg-emerald-600');
      setTimeout(() => {
        btn.innerHTML = 'Simpan Perubahan Akun';
        btn.classList.remove('bg-emerald-600');
      }, 2500);
    }
  };

  // Handler: Simpan Akun Admin Baru / Edit Akun
  const handleSaveAdminAccount = (e: React.FormEvent) => {
    e.preventDefault();
    setAccountAlert(null);

    const name = newAdminForm.name.trim();
    const username = newAdminForm.username.trim().toLowerCase();
    const email = newAdminForm.email.trim().toLowerCase();

    if (!name || !username || !email) {
      setAccountAlert({ type: 'error', message: 'Nama lengkap, username, dan email wajib diisi!' });
      return;
    }

    if (username.length < 3) {
      setAccountAlert({ type: 'error', message: 'Username login minimal 3 karakter!' });
      return;
    }

    if (/\s/.test(username)) {
      setAccountAlert({ type: 'error', message: 'Username tidak boleh mengandung spasi!' });
      return;
    }

    // Cek duplikasi username / email
    const duplicate = adminAccounts.find(a => 
      a.id !== editingAdminId && 
      (a.username.toLowerCase() === username || a.email.toLowerCase() === email)
    );
    if (duplicate) {
      setAccountAlert({ 
        type: 'error', 
        message: `Username "${username}" atau email "${email}" sudah digunakan oleh akun lain!` 
      });
      return;
    }

    // Validasi kata sandi untuk akun baru atau jika kata sandi diubah
    if (!editingAdminId || newAdminForm.password) {
      if (!newAdminForm.password || newAdminForm.password.length < 5) {
        setAccountAlert({ type: 'error', message: 'Kata sandi minimal 5 karakter demi keamanan akun!' });
        return;
      }
      if (newAdminForm.password !== newAdminForm.confirmPassword) {
        setAccountAlert({ type: 'error', message: 'Konfirmasi kata sandi tidak cocok!' });
        return;
      }
    }

    let updatedList: AdminAccountItem[];
    if (editingAdminId) {
      updatedList = adminAccounts.map(acc => {
        if (acc.id === editingAdminId) {
          return {
            ...acc,
            name,
            username,
            email,
            role: newAdminForm.role,
            status: newAdminForm.status,
            password: newAdminForm.password ? newAdminForm.password : acc.password
          };
        }
        return acc;
      });
      setAccountAlert({ type: 'success', message: `Akun administrator "${name}" (@${username}) berhasil diperbarui!` });
    } else {
      const newAcc: AdminAccountItem = {
        id: Date.now(),
        name,
        username,
        email,
        role: newAdminForm.role,
        status: newAdminForm.status,
        password: newAdminForm.password,
        createdAt: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })
      };
      updatedList = [newAcc, ...adminAccounts];
      setAccountAlert({ type: 'success', message: `Akun administrator baru "${name}" (@${username}) berhasil ditambahkan dan dapat langsung login!` });
    }

    setAdminAccounts(updatedList);
    try {
      localStorage.setItem('rm_admin_accounts', JSON.stringify(updatedList));
    } catch (e) {}

    // Reset Form
    setNewAdminForm({
      name: '',
      username: '',
      email: '',
      role: 'Administrator Utama',
      status: 'active',
      password: '',
      confirmPassword: ''
    });
    setEditingAdminId(null);
    setIsAddAdminOpen(false);
  };

  const handleEditAdmin = (item: AdminAccountItem) => {
    setEditingAdminId(item.id);
    setNewAdminForm({
      name: item.name,
      username: item.username,
      email: item.email,
      role: item.role,
      status: item.status,
      password: '',
      confirmPassword: ''
    });
    setIsAddAdminOpen(true);
    setAccountAlert(null);
  };

  const handleDeleteAdmin = (item: AdminAccountItem) => {
    if (item.username.toLowerCase() === adminUser?.username?.toLowerCase()) {
      alert('Anda tidak dapat menghapus akun admin yang sedang Anda gunakan untuk login saat ini!');
      return;
    }
    if (adminAccounts.length <= 1) {
      alert('Harus tersisa minimal satu akun administrator pada sistem!');
      return;
    }
    if (confirm(`Apakah Anda yakin ingin menghapus akun admin "${item.name}" (@${item.username})? Tindakan ini tidak dapat dibatalkan.`)) {
      const updatedList = adminAccounts.filter(a => a.id !== item.id);
      setAdminAccounts(updatedList);
      try {
        localStorage.setItem('rm_admin_accounts', JSON.stringify(updatedList));
      } catch (e) {}
      setAccountAlert({ type: 'success', message: `Akun administrator "${item.name}" berhasil dihapus.` });
    }
  };

  const handleToggleAdminStatus = (item: AdminAccountItem) => {
    if (item.username.toLowerCase() === adminUser?.username?.toLowerCase()) {
      alert('Anda tidak dapat menonaktifkan akun yang sedang aktif Anda gunakan saat ini!');
      return;
    }
    const newStatus: 'active' | 'inactive' = item.status === 'active' ? 'inactive' : 'active';
    const updatedList = adminAccounts.map(a => a.id === item.id ? { ...a, status: newStatus } : a);
    setAdminAccounts(updatedList);
    try {
      localStorage.setItem('rm_admin_accounts', JSON.stringify(updatedList));
    } catch (e) {}
    setAccountAlert({
      type: 'success',
      message: `Status akun "${item.name}" berhasil diubah menjadi ${newStatus === 'active' ? 'Aktif' : 'Non-Aktif'}.`
    });
  };

  // Generate dynamic MySQL SQL file from current application state
  const generateSqlContent = () => {
    const charset = sqlCharset;
    const collation = sqlCharset === 'utf8mb4' ? 'utf8mb4_unicode_ci' : 'utf8_general_ci';
    return `-- =====================================================================
-- DATABASE MYSQL YAYASAN PENDIDIKAN RASMAN MULYA (SMP & SMK)
-- Snapshot Ekspor: ${new Date().toLocaleString('id-ID')}
-- Charset: ${charset} / Collation: ${collation} (Kompatibel phpMyAdmin / cPanel)
-- Siap Import ke cPanel phpMyAdmin / Hosting MySQL
-- =====================================================================

-- CATATAN CPANEL / HOSTING (Bebas Error 1044):
-- Pada cPanel / Shared Hosting, pembuatan database dilakukan via cPanel (MySQL Databases / Wizard).
-- Database user tidak memiliki hak 'CREATE DATABASE' di server root, sehingga baris CREATE DATABASE dihilangkan.
-- Cukup pilih database Anda di phpMyAdmin (panel kiri) lalu klik menu 'Import'.
-- (Jika VPS / Local MySQL root: CREATE DATABASE IF NOT EXISTS \`rasmanmulya_db\` CHARACTER SET ${charset} COLLATE ${collation}; USE \`rasmanmulya_db\`;)

SET FOREIGN_KEY_CHECKS = 0;

-- 1. Tabel Administrator (admin_users)
DROP TABLE IF EXISTS \`admin_users\`;
CREATE TABLE \`admin_users\` (
  \`id\` INT AUTO_INCREMENT PRIMARY KEY,
  \`username\` VARCHAR(50) NOT NULL UNIQUE,
  \`email\` VARCHAR(100) NOT NULL UNIQUE,
  \`password_hash\` VARCHAR(255) NOT NULL,
  \`full_name\` VARCHAR(100) NOT NULL,
  \`role\` ENUM('superadmin', 'admin', 'operator') DEFAULT 'superadmin',
  \`status\` ENUM('active', 'inactive') DEFAULT 'active',
  \`created_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  \`updated_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=${charset} COLLATE=${collation};

INSERT INTO \`admin_users\` (\`id\`, \`username\`, \`email\`, \`password_hash\`, \`full_name\`, \`role\`, \`status\`) VALUES
${adminAccounts.map((acc, idx) => {
  const hash = '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi';
  const roleVal = acc.role.toLowerCase().includes('super') ? 'superadmin' : acc.role.toLowerCase().includes('operator') ? 'operator' : 'admin';
  const statusVal = acc.status === 'inactive' ? 'inactive' : 'active';
  return `(${acc.id || idx + 1}, '${acc.username.replace(/'/g, "''")}', '${acc.email.replace(/'/g, "''")}', '${hash}', '${(acc.name || 'Administrator').replace(/'/g, "''")}', '${roleVal}', '${statusVal}')`;
}).join(',\n')};

-- 2. Tabel Pengaturan Website (web_settings)
DROP TABLE IF EXISTS \`web_settings\`;
CREATE TABLE \`web_settings\` (
  \`id\` INT PRIMARY KEY DEFAULT 1,
  \`nama_web\` VARCHAR(100) NOT NULL,
  \`nama_perusahaan\` VARCHAR(255) NOT NULL,
  \`owner\` VARCHAR(100) NOT NULL,
  \`telp\` VARCHAR(50) NOT NULL,
  \`whatsapp\` VARCHAR(50) NOT NULL,
  \`email\` VARCHAR(100) NOT NULL,
  \`alamat\` TEXT NOT NULL,
  \`domain\` VARCHAR(100) NOT NULL,
  \`logo_url\` TEXT,
  \`favicon_url\` TEXT,
  \`footer_text\` TEXT,
  \`sosmed_facebook\` TEXT,
  \`sosmed_instagram\` TEXT,
  \`sosmed_youtube\` TEXT,
  \`sosmed_twitter\` TEXT,
  \`updated_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=${charset} COLLATE=${collation};

INSERT INTO \`web_settings\` (\`id\`, \`nama_web\`, \`nama_perusahaan\`, \`owner\`, \`telp\`, \`whatsapp\`, \`email\`, \`alamat\`, \`domain\`, \`logo_url\`, \`favicon_url\`, \`footer_text\`, \`sosmed_facebook\`, \`sosmed_instagram\`, \`sosmed_youtube\`, \`sosmed_twitter\`) VALUES
(1, '${(webSettings.namaWeb || '').replace(/'/g, "''")}', '${(webSettings.namaPerusahaan || '').replace(/'/g, "''")}', '${(webSettings.owner || '').replace(/'/g, "''")}', '${(webSettings.telp || '').replace(/'/g, "''")}', '${(webSettings.whatsapp || '').replace(/'/g, "''")}', '${(webSettings.email || '').replace(/'/g, "''")}', '${(webSettings.alamat || '').replace(/'/g, "''")}', '${(webSettings.domain || '').replace(/'/g, "''")}', '${(webSettings.logoUrl || '').replace(/'/g, "''")}', '${(webSettings.faviconUrl || '').replace(/'/g, "''")}', '${(webSettings.footerText || '').replace(/'/g, "''")}', '${(webSettings.sosmed?.facebook || '').replace(/'/g, "''")}', '${(webSettings.sosmed?.instagram || '').replace(/'/g, "''")}', '${(webSettings.sosmed?.youtube || '').replace(/'/g, "''")}', '${(webSettings.sosmed?.twitter || '').replace(/'/g, "''")}');

-- 3. Tabel Konten Beranda & Pimpinan (home_content)
DROP TABLE IF EXISTS \`home_content\`;
CREATE TABLE \`home_content\` (
  \`id\` INT PRIMARY KEY DEFAULT 1,
  \`sambutan\` TEXT NOT NULL,
  \`visi\` TEXT NOT NULL,
  \`misi\` TEXT NOT NULL,
  \`kepsek_name\` VARCHAR(150) NOT NULL,
  \`kepsek_image\` TEXT NOT NULL,
  \`updated_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=${charset} COLLATE=${collation};

INSERT INTO \`home_content\` (\`id\`, \`sambutan\`, \`visi\`, \`misi\`, \`kepsek_name\`, \`kepsek_image\`) VALUES
(1, '${(homeContent.sambutan || '').replace(/'/g, "''")}', '${(homeContent.visi || '').replace(/'/g, "''")}', '${(homeContent.misi || '').replace(/'/g, "''")}', '${(homeContent.kepsekName || '').replace(/'/g, "''")}', '${(homeContent.kepsekImage || '').replace(/'/g, "''")}');

-- 4. Tabel Statistik Beranda (home_stats)
DROP TABLE IF EXISTS \`home_stats\`;
CREATE TABLE \`home_stats\` (
  \`id\` INT AUTO_INCREMENT PRIMARY KEY,
  \`stat_value\` VARCHAR(50) NOT NULL,
  \`stat_label\` VARCHAR(100) NOT NULL,
  \`sort_order\` INT DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=${charset} COLLATE=${collation};

${homeStats.map((s, i) => `INSERT INTO \`home_stats\` (\`id\`, \`stat_value\`, \`stat_label\`, \`sort_order\`) VALUES (${s.id || i + 1}, '${s.value.replace(/'/g, "''")}', '${s.label.replace(/'/g, "''")}', ${i + 1});`).join('\n')}

-- 5. Tabel Slider Beranda (slides)
DROP TABLE IF EXISTS \`slides\`;
CREATE TABLE \`slides\` (
  \`id\` INT AUTO_INCREMENT PRIMARY KEY,
  \`title\` VARCHAR(255) NOT NULL,
  \`description\` TEXT NOT NULL,
  \`image_url\` TEXT NOT NULL,
  \`badge_type\` VARCHAR(50) DEFAULT 'card1',
  \`sort_order\` INT DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=${charset} COLLATE=${collation};

${slides.map((sl, i) => `INSERT INTO \`slides\` (\`id\`, \`title\`, \`description\`, \`image_url\`, \`badge_type\`, \`sort_order\`) VALUES (${sl.id || i + 1}, '${sl.title.replace(/'/g, "''")}', '${sl.desc.replace(/'/g, "''")}', '${sl.image.replace(/'/g, "''")}', '${(sl.type || 'card1').replace(/'/g, "''")}', ${i + 1});`).join('\n')}

-- 6. Tabel Menu Pintasan Cepat (quick_links)
DROP TABLE IF EXISTS \`quick_links\`;
CREATE TABLE \`quick_links\` (
  \`id\` INT AUTO_INCREMENT PRIMARY KEY,
  \`icon\` VARCHAR(50) NOT NULL,
  \`label\` VARCHAR(100) NOT NULL,
  \`path\` VARCHAR(100) NOT NULL,
  \`sort_order\` INT DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=${charset} COLLATE=${collation};

${quickLinks.map((ql, i) => `INSERT INTO \`quick_links\` (\`id\`, \`icon\`, \`label\`, \`path\`, \`sort_order\`) VALUES (${ql.id || i + 1}, '${ql.icon.replace(/'/g, "''")}', '${ql.label.replace(/'/g, "''")}', '${ql.path.replace(/'/g, "''")}', ${i + 1});`).join('\n')}

-- 7. Tabel Menu Navigasi Utama (menus)
DROP TABLE IF EXISTS \`menus\`;
CREATE TABLE \`menus\` (
  \`id\` VARCHAR(50) PRIMARY KEY,
  \`label\` VARCHAR(100) NOT NULL,
  \`path\` VARCHAR(100) NOT NULL,
  \`parent_id\` VARCHAR(50) DEFAULT NULL,
  \`is_visible\` TINYINT(1) DEFAULT 1,
  \`sort_order\` INT DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=${charset} COLLATE=${collation};

${menus.map((m, i) => [
  `INSERT INTO \`menus\` (\`id\`, \`label\`, \`path\`, \`parent_id\`, \`is_visible\`, \`sort_order\`) VALUES ('${m.id}', '${m.label.replace(/'/g, "''")}', '${m.path.replace(/'/g, "''")}', NULL, ${m.visible ? 1 : 0}, ${i + 1});`,
  ...(m.submenus || []).map((sub, si) => `INSERT INTO \`menus\` (\`id\`, \`label\`, \`path\`, \`parent_id\`, \`is_visible\`, \`sort_order\`) VALUES ('${sub.id}', '${sub.label.replace(/'/g, "''")}', '${sub.path.replace(/'/g, "''")}', '${m.id}', 1, ${si + 1});`)
].join('\n')).join('\n')}

-- 8. Tabel Artikel & Berita (articles)
DROP TABLE IF EXISTS \`articles\`;
CREATE TABLE \`articles\` (
  \`id\` BIGINT AUTO_INCREMENT PRIMARY KEY,
  \`title\` VARCHAR(255) NOT NULL,
  \`slug\` VARCHAR(255) DEFAULT NULL,
  \`category\` VARCHAR(50) NOT NULL,
  \`date\` VARCHAR(50) NOT NULL,
  \`status\` ENUM('Published', 'Draft') DEFAULT 'Published',
  \`image_url\` TEXT,
  \`content\` LONGTEXT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=${charset} COLLATE=${collation};

${articles.map(a => `INSERT INTO \`articles\` (\`id\`, \`title\`, \`category\`, \`date\`, \`status\`, \`image_url\`, \`content\`) VALUES (${a.id}, '${a.title.replace(/'/g, "''")}', '${a.category.replace(/'/g, "''")}', '${a.date.replace(/'/g, "''")}', '${a.status.replace(/'/g, "''")}', '${(a.image || '').replace(/'/g, "''")}', '${(a.content || '').replace(/'/g, "''")}');`).join('\n')}

-- 9. Tabel Halaman Statis (pages)
DROP TABLE IF EXISTS \`pages\`;
CREATE TABLE \`pages\` (
  \`id\` BIGINT AUTO_INCREMENT PRIMARY KEY,
  \`title\` VARCHAR(255) NOT NULL,
  \`slug\` VARCHAR(150) NOT NULL UNIQUE,
  \`status\` ENUM('Published', 'Draft') DEFAULT 'Published',
  \`image_url\` TEXT,
  \`date\` VARCHAR(50) DEFAULT '01 Jan 2026',
  \`content\` LONGTEXT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=${charset} COLLATE=${collation};

${pages.map(p => `INSERT INTO \`pages\` (\`id\`, \`title\`, \`slug\`, \`status\`, \`image_url\`, \`date\`, \`content\`) VALUES (${p.id}, '${p.title.replace(/'/g, "''")}', '${p.slug.replace(/'/g, "''")}', '${p.status.replace(/'/g, "''")}', '${(p.image || '').replace(/'/g, "''")}', '${(p.date || '01 Jan 2026').replace(/'/g, "''")}', '${(p.content || '').replace(/'/g, "''")}');`).join('\n')}

-- 10. Tabel Tenaga Pendidik / Guru (teachers)
DROP TABLE IF EXISTS \`teachers\`;
CREATE TABLE \`teachers\` (
  \`id\` INT AUTO_INCREMENT PRIMARY KEY,
  \`name\` VARCHAR(150) NOT NULL,
  \`subject_tag\` VARCHAR(150) NOT NULL,
  \`role\` VARCHAR(100) NOT NULL,
  \`subject\` VARCHAR(100) NOT NULL,
  \`category\` VARCHAR(50) NOT NULL,
  \`badge_color\` VARCHAR(50) DEFAULT 'bg-blue-600',
  \`image_url\` TEXT NOT NULL,
  \`education\` TEXT,
  \`bio\` TEXT,
  \`email\` VARCHAR(100),
  \`motto\` TEXT,
  \`experience\` VARCHAR(150)
) ENGINE=InnoDB DEFAULT CHARSET=${charset} COLLATE=${collation};

${teachers.map(t => `INSERT INTO \`teachers\` (\`id\`, \`name\`, \`subject_tag\`, \`role\`, \`subject\`, \`category\`, \`badge_color\`, \`image_url\`, \`education\`, \`bio\`, \`email\`, \`motto\`, \`experience\`) VALUES (${t.id}, '${t.name.replace(/'/g, "''")}', '${t.subjectTag.replace(/'/g, "''")}', '${t.role.replace(/'/g, "''")}', '${t.subject.replace(/'/g, "''")}', '${t.category.replace(/'/g, "''")}', '${(t.badgeColor || 'bg-blue-600').replace(/'/g, "''")}', '${(t.image || '').replace(/'/g, "''")}', '${(t.education || '').replace(/'/g, "''")}', '${(t.bio || '').replace(/'/g, "''")}', '${(t.email || '').replace(/'/g, "''")}', '${(t.motto || '').replace(/'/g, "''")}', '${(t.experience || '').replace(/'/g, "''")}');`).join('\n')}

-- 11. Tabel Pengaturan Header Halaman Guru (teacher_header_settings)
DROP TABLE IF EXISTS \`teacher_header_settings\`;
CREATE TABLE \`teacher_header_settings\` (
  \`id\` INT PRIMARY KEY DEFAULT 1,
  \`tagline\` VARCHAR(150) NOT NULL,
  \`judul\` VARCHAR(255) NOT NULL,
  \`subjudul\` TEXT NOT NULL,
  \`banner_url\` TEXT,
  \`badge_text\` VARCHAR(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=${charset} COLLATE=${collation};

INSERT INTO \`teacher_header_settings\` (\`id\`, \`tagline\`, \`judul\`, \`subjudul\`, \`banner_url\`, \`badge_text\`) VALUES
(1, '${(teacherHeaderSettings.tagline || '').replace(/'/g, "''")}', '${(teacherHeaderSettings.judul || '').replace(/'/g, "''")}', '${(teacherHeaderSettings.subjudul || '').replace(/'/g, "''")}', '${(teacherHeaderSettings.bannerUrl || '').replace(/'/g, "''")}', '${(teacherHeaderSettings.badgeText || '').replace(/'/g, "''")}');

-- 12. Tabel Pengaturan SPMB Online (spmb_settings)
DROP TABLE IF EXISTS \`spmb_settings\`;
CREATE TABLE \`spmb_settings\` (
  \`id\` INT PRIMARY KEY DEFAULT 1,
  \`judul\` VARCHAR(255) NOT NULL,
  \`subjudul\` TEXT NOT NULL,
  \`is_opened\` TINYINT(1) DEFAULT 1,
  \`gelombang\` VARCHAR(150) NOT NULL,
  \`biaya_pendaftaran\` VARCHAR(100) NOT NULL,
  \`jalur_pendaftaran\` VARCHAR(255) NOT NULL,
  \`kontak_panitia\` VARCHAR(100) NOT NULL,
  \`banner_url\` TEXT,
  \`persyaratan\` TEXT NOT NULL,
  \`alur_pendaftaran\` TEXT NOT NULL,
  \`catatan_tambahan\` TEXT,
  \`judul_biaya\` VARCHAR(255) DEFAULT 'Rincian Biaya Masuk & Investasi Pendidikan',
  \`subjudul_biaya\` TEXT,
  \`total_biaya_smp\` VARCHAR(50) DEFAULT 'Rp 3.850.000',
  \`total_biaya_smk\` VARCHAR(50) DEFAULT 'Rp 4.450.000',
  \`kebijakan_cicilan\` TEXT,
  \`foto_rincian_biaya_url\` TEXT
) ENGINE=InnoDB DEFAULT CHARSET=${charset} COLLATE=${collation};

INSERT INTO \`spmb_settings\` (\`id\`, \`judul\`, \`subjudul\`, \`is_opened\`, \`gelombang\`, \`biaya_pendaftaran\`, \`jalur_pendaftaran\`, \`kontak_panitia\`, \`banner_url\`, \`persyaratan\`, \`alur_pendaftaran\`, \`catatan_tambahan\`, \`judul_biaya\`, \`subjudul_biaya\`, \`total_biaya_smp\`, \`total_biaya_smk\`, \`kebijakan_cicilan\`, \`foto_rincian_biaya_url\`) VALUES
(1, '${(spmbSettings.judul || '').replace(/'/g, "''")}', '${(spmbSettings.subjudul || '').replace(/'/g, "''")}', ${spmbSettings.isOpened ? 1 : 0}, '${(spmbSettings.gelombang || '').replace(/'/g, "''")}', '${(spmbSettings.biayaPendaftaran || '').replace(/'/g, "''")}', '${(spmbSettings.jalurPendaftaran || '').replace(/'/g, "''")}', '${(spmbSettings.kontakPanitia || '').replace(/'/g, "''")}', '${(spmbSettings.bannerUrl || '').replace(/'/g, "''")}', '${(spmbSettings.persyaratan || '').replace(/'/g, "''")}', '${(spmbSettings.alurPendaftaran || '').replace(/'/g, "''")}', '${(spmbSettings.catatanTambahan || '').replace(/'/g, "''")}', '${(spmbSettings.judulBiaya || '').replace(/'/g, "''")}', '${(spmbSettings.subjudulBiaya || '').replace(/'/g, "''")}', '${(spmbSettings.totalBiayaSmp || '').replace(/'/g, "''")}', '${(spmbSettings.totalBiayaSmk || '').replace(/'/g, "''")}', '${(spmbSettings.kebijakanCicilan || '').replace(/'/g, "''")}', '${(spmbSettings.fotoRincianBiayaUrl || '').replace(/'/g, "''")}');

-- 13. Tabel Rincian Komponen Biaya SPMB (spmb_cost_items)
DROP TABLE IF EXISTS \`spmb_cost_items\`;
CREATE TABLE \`spmb_cost_items\` (
  \`id\` INT AUTO_INCREMENT PRIMARY KEY,
  \`komponen\` VARCHAR(150) NOT NULL,
  \`biaya_smp\` VARCHAR(50) NOT NULL,
  \`biaya_smk\` VARCHAR(50) NOT NULL,
  \`keterangan\` TEXT,
  \`sort_order\` INT DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=${charset} COLLATE=${collation};

${(spmbSettings.biayaItems || []).map((ci, i) => `INSERT INTO \`spmb_cost_items\` (\`id\`, \`komponen\`, \`biaya_smp\`, \`biaya_smk\`, \`keterangan\`, \`sort_order\`) VALUES (${i + 1}, '${ci.komponen.replace(/'/g, "''")}', '${ci.biayaSmp.replace(/'/g, "''")}', '${ci.biayaSmk.replace(/'/g, "''")}', '${(ci.keterangan || '').replace(/'/g, "''")}', ${i + 1});`).join('\n')}

-- 14. Tabel Pendaftar SPMB Siswa Baru (spmb_applicants)
DROP TABLE IF EXISTS \`spmb_applicants\`;
CREATE TABLE \`spmb_applicants\` (
  \`id\` BIGINT AUTO_INCREMENT PRIMARY KEY,
  \`name\` VARCHAR(150) NOT NULL,
  \`jenjang\` ENUM('SMP', 'SMK') NOT NULL,
  \`asal_sekolah\` VARCHAR(150) DEFAULT NULL,
  \`phone\` VARCHAR(50) DEFAULT NULL,
  \`parent_name\` VARCHAR(150) DEFAULT NULL,
  \`status\` ENUM('Menunggu Verifikasi', 'Diterima', 'Cadangan', 'Ditolak') DEFAULT 'Menunggu Verifikasi',
  \`registered_at\` DATE DEFAULT (CURRENT_DATE)
) ENGINE=InnoDB DEFAULT CHARSET=${charset} COLLATE=${collation};

${spmbData.map(s => `INSERT INTO \`spmb_applicants\` (\`id\`, \`name\`, \`jenjang\`, \`asal_sekolah\`, \`phone\`, \`parent_name\`, \`status\`, \`registered_at\`) VALUES (${s.id}, '${s.name.replace(/'/g, "''")}', '${s.jenjang.replace(/'/g, "''")}', '${(s.asalSekolah || '').replace(/'/g, "''")}', '${(s.phone || '').replace(/'/g, "''")}', '${(s.parentName || '').replace(/'/g, "''")}', '${s.status.replace(/'/g, "''")}', '${(s.registeredAt || '2026-10-01').replace(/'/g, "''")}');`).join('\n')}

-- 15. Tabel Galeri Kegiatan (galleries)
DROP TABLE IF EXISTS \`galleries\`;
CREATE TABLE \`galleries\` (
  \`id\` INT AUTO_INCREMENT PRIMARY KEY,
  \`title\` VARCHAR(255) NOT NULL,
  \`type\` ENUM('foto', 'video') DEFAULT 'foto',
  \`image_url\` TEXT NOT NULL,
  \`date\` VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=${charset} COLLATE=${collation};

${galleries.map(g => `INSERT INTO \`galleries\` (\`id\`, \`title\`, \`type\`, \`image_url\`, \`date\`) VALUES (${g.id}, '${g.title.replace(/'/g, "''")}', '${g.type.replace(/'/g, "''")}', '${g.image.replace(/'/g, "''")}', '${g.date.replace(/'/g, "''")}');`).join('\n')}

SET FOREIGN_KEY_CHECKS = 1;

-- =====================================================================
-- SELESAI. Database siap di-import ke phpMyAdmin cPanel / Hosting MySQL
-- =====================================================================
`;
  };

  const handleDownloadSql = () => {
    const sqlText = generateSqlContent();
    const blob = new Blob([sqlText], { type: 'text/sql;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `rasmanmulya_db_${new Date().toISOString().split('T')[0]}.sql`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopySql = () => {
    const sqlText = generateSqlContent();
    navigator.clipboard.writeText(sqlText);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2500);
  };

  const [downloadingZip, setDownloadingZip] = useState(false);
  const [downloadingTar, setDownloadingTar] = useState(false);

  const handleDownloadZip = async () => {
    try {
      setDownloadingZip(true);
      const res = await fetch('./website_siap_upload_cpanel.zip?t=' + Date.now());
      if (!res.ok) throw new Error('Status: ' + res.status);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'website_siap_upload_cpanel.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Blob download failed, using direct download link:', err);
      const link = document.createElement('a');
      link.href = './website_siap_upload_cpanel.zip';
      link.download = 'website_siap_upload_cpanel.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } finally {
      setDownloadingZip(false);
    }
  };

  const handleDownloadTar = async () => {
    try {
      setDownloadingTar(true);
      const res = await fetch('./website_siap_upload_cpanel.tar.gz?t=' + Date.now());
      if (!res.ok) throw new Error('Status: ' + res.status);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'website_siap_upload_cpanel.tar.gz';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Blob download failed, using direct download link:', err);
      const link = document.createElement('a');
      link.href = './website_siap_upload_cpanel.tar.gz';
      link.download = 'website_siap_upload_cpanel.tar.gz';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } finally {
      setDownloadingTar(false);
    }
  };

  const [activeSqlTab, setActiveSqlTab] = useState<'guide' | 'preview' | 'php'>('guide');
  const [copiedPhp, setCopiedPhp] = useState(false);

  const generatePhpConfigCode = () => {
    return `<?php
/**
 * =====================================================================
 * Konfigurasi Database MySQL - Yayasan Pendidikan Rasman Mulya
 * Dibuat untuk Hosting cPanel / phpMyAdmin / VPS / Shared Hosting
 * =====================================================================
 */

// Kredensial Database MySQL Hosting
define('DB_HOST', 'localhost');
define('DB_NAME', 'rasmanmulya_db');        // Ganti dengan Nama Database cPanel Anda (cth: u1234567_rasmanmulya)
define('DB_USER', 'root');                  // Ganti dengan Username Database cPanel Anda (cth: u1234567_dbuser)
define('DB_PASS', '');                      // Ganti dengan Password Database cPanel Anda
define('DB_CHARSET', '${sqlCharset}');

try {
    $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
    $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];
    $pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
} catch (PDOException $e) {
    http_response_code(500);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        'status' => 'error',
        'message' => 'Koneksi database MySQL gagal: ' . $e->getMessage()
    ]);
    exit;
}
?>`;
  };

  const handleDownloadPhpConfig = () => {
    const phpCode = generatePhpConfigCode();
    const blob = new Blob([phpCode], { type: 'application/x-php;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'db.php';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyPhp = () => {
    navigator.clipboard.writeText(generatePhpConfigCode());
    setCopiedPhp(true);
    setTimeout(() => setCopiedPhp(false), 2500);
  };

  const toggleSubmenu = (menu: string) => { 
    setExpandedMenu(prev => prev === menu ? 'none' : menu); 
  };

  const handleMenuClick = (menuId: string, isSubmenu = false) => { 
    if (menuId === 'tambah_admin') {
      handleOpenAddAdmin();
      if (!isSubmenu) setExpandedMenu('none'); 
      setIsPostEditorOpen(false); 
      return;
    }
    if (menuId === 'daftar_admin') {
      setActiveMenu('pengaturan_akun');
      setAccountSubTab('admin_list');
      setIsAddAdminOpen(false);
      setEditingAdminId(null);
      setAccountAlert(null);
      if (!isSubmenu) setExpandedMenu('none'); 
      setIsPostEditorOpen(false); 
      return;
    }
    setActiveMenu(menuId); 
    if (!isSubmenu) setExpandedMenu('none'); 
    setIsPostEditorOpen(false); 
  };

  const menuStructure = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
    { 
      id: 'spmb_group', 
      label: 'SPMB Sekolah', 
      icon: <GraduationCap size={18} />, 
      submenus: [ 
        { id: 'spmb', label: 'Data Pendaftar SPMB' }, 
        { id: 'pengaturan_spmb', label: 'Pengaturan Halaman SPMB' } 
      ] 
    },
    { 
      id: 'profil_group', 
      label: 'Tenaga Pendidik', 
      icon: <Users size={18} />, 
      submenus: [ 
        { id: 'pendidik', label: 'Direktori Guru & Staf' },
        { id: 'pengaturan_header_guru', label: 'Header Halaman Guru' }
      ] 
    },
    { 
      id: 'artikel_group', 
      label: 'Publikasi', 
      icon: <Layers size={18} />, 
      submenus: [ 
        { id: 'artikel_list', label: 'Artikel & Berita' }, 
        { id: 'halaman_list', label: 'Halaman Statis' } 
      ] 
    },
    { 
      id: 'galeri_group', 
      label: 'Media Galeri', 
      icon: <ImageIcon size={18} />, 
      submenus: [ 
        { id: 'galeri_foto', label: 'Galeri Foto' }, 
        { id: 'galeri_video', label: 'Galeri Video' } 
      ] 
    },
    { id: 'pengaturan_beranda', label: 'Konten Beranda', icon: <Globe size={18} /> },
    { id: 'slider', label: 'Slider Beranda', icon: <Sliders size={18} /> },
    { id: 'menu_manager', label: 'Menu Navigasi', icon: <Menu size={18} /> },
    { id: 'pengaturan_web', label: 'Pengaturan Web', icon: <Settings size={18} /> },
    { 
      id: 'akun_group', 
      label: 'Kelola Admin', 
      icon: <Users size={18} />, 
      submenus: [ 
        { id: 'tambah_admin', label: '+ Tambah Akun Admin' }, 
        { id: 'daftar_admin', label: 'Daftar Akun Admin' }, 
        { id: 'pengaturan_akun', label: 'Profil & Keamanan' } 
      ] 
    },
    { id: 'database_mysql', label: 'Database & Hosting', icon: <Database size={18} /> },
  ];

  const handleDelete = () => {
    const { id, type } = deleteConfirm;
    if (type === 'slide') setSlides(slides.filter(s => s.id !== id));
    if (type === 'artikel') setArticles(articles.filter(a => a.id !== id));
    if (type === 'halaman') setPages(pages.filter(p => p.id !== id));
    if (type === 'pendidik') setTeachers(teachers.filter(t => t.id !== id));
    if (type === 'spmb') setSpmbData(spmbData.filter(s => s.id !== id));
    if (type === 'galeri') setGalleries(galleries.filter(g => g.id !== id));
    if (type === 'menu') setMenus(menus.map(m => ({ ...m, submenus: m.submenus?.filter(s => s.id !== id) || [] })).filter(m => m.id !== id));
    setDeleteConfirm({ isOpen: false, id: null, type: null });
  };

  const openDeleteConfirm = (id: any, type: string) => setDeleteConfirm({ isOpen: true, id, type });

  const handleGenericSave = (e: React.FormEvent, type: string, dataArray: any[], setter: any) => {
    e.preventDefault();
    if (modalType === `add_${type}`) {
      setter([{ ...currentEditItem, id: Date.now() }, ...dataArray]);
    } else {
      setter(dataArray.map(item => item.id === currentEditItem.id ? currentEditItem : item));
    }
    setIsModalOpen(false);
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setWebSettings(settingsForm);
    const btn = document.getElementById('saveSettingsBtn');
    if (btn) { 
      btn.innerHTML = 'Tersimpan Sukses!'; 
      btn.classList.add('bg-emerald-600'); 
      setTimeout(() => { 
        btn.innerHTML = 'Simpan Pengaturan'; 
        btn.classList.remove('bg-emerald-600'); 
      }, 2000); 
    }
  };

  const handleSaveSpmbSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setSpmbSettings(spmbSettingsForm);
    const btn = document.getElementById('saveSpmbSettingsBtn');
    if (btn) { 
      btn.innerHTML = 'Pengaturan SPMB Disimpan!'; 
      btn.classList.add('bg-emerald-600'); 
      setTimeout(() => { 
        btn.innerHTML = 'Simpan Pengaturan SPMB'; 
        btn.classList.remove('bg-emerald-600'); 
      }, 2000); 
    }
  };

  const handleSaveTeacherHeader = (e: React.FormEvent) => {
    e.preventDefault();
    setTeacherHeaderSettings(teacherHeaderForm);
    const btn = document.getElementById('saveTeacherHeaderBtn');
    if (btn) { 
      btn.innerHTML = 'Header Guru Disimpan!'; 
      btn.classList.add('bg-emerald-600'); 
      setTimeout(() => { 
        btn.innerHTML = 'Simpan Header Guru'; 
        btn.classList.remove('bg-emerald-600'); 
      }, 2000); 
    }
  };

  // Export Data Pendaftar SPMB to Excel (.CSV with UTF-8 BOM)
  const exportSpmbToExcel = (exportAll = false) => {
    const dataToExport = (!exportAll && spmbJenjangFilter !== 'ALL') ? filteredSpmbData : spmbData;
    if (dataToExport.length === 0) {
      alert('Tidak ada data pendaftar SPMB untuk diekspor!');
      return;
    }

    const headers = [
      'No', 
      'Nama Calon Siswa', 
      'Jenjang', 
      'Asal Sekolah', 
      'Nama Orang Tua / Wali', 
      'No WhatsApp', 
      'Tanggal Pendaftaran', 
      'Status Verifikasi'
    ];

    const rows = dataToExport.map((item, index) => [
      index + 1,
      `"${(item.name || '').replace(/"/g, '""')}"`,
      `"${item.jenjang || ''}"`,
      `"${(item.asalSekolah || '').replace(/"/g, '""')}"`,
      `"${(item.parentName || '').replace(/"/g, '""')}"`,
      `"'${item.phone || ''}"`, // Petik tunggal agar angka 0 di depan nomor HP tidak hilang di Excel
      `"${item.registeredAt || ''}"`,
      `"${item.status || ''}"`
    ]);

    const filterTag = (!exportAll && spmbJenjangFilter !== 'ALL') ? `_${spmbJenjangFilter}` : '';
    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Data_Pendaftar_SPMB${filterTag}_Rasman_Mulya_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Helper to add a new cost breakdown row
  const addCostItem = () => {
    const newItem: SpmbCostItem = {
      id: Date.now().toString(),
      komponen: '',
      biayaSmp: 'Rp 0',
      biayaSmk: 'Rp 0',
      keterangan: ''
    };
    setSpmbSettingsForm({
      ...spmbSettingsForm,
      biayaItems: [...(spmbSettingsForm.biayaItems || []), newItem]
    });
  };

  const removeCostItem = (id: string) => {
    setSpmbSettingsForm({
      ...spmbSettingsForm,
      biayaItems: spmbSettingsForm.biayaItems.filter(item => item.id !== id)
    });
  };

  const updateCostItem = (id: string, field: keyof SpmbCostItem, val: string) => {
    setSpmbSettingsForm({
      ...spmbSettingsForm,
      biayaItems: spmbSettingsForm.biayaItems.map(item => item.id === id ? { ...item, [field]: val } : item)
    });
  };

  const handleAddMenu = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMenu.label || !newMenu.path) return;
    if (newMenu.parentId) {
       setMenus(menus.map(m => m.id === newMenu.parentId ? { ...m, submenus: [...(m.submenus || []), { id: Date.now().toString(), label: newMenu.label, path: newMenu.path }] } : m));
    } else {
       setMenus([...menus, { id: Date.now().toString(), label: newMenu.label, path: newMenu.path, visible: true, submenus: [] }]);
    }
    setNewMenu({ label: '', path: '', parentId: '' });
  };

  const updateQuickLink = (index: number, field: keyof QuickLinkItem, value: any) => {
    const newLinks = [...quickLinks];
    newLinks[index] = { ...newLinks[index], [field]: value };
    setQuickLinks(newLinks);
  };

  return (
    <div className="flex h-screen bg-slate-100 text-slate-800 font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white flex flex-col h-full shrink-0 shadow-2xl z-20">
        <div className="p-5 border-b border-slate-800 flex items-center space-x-3 bg-slate-950">
          <div className="w-9 h-9 bg-yellow-400 text-slate-950 rounded-xl flex items-center justify-center font-black text-sm">RM</div>
          <div>
            <span className="font-extrabold text-base tracking-wide block leading-tight">Admin Panel</span>
            <span className="text-[10px] text-slate-400 font-mono">Rasman Mulya CMS</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1">
            {menuStructure.map(item => (
              <li key={item.id} className="px-3">
                {item.submenus ? (
                  <div>
                    <button 
                      onClick={() => toggleSubmenu(item.id)} 
                      className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs md:text-sm transition font-semibold ${
                        expandedMenu === item.id || item.submenus.some(s => s.id === activeMenu) 
                          ? 'bg-[#1e2a78] text-white shadow' 
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center"><span className="mr-3 opacity-90">{item.icon}</span> {item.label}</div>
                      <ChevronRight size={16} className={`transform transition-transform ${expandedMenu === item.id ? 'rotate-90' : ''}`} />
                    </button>
                    {expandedMenu === item.id && (
                      <ul className="mt-1 mb-2 space-y-1 pl-11 pr-2">
                        {item.submenus.map(sub => (
                          <li key={sub.id}>
                            <button 
                              onClick={() => handleMenuClick(sub.id, true)} 
                              className={`w-full text-left px-3 py-2 text-xs rounded-lg transition ${activeMenu === sub.id ? 'text-yellow-400 font-bold bg-white/10' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
                            >
                              • {sub.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <button 
                    onClick={() => handleMenuClick(item.id)} 
                    className={`w-full flex items-center px-4 py-2.5 rounded-xl text-xs md:text-sm transition font-semibold ${activeMenu === item.id ? 'bg-[#1e2a78] text-white shadow' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}
                  >
                    <span className="mr-3 opacity-90">{item.icon}</span> {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 border-t border-slate-800 bg-slate-950 space-y-2">
          <button 
            onClick={() => setCurrentPath('home')} 
            className="w-full flex items-center justify-center px-4 py-2 text-xs md:text-sm font-bold text-slate-900 bg-yellow-400 hover:bg-yellow-300 rounded-xl transition shadow active:scale-95"
          >
            <Globe size={15} className="mr-2" /> Buka Tampilan Publik
          </button>
          <button 
            onClick={() => setIsLogoutConfirmOpen(true)} 
            className="w-full flex items-center justify-center px-4 py-2 text-xs font-bold text-red-300 hover:text-white hover:bg-red-900/40 rounded-xl transition border border-red-900/50 active:scale-95"
          >
            <LogOut size={14} className="mr-2" /> Keluar (Logout)
          </button>
        </div>
      </div>

      {/* Main Body */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white h-16 shadow-sm border-b border-slate-200 flex items-center justify-between px-6 md:px-8 z-10">
          <h2 className="text-lg md:text-xl font-bold text-slate-800 capitalize flex items-center">
            {activeMenu.replace(/_/g, ' ')}
          </h2>
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setActiveMenu('pengaturan_akun')}
              className="hidden sm:flex flex-col text-right hover:opacity-80 transition cursor-pointer group"
              title="Buka Pengaturan Akun"
            >
              <span className="text-xs font-bold text-slate-800 group-hover:text-blue-700 transition">
                {adminUser?.name || 'Administrator'}
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                {adminUser?.role || 'Super Admin'} • @{adminUser?.username || 'admin'}
              </span>
            </button>
            <button 
              onClick={() => setActiveMenu('pengaturan_akun')}
              className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold shadow-xs transition cursor-pointer ${
                activeMenu === 'pengaturan_akun' ? 'bg-yellow-400 text-slate-900 ring-2 ring-yellow-400/50' : 'bg-[#1e2a78] text-white hover:bg-blue-900'
              }`}
              title="Buka Pengaturan Akun"
            >
              <User size={18} />
            </button>
            <button 
              onClick={() => setIsLogoutConfirmOpen(true)}
              className="bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 px-3 py-1.5 rounded-xl text-xs font-bold flex items-center transition shadow-xs active:scale-95 ml-1"
              title="Keluar dari Panel Admin"
            >
              <LogOut size={14} className="mr-1.5" /> Logout
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-50/60">
          {activeMenu === 'dashboard' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[ 
                  { label: 'Pendaftar SPMB', value: spmbData.length, color: 'bg-blue-600', icon: <Users size={24}/> }, 
                  { label: 'Total Pendidik', value: teachers.length, color: 'bg-emerald-600', icon: <GraduationCap size={24}/> }, 
                  { label: 'Total Artikel', value: articles.length, color: 'bg-purple-600', icon: <Layers size={24}/> }, 
                  { label: 'Media Galeri', value: galleries.length, color: 'bg-amber-600', icon: <ImageIcon size={24}/> } 
                ].map((stat, i) => (
                  <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex items-center hover:shadow-md transition group">
                    <div className={`w-14 h-14 rounded-2xl ${stat.color} flex items-center justify-center text-white mr-5 shadow-sm transform group-hover:scale-105 transition`}>
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400 uppercase font-bold tracking-wider mb-0.5">{stat.label}</p>
                      <p className="text-3xl font-black text-slate-800">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Summary Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-center mb-4 pb-2 border-b">
                    <h3 className="font-bold text-slate-800">Pendaftar SPMB Terbaru</h3>
                    <button onClick={() => setActiveMenu('spmb')} className="text-xs text-blue-600 font-bold hover:underline">Kelola Data SPMB</button>
                  </div>
                  {spmbData.length === 0 ? (
                    <p className="text-sm text-gray-400 py-4">Belum ada pendaftar baru.</p>
                  ) : (
                    <div className="space-y-3">
                      {spmbData.slice(0, 4).map(item => (
                        <div key={item.id} className="flex justify-between items-center p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                          <div>
                            <p className="font-bold text-slate-800">{item.name}</p>
                            <p className="text-slate-400">{item.jenjang} • {item.phone || '-'}</p>
                          </div>
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                            {item.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-center mb-4 pb-2 border-b">
                    <h3 className="font-bold text-slate-800">Status & Ringkasan Biaya SPMB</h3>
                    <button onClick={() => setActiveMenu('pengaturan_spmb')} className="text-xs text-blue-600 font-bold hover:underline">Ubah Pengaturan</button>
                  </div>
                  <div className="space-y-3 text-xs text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-700">Status Formulir:</span>
                      <span className={`px-2.5 py-0.5 rounded-full font-bold ${spmbSettings.isOpened ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
                        {spmbSettings.isOpened ? 'DIBUKA' : 'DITUTUP'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold text-slate-700">Estimasi Masuk SMP:</span>
                      <span className="font-bold text-[#1e2a78]">{spmbSettings.totalBiayaSmp || 'Rp 3.850.000'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold text-slate-700">Estimasi Masuk SMK:</span>
                      <span className="font-bold text-amber-900">{spmbSettings.totalBiayaSmk || 'Rp 4.450.000'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold text-slate-700">Kontak Panitia:</span>
                      <span>{spmbSettings.kontakPanitia}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pintasan Aksi Pengelolaan Admin & Database */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-3 border-b border-slate-100">
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base flex items-center">
                      <Users size={18} className="mr-2 text-[#1e2a78]" /> Manajemen Administrator & Akses Cepat
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Kelola hak akses pengelola website, tambah akun admin baru, dan kelola database MySQL sekolah.
                    </p>
                  </div>
                  <button 
                    onClick={handleOpenAddAdmin}
                    className="bg-[#1e2a78] hover:bg-blue-900 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center transition shadow-sm active:scale-95 shrink-0"
                  >
                    <UserPlus size={15} className="mr-1.5 text-yellow-400" /> + Inputan Tambah Akun Admin
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div 
                    onClick={handleOpenAddAdmin}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-300 hover:shadow-sm transition cursor-pointer group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold mb-2 group-hover:scale-105 transition">
                      <UserPlus size={18} />
                    </div>
                    <h4 className="font-bold text-slate-900 text-xs mb-1">Tambah Akun Admin</h4>
                    <p className="text-[11px] text-slate-500 leading-snug">Buat kredensial admin atau operator baru untuk mengelola CMS.</p>
                  </div>

                  <div 
                    onClick={() => { setActiveMenu('pengaturan_akun'); setAccountSubTab('admin_list'); setIsAddAdminOpen(false); }}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-300 hover:shadow-sm transition cursor-pointer group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold mb-2 group-hover:scale-105 transition">
                      <Users size={18} />
                    </div>
                    <h4 className="font-bold text-slate-900 text-xs mb-1">Daftar Akun Admin ({adminAccounts.length})</h4>
                    <p className="text-[11px] text-slate-500 leading-snug">Lihat, edit data, ubah password atau nonaktifkan akun.</p>
                  </div>

                  <div 
                    onClick={() => { setActiveMenu('pengaturan_akun'); setAccountSubTab('profile'); }}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-300 hover:shadow-sm transition cursor-pointer group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center font-bold mb-2 group-hover:scale-105 transition">
                      <EyeOff size={18} />
                    </div>
                    <h4 className="font-bold text-slate-900 text-xs mb-1">Visibilitas Login Admin</h4>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      Status: {webSettings.hideAdminLogin ? 'Tersembunyi (Privat)' : 'Ditampilkan (Publik)'}.
                    </p>
                  </div>

                  <div 
                    onClick={() => setActiveMenu('database_mysql')}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-300 hover:shadow-sm transition cursor-pointer group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold mb-2 group-hover:scale-105 transition">
                      <Database size={18} />
                    </div>
                    <h4 className="font-bold text-slate-900 text-xs mb-1">Database MySQL ({sqlCharset})</h4>
                    <p className="text-[11px] text-slate-500 leading-snug">Siap import ke phpMyAdmin hosting cPanel tanpa error.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Pengaturan Header Halaman Guru (BARU) */}
          {activeMenu === 'pengaturan_header_guru' && (
            <form onSubmit={handleSaveTeacherHeader} className="bg-white rounded-2xl shadow-sm border border-slate-200 max-w-4xl overflow-hidden">
              <div className="p-6 border-b border-slate-200 bg-white">
                <h3 className="font-extrabold text-slate-800 text-lg flex items-center">
                  <Sparkles size={22} className="mr-2 text-yellow-500" /> Pengaturan Header Direktori Guru
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Kustomisasi judul, deskripsi sambutan, dan gambar banner latar belakang direktori pendidik agar lebih menarik.
                </p>
              </div>

              <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50/40">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Tagline Kicker (Label Atas) *
                  </label>
                  <input 
                    type="text" 
                    required
                    value={teacherHeaderForm.tagline} 
                    onChange={e => setTeacherHeaderForm({...teacherHeaderForm, tagline: e.target.value})} 
                    className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white" 
                    placeholder="Contoh: DIREKTORI PENDIDIK & TENAGA KEPENDIDIKAN"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Teks Lencana (Badge Unit) *
                  </label>
                  <input 
                    type="text" 
                    required
                    value={teacherHeaderForm.badgeText} 
                    onChange={e => setTeacherHeaderForm({...teacherHeaderForm, badgeText: e.target.value})} 
                    className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white font-semibold text-blue-700" 
                    placeholder="Contoh: SMP & SMK Rasman Mulya"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Judul Utama Header Guru *
                  </label>
                  <input 
                    type="text" 
                    required
                    value={teacherHeaderForm.judul} 
                    onChange={e => setTeacherHeaderForm({...teacherHeaderForm, judul: e.target.value})} 
                    className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white font-bold" 
                    placeholder="Contoh: Dewan Guru & Tenaga Pendidik Berdedikasi"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Subjudul / Deskripsi Sambutan *
                  </label>
                  <textarea 
                    rows={3} 
                    value={teacherHeaderForm.subjudul} 
                    onChange={e => setTeacherHeaderForm({...teacherHeaderForm, subjudul: e.target.value})} 
                    className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white resize-none" 
                    placeholder="Tuliskan sambutan dan filosofi para guru..."
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <ImageUpload 
                    label="Upload Gambar Background Banner Header Guru" 
                    value={teacherHeaderForm.bannerUrl} 
                    onChange={val => setTeacherHeaderForm({...teacherHeaderForm, bannerUrl: val})} 
                    hint="Pilih gambar berkualitas tinggi bertema pendidikan, guru, atau ruang kelas."
                  />
                </div>
              </div>

              <div className="p-5 bg-slate-50 border-t border-slate-200 flex justify-end">
                <button 
                  id="saveTeacherHeaderBtn" 
                  type="submit" 
                  className="bg-[#1e2a78] text-white px-8 py-2.5 rounded-xl font-bold hover:bg-blue-900 transition shadow active:scale-95 text-sm"
                >
                  Simpan Header Guru
                </button>
              </div>
            </form>
          )}

          {/* Pengaturan Halaman SPMB (Termasuk Inputan Rincian Biaya Masuk) */}
          {activeMenu === 'pengaturan_spmb' && (
            <form onSubmit={handleSaveSpmbSettings} className="bg-white rounded-2xl shadow-sm border border-slate-200 max-w-4xl overflow-hidden">
              <div className="p-6 border-b border-slate-200 bg-white flex justify-between items-center">
                <div>
                  <h3 className="font-extrabold text-slate-800 text-lg flex items-center">
                    <GraduationCap size={22} className="mr-2 text-[#1e2a78]"/> Pengaturan Halaman SPMB & Biaya Masuk
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Atur teks pengantar, status pendaftaran (buka/tutup), rincian biaya masuk, persyaratan berkas, dan narahubung.
                  </p>
                </div>
                {/* Switch Buka/Tutup */}
                <div className="flex items-center space-x-3 bg-slate-50 p-2.5 px-4 rounded-xl border border-slate-200">
                  <span className="text-xs font-bold text-slate-700">Status SPMB:</span>
                  <button 
                    type="button" 
                    onClick={() => setSpmbSettingsForm({...spmbSettingsForm, isOpened: !spmbSettingsForm.isOpened})}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${spmbSettingsForm.isOpened ? 'bg-emerald-600' : 'bg-slate-300'}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${spmbSettingsForm.isOpened ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                  <span className={`text-xs font-bold ${spmbSettingsForm.isOpened ? 'text-emerald-700' : 'text-slate-500'}`}>
                    {spmbSettingsForm.isOpened ? 'Buka' : 'Tutup'}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-8 bg-slate-50/40">
                {/* Informasi Pokok SPMB */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                      Judul Utama Halaman SPMB *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={spmbSettingsForm.judul} 
                      onChange={e => setSpmbSettingsForm({...spmbSettingsForm, judul: e.target.value})} 
                      className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white font-bold" 
                      placeholder="Contoh: Penerimaan Murid Baru (SPMB) Online 2026/2027"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                      Subjudul / Deskripsi Pembuka *
                    </label>
                    <textarea 
                      rows={2} 
                      value={spmbSettingsForm.subjudul} 
                      onChange={e => setSpmbSettingsForm({...spmbSettingsForm, subjudul: e.target.value})} 
                      className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white resize-none" 
                      placeholder="Keterangan singkat sambutan pendaftaran..."
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                      Nama Gelombang & Periode Tanggal *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={spmbSettingsForm.gelombang} 
                      onChange={e => setSpmbSettingsForm({...spmbSettingsForm, gelombang: e.target.value})} 
                      className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white" 
                      placeholder="Contoh: Gelombang I: 01 Januari s/d 30 Juni 2026"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                      Biaya Formulir Pendaftaran *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={spmbSettingsForm.biayaPendaftaran} 
                      onChange={e => setSpmbSettingsForm({...spmbSettingsForm, biayaPendaftaran: e.target.value})} 
                      className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white font-semibold text-emerald-700" 
                      placeholder="Contoh: Gratis Biaya Pendaftaran (Rp 0,-)"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                      Jalur Pendaftaran
                    </label>
                    <input 
                      type="text" 
                      value={spmbSettingsForm.jalurPendaftaran} 
                      onChange={e => setSpmbSettingsForm({...spmbSettingsForm, jalurPendaftaran: e.target.value})} 
                      className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white" 
                      placeholder="Contoh: Reguler, Prestasi Akademik, Tahfidz"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                      Nomor WhatsApp Panitia SPMB *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={spmbSettingsForm.kontakPanitia} 
                      onChange={e => setSpmbSettingsForm({...spmbSettingsForm, kontakPanitia: e.target.value})} 
                      className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white" 
                      placeholder="Contoh: 0898-0440-088"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <ImageUpload 
                      label="Banner Gambar Header SPMB" 
                      value={spmbSettingsForm.bannerUrl} 
                      onChange={val => setSpmbSettingsForm({...spmbSettingsForm, bannerUrl: val})} 
                      hint="Unggah foto suasana kampus, siswa, atau desain brosur SPMB."
                    />
                  </div>
                </div>

                {/* BAGIAN BARU: Rincian Biaya Masuk Awal (Yang Muncul di Halaman SPMB) */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                    <div>
                      <h4 className="text-base font-extrabold text-slate-800 flex items-center">
                        <CreditCard size={18} className="mr-2 text-emerald-600" /> Rincian Biaya Masuk (Tampil di Halaman SPMB)
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Kelola estimasi total dan tabel itemized komponen biaya masuk untuk jenjang SMP dan SMK.
                      </p>
                    </div>
                    <button 
                      type="button" 
                      onClick={addCostItem} 
                      className="bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center hover:bg-emerald-700 shadow-sm"
                    >
                      <Plus size={14} className="mr-1" /> Tambah Baris Biaya
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide">Judul Bagian Biaya</label>
                      <input 
                        type="text" 
                        value={spmbSettingsForm.judulBiaya || ''} 
                        onChange={e => setSpmbSettingsForm({...spmbSettingsForm, judulBiaya: e.target.value})} 
                        className="w-full px-3 py-2 border rounded-xl text-xs bg-slate-50 focus:bg-white" 
                        placeholder="Rincian Biaya Masuk & Investasi Pendidikan"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide">Subjudul / Keterangan</label>
                      <input 
                        type="text" 
                        value={spmbSettingsForm.subjudulBiaya || ''} 
                        onChange={e => setSpmbSettingsForm({...spmbSettingsForm, subjudulBiaya: e.target.value})} 
                        className="w-full px-3 py-2 border rounded-xl text-xs bg-slate-50 focus:bg-white" 
                        placeholder="Transparansi pembiayaan pendidikan awal masuk..."
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide">Estimasi Total Biaya SMP</label>
                      <input 
                        type="text" 
                        value={spmbSettingsForm.totalBiayaSmp || ''} 
                        onChange={e => setSpmbSettingsForm({...spmbSettingsForm, totalBiayaSmp: e.target.value})} 
                        className="w-full px-3 py-2 border rounded-xl text-xs font-bold text-[#1e2a78] bg-slate-50 focus:bg-white" 
                        placeholder="Contoh: Rp 3.850.000"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide">Estimasi Total Biaya SMK</label>
                      <input 
                        type="text" 
                        value={spmbSettingsForm.totalBiayaSmk || ''} 
                        onChange={e => setSpmbSettingsForm({...spmbSettingsForm, totalBiayaSmk: e.target.value})} 
                        className="w-full px-3 py-2 border rounded-xl text-xs font-bold text-amber-900 bg-slate-50 focus:bg-white" 
                        placeholder="Contoh: Rp 4.450.000"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide">Kebijakan Cicilan & Bantuan Keuangan</label>
                      <textarea 
                        rows={2} 
                        value={spmbSettingsForm.kebijakanCicilan || ''} 
                        onChange={e => setSpmbSettingsForm({...spmbSettingsForm, kebijakanCicilan: e.target.value})} 
                        className="w-full px-3 py-2 border rounded-xl text-xs bg-slate-50 focus:bg-white resize-none" 
                        placeholder="Tuliskan ketentuan cicilan angsuran 3x atau diskon beasiswa..."
                      ></textarea>
                    </div>

                    <div className="md:col-span-2 bg-slate-50 p-4 border border-slate-200 rounded-2xl shadow-sm">
                      <div className="flex items-center space-x-2 mb-2">
                        <ImageIcon size={16} className="text-emerald-600" />
                        <span className="font-bold text-xs text-slate-800 uppercase tracking-wide">Upload Foto / Brosur Resmi Rincian Biaya SPMB</span>
                      </div>
                      <ImageUpload 
                        label="Foto / Brosur Rincian Biaya & Investasi Pendidikan" 
                        value={spmbSettingsForm.fotoRincianBiayaUrl || ''} 
                        onChange={val => setSpmbSettingsForm({...spmbSettingsForm, fotoRincianBiayaUrl: val})} 
                        hint="Upload foto atau brosur tabel rincian biaya resmi (JPG/PNG/WebP). Gambar ini akan muncul pada tab foto di dropdown rincian biaya halaman SPMB dan dapat diperbesar oleh calon siswa/orang tua."
                      />
                    </div>
                  </div>

                  {/* Tabel Interaktif Item Biaya */}
                  <div className="overflow-x-auto border border-slate-200 rounded-xl">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-100 text-slate-700 border-b">
                          <th className="p-3 font-bold">Komponen Biaya</th>
                          <th className="p-3 font-bold w-36">Biaya SMP</th>
                          <th className="p-3 font-bold w-36">Biaya SMK</th>
                          <th className="p-3 font-bold">Keterangan / Fasilitas</th>
                          <th className="p-3 text-right font-bold w-14">Aksi</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {spmbSettingsForm.biayaItems && spmbSettingsForm.biayaItems.map((item) => (
                          <tr key={item.id} className="hover:bg-slate-50">
                            <td className="p-2">
                              <input 
                                type="text" 
                                value={item.komponen} 
                                onChange={e => updateCostItem(item.id, 'komponen', e.target.value)} 
                                className="w-full px-2 py-1.5 border rounded-lg text-xs" 
                                placeholder="Komponen biaya"
                              />
                            </td>
                            <td className="p-2">
                              <input 
                                type="text" 
                                value={item.biayaSmp} 
                                onChange={e => updateCostItem(item.id, 'biayaSmp', e.target.value)} 
                                className="w-full px-2 py-1.5 border rounded-lg text-xs font-semibold text-[#1e2a78]" 
                                placeholder="Rp 0"
                              />
                            </td>
                            <td className="p-2">
                              <input 
                                type="text" 
                                value={item.biayaSmk} 
                                onChange={e => updateCostItem(item.id, 'biayaSmk', e.target.value)} 
                                className="w-full px-2 py-1.5 border rounded-lg text-xs font-semibold text-amber-900" 
                                placeholder="Rp 0"
                              />
                            </td>
                            <td className="p-2">
                              <input 
                                type="text" 
                                value={item.keterangan} 
                                onChange={e => updateCostItem(item.id, 'keterangan', e.target.value)} 
                                className="w-full px-2 py-1.5 border rounded-lg text-xs text-slate-500" 
                                placeholder="Keterangan..."
                              />
                            </td>
                            <td className="p-2 text-right">
                              <button 
                                type="button" 
                                onClick={() => removeCostItem(item.id)} 
                                className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition" 
                                title="Hapus Baris"
                              >
                                <Trash2 size={14} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Persyaratan & Alur */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                      Persyaratan Dokumen / Berkas
                    </label>
                    <textarea 
                      rows={5} 
                      value={spmbSettingsForm.persyaratan} 
                      onChange={e => setSpmbSettingsForm({...spmbSettingsForm, persyaratan: e.target.value})} 
                      className="w-full px-4 py-2.5 border rounded-xl text-xs bg-slate-50 focus:bg-white leading-relaxed" 
                      placeholder="Tuliskan syarat pendaftaran per baris..."
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                      Alur & Tahapan Seleksi Masuk
                    </label>
                    <textarea 
                      rows={5} 
                      value={spmbSettingsForm.alurPendaftaran} 
                      onChange={e => setSpmbSettingsForm({...spmbSettingsForm, alurPendaftaran: e.target.value})} 
                      className="w-full px-4 py-2.5 border rounded-xl text-xs bg-slate-50 focus:bg-white leading-relaxed" 
                      placeholder="Langkah 1: Mengisi formulir online, dst..."
                    ></textarea>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                      Catatan Tambahan & Info Beasiswa
                    </label>
                    <textarea 
                      rows={2} 
                      value={spmbSettingsForm.catatanTambahan} 
                      onChange={e => setSpmbSettingsForm({...spmbSettingsForm, catatanTambahan: e.target.value})} 
                      className="w-full px-4 py-2.5 border rounded-xl text-xs bg-slate-50 focus:bg-white resize-none" 
                      placeholder="Tuliskan catatan beasiswa atau penegasan lainnya..."
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-slate-50 border-t border-slate-200 flex justify-end">
                <button 
                  id="saveSpmbSettingsBtn" 
                  type="submit" 
                  className="bg-[#1e2a78] text-white px-8 py-2.5 rounded-xl font-bold hover:bg-blue-900 transition shadow active:scale-95 text-sm"
                >
                  Simpan Pengaturan SPMB
                </button>
              </div>
            </form>
          )}

          {activeMenu === 'pengaturan_beranda' && (
             <div className="space-y-6">
                {/* Profil & Sambutan */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                   <div className="p-5 border-b border-slate-200 bg-white">
                     <h3 className="font-bold text-slate-800 text-lg">Profil & Sambutan Kepala Sekolah</h3>
                     <p className="text-xs text-slate-400 mt-0.5">Teks dan gambar yang tampil pada segmen Sambutan di Beranda</p>
                   </div>
                   <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50/30">
                      <div className="space-y-4">
                         <div>
                           <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Nama Kepala Sekolah</label>
                           <input type="text" value={homeContent.kepsekName} onChange={e => setHomeContent({...homeContent, kepsekName: e.target.value})} className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 outline-none text-sm bg-white" />
                         </div>
                         <div>
                           <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Sambutan Singkat</label>
                           <textarea rows={4} value={homeContent.sambutan} onChange={e => setHomeContent({...homeContent, sambutan: e.target.value})} className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 outline-none text-sm resize-none bg-white"></textarea>
                         </div>
                      </div>
                      <div>
                        <ImageUpload 
                          label="Foto Profil Kepala Sekolah / Pimpinan" 
                          value={homeContent.kepsekImage} 
                          onChange={val => setHomeContent({...homeContent, kepsekImage: val})} 
                          hint="Format potrait presisi (rasio 3:4). Tampilan di beranda telah disesuaikan agar proporsional dan tidak kebesaran." 
                        />
                        {homeContent.kepsekImage && (
                          <div className="mt-3 p-3 bg-white border border-slate-200 rounded-xl flex items-center space-x-3 shadow-xs">
                            <div className="w-12 h-16 rounded-lg overflow-hidden border border-slate-300 shrink-0 bg-slate-900 shadow-sm">
                              <img src={homeContent.kepsekImage} alt="Preview" className="w-full h-full object-cover object-top" />
                            </div>
                            <div className="text-xs">
                              <span className="font-bold text-slate-700 block">Preview Presisi Beranda</span>
                              <span className="text-[11px] text-slate-400">Rasio 3:4 (Proporsional & Rapi)</span>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="md:col-span-2 space-y-4 pt-4 border-t border-slate-200">
                         <div>
                           <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Visi Yayasan</label>
                           <textarea rows={2} value={homeContent.visi} onChange={e => setHomeContent({...homeContent, visi: e.target.value})} className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 outline-none text-sm resize-none bg-white"></textarea>
                         </div>
                         <div>
                           <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Misi Yayasan</label>
                           <textarea rows={4} value={homeContent.misi} onChange={e => setHomeContent({...homeContent, misi: e.target.value})} className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 outline-none text-sm resize-none bg-white"></textarea>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Quick Links Menu Beranda */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                   <div className="p-5 border-b border-slate-200 bg-white">
                     <h3 className="font-bold text-slate-800 text-lg">Menu Pintasan Cepat (Bawah Slider)</h3>
                     <p className="text-xs text-slate-400 mt-1">Ubah label teks dan tautan untuk 8 menu kotak beranda.</p>
                   </div>
                   <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-50/30">
                      {quickLinks.map((ql, idx) => (
                         <div key={ql.id} className="bg-white p-4 border border-slate-200 rounded-2xl space-y-3 shadow-sm relative">
                            <span className="absolute -top-2.5 -left-2.5 bg-[#1e2a78] text-white font-bold w-6 h-6 flex items-center justify-center rounded-full text-xs shadow">
                              {idx + 1}
                            </span>
                            <div>
                              <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase">Label Teks</label>
                              <input type="text" value={ql.label} onChange={e => updateQuickLink(idx, 'label', e.target.value)} className="w-full px-3 py-1.5 border rounded-lg focus:ring-1 focus:ring-blue-500 outline-none text-xs font-bold text-slate-800" />
                            </div>
                            <div>
                              <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase">Path Tautan</label>
                              <input type="text" value={ql.path} onChange={e => updateQuickLink(idx, 'path', e.target.value)} className="w-full px-3 py-1.5 border rounded-lg focus:ring-1 focus:ring-blue-500 outline-none text-xs font-mono text-blue-700" />
                            </div>
                         </div>
                      ))}
                   </div>
                </div>

                {/* Data Statistik */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                   <div className="p-5 border-b border-slate-200 bg-white">
                     <h3 className="font-bold text-slate-800 text-lg">Data Statistik Singkat</h3>
                     <p className="text-xs text-slate-400 mt-0.5">Empat kotak kartu statistik pencapaian di Beranda</p>
                   </div>
                   <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-50/30">
                      {homeStats.map((stat, idx) => (
                        <div key={stat.id} className="bg-white p-4 border border-slate-200 rounded-2xl space-y-3 shadow-sm">
                           <div>
                             <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase">Nilai / Angka</label>
                             <input type="text" value={stat.value} onChange={e => { const newStats = [...homeStats]; newStats[idx].value = e.target.value; setHomeStats(newStats); }} className="w-full px-3 py-1.5 border rounded-lg focus:ring-1 focus:ring-blue-500 outline-none text-xs font-bold text-blue-700" />
                           </div>
                           <div>
                             <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase">Label Data</label>
                             <input type="text" value={stat.label} onChange={e => { const newStats = [...homeStats]; newStats[idx].label = e.target.value; setHomeStats(newStats); }} className="w-full px-3 py-1.5 border rounded-lg focus:ring-1 focus:ring-blue-500 outline-none text-xs" />
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          )}
          
          {activeMenu === 'slider' && (
             <GenericTable 
                title="Manajemen Slider Beranda" 
                type="slide" 
                columns={[{key: 'image', label: 'Gambar'}, {key: 'title', label: 'Judul Headline'}, {key: 'desc', label: 'Deskripsi Singkat'}]} 
                data={slides} 
                onAddClick={() => { setModalType('add_slide'); setCurrentEditItem({title: '', desc: '', image: ''}); setIsModalOpen(true); }}
                onEditClick={(item) => { setModalType('edit_slide'); setCurrentEditItem(item); setIsModalOpen(true); }}
                onDeleteClick={openDeleteConfirm}
             />
          )}

          {activeMenu === 'pengaturan_web' && (
             <form onSubmit={handleSaveSettings} className="bg-white rounded-2xl shadow-sm border border-slate-200 max-w-4xl overflow-hidden">
               <div className="p-6 border-b border-slate-200 bg-white">
                  <h3 className="font-extrabold text-slate-800 text-lg">Identitas & Kontak Website</h3>
                  <p className="text-xs text-slate-400 mt-1">Informasi ini akan ditampilkan di header dan footer publik.</p>
               </div>
               <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50/30">
                 <div>
                   <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Nama Web Singkat (Label)</label>
                   <input type="text" value={settingsForm.namaWeb} onChange={e => setSettingsForm({...settingsForm, namaWeb: e.target.value})} className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white" />
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Nama Lengkap Yayasan / Sekolah</label>
                   <input type="text" value={settingsForm.namaPerusahaan} onChange={e => setSettingsForm({...settingsForm, namaPerusahaan: e.target.value})} className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white" />
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">No. Telp Sekolah</label>
                   <input type="text" value={settingsForm.telp} onChange={e => setSettingsForm({...settingsForm, telp: e.target.value})} className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white" />
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">No. WhatsApp Admin</label>
                   <input type="text" value={settingsForm.whatsapp} onChange={e => setSettingsForm({...settingsForm, whatsapp: e.target.value})} className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white" />
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Email Sekolah (Header)</label>
                   <input type="email" value={settingsForm.email || ''} onChange={e => setSettingsForm({...settingsForm, email: e.target.value})} className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white" />
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Domain Website (Footer)</label>
                   <input type="text" value={settingsForm.domain || ''} onChange={e => setSettingsForm({...settingsForm, domain: e.target.value})} className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white" />
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Pengelola / Owner</label>
                   <input type="text" value={settingsForm.owner || ''} onChange={e => setSettingsForm({...settingsForm, owner: e.target.value})} className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white" />
                 </div>
                 <div className="md:col-span-2">
                   <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Alamat Lengkap Sekolah</label>
                   <textarea value={settingsForm.alamat} onChange={e => setSettingsForm({...settingsForm, alamat: e.target.value})} rows={2} className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white resize-none"></textarea>
                 </div>
                 
                 <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-slate-200 pt-6">
                    <div className="bg-white p-4 border border-slate-200 rounded-2xl shadow-sm">
                      <ImageUpload label="Logo Utama Header (Format Transparan PNG)" value={settingsForm.logoUrl} onChange={(val) => setSettingsForm({...settingsForm, logoUrl: val})} hint="Gunakan logo format transparan (PNG). Tidak ada border atau kotak." />
                    </div>
                    <div className="bg-white p-4 border border-slate-200 rounded-2xl shadow-sm">
                      <ImageUpload label="Favicon Browser" value={settingsForm.faviconUrl} onChange={(val) => setSettingsForm({...settingsForm, faviconUrl: val})} hint="Ikon kecil untuk tab browser." />
                    </div>
                 </div>
                 
                 <div className="md:col-span-2 border-t border-slate-200 pt-6">
                    <h4 className="font-bold text-slate-800 mb-4 text-base flex items-center">
                      <Globe size={18} className="mr-2 text-blue-600"/> Pengaturan Footer & Tautan Sosial Media
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Teks Deskripsi Footer</label>
                        <textarea value={settingsForm.footerText || ''} onChange={e => setSettingsForm({...settingsForm, footerText: e.target.value})} rows={3} className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white resize-none" placeholder="Tuliskan deskripsi ringkas yayasan untuk footer..."></textarea>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Link Facebook</label>
                        <input type="text" value={settingsForm.sosmed?.facebook || ''} onChange={e => setSettingsForm({...settingsForm, sosmed: {...settingsForm.sosmed, facebook: e.target.value}})} className="w-full px-4 py-2 border rounded-xl text-sm bg-white" placeholder="https://facebook.com/..." />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Link Instagram</label>
                        <input type="text" value={settingsForm.sosmed?.instagram || ''} onChange={e => setSettingsForm({...settingsForm, sosmed: {...settingsForm.sosmed, instagram: e.target.value}})} className="w-full px-4 py-2 border rounded-xl text-sm bg-white" placeholder="https://instagram.com/..." />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Link Youtube</label>
                        <input type="text" value={settingsForm.sosmed?.youtube || ''} onChange={e => setSettingsForm({...settingsForm, sosmed: {...settingsForm.sosmed, youtube: e.target.value}})} className="w-full px-4 py-2 border rounded-xl text-sm bg-white" placeholder="https://youtube.com/..." />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Link Twitter / X</label>
                        <input type="text" value={settingsForm.sosmed?.twitter || ''} onChange={e => setSettingsForm({...settingsForm, sosmed: {...settingsForm.sosmed, twitter: e.target.value}})} className="w-full px-4 py-2 border rounded-xl text-sm bg-white" placeholder="https://twitter.com/..." />
                      </div>
                    </div>
                 </div>

                 <div className="md:col-span-2 border-t border-slate-200 pt-6">
                    <h4 className="font-bold text-slate-800 mb-3 text-base flex items-center">
                      <Lock size={18} className="mr-2 text-blue-600"/> Keamanan & Tampilan Akses Login Admin
                    </h4>
                    <div className="p-4 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
                      <div>
                        <span className="font-bold text-slate-800 text-xs md:text-sm block">Sembunyikan Tombol Login Admin di Halaman Web Publik</span>
                        <p className="text-xs text-slate-500 mt-0.5">Sembunyikan tombol login administrator di header & menu mobile agar tidak terlihat oleh pengunjung biasa.</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer shrink-0">
                        <input 
                          type="checkbox" 
                          checked={settingsForm.hideAdminLogin || false} 
                          onChange={e => {
                            const val = e.target.checked;
                            setSettingsForm({ ...settingsForm, hideAdminLogin: val });
                            setAccountForm(prev => ({ ...prev, hideAdminLogin: val }));
                          }} 
                          className="sr-only peer" 
                        />
                        <div className="w-12 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1e2a78]"></div>
                      </label>
                    </div>
                 </div>
               </div>
               <div className="p-5 bg-slate-50 border-t border-slate-200 flex justify-end">
                  <button id="saveSettingsBtn" type="submit" className="bg-[#1e2a78] text-white px-8 py-2.5 rounded-xl font-bold hover:bg-blue-900 transition shadow active:scale-95 text-sm">
                    Simpan Pengaturan
                  </button>
               </div>
             </form>
          )}

          {activeMenu === 'artikel_list' && !isPostEditorOpen && (
             <GenericTable 
               title="Manajemen Publikasi Artikel & Berita" 
               type="artikel" 
               columns={[{key: 'image', label: 'Gambar'}, {key: 'title', label: 'Judul Publikasi'}, {key: 'category', label: 'Kategori'}, {key: 'date', label: 'Tanggal'}]} 
               data={articles} 
               onAddClick={() => { setModalType('add_artikel'); setCurrentEditItem(null); setIsPostEditorOpen(true); }} 
               onEditClick={(item) => { setModalType('edit_artikel'); setCurrentEditItem(item); setIsPostEditorOpen(true); }} 
               onDeleteClick={openDeleteConfirm} 
             />
          )}
          {activeMenu === 'artikel_list' && isPostEditorOpen && (
             <PostEditorFull 
               item={currentEditItem} 
               isPage={false} 
               onSave={(savedItem) => { 
                 if (modalType === 'add_artikel') setArticles([{ ...(savedItem as ArticleItem), id: Date.now() }, ...articles]); 
                 else setArticles(articles.map(a => a.id === (savedItem as ArticleItem).id ? (savedItem as ArticleItem) : a)); 
                 setIsPostEditorOpen(false); 
               }} 
               onCancel={() => setIsPostEditorOpen(false)} 
             />
          )}

          {activeMenu === 'halaman_list' && !isPostEditorOpen && (
             <GenericTable 
               title="Manajemen Halaman Statis" 
               type="halaman" 
               columns={[{key: 'title', label: 'Judul Halaman'}, {key: 'slug', label: 'URL Slug'}, {key: 'status', label: 'Status'}]} 
               data={pages} 
               onAddClick={() => { setModalType('add_halaman'); setCurrentEditItem(null); setIsPostEditorOpen(true); }} 
               onEditClick={(item) => { setModalType('edit_halaman'); setCurrentEditItem(item); setIsPostEditorOpen(true); }} 
               onDeleteClick={openDeleteConfirm} 
             />
          )}
          {activeMenu === 'halaman_list' && isPostEditorOpen && (
             <PostEditorFull 
               item={currentEditItem} 
               isPage={true} 
               onSave={(savedItem) => { 
                 if (modalType === 'add_halaman') setPages([{ ...(savedItem as PageItem), id: Date.now() }, ...pages]); 
                 else setPages(pages.map(p => p.id === (savedItem as PageItem).id ? (savedItem as PageItem) : p)); 
                 setIsPostEditorOpen(false); 
               }} 
               onCancel={() => setIsPostEditorOpen(false)} 
             />
          )}

          {activeMenu === 'pendidik' && (
             <GenericTable 
               title="Direktori Tenaga Pendidik" 
               type="pendidik" 
               columns={[{key: 'image', label: 'Foto'}, {key: 'name', label: 'Nama Lengkap'}, {key: 'subjectTag', label: 'Bidang Keahlian'}, {key: 'category', label: 'Unit'}]} 
               data={teachers} 
               onAddClick={() => { 
                 setModalType('add_pendidik'); 
                 setCurrentEditItem({name: '', subjectTag: '', role: '', subject: '', category: 'SMP Rasman Mulya', badgeColor: 'bg-blue-600', image: '', education: '', bio: '', email: '', motto: '', experience: ''}); 
                 setIsModalOpen(true); 
               }} 
               onEditClick={(item) => { setModalType('edit_pendidik'); setCurrentEditItem(item); setIsModalOpen(true); }} 
               onDeleteClick={openDeleteConfirm} 
             />
          )}

          {/* Data Pendaftar SPMB (Dengan Ekspor Excel & Tampilan Jumlah Pendaftar) */}
          {activeMenu === 'spmb' && (
             <div className="space-y-6">
                {/* Statistik Bar & Tombol Ekspor Excel */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Status Pendaftaran SPMB</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${spmbSettings.isOpened ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
                        {spmbSettings.isOpened ? 'Aktif' : 'Tutup'}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-baseline gap-3">
                      <h3 className="text-2xl font-black text-slate-900">
                        {spmbData.length} Pendaftar
                      </h3>
                      <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500">
                        <span className="bg-blue-50 text-[#1e2a78] px-2.5 py-1 rounded-lg border border-blue-100">
                          SMP: {spmbData.filter(s => s.jenjang === 'SMP').length}
                        </span>
                        <span className="bg-yellow-50 text-amber-900 px-2.5 py-1 rounded-lg border border-yellow-100">
                          SMK: {spmbData.filter(s => s.jenjang === 'SMK').length}
                        </span>
                        <span className="bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-lg border border-emerald-100">
                          Diterima: {spmbData.filter(s => s.status === 'Diterima').length}
                        </span>
                        <span className="bg-amber-50 text-amber-800 px-2.5 py-1 rounded-lg border border-amber-100">
                          Verifikasi: {spmbData.filter(s => s.status === 'Menunggu Verifikasi').length}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 shrink-0">
                    <button 
                      onClick={() => exportSpmbToExcel(false)}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold flex items-center shadow transition active:scale-95"
                      title={spmbJenjangFilter !== 'ALL' ? `Unduh data pendaftar jenjang ${spmbJenjangFilter} dalam format CSV` : "Unduh seluruh data pendaftar dalam format Excel / CSV"}
                    >
                      <FileSpreadsheet size={16} className="mr-2" /> Ekspor {spmbJenjangFilter !== 'ALL' ? `(${spmbJenjangFilter})` : ''} ke Excel (.CSV)
                    </button>
                    <button 
                      onClick={() => { 
                        setModalType('add_spmb'); 
                        setCurrentEditItem({name: '', jenjang: spmbJenjangFilter === 'SMK' ? 'SMK' : 'SMP', asalSekolah: '', phone: '', parentName: '', status: 'Menunggu Verifikasi'}); 
                        setIsModalOpen(true); 
                      }} 
                      className="bg-[#1e2a78] text-white px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold flex items-center hover:bg-blue-900 transition shadow active:scale-95"
                    >
                      <Plus size={16} className="mr-1.5" /> Tambah Pendaftar
                    </button>
                  </div>
                </div>

                {/* Tombol Filter (Tab) Jenjang SMP & SMK */}
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wide mr-1 hidden sm:inline">
                      Filter Jenjang:
                    </span>
                    <button
                      type="button"
                      onClick={() => setSpmbJenjangFilter('ALL')}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 ${
                        spmbJenjangFilter === 'ALL'
                          ? 'bg-[#1e2a78] text-white shadow'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <span>Semua Siswa</span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                        spmbJenjangFilter === 'ALL' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {spmbData.length}
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSpmbJenjangFilter('SMP')}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 ${
                        spmbJenjangFilter === 'SMP'
                          ? 'bg-blue-600 text-white shadow'
                          : 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-100'
                      }`}
                    >
                      <School size={14} className="mr-1" />
                      <span>Jenjang SMP Saja</span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                        spmbJenjangFilter === 'SMP' ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {spmbData.filter(s => s.jenjang === 'SMP').length}
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSpmbJenjangFilter('SMK')}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 ${
                        spmbJenjangFilter === 'SMK'
                          ? 'bg-amber-600 text-white shadow'
                          : 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-100'
                      }`}
                    >
                      <GraduationCap size={14} className="mr-1" />
                      <span>Jenjang SMK Saja</span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                        spmbJenjangFilter === 'SMK' ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-900'
                      }`}>
                        {spmbData.filter(s => s.jenjang === 'SMK').length}
                      </span>
                    </button>
                  </div>

                  <div className="text-xs text-slate-500 font-medium flex items-center justify-between sm:justify-end gap-2">
                    <span>
                      Menampilkan <strong className="text-slate-800 font-bold">{filteredSpmbData.length}</strong> siswa
                      {spmbJenjangFilter !== 'ALL' && (
                        <span className="ml-1 text-[#1e2a78] font-bold">({spmbJenjangFilter} saja)</span>
                      )}
                    </span>
                    {spmbJenjangFilter !== 'ALL' && (
                      <button 
                        type="button" 
                        onClick={() => setSpmbJenjangFilter('ALL')}
                        className="text-[11px] font-bold text-blue-600 hover:underline"
                      >
                        Reset Filter
                      </button>
                    )}
                  </div>
                </div>

                {/* Tabel Pendaftar SPMB */}
                <GenericTable 
                  title={`Daftar Formulir Masuk SPMB ${spmbJenjangFilter === 'ALL' ? '(Semua Jenjang)' : `(Khusus Jenjang ${spmbJenjangFilter})`}`} 
                  type="spmb" 
                  columns={[
                    {key: 'name', label: 'Nama Calon Siswa'}, 
                    {key: 'jenjang', label: 'Jenjang'}, 
                    {key: 'asalSekolah', label: 'Asal Sekolah'}, 
                    {key: 'phone', label: 'No. WhatsApp'}, 
                    {key: 'registeredAt', label: 'Tgl Daftar'}, 
                    {key: 'status', label: 'Status Verifikasi'}
                  ]} 
                  data={filteredSpmbData} 
                  onAddClick={() => { 
                    setModalType('add_spmb'); 
                    setCurrentEditItem({name: '', jenjang: spmbJenjangFilter === 'SMK' ? 'SMK' : 'SMP', asalSekolah: '', phone: '', parentName: '', status: 'Menunggu Verifikasi'}); 
                    setIsModalOpen(true); 
                  }} 
                  onEditClick={(item) => { setModalType('edit_spmb'); setCurrentEditItem(item); setIsModalOpen(true); }} 
                  onDeleteClick={openDeleteConfirm} 
                />
             </div>
          )}

          {activeMenu === 'menu_manager' && (
             <div className="bg-white rounded-2xl shadow-sm border border-slate-200 max-w-4xl overflow-hidden">
                <div className="p-5 border-b border-slate-200 bg-white">
                  <h3 className="font-extrabold text-slate-800 text-lg">Konfigurasi Navigasi Publik</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Atur urutan menu, ubah label, sembunyikan atau buat submenu dropdown.</p>
                </div>
                <div className="p-5 border-b border-slate-200 bg-blue-50/40">
                   <form onSubmit={handleAddMenu} className="flex flex-col md:flex-row gap-3 items-end">
                      <div className="flex-1 w-full">
                        <label className="block text-[10px] font-bold text-slate-700 mb-1 uppercase tracking-wide">Label Menu</label>
                        <input type="text" value={newMenu.label} onChange={e => setNewMenu({...newMenu, label: e.target.value})} placeholder="Cth: Ekstrakurikuler" className="w-full px-3 py-2 text-xs md:text-sm border rounded-xl outline-none bg-white" required />
                      </div>
                      <div className="flex-1 w-full">
                        <label className="block text-[10px] font-bold text-slate-700 mb-1 uppercase tracking-wide">Path Tautan</label>
                        <input type="text" value={newMenu.path} onChange={e => setNewMenu({...newMenu, path: e.target.value})} placeholder="Cth: ekskul" className="w-full px-3 py-2 text-xs md:text-sm border rounded-xl outline-none bg-white font-mono" required />
                      </div>
                      <div className="flex-1 w-full">
                        <label className="block text-[10px] font-bold text-slate-700 mb-1 uppercase tracking-wide">Induk Menu (Submenu)</label>
                        <select value={newMenu.parentId} onChange={e => setNewMenu({...newMenu, parentId: e.target.value})} className="w-full px-3 py-2 text-xs md:text-sm border rounded-xl outline-none bg-white">
                          <option value="">-- Menu Utama --</option>
                          {menus.map(m => <option key={m.id} value={m.id}>{m.label}</option>)}
                        </select>
                      </div>
                      <button type="submit" className="bg-[#1e2a78] text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-blue-900 h-[38px] active:scale-95 shrink-0">
                        + Tambah Menu
                      </button>
                   </form>
                </div>
                <div className="p-6 bg-slate-50/30">
                   <div className="space-y-4">
                     {menus.map((menu, index) => (
                       <div key={menu.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                         <div className="flex items-center p-4 hover:bg-slate-50 transition">
                            <GripVertical className="text-slate-400 cursor-grab mr-3 shrink-0" size={18} />
                            <div className="flex-1 flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                               <input type="text" value={menu.label} onChange={(e) => { const newM = [...menus]; newM[index].label = e.target.value; setMenus(newM); }} className="border rounded-lg px-3 py-1.5 text-xs md:text-sm font-bold w-44 bg-slate-50 focus:bg-white outline-none" />
                               <div className="flex items-center">
                                 <span className="text-xs text-slate-400 font-mono bg-slate-100 px-2.5 py-1.5 rounded-l-lg border-y border-l">/</span>
                                 <input type="text" value={menu.path} onChange={(e) => { const newM = [...menus]; newM[index].path = e.target.value; setMenus(newM); }} className="border rounded-r-lg px-3 py-1.5 text-xs md:text-sm font-mono w-28 bg-slate-50 focus:bg-white outline-none text-blue-700" />
                               </div>
                            </div>
                            <div className="flex space-x-1.5 ml-2">
                               <button onClick={() => { if (index > 0) { const newM = [...menus]; [newM[index - 1], newM[index]] = [newM[index], newM[index - 1]]; setMenus(newM); } }} disabled={index === 0} className="p-2 rounded-lg border bg-white text-slate-600 disabled:opacity-30"><ArrowUp size={14} /></button>
                               <button onClick={() => { if (index < menus.length - 1) { const newM = [...menus]; [newM[index + 1], newM[index]] = [newM[index], newM[index + 1]]; setMenus(newM); } }} disabled={index === menus.length - 1} className="p-2 rounded-lg border bg-white text-slate-600 disabled:opacity-30"><ArrowDown size={14} /></button>
                               <button onClick={() => { const newM = [...menus]; newM[index].visible = !newM[index].visible; setMenus(newM); }} className={`p-2 rounded-lg border bg-white ${menu.visible ? 'text-emerald-600' : 'text-slate-400'}`}>{menu.visible ? <Eye size={14} /> : <EyeOff size={14} />}</button>
                               <button onClick={() => openDeleteConfirm(menu.id, 'menu')} className="p-2 rounded-lg border bg-white text-red-600"><Trash2 size={14}/></button>
                            </div>
                         </div>
                         {menu.submenus && menu.submenus.length > 0 && (
                            <div className="bg-slate-50 p-4 border-t border-slate-100 pl-12 space-y-2.5">
                               <div className="text-[10px] font-bold text-slate-400 uppercase">Daftar Submenu Dropdown:</div>
                               {menu.submenus.map((sub, subIndex) => (
                                  <div key={sub.id} className="flex items-center">
                                     <div className="w-3 h-5 border-l-2 border-b-2 border-slate-300 mr-3 -mt-3 rounded-bl"></div>
                                     <div className="flex-1 flex items-center space-x-3">
                                        <input type="text" value={sub.label} onChange={(e) => { const newM = [...menus]; if (newM[index].submenus) newM[index].submenus[subIndex].label = e.target.value; setMenus(newM); }} className="border rounded-lg px-3 py-1 text-xs font-semibold w-40 bg-white" />
                                        <input type="text" value={sub.path} onChange={(e) => { const newM = [...menus]; if (newM[index].submenus) newM[index].submenus[subIndex].path = e.target.value; setMenus(newM); }} className="border rounded-lg px-3 py-1 text-xs font-mono w-28 bg-white text-blue-700" />
                                     </div>
                                     <button onClick={() => openDeleteConfirm(sub.id, 'menu')} className="p-1 rounded text-red-500 hover:bg-red-50 ml-2"><Trash2 size={14}/></button>
                                  </div>
                               ))}
                            </div>
                         )}
                       </div>
                     ))}
                   </div>
                </div>
             </div>
          )}

          {['galeri_foto', 'galeri_video'].includes(activeMenu) && (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
               <div className="p-5 border-b border-slate-200 flex justify-between items-center bg-white">
                  <div>
                    <h3 className="font-extrabold text-slate-800 text-lg capitalize">{activeMenu.replace('_', ' ')}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Kelola dokumentasi visual kegiatan sekolah</p>
                  </div>
                  <button 
                    onClick={() => { 
                      setModalType('add_galeri'); 
                      setCurrentEditItem({ title: '', image: '', type: activeMenu.includes('foto') ? 'foto' : 'video', date: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }) }); 
                      setIsModalOpen(true); 
                    }} 
                    className="bg-[#1e2a78] text-white px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold flex items-center shadow active:scale-95"
                  >
                    <Plus size={16} className="mr-1.5"/> Tambah Media
                  </button>
               </div>
               <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 bg-slate-50/30">
                  {galleries.filter(g => g.type === (activeMenu.includes('foto') ? 'foto' : 'video')).map(item => (
                     <div key={item.id} className="border border-slate-200 rounded-2xl overflow-hidden group bg-white shadow-sm hover:shadow-md transition">
                        <div className="h-40 bg-slate-100 relative">
                           <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                           <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                              <button onClick={() => { setModalType('edit_galeri'); setCurrentEditItem(item); setIsModalOpen(true); }} className="p-2.5 bg-blue-600 text-white rounded-xl mx-1 hover:bg-blue-500 transform hover:scale-110 transition"><Edit size={16}/></button>
                              <button onClick={() => openDeleteConfirm(item.id, 'galeri')} className="p-2.5 bg-red-600 text-white rounded-xl mx-1 hover:bg-red-500 transform hover:scale-110 transition"><Trash2 size={16}/></button>
                           </div>
                        </div>
                        <div className="p-4 border-t border-slate-100">
                           <p className="text-[10px] text-slate-400 font-mono mb-1">{item.date}</p>
                           <h4 className="text-xs font-bold text-slate-800 line-clamp-2 leading-snug">{item.title}</h4>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
          )}

          {activeMenu === 'database_mysql' && (
            <div className="space-y-6">
              {/* Header Box */}
              <div className="bg-gradient-to-r from-slate-900 via-[#131b46] to-slate-900 rounded-3xl p-6 md:p-8 text-white shadow-xl border border-blue-900/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="bg-emerald-500 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center">
                        <CheckCircle size={12} className="mr-1" /> MySQL 5.7+ / 8.0 & MariaDB
                      </span>
                      <span className="bg-blue-600/60 text-blue-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                        Charset {sqlCharset} ({sqlCharset === 'utf8mb4' ? 'utf8mb4_unicode_ci' : 'utf8_general_ci'})
                      </span>
                      <span className="bg-yellow-400 text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                        cPanel & phpMyAdmin Ready
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white flex items-center">
                      <Database size={26} className="mr-2.5 text-yellow-400" /> Database MySQL & Panduan Hosting Domain
                    </h3>
                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                      Sistem telah menyediakan skrip database MySQL lengkap (15 tabel relasional + data awal sekolah). Anda dapat mengunduh file <span className="text-yellow-300 font-mono font-bold">.sql</span> untuk di-import langsung ke phpMyAdmin di cPanel hosting dan menghubungkannya dengan domain website Anda.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2.5 shrink-0">
                    <button
                      onClick={handleDownloadZip}
                      disabled={downloadingZip}
                      className="bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black px-4 py-3 rounded-xl text-xs md:text-sm transition flex items-center shadow-lg active:scale-95 cursor-pointer disabled:opacity-50"
                      title="Unduh paket ZIP siap upload ke cPanel public_html (sudah termasuk index.html, folder assets, .htaccess, dan htaccess.txt)"
                    >
                      {downloadingZip ? (
                        <>
                          <Loader2 size={16} className="mr-2 animate-spin text-slate-900" /> Mengunduh ZIP...
                        </>
                      ) : (
                        <>
                          <Download size={16} className="mr-2 text-slate-900" /> Unduh ZIP Siap Upload
                        </>
                      )}
                    </button>
                    <button
                      onClick={handleDownloadTar}
                      disabled={downloadingTar}
                      className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-3.5 py-3 rounded-xl text-xs md:text-sm transition flex items-center shadow active:scale-95 cursor-pointer disabled:opacity-50"
                      title="Format TAR.GZ untuk cPanel Linux jika ZIP mengalami kendala ekstraksi"
                    >
                      {downloadingTar ? (
                        <>
                          <Loader2 size={15} className="mr-1.5 animate-spin" /> Mengunduh TAR.GZ...
                        </>
                      ) : (
                        <>
                          <Download size={15} className="mr-1.5" /> Unduh TAR.GZ (Alternatif)
                        </>
                      )}
                    </button>
                    <button 
                      onClick={handleDownloadSql}
                      className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-4 py-3 rounded-xl text-xs md:text-sm transition flex items-center shadow-lg shadow-emerald-950/20 active:scale-95"
                      title="Unduh file database.sql terkini"
                    >
                      <Download size={16} className="mr-2" /> Unduh database.sql
                    </button>
                    <button 
                      onClick={handleCopySql}
                      className="bg-white/10 hover:bg-white/20 text-white font-bold px-4 py-3 rounded-xl text-xs md:text-sm transition flex items-center border border-white/20 active:scale-95"
                    >
                      {copiedSql ? (
                        <>
                          <Check size={16} className="mr-2 text-emerald-400" /> Tersalin ke Clipboard!
                        </>
                      ) : (
                        <>
                          <Copy size={16} className="mr-2" /> Salin Query SQL
                        </>
                      )}
                    </button>
                    <button 
                      onClick={handleDownloadPhpConfig}
                      className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-4 py-3 rounded-xl text-xs md:text-sm transition flex items-center shadow active:scale-95"
                      title="Unduh file koneksi db.php untuk backend hosting"
                    >
                      <Server size={16} className="mr-2 text-yellow-400" /> Unduh db.php
                    </button>
                  </div>
                </div>
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1e2a78] flex items-center justify-center shrink-0">
                    <Layers size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block mb-0.5">Struktur Database</span>
                    <h4 className="text-lg font-black text-slate-900">15 Tabel MySQL</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Admin, Pendidik, SPMB, Biaya, Berita, Konten Beranda, dll.</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Lock size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block mb-0.5">Akun Admin Database</span>
                    <h4 className="text-lg font-black text-slate-900">@{adminUser?.username || 'admin'}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Tersimpan dalam tabel <span className="font-mono text-blue-700">admin_users</span>.</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Globe size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block mb-0.5">Target Deployment</span>
                    <h4 className="text-lg font-black text-slate-900">Hosting & Domain</h4>
                    <p className="text-xs text-slate-500 mt-0.5">cPanel, DirectAdmin, Hostinger, Niagahoster, VPS.</p>
                  </div>
                </div>
              </div>

              {/* Card Pilihan Charset Database MySQL */}
              <div className="bg-white p-5 md:p-6 rounded-3xl border border-blue-200/80 shadow-sm bg-gradient-to-r from-blue-50/40 via-white to-amber-50/30">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-extrabold text-slate-900 text-sm md:text-base flex items-center">
                        <Database size={16} className="text-[#1e2a78] mr-2" /> Format Charset Database MySQL (cPanel / phpMyAdmin)
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300">
                        {sqlCharset === 'utf8' ? 'Aktif: utf8 (Universal cPanel)' : 'Aktif: utf8mb4'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
                      {sqlCharset === 'utf8' 
                        ? 'Standar "utf8" dengan collation "utf8_general_ci" aktif. Solusi terbaik untuk hosting cPanel / phpMyAdmin di Indonesia yang tidak memiliki utf8mb4, mencegah error #1115 (Unknown character set) atau #1273 (Unknown collation).'
                        : 'Mode "utf8mb4" dengan collation "utf8mb4_unicode_ci" aktif. Mendukung 4-byte karakter penuh.'
                      }
                    </p>
                  </div>

                  <div className="flex items-center bg-slate-100 p-1.5 rounded-2xl border border-slate-200 shrink-0">
                    <button
                      type="button"
                      onClick={() => setSqlCharset('utf8')}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center ${
                        sqlCharset === 'utf8' 
                          ? 'bg-[#1e2a78] text-white shadow-sm' 
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <CheckCircle size={14} className={`mr-1.5 ${sqlCharset === 'utf8' ? 'text-yellow-400' : 'hidden'}`} />
                      utf8 (Universal Host)
                    </button>
                    <button
                      type="button"
                      onClick={() => setSqlCharset('utf8mb4')}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center ${
                        sqlCharset === 'utf8mb4' 
                          ? 'bg-[#1e2a78] text-white shadow-sm' 
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <CheckCircle size={14} className={`mr-1.5 ${sqlCharset === 'utf8mb4' ? 'text-yellow-400' : 'hidden'}`} />
                      utf8mb4
                    </button>
                  </div>
                </div>
              </div>

              {/* Solusi Error 1044 cPanel */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 md:p-5 rounded-2xl shadow-sm text-slate-800">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-amber-500 text-white rounded-xl shrink-0 mt-0.5">
                    <AlertTriangle size={18} />
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <h5 className="font-black text-slate-900 text-sm flex items-center">
                      Solusi Mengatasi Error 1044 (Access denied for user &apos;...&apos;@&apos;localhost&apos; to database &apos;rasmanmulya_db&apos;)
                    </h5>
                    <p className="text-slate-700 leading-relaxed">
                      <strong>Penyebab:</strong> Di hosting cPanel, akun user hosting Anda (<code className="bg-amber-100 px-1 py-0.5 rounded font-mono font-bold text-amber-900">rasg1538</code>) tidak memiliki izin membuat database dengan nama sembarang (<code className="bg-amber-100 px-1 py-0.5 rounded font-mono text-red-700">rasmanmulya_db</code>) karena di cPanel nama database wajib diawali awalan cPanel Anda (contoh: <code className="bg-amber-100 px-1 py-0.5 rounded font-mono font-bold text-blue-900">rasg1538_rasmanmulya</code>).
                    </p>
                    <div className="bg-white/90 p-3.5 rounded-xl border border-amber-200 mt-2 space-y-1.5">
                      <span className="font-bold text-slate-900 block text-xs">Solusi Cepat 3 Langkah:</span>
                      <ol className="list-decimal pl-4 space-y-1 text-slate-700">
                        <li><strong>File SQL Sudah Diperbarui</strong>: Perintah <code className="font-mono text-red-600 font-bold">CREATE DATABASE</code> dan <code className="font-mono text-red-600 font-bold">USE</code> telah kami hilangkan dari file <code className="font-mono font-bold text-blue-900">database.sql</code> sehingga tidak akan memicu penolakan hak akses lagi.</li>
                        <li><strong>Buka Database Anda di phpMyAdmin</strong>: Di cPanel phpMyAdmin, <em>klik nama database yang Anda buat di kolom sisi kiri</em> (misal: <code className="font-mono font-bold text-blue-800">rasg1538_nama_db</code>). Pastikan nama database tersebut sudah terbuka aktif sebelum klik tab <strong>Import</strong>.</li>
                        <li><strong>Periksa Hak Akses (Privileges) di cPanel</strong>: Buka menu <em>MySQL Databases</em> di cPanel &rarr; pada bagian <em>Add User to Database</em>, pastikan user <code className="font-mono font-bold">rasg1538_...</code> telah ditambahkan ke database tersebut dengan mencentang <strong>ALL PRIVILEGES</strong>.</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solusi Layar Putih (White Screen) Saat Buka Website di Hosting */}
              <div className="bg-rose-50 border-l-4 border-rose-500 p-4 md:p-5 rounded-2xl shadow-sm text-slate-800">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-rose-500 text-white rounded-xl shrink-0 mt-0.5">
                    <AlertTriangle size={18} />
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <h5 className="font-black text-slate-900 text-sm flex items-center">
                      Mengapa Website Tampil Layar Putih Kosong (Blank White Screen) di Hosting?
                    </h5>
                    <p className="text-slate-700 leading-relaxed">
                      Layar putih terjadi saat browser membuka file <code className="bg-rose-100 px-1 py-0.5 rounded font-mono font-bold text-rose-900">index.html</code>, tetapi gagal memuat file JavaScript dan CSS di dalam folder <code className="bg-rose-100 px-1 py-0.5 rounded font-mono font-bold text-rose-900">assets</code>.
                    </p>
                    <div className="bg-white/95 p-3.5 rounded-xl border border-rose-200 mt-2 space-y-2">
                      <span className="font-bold text-slate-900 block text-xs">3 Penyebab Utama &amp; Solusinya:</span>
                      <ol className="list-decimal pl-4 space-y-1.5 text-slate-700">
                        <li>
                          <strong>Salah Lokasi Upload (Paling Sering):</strong> Jangan upload folder <em>"dist"</em>-nya! 
                          Buka folder <strong>dist</strong> di laptop Anda, lalu upload <strong>isinya</strong> langsung ke dalam <code className="font-mono font-bold text-blue-900 bg-slate-100 px-1">public_html</code>. Struktur di <code className="font-mono bg-slate-100 px-1">public_html</code> harus berupa: file <code className="font-mono text-emerald-700 font-bold">index.html</code>, folder <code className="font-mono text-emerald-700 font-bold">assets/</code>, dan file <code className="font-mono text-emerald-700 font-bold">.htaccess</code>.
                        </li>
                        <li>
                          <strong>Konfigurasi Base Path Vite (Sudah Kami Perbaiki Otomatis):</strong> 
                          Konfigurasi Vite telah disetel ke path relatif (<code className="font-mono font-bold text-blue-800 bg-slate-100 px-1">base: &apos;./&apos;</code>). Pastikan Anda mendownload hasil build terbaru setelah menjalankan <code className="font-mono bg-slate-100 px-1 font-bold">npm run build</code>.
                        </li>
                        <li>
                          <strong>File .htaccess Belum Ada di Hosting:</strong> 
                          File <code className="font-mono font-bold text-blue-900">.htaccess</code> kini otomatis dibuat di dalam folder <code className="font-mono">dist</code> agar routing SPA browser berjalan tanpa error 404 saat berpindah menu.
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-Tabs: Panduan / Preview SQL / Skrip PHP */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="border-b border-slate-200 bg-slate-50/80 px-6 py-3 flex flex-wrap gap-2">
                  <button 
                    onClick={() => setActiveSqlTab('guide')}
                    className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition flex items-center ${
                      activeSqlTab === 'guide' 
                        ? 'bg-[#1e2a78] text-white shadow' 
                        : 'text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <BookOpen size={16} className="mr-2" /> Panduan Upload Hosting & Domain
                  </button>
                  <button 
                    onClick={() => setActiveSqlTab('preview')}
                    className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition flex items-center ${
                      activeSqlTab === 'preview' 
                        ? 'bg-[#1e2a78] text-white shadow' 
                        : 'text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <Database size={16} className="mr-2" /> Pratinjau Query SQL (Live Snapshot)
                  </button>
                  <button 
                    onClick={() => setActiveSqlTab('php')}
                    className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition flex items-center ${
                      activeSqlTab === 'php' 
                        ? 'bg-[#1e2a78] text-white shadow' 
                        : 'text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <Server size={16} className="mr-2" /> Skrip Koneksi PHP Hosting (db.php)
                  </button>
                </div>

                <div className="p-6 md:p-8">
                  {/* TAB 1: PANDUAN LENGKAP UPLOAD KE HOSTING & DOMAIN */}
                  {activeSqlTab === 'guide' && (
                    <div className="space-y-8">
                      <div className="border-b pb-4">
                        <h4 className="text-xl font-black text-slate-900">Langkah-Langkah Setup Hosting cPanel & Domain</h4>
                        <p className="text-xs text-slate-500 mt-1">Ikuti 5 langkah praktis berikut untuk mengonlinekan website dan database sekolah Anda.</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Step 1 */}
                        <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md transition">
                          <div className="w-8 h-8 rounded-full bg-[#1e2a78] text-white font-black text-sm flex items-center justify-center mb-3">
                            1
                          </div>
                          <h5 className="font-bold text-slate-900 text-base mb-1.5">Buat Database di cPanel Hosting</h5>
                          <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 leading-relaxed">
                            <li>Login ke cPanel hosting Anda (misal: <code className="bg-slate-200 px-1 py-0.5 rounded text-blue-900">namadomain.com/cpanel</code>).</li>
                            <li>Buka menu <strong>MySQL Database Wizard</strong> atau <strong>MySQL Databases</strong>.</li>
                            <li>Tentukan nama database baru (misal: <code className="bg-slate-200 px-1 py-0.5 rounded">u123_rasmanmulya</code>).</li>
                            <li>Buat user database baru dan buat password yang aman.</li>
                            <li>Beri centang pada hak akses <strong>ALL PRIVILEGES</strong>, lalu klik <em>Make Changes</em>.</li>
                          </ul>
                        </div>

                        {/* Step 2 */}
                        <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md transition">
                          <div className="w-8 h-8 rounded-full bg-[#1e2a78] text-white font-black text-sm flex items-center justify-center mb-3">
                            2
                          </div>
                          <h5 className="font-bold text-slate-900 text-base mb-1.5">Import Database (database.sql) ke phpMyAdmin</h5>
                          <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 leading-relaxed">
                            <li>Kembali ke Beranda cPanel, klik menu <strong>phpMyAdmin</strong>.</li>
                            <li>Di bilah sisi kiri, pilih nama database yang baru Anda buat pada langkah 1.</li>
                            <li>Klik tab menu <strong>Import</strong> di bagian atas.</li>
                            <li>Klik tombol <strong>Choose File</strong> / <strong>Pilih Berkas</strong>, pilih file <code className="bg-slate-200 px-1 py-0.5 rounded text-blue-900">database.sql</code> yang Anda unduh di atas.</li>
                            <li>Pastikan character set terpilih <code className="bg-slate-200 px-1 py-0.5 rounded text-blue-900 font-bold">{sqlCharset}</code> (atau <code className="bg-slate-200 px-1 py-0.5 rounded text-blue-900">utf8_general_ci</code>), lalu gulir ke bawah dan klik tombol <strong>Go / Kirim</strong>.</li>
                            <li>Semua 15 tabel dan data awal sekolah akan langsung terbuat secara otomatis!</li>
                          </ul>
                        </div>

                        {/* Step 3 */}
                        <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md transition">
                          <div className="w-8 h-8 rounded-full bg-[#1e2a78] text-white font-black text-sm flex items-center justify-center mb-3">
                            3
                          </div>
                          <h5 className="font-bold text-slate-900 text-base mb-1.5">Upload File Website ke public_html</h5>
                          <div className="text-xs text-slate-600 space-y-2.5 leading-relaxed">
                            {/* Metode 1 */}
                            <div className="bg-emerald-50 p-3.5 rounded-xl border border-emerald-200 text-emerald-950 space-y-2">
                              <span className="font-bold text-emerald-900 flex items-center text-xs">
                                <CheckCircle size={15} className="mr-1.5 text-emerald-600 shrink-0" /> Rekomendasi Utama (100% Berhasil): Ekstrak di Laptop Dulu
                              </span>
                              <ol className="list-decimal list-inside space-y-1.5 text-[11px] text-emerald-900 leading-relaxed">
                                <li>
                                  Klik tombol <strong className="text-blue-900">"Unduh ZIP Siap Upload"</strong> di bagian atas. (Paket ZIP telah diperbarui dengan standar direktori Windows/FAT32 & Linux sehingga kompatibel 100% di semua laptop).
                                </li>
                                <li>
                                  Di laptop Anda, buka folder <em>Downloads / Unduhan</em>, klik kanan file <code className="bg-white px-1.5 py-0.5 rounded font-mono font-bold text-blue-900">website_siap_upload_cpanel.zip</code> &rarr; pilih <strong>Extract All... (Ekstrak Semua)</strong>, atau jika memakai WinRAR / 7-Zip pilih <strong>Extract to website_siap_upload_cpanel</strong>.
                                </li>
                                <li>
                                  Buka folder hasil ekstrak. Anda akan melihat:
                                  <ul className="list-disc list-inside ml-3 mt-1 space-y-0.5 font-mono text-[10.5px] text-emerald-800">
                                    <li><code>index.html</code> (Halaman utama)</li>
                                    <li><code>assets/</code> (Folder berisi file Javascript & CSS)</li>
                                    <li><code>.htaccess</code> & <code>htaccess.txt</code> (Konfigurasi routing server)</li>
                                  </ul>
                                </li>
                                <li>
                                  Di cPanel hosting, buka <strong>File Manager &rarr; public_html</strong>: klik menu <strong>Upload</strong> lalu upload file <code>index.html</code>, folder <code>assets/</code>, dan file <code>.htaccess</code>. Anda <strong>tidak perlu menggunakan tombol Extract di cPanel</strong> sama sekali!
                                </li>
                              </ol>
                            </div>

                            {/* Solusi Eror cPanel Extract & Alternatif */}
                            <div className="bg-amber-50 p-3.5 rounded-xl border border-amber-300 text-amber-950 space-y-2">
                              <span className="font-bold text-amber-900 flex items-center text-xs">
                                <AlertTriangle size={15} className="mr-1.5 text-amber-600 shrink-0" /> Penyebab & Solusi Jika Muncul Eror:
                              </span>
                              <ul className="list-disc list-inside space-y-1.5 text-[11px] text-amber-900 leading-relaxed">
                                <li>
                                  <strong>Eror Unduh TAR.GZ (Sudah Diperbaiki):</strong> Sebelumnya browser mendeteksi file gzip secara otomatis dan merubah strukturnya saat diunduh. Kini konfigurasi server telah diperbaiki sehingga tombol <button onClick={handleDownloadTar} className="underline font-bold text-blue-900 hover:text-blue-700">Unduh TAR.GZ</button> menghasilkan file arsip murni yang valid untuk cPanel maupun 7-Zip/WinRAR di laptop.
                                </li>
                                <li>
                                  <strong>Eror Ekstrak di cPanel (Extract Failed):</strong> File Manager cPanel menolak menimpa file bertitik (<code>.htaccess</code>) yang sedang aktif atau kuota hosting (Disk Usage) penuh. Solusi terbaik adalah mengekstraknya di laptop seperti langkah hijau di atas.
                                </li>
                                <li>
                                  <strong>File .htaccess Tersembunyi di Windows:</strong> Windows Explorer terkadang menyembunyikan file yang diawali titik. Kami telah menyertakan salinan bernama <code className="bg-white px-1 rounded font-mono font-bold">htaccess.txt</code> di dalam arsip yang bisa di-upload lalu di-rename menjadi <code>.htaccess</code> di cPanel.
                                </li>
                              </ul>
                            </div>

                            <div className="bg-slate-100 p-2.5 rounded-xl text-slate-700 text-[11px]">
                              <strong>Opsi Alternatif Build Manual di Terminal/CMD Laptop:</strong> Jalankan perintah <code className="font-mono font-bold text-blue-900">npm run build</code> di proyek Anda, maka folder <code className="font-bold">dist/</code> beserta subfolder <code className="font-bold">assets/</code> akan otomatis tercipta dan siap diunggah.
                            </div>
                          </div>
                        </div>

                        {/* Step 4 */}
                        <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md transition">
                          <div className="w-8 h-8 rounded-full bg-[#1e2a78] text-white font-black text-sm flex items-center justify-center mb-3">
                            4
                          </div>
                          <h5 className="font-bold text-slate-900 text-base mb-1.5">Konfigurasi .htaccess untuk Routing SPA</h5>
                          <p className="text-xs text-slate-600 mb-2 leading-relaxed">
                            Buat file bernama <code className="bg-slate-200 px-1.5 py-0.5 rounded font-mono font-bold text-blue-900">.htaccess</code> di dalam folder <code className="font-mono">public_html</code> dan isikan kode berikut agar navigasi halaman web berjalan mulus tanpa error 404:
                          </p>
                          <pre className="bg-slate-900 text-emerald-400 p-3 rounded-xl text-[11px] font-mono overflow-x-auto leading-relaxed">
{`<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>`}
                          </pre>
                        </div>
                      </div>

                      {/* Step 5 */}
                      <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="w-6 h-6 rounded-full bg-blue-700 text-white font-black text-xs flex items-center justify-center">5</span>
                            <h5 className="font-bold text-slate-900 text-sm">Hubungkan Domain & Aktifkan SSL Gratis</h5>
                          </div>
                          <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
                            Pastikan Nameserver domain Anda telah diarahkan ke hosting Anda (misal: <code className="bg-white px-1.5 py-0.5 rounded border">ns1.namahosting.com</code>). Di cPanel, aktifkan sertifikat SSL gratis via menu <strong>AutoSSL</strong> atau <strong>Let's Encrypt SSL</strong> agar website dapat diakses dengan protokol aman <code className="text-emerald-700 font-bold">https://</code>.
                          </p>
                        </div>
                        <button 
                          onClick={handleDownloadSql}
                          className="bg-[#1e2a78] hover:bg-blue-900 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center shrink-0 shadow"
                        >
                          <Download size={14} className="mr-1.5 text-yellow-400" /> Unduh database.sql Sekarang
                        </button>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: LIVE SQL SCRIPT VIEWER */}
                  {activeSqlTab === 'preview' && (
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-2 border-b">
                        <div>
                          <h4 className="font-bold text-slate-900 text-base">Skrip Query SQL Lengkap (Sinkron Otomatis Data Live)</h4>
                          <p className="text-xs text-slate-500">Skrip ini memuat definisi CREATE TABLE dan INSERT INTO sesuai data inputan admin saat ini.</p>
                        </div>
                        <div className="flex space-x-2">
                          <button 
                            onClick={handleCopySql} 
                            className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-3 py-2 rounded-xl flex items-center border transition"
                          >
                            {copiedSql ? <Check size={14} className="mr-1.5 text-emerald-600" /> : <Copy size={14} className="mr-1.5" />}
                            {copiedSql ? 'Tersalin!' : 'Salin Semua'}
                          </button>
                          <button 
                            onClick={handleDownloadSql} 
                            className="bg-[#1e2a78] hover:bg-blue-900 text-white text-xs font-bold px-3 py-2 rounded-xl flex items-center transition shadow"
                          >
                            <Download size={14} className="mr-1.5 text-yellow-400" /> Unduh .SQL
                          </button>
                        </div>
                      </div>

                      <div className="relative">
                        <pre className="bg-slate-950 text-slate-200 p-5 rounded-2xl text-xs font-mono overflow-auto max-h-[500px] border border-slate-800 leading-relaxed select-all">
                          {generateSqlContent()}
                        </pre>
                      </div>
                    </div>
                  )}

                  {/* TAB 3: PHP CONNECTION TEMPLATE */}
                  {activeSqlTab === 'php' && (
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-2 border-b">
                        <div>
                          <h4 className="font-bold text-slate-900 text-base">File Koneksi Database PHP (db.php)</h4>
                          <p className="text-xs text-slate-500">Gunakan file ini jika Anda ingin menghubungkan backend PHP di cPanel hosting dengan database MySQL di atas.</p>
                        </div>
                        <div className="flex space-x-2">
                          <button 
                            onClick={handleCopyPhp} 
                            className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-3 py-2 rounded-xl flex items-center border transition"
                          >
                            {copiedPhp ? <Check size={14} className="mr-1.5 text-emerald-600" /> : <Copy size={14} className="mr-1.5" />}
                            {copiedPhp ? 'Tersalin!' : 'Salin Kode PHP'}
                          </button>
                          <button 
                            onClick={handleDownloadPhpConfig} 
                            className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-3 py-2 rounded-xl flex items-center transition shadow"
                          >
                            <Download size={14} className="mr-1.5 text-yellow-400" /> Unduh db.php
                          </button>
                        </div>
                      </div>

                      <pre className="bg-slate-950 text-emerald-400 p-5 rounded-2xl text-xs font-mono overflow-auto max-h-[450px] border border-slate-800 leading-relaxed select-all">
                        {generatePhpConfigCode()}
                      </pre>

                      <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-amber-900 text-xs flex items-start space-x-3">
                        <Info size={18} className="text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold block mb-0.5">Tips Keamanan Hosting:</span>
                          <p className="leading-relaxed">
                            Simpan file <code className="font-mono font-bold">db.php</code> di luar folder yang bisa diakses publik (misal satu tingkat di atas <code className="font-mono">public_html</code>) atau lindungi dari akses langsung browser agar kredensial database MySQL Anda tetap aman terlindungi.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* MENU PENGATURAN AKUN ADMINISTRATOR */}
          {activeMenu === 'pengaturan_akun' && (
            <div className="space-y-6 max-w-4xl">
              {/* Header Banner */}
              <div className="bg-gradient-to-r from-slate-900 via-[#1e2a78] to-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="inline-flex items-center space-x-2 bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
                      <Key size={13} className="text-yellow-400" /> Pengaturan Akun Admin
                    </div>
                    <h3 className="text-xl md:text-2xl font-black">
                      Pengaturan Akun & Keamanan
                    </h3>
                    <p className="text-blue-100 text-xs md:text-sm max-w-xl leading-relaxed">
                      Perbarui identitas profil Anda, ubah username login, alamat email, serta ganti kata sandi (password) panel administrator.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1.5 rounded-xl bg-white/10 text-white text-xs font-bold border border-white/15">
                      Role: {adminUser?.role || 'Super Admin'}
                    </span>
                    <span className="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30 flex items-center">
                      <CheckCircle size={14} className="mr-1.5 text-emerald-400" /> Sesi Aktif
                    </span>
                  </div>
                </div>
              </div>

              {/* Alert Feedback */}
              {accountAlert && (
                <div className={`p-4 rounded-2xl text-xs md:text-sm font-semibold flex items-start space-x-3 transition-all ${
                  accountAlert.type === 'success' 
                    ? 'bg-emerald-50 border border-emerald-200 text-emerald-800' 
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}>
                  {accountAlert.type === 'success' ? (
                    <CheckCircle size={20} className="text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle size={20} className="text-red-600 shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <span className="font-bold block mb-0.5">
                      {accountAlert.type === 'success' ? 'Berhasil!' : 'Perhatian:'}
                    </span>
                    <p className="leading-relaxed">{accountAlert.message}</p>
                  </div>
                  <button 
                    type="button" 
                    onClick={() => setAccountAlert(null)}
                    className="text-slate-400 hover:text-slate-700 text-xs font-bold ml-2"
                  >
                    <X size={16} />
                  </button>
                </div>
              )}

              {/* Tab Navigasi: Profil Saya vs Kelola & Tambah Akun Admin */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-2.5 rounded-2xl border border-slate-200 shadow-xs">
                <div className="flex items-center space-x-2">
                  <button 
                    type="button" 
                    onClick={() => { setAccountSubTab('profile'); setAccountAlert(null); }}
                    className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition flex items-center ${
                      accountSubTab === 'profile' 
                        ? 'bg-[#1e2a78] text-white shadow-sm' 
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <User size={16} className="mr-2 text-yellow-400" /> Profil Akun Saya
                  </button>
                  <button 
                    type="button" 
                    onClick={() => { setAccountSubTab('admin_list'); setAccountAlert(null); }}
                    className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition flex items-center ${
                      accountSubTab === 'admin_list' 
                        ? 'bg-[#1e2a78] text-white shadow-sm' 
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <Users size={16} className="mr-2 text-yellow-400" /> Daftar & Kelola Akun Admin
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-[10px] font-black ${
                      accountSubTab === 'admin_list' ? 'bg-yellow-400 text-slate-950' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {adminAccounts.length}
                    </span>
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <button 
                    type="button" 
                    onClick={() => {
                      setAccountSubTab('admin_list');
                      setEditingAdminId(null);
                      setNewAdminForm({
                        name: '',
                        username: '',
                        email: '',
                        role: 'Administrator Utama',
                        status: 'active',
                        password: '',
                        confirmPassword: ''
                      });
                      setIsAddAdminOpen(true);
                      setAccountAlert(null);
                    }}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs md:text-sm transition flex items-center shadow-xs active:scale-95"
                  >
                    <UserPlus size={16} className="mr-1.5" /> + Tambah Akun Admin
                  </button>
                </div>
              </div>

              {/* TAB 1: FORM PROFIL SAYA */}
              {accountSubTab === 'profile' && (
              /* Form Pengaturan Akun */
              <form onSubmit={handleSaveAccount} className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 md:p-8 space-y-8">
                  {/* Bagian 1: Identitas Profil & Kredensial Login */}
                  <div>
                    <div className="flex items-center space-x-3 pb-3 border-b border-slate-100 mb-6">
                      <div className="w-9 h-9 bg-blue-50 text-[#1e2a78] rounded-xl flex items-center justify-center font-bold">
                        <User size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-base">Identitas Administrator</h4>
                        <p className="text-xs text-slate-400">Nama lengkap dan username yang digunakan untuk login.</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2 flex items-center space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                        <div className="w-16 h-16 rounded-2xl bg-[#1e2a78] text-white flex items-center justify-center font-black text-2xl shadow-md border-2 border-white">
                          {(accountForm.name || 'Admin').charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="text-sm font-extrabold text-slate-900">{accountForm.name || 'Administrator'}</p>
                          <p className="text-xs text-slate-500">@{accountForm.username || 'admin'} • {accountForm.email || 'admin@rasmanmulya.sch.id'}</p>
                          <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-[#1e2a78]">
                            {accountForm.role}
                          </span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                          Nama Lengkap Administrator *
                        </label>
                        <input 
                          type="text" 
                          required
                          value={accountForm.name} 
                          onChange={e => setAccountForm({ ...accountForm, name: e.target.value })} 
                          className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white font-medium" 
                          placeholder="Cth: Daruna Tarihoran, M.Pd."
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                          Username Login *
                        </label>
                        <div className="relative">
                          <input 
                            type="text" 
                            required
                            value={accountForm.username} 
                            onChange={e => setAccountForm({ ...accountForm, username: e.target.value })} 
                            className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white font-mono font-bold text-[#1e2a78]" 
                            placeholder="Cth: admin"
                          />
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1">Username unik untuk masuk ke panel CMS admin.</p>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                          Alamat Email Administrator *
                        </label>
                        <input 
                          type="email" 
                          required
                          value={accountForm.email} 
                          onChange={e => setAccountForm({ ...accountForm, email: e.target.value })} 
                          className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white" 
                          placeholder="admin@rasmanmulya.sch.id"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                          Peran / Hak Akses Akun
                        </label>
                        <select 
                          value={accountForm.role} 
                          onChange={e => setAccountForm({ ...accountForm, role: e.target.value })} 
                          className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white font-semibold text-slate-800"
                        >
                          <option value="Super Administrator">Super Administrator (Hak Akses Penuh)</option>
                          <option value="Administrator Utama">Administrator Utama</option>
                          <option value="Operator SPMB & Konten">Operator SPMB & Konten</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Bagian 2: Ubah Kata Sandi (Password) */}
                  <div className="pt-6 border-t border-slate-200">
                    <div className="flex items-center space-x-3 pb-3 border-b border-slate-100 mb-6">
                      <div className="w-9 h-9 bg-amber-50 text-amber-700 rounded-xl flex items-center justify-center font-bold">
                        <Lock size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-base">Ubah Kata Sandi (Password)</h4>
                        <p className="text-xs text-slate-400">Kosongkan kolom di bawah jika Anda tidak ingin mengganti password saat ini.</p>
                      </div>
                    </div>

                    <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-2xl text-amber-900 text-xs mb-6 flex items-start space-x-3">
                      <Info size={18} className="text-amber-600 shrink-0 mt-0.5" />
                      <p className="leading-relaxed">
                        Jika Anda ingin mengganti kata sandi login, ketikkan password baru minimal 5 karakter dan ulangi di konfirmasi password. Jika tidak ingin mengubah password, biarkan kedua kolom tetap kosong.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                          Kata Sandi Baru (Opsional)
                        </label>
                        <div className="relative">
                          <input 
                            type={showAccountPassword ? 'text' : 'password'} 
                            value={accountForm.newPassword} 
                            onChange={e => setAccountForm({ ...accountForm, newPassword: e.target.value })} 
                            className="w-full px-4 py-2.5 pr-11 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white font-mono" 
                            placeholder="Ketik password baru jika ingin diganti..."
                          />
                          <button 
                            type="button" 
                            onClick={() => setShowAccountPassword(!showAccountPassword)}
                            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-700"
                            title={showAccountPassword ? 'Sembunyikan password' : 'Lihat password'}
                          >
                            {showAccountPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                          Konfirmasi Kata Sandi Baru
                        </label>
                        <input 
                          type={showAccountPassword ? 'text' : 'password'} 
                          value={accountForm.confirmPassword} 
                          onChange={e => setAccountForm({ ...accountForm, confirmPassword: e.target.value })} 
                          className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white font-mono" 
                          placeholder="Ulangi password baru..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bagian 3: Pengaturan Sembunyikan Login Admin pada Tampilan Web */}
                  <div className="pt-6 border-t border-slate-200">
                    <div className="flex items-center space-x-3 pb-3 border-b border-slate-100 mb-6">
                      <div className="w-9 h-9 bg-purple-50 text-purple-700 rounded-xl flex items-center justify-center font-bold">
                        <EyeOff size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-base">Visibilitas Akses Login di Web Publik</h4>
                        <p className="text-xs text-slate-400">Atur apakah tombol akses login administrator disembunyikan dari pengunjung umum.</p>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl border transition-all bg-slate-50 border-slate-200 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-extrabold text-slate-900 text-sm">
                              Sembunyikan Tombol Login Admin dari Publik
                            </span>
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold flex items-center ${
                              accountForm.hideAdminLogin 
                                ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                                : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                            }`}>
                              {accountForm.hideAdminLogin ? 'Status: Tersembunyi (Privat)' : 'Status: Ditampilkan (Publik)'}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 max-w-xl leading-relaxed">
                            Bila diaktifkan, tombol <strong className="text-slate-700">"Login Admin"</strong> pada header dan navigasi ponsel akan disembunyikan sehingga siswa dan publik tidak melihat akses masuk.
                          </p>
                        </div>

                        <label className="relative inline-flex items-center cursor-pointer shrink-0">
                          <input 
                            type="checkbox" 
                            checked={accountForm.hideAdminLogin} 
                            onChange={e => handleToggleHideLogin(e.target.checked)} 
                            className="sr-only peer" 
                          />
                          <div className="w-14 h-7 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#1e2a78]"></div>
                        </label>
                      </div>

                      <div className="text-[11px] text-blue-800 bg-blue-50/80 p-3 rounded-xl border border-blue-200 flex items-start space-x-2">
                        <Info size={15} className="text-blue-600 mt-0.5 shrink-0" />
                        <div>
                          <strong>Cara Mengakses Login Jika Disembunyikan:</strong>
                          <p className="mt-0.5 text-blue-700 leading-relaxed">
                            Administrator tetap dapat mengakses login kapan saja dengan membuka URL <strong>#login</strong> atau mengklik ikon gembok kecil di bagian copyright paling bawah (footer) website.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bagian 3: Ringkasan Hak Akses & Status Kredensial */}
                  <div className="pt-6 border-t border-slate-200">
                    <h5 className="font-bold text-slate-800 text-sm mb-3">Informasi Hak Akses & Sinkronisasi Hosting</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                        <span className="font-bold text-slate-800 block mb-1 flex items-center">
                          <CheckCircle size={14} className="text-emerald-600 mr-1.5" /> Sesi Browser Lokal
                        </span>
                        <p className="text-slate-500 leading-relaxed">
                          Tersimpan di penyimpanan lokal browser (<code className="text-blue-700 font-mono">localStorage</code>).
                        </p>
                      </div>
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                        <span className="font-bold text-slate-800 block mb-1 flex items-center">
                          <Database size={14} className="text-[#1e2a78] mr-1.5" /> MySQL Snapshot
                        </span>
                        <p className="text-slate-500 leading-relaxed">
                          Tersinkron otomatis pada tabel <code className="text-blue-700 font-mono">admin_users</code> di tab Database MySQL.
                        </p>
                      </div>
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                        <span className="font-bold text-slate-800 block mb-1 flex items-center">
                          <ShieldCheck size={14} className="text-yellow-600 mr-1.5" /> Keamanan Panel
                        </span>
                        <p className="text-slate-500 leading-relaxed">
                          Dilengkapi proteksi rute halaman dan sesi konfirmasi logout terpadu.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-slate-400">
                    Pastikan Anda mengingat username dan kata sandi baru Anda sebelum menyimpan.
                  </span>
                  <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
                    <button 
                      type="button" 
                      onClick={() => setActiveMenu('dashboard')} 
                      className="px-5 py-2.5 border border-slate-300 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold text-xs transition"
                    >
                      Kembali ke Dashboard
                    </button>
                    <button 
                      id="saveAccountBtn" 
                      type="submit" 
                      className="bg-[#1e2a78] hover:bg-blue-900 text-white px-7 py-2.5 rounded-xl font-bold transition shadow active:scale-95 text-xs md:text-sm flex items-center"
                    >
                      <Save size={16} className="mr-2 text-yellow-400" /> Simpan Perubahan Akun
                    </button>
                  </div>
                </div>
              </form>
              )}

              {/* TAB 2: MANAJEMEN & TAMBAH AKUN ADMINISTRATOR */}
              {accountSubTab === 'admin_list' && (
                <div className="space-y-6">
                  {/* FORM INPUTAN TAMBAH / EDIT AKUN ADMIN */}
                  {isAddAdminOpen && (
                    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                      <div className="p-5 md:p-6 border-b border-slate-200 bg-gradient-to-r from-blue-50/70 to-indigo-50/40 flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-2xl bg-[#1e2a78] text-white flex items-center justify-center font-bold shadow-sm">
                            <UserPlus size={20} className="text-yellow-400" />
                          </div>
                          <div>
                            <h4 className="font-extrabold text-slate-900 text-base md:text-lg">
                              {editingAdminId ? 'Edit Data Akun Administrator' : 'Inputan Tambah Akun Admin Baru'}
                            </h4>
                            <p className="text-xs text-slate-500">
                              {editingAdminId ? 'Ubah informasi identitas atau hak akses akun terpilih.' : 'Lengkapi formulir di bawah ini untuk membuat kredensial akun admin baru.'}
                            </p>
                          </div>
                        </div>
                        <button 
                          type="button" 
                          onClick={() => { setIsAddAdminOpen(false); setEditingAdminId(null); }}
                          className="text-slate-400 hover:text-slate-700 p-2 rounded-xl hover:bg-white transition"
                          title="Tutup Form"
                        >
                          <X size={18} />
                        </button>
                      </div>

                      <form onSubmit={handleSaveAdminAccount} className="p-6 md:p-8 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                              Nama Lengkap Administrator *
                            </label>
                            <input 
                              type="text" 
                              required
                              value={newAdminForm.name} 
                              onChange={e => setNewAdminForm({ ...newAdminForm, name: e.target.value })} 
                              placeholder="Cth: Ahmad Faiz, S.Kom." 
                              className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                              Username Login *
                            </label>
                            <input 
                              type="text" 
                              required
                              value={newAdminForm.username} 
                              onChange={e => setNewAdminForm({ ...newAdminForm, username: e.target.value.toLowerCase().replace(/\s/g, '') })} 
                              placeholder="Cth: ahmad_admin (huruf kecil & tanpa spasi)" 
                              className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white font-mono font-bold text-[#1e2a78]"
                            />
                            <p className="text-[10px] text-slate-400 mt-1">Username digunakan untuk masuk ke panel CMS.</p>
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                              Alamat Email Resmi Admin *
                            </label>
                            <input 
                              type="email" 
                              required
                              value={newAdminForm.email} 
                              onChange={e => setNewAdminForm({ ...newAdminForm, email: e.target.value })} 
                              placeholder="Cth: ahmad@rasmanmulya.sch.id" 
                              className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                              Peran / Hak Akses (Role) *
                            </label>
                            <select 
                              value={newAdminForm.role} 
                              onChange={e => setNewAdminForm({ ...newAdminForm, role: e.target.value })} 
                              className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white font-semibold text-slate-800"
                            >
                              <option value="Super Administrator">Super Administrator (Hak Akses Penuh)</option>
                              <option value="Administrator Utama">Administrator Utama (Manajemen Konten & Guru)</option>
                              <option value="Operator SPMB & Konten">Operator SPMB & Konten (Pendaftaran Siswa)</option>
                              <option value="Operator Akademik & Fasilitas">Operator Akademik & Fasilitas</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                              Status Akun *
                            </label>
                            <select 
                              value={newAdminForm.status} 
                              onChange={e => setNewAdminForm({ ...newAdminForm, status: e.target.value as any })} 
                              className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white font-semibold"
                            >
                              <option value="active">Aktif (Dapat Login ke Sistem)</option>
                              <option value="inactive">Non-Aktif (Akses Login Dibekukan)</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                              {editingAdminId ? 'Kata Sandi Baru (Kosongkan jika tidak diganti)' : 'Kata Sandi (Password) Login *'}
                            </label>
                            <div className="relative">
                              <input 
                                type={showNewAdminPassword ? 'text' : 'password'} 
                                required={!editingAdminId}
                                value={newAdminForm.password} 
                                onChange={e => setNewAdminForm({ ...newAdminForm, password: e.target.value })} 
                                placeholder={editingAdminId ? 'Biarkan kosong jika tidak diubah' : 'Minimal 5 karakter...'} 
                                className="w-full px-4 py-2.5 pr-11 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white font-mono"
                              />
                              <button 
                                type="button" 
                                onClick={() => setShowNewAdminPassword(!showNewAdminPassword)} 
                                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-700"
                              >
                                {showNewAdminPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                              </button>
                            </div>
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                              {editingAdminId ? 'Ulangi Kata Sandi Baru' : 'Konfirmasi Kata Sandi *'}
                            </label>
                            <input 
                              type={showNewAdminPassword ? 'text' : 'password'} 
                              required={!editingAdminId && !!newAdminForm.password}
                              value={newAdminForm.confirmPassword} 
                              onChange={e => setNewAdminForm({ ...newAdminForm, confirmPassword: e.target.value })} 
                              placeholder="Ulangi kata sandi..." 
                              className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-100 text-sm bg-white font-mono"
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-end space-x-3 pt-5 border-t border-slate-100">
                          <button 
                            type="button" 
                            onClick={() => { setIsAddAdminOpen(false); setEditingAdminId(null); }} 
                            className="px-5 py-2.5 border border-slate-300 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold text-xs transition"
                          >
                            Batal
                          </button>
                          <button 
                            type="submit" 
                            className="bg-[#1e2a78] hover:bg-blue-900 text-white font-bold px-6 py-2.5 rounded-xl text-xs md:text-sm transition flex items-center shadow-md active:scale-95"
                          >
                            <Save size={16} className="mr-1.5 text-yellow-400" />
                            {editingAdminId ? 'Simpan Perubahan Akun' : 'Daftarkan Akun Admin Baru'}
                          </button>
                        </div>
                      </form>
                    </div>
                  )}

                  {/* TABEL DAFTAR SELURUH AKUN ADMIN */}
                  <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="p-5 md:p-6 border-b border-slate-200 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h4 className="font-extrabold text-slate-900 text-base md:text-lg flex items-center">
                          <Users size={20} className="mr-2 text-[#1e2a78]" /> Daftar Akun Administrator Terdaftar
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Seluruh akun pengelola yang memiliki wewenang masuk ke dashboard ({adminAccounts.length} akun).
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <input 
                          type="text" 
                          value={adminSearchQuery} 
                          onChange={e => setAdminSearchQuery(e.target.value)} 
                          placeholder="Cari nama / username..." 
                          className="px-3.5 py-2 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:bg-white outline-none w-44"
                        />
                        {!isAddAdminOpen && (
                          <button 
                            type="button" 
                            onClick={() => {
                              setEditingAdminId(null);
                              setNewAdminForm({
                                name: '',
                                username: '',
                                email: '',
                                role: 'Administrator Utama',
                                status: 'active',
                                password: '',
                                confirmPassword: ''
                              });
                              setIsAddAdminOpen(true);
                              setAccountAlert(null);
                            }} 
                            className="bg-[#1e2a78] hover:bg-blue-900 text-white font-bold px-4 py-2 rounded-xl text-xs transition flex items-center shadow-xs shrink-0 active:scale-95"
                          >
                            <UserPlus size={15} className="mr-1.5 text-yellow-400" /> + Tambah Akun
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-50 text-slate-600 font-bold uppercase tracking-wider text-[10px] border-b border-slate-200">
                          <tr>
                            <th className="py-3.5 px-5">Administrator</th>
                            <th className="py-3.5 px-5">Username & Email</th>
                            <th className="py-3.5 px-5">Peran / Hak Akses</th>
                            <th className="py-3.5 px-5">Status</th>
                            <th className="py-3.5 px-5">Tgl Dibuat</th>
                            <th className="py-3.5 px-5 text-right">Aksi</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {adminAccounts
                            .filter(a => 
                              !adminSearchQuery || 
                              a.name.toLowerCase().includes(adminSearchQuery.toLowerCase()) || 
                              a.username.toLowerCase().includes(adminSearchQuery.toLowerCase()) ||
                              a.email.toLowerCase().includes(adminSearchQuery.toLowerCase())
                            )
                            .map((item, index) => {
                              const isCurrentLoggedIn = item.username.toLowerCase() === adminUser?.username?.toLowerCase();
                              return (
                                <tr key={item.id || index} className="hover:bg-slate-50/80 transition">
                                  <td className="py-4 px-5">
                                    <div className="flex items-center space-x-3">
                                      <div className="w-9 h-9 rounded-xl bg-[#1e2a78] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                                        {(item.name || 'A').charAt(0).toUpperCase()}
                                      </div>
                                      <div>
                                        <span className="font-bold text-slate-900 block">{item.name}</span>
                                        {isCurrentLoggedIn && (
                                          <span className="text-[10px] bg-blue-100 text-blue-800 font-extrabold px-1.5 py-0.2 rounded">
                                            (Akun Anda Saat Ini)
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  </td>
                                  <td className="py-4 px-5">
                                    <span className="font-mono font-bold text-[#1e2a78] block">@{item.username}</span>
                                    <span className="text-slate-400 text-[11px]">{item.email}</span>
                                  </td>
                                  <td className="py-4 px-5">
                                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                                      item.role.includes('Super') 
                                        ? 'bg-purple-100 text-purple-800 border border-purple-200' 
                                        : item.role.includes('Operator') 
                                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' 
                                          : 'bg-blue-100 text-blue-800 border border-blue-200'
                                    }`}>
                                      {item.role}
                                    </span>
                                  </td>
                                  <td className="py-4 px-5">
                                    <button 
                                      type="button" 
                                      onClick={() => handleToggleAdminStatus(item)}
                                      disabled={isCurrentLoggedIn}
                                      title={isCurrentLoggedIn ? 'Tidak dapat mengubah status akun sendiri' : 'Klik untuk mengubah status akun'}
                                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold transition ${
                                        item.status === 'active' 
                                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-300 hover:bg-emerald-100' 
                                          : 'bg-slate-100 text-slate-600 border border-slate-300 hover:bg-slate-200'
                                      } ${isCurrentLoggedIn ? 'cursor-not-allowed opacity-90' : 'cursor-pointer'}`}
                                    >
                                      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${item.status === 'active' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`} />
                                      {item.status === 'active' ? 'Aktif' : 'Non-Aktif'}
                                    </button>
                                  </td>
                                  <td className="py-4 px-5 text-slate-500 text-[11px] font-mono">
                                    {item.createdAt || '01 Jan 2026'}
                                  </td>
                                  <td className="py-4 px-5 text-right">
                                    <div className="flex items-center justify-end space-x-1.5">
                                      <button 
                                        type="button" 
                                        onClick={() => handleEditAdmin(item)} 
                                        className="p-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg transition"
                                        title="Edit Akun Admin"
                                      >
                                        <Edit size={14} />
                                      </button>
                                      {!isCurrentLoggedIn && (
                                        <button 
                                          type="button" 
                                          onClick={() => handleDeleteAdmin(item)} 
                                          className="p-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition"
                                          title="Hapus Akun Admin"
                                        >
                                          <Trash2 size={14} />
                                        </button>
                                      )}
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

        </main>
      </div>

      {/* Admin Modals Forms */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={modalType.includes('add') ? "Tambah Data Baru" : "Edit Data"}>
        {currentEditItem && (modalType === 'add_slide' || modalType === 'edit_slide') && (
          <form onSubmit={(e) => handleGenericSave(e, 'slide', slides, setSlides)} className="space-y-4">
             <div>
               <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Judul Headline</label>
               <input type="text" required value={currentEditItem.title || ''} onChange={e => setCurrentEditItem({...currentEditItem, title: e.target.value})} className="w-full px-4 py-2.5 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-100 text-sm" />
             </div>
             <div>
               <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Deskripsi Singkat</label>
               <textarea required rows={3} value={currentEditItem.desc || ''} onChange={e => setCurrentEditItem({...currentEditItem, desc: e.target.value})} className="w-full px-4 py-2.5 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-100 text-sm resize-none"></textarea>
             </div>
             <div className="bg-slate-50 p-4 border rounded-xl">
               <ImageUpload label="Upload Gambar Banner" value={currentEditItem.image || ''} onChange={(val) => setCurrentEditItem({...currentEditItem, image: val})} hint="Gunakan gambar resolusi tinggi format lanskap." />
             </div>
             <div className="pt-4 flex justify-end space-x-3 border-t">
               <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 border rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition text-sm">Batal</button>
               <button type="submit" className="px-5 py-2.5 bg-[#1e2a78] text-white rounded-xl font-bold hover:bg-blue-900 transition text-sm shadow">Simpan Banner</button>
             </div>
          </form>
        )}

        {(modalType === 'add_galeri' || modalType === 'edit_galeri') && currentEditItem && (
          <form onSubmit={(e) => handleGenericSave(e, 'galeri', galleries, setGalleries)} className="space-y-4">
             <div>
               <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Judul / Keterangan Media</label>
               <input type="text" required value={currentEditItem.title || ''} onChange={e => setCurrentEditItem({...currentEditItem, title: e.target.value})} className="w-full px-4 py-2.5 border rounded-xl outline-none text-sm" />
             </div>
             <div>
               <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Tipe Media</label>
               <select value={currentEditItem.type || 'foto'} onChange={e => setCurrentEditItem({...currentEditItem, type: e.target.value})} className="w-full px-4 py-2 border rounded-xl text-sm bg-white">
                 <option value="foto">Foto Kegiatan</option>
                 <option value="video">Video Kegiatan</option>
               </select>
             </div>
             <div className="bg-slate-50 p-4 border rounded-xl">
               <ImageUpload label="File Gambar Media / Thumbnail Video" value={currentEditItem.image || ''} onChange={(val) => setCurrentEditItem({...currentEditItem, image: val})} />
             </div>
             <div className="pt-4 flex justify-end space-x-3 border-t">
               <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 border rounded-xl text-gray-700 font-semibold hover:bg-gray-50 text-sm">Batal</button>
               <button type="submit" className="px-5 py-2.5 bg-[#1e2a78] text-white rounded-xl font-bold hover:bg-blue-900 text-sm shadow">Simpan Media</button>
             </div>
          </form>
        )}

        {(modalType === 'add_pendidik' || modalType === 'edit_pendidik') && currentEditItem && (
          <form onSubmit={(e) => handleGenericSave(e, 'pendidik', teachers, setTeachers)} className="space-y-4">
             <div className="grid grid-cols-2 gap-4">
               <div className="col-span-2 bg-slate-50 p-4 border rounded-xl">
                 <ImageUpload label="Foto Profil Formal Guru" value={currentEditItem.image || ''} onChange={(val) => setCurrentEditItem({...currentEditItem, image: val})} hint="Upload pas foto atau foto setengah badan (potrait)." />
               </div>
               <div className="col-span-2">
                 <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide">Nama Lengkap & Gelar *</label>
                 <input type="text" required value={currentEditItem.name || ''} onChange={e => setCurrentEditItem({...currentEditItem, name: e.target.value})} className="w-full px-4 py-2 border rounded-xl text-sm" placeholder="Cth: Budi Santoso, M.Pd." />
               </div>
               <div className="col-span-2">
                 <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide">Spesialisasi / Tag Bidang *</label>
                 <input type="text" required value={currentEditItem.subjectTag || ''} onChange={e => setCurrentEditItem({...currentEditItem, subjectTag: e.target.value})} className="w-full px-4 py-2 border rounded-xl text-sm" placeholder="Cth: Guru Produktif IT & TKJ" />
               </div>
               <div>
                 <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide">Jabatan Struktural</label>
                 <input type="text" value={currentEditItem.role || ''} onChange={e => setCurrentEditItem({...currentEditItem, role: e.target.value})} className="w-full px-4 py-2 border rounded-xl text-sm" placeholder="Cth: Wakil Kepala Sekolah" />
               </div>
               <div>
                 <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide">Mata Pelajaran</label>
                 <input type="text" value={currentEditItem.subject || ''} onChange={e => setCurrentEditItem({...currentEditItem, subject: e.target.value})} className="w-full px-4 py-2 border rounded-xl text-sm" placeholder="Cth: Pemrograman Web" />
               </div>
               <div>
                 <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide">Email Resmi</label>
                 <input type="email" value={currentEditItem.email || ''} onChange={e => setCurrentEditItem({...currentEditItem, email: e.target.value})} className="w-full px-4 py-2 border rounded-xl text-sm" placeholder="guru@rasmanmulya.sch.id" />
               </div>
               <div>
                 <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide">Pengalaman / Jam Terbang</label>
                 <input type="text" value={currentEditItem.experience || ''} onChange={e => setCurrentEditItem({...currentEditItem, experience: e.target.value})} className="w-full px-4 py-2 border rounded-xl text-sm" placeholder="Cth: 10 Tahun Mengajar" />
               </div>
               <div className="col-span-2">
                 <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide">Moto / Filosofi Pendidik</label>
                 <input type="text" value={currentEditItem.motto || ''} onChange={e => setCurrentEditItem({...currentEditItem, motto: e.target.value})} className="w-full px-4 py-2 border rounded-xl text-sm" placeholder="Cth: Mendidik dengan hati dan teladan." />
               </div>
               <div className="col-span-2">
                 <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide">Riwayat Pendidikan</label>
                 <input type="text" value={currentEditItem.education || ''} onChange={e => setCurrentEditItem({...currentEditItem, education: e.target.value})} className="w-full px-4 py-2 border rounded-xl text-sm bg-white" placeholder="Cth: S1 Teknik Informatika - Telkom" />
               </div>
               <div className="col-span-2">
                 <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide">Biografi Lengkap</label>
                 <textarea value={currentEditItem.bio || ''} onChange={e => setCurrentEditItem({...currentEditItem, bio: e.target.value})} className="w-full px-4 py-2 border rounded-xl text-sm bg-white resize-none" rows={3} placeholder="Tuliskan pengalaman dan filosofi mengajar guru..."></textarea>
               </div>
               <div className="col-span-2">
                 <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide">Penempatan Unit</label>
                 <select required value={currentEditItem.category || 'SMP Rasman Mulya'} onChange={e => setCurrentEditItem({...currentEditItem, category: e.target.value, badgeColor: e.target.value === 'Pimpinan & Yayasan' ? 'bg-purple-600' : (e.target.value === 'SMP Rasman Mulya' ? 'bg-blue-600' : 'bg-emerald-600')})} className="w-full px-4 py-2.5 border rounded-xl bg-white text-sm">
                    <option value="SMP Rasman Mulya">SMP Rasman Mulya</option>
                    <option value="SMK Rasman Mulya">SMK Rasman Mulya</option>
                    <option value="Pimpinan & Yayasan">Pimpinan & Yayasan Terpadu</option>
                 </select>
               </div>
             </div>
             <div className="pt-4 flex justify-end space-x-3 border-t">
               <button type="submit" className="px-5 py-2.5 bg-[#1e2a78] text-white rounded-xl font-bold hover:bg-blue-900 w-full text-center text-sm shadow">
                 Simpan Profil Pendidik
               </button>
             </div>
          </form>
        )}

        {(modalType === 'add_spmb' || modalType === 'edit_spmb') && currentEditItem && (
          <form onSubmit={(e) => handleGenericSave(e, 'spmb', spmbData, setSpmbData)} className="space-y-4">
             <div>
               <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Nama Calon Siswa</label>
               <input type="text" required value={currentEditItem.name || ''} onChange={e => setCurrentEditItem({...currentEditItem, name: e.target.value})} className="w-full px-4 py-2 border rounded-xl text-sm" />
             </div>
             <div className="grid grid-cols-2 gap-4">
               <div>
                 <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Jenjang</label>
                 <select value={currentEditItem.jenjang || 'SMP'} onChange={e => setCurrentEditItem({...currentEditItem, jenjang: e.target.value})} className="w-full px-4 py-2 border rounded-xl text-sm bg-white">
                   <option value="SMP">SMP Rasman Mulya</option>
                   <option value="SMK">SMK Rasman Mulya</option>
                 </select>
               </div>
               <div>
                 <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Status Verifikasi</label>
                 <select value={currentEditItem.status || 'Menunggu Verifikasi'} onChange={e => setCurrentEditItem({...currentEditItem, status: e.target.value})} className="w-full px-4 py-2 border rounded-xl text-sm bg-white font-bold text-blue-700">
                   <option value="Menunggu Verifikasi">Menunggu Verifikasi</option>
                   <option value="Diterima">Diterima</option>
                   <option value="Ditolak">Ditolak</option>
                   <option value="Cadangan">Cadangan</option>
                 </select>
               </div>
             </div>
             <div>
               <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Asal Sekolah</label>
               <input type="text" value={currentEditItem.asalSekolah || ''} onChange={e => setCurrentEditItem({...currentEditItem, asalSekolah: e.target.value})} className="w-full px-4 py-2 border rounded-xl text-sm" />
             </div>
             <div>
               <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Nama Orang Tua / Wali</label>
               <input type="text" value={currentEditItem.parentName || ''} onChange={e => setCurrentEditItem({...currentEditItem, parentName: e.target.value})} className="w-full px-4 py-2 border rounded-xl text-sm" />
             </div>
             <div>
               <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">No. WhatsApp</label>
               <input type="text" value={currentEditItem.phone || ''} onChange={e => setCurrentEditItem({...currentEditItem, phone: e.target.value})} className="w-full px-4 py-2 border rounded-xl text-sm" />
             </div>
             <div className="pt-4 flex justify-end space-x-3 border-t">
               <button type="submit" className="px-5 py-2.5 bg-[#1e2a78] text-white rounded-xl font-bold hover:bg-blue-900 w-full text-center text-sm shadow">
                 Simpan Data SPMB
               </button>
             </div>
          </form>
        )}
      </Modal>

      <ConfirmModal 
        isOpen={deleteConfirm.isOpen} 
        onClose={() => setDeleteConfirm({ isOpen: false, id: null, type: null })} 
        onConfirm={handleDelete} 
        title="Konfirmasi Hapus Data" 
        message="Anda yakin ingin menghapus data ini dari sistem? Tindakan ini tidak dapat dibatalkan." 
      />

      <ConfirmModal 
        isOpen={isLogoutConfirmOpen} 
        onClose={() => setIsLogoutConfirmOpen(false)} 
        onConfirm={() => {
          setIsLogoutConfirmOpen(false);
          onLogout();
        }} 
        title="Konfirmasi Keluar (Logout)" 
        message="Anda yakin ingin mengakhiri sesi administrator dan keluar dari sistem CMS?" 
      />
    </div>
  );
};

// Main Application
export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [viewPost, setViewPost] = useState<ArticleItem | PageItem | null>(null);
  const [selectedTeacherDetail, setSelectedTeacherDetail] = useState<TeacherItem | null>(null);
  
  // Persistent State Hooks with LocalStorage fallback
  const [slides, setSlides] = useState<SlideItem[]>(() => {
    try {
      const saved = localStorage.getItem('rm_slides');
      return saved ? JSON.parse(saved) : INITIAL_SLIDES;
    } catch {
      return INITIAL_SLIDES;
    }
  });

  const [menus, setMenus] = useState<MenuItem[]>(() => {
    try {
      const saved = localStorage.getItem('rm_menus');
      return saved ? JSON.parse(saved) : INITIAL_MENUS;
    } catch {
      return INITIAL_MENUS;
    }
  });

  const [galleries, setGalleries] = useState<GalleryItem[]>(() => {
    try {
      const saved = localStorage.getItem('rm_galleries');
      return saved ? JSON.parse(saved) : INITIAL_GALLERY;
    } catch {
      return INITIAL_GALLERY;
    }
  });

  const [articles, setArticles] = useState<ArticleItem[]>(() => {
    try {
      const saved = localStorage.getItem('rm_articles');
      return saved ? JSON.parse(saved) : INITIAL_ARTICLES;
    } catch {
      return INITIAL_ARTICLES;
    }
  });

  const [pages, setPages] = useState<PageItem[]>(() => {
    try {
      const saved = localStorage.getItem('rm_pages');
      return saved ? JSON.parse(saved) : INITIAL_PAGES;
    } catch {
      return INITIAL_PAGES;
    }
  });

  const [teachers, setTeachers] = useState<TeacherItem[]>(() => {
    try {
      const saved = localStorage.getItem('rm_teachers');
      return saved ? JSON.parse(saved) : INITIAL_TEACHERS;
    } catch {
      return INITIAL_TEACHERS;
    }
  });

  const [teacherHeaderSettings, setTeacherHeaderSettings] = useState<TeacherHeaderSettings>(() => {
    try {
      const saved = localStorage.getItem('rm_teacher_header');
      return saved ? JSON.parse(saved) : INITIAL_TEACHER_HEADER;
    } catch {
      return INITIAL_TEACHER_HEADER;
    }
  });

  const [spmbData, setSpmbData] = useState<SpmbStudent[]>(() => {
    try {
      const saved = localStorage.getItem('rm_spmb');
      return saved ? JSON.parse(saved) : INITIAL_SPMB;
    } catch {
      return INITIAL_SPMB;
    }
  });

  const [spmbSettings, setSpmbSettings] = useState<SpmbSettings>(() => {
    try {
      const saved = localStorage.getItem('rm_spmb_settings');
      return saved ? JSON.parse(saved) : INITIAL_SPMB_SETTINGS;
    } catch {
      return INITIAL_SPMB_SETTINGS;
    }
  });

  const [quickLinks, setQuickLinks] = useState<QuickLinkItem[]>(() => {
    try {
      const saved = localStorage.getItem('rm_quick_links');
      return saved ? JSON.parse(saved) : INITIAL_QUICK_LINKS;
    } catch {
      return INITIAL_QUICK_LINKS;
    }
  });
  
  const [homeContent, setHomeContent] = useState<HomeContent>(() => {
    try {
      const saved = localStorage.getItem('rm_home_content');
      return saved ? JSON.parse(saved) : {
        sambutan: 'Kami dengan bangga mempersembahkan Yayasan Pendidikan Rasman Mulya sebagai wadah pendidikan yang dirancang penuh dedikasi untuk menciptakan masa depan cerah bagi seluruh peserta didik. Kami mengundang seluruh masyarakat dan wali murid untuk mengeksplorasi seluruh program unggulan, fasilitas, dan prestasi membanggakan di portal resmi ini.',
        visi: 'Menghasilkan Pemimpin yang Berdedikasi untuk Agama, Negara, dan Masyarakat.',
        misi: 'Kami bertujuan menyelenggarakan pendidikan yang holistik dalam lingkungan yang memaksimalkan potensi setiap siswa. Membangun karakter moral yang teguh berlandaskan iman dan takwa, serta melatih kecakapan vokasi dan teknologi terkini untuk menghadapi dinamika abad 21.',
        kepsekName: 'Daruna Tarihoran, M.Pd.',
        kepsekImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80'
      };
    } catch {
      return {
        sambutan: 'Kami dengan bangga mempersembahkan Yayasan Pendidikan Rasman Mulya...',
        visi: 'Menghasilkan Pemimpin yang Berdedikasi untuk Agama, Negara, dan Masyarakat.',
        misi: 'Kami bertujuan menyelenggarakan pendidikan yang holistik...',
        kepsekName: 'Daruna Tarihoran, M.Pd.',
        kepsekImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80'
      };
    }
  });

  const [homeStats, setHomeStats] = useState<HomeStat[]>(() => {
    try {
      const saved = localStorage.getItem('rm_home_stats');
      return saved ? JSON.parse(saved) : [
        { id: 1, value: '28', label: 'Tenaga Pendidik & Staf' },
        { id: 2, value: '8.243+', label: 'Alumni Sukses Lulus' },
        { id: 3, value: '1.052', label: 'Peserta Didik Aktif' },
        { id: 4, value: '14', label: 'Klub Ekstrakurikuler' },
      ];
    } catch {
      return [
        { id: 1, value: '28', label: 'Tenaga Pendidik & Staf' },
        { id: 2, value: '8.243+', label: 'Alumni Sukses Lulus' },
        { id: 3, value: '1.052', label: 'Peserta Didik Aktif' },
        { id: 4, value: '14', label: 'Klub Ekstrakurikuler' },
      ];
    }
  });

  const [webSettings, setWebSettings] = useState<WebSettings>(() => {
    try {
      const saved = localStorage.getItem('rm_web_settings');
      return saved ? JSON.parse(saved) : {
        namaWeb: 'EDUZAID THEME',
        namaPerusahaan: 'Yayasan Pendidikan Rasman Mulya',
        owner: 'Admin Yayasan',
        telp: '0898-0440-088',
        whatsapp: '0898-0440-088',
        email: 'info@rasmanmulya.sch.id',
        alamat: 'Jl. Pendidikan Terpadu No. 123, Kabupaten Harapan Sejahtera',
        domain: 'www.rasmanmulya.sch.id',
        logoUrl: '',
        faviconUrl: '',
        footerText: 'Menyelenggarakan pendidikan berkualitas untuk mencetak generasi cerdas, terampil, berkarakter mulia, dan siap menghadapi tantangan dunia kerja dan teknologi global.',
        sosmed: { 
          facebook: 'https://facebook.com', 
          instagram: 'https://instagram.com', 
          youtube: 'https://youtube.com', 
          twitter: 'https://x.com' 
        }
      };
    } catch {
      return {
        namaWeb: 'EDUZAID THEME',
        namaPerusahaan: 'Yayasan Pendidikan Rasman Mulya',
        owner: 'Admin Yayasan',
        telp: '0898-0440-088',
        whatsapp: '0898-0440-088',
        email: 'info@rasmanmulya.sch.id',
        alamat: 'Jl. Pendidikan Terpadu No. 123, Kabupaten Harapan Sejahtera',
        domain: 'www.rasmanmulya.sch.id',
        logoUrl: '',
        faviconUrl: '',
        footerText: 'Menyelenggarakan pendidikan berkualitas untuk mencetak generasi cerdas...',
        sosmed: { facebook: '', instagram: '', youtube: '', twitter: '' }
      };
    }
  });

  // Sync to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('rm_slides', JSON.stringify(slides));
      localStorage.setItem('rm_menus', JSON.stringify(menus));
      localStorage.setItem('rm_galleries', JSON.stringify(galleries));
      localStorage.setItem('rm_articles', JSON.stringify(articles));
      localStorage.setItem('rm_pages', JSON.stringify(pages));
      localStorage.setItem('rm_teachers', JSON.stringify(teachers));
      localStorage.setItem('rm_teacher_header', JSON.stringify(teacherHeaderSettings));
      localStorage.setItem('rm_spmb', JSON.stringify(spmbData));
      localStorage.setItem('rm_spmb_settings', JSON.stringify(spmbSettings));
      localStorage.setItem('rm_quick_links', JSON.stringify(quickLinks));
      localStorage.setItem('rm_home_content', JSON.stringify(homeContent));
      localStorage.setItem('rm_home_stats', JSON.stringify(homeStats));
      localStorage.setItem('rm_web_settings', JSON.stringify(webSettings));
    } catch (e) {
      // quota or sandboxed
    }
  }, [slides, menus, galleries, articles, pages, teachers, teacherHeaderSettings, spmbData, spmbSettings, quickLinks, homeContent, homeStats, webSettings]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPath]);

  // Handler to open full teacher profile page
  const handleOpenTeacherDetail = (teacher: TeacherItem) => {
    setSelectedTeacherDetail(teacher);
    setCurrentPath('teacher_detail');
  };

  // Admin Authentication State (Persistent with localStorage)
  const [adminUser, setAdminUser] = useState<{ username: string; name: string; email: string; role: string } | null>(() => {
    try {
      const saved = localStorage.getItem('rm_admin_session');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const handleAdminLogin = (userData: { username: string; name: string; email: string; role: string }) => {
    setAdminUser(userData);
    try {
      localStorage.setItem('rm_admin_session', JSON.stringify(userData));
    } catch (e) {
      // storage quota or sandboxed
    }
    setCurrentPath('admin');
  };

  const handleAdminLogout = () => {
    setAdminUser(null);
    try {
      localStorage.removeItem('rm_admin_session');
    } catch (e) {
      // storage quota or sandboxed
    }
    setCurrentPath('login');
  };

  const handleUpdateAdminUser = (userData: { username: string; name: string; email: string; role: string; avatar?: string }) => {
    setAdminUser(userData);
    try {
      localStorage.setItem('rm_admin_session', JSON.stringify(userData));
    } catch (e) {
      // storage quota or sandboxed
    }
  };

  // Dedicated Admin Login Route
  if (currentPath === 'login') {
    return (
      <AdminLoginPage 
        onLoginSuccess={handleAdminLogin}
        onBackToHome={() => setCurrentPath('home')}
        webSettings={webSettings}
      />
    );
  }

  // Protected Admin Dashboard Route
  if (currentPath === 'admin') {
    // If not authenticated, guard route and display Login Page!
    if (!adminUser) {
      return (
        <AdminLoginPage 
          onLoginSuccess={handleAdminLogin}
          onBackToHome={() => setCurrentPath('home')}
          webSettings={webSettings}
        />
      );
    }

    return (
      <AdminDashboard 
        setCurrentPath={setCurrentPath} 
        onLogout={handleAdminLogout}
        adminUser={adminUser}
        onUpdateAdminUser={handleUpdateAdminUser}
        webSettings={webSettings} 
        setWebSettings={setWebSettings}
        slides={slides} 
        setSlides={setSlides}
        menus={menus} 
        setMenus={setMenus}
        galleries={galleries} 
        setGalleries={setGalleries}
        articles={articles} 
        setArticles={setArticles}
        pages={pages} 
        setPages={setPages}
        teachers={teachers} 
        setTeachers={setTeachers}
        teacherHeaderSettings={teacherHeaderSettings}
        setTeacherHeaderSettings={setTeacherHeaderSettings}
        spmbData={spmbData} 
        setSpmbData={setSpmbData}
        spmbSettings={spmbSettings}
        setSpmbSettings={setSpmbSettings}
        homeContent={homeContent} 
        setHomeContent={setHomeContent}
        homeStats={homeStats} 
        setHomeStats={setHomeStats}
        quickLinks={quickLinks} 
        setQuickLinks={setQuickLinks}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-white selection:bg-yellow-300 selection:text-slate-900 overflow-x-hidden">
      {/* Main Public Navigation */}
      <Navigation 
        currentPath={currentPath} 
        setCurrentPath={setCurrentPath} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
        webSettings={webSettings} 
        menus={menus} 
        adminUser={adminUser}
        onLogout={handleAdminLogout}
      />
      
      {/* Content Router */}
      <main className="flex-grow bg-slate-50 w-full overflow-hidden">
        {currentPath === 'home' && (
          <Home 
            setCurrentPath={setCurrentPath} 
            setViewPost={setViewPost} 
            onSelectTeacher={handleOpenTeacherDetail}
            slides={slides} 
            articles={articles} 
            teachers={teachers} 
            teacherHeaderSettings={teacherHeaderSettings}
            galleries={galleries} 
            homeContent={homeContent} 
            homeStats={homeStats} 
            quickLinks={quickLinks} 
          />
        )}

        {/* Halaman Detail Profil Guru Secara Penuh */}
        {currentPath === 'teacher_detail' && selectedTeacherDetail && (
          <TeacherDetailView 
            teacher={selectedTeacherDetail} 
            onBack={() => setCurrentPath('teachers')}
            allTeachers={teachers}
            onSelectOtherTeacher={(t) => setSelectedTeacherDetail(t)}
          />
        )}

        {currentPath === 'news' && (
           <div className="container mx-auto px-4 max-w-6xl py-12 min-h-[60vh]">
             <div className="mb-8">
               <span className="bg-yellow-400 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded uppercase tracking-wider">
                 Pusat Informasi
               </span>
               <h2 className="text-3xl font-extrabold text-[#1e2a78] mt-1">Daftar Publikasi Artikel & Berita</h2>
               <p className="text-sm text-slate-500 mt-1">Seluruh arsip artikel, prestasi, dan pengumuman sekolah</p>
             </div>
             
             <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
               {articles.map((news) => (
                 <div 
                   key={news.id} 
                   className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 cursor-pointer hover:shadow-xl transition-all duration-300 flex flex-col" 
                   onClick={() => { setViewPost(news); setCurrentPath('single_post'); }}
                 >
                   <div className="h-48 relative overflow-hidden bg-slate-100">
                     <img src={news.image} alt={news.title} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                     <span className="absolute top-3 left-3 bg-[#1e2a78] text-white text-[10px] font-bold px-3 py-1 rounded-md shadow">
                       {news.category}
                     </span>
                   </div>
                   <div className="p-5 flex-1 flex flex-col justify-between">
                     <div>
                       <h3 className="text-base font-bold text-slate-800 mb-2 leading-snug line-clamp-2 hover:text-[#1e2a78] transition">
                         {news.title}
                       </h3>
                       <p className="text-xs text-slate-500 line-clamp-3 mb-4 leading-relaxed">
                         {news.content ? news.content.replace(/<[^>]*>?/gm, '') : ''}
                       </p>
                     </div>
                     <div className="text-[11px] text-slate-400 font-medium flex items-center pt-3 border-t border-slate-100">
                       <Calendar size={13} className="mr-1.5 text-blue-600"/> {news.date}
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        )}

        {/* Dynamic Static Pages */}
        {['profil_yayasan', 'profil_smp', 'profil_smk', 'visi-misi', 'fasilitas'].includes(currentPath) && (
           <div className="container mx-auto px-4 max-w-5xl py-12 min-h-[60vh]">
              {(() => {
                 const targetSlug = `/${currentPath.replace('_', '-')}`;
                 const pageData = pages.find(p => p.slug === targetSlug || p.slug === `/${currentPath}`);
                 return pageData ? ( 
                   <SinglePostView post={pageData} onBack={() => setCurrentPath('home')} /> 
                 ) : (
                    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-12 text-center max-w-3xl mx-auto">
                       <h2 className="text-3xl font-extrabold text-[#1e2a78] mb-3 capitalize">{currentPath.replace('_', ' ')}</h2>
                       <p className="text-slate-600 text-base leading-relaxed">Informasi halaman ini sedang dalam tahap pembaharuan oleh Humas Yayasan. Silakan kembali lagi nanti.</p>
                       <button onClick={() => setCurrentPath('home')} className="mt-6 px-6 py-2.5 bg-[#1e2a78] text-white font-bold rounded-xl hover:bg-blue-900 transition">
                         Kembali ke Beranda
                       </button>
                    </div>
                 );
              })()}
           </div>
        )}

        {currentPath === 'gallery' && ( 
          <div className="py-4">
            <GallerySection galleries={galleries} />
          </div> 
        )}

        {/* Direktori Tenaga Pendidik dengan Header Kustom & Slider Geser */}
        {currentPath === 'teachers' && ( 
          <div className="py-4">
            <TeachersSection 
              teachers={teachers} 
              headerSettings={teacherHeaderSettings}
              onSelectTeacher={handleOpenTeacherDetail} 
              isStandalonePage={true}
            />
          </div> 
        )}

        {/* Halaman SPMB Online dengan Rincian Biaya & Live Counter Pendaftar */}
        {currentPath === 'spmb' && ( 
          <SpmbPagePublic 
            settings={spmbSettings} 
            applicantCount={spmbData.length}
            onSubmit={(newStudent) => setSpmbData([newStudent, ...spmbData])} 
          /> 
        )}
      </main>

      {/* Footer With Transparent Logo (No border, No stroke, No box) */}
      <footer className="bg-slate-950 text-slate-300 py-14 mt-auto border-t-[8px] border-[#1e2a78]">
        <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-5 cursor-pointer" onClick={() => setCurrentPath('home')}>
              <div className="h-12 w-auto flex items-center justify-center bg-transparent border-0 ring-0 shadow-none outline-none p-0">
                {webSettings.logoUrl ? (
                  <img 
                    src={webSettings.logoUrl} 
                    alt="Logo" 
                    className="h-12 w-auto max-h-12 object-contain bg-transparent border-0 ring-0 shadow-none" 
                  />
                ) : (
                  <span className="text-3xl font-black text-yellow-400 tracking-wider">RM</span>
                )}
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white leading-tight">{webSettings.namaPerusahaan}</h3>
                <span className="text-yellow-400 text-xs font-semibold">{webSettings.domain}</span>
              </div>
            </div>
            <p className="text-xs md:text-sm mb-6 leading-relaxed max-w-md text-slate-400">
              {webSettings.footerText}
            </p>
            <div className="flex space-x-3 text-white">
              <a href={webSettings.sosmed?.facebook || '#'} target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-[#1877F2] p-2 rounded-xl transition" title="Facebook">
                <Facebook size={16} fill="currentColor" strokeWidth={0} />
              </a>
              <a href={webSettings.sosmed?.instagram || '#'} target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-[#E4405F] p-2 rounded-xl transition" title="Instagram">
                <Instagram size={16} />
              </a>
              <a href={webSettings.sosmed?.youtube || '#'} target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-[#FF0000] p-2 rounded-xl transition" title="YouTube">
                <Youtube size={16} fill="currentColor" strokeWidth={0} />
              </a>
              <a href={webSettings.sosmed?.twitter || '#'} target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-[#1DA1F2] p-2 rounded-xl transition" title="Twitter/X">
                <Twitter size={16} fill="currentColor" strokeWidth={0} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 border-b border-slate-800 pb-2 inline-block text-sm">
              Tautan Navigasi Cepat
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => setCurrentPath('profil_yayasan')} className="hover:text-yellow-400 transition flex items-center">
                  <ChevronRight size={14} className="mr-1.5 text-yellow-500"/> Profil Yayasan
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPath('news')} className="hover:text-yellow-400 transition flex items-center">
                  <ChevronRight size={14} className="mr-1.5 text-yellow-500"/> Berita & Pengumuman
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPath('spmb')} className="hover:text-yellow-400 transition flex items-center">
                  <ChevronRight size={14} className="mr-1.5 text-yellow-500"/> Pendaftaran SPMB Online
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPath('gallery')} className="hover:text-yellow-400 transition flex items-center">
                  <ChevronRight size={14} className="mr-1.5 text-yellow-500"/> Galeri Kegiatan Siswa
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPath('teachers')} className="hover:text-yellow-400 transition flex items-center">
                  <ChevronRight size={14} className="mr-1.5 text-yellow-500"/> Direktori Dewan Pendidik
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 border-b border-slate-800 pb-2 inline-block text-sm">
              Kontak & Alamat Kampus
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start leading-snug">
                <MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0 text-yellow-400" /> 
                <span>{webSettings.alamat}</span>
              </li>
              <li className="flex items-center">
                <Phone size={15} className="mr-2 text-yellow-400 shrink-0" /> 
                <span>{webSettings.telp}</span>
              </li>
              <li className="flex items-center">
                <Mail size={15} className="mr-2 text-yellow-400 shrink-0" /> 
                <span>{webSettings.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-6xl mt-12 pt-6 border-t border-slate-900 text-xs font-medium flex flex-col md:flex-row justify-between items-center text-slate-500 gap-2">
          <p>&copy; {new Date().getFullYear()} {webSettings.namaPerusahaan}. Hak Cipta Dilindungi.</p>
          <div className="flex items-center space-x-2">
            <p>
              Dikelola oleh <span className="text-slate-300 font-semibold">{webSettings.owner}</span> • Sistem Informasi Sekolah Terpadu
            </p>
            <button 
              onClick={() => setCurrentPath('login')} 
              className="text-slate-600 hover:text-yellow-400 p-1 rounded transition" 
              title="Akses Login Administrator"
            >
              <Lock size={12} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
