import { useParams, useNavigate } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { PLACES } from '../data/places'
import { WHATSAPP_NUMBER, BUSINESS_NAME } from '../data/env'

export function PlacePage() {
  const { placeId } = useParams<{ placeId: string }>()
  const navigate = useNavigate()
  const place = placeId ? PLACES[placeId] : undefined
  useScrollReveal([placeId])

  if (!place) {
    return (
      <div style={{ padding: '120px 20px', textAlign: 'center', minHeight: '60vh' }}>
        <h1>Place not found</h1>
        <p style={{ marginTop: '16px' }}>
          <button className="btn-primary" onClick={() => navigate('/')}>Back to Home</button>
        </p>
      </div>
    )
  }

  const typeLabel = place.type === 'trek' ? 'Trek' : place.type === 'pilgrimage' ? 'Pilgrimage' : 'Destination'
  const difficultyBadge = place.difficulty
    ? <span className={`detail-badge diff-${place.difficulty.toLowerCase().replace(/[–\s]/g, '-')}`}>{place.difficulty}</span>
    : null
  const elevationBadge = place.elevation
    ? <span className="detail-badge detail-badge-outline">▲ {place.elevation}</span>
    : null

  function handleEnquire(e: React.MouseEvent) {
    e.preventDefault()
    navigate('/', { state: { prefillDest: place!.name, scrollTo: 'contact' } })
  }

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I'm interested in ${place.name} with ${BUSINESS_NAME}. Please share details.`)}`

  return (
    <>
      <div className="detail-hero">
        <button className="detail-back" aria-label="Go back" onClick={() => navigate(-1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
          </svg>
        </button>
        <img src={place.image} alt={place.name} />
        <div className="detail-hero-overlay">
          <div className="detail-hero-badges">
            <span className="detail-badge detail-badge-type">{typeLabel}</span>
            {difficultyBadge}
            {elevationBadge}
          </div>
          <h1 className="detail-hero-title">{place.name}</h1>
          <p className="detail-hero-tagline">{place.tagline}</p>
        </div>
      </div>

      <div className="detail-body">
        <div className="detail-meta-strip">
          {place.base && (
            <div className="detail-meta-item">
              <div><span className="detail-meta-label">Base Camp</span><span className="detail-meta-val">{place.base}</span></div>
            </div>
          )}
          <div className="detail-meta-item">
            <div><span className="detail-meta-label">Best Time</span><span className="detail-meta-val">{place.bestTime}</span></div>
          </div>
          {place.elevation && (
            <div className="detail-meta-item">
              <div><span className="detail-meta-label">Elevation</span><span className="detail-meta-val">{place.elevation}</span></div>
            </div>
          )}
          {place.difficulty && (
            <div className="detail-meta-item">
              <div><span className="detail-meta-label">Difficulty</span><span className="detail-meta-val">{place.difficulty}</span></div>
            </div>
          )}
        </div>

        <div className="detail-shell">
          <div className="detail-main">
            <section className="detail-section detail-section-card detail-section-intro">
              <span className="detail-kicker">Why This Trip</span>
              <h2 className="detail-section-title">Overview</h2>
              <p>{place.overview}</p>
            </section>

            <section className="detail-section detail-section-card">
              <span className="detail-kicker">How It Flows</span>
              <h2 className="detail-section-title">
                {place.type === 'trek' ? 'Sample Itinerary' : 'Suggested Itinerary'}
              </h2>
              <p className="detail-itin-note">Itineraries are flexible and can be customised to your group's pace and preferences.</p>
              <div className="detail-itinerary">
                {place.itinerary.map((step, i) => {
                  const dashParts = step.split(' — ')
                  let mainPart = step
                  let description = ''
                  if (dashParts.length > 1) {
                    mainPart = dashParts[0]
                    description = dashParts[1]
                  }
                  const colonParts = mainPart.split(': ')
                  let dayLabel = `Day ${i + 1}`
                  let dayTitle = ''
                  if (colonParts.length > 1) {
                    dayLabel = colonParts[0]
                    dayTitle = colonParts[1]
                  } else {
                    dayTitle = mainPart
                  }

                  return (
                    <div className="detail-itin-step" key={i}>
                      <div className="detail-itin-left">
                        <div className="detail-itin-num">{i + 1}</div>
                        <div className="detail-itin-line" />
                      </div>
                      <div className="detail-itin-content">
                        <div className="detail-itin-header">
                          <span className="detail-itin-day">{dayLabel}</span>
                          <h3 className="detail-itin-title">{dayTitle}</h3>
                        </div>
                        {description && <p className="detail-itin-desc">{description}</p>}
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          </div>

          <aside className="detail-side">
            <section className="detail-section detail-section-card detail-side-card">
              <span className="detail-kicker">At A Glance</span>
              <h2 className="detail-section-title">Highlights</h2>
              <ul className="detail-highlights">
                {place.highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            </section>

            <section className="detail-section detail-section-card detail-side-card">
              <span className="detail-kicker">Package Scope</span>
              <h2 className="detail-section-title">What's Included</h2>
              <div className="detail-includes">
                {place.includes.map((item, i) => <span className="detail-include-chip" key={i}>{item}</span>)}
              </div>
            </section>
          </aside>
        </div>
      </div>

      {/* Sticky CTA Bar */}
      <div className="detail-cta-bar visible">
        <div className="detail-cta-inner">
          <div className="detail-cta-text">
            <strong>{place.name}</strong>
            <span>{place.tagline}</span>
          </div>
          <div className="detail-cta-actions">
            <a href="#contact" className="btn-primary detail-cta-btn" onClick={handleEnquire}>Enquire About This Trip</a>
            <a href={whatsappUrl} className="btn-outline detail-cta-btn detail-cta-btn-secondary" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
          </div>
        </div>
      </div>
    </>
  )
}
