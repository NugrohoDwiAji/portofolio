import React, { useState } from 'react'
import {
  MapPin,
  CheckCircle2
} from 'lucide-react'
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

export default function Contact({ personalInfo }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [lastWhatsappUrl, setLastWhatsappUrl] = useState('')

  const cleanPhone = (personalInfo.phone || '+6281803160359').replace(/\D/g, '').replace(/^0/, '62')

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const messageLines = [
      `Halo ${personalInfo.shortName || personalInfo.name}, saya menghubungi Anda melalui formulir website portofolio:`,
      '',
      `👤 *Nama:* ${formData.name.trim()}`,
      `✉️ *Email:* ${formData.email.trim()}`,
      `📌 *Subjek:* ${formData.subject.trim() || '-'}`,
      '',
      `💬 *Pesan:*`,
      `${formData.message.trim()}`
    ]

    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(messageLines.join('\n'))}`
    setLastWhatsappUrl(whatsappUrl)

    // Buka WhatsApp di tab/aplikasi baru
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })

    setTimeout(() => {
      setIsSubmitted(false)
    }, 10000)
  }

  const socialButtons = [
    { name: 'WhatsApp', url: personalInfo.socialLinks.whatsapp || `https://wa.me/${cleanPhone}`, icon: <WhatsAppIcon className="w-4 h-4" /> },
    { name: 'Telepon', url: personalInfo.socialLinks.phone, icon: <PhoneIcon className="w-4 h-4" /> },
    { name: 'Email', url: personalInfo.socialLinks.email, icon: <MailIcon className="w-4 h-4" /> },
    { name: 'LinkedIn', url: personalInfo.socialLinks.linkedin, icon: <LinkedInIcon className="w-4 h-4" /> },
    { name: 'GitHub', url: personalInfo.socialLinks.github, icon: <GithubIcon className="w-4 h-4" /> },
    { name: 'Instagram', url: personalInfo.socialLinks.instagram, icon: <InstagramIcon className="w-4 h-4" /> },
    { name: 'YouTube', url: personalInfo.socialLinks.youtube, icon: <YoutubeIcon className="w-4 h-4" /> },
    { name: 'Twitter', url: personalInfo.socialLinks.twitter, icon: <TwitterIcon className="w-4 h-4" /> },
  ]

  return (
    <section id="contact" className="pt-24 pb-24 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
            Kontak
          </p>
          <h2 className="font-extrabold text-slate-900 dark:text-white text-3xl sm:text-4xl tracking-tight mb-3">
            Hubungi Saya
          </h2>
          <p className="font-normal text-base text-slate-600 dark:text-slate-400">
            Punya tawaran proyek, peluang kolaborasi, atau sekadar ingin berdiskusi? Kirim pesan di bawah ini.
          </p>
        </div>

        {/* Social Icons Row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {socialButtons.map((btn) => (
            <a
              key={btn.name}
              href={btn.url}
              target={btn.url.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={btn.name}
              title={btn.name}
              className="w-10 h-10 rounded-xl flex justify-center items-center border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900 transition duration-150 shadow-xs"
            >
              {btn.icon}
            </a>
          ))}
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Info Details Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900 p-7 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
                Informasi Kontak
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0">
                    <MailIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Email
                    </h4>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm sm:text-base font-medium text-slate-900 dark:text-white hover:underline transition"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0">
                    <WhatsAppIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      WhatsApp / Telepon
                    </h4>
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href={personalInfo.socialLinks.whatsapp || `https://wa.me/${cleanPhone}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base font-medium text-slate-900 dark:text-white hover:underline transition"
                      >
                        {personalInfo.phoneDisplay}
                      </a>
                      <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                        (Chat Langsung)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Domisili
                    </h4>
                    <p className="text-sm sm:text-base font-medium text-slate-900 dark:text-white">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Right Column */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 p-7 sm:p-9 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                Kirim Pesan Langsung
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Silakan isi formulir di bawah ini dan pesan akan otomatis disiapkan untuk dikirim ke WhatsApp saya.
              </p>

              {isSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 flex items-start gap-3 animate-in fade-in duration-150">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <p className="font-semibold mb-0.5">
                      Membuka WhatsApp...
                    </p>
                    <p className="text-emerald-700 dark:text-emerald-400">
                      Pesan Anda telah diformat dan dialihkan ke WhatsApp. Jika chat belum terbuka otomatis,{' '}
                      <a
                        href={lastWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-semibold hover:text-emerald-950 dark:hover:text-white"
                      >
                        klik di sini untuk membuka chat WhatsApp
                      </a>.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5"
                    >
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Nama Anda"
                      className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-slate-900 dark:focus:border-white focus:ring-1 focus:ring-slate-900 dark:focus:ring-white text-sm transition"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5"
                    >
                      Alamat Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nama@email.com"
                      className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-slate-900 dark:focus:border-white focus:ring-1 focus:ring-slate-900 dark:focus:ring-white text-sm transition"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5"
                  >
                    Subjek / Topik
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Diskusi Proyek / Tawaran Pekerjaan"
                    className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-slate-900 dark:focus:border-white focus:ring-1 focus:ring-slate-900 dark:focus:ring-white text-sm transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5"
                  >
                    Pesan Anda *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan pesan detail Anda di sini..."
                    className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-slate-900 dark:focus:border-white focus:ring-1 focus:ring-slate-900 dark:focus:ring-white text-sm transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-medium text-sm text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 py-3 px-7 rounded-xl shadow-xs transition duration-150 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Membuka WhatsApp...</span>
                  ) : (
                    <>
                      <span>Kirim via WhatsApp</span>
                      <WhatsAppIcon className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
