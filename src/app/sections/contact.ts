import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { I18nService } from '../core/i18n.service';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { PROFILE } from '../data/portfolio.data';

type SendState = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-contact',
  imports: [Icon, Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <section id="contact" class="section">
    <div class="container">
      <header class="section-head" appReveal>
        <span class="eyebrow">🤝 {{ ui().eyebrow }}</span>
        <h2 class="grad-text">{{ ui().title }}</h2>
        <p>{{ ui().lead }}</p>
      </header>

      <div class="contact-grid">
        <div class="contact-info" appReveal>
          <a class="card info-card" [href]="'mailto:' + p.email">
            <span class="info-icon"><app-icon name="mail" /></span>
            <span><small>{{ ui().email }}</small><b>{{ p.email }}</b></span>
          </a>
          <a class="card info-card" [href]="p.whatsapp" target="_blank" rel="noopener">
            <span class="info-icon"><app-icon name="whatsapp" /></span>
            <span><small>{{ ui().phone }}</small><b>{{ p.phone }}</b></span>
          </a>
          <div class="card info-card">
            <span class="info-icon"><app-icon name="pin" /></span>
            <span><small>{{ ui().location }}</small><b>{{ i18n.t(p.location) }}</b></span>
          </div>
          <div class="socials-row">
            <a class="social big" [href]="p.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn"><app-icon name="linkedin" /></a>
            <a class="social big" [href]="p.github" target="_blank" rel="noopener" aria-label="GitHub"><app-icon name="github" /></a>
            <a class="social big" [href]="p.phoneHref" [attr.aria-label]="ui().phone"><app-icon name="phone" /></a>
            <a class="btn btn-ghost" [href]="p.cv" download="CV_Youssef_Rahali.pdf"><app-icon name="download" [size]="16" />CV</a>
          </div>
        </div>

        <form class="card contact-form" name="contact" (submit)="submit($event)" [appReveal]="100">
          <input type="hidden" name="form-name" value="contact">
          <p class="hp"><label>Ne pas remplir <input name="bot-field" tabindex="-1" autocomplete="off"></label></p>
          <div class="row">
            <label>{{ f().name }}<input name="name" required autocomplete="name"></label>
            <label>{{ f().email }}<input name="email" type="email" required autocomplete="email"></label>
          </div>
          <label>{{ f().company }}<input name="company" autocomplete="organization"></label>
          <label>{{ f().message }}<textarea name="message" rows="5" required></textarea></label>
          <button class="btn btn-grad" type="submit" [disabled]="state() === 'sending'">
            <app-icon name="send" [size]="16" />{{ state() === 'sending' ? f().sending : f().send }}
          </button>
          @if (state() === 'sent') { <p class="form-msg ok" role="status">{{ f().sent }}</p> }
          @if (state() === 'error') { <p class="form-msg err" role="alert">{{ f().error }}</p> }
        </form>
      </div>
    </div>
  </section>`,
})
export class Contact {
  protected readonly i18n = inject(I18nService);
  protected readonly p = PROFILE;
  protected readonly ui = computed(() => this.i18n.ui().contact);
  protected readonly f = computed(() => this.ui().form);
  protected readonly state = signal<SendState>('idle');

  // Envoi via Netlify Forms (les messages arrivent dans le tableau de bord Netlify).
  protected async submit(ev: Event) {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    if (!form.reportValidity()) return;
    this.state.set('sending');
    const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();
    try {
      const res = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      this.state.set('sent');
    } catch {
      this.state.set('error');
    }
  }
}
