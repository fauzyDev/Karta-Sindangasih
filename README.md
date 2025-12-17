# Karang Taruna Dusun Sindang Asih

Website resmi Karang Taruna Dusun Sindang Asih - Platform digital untuk organisasi kepemudaan dusun.

## 🚀 Teknologi yang Digunakan

- **Framework**: Next.js 15 dengan App Router
- **Bahasa**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React, @tabler/icons-react

## 📁 Struktur Proyek

```
src/
├── app/
│   ├── page.tsx              # Halaman utama
│   ├── layout.tsx            # Layout root
│   ├── metadata.ts           # SEO metadata
│   └── globals.css           # Global styles
├── components/
│   ├── Navbar.tsx            # Navigation bar dengan dropdown
│   ├── Hero.tsx              # Hero section
│   ├── AnnouncementsPreview.tsx    # Preview pengumuman
│   ├── NewsPreview.tsx       # Preview berita/kegiatan
│   ├── AboutSection.tsx      # Tentang kami
│   ├── Programs.tsx          # Program unggulan
│   ├── GalleryPreview.tsx    # Preview galeri
│   ├── LeaderPreview.tsx     # Preview pengurus
│   ├── ContactSection.tsx    # Kontak
│   ├── Footer.tsx            # Footer
│   └── ui/                   # shadcn/ui components
└── lib/
    └── db.ts                 # Database connection
```

## 🎨 Fitur Utama

### 0. Navigation Bar
- Sticky navbar dengan logo Karang Taruna
- Menu navigasi lengkap (Beranda, Tentang, Program, Kegiatan, dll)
- Dropdown menu untuk sub-kategori
- Mobile responsive dengan hamburger menu
- Tombol CTA "Gabung Sekarang"

### 1. Hero Section
- Heading besar dengan nama dusun
- Subheading tentang peran karang taruna
- Dua tombol CTA utama
- Background gradient yang elegan

### 2. Pengumuman Terbaru
- 3 card pengumuman placeholder
- Informasi tanggal dan judul
- Desain minimalis dengan shadow ringan

### 3. Kegiatan Terbaru
- 3 card berita dengan gambar placeholder
- Informasi lengkap (judul, tanggal, excerpt)
- Tombol "Baca Selengkapnya"

### 4. Tentang Kami
- Paragraf misi dan tujuan
- 4 fitur unggulan dengan icon
- Penjelasan singkat setiap fitur

### 5. Program Unggulan
- 4 card program (Bakti Sosial, Kebersihan, Olahraga, UMKM)
- Icon dan warna yang berbeda untuk setiap program
- Deskripsi singkat setiap program

### 6. Galiery Preview
- Grid 6 foto placeholder
- Tombol CTA untuk melihat galeri lengkap
- Hover effects yang menarik

### 7. Struktur Pengurus
- Preview ketua dengan foto placeholder
- Informasi kontak
- Tombol untuk melihat pengurus lengkap

### 8. Kontak
- WhatsApp dan Instagram links
- Alamat dan email
- Design minimalis dan modern

### 9. Footer
- Copyright information
- Link ke halaman admin
- Design yang clean

## 🛠️ Development

### Install Dependencies
```bash
bun install
```

### Run Development Server
```bash
bun dev
```

### Build for Production
```bash
bun run build
```

### Run Linting
```bash
bun run lint
```

## 📱 Responsive Design

Website ini dirancang dengan pendekatan mobile-first:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🎨 Design System

### Warna Utama
- **Primary**: Emerald (emerald-600)
- **Background**: White & Gray shades
- **Accent**: Teal, Cyan untuk gradients

### Typography
- **Font**: Geist Sans & Geist Mono
- **Headings**: Bold dengan hierarchy yang jelas
- **Body**: Regular dengan line-height yang baik

### Spacing
- Menggunakan Tailwind spacing system
- Consistent padding dan margin
- Responsive gaps

## 🔧 Customization

### Mengubah Nama Dusun
1. Edit `src/components/Hero.tsx` - ubah "Sindang Asih"
2. Edit `src/components/Footer.tsx` - ubah copyright text
3. Edit `src/app/metadata.ts` - ubah SEO metadata

### Mengubah Warna Tema
1. Edit class `bg-emerald-600` di semua komponen
2. Sesuaikan hover states dan variants
3. Update gradient colors

### Menambahkan Data Real
1. Siapkan database schema di `prisma/schema.prisma`
2. Run `bun run db:push`
3. Update komponen dengan data dari database
4. Buat API routes untuk dynamic content

## 📄 Lisensi

© 2025 Karang Taruna Dusun Sindang Asih. Semua hak dilindungi.

## 🤝 Kontribusi

Website ini dikembangkan untuk kepentingan komunitas. Untuk kontribusi atau saran, silakan hubungi pengurus Karang Taruna Dusun Sindang Asih.