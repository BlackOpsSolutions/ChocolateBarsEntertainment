export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <svg className="hero-chocbar" viewBox="0 0 500 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <clipPath id="barClip">
              <path d="M 1,1 L 318,1 C 282,12 276,54 352,68 C 322,80 326,114 412,124 C 388,134 443,167 499,160 L 499,319 L 1,319 Z" />
            </clipPath>
          </defs>
          <path d="M 362,14 L 372,10 L 380,16 L 377,25 L 367,28 L 358,21 Z" stroke="#c8922a" strokeWidth="1.5" transform="rotate(-15, 369, 19)" />
          <g clipPath="url(#barClip)">
            <path d="M 1,1 L 318,1 C 282,12 276,54 352,68 C 322,80 326,114 412,124 C 388,134 443,167 499,160 L 499,319 L 1,319 Z" stroke="#c8922a" strokeWidth="2" />
            {[22, 116, 210, 304, 398].map((x) => (
              <rect key={`r1-${x}`} x={x} y="22" width="80" height="131" rx="6" stroke="#c8922a" strokeWidth="1.5" />
            ))}
            {[22, 116, 210, 304, 398].map((x) => (
              <rect key={`r2-${x}`} x={x} y="167" width="80" height="131" rx="6" stroke="#c8922a" strokeWidth="1.5" />
            ))}
          </g>
        </svg>
        <div className="bars-visual">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="bar" />
          ))}
        </div>
      </div>
      <div className="hero-content">
        <p className="hero-eyebrow">Independent. Authentic. Sweet.</p>
        <h1 className="hero-title">
          <span className="title-choc">Chocolate</span><br />
          <span className="title-bars">Bars</span><br />
          <span className="title-ent">Entertainment</span>
        </h1>
        <p className="hero-tagline">
          Where fresh voices meet sweet opportunity —<br />
          an independent label for artists who deserve to be heard.
        </p>
        <div className="hero-actions">
          <a href="#artists" className="btn btn-primary">Explore Our Artists</a>
          <a href="#about" className="btn btn-ghost">Our Story</a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
