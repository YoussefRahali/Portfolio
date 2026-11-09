import { ChangeDetectionStrategy, Component, DOCUMENT, HostListener, effect, inject, signal } from '@angular/core';
import { I18nService } from '../core/i18n.service';
import { Icon } from '../shared/icon';
import { PROFILE } from '../data/portfolio.data';

type Theme = 'dark' | 'light';
const THEME_KEY = 'yr-theme';

@Component({
  selector: 'app-navbar',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <header class="nav" [class.scrolled]="scrolled()">
    <div class="container nav-inner">
      <a href="#home" class="brand" (click)="close()">
        <span class="logo">YR</span>
        <span class="brand-text"><b>Youssef Rahali</b><small>Full-Stack Developer</small></span>
      </a>

      <nav class="links" [class.open]="open()" [attr.aria-label]="i18n.ui().nav.menu">
        @for (l of links; track l.id) {
          <a [href]="'#' + l.id" [class.active]="active() === l.id" (click)="close()">
            <app-icon [name]="l.icon" [size]="16" />{{ i18n.ui().nav[l.key] }}
          </a>
        }
        <a class="btn btn-grad mobile-only" href="#contact" (click)="close()">
          <app-icon name="code" [size]="16" />{{ i18n.ui().nav.hire }}
        </a>
      </nav>

      <div class="tools">
        <div class="lang" role="group" [attr.aria-label]="i18n.ui().nav.lang">
          <button type="button" [class.on]="i18n.lang() === 'fr'" [attr.aria-pressed]="i18n.lang() === 'fr'" (click)="i18n.set('fr')">FR</button>
          <button type="button" [class.on]="i18n.lang() === 'en'" [attr.aria-pressed]="i18n.lang() === 'en'" (click)="i18n.set('en')">EN</button>
        </div>
        <button type="button" class="icon-btn" (click)="toggleTheme()" [attr.aria-label]="i18n.ui().nav.theme">
          <app-icon [name]="theme() === 'dark' ? 'sun' : 'moon'" />
        </button>
        <a class="btn btn-grad desktop-only" href="#contact"><app-icon name="code" [size]="16" />{{ i18n.ui().nav.hire }}</a>
        <button type="button" class="icon-btn burger" (click)="open.set(!open())"
          [attr.aria-expanded]="open()" [attr.aria-label]="open() ? i18n.ui().nav.close : i18n.ui().nav.menu">
          <app-icon [name]="open() ? 'x' : 'menu'" />
        </button>
      </div>
    </div>
  </header>`,
})
export class Navbar {
  protected readonly i18n = inject(I18nService);
  private readonly doc = inject(DOCUMENT);
  protected readonly profile = PROFILE;
  protected readonly open = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly active = signal('home');
  protected readonly theme = signal<Theme>(this.initialTheme());

  protected readonly links = [
    { id: 'home', key: 'home', icon: 'home' },
    { id: 'projects', key: 'projects', icon: 'folder' },
    { id: 'skills', key: 'skills', icon: 'code' },
    { id: 'experience', key: 'experience', icon: 'briefcase' },
    { id: 'certifications', key: 'certifications', icon: 'award' },
    { id: 'contact', key: 'contact', icon: 'mail' },
  ] as const;

  constructor() {
    effect(() => {
      const t = this.theme();
      this.doc.documentElement.dataset['theme'] = t;
      try { localStorage.setItem(THEME_KEY, t); } catch {}
    });
    effect(() => { this.doc.body.classList.toggle('no-scroll', this.open()); });
  }

  private initialTheme(): Theme {
    try {
      const v = localStorage.getItem(THEME_KEY);
      if (v === 'dark' || v === 'light') return v;
    } catch {}
    return 'dark';
  }

  protected toggleTheme() { this.theme.set(this.theme() === 'dark' ? 'light' : 'dark'); }
  protected close() { this.open.set(false); }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 10);
    let current = 'home';
    for (const l of this.links) {
      const el = this.doc.getElementById(l.id);
      if (el && el.getBoundingClientRect().top <= 120) current = l.id;
    }
    this.active.set(current);
  }

  @HostListener('window:resize')
  onResize() { if (window.innerWidth > 1024) this.open.set(false); }

  @HostListener('document:keydown.escape')
  onEsc() { this.open.set(false); }
}
