export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-choc">Chocolate</span><span className="logo-bars">Bars</span><br />
              <span className="logo-ent">Entertainment</span>
            </div>
            <p>Where fresh voices meet real opportunity.<br />A platform for artists, content, and live experiences that connect and stand out.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Navigate</h4>
              <a href="#story">About</a>
              <a href="#artists">Artists</a>
              <a href="#releases">Releases</a>
              <a href="#events">Events</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-col">
              <h4>Work With Us</h4>
              <a href="#book">Book an Artist</a>
              <a href="#submit">Submit Music</a>
              <a href="#contact">General Enquiry</a>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <a href="mailto:hello@chocolatebarsentertainment.com.au">hello@chocolatebarsentertainment.com.au</a>
              <a href="mailto:bookings@chocolatebarsentertainment.com.au">bookings@chocolatebarsentertainment.com.au</a>
              <a href="mailto:artists@chocolatebarsentertainment.com.au">artists@chocolatebarsentertainment.com.au</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Chocolate Bars Entertainment. All rights reserved. Powered by BlackOps Solutions IT</p>
          <p className="footer-tag">Independent. Intentional. Iconic.</p>
        </div>
      </div>
    </footer>
  );
}
