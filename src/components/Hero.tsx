import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/translations'
import CrownIcon from './CrownIcon'
import WhatsAppButton from './WhatsAppButton'

const PHONE_1 = '+528683708575'
const PHONE_2 = '+528681568368'

export default function Hero() {
  const { lang } = useLanguage()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-charcoal to-obsidian pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-lg mx-auto">
        <CrownIcon className="w-28 h-20 md:w-36 md:h-24 mb-4 drop-shadow-[0_0_30px_rgba(192,192,192,0.2)]" />

        <div className="flex items-center gap-2 mb-2">
          <svg className="w-4 h-4 text-silver/60" viewBox="0 0 20 20" fill="currentColor">
            <polygon points="10,0 13,7 20,7 14,12 16,20 10,15 4,20 6,12 0,7 7,7" />
          </svg>
          <svg className="w-4 h-4 text-silver/60" viewBox="0 0 20 20" fill="currentColor">
            <polygon points="10,0 13,7 20,7 14,12 16,20 10,15 4,20 6,12 0,7 7,7" />
          </svg>
          <svg className="w-4 h-4 text-silver/60" viewBox="0 0 20 20" fill="currentColor">
            <polygon points="10,0 13,7 20,7 14,12 16,20 10,15 4,20 6,12 0,7 7,7" />
          </svg>
          <svg className="w-4 h-4 text-silver/40" viewBox="0 0 20 20" fill="currentColor">
            <polygon points="10,0 13,7 20,7 14,12 16,20 10,15 4,20 6,12 0,7 7,7" />
          </svg>
        </div>

        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-[0.15em] text-metallic drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] leading-none mb-2">
          SHADDAI
        </h1>

        <p className="text-sm md:text-base tracking-[0.35em] uppercase text-silver/80 font-medium mb-1">
          {t('heroSubtitle', lang)}
        </p>

        <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-silver/50 mb-8">
          {t('slogan', lang)}
        </p>

        <div className="w-full space-y-4 mb-6">
          <div className="flex flex-col gap-3">
            <p className="text-silver/60 text-sm font-medium tracking-wider uppercase">
              {t('contactVia', lang)}
            </p>
            <WhatsAppButton phoneNumber={PHONE_1} label={PHONE_1} />
            <WhatsAppButton phoneNumber={PHONE_2} label={PHONE_2} />
          </div>
        </div>

        <p className="text-silver/40 text-xs animate-pulse-slow">
          {t('callToAction', lang)}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian to-transparent pointer-events-none z-10" />
    </section>
  )
}