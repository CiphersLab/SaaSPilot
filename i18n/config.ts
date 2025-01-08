export type Locale = (typeof locales)[number];

export const locales = ['en', 'de', 'ar'] as const;
export const defaultLocale: Locale = 'en';