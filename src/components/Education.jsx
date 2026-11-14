import React from 'react'
import { GraduationCap, ExternalLink } from 'lucide-react'

export default function Education({ education }) {
  return (
    <section id="pendidikan" className="pt-24 pb-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
            Pendidikan & Bootcamp
          </p>
          <h2 className="font-extrabold text-slate-900 dark:text-white text-3xl sm:text-4xl tracking-tight mb-3">
            Riwayat Pendidikan & Pelatihan
          </h2>
          <p className="font-normal text-base text-slate-600 dark:text-slate-400">
            Program akademis dan pelatihan intensif yang telah saya selesaikan
          </p>
        </div>

        {/* Logos Showcase */}
        <div className="mb-14">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            {education.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${item.institution} - ${item.degree}`}
                className="group flex flex-col items-center justify-center p-2 transition duration-200"
              >
                <div className="w-24 sm:w-28 h-16 flex items-center justify-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/70 dark:border-slate-800">
                  <img
                    src={item.logo}
                    alt={item.institution}
                    className="max-h-10 max-w-full object-contain filter grayscale opacity-60 dark:opacity-80 group-hover:grayscale-0 group-hover:opacity-100 dark:brightness-110 transition duration-200"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `<span class="text-xs font-semibold text-slate-600 dark:text-slate-400 text-center">${item.institution}</span>`
                    }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Educational Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs hover:shadow-sm transition duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                  {item.institution}
                </h3>
                <h4 className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                  {item.degree}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.url && (
                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:underline transition"
                  >
                    <span>Kunjungi Situs</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
