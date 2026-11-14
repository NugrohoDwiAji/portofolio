export const portfolioData = {
  personalInfo: {
    name: "Nugroho Dwi Aji",
    shortName: "Nugroho",
    title: "IT Programmer",
    company: "Universitas Bumigora",
    companyUrl: "https://ubg.ac.id/",
    greeting: "Halo, Saya",
    tagline: "Portofolio ini menampilkan proyek dan kontribusi saya sebagai pengembang di bidang teknologi.",
    avatar: "/dist/img/nugrohodwiaji.png",
    location: "Lombok Utara, Indonesia",
    email: "nugrohodwiaji@gmail.com",
    phone: "+6281803160359",
    phoneDisplay: "+62 818-0316-0359",
    socialLinks: {
      whatsapp: "https://wa.me/6281803160359",
      phone: "tel:+6281803160359",
      email: "mailto:nugrohodwiaji@gmail.com",
      linkedin: "https://www.linkedin.com/in/nugroho-dwi-aji-",
      github: "https://github.com/nugrohodwiaji",
      instagram: "https://www.instagram.com/nugrohodwiaji",
      youtube: "#",
      twitter: "#"
    }
  },

  about: {
    title: "IT Programmer & Lulusan Teknologi Informasi",
    description: `Saya adalah seorang IT Programmer di Universitas Bumigora dengan pengalaman dalam pengembangan solusi perangkat lunak berbasis web. Sebagai alumni Teknologi Informasi Universitas Bumigora (2021-2025), fokus utama saya adalah merancang dan mengimplementasikan sistem yang efisien, terukur, dan stabil menggunakan full-stack development.`,

    specializations: {
      intro: `Sebagai Full Stack Web Developer, spesialisasi saya ada pada pengembangan sistem menggunakan TypeScript dan PHP menggunakan framework NextJs dan Laravel. Keahlian utama saya meliputi:`,
      skills: [
        {
          category: "Backend",
          items: ["PHP (Laravel)","Node.js, TypeScript, JavaScript (Nextjs, ExpressJs)" , "RESTfull API Development"]
        },
        {
          category: "Database",
          items: ["MySQL / MariaDB", "PostgreSQL", "MongoDB", "Perancangan Skema & Normalisasi", "Query Optimization"]
        },
        {
          category: "Frontend",
          items: ["HTML5, CSS3, JavaScript (ES6+)", "Tailwind CSS & Bootstrap", "React.js & Modern UI"]
        },
        {
          category: "Metodologi & Tools",
          items: ["Clean Code & SDLC", "Git / GitHub Version Control", "Postman & API Testing"]
        }
      ]
    },

    contributions: {
      title: "Kontribusi Profesional",
      description: `Saya bertanggung jawab penuh atas siklus pengembangan sistem informasi internal perusahaan. Kontribusi utama saya mencakup pembuatan Sistem Administrasi Operasional dan Management server, Sistem Pelatihan E-Learning, Sistem Monitoring dan Dashboard, serta pengembangan Website Self-Service dan Company Profile. Semua solusi tersebut bertujuan meningkatkan efisiensi operasional dan mendukung pengambilan keputusan berbasis data.`
    }
  },

  projects: [
    {
      id: "upd",
      title: "UPD Lombok Tengah",
      category: "Web App",
      image: "/dist/img/portfolio/updlomboktengah.png",
      link: "https://updlomboktengah.id/",
      description: "UPD Lombok Tengah adalah sistem informasi internal yang dirancang untuk mengelola data operasional dan administrasi di Unit Pengelola Darah Lombok Tengah. Sistem ini memfasilitasi pengelolaan data pendonor, stok darah, dan laporan operasional secara efisien. Dengan antarmuka yang intuitif, sistem ini memungkinkan staf untuk mengakses informasi penting dengan cepat, meningkatkan koordinasi antar departemen dan pendonor",
      tags: ["Next.js", "MySQL", "Tailwind CSS", "Server Actions"]
    },
    {
      id: "oneline",
      title: "OneLine",
      category: "Web App",
      image: "/dist/img/portfolio/oneline.png",
      link: "https://oneline.id/",
      description: "OneLine adalah platform digital dari event organaizer yang dirancang untuk memfasilitasi kompetisi di bidang olahraga. platform ini memungkinkan pengguna untuk mendaftar, mengelola, dan mengikuti berbagai kompetisi olahraga secara online. Dengan fitur-fitur seperti pendaftaran peserta, manajemen jadwal pertandingan, dan pelaporan hasil secara real-time, OneLine bertujuan untuk meningkatkan pengalaman peserta dan penyelenggara dalam mengelola kompetisi olahraga.",
      tags: ["Next.js", "MySQL", "Tailwind CSS", "Server Actions"]
    },
    {
      id: "tapaknet",
      title: "tapakNet ERP",
      category: "Web App",
      image: "/dist/img/portfolio/tapaknet.png",
      link: "",
      description: "tapakNet adalah sistem manajemen operasional dan finansial untuk bisnis RT/RW Net. Dilengkapi dengan modul akuntansi kas, pembukuan keuangan, manajemen inventaris barang, dan monitoring topologi jaringan. Sistem ini juga memiliki dukungan Progressive Web App (PWA) yang memudahkan akses instalasi di perangkat mobile maupun desktop, serta dibangun menggunakan Next.js dan MySQL.",
      tags: ["Next.js", "MySQL", "PWA", "Tailwind CSS"]
    }
      
  ],

  education: [
    {
      id: "bhayangkari",
      institution: "SMA Negeri 1 Tanjung",
      degree: "Jurusan MIPA",
      period: "2018 - 2021",
      logo: "/dist/img/pendidikan/logo-smantan.png",
      url: "https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/EA622CDF-0C1C-44DB-A6D4-6D6E989FEC85",
      description: "Fokus pada pemahaman matematika terapan, logika algoritma, dan dasar sains."
    },
    {
      id: "bumigora",
      institution: "Universitas Bumigora",
      degree: "S1 Teknologi Informasi",
      period: "2021 - 2025",
      logo: "/dist/img/pendidikan/ubg-logo.png",
      url: "https://bumigora.ac.id/",
      description: "Mempelajari rekayasa perangkat lunak, perancangan database, analisis sistem bisnis, dan pemrograman web."
    },
    {
      id: "BRIDA School Academy",
      institution: "Kelas Pemrograman BRIDA School Academy",
      degree: "Fullstack Typescript & UI/UX Design",
      period: "Juli - Desember 2023",
      logo: "/dist/img/pendidikan/bridantb-logo.jpg",
      url: "https://brida.ntbprov.go.id/",
      description: "BRIDA School Academy adalah program pelatihan intensif yang diadakan oleh BRIDA School Academy, yang fokus pada pengembangan aplikasi web fullstack menggunakan TypeScript, Next.js, dan prinsip desain UI/UX modern."
    },
    {
      id: "MSIB BATCH 6",
      institution: "Independent Study Program Batch 6 on Web Development at Infinte Learning",
      degree: "Fullstack JavaScript (Express.js & React.js) & UI/UX Design",
      period: "February 2024 to June 2024",
      logo: "/dist/img/pendidikan/infinite-logo.png",
      url: "https://course.infinitelearning.id/",
      description: "MSIB (Magang dan Studi Independen Bersertifikat) adalah program yang diselenggarakan oleh Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi Republik Indonesia. Program ini bertujuan untuk memberikan pengalaman praktis dan pembelajaran mendalam dalam pengembangan web, termasuk penguasaan teknologi modern, praktik terbaik dalam pengembangan perangkat lunak, dan kolaborasi tim."
    },
  ],

  experience: [
    {
      id: "pln",
      company: "PT PLN (Persero) Unit Induk Wilayah Nusa Tenggara Barat",
      role: "Server & Web Developer",
      type: "Full-time",
      period: "2024",
      logo: "/dist/img/pengalaman/logo-pln.webp",
      url: "https://www.pln.co.id/ntb",
      description: "Bertanggung jawab dalam pengembangan dan pemeliharaan sistem internal perusahaan, termasuk manajemen server, pengembangan aplikasi web, dan integrasi data untuk mendukung operasional PLN di wilayah Nusa Tenggara Barat."
    },
    {
      id: "ubg",
      company: "Universitas Bumigora",
      role: "Web Developer",
      type: "Full-time / Kontrak",
      period: "2025 - sekarang",
      logo: "/dist/img/pengalaman/ubg-logo.png",
      url: "https://ubg.ac.id/",
      description: "Mengembangkan dan memelihara sistem informasi internal universitas, termasuk portal akademik, sistem manajemen data mahasiswa, dan aplikasi web untuk mendukung operasional kampus."
    }
  ],

  blogPosts: [
    {
      id: "artikel",
      title: "Analisis Dan Implementasi Algoritma Bcrypt Dengan Affine Cipher Untuk Pengamanan Password Pada Aplikasi Web",
      category: "Cybersecurity",
      image: "/dist/img/blog/artikel1.png",
      url: "https://ejournal.uin-suka.ac.id/saintek/cybersecurity/article/view/5076",
      excerpt: "Teknologi informasi saat ini semakin berkembang dengan berkembangnya teknologi tersebut membuat segala kalangan dapat mengakses aplikasi web, hal tersebut menjadikan keamanan pada aplikasi web harus di perhatikan. Salah satu teknik yang dapat digunakan sebagai pengamanan pada aplikasi web yaitu menerapkan algoritma kriptografi pada password. Penelitian ini bertujuan untuk menganalisis dan mengimplementasi algoritma kriptografi bcrypt dengan affine cipher yang akan di modifikasi dengan menggunakan algoritma ROT13 untuk pengamanan password pada aplikasi web. Penelitian dilakukan dengan menggunakan metode pengembangan sistem yaitu Secure Sistem Development Life Cycle (SSDLC) yang meliputi Reqirements analysis, Desain, Development, dan Testing menggunakan bruteforce dan sniffing. Hasil penelitian ini menunjukkan bahwa analisis dan implementasi algoritma bcrypt dengan affine cipher untuk pengamanan password pada aplikasi web sesuai rancangan. Uji coba menunjukkan bahwa dengan menerapkan algoritma bcrypt dan affine cipher yang telah dimodifikasi menggunakan algoritma ROT13 akan memperlambat dari serangan bruteforce. Sedangkan implementasi pada pengiriman kredensial dari frontend menuju backend menunjukkan kredensial tidak dapat dilakukan serangan sniffing menggunakan wireshark. Kesimpulan dari penelitian ini bahwa menerapkan algoritma kriptografi bcrypt dan affine cipher yang telah dimodifikasi menggunakan algoritma ROT13 akan menambahkan lapisan keamanan pada sistem yang dapat menghambat serangan bruteforce dan menghentikan serangan sniffing. Penelitian ini juga menyarankan penggunaan kriptografi bcrypt dan affine cipher yang telah dimodifikasi menggunakan algoritma ROT13 sebagai lapisan pengamanan pada sistem.",
      date: "19-06-2025",
      readTime: "10 menit baca"
    },
    {
      id: "sertifikat-msib-batch-6",
      title: "Sertifikat Kelulusan MSIB Batch 6: Web Development - Infinite Learning",
      category: "Sertifikat",
      image: "/dist/sertif/sertifikat-msib.png",
      url: "https://course.infinitelearning.id/",
      certificateUrl: "/dist/sertif/MSIB_Batch_6_Nugroho_Dwi_Aji.pdf",
      excerpt: "Sertifikat kelulusan Program Magang dan Studi Independen Bersertifikat (MSIB) Batch 6 pada bidang Web Development di Infinite Learning (Kemendikbudristek). Mencakup kompetensi Front End Development (React.js), Back End Development (Node.js & MySQL), UI/UX Design, Cloud Computing, dan Cybersecurity.",
      content: `Sertifikat resmi kelulusan Program Magang dan Studi Independen Bersertifikat (MSIB) Batch 6 pada bidang Web Development di Infinite Learning, diselenggarakan oleh Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi Republik Indonesia (periode Februari 2024 - Juni 2024).

Kompetensi Utama & Hasil Penilaian:
• Front End Development (Nilai: 92.8) - Pemahaman dan implementasi arsitektur UI menggunakan React JS, React Hooks, manajemen state logic, dan desain antarmuka sesuai kebutuhan pengguna.
• Back End Development (Nilai: 92.9) - Perancangan backend server, RESTful API, integrasi basis data MySQL, query optimization, dan controller business logic.
• Cloud Computing (Nilai: 90) - Teori & implementasi arsitektur cloud, server/desktop, scaling up/out, load balancing, microservices, dan event-driven architectures.
• Cybersecurity (Nilai: 92) - Pemahaman konsep keamanan siber, identifikasi kerentanan software/hardware, mitigasi serangan siber, dan proteksi jaringan serta integritas data.
• UI/UX Design (Nilai: 87 & 85) - Riset pengguna, perancangan User Journey Map, wireframing, dan desain visual antarmuka modern.
• Project Management & Soft Skills (Nilai: 90 - 91.22) - Manajemen proyek menggunakan kerangka kerja Agile (SCRUM), komunikasi tim, dan kolaborasi profesional.`,
      date: "01-07-2024",
      readTime: "Kredensial Resmi"
    },
    {
      id: "sertifikat-brida-school-academy",
      title: "Sertifikat Pelatihan BRIDA School Academy: Fullstack TypeScript & UI/UX Design",
      category: "Sertifikat",
      image: "/dist/sertif/sertifikat-bsa.png",
      url: "https://brida.ntbprov.go.id/",
      certificateUrl: "/dist/sertif/Peserta_BSA_Nugroho_Dwi_Aji.pdf",
      excerpt: "Sertifikat pelatihan intensif Kelas Pemrograman BRIDA School Academy oleh Badan Riset dan Inovasi Daerah (BRIDA) Provinsi NTB. Menguasai keahlian Fullstack TypeScript (React, Next.js, Prisma, REST API, Web Security) serta perancangan UI/UX Design modern dengan proyek akhir 'Airku'.",
      content: `Sertifikat resmi kelulusan pelatihan intensif Kelas Pemrograman BRIDA School Academy (BSA) yang diselenggarakan oleh Badan Riset dan Inovasi Daerah (BRIDA) Provinsi Nusa Tenggara Barat (periode Juli - Desember 2023, total 60 jam pelajaran).

Kompetensi Utama & Hasil Pelatihan:
• Fullstack TypeScript - Pemrograman TypeScript modern, interaktivitas antarmuka dengan React & Tailwind CSS, implementasi API routes Next.js, pembuatan RESTful API, integrasi database menggunakan Prisma ORM, sanitasi input serta pengamanan terhadap serangan XSS & CSRF, sistem autentikasi token, dan deployment produksi.
• UI/UX Design - Pemahaman konsep UI/UX, penerapan metode Design Thinking, evaluasi heuristik, Atomic Design, User Flow, Low-Fidelity Wireframe, Style Guide, Auto-Layout komponen, Prototyping interaktif, Usability Testing, UX Writing, serta User Journey Map.
• Proyek Akhir: Aplikasi 'Airku' - Platform web informasi ketersediaan air bersih di daerah serta fitur pelaporan dan donasi air bersih untuk memudahkan masyarakat.
• Prestasi: Poin Teladan Kehadiran 91.67 yang mencerminkan kedisiplinan dan keaktifan tinggi selama pelatihan.`,
      date: "26-12-2023",
      readTime: "Kredensial Resmi"
    }
  ]
};
