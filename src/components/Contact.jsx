import { useState } from 'react';

const FORMSPREE_URL = 'https://formspree.io/f/maqpango'; // Locked to the Domain so no one else can use it

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const data = new FormData(e.target);

    fetch(FORMSPREE_URL, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to send');
        setSubmitted(true);
      })
      .catch(() => setError('Something went wrong. Please try again or email us directly.'))
      .finally(() => setSubmitting(false));
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
              collaborator with a vision — Chocolate Bars' door is open. Pull up.
            </p>
            <div className="contact-details">
              {[
                { icon: '\u{1F4E7}', title: 'General Inquiries', detail: 'info@chocolatebarsentertainment.com.au' },
                { icon: '\u{1F3B5}', title: 'Artist Submissions', detail: 'demo@chocolatebarsentertainment.com.au' },
                { icon: '\u{1F3A4}', title: 'Booking', detail: 'booking@chocolatebarsentertainment.com.au' },
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
                  <input type="text" id="name" name="name" placeholder="What do they call you?" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="type">I'm reaching out about...</label>
                  <select id="type" name="type" defaultValue="">
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
                  <textarea id="message" name="message" rows="5" placeholder="Say what you need to say..." required />
                </div>
                {error && <p className="form-error">{error}</p>}
                <button type="submit" className="btn btn-primary btn-full" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Send It \u2192'}
                </button>
              </form>
            ) : (
              <div className="form-success visible">
                <span>&#9989;</span>
                <p>Message received. Chocolate Bars will be in touch.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
