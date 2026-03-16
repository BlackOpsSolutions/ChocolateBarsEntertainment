import { useState } from 'react';
import artistsData from '../data/artists';
import Carousel from './Carousel';

const filters = [
  { key: 'all', label: 'All Artists' },
  { key: 'rap', label: 'Hip-Hop / Rap' },
  { key: 'rnb', label: 'R&B / Soul' },
  { key: 'afro', label: 'Afrobeats' },
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
          <p className="section-sub">Each voice on this label is one-of-a-kind. Get acquainted.</p>
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
            <div className="artist-card" key={a.name} data-genre={a.genre}>
              {a.image ? (
                <div className="artist-img artist-img-photo">
                  <img src={a.image} alt={a.name} />
                </div>
              ) : (
                <div className="artist-img" style={{ background: a.gradient }}>
                  <span className="artist-emoji">{a.emoji}</span>
                </div>
              )}
              <div className="artist-info">
                <h3>{a.name}</h3>
                <span className="artist-genre">{a.genreLabel}</span>
                <p>{a.description}</p>
                <a href="#contact" className="artist-link">Book &rarr;</a>
              </div>
            </div>
          ))}
        </Carousel>

        <div className="artists-cta">
          <p>Think you belong on this roster?</p>
          <a href="#contact" className="btn btn-primary">Submit Your Music</a>
        </div>
      </div>
    </section>
  );
}
