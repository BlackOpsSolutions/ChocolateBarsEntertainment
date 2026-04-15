import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMobileOpen(false);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#home" className="nav-logo">
          <img src="/ChocolateBarsEnt.jpg" alt="Chocolate Bars Entertainment" className="nav-logo-img" />
          <span className="logo-text">
            <span className="logo-choc">Chocolate</span>
            <span className="logo-bars">Bars</span>
            <span className="logo-ent">Entertainment</span>
          </span>
        </a>
        <ul className="nav-links">
          <li><a href="#story">About</a></li>
          <li><a href="#artists">Artists</a></li>
          <li><a href="#releases">Releases</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#book" className="nav-cta nav-cta-always">Book an Artist</a>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
      <div className={`nav-mobile${mobileOpen ? ' open' : ''}`}>
        <a href="#story" onClick={close}>About</a>
        <a href="#artists" onClick={close}>Artists</a>
        <a href="#releases" onClick={close}>Releases</a>
        <a href="#contact" onClick={close}>Contact</a>
        <a href="#book" onClick={close}>Book an Artist</a>
      </div>
    </nav>
  );
}
