import { useState } from 'react';
import artistsData from '../data/artists';
import Icon from './Icon';
import { getHashParam } from '../hooks/useRoute';

const FORMSPREE_URL = 'https://formspree.io/f/maqpango';

export default function Bookings() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const prefilledArtist = (() => {
    const fromHash = getHashParam('artist');
    if (!fromHash) return '';
    return artistsData.find((a) => a.name === fromHash)?.name || '';
  })();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.target;
    const el = form.elements;
    const data = new FormData();
    data.append('Enquiry Type', 'Booking Enquiry');
    data.append('Full Name', el.name.value);
    data.append('Email', el.email.value);
    data.append('Phone', el.phone.value);
    data.append('Event Type', el.eventType.value);
    data.append('Event Date', el.eventDate.value);
    data.append('Location', el.location.value);
    data.append('Budget', el.budget.value);
    data.append('Preferred Artist', el.preferredArtist.value);
    data.append('Additional Details', el.details.value);
    data.append('Source Page', 'Bookings Page');
    data.append('Route To', 'bookings@chocolatebarsentertainment.com.au');
    data.append('_subject', `CBE Booking \u2014 ${el.eventType.value || 'Enquiry'} \u2014 ${el.eventDate.value || 'TBD'}`);
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
    <section className="page page-book">
      <div className="container">
        <header className="page-header">
          <p className="section-label">Bookings</p>
          <h1 className="page-title">Book a CBE Artist</h1>
          <p className="page-intro">
            Enquire about booking Chocolate Bars Entertainment artists for your next event.
          </p>
        </header>

        <div className="page-body">
          <aside className="booking-aside">
            <div className="booking-info-card">
              <Icon name="calendar" size={22} />
              <div>
                <strong>Direct to Bookings</strong>
                <p>All enquiries routed to our bookings desk for a personal response.</p>
              </div>
            </div>
            <div className="booking-info-card">
              <Icon name="mail" size={22} />
              <div>
                <strong>Email</strong>
                <p>bookings@chocolatebarsentertainment.com.au</p>
              </div>
            </div>
            <div className="booking-info-card">
              <Icon name="star" size={22} />
              <div>
                <strong>Available Artists</strong>
                <p>{artistsData.map((a) => a.name).join(' \u2022 ')}</p>
              </div>
            </div>
          </aside>

          <div className="booking-form-wrap">
            {!submitted ? (
              <form className="contact-form booking-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="b-name">Full Name</label>
                    <input id="b-name" name="name" type="text" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="b-email">Email</label>
                    <input id="b-email" name="email" type="email" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="b-phone">Phone</label>
                    <input id="b-phone" name="phone" type="tel" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="b-event-type">Event Type</label>
                    <select id="b-event-type" name="eventType" defaultValue="" required>
                      <option value="" disabled>Select event type</option>
                      <option>Private Event</option>
                      <option>Corporate</option>
                      <option>Venue / Club</option>
                      <option>Festival</option>
                      <option>Wedding</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="b-date">Event Date</label>
                    <input id="b-date" name="eventDate" type="date" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="b-location">Location</label>
                    <input id="b-location" name="location" type="text" placeholder="City, venue" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="b-budget">Budget</label>
                    <select id="b-budget" name="budget" defaultValue="">
                      <option value="" disabled>Select a range</option>
                      <option>Under $2,000</option>
                      <option>{'$2,000 \u2013 $5,000'}</option>
                      <option>{'$5,000 \u2013 $10,000'}</option>
                      <option>{'$10,000 \u2013 $20,000'}</option>
                      <option>$20,000+</option>
                      <option>Flexible / TBD</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="b-artist">Preferred Artist</label>
                    <select id="b-artist" name="preferredArtist" defaultValue={prefilledArtist}>
                      <option value="" disabled>Select an artist</option>
                      {artistsData.map((a) => (
                        <option key={a.slug} value={a.name}>{a.name}</option>
                      ))}
                      <option>No preference / recommend someone</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="b-details">Additional Details</label>
                  <textarea
                    id="b-details"
                    name="details"
                    rows="5"
                    placeholder="Tell us about the event, audience, set length, and anything else that helps us tailor the booking."
                  />
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
                <p>Booking enquiry received. Our team will be in touch.</p>
                <a href="#home" className="btn btn-ghost">Back to Home</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
