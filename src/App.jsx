import React, { useState, useEffect } from 'react'
import { portfolioData } from './data/portfolioData'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Education from './components/Education'
import Experience from './components/Experience'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDarkMode) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-slate-900 selection:text-white transition-colors duration-200">
      {/* Header & Navbar */}
      <Navbar
        personalInfo={portfolioData.personalInfo}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {/* Main Content Sections */}
      <main>
        {/* Beranda / Hero */}
        <Hero personalInfo={portfolioData.personalInfo} />

        {/* Tentang Saya */}
        <About
          about={portfolioData.about}
          personalInfo={portfolioData.personalInfo}
        />

        {/* Portfolio / Projects */}
        <Portfolio projects={portfolioData.projects} />

        {/* Pendidikan & Bootcamp */}
        <Education education={portfolioData.education} />

        {/* Pengalaman Kerja */}
        <Experience experience={portfolioData.experience} />

        {/* Tulisan Blog */}
        <Blog blogPosts={portfolioData.blogPosts} />

        {/* Kontak */}
        <Contact personalInfo={portfolioData.personalInfo} />
      </main>

      {/* Footer */}
      <Footer personalInfo={portfolioData.personalInfo} />

      {/* Floating Back To Top */}
      <BackToTop />
    </div>
  )
}
