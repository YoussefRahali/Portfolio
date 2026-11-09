import { Directive, ElementRef, OnDestroy, OnInit, inject, input, numberAttribute } from '@angular/core';

/** Fait apparaître l'élément en fondu quand il entre dans l'écran. */
@Directive({ selector: '[appReveal]', host: { class: 'reveal' } })
export class Reveal implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  readonly delay = input(0, { alias: 'appReveal', transform: (v: unknown) => numberAttribute(v, 0) });
  private io?: IntersectionObserver;

  ngOnInit() {
    const node = this.el.nativeElement as HTMLElement;
    if (this.delay()) node.style.transitionDelay = `${this.delay()}ms`;
    if (typeof IntersectionObserver === 'undefined') { node.classList.add('in'); return; }
    this.io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) { node.classList.add('in'); this.io?.disconnect(); }
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    this.io.observe(node);
  }

  ngOnDestroy() { this.io?.disconnect(); }
}
