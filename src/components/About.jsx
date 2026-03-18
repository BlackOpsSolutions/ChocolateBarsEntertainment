export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-badge">Est. Since Day One</div>
            <div className="about-image-frame">
              <img src="/ChocolateBarsPersona.jpg" alt="Chocolate Bars" className="about-photo" />
            </div>
            {/* <div className="about-stat-cards">
              <div className="stat-card"><span className="stat-num">20+</span><span className="stat-label">Artists Signed</span></div>
              <div className="stat-card"><span className="stat-num">100+</span><span className="stat-label">Tracks Released</span></div>
            </div> */}
          </div>
          <div className="about-text">
            <p className="section-label">Who We Are</p>
            <h2 className="section-title">Built on Bars.<br />Powered by Soul.</h2>
            <p className="about-body">
              Chocolate Bars Entertainment was born from a simple truth: great music deserves great backing.
              Founded by Chocolate Bars himself — a smooth operator with an ear for talent and a gift for
              knowing what hits — CBE is the home for artists who have the sauce but needed the stage.
            </p>
            <p className="about-body">
              We're not a major label with a cookie-cutter mold. We're independent, we're intentional, and
              we're invested in every artist we work with. Whether you're spitting bars, singing your soul
              out, or producing the next wave — if you've got the gift, we've got the platform.
            </p>
            <div className="about-values">
              {[
                { icon: '\u{1F3B5}', title: 'Authentic Sound', text: 'No filters on talent here. We let artists be who they are.' },
                { icon: '\u{1F91D}', title: 'Real Partnerships', text: 'Artists are family. We grow together or not at all.' },
                { icon: '\u{1F680}', title: 'Full Support', text: 'From the booth to the billboard — we ride the whole way.' },
              ].map((v) => (
                <div className="value-item" key={v.title}>
                  <span className="value-icon">{v.icon}</span>
                  <div>
                    <strong>{v.title}</strong>
                    <p>{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
