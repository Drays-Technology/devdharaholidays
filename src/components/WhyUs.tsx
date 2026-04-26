export function WhyUs() {
  return (
    <div className="why-section deferred-section">
      <div className="why-img reveal-left">
        <img src="/images/places/detail/hampta-pass.jpg" alt="Mountain journey" loading="lazy" onLoad={(e) => (e.target as HTMLImageElement).classList.add('loaded')} />
      </div>
      <div className="why-content reveal-right">
        <p className="section-eyebrow" style={{ color: 'var(--gold-light)' }}>Why Devdhara</p>
        <h2 className="section-title light">Travel with people who know the mountains</h2>
        <div className="why-items">
          <div className="why-item">
            <div className="why-num" aria-hidden="true">01</div>
            <div className="why-text">
              <h4>Local Experts, Deeper Access</h4>
              <p>Our guides know the region well and help shape itineraries around local trail conditions, pacing and viewpoints.</p>
            </div>
          </div>
          <div className="why-item">
            <div className="why-num" aria-hidden="true">02</div>
            <div className="why-text">
              <h4>Complete Fleet Ownership</h4>
              <p>We own every vehicle in our fleet — that means consistent maintenance, experienced hill drivers, and no subcontracting surprises.</p>
            </div>
          </div>
          <div className="why-item">
            <div className="why-num" aria-hidden="true">03</div>
            <div className="why-text">
              <h4>End-to-End Planning</h4>
              <p>From permits and accommodation to meals and emergency protocols — we handle every detail so you can focus on the journey.</p>
            </div>
          </div>
          <div className="why-item">
            <div className="why-num" aria-hidden="true">04</div>
            <div className="why-text">
              <h4>Flexible &amp; Customisable</h4>
              <p>Every trip is tailored to your group's pace, preferences and budget. Small groups or large pilgrimages — we scale with you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
