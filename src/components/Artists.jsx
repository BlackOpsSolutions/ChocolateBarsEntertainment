import { useState } from 'react';
import artistsData from '../data/artists';
import Carousel from './Carousel';
import Icon from './Icon';

const filters = [
  { key: 'all', label: 'All Artists' },
  { key: 'rap', label: 'Hip Hop & Rap' },
  { key: 'rnb', label: 'R&B & Soul' },
  { key: 'pop', label: 'Pop' },
];

export default function Artists() {
  const [active, setActive] = useState('all');

  const visible = active === 'all'
    ? artistsData
    : artistsData.filter((a) => a.genre === active);

  return (
    <section className="artists" id="artists">
      <div className="container">
        <div className="section-header">
          <p className="section-label">The Roster</p>
          <h2 className="section-title">Explore Our Artists</h2>
          <p className="section-sub">
            Discover a curated selection of artists, each bringing their own sound, presence, and energy.
          </p>
          <p className="section-sub-minor">Available for bookings and collaborations.</p>
        </div>
        <div className="artists-filter">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`filter-btn${active === f.key ? ' active' : ''}`}
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <Carousel className="artists-grid">
          {visible.map((a) => (
            <a
              href={`#${a.route}`}
              className="artist-card"
              key={a.name}
              data-genre={a.genre}
            >
              {a.image ? (
                <div
                  className={`artist-img artist-img-photo${a.imageFit === 'contain' ? ' artist-img-contain' : ''}`}
                  style={a.imageFit === 'contain' && a.gradient ? { background: a.gradient } : undefined}
                >
                  <img
                    src={a.image}
                    alt={a.name}
                    style={{
                      objectFit: a.imageFit || 'cover',
                      objectPosition: a.imagePosition || 'center',
                    }}
                  />
                </div>
              ) : (
                <div className="artist-img" style={{ background: a.gradient }}>
                  <span className="artist-monogram">
                    {a.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}
                  </span>
                </div>
              )}
              <div className="artist-info">
                <h3>{a.name}</h3>
                <span className="artist-genre">{a.genreLabel}</span>
                <p>{a.description}</p>
                <span className="artist-link">
                  View Profile <Icon name="arrowRight" size={14} />
                </span>
              </div>
            </a>
          ))}
        </Carousel>

        <div className="artists-cta">
          <p className="artists-cta-heading">Think you have what it takes?</p>
          <p className="artists-cta-sub">Submit your music for consideration.</p>
          <a href="#submit" className="btn btn-primary">Submit Music</a>
          <p className="artists-cta-note">We review a limited number of submissions.</p>
        </div>
      </div>
    </section>
  );
}
