import type { MotionVariant } from './animation';

export interface HomepageMotionTarget {
  target: HTMLElement;
  variant: MotionVariant;
  duration: number;
  delay: number;
}

// Homepage-only choreography; other routes retain their existing motion.
export function registerHomepageMotion(
  root: HTMLElement,
  register: (trigger: HTMLElement, targets: HomepageMotionTarget[]) => void,
) {
  const target = (element: HTMLElement, variant: MotionVariant, delay = 0, duration = 1200): HomepageMotionTarget => ({ target: element, variant, duration, delay });
  const groups = (selector: string, variant: MotionVariant, stagger = 0) => {
    root.querySelectorAll<HTMLElement>(selector).forEach((element, index) => register(element, [target(element, variant, index * stagger)]));
  };

  root.querySelectorAll<HTMLElement>('.split-copy').forEach(copy => {
    const heading = copy.querySelector<HTMLElement>(':scope>h1,:scope>.section-heading');
    if (!heading) return;
    const direction: MotionVariant = copy.closest('.location') ? 'right' : 'left';
    const targets = [target(heading, direction)];
    copy.querySelectorAll<HTMLElement>(':scope>p,:scope>.actions,:scope>.button').forEach((element, index) => targets.push(target(element, 'up', (index + 1) * 180, 1200)));
    register(copy, targets);
  });

  root.querySelectorAll<HTMLElement>('.layered-farmer').forEach(artwork => {
    const targets: HomepageMotionTarget[] = [];
    artwork.querySelectorAll<HTMLElement>('.farmer-layer').forEach((layer, index) => {
      targets.push(target(layer, layer.matches('.ghost-left') ? 'diagonal-left' : 'diagonal-right', index * 200));
    });
    register(artwork, targets);
  });

  groups('.capacity>.section-heading,.news-section .section-heading', 'up');
  groups('.capacity-image,.home-map', 'left');
  groups('.metric', 'up', 180);
  groups('.expertise-card', 'diagonal-left', 180);
  groups('.home-news-featured', 'left');
  groups('.home-news-side', 'right');
  groups('.news-section .center>.button', 'up');
  groups('.cta', 'up');

  const footer = document.querySelector<HTMLElement>('.site-footer');
  if (footer) register(footer, [target(footer, 'up')]);

}
