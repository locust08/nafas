export type MotionVariant = 'left' | 'right' | 'up' | 'fade' | 'bounce' | 'diagonal-left' | 'diagonal-right' | 'scale-left' | 'scale-right' | 'diagonal' | 'scale' | 'rotate' | 'layer';

export const entranceEasing = 'cubic-bezier(.22,.7,.25,1)';

export function entranceTransform(variant: MotionVariant, distance: number): string {
  const diagonal = Math.round(distance * .72);
  switch (variant) {
    case 'left': return `translate3d(-${distance}px,0,0)`;
    case 'right': return `translate3d(${distance}px,0,0)`;
    case 'diagonal-left': return `translate3d(-${diagonal}px,${diagonal}px,0)`;
    case 'diagonal': case 'diagonal-right': return `translate3d(${diagonal}px,${diagonal}px,0)`;
    case 'scale-left': return `translate3d(-${distance}px,${Math.round(distance * .4)}px,0) scale(.975)`;
    case 'scale-right': case 'layer': return `translate3d(${distance}px,${Math.round(distance * .4)}px,0) scale(.975)`;
    case 'scale': case 'rotate': return `translate3d(0,${distance}px,0) scale(.975)`;
    default: return `translate3d(0,${distance}px,0)`;
  }
}

export function entranceDistance(width: number, height: number, mobile: boolean): number {
  return Math.round(Math.min(mobile ? 64 : 90, Math.max(40, Math.max(width, height) * .12)));
}

// Additive transforms preserve skew, positioning and opacity from approved CSS.
// No hidden idle state: content remains readable if observation or JS fails.
export function animateEntrance(element: HTMLElement | SVGElement, variant: MotionVariant, delay = 0, duration?: number, profile?: { distance: number; easing: string; maxDelay: number }): Animation[] {
  const opacity = Number(getComputedStyle(element).opacity);
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return [];
  const rect = element.getBoundingClientRect();
  const distance = profile?.distance ?? entranceDistance(rect.width, rect.height, window.innerWidth < 768);
  const boundedDelay = Number.isFinite(delay) ? Math.min(profile?.maxDelay ?? 480, Math.max(0, delay)) : 0;
  const timing: KeyframeAnimationOptions = { duration: duration ?? Math.min(1200, 1000 + distance * 3), delay: boundedDelay, easing: profile?.easing ?? entranceEasing, fill: 'backwards' };
  if (variant === 'fade') return [element.animate([{ opacity: 0 }, { opacity }], timing)];
  const transforms: Keyframe[] = variant === 'bounce' ? [
    { transform: `translate3d(0,${distance * .5}px,0) scale(.96)`, composite: 'add', offset: 0 },
    { transform: 'translate3d(0,-8px,0) scale(1.015)', composite: 'add', offset: .65 },
    { transform: 'translate3d(0,3px,0) scale(.995)', composite: 'add', offset: .82 },
    { transform: 'translate3d(0,0,0) scale(1)', composite: 'add', offset: 1 },
  ] : [
    { transform: entranceTransform(variant, distance), composite: 'add' },
    { transform: 'translate3d(0,0,0)', composite: 'add' },
  ];
  return [
    element.animate(transforms, timing),
    element.animate([{ opacity: opacity * .65 }, { opacity }], timing),
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
