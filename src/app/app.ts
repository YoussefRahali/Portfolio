import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Navbar } from './sections/navbar';
import { Hero } from './sections/hero';
import { Projects } from './sections/projects';
import { Skills } from './sections/skills';
import { ExperienceSection } from './sections/experience';
import { Certifications } from './sections/certifications';
import { Contact } from './sections/contact';
import { Footer } from './sections/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Projects, Skills, ExperienceSection, Certifications, Contact, Footer],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-projects />
      <app-skills />
      <app-experience />
      <app-certifications />
      <app-contact />
    </main>
    <app-footer />
  `,
})
export class App {}
