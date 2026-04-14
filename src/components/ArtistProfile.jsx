import artistsData from '../data/artists';
import Icon from './Icon';

export default function ArtistProfile({ slug }) {
  const artist = artistsData.find((a) => a.slug === slug);
  if (!artist) {
    return (
      <section className="page">
        <div className="container">
          <h1 className="page-title">Artist not found</h1>
          <a href="#artists" className="btn btn-ghost">Back to roster</a>
        </div>
      </section>
    );
  }

  return (
    <section className="page page-artist">
      <div className="container">
        <a href="#artists" className="page-back">
          <Icon name="arrowRight" size={14} className="flip" /> Back to Roster
        </a>

        <div className="artist-profile-grid">
          <div className="artist-profile-visual">
            {artist.image ? (
              <img src={artist.image} alt={artist.name} className="artist-profile-photo" />
            ) : (
              <div className="artist-profile-photo placeholder" style={{ background: artist.gradient }}>
                <span className="artist-monogram">
                  {artist.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}
                </span>
              </div>
            )}
            <div className="artist-profile-meta">
              <span className="artist-genre">{artist.genreLabel}</span>
            </div>
          </div>

          <div className="artist-profile-body">
            <p className="section-label">Artist Profile</p>
            <h1 className="page-title">{artist.name}</h1>
            <p className="artist-profile-tagline">{artist.description}</p>

            <div className="artist-profile-extended">
              {artist.extended.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="artist-available">
              <h3>
                <Icon name="star" size={18} />
                Available for
              </h3>
              <ul>
                {artist.availableFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="artist-profile-actions">
              <a href="#book" className="btn btn-primary">Book {artist.name.split(' ')[0]}</a>
              <a href="#contact" className="btn btn-ghost">General Enquiry</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
