import { useState } from 'react'
import { Link } from 'react-router-dom'

interface DestCard {
  id: string
  image: string
  alt: string
  name: string
  tagline: string
  badge?: string
}

const TABS = [
  { key: 'rajasthan', label: 'Rajasthan' },
  { key: 'uttarakhand', label: 'Uttarakhand' },
  { key: 'pilgrimages', label: 'Pilgrimages' },
] as const

const PANELS: Record<string, DestCard[]> = {
  rajasthan: [
    { id: 'jaipur', image: '/images/places/jaipur.jpg', alt: 'Jaipur', name: 'Jaipur', tagline: 'The Pink City — Amber Fort, Hawa Mahal & more', badge: 'Most Popular' },
    { id: 'udaipur', image: '/images/places/udaipur.jpg', alt: 'Udaipur', name: 'Udaipur', tagline: 'City of Lakes & Palaces' },
    { id: 'jodhpur', image: '/images/places/jodhpur.jpg', alt: 'Jodhpur', name: 'Jodhpur', tagline: 'The Blue City — Mehrangarh Fort' },
    { id: 'pushkar', image: '/images/places/pushkar.jpg', alt: 'Pushkar', name: 'Pushkar', tagline: 'Sacred lake & Brahma Temple' },
  ],
  uttarakhand: [
    { id: 'nainital', image: '/images/places/nainital.jpg', alt: 'Nainital', name: 'Nainital', tagline: 'The Lake District of India', badge: 'Hill Station' },
    { id: 'mussoorie', image: '/images/places/mussoorie.jpg', alt: 'Mussoorie', name: 'Mussoorie', tagline: 'Queen of the Hills' },
    { id: 'char-dham', image: '/images/places/char-dham.jpg', alt: 'Char Dham', name: 'Char Dham Yatra', tagline: 'Badrinath · Kedarnath · Gangotri · Yamunotri', badge: 'Sacred Circuit' },
    { id: 'rishikesh', image: '/images/places/rishikesh.jpg', alt: 'Rishikesh', name: 'Rishikesh', tagline: 'Yoga capital of the world' },
  ],
  pilgrimages: [
    { id: 'mathura-vrindavan', image: '/images/places/mathura-vrindavan.jpg', alt: 'Mathura Vrindavan', name: 'Mathura · Vrindavan', tagline: 'Birthplace of Lord Krishna', badge: 'Divine Circuit' },
    { id: 'ayodhya', image: '/images/places/ayodhya.png', alt: 'Ayodhya', name: 'Ayodhya', tagline: 'Ram Janmabhoomi — sacred & eternal' },
    { id: 'khatu-shyam', image: '/images/places/khatu-shyam.jpg', alt: 'Khatu Shyam', name: 'Khatu Shyam', tagline: 'Sikar, Rajasthan — Shyam Baba\'s abode' },
    { id: 'salasar-balaji', image: '/images/places/salasar-balaji.jpg', alt: 'Salasar Balaji', name: 'Salasar Balaji', tagline: 'Churu, Rajasthan — a major Hanuman pilgrimage shrine' },
  ],
}

function scrollToContact(e: React.MouseEvent) {
  e.preventDefault()
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}

export function Destinations() {
  const [activeTab, setActiveTab] = useState('rajasthan')

  return (
    <section className="destinations-section" id="destinations">
      <div className="section-header reveal">
        <p className="section-eyebrow" style={{ color: 'var(--gold-light)' }}>Beyond the Hills</p>
        <h2 className="section-title light">Holiday Destinations Across India</h2>
        <p className="section-sub light">
          From royal Rajputana to sacred pilgrimages — curated packages with comfortable travel for every kind of journey.
        </p>
      </div>

      <div className="dest-tabs" role="tablist">
        {TABS.map((tab) => (
          <div
            key={tab.key}
            className={`dest-tab${activeTab === tab.key ? ' active' : ''}`}
            role="tab"
            aria-selected={activeTab === tab.key}
            tabIndex={0}
            onClick={() => setActiveTab(tab.key)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveTab(tab.key) } }}
          >
            {tab.label}
          </div>
        ))}
      </div>

      {TABS.map((tab) => (
        <div
          key={tab.key}
          className={`dest-panel${activeTab === tab.key ? ' active' : ''}`}
          role="tabpanel"
        >
          {PANELS[tab.key].map((card, i) => (
            <Link
              to={`/place/${card.id}`}
              className="dest-card reveal visible"
              key={card.id}
              style={{ transitionDelay: `${(i % 4) * 80}ms` }}
            >
              <img src={card.image} alt={card.alt} loading="lazy" onLoad={(e) => (e.target as HTMLImageElement).classList.add('loaded')} />
              <div className="dest-card-info">
                {card.badge && <div className="dest-badge">{card.badge}</div>}
                <div className="dest-name">{card.name}</div>
                <div className="dest-tagline">{card.tagline}</div>
              </div>
            </Link>
          ))}
        </div>
      ))}

      {/* Lahaul Spiti Feature */}
      <Link to="/place/spiti-circuit" className="spiti-feature reveal" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="spiti-img">
          <img src="/images/places/lahaul-spiti.jpg" alt="Lahaul Spiti" loading="lazy" onLoad={(e) => (e.target as HTMLImageElement).classList.add('loaded')} />
        </div>
        <div className="spiti-content">
          <p className="section-eyebrow">Featured Circuit</p>
          <h3 className="section-title">Lahaul Spiti<br />Complete Circuit</h3>
          <p className="section-sub" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '100%', marginTop: '16px' }}>
            A bucket-list road journey through the high-altitude cold desert of Spiti valley — ancient monasteries, barren moonscapes, and skies full of stars.
          </p>
          <div className="spiti-highlights">
            <div className="spiti-hl">
              <div className="spiti-hl-name">Key Monastery</div>
              <div className="spiti-hl-val">4,166 m altitude</div>
            </div>
            <div className="spiti-hl">
              <div className="spiti-hl-name">Chandratal Lake</div>
              <div className="spiti-hl-val">Crescent Moon Lake</div>
            </div>
            <div className="spiti-hl">
              <div className="spiti-hl-name">Kunzum Pass</div>
              <div className="spiti-hl-val">4,551 m high pass</div>
            </div>
            <div className="spiti-hl">
              <div className="spiti-hl-name">Kaza · Pin Valley</div>
              <div className="spiti-hl-val">District HQ &amp; wildlife</div>
            </div>
          </div>
          <span className="btn-primary" style={{ alignSelf: 'flex-start' }} onClick={scrollToContact}>Enquire Now</span>
        </div>
      </Link>
    </section>
  )
}
