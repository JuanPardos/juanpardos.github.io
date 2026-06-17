import { ui, defaultLang, languages, type Lang } from './ui';

export const langs = Object.keys(languages) as Lang[];

export function langStaticPaths() {
  return langs.map((lang) => ({ params: { lang } }));
}

export function asLang(value: string | undefined): Lang {
  return value === 'en' || value === 'es' ? value : defaultLang;
}

export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/').filter(Boolean)[0];
  return asLang(seg);
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    return ui[lang][key] ?? ui[defaultLang][key] ?? key;
  };
}

export function localizedPath(path: string, lang: Lang): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `/${lang}/${clean}` : `/${lang}`;
}

export function switchLangPath(url: URL, target: Lang): string {
  const parts = url.pathname.split('/').filter(Boolean);
  if (parts[0] === 'es' || parts[0] === 'en') parts[0] = target;
  else parts.unshift(target);
  return '/' + parts.join('/');
}

export function formatDate(date: Date, lang: Lang, withTime = false): string {
  const locale = lang === 'en' ? 'en-US' : 'es-ES';
  return withTime
    ? date.toLocaleString(locale, { dateStyle: 'long', timeStyle: 'short' })
    : date.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });
}
