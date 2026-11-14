import React, { useState, useEffect, useRef } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function Navbar({ personalInfo, isDarkMode, setIsDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navRef = useRef(null)

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pendidikan', href: '#pendidikan' },
    { name: 'Pengalaman', href: '#pengalaman' },
    { name: 'Blog', href: '#blog' },
    { name: 'Kontak', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      const sections = ['home', 'about', 'portfolio', 'pendidikan', 'pengalaman', 'blog', 'contact']
      const scrollPosition = window.scrollY + 180

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  return (
    <header
      ref={navRef}
      className={`w-full transition-all duration-200 z-50 ${
        isScrolled
          ? 'fixed top-0 left-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 dark:border-slate-800 py-3.5'
          : 'absolute top-0 left-0 bg-white dark:bg-slate-950 py-5 border-b border-slate-100 dark:border-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between relative">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex items-center gap-2.5 font-bold text-lg text-slate-900 dark:text-white tracking-tight group"
          >
            <span className="w-8 h-8 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 flex items-center justify-center font-bold text-xs tracking-wider select-none transition-transform group-hover:scale-105">
              NDA
            </span>
            <span className="font-semibold text-slate-900 dark:text-white">
              {personalInfo.shortName}
            </span>
          </a>

          {/* Desktop Navigation & Actions */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <nav>
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1)
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className={`text-sm font-medium py-1.5 px-3.5 rounded-lg transition-colors duration-150 ${
                          isActive
                            ? 'text-slate-900 dark:text-white font-semibold bg-slate-100 dark:bg-slate-800'
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900'
                        }`}
                      >
                        {link.name}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label={isDarkMode ? "Beralih ke mode terang" : "Beralih ke mode gelap"}
              title={isDarkMode ? "Beralih ke mode terang" : "Beralih ke mode gelap"}
              className="ml-2 p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition duration-150 cursor-pointer"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label={isDarkMode ? "Beralih ke mode terang" : "Beralih ke mode gelap"}
              title={isDarkMode ? "Beralih ke mode terang" : "Beralih ke mode gelap"}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition duration-150 cursor-pointer"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <button
              id="hamburger"
              name="hamburger"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg focus:outline-none ${
                isMobileMenuOpen ? 'hamburger-active' : ''
              }`}
              aria-expanded={isMobileMenuOpen}
              aria-label="Menu navigasi"
            >
              <span className="hamburger-line origin-top-left"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line origin-bottom-left"></span>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <nav
              id="nav-menu"
              className="lg:hidden absolute top-full right-4 mt-2 py-3 px-2 bg-white dark:bg-slate-900 shadow-xl rounded-2xl border border-slate-200 dark:border-slate-800 w-60 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
            >
              <ul className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1)
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block text-sm font-medium py-2 px-3 rounded-lg transition duration-150 ${
                          isActive
                            ? 'text-slate-900 dark:text-white font-semibold bg-slate-100 dark:bg-slate-800'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                        }`}
                      >
                        {link.name}
                      </a>
                    </li>
                  )
                })}
              </ul>

              <div className="pt-2 mt-2 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => {
                    setIsDarkMode(!isDarkMode)
                    setIsMobileMenuOpen(false)
                  }}
                  className="w-full flex items-center justify-between text-xs font-medium py-2 px-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition cursor-pointer"
                >
                  <span>Tema Tampilan</span>
                  <span className="inline-flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200">
                    {isDarkMode ? (
                      <>
                        <Sun className="w-3.5 h-3.5 text-amber-400" />
                        <span>Gelap</span>
                      </>
                    ) : (
                      <>
                        <Moon className="w-3.5 h-3.5 text-slate-700" />
                        <span>Terang</span>
                      </>
                    )}
                  </span>
                </button>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
