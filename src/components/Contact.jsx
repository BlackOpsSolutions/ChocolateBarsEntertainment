import { useRef, useState } from 'react';
import Icon from './Icon';

const FORMSPREE_URL = 'https://formspree.io/f/maqpango'; // Locked to the Domain so no one else can use it

const INTENT_OPTIONS = [
  {
    key: 'booking',
    icon: 'calendar',
    title: 'Book an Artist',
    detail: 'Performances, events, private bookings',
    email: 'bookings@chocolatebarsentertainment.com.au',
    href: '#book',
  },
  {
    key: 'submission',
    icon: 'submit',
    title: 'Submit Music',
    detail: 'For artist consideration',
    email: 'artists@chocolatebarsentertainment.com.au',
    href: '#submit',
  },
  {
    key: 'enquiry',
    icon: 'mail',
    title: 'General Enquiry',
    detail: 'Collaborations, press, everything else',
    email: 'hello@chocolatebarsentertainment.com.au',
    href: null,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [intent, setIntent] = useState('enquiry');
  const formRef = useRef(null);

  const selectIntent = (key) => {
    setIntent(key);
    if (window.matchMedia('(max-width: 900px)').matches && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const focusable = formRef.current.querySelector('input, textarea, select');
      if (focusable) setTimeout(() => focusable.focus({ preventScroll: true }), 400);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const option = INTENT_OPTIONS.find((i) => i.key === intent);
    const form = e.target;
    const data = new FormData();
    data.append('Enquiry Type', option?.title || 'General Enquiry');
    data.append('Full Name', form.elements.name.value);
    data.append('Email', form.elements.email.value);
    data.append('Message', form.elements.message.value);
    data.append('Source Page', 'Homepage \u2014 Contact Section');
    data.append('Route To', option?.email || 'hello@chocolatebarsentertainment.com.au');
    data.append('_subject', `CBE Website \u2014 ${option?.title || 'Enquiry'}`);
    data.append('_replyto', form.elements.email.value);

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
            <p className="section-label">Let&rsquo;s Talk</p>
            <h2 className="section-title">Ready to Work<br />With Us?</h2>
            <p className="contact-body">
              Whether you&rsquo;re looking to book an artist, collaborate, or submit your music, we&rsquo;d
              love to hear from you. Select the option below and we&rsquo;ll get back to you.
            </p>
            <div className="contact-intents">
              {INTENT_OPTIONS.map((opt) => (
                <button
                  key={opt.key}
                  type="button"
                  className={`intent-card${intent === opt.key ? ' active' : ''}`}
                  onClick={() => selectIntent(opt.key)}
                >
                  <span className="intent-icon">
                    <Icon name={opt.icon} size={20} />
                  </span>
                  <span className="intent-body">
                    <strong>{opt.title}</strong>
                    <span className="intent-detail">{opt.detail}</span>
                    <span className="intent-email">{opt.email}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className="contact-form-wrap" ref={formRef}>
            {!submitted ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input type="hidden" name="intent" value={intent} />
                <input
                  type="hidden"
                  name="_replyto"
                  value={INTENT_OPTIONS.find((i) => i.key === intent)?.email || ''}
                />
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="type">Enquiry Type</label>
                  <select
                    id="type"
                    name="type"
                    value={intent}
                    onChange={(e) => setIntent(e.target.value)}
                  >
                    {INTENT_OPTIONS.map((o) => (
                      <option key={o.key} value={o.key}>{o.title}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Tell us a bit about what you need..." required />
                </div>
                {error && <p className="form-error">{error}</p>}
                <button type="submit" className="btn btn-primary btn-full" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Send Enquiry'}
                </button>
              </form>
            ) : (
              <div className="form-success visible">
                <span className="form-success-icon">
                  <Icon name="check" size={32} />
                </span>
                <p>Enquiry received. We&rsquo;ll be in touch shortly.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
