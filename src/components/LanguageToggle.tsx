import { useLanguage } from '../contexts/LanguageContext'

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage()

  return (
    <button
      onClick={toggleLang}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 rounded-full border border-silver/30 bg-charcoal/90 backdrop-blur-sm text-sm font-medium text-silver hover:border-silver/60 hover:text-white transition-all duration-200 shadow-lg"
      aria-label={`Switch language to ${lang === 'es' ? 'English' : 'Español'}`}
    >
      <span className={`${lang === 'es' ? 'text-white' : 'text-silver/50'}`}>ES</span>
      <span className="text-silver/30">/</span>
      <span className={`${lang === 'en' ? 'text-white' : 'text-silver/50'}`}>EN</span>
    </button>
  )
}