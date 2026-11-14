import React, { useState } from 'react'
import { ArrowRight, Send, ExternalLink } from 'lucide-react'

export default function Hero({ personalInfo }) {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="home" className="pt-28 sm:pt-32 lg:pt-36 pb-20 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Column: Text & Intro */}
          <div className="w-full lg:w-7/12 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Full Stack Web Developer • IT Programmer</span>
            </div>

            <h1 className="text-sm sm:text-base font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              {personalInfo.greeting}
            </h1>

            <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-4">
              {personalInfo.name}
            </div>

            <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-slate-700 dark:text-slate-300 mb-5">
              {personalInfo.title} di{' '}
              <a
                href={personalInfo.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-900 dark:text-white font-semibold underline underline-offset-4 decoration-slate-300 dark:decoration-slate-600 hover:decoration-slate-900 dark:hover:decoration-white inline-flex items-center gap-1 group"
              >
                <span>{personalInfo.company}</span>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
              </a>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 active:scale-95 py-3 px-6 rounded-xl transition duration-150 shadow-xs cursor-pointer"
              >
                <span>Hubungi Saya</span>
                <Send className="w-4 h-4" />
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-95 py-3 px-6 rounded-xl transition duration-150 border border-slate-200 dark:border-slate-800 shadow-xs cursor-pointer"
              >
                <span>Lihat Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Credential Highlights */}
            <div className="grid grid-cols-3 gap-6 pt-8 mt-10 border-t border-slate-200 dark:border-slate-800 max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Perusahaan</div>
                <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1">Universitas Bumigora</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">IT Programmer</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Pendidikan</div>
                <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1">Universitas Bumigora</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">S1 Teknologi Informasi</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Keahlian</div>
                <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1">Full Stack</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">NextJs, Laravel & MERN Stack</div>
              </div>
            </div>

          </div>

          {/* Right Column: Portrait without box background */}
          <div className="w-full lg:w-5/12 flex justify-center items-center">
            <div className="relative flex items-center justify-center">
              {!imgError ? (
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  onError={() => setImgError(true)}
                  className="w-auto h-auto max-h-[380px] sm:max-h-[460px] lg:max-h-[520px] object-contain select-none transition-transform duration-300 hover:scale-[1.02] drop-shadow-sm"
                />
              ) : (
                <div className="w-72 sm:w-80 aspect-[4/5] rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center p-6 text-center text-slate-700 dark:text-slate-300">
                  <div className="w-20 h-20 rounded-2xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center font-bold text-2xl text-slate-800 dark:text-white mb-3">
                    NDA
                  </div>
                  <span className="text-sm font-semibold">{personalInfo.name}</span>
                  <span className="text-xs text-slate-500 mt-1">{personalInfo.title}</span>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
