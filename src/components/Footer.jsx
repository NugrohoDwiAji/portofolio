import React from 'react'
import {
  WhatsAppIcon,
  PhoneIcon,
  MailIcon,
  LinkedInIcon,
  GithubIcon,
  InstagramIcon,
  YoutubeIcon,
  TwitterIcon
} from './SocialIcons'

export default function Footer({ personalInfo }) {
  const quickLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang Saya', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pendidikan', href: '#pendidikan' },
    { name: 'Pengalaman', href: '#pengalaman' },
    { name: 'Blog', href: '#blog' },
    { name: 'Kontak', href: '#contact' },
  ]

  const categories = [
    { name: 'Web Development (PHP, Laravel, React)', href: '#portfolio' },
    { name: 'Arsitektur Sistem & Database MySQL', href: '#portfolio' },
    { name: 'Manajemen Layanan TI (ITIL & ITSM)', href: '#blog' },
    { name: 'Dashboard Monitoring & Analytics', href: '#portfolio' },
  ]

  return (
    <footer id="footer" className="bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 pt-16 pb-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
          
          {/* Column 1: Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5 mb-1">
              <span className="w-7 h-7 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 flex items-center justify-center font-bold text-xs tracking-wider">
                NDA
              </span>
              <h2 className="font-extrabold text-xl text-slate-900 dark:text-white tracking-tight">
                {personalInfo.name}
              </h2>
            </div>
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              {personalInfo.title}
            </p>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              Membangun solusi perangkat lunak terukur, efisien, dan andal untuk operasional bisnis modern.
            </p>
            <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 space-y-1">
              <p>Email: <span className="text-slate-900 dark:text-slate-200 font-medium">{personalInfo.email}</span></p>
              <p>Lokasi: <span className="text-slate-900 dark:text-slate-200 font-medium">{personalInfo.location}</span></p>
            </div>
          </div>

          {/* Column 2: Categories */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-bold text-slate-900 dark:text-white tracking-wider uppercase text-xs">
              Kategori & Fokus
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <a
                    href={cat.href}
                    className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition inline-block"
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-bold text-slate-900 dark:text-white tracking-wider uppercase text-xs">
              Navigasi Cepat
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider & Bottom Socials */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <a
              href={personalInfo.socialLinks.whatsapp || `https://wa.me/${(personalInfo.phone || '').replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-8 h-8 rounded-lg flex justify-center items-center border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900 transition duration-150"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={personalInfo.socialLinks.phone}
              aria-label="Telepon"
              className="w-8 h-8 rounded-lg flex justify-center items-center border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900 transition duration-150"
            >
              <PhoneIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={personalInfo.socialLinks.email}
              aria-label="Email"
              className="w-8 h-8 rounded-lg flex justify-center items-center border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900 transition duration-150"
            >
              <MailIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-lg flex justify-center items-center border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900 transition duration-150"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 rounded-lg flex justify-center items-center border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900 transition duration-150"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={personalInfo.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-lg flex justify-center items-center border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900 transition duration-150"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={personalInfo.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-8 h-8 rounded-lg flex justify-center items-center border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900 transition duration-150"
            >
              <YoutubeIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={personalInfo.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-8 h-8 rounded-lg flex justify-center items-center border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900 transition duration-150"
            >
              <TwitterIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="font-normal text-xs text-slate-400 dark:text-slate-500 text-center leading-relaxed">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
