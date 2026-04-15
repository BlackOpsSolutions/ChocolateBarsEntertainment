import Icon from './Icon';

export default function Story() {
  return (
    <section className="page page-story">
      <div className="container">
        <header className="page-header">
          <p className="section-label">About Us</p>
          <h1 className="page-title">About Chocolate Bars Entertainment</h1>
        </header>

        <div className="story-hero">
          <div className="story-hero-img">
            <img src="/DaniDilan.jpg" alt="Chocolate Bars and Dani Bertuna" />
          </div>
          <div className="story-hero-copy">
            <p>
              Chocolate Bars Entertainment is an independent entertainment company built around music,
              content, and curated experiences.
            </p>
            <p>
              What began as a creative outlet has evolved into a platform for developing artists, producing
              original work, and creating moments that leave a lasting impression. From music releases to
              digital media and live events, everything under CBE is designed to feel considered, polished,
              and just outside the expected.
            </p>
            <p className="story-pullquote">
              We don&rsquo;t follow formulas.<br />
              We create experiences people remember.
            </p>
          </div>
        </div>

        <div className="story-blocks">
          <div className="story-block">
            <span className="story-block-icon">
              <Icon name="handshake" size={22} />
            </span>
            <h2>Our Approach</h2>
            <p>
              We work with a small, carefully selected roster of artists, focusing on quality over quantity.
              Every project is approached with intention, from sound and performance to visual identity and
              overall experience. The goal is simple: create work that connects, stands out, and holds
              attention.
            </p>
          </div>
          <div className="story-block">
            <span className="story-block-icon">
              <Icon name="palette" size={22} />
            </span>
            <h2>Creative Direction</h2>
            <p>
              As both an artist and the founder, Chocolate Bars leads the creative direction behind CBE.
              From shaping an artist&rsquo;s sound to refining their image and positioning, the focus is on
              building something cohesive and recognisable. Not just releases, but a full experience around
              the artist.
            </p>
          </div>
          <div className="story-block">
            <span className="story-block-icon">
              <Icon name="calendar" size={22} />
            </span>
            <h2>For Bookings &amp; Collaborations</h2>
            <p>
              CBE artists are available for performances, events, and creative collaborations. Explore the
              roster to find the right fit for your event or project.
            </p>
          </div>
        </div>

        <div className="story-actions">
          <a href="#artists" className="btn btn-ghost">Explore Artists</a>
          <a href="#book" className="btn btn-primary">Book an Artist</a>
        </div>
      </div>
    </section>
  );
}
