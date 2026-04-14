import { useState } from 'react';
import Icon from './Icon';

const FORMSPREE_URL = 'https://formspree.io/f/maqpango';

export default function SubmitMusic() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.target;
    const el = form.elements;
    const data = new FormData();
    data.append('Enquiry Type', 'Artist Submission');
    data.append('Artist / Full Name', el.name.value);
    data.append('Email', el.email.value);
    data.append('Genre', el.genre.value);
    data.append('Music Links', el.links.value);
    data.append('About', el.about.value);
    data.append('Source Page', 'Submit Music Page');
    data.append('Route To', 'artists@chocolatebarsentertainment.com.au');
    data.append('_subject', `CBE Submission \u2014 ${el.name.value || 'New Artist'}`);
    data.append('_replyto', el.email.value);

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
    <section className="page page-submit">
      <div className="container">
        <header className="page-header">
          <p className="section-label">Artist Submissions</p>
          <h1 className="page-title">Submit Your Music</h1>
          <p className="page-intro">
            Think you have what it takes? Share your work for consideration. We review a limited number of
            submissions.
          </p>
        </header>

        <div className="page-body">
          <aside className="booking-aside">
            <div className="booking-info-card">
              <Icon name="submit" size={22} />
              <div>
                <strong>What to include</strong>
                <p>Artist name, a short bio, and links to your best work on Spotify, Apple Music, SoundCloud, or YouTube.</p>
              </div>
            </div>
            <div className="booking-info-card">
              <Icon name="mail" size={22} />
              <div>
                <strong>Email</strong>
                <p>artists@chocolatebarsentertainment.com.au</p>
              </div>
            </div>
          </aside>

          <div className="booking-form-wrap">
            {!submitted ? (
              <form className="contact-form booking-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="s-name">Artist / Full Name</label>
                    <input id="s-name" name="name" type="text" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="s-email">Email</label>
                    <input id="s-email" name="email" type="email" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="s-genre">Genre</label>
                  <input id="s-genre" name="genre" type="text" placeholder="e.g. R&B / Hip Hop / Pop" />
                </div>
                <div className="form-group">
                  <label htmlFor="s-links">Links to Your Music</label>
                  <textarea
                    id="s-links"
                    name="links"
                    rows="3"
                    placeholder="Spotify / Apple Music / YouTube / SoundCloud"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="s-about">About You</label>
                  <textarea
                    id="s-about"
                    name="about"
                    rows="5"
                    placeholder={'Tell us who you are, what you\u2019re working on, and why CBE.'}
                    required
                  />
                </div>
                {error && <p className="form-error">{error}</p>}
                <button type="submit" className="btn btn-primary btn-full" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Submit for Review'}
                </button>
              </form>
            ) : (
              <div className="form-success visible">
                <span className="form-success-icon">
                  <Icon name="check" size={32} />
                </span>
                <p>Submission received. If it&rsquo;s a fit, we&rsquo;ll be in touch.</p>
                <a href="#home" className="btn btn-ghost">Back to Home</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
