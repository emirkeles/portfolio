export const translations = {
  en: {
    name: "Emir Keleş",
    title: "Mobile Developer",
    description: "iOS & Android developer passionate about creating beautiful and functional mobile applications.",
    github: "GitHub",
    linkedin: "LinkedIn", 
    email: "Email",
    appstore: "App Store",
    language: "Language"
  },
  tr: {
    name: "Emir Keleş",
    title: "Mobil Geliştirici",
    description: "Güzel ve işlevsel mobil uygulamalar yaratmaya tutkulu iOS & Android geliştiricisi.",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "E-posta", 
    appstore: "App Store",
    language: "Dil"
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;