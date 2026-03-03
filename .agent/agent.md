# Portofolio Gusnaldi Kristiadi Syah — Planning Dokumen

## 🎯 Gambaran Umum Proyek

Website portofolio personal untuk **Gusnaldi Kristiadi Syah**, seorang pustakawan yang juga memanfaatkan teknologi Agentic AI. Dibangun sebagai **static frontend** yang siap di-deploy ke Vercel (tanpa backend).

---

## 🎨 Arah Desain: Neo Brutalism

### Filosofi
Neo Brutalism menggabungkan elemen desain brutalis (border tebal, shadow kotak kasar, kontras tinggi) dengan tipografi modern. Gaya ini dipilih untuk mencerminkan karakter yang **berani, jujur, dan tidak konvensional** — selaras dengan profil Gusnaldi yang menggabungkan dunia perpustakaan tradisional dengan teknologi AI mutakhir.

### Palet Warna (Neo Brutalism Signature)
| Elemen | Nilai |
|--------|-------|
| **Latar Utama** | `#FEFAE0` (Cream/Off-White) |
| **Aksen Utama** | `#FF6B35` (Orange Brutal) |
| **Aksen Sekunder** | `#4ECDC4` (Teal) |
| **Teks** | `#1A1A1A` (Near Black) |
| **Border** | `#1A1A1A` (2-4px solid, tegas) |
| **Shadow** | `4px 4px 0px #1A1A1A` (box-shadow kotak) |
| **Highlight** | `#FFE66D` (Yellow) |

### Tipografi
| Peran | Font | Alasan |
|-------|------|--------|
| **Heading Display** | `Space Grotesk / Syne` | Karakter kuat, geometric |
| **Heading Section** | `DM Mono` atau `Instrument Serif` | Kontras brutal ↔ serif |
| **Body** | `Outfit` | Readable, modern |

> *(Font dimuat dari Google Fonts — tidak ada aset font lokal)*

### Ciri Khas Visual
- Border tebal `2–4px solid #1A1A1A` di setiap card/kotak
- `box-shadow: 4px 4px 0px #1A1A1A` (shadow kotak, bukan blur)
- Hover state: shadow bergerak → `2px 2px 0px` (transform efek push)
- Latar belakang dengan pola titik/grid tipis (dot pattern CSS)
- Badge/label menggunakan warna kuning atau oranye mencolok
- Elemen yang sengaja "tidak sempurna" — sedikit asymmetry

---

## 🏗️ Arsitektur Teknis

### Stack
- **Framework:** Next.js 15 (App Router)
- **Bahasa:** TypeScript
- **Styling:** Tailwind CSS v4
- **Komponen:** neobrutalism-components (shadcn-based: Sidebar, Card, Badge, Tooltip)
- **Animasi:** Framer Motion (untuk staggered reveal, hover)
- **Ikon:** Lucide React
- **Deploy Target:** Vercel (static export / SSG)

### Struktur Direktori
```
portofolio/
├── app/
│   ├── layout.tsx          # Root layout + SidebarProvider
│   ├── page.tsx            # Entry — redirect ke #hero
│   └── globals.css         # Token warna, font, animasi
├── components/
│   ├── layout/
│   │   ├── AppSidebar.tsx  # Sidebar navigasi utama
│   │   └── SidebarNav.tsx  # Item nav + ikon + aktif state
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectSection.tsx
│   │   ├── PublicationSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── TrainingSection.tsx
│   │   └── SkillsSection.tsx
│   └── ui/
│       ├── BrutalCard.tsx  # Card dengan border+shadow brutal
│       ├── BrutalBadge.tsx # Badge warna mencolok
│       └── TimelineItem.tsx # Untuk pengalaman & pendidikan
├── lib/
│   └── data.ts             # Semua konten CV (typed)
└── public/
    └── (aset gambar jika ada)
```

---

## 📐 Layout Utama

### Desktop (≥ 1024px)
```
┌──────────────┬──────────────────────────────────────────┐
│  SIDEBAR     │  CONTENT AREA (scrollable)               │
│  (fixed)     │                                          │
│  240px       │  ┌──────────────────────────────────┐    │
│              │  │  Section: Hero                   │    │
│  [Avatar]    │  ├──────────────────────────────────┤    │
│  Gusnaldi    │  │  Section: Pengalaman             │    │
│              │  ├──────────────────────────────────┤    │
│  ● Profil    │  │  Section: Pendidikan             │    │
│  ○ Pengalaman│  ├──────────────────────────────────┤    │
│  ○ Pendidikan│  │  Section: Pelatihan              │    │
│  ○ Pelatihan │  ├──────────────────────────────────┤    │
│  ○ Keahlian  │  │  Section: Keahlian               │    │
│  ○ Proyek    │  ├──────────────────────────────────┤    │
│  ○ Publikasi │  │  Section: Proyek                 │    │
│              │  ├──────────────────────────────────┤    │
│  [Kontak]    │  │  Section: Publikasi              │    │
└──────────────┴──────────────────────────────────────────┘
```

### Mobile (< 1024px)
- Sidebar menjadi **Sheet/Drawer** yang muncul dari kiri (hamburger menu di top bar)
- Top bar tetap fixed dengan nama + tombol menu
- Konten full-width dengan padding memadai

---

## 📋 Rencana Tiap Section

### 1. `#hero` — Header / Profil
**Komponen:** Full-viewport section, layout asimetris  
**Konten:**
- Nama besar sebagai heading utama (`H1`)
- Tagline singkat (mis: *"Pustakawan × AI Builder"*)
- Foto profil bergaya brutal (border tebal + shadow kotak)
- Badge: lokasi, email, telepon, Scholars (semua bisa diklik)
- Dekorasi: kotak-kotak warna offset di background, pola titik

