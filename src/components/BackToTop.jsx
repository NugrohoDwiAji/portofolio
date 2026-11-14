import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      className="fixed z-40 bottom-6 right-6 p-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl shadow-md hover:bg-slate-800 dark:hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all duration-150 flex items-center justify-center cursor-pointer border border-slate-700/30"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  )
}
