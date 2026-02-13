// Supported locales
export const locales = ['en', 'ru', 'uz'] as const;
export type Locale = (typeof locales)[number];

// Default locale
export const defaultLocale: Locale = 'en';

// Locale names for display
export const localeNames: Record<Locale, string> = {
  en: 'English',
  ru: 'Русский',
  uz: "O'zbekcha",
};

// Locale flags (emoji) for display
export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  ru: '🇷🇺',
  uz: '🇺🇿',
};
