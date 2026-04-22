const EVENTBRITE_URL = 'https://www.eventbrite.com/e/black-gold-after-dark-dirty-thirty-yacht-party-tickets-1987968709926';

export default function Events() {
  return (
    <section className="page page-events">
      <div className="container">
        <header className="page-header">
          <p className="section-label">Upcoming</p>
          <h1 className="page-title">Events &amp; Experiences</h1>
        </header>

        <div className="event-flyer">
          <img src="/YachtPartyEvent.jpg" alt="Yacht Party event flyer" />
        </div>

        <div className="event-details">
          <p className="event-intro">
            A limited-capacity, two-part experience.<br />
            Start on the river. Finish at The Tax Office.<br />
            Curated crowd. Premium energy.
          </p>

          <div className="event-cta">
            <a
              href={EVENTBRITE_URL}
              className="btn btn-primary btn-event"
              target="_blank"
              rel="noopener noreferrer"
            >
              Secure your place
            </a>
            <p className="event-scarcity">
              Strictly limited allocation. Once sold out, no further tickets will be released.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
