import { Injectable, computed, effect, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core';
import { UI, Lang, L } from '../data/portfolio.data';

const STORAGE_KEY = 'yr-lang';

function readStoredLang(): Lang {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === 'fr' || v === 'en') return v;
  } catch {}
  const nav = (typeof navigator !== 'undefined' && navigator.language) || 'fr';
  return nav.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly doc = inject(DOCUMENT);
  readonly lang = signal<Lang>(readStoredLang());
  readonly ui = computed(() => UI[this.lang()]);

  constructor() {
    effect(() => {
      const l = this.lang();
      this.doc.documentElement.lang = l;
      this.doc.title =
        l === 'fr'
          ? 'Youssef Rahali — Développeur Full-Stack Java / Angular'
          : 'Youssef Rahali — Full-Stack Developer Java / Angular';
      try { localStorage.setItem(STORAGE_KEY, l); } catch {}
    });
  }

  set(l: Lang) { this.lang.set(l); }

  /** Pick the current language from a bilingual value. */
  t(v: L): string { return v[this.lang()]; }
}
