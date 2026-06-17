import { ui, defaultLang, languages, type Lang } from './ui';

/** Idiomas disponibles como array (para getStaticPaths). */
export const langs = Object.keys(languages) as Lang[];

/** Rutas estáticas por idioma: [{ params: { lang: 'es' } }, ...]. */
export function langStaticPaths() {
  return langs.map((lang) => ({ params: { lang } }));
}

/** Normaliza un valor de param a un Lang válido. */
export function asLang(value: string | undefined): Lang {
  return value === 'en' || value === 'es' ? value : defaultLang;
}

/** Detecta el idioma a partir de la URL (/es/..., /en/...). */
export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/').filter(Boolean)[0];
  return asLang(seg);
}

/** Traductor en build: t('home.intro'). Cae al idioma por defecto y luego a la clave. */
export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    return ui[lang][key] ?? ui[defaultLang][key] ?? key;
  };
}

/** Construye una ruta interna con prefijo de idioma: localizedPath('/blog', 'en') -> '/en/blog'. */
export function localizedPath(path: string, lang: Lang): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `/${lang}/${clean}` : `/${lang}`;
}

/** Devuelve la misma URL actual pero en el idioma destino (para el selector). */
export function switchLangPath(url: URL, target: Lang): string {
  const parts = url.pathname.split('/').filter(Boolean);
  if (parts[0] === 'es' || parts[0] === 'en') parts[0] = target;
  else parts.unshift(target);
  return '/' + parts.join('/');
}

/** Formatea una fecha según el idioma. */
export function formatDate(date: Date, lang: Lang, withTime = false): string {
  const locale = lang === 'en' ? 'en-US' : 'es-ES';
  return withTime
    ? date.toLocaleString(locale, { dateStyle: 'long', timeStyle: 'short' })
    : date.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });
}
