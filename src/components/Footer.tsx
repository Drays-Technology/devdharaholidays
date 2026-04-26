import { Link } from 'react-router-dom'
import { WHATSAPP_NUMBER, PHONE_DISPLAY, EMAIL, BUSINESS_NAME, LOCATION, INSTAGRAM_URL, FACEBOOK_URL, YOUTUBE_URL } from '../data/env'

export function Footer() {
  const [first, ...rest] = (BUSINESS_NAME || 'Devdhara Holidays').split(' ')

  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-brand">{first} <span>{rest.join(' ')}</span></div>
          <p className="footer-tagline">
            Where every path leads to a story. We craft journeys through the mountains, plains and sacred lands of India with care, expertise and a personal touch.
          </p>
          <div className="footer-social">
            {INSTAGRAM_URL && <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Instagram">Ig</a>}
            {FACEBOOK_URL && <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" title="Facebook" aria-label="Facebook">Fb</a>}
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" title="WhatsApp" aria-label="WhatsApp">Wa</a>
            {YOUTUBE_URL && <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" title="YouTube" aria-label="YouTube">Yt</a>}
          </div>
        </div>
        <div className="footer-col">
          <h5>Treks</h5>
          <ul className="footer-links">
            <li><Link to="/place/hampta-pass">Hampta Pass</Link></li>
            <li><Link to="/place/triund">Triund</Link></li>
            <li><Link to="/place/kareri-lake">Kareri Lake</Link></li>
            <li><Link to="/place/prashar-lake">Prashar Lake</Link></li>
            <li><Link to="/place/spiti-circuit">Spiti Circuit</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Destinations</h5>
          <ul className="footer-links">
            <li><Link to="/place/jaipur">Rajasthan</Link></li>
            <li><Link to="/place/char-dham">Char Dham Yatra</Link></li>
            <li><Link to="/place/nainital">Nainital</Link></li>
            <li><Link to="/place/mathura-vrindavan">Mathura · Vrindavan</Link></li>
            <li><Link to="/place/ayodhya">Ayodhya</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Contact</h5>
          <ul className="footer-links">
            <li><a href={`tel:+${WHATSAPP_NUMBER}`}>{PHONE_DISPLAY}</a></li>
            <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><Link to="/#contact">Book a Package</Link></li>
            <li><Link to="/#fleet">Our Fleet</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
        <p>{LOCATION}</p>
      </div>
    </footer>
  )
}
