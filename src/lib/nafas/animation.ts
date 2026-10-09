export type MotionVariant = 'left' | 'right' | 'up' | 'diagonal' | 'scale' | 'rotate' | 'layer';

const entrances: Record<MotionVariant, string> = {
  left: 'translate3d(-24px,0,0)',
  right: 'translate3d(24px,0,0)',
  up: 'translate3d(0,22px,0)',
  diagonal: 'translate3d(16px,16px,0)',
  scale: 'scale(.975)',
  rotate: 'perspective(1200px) rotateY(3deg) translate3d(0,12px,0)',
  layer: 'translate3d(12px,8px,0) scale(1.015)',
};

// Additive transforms preserve skew, positioning and opacity from approved CSS.
// No hidden idle state: content remains readable if observation or JS fails.
export function animateEntrance(element: HTMLElement | SVGElement, variant: MotionVariant, delay = 0): Animation[] {
  const opacity = Number(getComputedStyle(element).opacity);
  const timing: KeyframeAnimationOptions = { duration: 720, delay, easing: 'cubic-bezier(.22,1,.36,1)' };
  return [
    element.animate([
      { transform: entrances[variant], composite: 'add' },
      { transform: 'translate3d(0,0,0)', composite: 'add' },
    ], timing),
    element.animate([{ opacity: opacity * .35 }, { opacity }], timing),
  ];
}

export function animateParallax(element: HTMLElement, subject: Element): Animation | null {
  const timelineWindow = window as typeof window & {
    ViewTimeline?: new (options: { subject: Element; axis: string }) => AnimationTimeline;
  };
  if (!timelineWindow.ViewTimeline) return null;
  const animation = element.animate([
    { transform: 'translate3d(0,0,0)', composite: 'add' },
    { transform: 'translate3d(0,-5px,0)', composite: 'add' },
    { transform: 'translate3d(0,0,0)', composite: 'add' },
  ], { timeline: new timelineWindow.ViewTimeline({ subject, axis: 'block' }), fill: 'both' });
  animation.id = 'nafas-parallax';
  return animation;
}
