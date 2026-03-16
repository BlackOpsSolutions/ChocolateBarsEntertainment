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
            <p>Where fresh voices meet sweet opportunity.<br />An independent label for artists who deserve to be heard.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Navigate</h4>
              <a href="#about">About</a>
              <a href="#artists">Artists</a>
              <a href="#releases">Releases</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-col">
              <h4>For Artists</h4>
              <a href="#contact">Submit a Demo</a>
              <a href="#contact">Sign With Us</a>
              <a href="#contact">Booking</a>
            </div>
            <div className="footer-col">
              <h4>Follow Us</h4>
              <a href="#">Instagram</a>
              <a href="#">Twitter / X</a>
              <a href="#">YouTube</a>
              <a href="#">TikTok</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Chocolate Bars Entertainment. All rights reserved. Powered by BlackOps Solutions IT</p>
          <p className="footer-tag">Built smooth. Run different.</p>
        </div>
      </div>
    </footer>
  );
}
