'use client';

import { useRef, type DragEvent, type PointerEvent, type RefObject } from 'react';

export function useDragScroll(ref: RefObject<HTMLDivElement | null>) {
  const drag = useRef<{ pointerId: number; startX: number; scrollLeft: number } | null>(null);

  const finish = (event: PointerEvent<HTMLDivElement>) => {
    if (drag.current?.pointerId !== event.pointerId) return;
    drag.current = null;
    delete event.currentTarget.dataset.dragging;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  };

  return {
    onPointerDown(event: PointerEvent<HTMLDivElement>) {
      // Touch keeps the browser's native swipe and vertical page scrolling.
      if (event.pointerType === 'touch' || event.button !== 0 || !event.isPrimary || !ref.current) return;
      event.preventDefault();
      const node = event.currentTarget;
      drag.current = { pointerId: event.pointerId, startX: event.clientX, scrollLeft: node.scrollLeft };
      node.dataset.dragging = 'true';
      node.setPointerCapture(event.pointerId);
    },
    onPointerMove(event: PointerEvent<HTMLDivElement>) {
      if (drag.current?.pointerId !== event.pointerId) return;
      event.preventDefault();
      event.currentTarget.scrollLeft = drag.current.scrollLeft - (event.clientX - drag.current.startX);
    },
    onPointerUp: finish,
    onPointerCancel: finish,
    onLostPointerCapture: finish,
    onDragStart(event: DragEvent<HTMLDivElement>) {
      event.preventDefault();
    },
  };
}
