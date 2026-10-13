import type { MotionVariant } from './animation';
import type { HomepageMotionTarget } from './homepage-motion';

type Register = (trigger: HTMLElement, targets: HomepageMotionTarget[]) => void;
type Step = { selector: string; variant: MotionVariant; delay?: number; duration?: number };

/** Corporate entrances shared by BM/English routes, with one owner per visual. */
export function registerPageMotion(root: HTMLElement, register: Register) {
  const claimed = new Set<HTMLElement>();
  const available = (element: HTMLElement) => !element.closest('.home-hero,.page-hero,.corporate-banner,.editorial-hero,.career-opening,.hero-background') && !Array.from(claimed).some(owner => owner.contains(element) || element.contains(owner));
  const target = (element: HTMLElement, variant: MotionVariant, delay = 0, duration = 1200): HomepageMotionTarget => ({ target: element, variant, delay, duration });
  const unit = (element: HTMLElement, variant: MotionVariant, delay = 0, duration?: number) => {
    if (!available(element)) return;
    claimed.add(element);
    register(element, [target(element, variant, delay, duration)]);
  };
  const groups = (selector: string, variant: MotionVariant, stagger = 0) => {
    root.querySelectorAll<HTMLElement>(selector).forEach(element => {
      const siblings = element.parentElement ? Array.from(element.parentElement.children) : [];
      const order = Math.max(0, siblings.indexOf(element));
      const staggerOrder = element.matches('.product-card,.career-benefit') ? order % 4 : element.matches('.certificate-slide') ? order % 3 : order;
      unit(element, variant, Math.min(staggerOrder, 7) * stagger);
    });
  };
  const sequence = (selector: string, steps: Step[]) => {
    root.querySelectorAll<HTMLElement>(selector).forEach(element => {
      if (!available(element)) return;
      const targets = steps.flatMap(step => Array.from(element.querySelectorAll<HTMLElement>(step.selector), child => target(child, step.variant, step.delay, step.duration)));
      if (!targets.length) return;
      claimed.add(element);
      register(element, targets);
    });
  };
  const copySteps: Step[] = [
    { selector: ':scope>.section-heading,:scope>h1,:scope>.eyebrow', variant: 'left' },
    { selector: ':scope>p:not(.eyebrow),:scope>.button,:scope>.actions,:scope>div:not(.section-heading)', variant: 'up', delay: 150 },
  ];

  root.querySelectorAll<HTMLElement>('.services-page .split-grid').forEach(element => {
    if (!available(element)) return;
    const reverse = element.closest('.split-section')?.classList.contains('reverse');
    const sales = element.closest('.split-section')?.classList.contains('service-sales');
    const targets = Array.from(element.querySelectorAll<HTMLElement>('.split-copy>*,.split-media'), child => {
      if (child.matches('.section-heading')) return target(child, sales || !reverse ? 'left' : 'right');
      if (child.matches('.split-media')) return target(child, reverse ? 'left' : 'right');
      return target(child, 'up', 150);
    });
    claimed.add(element);
    register(element, targets);
  });

  sequence('.overview-text,.purpose-heading', copySteps);
  groups('.benefit-strip', 'left');
  groups('.about-value', 'diagonal-left', 120);
  groups('.purpose-card-wide', 'left');
  groups('.purpose-card:not(.purpose-card-wide)', 'up');
  groups('.ceo-panel,.milestone-carousel', 'up');
  groups('.department-card,.corporate-fact-list>article', 'up', 120);

  sequence('.product-detail', [
    { selector: '.product-gallery', variant: 'left' },
    { selector: ':scope>div:not(.product-gallery)>h1', variant: 'right' },
    { selector: ':scope>div:not(.product-gallery)>:not(h1)', variant: 'up', delay: 150 },
  ]);
  sequence('.product-benefits', [
    { selector: '.product-benefit-artwork', variant: 'left' },
    { selector: '.product-benefit-copy>.section-heading', variant: 'right' },
    { selector: '.product-benefit-copy>ul', variant: 'up', delay: 150 },
  ]);
  groups('.audience-grid>article,.product-card', 'diagonal-left', 120);
  groups('.product-certificate-track>figure', 'up', 120);
  groups('.certificate-slide', 'up', 120);
  groups('.certificate-heading>div:first-child', 'up');
  groups('.testimonial-feature>.media', 'left');

  groups('.sustainability-quote', 'up');
  groups('.approach-list>article', 'left', 120);
  groups('.approach-copy>.section-heading', 'left');
  root.querySelectorAll<HTMLElement>('.approach-copy>p').forEach(element => unit(element, 'up', 150));
  sequence('.sustainability-farmer', [
    { selector: '.sustainability-ghost', variant: 'diagonal-left', duration: 1200 },
    { selector: '.sustainability-front', variant: 'diagonal-right', delay: 120, duration: 1200 },
  ]);
  groups('.monthly-poster-card,.sustainability-report', 'up', 120);
  groups('.news-card', 'diagonal-left', 120);

  root.querySelectorAll<HTMLElement>('.article-page').forEach(article => {
    const title = article.querySelector<HTMLElement>(':scope>h1');
    if (!title) return;
    const targets = [target(title, 'up')];
    article.querySelectorAll<HTMLElement>(':scope>.eyebrow,:scope>p:not(.eyebrow)').forEach(element => {
      claimed.add(element);
      targets.push(target(element, 'up', element.matches('.eyebrow') ? 0 : 150));
    });
    claimed.add(title);
    register(title, targets);
  });
  groups('.article-page>.media', 'left');
  groups('.article-body>p', 'up', 120);
  groups('.article-body>.text-link', 'up');

  sequence('.distributor-intro>div:not(.media)', copySteps);
  groups('.distributor-intro>.media', 'right');
  groups('.distributor-cards>article,.distributor-panel', 'up', 120);
  groups('.career-film,.career-marquee,.career-empty,.career-missing-inner', 'up');
  groups('.career-benefit', 'diagonal-left', 120);
  groups('.career-stories-layout>h2', 'up');
  root.querySelectorAll<HTMLElement>('.testimonial-copy,.career-story-slide').forEach(slide => {
    const carousel = slide.closest<HTMLElement>('.testimonial-feature,.career-story-carousel');
    const changed = carousel?.dataset.motionCarouselSeen === 'true' && !slide.dataset.motionRegistered;
    unit(slide, changed ? 'up' : 'right', 0, changed ? 1000 : 1200);
    if (carousel) carousel.dataset.motionCarouselSeen = 'true';
  });

  groups('.contact-address', 'left');
  groups('.contact-methods>article', 'right', 120);
  sequence('.contact-enquiry>.container', [
    { selector: ':scope>.section-heading', variant: 'up' },
    { selector: ':scope>p,:scope>form', variant: 'up', delay: 150 },
  ]);
  groups('.cta', 'up');

  // Fill remaining sections without splitting already owned cards/artwork.
  groups('.section-heading', 'up');
  root.querySelectorAll<HTMLElement>('.media').forEach(element => {
    if (element.closest('.hero-background,.page-hero,.corporate-banner,dialog,.career-marquee-track')) return;
    const rect = element.getBoundingClientRect();
    unit(element, rect.left + rect.width / 2 < window.innerWidth / 2 ? 'left' : 'right');
  });
  root.querySelectorAll<HTMLElement>('h1,h2,h3,h4,p,.button,.reveal').forEach(element => {
    if (element.closest('dialog,form,.quote-panel,.career-marquee-track,.hero-background,.page-hero,.corporate-banner') || element.matches('.sr-only') || element.closest('[aria-hidden="true"]')) return;
    const followsHeading = element.matches('p:not(.eyebrow)') && !!element.parentElement?.querySelector(':scope>.section-heading,:scope>h1,:scope>h2');
    unit(element, 'up', followsHeading ? 150 : 0);
  });

  const footer = document.querySelector<HTMLElement>('.site-footer');
  if (footer) register(footer, [target(footer, 'up')]);

}
