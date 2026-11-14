import React from 'react'
import {
  CheckCircle2,
  Server,
  Database,
  Layout,
  GitBranch
} from 'lucide-react'
import {
  WhatsAppIcon,
  PhoneIcon,
  MailIcon,
  LinkedInIcon,
  GithubIcon,
  InstagramIcon
} from './SocialIcons'

export default function About({ about, personalInfo }) {
  const getSkillIcon = (cat) => {
    switch (cat.toLowerCase()) {
      case 'backend':
        return <Server className="w-4 h-4 text-slate-700 dark:text-slate-300" />
      case 'database':
        return <Database className="w-4 h-4 text-slate-700 dark:text-slate-300" />
      case 'frontend':
        return <Layout className="w-4 h-4 text-slate-700 dark:text-slate-300" />
      default:
        return <GitBranch className="w-4 h-4 text-slate-700 dark:text-slate-300" />
    }
  }

  return (
    <section id="about" className="pt-24 pb-24 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
            Tentang Saya
          </p>
          <h2 className="font-extrabold text-slate-900 dark:text-white text-3xl sm:text-4xl tracking-tight">
            Profil & Keahlian Profesional
          </h2>
        </div>

        {/* 4-Box Clean Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Biografi Singkat */}
          <div className="bg-white dark:bg-slate-900 p-8 sm:p-9 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition duration-200 flex flex-col justify-between">
            <div>
              <div className="inline-block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md mb-4 border border-slate-200/80 dark:border-slate-700">
                Biografi Singkat
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-2xl mb-5 leading-snug">
                {about.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-4">
                Saya adalah seorang <strong className="text-slate-900 dark:text-white font-semibold">IT Programmer</strong> di{' '}
                <strong className="text-slate-900 dark:text-white font-semibold">Universitas Bumigora</strong> dengan pengalaman dalam perancangan dan implementasi solusi perangkat lunak berbasis web.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-4">
                Sebagai lulusan <strong className="text-slate-900 dark:text-white font-semibold">Teknologi Informasi Universitas Bumigora (2021-2025)</strong>, fokus utama saya adalah merancang sistem informasi yang efisien, aman, dan berorientasi pada stabilitas proses bisnis perusahaan.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                Selain itu saya juga bertanggung jawab atas <strong className="text-slate-900 dark:text-white font-semibold">manajemen server</strong>,untuk menjaga peforma layanan dan stabilitas proses pembelajaran universitas.
              </p>
            </div>
          </div>

          {/* Card 2: Spesialisasi & Tech Stack */}
          <div className="bg-white dark:bg-slate-900 p-8 sm:p-9 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition duration-200">
            <div className="inline-block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md mb-4 border border-slate-200/80 dark:border-slate-700">
              Keahlian Teknis
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-2xl mb-4 leading-snug">
              Spesialisasi & Tech Stack
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mb-6 leading-relaxed">
              {about.specializations.intro}
            </p>

            <div className="space-y-3.5">
              {about.specializations.skills.map((group) => (
                <div
                  key={group.category}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/70 dark:border-slate-800/80"
                >
                  <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-xs mb-2">
                    {getSkillIcon(group.category)}
                    <span>{group.category}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 ml-6">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Kontribusi Profesional */}
          <div className="bg-white dark:bg-slate-900 p-8 sm:p-9 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition duration-200">
            <div className="inline-block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md mb-4 border border-slate-200/80 dark:border-slate-700">
              Dampak Operasional
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-2xl mb-5 leading-snug">
              {about.contributions.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6">
              {about.contributions.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Sistem Operasional (ERP/SAGA)',
                'E-Learning & Kuis Karyawan',
                'Monitoring & TV Dashboard',
                'Web Portal & Company Profile'
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-slate-800 dark:text-slate-200 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: Mari Terkoneksi */}
          <div className="bg-white dark:bg-slate-900 p-8 sm:p-9 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition duration-200 flex flex-col justify-between">
            <div>
              <div className="inline-block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md mb-4 border border-slate-200/80 dark:border-slate-700">
                Kolaborasi
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-2xl mb-5 leading-snug">
                Mari Terkoneksi
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8">
                Saya selalu terbuka untuk kolaborasi, diskusi proyek rekayasa perangkat lunak, arsitektur database, dan peluang profesional. Silakan hubungi saya melalui saluran di bawah ini.
              </p>
            </div>

            {/* Social Icons */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
              <span className="block text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mb-3">
                Saluran Kontak & Media Sosial:
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={personalInfo.socialLinks.whatsapp || `https://wa.me/${(personalInfo.phone || '').replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-xl flex justify-center items-center border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900 transition duration-150"
                  title="Chat WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.socialLinks.phone}
                  aria-label="Telepon"
                  className="w-10 h-10 rounded-xl flex justify-center items-center border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900 transition duration-150"
                  title="Telepon"
                >
                  <PhoneIcon className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.socialLinks.email}
                  aria-label="Email"
                  className="w-10 h-10 rounded-xl flex justify-center items-center border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900 transition duration-150"
                  title="Email"
                >
                  <MailIcon className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-xl flex justify-center items-center border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900 transition duration-150"
                  title="LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-xl flex justify-center items-center border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900 transition duration-150"
                  title="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-xl flex justify-center items-center border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900 transition duration-150"
                  title="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
