import { useRef, useState, useEffect, useCallback } from 'react';

export default function useCarousel() {
  const ref = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener('scroll', update, { passive: true });
    update();
    // Recalculate on resize
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

  // Drag to scroll
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