---

### 2. `#pengalaman` — Experience
**Komponen:** Timeline vertikal  
**Konten:** 2 posisi kerja + detail bullet poin  
**Style:** Setiap posisi dalam `BrutalCard` dengan border oranye di kiri (timeline line), badge periode

---

### 3. `#pendidikan` — Education
**Komponen:** Single card besar  
**Konten:** UNDIP + IPK + Skripsi + Mata Kuliah  
**Style:** Highlight IPK dengan badge kuning besar

---

### 4. `#pelatihan` — Training & Certifications
**Komponen:** Akordion atau list card  
**Konten:** Perpusnas 152 JPL + Bangkit Academy  
**Style:** Timeline kecil, badge "Memuaskan"

---

### 5. `#keahlian` — Skills
**Komponen:** Grid tag/chip + kategori  
**Konten:** Teknikal, Bahasa, Penelitian, Sertifikat  
**Style:** Chip dengan warna kategori berbeda, animasi hover pop

---

### 6. `#proyek` — Projects
**Komponen:** Grid 2 kolom (desktop), 1 kolom (mobile)  
**Konten:** SUAKA + Digitalisasi Pangkalan Data  
**Style:** `BrutalCard` dengan aksen teal, chip teknologi (badge), link SUAKA → `lib.fkominfo.uniga.ac.id`  
**Gambar:** Setiap card menampilkan screenshot dengan **carousel image** (maks 3 per proyek). Letakkan file di:
- `public/projects/suaka-1.jpg`, `suaka-2.jpg`, `suaka-3.jpg`
- `public/projects/digitalisasi-1.jpg`, `digitalisasi-2.jpg`, `digitalisasi-3.jpg`

> Jika hanya 1 gambar, tombol carousel disembunyikan otomatis. Selama screenshot belum tersedia, card menampilkan placeholder bergaya brutalis.

---

### 7. `#publikasi` — Publications
**Komponen:** Kartu publikasi dengan detail jurnal/prosiding  
**Konten:** 2 publikasi (JIP 2025 + ICOCAS 2024)  
**Style:** Card dengan badge "Penulis Utama", chip penerbit, ekspansi deskripsi

---

## 🧩 Komponen Sidebar Detail

Sidebar menggunakan `neobrutalism-components/sidebar` berbasis shadcn:  
- **Header:** Avatar + Nama + Jabatan singkat  
- **Navigation Links:** Setiap section dengan ikon Lucide yang relevan
  | Label | Ikon |
  |-------|------|
  | Profil | `User` |
  | Pengalaman | `Briefcase` |
  | Pendidikan | `GraduationCap` |
  | Pelatihan | `Award` |
  | Keahlian | `Wrench` |
  | Proyek | `FolderOpen` |
  | Publikasi | `BookOpen` |
- **Footer:** Tombol kontak (email + telepon), tautan Scholars
- **Collapsible:** Di mobile, sidebar runtuh menjadi sheet drawer
- **Active State:** Link yang sedang terlihat di viewport diberi highlight aksen oranye (IntersectionObserver)

---

## ⚡ Fitur Teknikal

| Fitur | Implementasi |
|-------|-------------|
| Smooth scroll navigation | `scroll-behavior: smooth` + anchor hash |
| Active section tracking | `IntersectionObserver` → update sidebar |
| Staggered entrance | Framer Motion `AnimatePresence` + `variants` |
| Responsive sidebar | `useSidebar()` hook dari neobrutalism-components |
| Dark mode | **Tidak direncanakan** (Neo Brutalism lebih cocok light/cream) |
| SEO | Next.js `metadata` API, semantic HTML |
| Performance | Static export (`output: 'export'`), font preload |

---

## 🚀 Deployment

- **Platform:** Vercel
- **Mode:** Static Export (`next.config.ts` → `output: 'export'`)
- **Custom Domain:** Opsional
- **Base URL:** Sesuai domain Vercel default

---

## ✅ Keputusan Final (Dikonfirmasi)

| # | Topik | Keputusan |
|---|-------|-----------|
| 1 | **Foto Profil** | **Ada** — foto profil akan dipakai di Hero & Sidebar. Letakkan di `public/foto-profil.jpg` |
| 2 | **Link SUAKA** | **Boleh** — `lib.fkominfo.uniga.ac.id` dipakai sebagai link live |
| 3 | **Download CV** | **Tidak perlu** — tombol download CV dihapus dari Hero |
| 4 | **Bahasa** | **Bahasa Indonesia** saja — semua teks dalam Bahasa Indonesia |
| 5 | **Kontak** | **Info saja** — email, telepon, Scholars sebagai link yang bisa diklik (mailto/tel) |

---

## 📅 Urutan Pengerjaan (Build Order)

1. [ ] Setup proyek Next.js 15 + Tailwind v4 + neobrutalism-components
2. [ ] Konfigurasi token warna & font di `globals.css`
3. [ ] Buat `lib/data.ts` — semua data CV
4. [ ] Bangun `AppSidebar` + layout root
5. [ ] Section Hero
6. [ ] Section Pengalaman + Timeline
7. [ ] Section Pendidikan
8. [ ] Section Pelatihan
9. [ ] Section Keahlian
10. [ ] Section Proyek + Card grid
11. [ ] Section Publikasi
12. [ ] IntersectionObserver untuk active sidebar state
13. [ ] Animasi Framer Motion
14. [ ] Responsif mobile (sidebar → sheet)
15. [ ] SEO metadata
16. [ ] Deploy ke Vercel
