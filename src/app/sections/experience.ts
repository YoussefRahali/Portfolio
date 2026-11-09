import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { I18nService } from '../core/i18n.service';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { EDUCATION, EXPERIENCES, LANGUAGES } from '../data/portfolio.data';

@Component({
  selector: 'app-experience',
  imports: [Icon, Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <section id="experience" class="section">
    <div class="container">
      <header class="section-head" appReveal>
        <span class="eyebrow">💼 {{ ui().eyebrow }}</span>
        <h2 class="grad-text">{{ ui().title }}</h2>
        <p>{{ ui().lead }}</p>
      </header>

      <div class="timeline">
        @for (e of experiences; track e.file; let first = $first) {
          <article class="card exp-card" appReveal>
            <div class="window-bar">
              <span class="dots"><i></i><i></i><i></i></span>
              <span class="filename small">{{ e.file }}</span>
              @if (first) { <span class="chip ok">{{ i18n.lang() === 'fr' ? 'Le plus récent' : 'Most recent' }}</span> }
            </div>
            <div class="card-body">
              <div class="exp-head">
                <div>
                  <h3>{{ i18n.t(e.title) }}</h3>
                  <p class="company">{{ e.company }}</p>
                </div>
                <ul class="meta">
                  <li><app-icon name="pin" [size]="14" />{{ e.location }}</li>
                  <li><app-icon name="briefcase" [size]="14" />{{ i18n.t(e.period) }}</li>
                  <li class="chip">{{ i18n.t(e.type) }}</li>
                </ul>
              </div>
              <p class="summary">{{ i18n.t(e.summary) }}</p>
              <p class="code-label">{{ ui().achievements }}</p>
              <ul class="arrow-list">
                @for (a of e.achievements; track $index) { <li>{{ i18n.t(a) }}</li> }
              </ul>
              <p class="code-label">{{ ui().tech }}</p>
              <ul class="tech">@for (t of e.tech; track t) { <li>{{ t }}</li> }</ul>
            </div>
          </article>
        }
      </div>

      <div class="edu-grid">
        <div class="card pad" appReveal>
          <h3 class="mini-title"><app-icon name="grad" />{{ ui().education }}</h3>
          <ul class="edu-list">
            @for (ed of education; track ed.school) {
              <li><span class="period">{{ ed.period }}</span><b>{{ i18n.t(ed.degree) }}</b><span class="muted">{{ ed.school }}</span></li>
            }
          </ul>
        </div>
        <div class="card pad" [appReveal]="100">
          <h3 class="mini-title"><app-icon name="globe" />{{ ui().languages }}</h3>
          <ul class="lang-list">
            @for (l of languages; track l.name.en) {
              <li><b>{{ i18n.t(l.name) }}</b><span class="chip">{{ i18n.t(l.level) }}</span></li>
            }
          </ul>
        </div>
      </div>
    </div>
  </section>`,
})
export class ExperienceSection {
  protected readonly i18n = inject(I18nService);
  protected readonly ui = computed(() => this.i18n.ui().experience);
  protected readonly experiences = EXPERIENCES;
  protected readonly education = EDUCATION;
  protected readonly languages = LANGUAGES;
}
