export const translations = {
  en: {
    greeting: "Hi, my name is",
    name: "Emir Keleş",
    buildApps: "I build mobile apps",
    makeContent: "and make content about development",
    postRegularly: "I also post regularly on these platforms",
    needHelp: "Need dev/design help for your company?",
    clickHere: "Click here.",
    sayHi: "Want to say hi?",
    github: "GitHub",
    linkedin: "LinkedIn", 
    email: "Email",
    youtube: "YouTube",
    twitter: "Twitter",
    instagram: "Instagram",
    tiktok: "TikTok"
  },
  tr: {
    greeting: "Merhaba, benim adım",
    name: "Emir Keleş",
    buildApps: "Mobil uygulamalar geliştiriyorum",
    makeContent: "ve geliştirme hakkında içerik üretiyorum",
    postRegularly: "Bu platformlarda düzenli olarak paylaşım yapıyorum",
    needHelp: "Şirketiniz için geliştirme/tasarım yardımı mı gerekiyor?",
    clickHere: "Buraya tıklayın.",
    sayHi: "Merhaba demek ister misiniz?",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "E-posta", 
    youtube: "YouTube",
    twitter: "Twitter",
    instagram: "Instagram",
    tiktok: "TikTok"
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;