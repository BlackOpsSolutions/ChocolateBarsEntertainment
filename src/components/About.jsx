import Icon from './Icon';

const VALUES = [
  {
    icon: 'mic',
    title: 'Authentic Sound',
    text: 'No filters, no forced direction. Artists are supported to sound like themselves, not what the market expects.',
  },
  {
    icon: 'handshake',
    title: 'Real Partnerships',
    text: 'We work closely with a small roster. Every artist matters, and every project gets attention.',
  },
  {
    icon: 'palette',
    title: 'Full Creative Direction',
    text: 'From concept to release, we shape the sound, visuals, and overall experience around each artist.',
  },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-badge">Independent &middot; Intentional</div>
            <div className="about-image-frame">
              <img src="/ChocolateBarsPersona.jpg" alt="Chocolate Bars" className="about-photo" />
            </div>
          </div>
          <div className="about-text">
            <p className="section-label">Who We Are</p>
            <h2 className="section-title">Great music deserves<br />the right platform.</h2>
            <p className="about-body">
              Chocolate Bars Entertainment was built on a simple idea: great music deserves the right platform.
              Founded by Chocolate Bars, CBE exists to develop artists, produce original work, and create
              experiences that actually connect. It&rsquo;s a space for talent that knows who they are and is
              ready to be seen.
            </p>
            <p className="about-body">
              We&rsquo;re independent, intentional, and selective about who we work with. No templates, no
              shortcuts. Just good music, strong identity, and the right support behind it.
            </p>
            <div className="about-values">
              {VALUES.map((v) => (
                <div className="value-item" key={v.title}>
                  <span className="value-icon">
                    <Icon name={v.icon} size={22} />
                  </span>
                  <div>
                    <strong>{v.title}</strong>
                    <p>{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="about-actions">
              <a href="#story" className="btn btn-ghost">Read Our Story</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
