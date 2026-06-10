import { ui, defaultLang, type Lang } from './ui';

export const STORAGE_KEY = 'lang';

export function currentLang(): Lang {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'es' || saved === 'en') return saved;
  return navigator.language.startsWith('en') ? 'en' : defaultLang;
}

export function t(key: string, lang: Lang = currentLang()): string {
  return ui[lang][key] ?? key;
}

export function applyLang(lang: Lang): void {
  const dict = ui[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (key && dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-ph]').forEach((el) => {
    const key = el.dataset.i18nPh;
    if (key && dict[key]) el.setAttribute('placeholder', dict[key]);
  });

  document.querySelectorAll<HTMLTimeElement>('time[data-i18n-date]').forEach((el) => {
    const iso = el.getAttribute('datetime');
    if (iso) {
      el.textContent = new Date(iso).toLocaleDateString(
        lang === 'en' ? 'en-US' : 'es-ES',
        { year: 'numeric', month: 'long', day: 'numeric' },
      );
    }
  });

  document.querySelectorAll<HTMLElement>('[data-lang-btn]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.langBtn === lang));
  });

  window.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
}
