import React, { useState } from 'react'
import { ExternalLink, Clock, Calendar, Award, X } from 'lucide-react'
import ImageWithFallback from './ImageWithFallback'

export default function Blog({ blogPosts }) {
  const [activeModalPost, setActiveModalPost] = useState(null)

  return (
    <section id="blog" className="pt-24 pb-24 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
            Blog & Sertifikasi
          </p>
          <h2 className="font-extrabold text-slate-900 dark:text-white text-3xl sm:text-4xl tracking-tight mb-3">
            Tulisan dan Sertifikat
          </h2>
          <p className="font-normal text-base text-slate-600 dark:text-slate-400">
            Artikel analisis teknologi, metodologi rekayasa web, dan sertifikat kompetensi profesional
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-xs hover:shadow-md border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 overflow-hidden flex flex-col justify-between group transition-all duration-200"
            >
              <div>
                {/* Image */}
                <div
                  className="relative overflow-hidden cursor-pointer bg-slate-100 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-800"
                  onClick={() => setActiveModalPost(post)}
                >
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    fallbackText={post.title}
                    aspectRatio="aspect-video"
                    className="group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-0.5 rounded-md pointer-events-none">
                    {post.category}
                  </div>
                  {post.certificateUrl && (
                    <a
                      href={post.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-3 right-3 inline-flex items-center gap-1 bg-white/95 dark:bg-slate-900/95 hover:bg-white dark:hover:bg-slate-900 text-slate-700 dark:text-slate-200 text-[11px] font-medium px-2.5 py-1 rounded-md shadow-xs border border-slate-200/70 dark:border-slate-700 transition backdrop-blur-xs"
                      title="Lihat Sertifikat (PDF)"
                    >
                      <Award className="w-3 h-3 text-amber-500" />
                      <span>PDF</span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                    </a>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400 mb-2.5 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      {post.category === 'Sertifikat' ? (
                        <Award className="w-3 h-3 text-amber-500 dark:text-amber-400" />
                      ) : (
                        <Clock className="w-3 h-3 text-slate-400" />
                      )}
                      {post.readTime}
                    </span>
                  </div>

                  <h3
                    onClick={() => setActiveModalPost(post)}
                    className="font-bold text-base text-slate-900 dark:text-white group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors mb-2.5 line-clamp-2 leading-snug cursor-pointer"
                  >
                    {post.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveModalPost(post)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 font-medium text-xs text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 py-2.5 px-3 rounded-xl transition duration-150 border border-slate-200/60 dark:border-slate-700 cursor-pointer"
                >
                  <span>Baca Selengkapnya</span>
                </button>

                {post.category === 'Sertifikat' && post.certificateUrl ? (
                  <a
                    href={post.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 font-medium text-xs text-amber-800 dark:text-amber-200 bg-amber-50 dark:bg-amber-950/40 hover:bg-amber-100 dark:hover:bg-amber-900/50 py-2.5 px-3 rounded-xl transition duration-150 border border-amber-200/80 dark:border-amber-800/80 shadow-xs shrink-0 whitespace-nowrap"
                    title="Lihat Sertifikat (PDF)"
                  >
                    <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    <span>Lihat Sertifikat</span>
                  </a>
                ) : post.url ? (
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 font-medium text-xs text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 py-2.5 px-3 rounded-xl transition duration-150 border border-slate-200/60 dark:border-slate-700 shadow-xs shrink-0 whitespace-nowrap"
                    title="Buka Halaman Artikel"
                  >
                    <span>Lihat Artikel</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {/* Post Detail Modal / Popup */}
        {activeModalPost && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
            onClick={() => setActiveModalPost(null)}
          >
            <div
              className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-150 max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image */}
              <div className="relative bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-800">
                <ImageWithFallback
                  src={activeModalPost.image}
                  alt={activeModalPost.title}
                  fallbackText={activeModalPost.title}
                  aspectRatio="aspect-video"
                />
                <button
                  onClick={() => setActiveModalPost(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition cursor-pointer"
                  aria-label="Tutup modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-7 overflow-y-auto">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {activeModalPost.category}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium ml-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {activeModalPost.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      {activeModalPost.category === 'Sertifikat' ? (
                        <Award className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                      ) : (
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                      )}
                      {activeModalPost.readTime}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-snug">
                  {activeModalPost.title}
                </h3>

                <div className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 space-y-3">
                  <p className="whitespace-pre-line">
                    {activeModalPost.content || activeModalPost.excerpt}
                  </p>
                </div>

                {/* Modal Footer Actions */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-end gap-3">
                  <button
                    onClick={() => setActiveModalPost(null)}
                    className="px-4 py-2.5 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                  >
                    Tutup
                  </button>

                  {activeModalPost.category === 'Sertifikat' ? (
                    activeModalPost.certificateUrl && (
                      <a
                        href={activeModalPost.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs transition shadow-xs"
                      >
                        <Award className="w-4 h-4 text-amber-400" />
                        <span>Lihat Sertifikat (PDF)</span>
                      </a>
                    )
                  ) : (
                    activeModalPost.url && (
                      <a
                        href={activeModalPost.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs transition shadow-xs"
                      >
                        <span>Lihat Artikel</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
