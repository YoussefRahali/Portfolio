import { ChangeDetectionStrategy, Component, DOCUMENT, HostListener, computed, effect, inject, signal } from '@angular/core';
import { I18nService } from '../core/i18n.service';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { CERTIFICATIONS, Certification } from '../data/portfolio.data';

@Component({
  selector: 'app-certifications',
  imports: [Icon, Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <section id="certifications" class="section alt">
    <div class="container">
      <header class="section-head" appReveal>
        <span class="eyebrow">🏆 {{ ui().eyebrow }}</span>
        <h2 class="grad-text">{{ ui().title }}</h2>
        <p>{{ ui().lead }}</p>
      </header>

      <div class="cert-grid">
        @for (c of certs; track c.pdf; let i = $index) {
          <article class="card cert-card" [appReveal]="i * 70">
            <button type="button" class="cert-thumb" (click)="selected.set(c)" [attr.aria-label]="ui().view + ' : ' + c.title">
              <img [src]="c.image" [alt]="c.title" loading="lazy" width="900" height="600">
              <span class="overlay"><app-icon name="eye" />{{ ui().view }}</span>
            </button>
            <div class="card-body">
              <p class="issuer">{{ c.issuer }}</p>
              <h3>{{ c.title }}</h3>
              <p class="muted small">{{ i18n.t(c.date) }}</p>
              <div class="card-actions">
                <a class="btn btn-ghost btn-sm" [href]="c.pdf" target="_blank" rel="noopener"><app-icon name="external" [size]="14" />PDF</a>
                @if (c.verify) {
                  <a class="btn btn-ghost btn-sm" [href]="c.verify" target="_blank" rel="noopener"><app-icon name="check" [size]="14" />{{ ui().verify }}</a>
                }
              </div>
            </div>
          </article>
        }
      </div>
    </div>

    @if (selected(); as c) {
      <div class="modal-backdrop" (click)="selected.set(null)">
        <div class="lightbox" role="dialog" aria-modal="true" [attr.aria-label]="c.title" (click)="$event.stopPropagation()">
          <button type="button" class="icon-btn lb-close" (click)="selected.set(null)" [attr.aria-label]="ui().close"><app-icon name="x" /></button>
          <img [src]="c.image" [alt]="c.title">
          <div class="lb-caption">
            <span><b>{{ c.title }}</b> · {{ c.issuer }}</span>
            <a class="btn btn-grad btn-sm" [href]="c.pdf" target="_blank" rel="noopener"><app-icon name="external" [size]="14" />PDF</a>
          </div>
        </div>
      </div>
    }
  </section>`,
})
export class Certifications {
  protected readonly i18n = inject(I18nService);
  private readonly doc = inject(DOCUMENT);
  protected readonly ui = computed(() => this.i18n.ui().certifications);
  protected readonly certs = CERTIFICATIONS;
  protected readonly selected = signal<Certification | null>(null);

  constructor() {
    effect(() => { this.doc.body.classList.toggle('lightbox-open', !!this.selected()); });
  }

  @HostListener('document:keydown.escape')
  onEsc() { this.selected.set(null); }
}
