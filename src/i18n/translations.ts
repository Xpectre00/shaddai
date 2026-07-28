export type Language = 'es' | 'en'

interface TranslationMap {
  [key: string]: { es: string; en: string }
}

export const translations: TranslationMap = {
  heroSubtitle: {
    es: 'FERRETERÍA',
    en: 'HARDWARE STORE',
  },
  slogan: {
    es: 'Mejoramos tu hogar',
    en: 'We improve your home',
  },
  aboutTitle: {
    es: 'Excelencia en Herramientas',
    en: 'Excellence in Tools',
  },
  aboutDescription: {
    es: 'En Ferretería Shaddai combinamos tradición e innovación para ofrecerte las mejores herramientas de construcción y ferretería. Somos una startup tecnológica comprometida con la calidad digital y la mejora continua de tu hogar. Cada producto es seleccionado con los más altos estándares para garantizar durabilidad, rendimiento y satisfacción.',
    en: 'At Ferretería Shaddai we combine tradition and innovation to offer you the best construction and hardware tools. We are a tech startup committed to digital quality and the continuous improvement of your home. Every product is selected with the highest standards to guarantee durability, performance, and satisfaction.',
  },
  contactVia: {
    es: 'Contáctanos vía',
    en: 'Contact us via',
  },
  callToAction: {
    es: 'Escríbenos ahora',
    en: 'Write us now',
  },
  footerRights: {
    es: 'Todos los derechos reservados.',
    en: 'All rights reserved.',
  },
  whatsapp1: {
    es: 'WhatsApp 1',
    en: 'WhatsApp 1',
  },
  whatsapp2: {
    es: 'WhatsApp 2',
    en: 'WhatsApp 2',
  },
}

export function t(key: string, lang: Language): string {
  return translations[key]?.[lang] ?? key
}