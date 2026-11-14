import React, { useState } from 'react'
import { ExternalLink, X } from 'lucide-react'
import ImageWithFallback from './ImageWithFallback'

export default function Portfolio({ projects }) {
  const [activeModalProject, setActiveModalProject] = useState(null)

  return (
    <section id="portfolio" className="pt-24 pb-24 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
            Portfolio
          </p>
          <h2 className="font-extrabold text-slate-900 dark:text-white text-3xl sm:text-4xl tracking-tight mb-3">
            Project Unggulan
          </h2>
          <p className="font-normal text-base text-slate-600 dark:text-slate-400">
            Berikut beberapa sistem informasi dan aplikasi web yang pernah saya rancang dan kembangkan
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-xs hover:shadow-md border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 overflow-hidden flex flex-col justify-between group transition-all duration-200"
            >
                <div>
                  {/* Image Container */}
                  <div
                    className="relative overflow-hidden cursor-pointer bg-slate-100 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-800"
                    onClick={() => setActiveModalProject(project)}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      fallbackText={project.title}
                      aspectRatio="aspect-video"
                      className="group-hover:scale-[1.02] transition-transform duration-300"
                    />

                    {/* Category pill on image */}
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-0.5 rounded-md">
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3
                      onClick={() => setActiveModalProject(project)}
                      className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors cursor-pointer mb-2"
                    >
                      {project.title}
                    </h3>

                    {/* External Link if available */}
                    {project.link ? (
                      <p className="font-medium text-xs text-slate-800 dark:text-slate-200 mb-3">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 hover:underline font-semibold"
                        >
                          <span>Kunjungi Website</span>
                          <ExternalLink className="w-3 h-3 text-slate-500" />
                        </a>
                      </p>
                    ) : (
                      <p className="text-[11px] font-medium text-slate-400 dark:text-slate-500 mb-3 uppercase tracking-wider">
                        Sistem Internal Perusahaan
                      </p>
                    )}

                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tech tags footer */}
                <div className="px-6 pb-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:underline cursor-pointer ml-auto"
                  >
                    Detail &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>

        {/* Project Detail Modal */}
        {activeModalProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
            onClick={() => setActiveModalProject(null)}
          >
            <div
              className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-150 max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image */}
              <div className="relative bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-800">
                <ImageWithFallback
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  fallbackText={activeModalProject.title}
                  aspectRatio="aspect-video"
                />
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition cursor-pointer"
                  aria-label="Tutup modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-7 overflow-y-auto">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {activeModalProject.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {activeModalProject.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {activeModalProject.description}
                </p>

                {/* Tech Tags */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                    Teknologi yang Digunakan
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalProject.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Action */}
                {activeModalProject.link && (
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                    <a
                      href={activeModalProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition shadow-xs"
                    >
                      <span>Buka Aplikasi / Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
