import en from './en.json';
import ptBr from './pt-br.json';

export type Language = 'en' | 'pt-br';

export const translations = {
  en,
  'pt-br': ptBr
} as const;

export function getTranslations(lang: Language) {
  return translations[lang];
}

export function getLangFromUrl(url: URL): Language {
  const pathname = url.pathname;
  if (pathname.startsWith('/pt-br')) {
    return 'pt-br';
  }
  return 'en';
}

export function getLocalizedUrl(path: string, lang: Language): string {
  if (lang === 'pt-br') {
    return `/pt-br${path}`;
  }
  return path;
}
