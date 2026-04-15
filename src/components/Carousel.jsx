import { Children, cloneElement } from 'react';
import useCarousel from '../hooks/useCarousel';

export default function Carousel({ children, className, loop = false }) {
  const { ref, atStart, atEnd, scrollPrev, scrollNext } = useCarousel({ loop });

  let items = children;
  if (loop) {
    const arr = Children.toArray(children);
    items = [
      ...arr.map((c, i) => cloneElement(c, { key: `s1-${c.key ?? i}` })),
      ...arr.map((c, i) => cloneElement(c, { key: `s2-${c.key ?? i}` })),
      ...arr.map((c, i) => cloneElement(c, { key: `s3-${c.key ?? i}` })),
    ];
  }

  const showPrev = loop || !atStart;
  const showNext = loop || !atEnd;

  return (
    <div className="carousel-wrap">
      <button
        className={`carousel-arrow carousel-prev${!showPrev ? ' hidden' : ''}`}
        aria-label="Previous"
        onClick={scrollPrev}
      >
        &#8249;
      </button>
      <button
        className={`carousel-arrow carousel-next${!showNext ? ' hidden' : ''}`}
        aria-label="Next"
        onClick={scrollNext}
      >
        &#8250;
      </button>
      <div ref={ref} className={`${className}${loop || !atStart ? ' scrolled-left' : ''}`}>
        {items}
      </div>
    </div>
  );
}
