import useCarousel from '../hooks/useCarousel';

export default function Carousel({ children, className }) {
  const { ref, atStart, atEnd, scrollPrev, scrollNext } = useCarousel();

  return (
    <div className="carousel-wrap">
      <button
        className={`carousel-arrow carousel-prev${atStart ? ' hidden' : ''}`}
        aria-label="Previous"
        onClick={scrollPrev}
      >
        &#8249;
      </button>
      <button
        className={`carousel-arrow carousel-next${atEnd ? ' hidden' : ''}`}
        aria-label="Next"
        onClick={scrollNext}
      >
        &#8250;
      </button>
      <div ref={ref} className={`${className}${!atStart ? ' scrolled-left' : ''}`}>
        {children}
      </div>
    </div>
  );
}
