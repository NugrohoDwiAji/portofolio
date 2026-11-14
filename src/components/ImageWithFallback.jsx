import React, { useState } from 'react'
import { Image as ImageIcon } from 'lucide-react'

export default function ImageWithFallback({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-video',
  fallbackText,
  ...props
}) {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={`relative overflow-hidden bg-neutral-100 dark:bg-slate-800 ${aspectRatio} ${className}`}>
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-100 dark:bg-slate-800 animate-pulse">
          <div className="w-6 h-6 rounded-full border-2 border-neutral-400 border-t-transparent animate-spin" />
        </div>
      )}

      {hasError ? (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-neutral-50 dark:bg-slate-800 border border-neutral-200/60 dark:border-slate-700 text-neutral-500 dark:text-neutral-400">
          <div className="w-10 h-10 mb-2 rounded-xl bg-white dark:bg-slate-700 border border-neutral-200 dark:border-slate-600 flex items-center justify-center text-neutral-600 dark:text-neutral-300">
            <ImageIcon className="w-5 h-5" />
          </div>
          <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-200 line-clamp-1">
            {fallbackText || alt}
          </span>
          <span className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-0.5">
            Gambar tidak tersedia
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false)
            setHasError(true)
          }}
          className={`w-full h-full object-cover transition duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          {...props}
        />
      )}
    </div>
  )
}
