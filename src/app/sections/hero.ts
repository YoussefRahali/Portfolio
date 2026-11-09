import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { I18nService } from '../core/i18n.service';
import { Icon } from '../shared/icon';
import { PROFILE } from '../data/portfolio.data';

@Component({
  selector: 'app-hero',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <section id="home" class="hero">
    <div class="glow g1"></div><div class="glow g2"></div>
    <div class="container hero-grid">
      <div class="hero-text">
        <span class="pill"><span class="dot"></span>{{ ui().badge }}</span>
        <p class="hello">{{ ui().hello }} <b>{{ profile.name }}</b> 👋</p>
        <h1 [class.en]="i18n.lang() === 'en'">
          <span class="word">{{ ui().roleBefore }}</span>
          <span class="rotator" aria-live="polite"><span class="grad-text" [class.swap]="swapping()">{{ role() }}</span></span>
        </h1>
        <p class="intro" [innerHTML]="ui().intro"></p>

        <ul class="stats">
          @for (s of ui().stats; track s.label) {
            <li><b>{{ s.value }}</b><span>{{ s.label }}</span></li>
          }
        </ul>

        <div class="cta">
          <a class="btn btn-grad" href="#contact"><app-icon name="sparkles" [size]="16" />{{ ui().cta }}</a>
          <a class="btn btn-ghost" [href]="profile.cv" download="CV_Youssef_Rahali.pdf"><app-icon name="download" [size]="16" />{{ ui().cv }}</a>
        </div>

        <div class="follow">
          <span>{{ ui().follow }}</span>
          <a class="social" [href]="profile.github" target="_blank" rel="noopener" aria-label="GitHub"><app-icon name="github" /></a>
          <a class="social" [href]="profile.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn"><app-icon name="linkedin" /></a>
          <a class="social" [href]="'mailto:' + profile.email" aria-label="Email"><app-icon name="mail" /></a>
        </div>
      </div>

      <div class="hero-visual">
        <div class="photo-frame">
          <img [src]="profile.photo" [alt]="profile.name" width="480" height="480" fetchpriority="high">
          <span class="float-badge top">🚀 {{ ui().available }}</span>
          <div class="float-card">
            <small>{{ ui().floating }}</small>
            <b>{{ ui().floatingValue }}</b>
          </div>
        </div>
      </div>
    </div>
    <a href="#projects" class="scroll-hint" [attr.aria-label]="ui().scroll"><span></span>{{ ui().scroll }}</a>
  </section>`,
})
export class Hero {
  protected readonly i18n = inject(I18nService);
  protected readonly profile = PROFILE;
  protected readonly ui = computed(() => this.i18n.ui().hero);
  private readonly index = signal(0);
  protected readonly swapping = signal(false);
  protected readonly role = computed(() => {
    const roles = this.ui().roles;
    return roles[this.index() % roles.length];
  });

  constructor() {
    const reduce = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const id = setInterval(() => {
      this.swapping.set(true);
      setTimeout(() => { this.index.update((i) => i + 1); this.swapping.set(false); }, 350);
    }, 2600);
    inject(DestroyRef).onDestroy(() => clearInterval(id));
  }
}
