import { Link } from 'react-router-dom'

interface TrekCardData {
  id: string
  image: string
  alt: string
  difficulty: string
  diffClass: string
  elevation: string
  name: string
  desc: string
  days: string
  base: string
}

const TREK_CARDS: TrekCardData[] = [
  { id: 'hampta-pass', image: '/images/places/hampta-pass.jpg', alt: 'Hampta Pass', difficulty: 'Moderate', diffClass: 'diff-moderate', elevation: '4,270 m', name: 'Hampta Pass', desc: 'Cross from the lush Kullu valley to the stark moonscapes of Spiti — one of Himachal\'s most dramatic crossings.', days: '5 Days', base: 'Manali base' },
  { id: 'saryolsar-lake', image: '/images/places/saryolsar-lake.jpg', alt: 'Saryolsar Lake', difficulty: 'Easy–Moderate', diffClass: 'diff-easy', elevation: '3,100 m', name: 'Saryolsar Lake', desc: 'A serene trek through ancient cedar forests to the sacred glacial lake of Jalori Pass, revered by locals.', days: '3 Days', base: 'Jalori Pass' },
  { id: 'tirthan-valley', image: '/images/places/tirthan-valley.jpg', alt: 'Tirthan Valley', difficulty: 'Easy', diffClass: 'diff-easy', elevation: '2,650 m', name: 'Tirthan Valley', desc: 'Explore the pristine Great Himalayan National Park buffer zone along the turquoise Tirthan river — a hidden gem.', days: '2–4 Days', base: 'Banjar' },
  { id: 'prashar-lake', image: '/images/places/prashar-lake.jpg', alt: 'Prashar Lake', difficulty: 'Easy', diffClass: 'diff-easy', elevation: '2,730 m', name: 'Prashar Lake', desc: 'A floating island temple, crystalline lake and sweeping Dhauladhar views — one of Mandi\'s most beloved treks.', days: '2 Days', base: 'Mandi' },
  { id: 'chander-khani', image: '/images/places/chander-khani-pass.jpg', alt: 'Chander Khani Pass', difficulty: 'Moderate', diffClass: 'diff-moderate', elevation: '3,660 m', name: 'Chandrakhani Pass', desc: 'Trek through Naggar\'s apple orchards and dense forests to a high ridge with 360° views of the Kullu valley.', days: '4 Days', base: 'Naggar' },
  { id: 'kareri-lake', image: '/images/places/kareri-lake.jpg', alt: 'Kareri Lake', difficulty: 'Moderate', diffClass: 'diff-moderate', elevation: '2,934 m', name: 'Kareri Lake', desc: 'A magnificent glacial lake above Dharamshala set against the Dhauladhar range — a Kangra classic.', days: '2–3 Days', base: 'Dharamshala' },
  { id: 'triund', image: '/images/places/triund.jpg', alt: 'Triund', difficulty: 'Easy', diffClass: 'diff-easy', elevation: '2,828 m', name: 'Triund', desc: 'Dharamshala\'s crown jewel — a meadow campsite with the Dhauladhar snow wall on one side and the Kangra valley on the other.', days: '1–2 Days', base: 'McLeodganj' },
  { id: 'dev-roopa', image: '/images/places/dev-roopa-ghepan-roppa.jpg', alt: 'Dev Roopa & Ghepan Roppa', difficulty: 'Challenging', diffClass: 'diff-hard', elevation: '4,000+ m', name: 'Dev Roopa · Ghepan Roppa', desc: 'Remote, raw and stunningly beautiful — these off-the-beaten-path Lahaul treks are for the true adventurer.', days: '6–8 Days', base: 'Lahaul' },
]

function TrekCard({ card, index }: { card: TrekCardData; index: number }) {
  return (
    <Link
      to={`/place/${card.id}`}
      className="trek-card reveal"
      style={{ transitionDelay: `${(index % 4) * 80}ms` }}
    >
      <img src={card.image} alt={card.alt} loading="lazy" onLoad={(e) => (e.target as HTMLImageElement).classList.add('loaded')} />
      <div className="trek-card-overlay">
        <span className={`trek-difficulty ${card.diffClass}`}>{card.difficulty}</span>
        <div className="trek-elevation">▲ {card.elevation}</div>
        <div className="trek-name">{card.name}</div>
        <div className="trek-desc">{card.desc}</div>
        <div className="trek-meta"><span>{card.days}</span><span>{card.base}</span></div>
      </div>
    </Link>
  )
}

export function Treks() {
  return (
    <section className="treks-section deferred-section" id="treks">
      <div className="section-header reveal">
        <p className="section-eyebrow">Himachal Pradesh</p>
        <h2 className="section-title">Legendary Treks in the Heart of the Himalayas</h2>
        <p className="section-sub">
          From high alpine passes to sacred lakes — we guide you through the finest trails of Himachal Pradesh, with expert local guides and complete logistics support.
        </p>
      </div>
      <div className="treks-grid">
        {TREK_CARDS.map((card, i) => (
          <TrekCard key={card.id} card={card} index={i} />
        ))}
      </div>
    </section>
  )
}
