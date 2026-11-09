import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { I18nService } from '../core/i18n.service';
import { Reveal } from '../shared/reveal';
import { SKILLS, SKILL_CATS, SkillCat } from '../data/portfolio.data';

@Component({
  selector: 'app-skills',
  imports: [Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <section id="skills" class="section alt">
    <div class="container">
      <header class="section-head" appReveal>
        <span class="eyebrow">⚡ {{ ui().eyebrow }}</span>
        <h2 class="grad-text">{{ ui().title }}</h2>
        <p>{{ ui().lead }}</p>
      </header>

      <div class="filters" role="tablist" appReveal>
        @for (c of cats; track c.id) {
          <button type="button" role="tab" [class.on]="cat() === c.id" [attr.aria-selected]="cat() === c.id" (click)="cat.set(c.id)">
            {{ i18n.t(c.label) }}
          </button>
        }
      </div>

      <ul class="skill-grid">
        @for (s of visible(); track s.name) {
          <li class="skill" [attr.data-cat]="s.cat">
            <span class="skill-dot"></span>{{ s.name }}
          </li>
        }
      </ul>
    </div>
  </section>`,
})
export class Skills {
  protected readonly i18n = inject(I18nService);
  protected readonly ui = computed(() => this.i18n.ui().skills);
  protected readonly cats = SKILL_CATS;
  protected readonly cat = signal<SkillCat | 'all'>('all');
  protected readonly visible = computed(() => {
    const c = this.cat();
    return c === 'all' ? SKILLS : SKILLS.filter((s) => s.cat === c);
  });
}
