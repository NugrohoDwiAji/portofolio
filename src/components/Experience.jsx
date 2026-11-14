import React from 'react'
import { Building2, Calendar, ExternalLink } from 'lucide-react'

export default function Experience({ experience }) {
  return (
    <section id="pengalaman" className="pt-24 pb-24 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
            Pengalaman
          </p>
          <h2 className="font-extrabold text-slate-900 dark:text-white text-3xl sm:text-4xl tracking-tight mb-3">
            Pengalaman Kerja & Magang
          </h2>
          <p className="font-normal text-base text-slate-600 dark:text-slate-400">
            Jejak kontribusi profesional di industri teknologi dan korporasi
          </p>
        </div>

        {/* Company Logos showcase */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            {experience.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${item.company} - ${item.role}`}
                className="group flex flex-col items-center justify-center p-2 transition duration-200"
              >
                <div className="w-28 sm:w-32 h-16 flex items-center justify-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/70 dark:border-slate-800">
                  <img
                    src={item.logo}
                    alt={item.company}
                    className="max-h-10 max-w-full object-contain filter grayscale opacity-60 dark:opacity-80 group-hover:grayscale-0 group-hover:opacity-100 dark:brightness-110 transition duration-200"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `<span class="text-xs font-semibold text-slate-600 dark:text-slate-400 text-center">${item.company}</span>`
                    }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Detailed Career Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {experience.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 p-7 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs hover:shadow-sm transition duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {item.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {item.role}
                </h3>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
                  <Building2 className="w-4 h-4 text-slate-500" />
                  <span>{item.company}</span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.url && (
                <div className="pt-4 mt-6 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:underline transition"
                  >
                    <span>Website Perusahaan</span>
                    <ExternalLink className="w-3.5 h-3.5" />
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
