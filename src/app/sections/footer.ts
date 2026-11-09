import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { I18nService } from '../core/i18n.service';
import { Icon } from '../shared/icon';
import { PROFILE } from '../data/portfolio.data';

@Component({
  selector: 'app-footer',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <footer class="footer">
    <div class="container footer-inner">
      <div class="brand">
        <span class="logo">YR</span>
        <span class="brand-text"><b>{{ p.name }}</b><small>© {{ year }} · {{ ui().rights }}</small></span>
      </div>
      <p class="muted small">{{ ui().built }}</p>
      <div class="footer-links">
        <a class="social" [href]="p.github" target="_blank" rel="noopener" aria-label="GitHub"><app-icon name="github" /></a>
        <a class="social" [href]="p.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn"><app-icon name="linkedin" /></a>
        <a class="social" [href]="'mailto:' + p.email" aria-label="Email"><app-icon name="mail" /></a>
        <a class="social" href="#home" [attr.aria-label]="ui().top"><app-icon name="arrowUp" /></a>
      </div>
    </div>
  </footer>`,
})
export class Footer {
  private readonly i18n = inject(I18nService);
  protected readonly p = PROFILE;
  protected readonly ui = computed(() => this.i18n.ui().footer);
  protected readonly year = new Date().getFullYear();
}
