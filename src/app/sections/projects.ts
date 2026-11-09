import { ChangeDetectionStrategy, Component, DOCUMENT, HostListener, computed, effect, inject, signal } from '@angular/core';
import { I18nService } from '../core/i18n.service';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { PROJECTS, Project } from '../data/portfolio.data';

@Component({
  selector: 'app-projects',
  imports: [Icon, Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <section id="projects" class="section">
    <div class="container">
      <header class="section-head" appReveal>
        <span class="eyebrow">🚀 {{ ui().eyebrow }}</span>
        <h2 class="grad-text">{{ ui().title }}</h2>
        <p>{{ ui().lead }}</p>
      </header>

      <div class="project-grid">
        @for (p of projects; track p.id; let i = $index) {
          <article class="card project-card" [appReveal]="i * 90">
            <div class="window-bar">
              <span class="dots"><i></i><i></i><i></i></span>
              <span class="chips">
                <span class="chip ok">✅ {{ i18n.t(p.status) }}</span>
                <span class="chip star">⭐ {{ p.year }}</span>
              </span>
            </div>
            <div class="card-body">
              <p class="filename"><span class="prompt">❯</span> {{ p.file }}</p>
              <h3>{{ p.name }}</h3>
              <p class="tagline">{{ i18n.t(p.tagline) }}</p>

              <p class="code-label"><app-icon name="code" [size]="14" /> {{ ui().stack }}</p>
              <ul class="tech">
                @for (t of p.stack.slice(0, 5); track t) { <li>{{ t }}</li> }
                @if (p.stack.length > 5) { <li class="more">+{{ p.stack.length - 5 }}</li> }
              </ul>

              <div class="code-lines">
                <p><span class="k">{{ ui().context }}</span> = <span class="str">"{{ i18n.t(p.context) }}"</span></p>
                <p><span class="k">{{ ui().year }}</span> = <span class="num">{{ p.year }}</span></p>
              </div>

              <div class="card-actions">
                <button type="button" class="btn btn-grad btn-sm" (click)="openProject(p)">
                  <app-icon name="eye" [size]="15" />{{ ui().details }}
                </button>
                @for (r of p.repos; track r.url) {
                  <a class="btn btn-ghost btn-sm" [href]="r.url" target="_blank" rel="noopener">
                    <app-icon name="github" [size]="15" />{{ i18n.t(r.label) }}
                  </a>
                }
              </div>
            </div>
          </article>
        }
      </div>
    </div>

    @if (selected(); as p) {
      <div class="modal-backdrop" (click)="closeProject()">
        <div class="modal card" role="dialog" aria-modal="true" [attr.aria-label]="p.name" (click)="$event.stopPropagation()">
          <div class="window-bar">
            <span class="dots"><i></i><i></i><i></i></span>
            <span class="filename small">{{ p.file }}</span>
            <button type="button" class="icon-btn" (click)="closeProject()" [attr.aria-label]="ui().close"><app-icon name="x" /></button>
          </div>
          <div class="modal-body">
            <p class="eyebrow-small">{{ i18n.t(p.context) }} · {{ p.year }}</p>
            <h3 class="grad-text modal-title">{{ p.name }}</h3>
            <p class="lead-text">{{ i18n.t(p.description) }}</p>
            <h4>{{ ui().highlights }}</h4>
            <ul class="arrow-list">
              @for (h of p.highlights; track $index) { <li>{{ i18n.t(h) }}</li> }
            </ul>
            <h4>{{ ui().stack }}</h4>
            <ul class="tech">@for (t of p.stack; track t) { <li>{{ t }}</li> }</ul>
            <div class="card-actions">
              @for (r of p.repos; track r.url) {
                <a class="btn btn-grad btn-sm" [href]="r.url" target="_blank" rel="noopener">
                  <app-icon name="github" [size]="15" />{{ ui().code }} {{ i18n.t(r.label) }}
                </a>
              }
            </div>
          </div>
        </div>
      </div>
    }
  </section>`,
})
export class Projects {
  protected readonly i18n = inject(I18nService);
  private readonly doc = inject(DOCUMENT);
  protected readonly projects = PROJECTS;
  protected readonly ui = computed(() => this.i18n.ui().projects);
  protected readonly selected = signal<Project | null>(null);

  constructor() {
    effect(() => { this.doc.body.classList.toggle('modal-open', !!this.selected()); });
  }

  protected openProject(p: Project) { this.selected.set(p); }
  protected closeProject() { this.selected.set(null); }

  @HostListener('document:keydown.escape')
  onEsc() { this.closeProject(); }
}
