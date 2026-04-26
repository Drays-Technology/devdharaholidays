export function Fleet() {
  return (
    <section className="fleet-section" id="fleet">
      <div className="section-header reveal" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px' }}>
        <p className="section-eyebrow">Our Fleet</p>
        <h2 className="section-title" style={{ maxWidth: '100%' }}>Complete Fleet of Cabs &amp; Travellers</h2>
        <p className="section-sub" style={{ maxWidth: '100%' }}>
          We own and operate our entire fleet — so you get reliable, well-maintained vehicles with experienced hill drivers, every single time.
        </p>
      </div>
      <div className="fleet-grid">
        <div className="fleet-card reveal">
          <span className="fleet-icon" aria-hidden="true">
            <svg viewBox="0 0 64 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18h52M10 18l6-10h24l6 10" stroke="#2d5a27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="4" y="18" width="56" height="7" rx="2" stroke="#2d5a27" strokeWidth="1.8" />
              <circle cx="16" cy="26" r="3" fill="#fff" stroke="#2d5a27" strokeWidth="1.8" />
              <circle cx="48" cy="26" r="3" fill="#fff" stroke="#2d5a27" strokeWidth="1.8" />
              <path d="M16 8h14" stroke="#c9872a" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </span>
          <div className="fleet-name">Sedan / Hatchback</div>
          <div className="fleet-desc">Swift Dzire, Etios and similar compact sedans — perfect for couples and small families seeking comfort on mountain roads.</div>
          <span className="fleet-capacity">2–4 Passengers</span>
        </div>
        <div className="fleet-card reveal">
          <span className="fleet-icon" aria-hidden="true">
            <svg viewBox="0 0 64 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 18h56M8 18l4-11h28l6 11" stroke="#2d5a27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="2" y="18" width="60" height="7" rx="2" stroke="#2d5a27" strokeWidth="1.8" />
              <circle cx="15" cy="26" r="3" fill="#fff" stroke="#2d5a27" strokeWidth="1.8" />
              <circle cx="49" cy="26" r="3" fill="#fff" stroke="#2d5a27" strokeWidth="1.8" />
              <path d="M12 7h20" stroke="#c9872a" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M4 18v-3" stroke="#2d5a27" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </span>
          <div className="fleet-name">SUV &amp; Innova</div>
          <div className="fleet-desc">Toyota Innova Crysta and similar SUVs — a practical choice for group travel on long mountain routes including Spiti and Lahaul.</div>
          <span className="fleet-capacity">5–7 Passengers</span>
        </div>
        <div className="fleet-card reveal">
          <span className="fleet-icon" aria-hidden="true">
            <svg viewBox="0 0 64 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="6" width="60" height="19" rx="2" stroke="#2d5a27" strokeWidth="1.8" />
              <path d="M2 14h60" stroke="#2d5a27" strokeWidth="1.2" strokeDasharray="3 2" />
              <circle cx="13" cy="26" r="3" fill="#fff" stroke="#2d5a27" strokeWidth="1.8" />
              <circle cx="51" cy="26" r="3" fill="#fff" stroke="#2d5a27" strokeWidth="1.8" />
              <rect x="8" y="8" width="7" height="5" rx="1" stroke="#c9872a" strokeWidth="1.5" />
              <rect x="20" y="8" width="7" height="5" rx="1" stroke="#c9872a" strokeWidth="1.5" />
              <rect x="32" y="8" width="7" height="5" rx="1" stroke="#c9872a" strokeWidth="1.5" />
              <rect x="44" y="8" width="7" height="5" rx="1" stroke="#c9872a" strokeWidth="1.5" />
            </svg>
          </span>
          <div className="fleet-name">Tempo Traveller</div>
          <div className="fleet-desc">12-seater and 16-seater Tempo Travellers with push-back seats and charging points — ideal for large group tours and pilgrimages.</div>
          <span className="fleet-capacity">10–16 Passengers</span>
        </div>
      </div>
    </section>
  )
}
