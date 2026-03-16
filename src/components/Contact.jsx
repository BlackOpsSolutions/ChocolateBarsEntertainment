import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-text">
            <p className="section-label">Let's Talk</p>
            <h2 className="section-title">Got The Gift?<br />We Got The Stage.</h2>
            <p className="contact-body">
              Whether you're an artist ready to take the next step, a promoter looking to book, or a
              collaborator with a vision — Chocolate's door is open. Pull up.
            </p>
            <div className="contact-details">
              {[
                { icon: '\u{1F4E7}', title: 'General Inquiries', detail: 'info@chocolatebars.com.au' },
                { icon: '\u{1F3B5}', title: 'Artist Submissions', detail: 'demo@chocolatebars.com.au' },
                { icon: '\u{1F3A4}', title: 'Booking', detail: 'booking@chocolatebars.com.au' },
              ].map((c) => (
                <div className="contact-item" key={c.title}>
                  <span className="contact-icon">{c.icon}</span>
                  <div>
                    <strong>{c.title}</strong>
                    <span>{c.detail}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="social-links">
              {['Instagram', 'Twitter / X', 'YouTube', 'TikTok'].map((s) => (
                <a key={s} href="#" className="social-btn">{s}</a>
              ))}
            </div>
          </div>
          <div className="contact-form-wrap">
            {!submitted ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" placeholder="What do they call you?" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="type">I'm reaching out about...</label>
                  <select id="type" defaultValue="">
                    <option value="">Select a reason</option>
                    <option value="artist">Artist Submission / Signing</option>
                    <option value="booking">Booking an Artist</option>
                    <option value="collab">Collaboration</option>
                    <option value="press">Press / Media</option>
                    <option value="other">Something Else</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" rows="5" placeholder="Say what you need to say..." required />
                </div>
                <button type="submit" className="btn btn-primary btn-full">Send It &rarr;</button>
              </form>
            ) : (
              <div className="form-success visible">
                <span>&#9989;</span>
                <p>Message received. Chocolate will be in touch.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
