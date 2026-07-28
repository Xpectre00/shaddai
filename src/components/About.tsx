import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/translations'

const features = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 1 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
        <path d="M17 4a2 2 0 0 0 -2 2v2.5" />
        <path d="M10 10.5c0 .8 .6 1.5 1.5 1.5s1.5 -.7 1.5 -1.5" />
      </svg>
    ),
    title: { es: 'Calidad Premium', en: 'Premium Quality' },
    desc: { es: 'Herramientas seleccionadas con los más altos estándares', en: 'Tools selected with the highest standards' },
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
        <path d="M3.6 9h16.8" />
        <path d="M3.6 15h16.8" />
        <path d="M11.5 3a17 17 0 0 0 0 18" />
        <path d="M12.5 3a17 17 0 0 1 0 18" />
      </svg>
    ),
    title: { es: 'Innovación Digital', en: 'Digital Innovation' },
    desc: { es: 'Startup tecnológica comprometida con la evolución digital', en: 'Tech startup committed to digital evolution' },
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 21h14" />
        <path d="M7 3h10" />
        <path d="M9 21v-18" />
        <path d="M15 21v-18" />
        <path d="M3 7h4" />
        <path d="M17 7h4" />
        <path d="M3 11h18" />
        <path d="M3 15h18" />
      </svg>
    ),
    title: { es: 'Mejora tu Hogar', en: 'Improve Your Home' },
    desc: { es: 'Todo lo que necesitas para construir y renovar', en: 'Everything you need to build and renovate' },
  },
]

export default function About() {
  const { lang } = useLanguage()

  return (
    <section className="relative px-4 py-20 md:py-28 bg-charcoal">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-metallic" />
            <svg className="w-5 h-5 text-burgundy" viewBox="0 0 20 20" fill="currentColor">
              <polygon points="10,0 13,7 20,7 14,12 16,20 10,15 4,20 6,12 0,7 7,7" />
            </svg>
            <div className="h-px w-12 bg-metallic" />
          </div>
          <h2 className="text-2xl md:text-4xl font-display tracking-wider text-metallic mb-4">
            {t('aboutTitle', lang)}
          </h2>
          <p className="text-silver/60 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            {t('aboutDescription', lang)}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-xl border border-silver/10 bg-obsidian/50 hover:bg-obsidian/80 hover:border-silver/25 transition-all duration-300"
            >
              <div className="text-burgundy mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-white font-semibold text-base mb-2">
                {feature.title[lang]}
              </h3>
              <p className="text-silver/50 text-sm leading-relaxed">
                {feature.desc[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}