import { useEffect, useRef } from 'react';

interface InfiniteScrollObserverProps {
  onIntersect: () => void;
  enabled?: boolean;
  rootMargin?: string;
  threshold?: number;
}

export default function InfiniteScrollObserver({
  onIntersect,
  enabled = true,
  rootMargin = '0px',
  threshold = 1.0,
}: InfiniteScrollObserverProps) {
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!enabled || !targetRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersect();
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(targetRef.current);

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [enabled, onIntersect, rootMargin, threshold]);

  return <div ref={targetRef} style={{ height: '1px' }} />;
}
