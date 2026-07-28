import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/translations'

const PHONE_1 = '+528683708575'
const PHONE_2 = '+528681568368'

export default function Footer() {
  const { lang } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="relative px-4 py-12 bg-obsidian border-t border-silver/10">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl tracking-[0.15em] text-metallic mb-1">
              SHADDAI
            </h3>
            <p className="text-silver/40 text-xs tracking-wider uppercase">
              {t('heroSubtitle', lang)}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <a
              href={`https://wa.me/${PHONE_1.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver/60 hover:text-[#25D366] text-sm transition-colors"
            >
              {PHONE_1}
            </a>
            <a
              href={`https://wa.me/${PHONE_2.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver/60 hover:text-[#25D366] text-sm transition-colors"
            >
              {PHONE_2}
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-silver/10 text-center">
          <p className="text-silver/30 text-xs">
            &copy; {year} Ferretería Shaddai. {t('footerRights', lang)}
          </p>
        </div>
      </div>
    </footer>
  )
}