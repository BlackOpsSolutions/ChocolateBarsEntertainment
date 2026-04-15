import { useRef, useState, useEffect, useCallback } from 'react';

export default function useCarousel({ loop = false } = {}) {
  const ref = useRef(null);
  const [atStart, setAtStart] = useState(!loop);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    if (loop) {
      setAtStart(false);
      setAtEnd(false);
      return;
    }
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, [loop]);

  // Center featured on mount for loop mode
  useEffect(() => {
    if (!loop) return;
    const el = ref.current;
    if (!el) return;

    const init = () => {
      const cards = el.querySelectorAll('[class*="-card"]');
      if (cards.length < 3) return;
      const middleIdx = Math.floor(cards.length / 3);
      const target = cards[middleIdx];
      const offset = target.offsetLeft - (el.clientWidth - target.offsetWidth) / 2;
      el.scrollLeft = Math.max(0, offset);
    };

    const raf = requestAnimationFrame(init);
    const settle = setTimeout(init, 250);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(settle);
    };
  }, [loop]);

  // Seamless wrap: silently jump scroll position near edges
  useEffect(() => {
    if (!loop) return;
    const el = ref.current;
    if (!el) return;

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const setWidth = el.scrollWidth / 3;
        if (el.scrollLeft < setWidth * 0.2) {
          el.scrollLeft += setWidth;
        } else if (el.scrollLeft > setWidth * 1.8) {
          el.scrollLeft -= setWidth;
        }
        ticking = false;
      });
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [loop]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener('scroll', update, { passive: true });
    update();
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [update]);

  const cardWidth = useCallback(() => {
    const el = ref.current;
    if (!el) return 300;
    const card = el.querySelector('[class*="-card"]:not(.hidden)');
    if (!card) return 300;
    const gap = parseFloat(getComputedStyle(el).gap) || 24;
    return card.offsetWidth + gap;
  }, []);

  const scrollPrev = useCallback(() => {
    ref.current?.scrollBy({ left: -cardWidth(), behavior: 'smooth' });
  }, [cardWidth]);

  const scrollNext = useCallback(() => {
    ref.current?.scrollBy({ left: cardWidth(), behavior: 'smooth' });
  }, [cardWidth]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let isDragging = false;
    let startX = 0;
    let startScroll = 0;

    const onDown = (e) => {
      isDragging = true;
      startX = e.pageX - el.offsetLeft;
      startScroll = el.scrollLeft;
      el.classList.add('dragging');
    };

    const onUp = () => {
      if (!isDragging) return;
      isDragging = false;
      el.classList.remove('dragging');
    };

    const onMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      el.scrollLeft = startScroll - (x - startX) * 1.2;
    };

    el.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mousemove', onMove);

    return () => {
      el.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return { ref, atStart, atEnd, scrollPrev, scrollNext };
}
