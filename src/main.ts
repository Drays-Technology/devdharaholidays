import './style.css'

// All config is loaded from .env file — see .env.example
const {
  VITE_WHATSAPP_NUMBER: WHATSAPP_NUMBER,
  VITE_PHONE_DISPLAY: PHONE_DISPLAY,
  VITE_EMAIL: EMAIL,
  VITE_BUSINESS_NAME: BUSINESS_NAME,
  VITE_LOCATION: LOCATION,
  VITE_INSTAGRAM_URL: INSTAGRAM_URL,
  VITE_FACEBOOK_URL: FACEBOOK_URL,
  VITE_YOUTUBE_URL: YOUTUBE_URL,
  VITE_WEB3FORMS_KEY: WEB3FORMS_KEY,
} = import.meta.env

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<!-- SKIP NAV -->
<a href="#treks" class="skip-nav">Skip to content</a>

<!-- NAVBAR -->
<nav id="navbar" aria-label="Main navigation">
  <a href="#" class="nav-logo" aria-label="Devdhara Holidays — Home">
    <svg width="230" height="48" viewBox="0 0 230 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="18,36 30,10 42,36" fill="none" stroke="rgba(255,255,255,0.9)" stroke-width="1.8" stroke-linejoin="round"/>
      <polygon points="30,20 40,36 20,36" fill="#3d7a35"/>
      <path d="M26 18 L30 10 L34 18 Z" fill="rgba(255,255,255,0.7)"/>
      <polygon points="36,36 46,16 56,36" fill="none" stroke="#c9872a" stroke-width="1.8" stroke-linejoin="round"/>
      <polygon points="46,24 54,36 38,36" fill="#c9872a" opacity="0.85"/>
      <text x="70" y="28" font-family="'Spectral', Georgia, serif" font-size="22" font-weight="500" fill="#ffffff" letter-spacing="0.5">Devdhara</text>
      <text x="71" y="41" font-family="'Karla', sans-serif" font-size="7.5" font-weight="400" fill="#c9872a" letter-spacing="4">HOLIDAYS</text>
    </svg>
  </a>
  <ul class="nav-links" id="navLinks">
    <li><a href="#treks">Treks</a></li>
    <li><a href="#destinations">Destinations</a></li>
    <li><a href="#fleet">Fleet</a></li>
    <li><a href="#contact" class="nav-cta">Book Now</a></li>
  </ul>
  <div class="nav-overlay" id="navOverlay"></div>
  <button class="nav-hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</nav>

<!-- HERO -->
<section class="hero" id="hero">
  <div class="hero-bg" id="heroBg"></div>
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <p class="hero-eyebrow">Himachal Pradesh · Rajasthan · Uttarakhand</p>
    <h1 class="hero-title">Where every path<br><em>leads to a story.</em><br>Explore the hills with us.</h1>
    <p class="hero-sub">Complete holiday packages with a full fleet of cabs &amp; travellers — crafted for every kind of wanderer.</p>
    <div class="hero-actions">
      <a href="#contact" class="btn-primary">Plan My Trip</a>
      <a href="#treks" class="btn-outline">Explore Treks</a>
    </div>
  </div>
  <div class="hero-scroll-hint" aria-hidden="true">
    <div class="scroll-line"></div>
    <span>Scroll</span>
  </div>
</section>

<!-- STATS -->
<div class="stats-strip" aria-label="Key numbers">
  <div class="stat-item reveal">
    <div class="stat-num" data-target="500" data-suffix="+">0</div>
    <div class="stat-label">Happy Travellers</div>
  </div>
  <div class="stat-item reveal">
    <div class="stat-num" data-target="15" data-suffix="+">0</div>
    <div class="stat-label">Trek Routes</div>
  </div>
  <div class="stat-item reveal">
    <div class="stat-num" data-target="25" data-suffix="+">0</div>
    <div class="stat-label">Destinations</div>
  </div>
  <div class="stat-item reveal">
    <div class="stat-num" data-target="10" data-suffix="+">0</div>
    <div class="stat-label">Fleet Vehicles</div>
  </div>
</div>

<!-- TREKS -->
<section class="treks-section" id="treks">
  <div class="section-header reveal">
    <p class="section-eyebrow">Himachal Pradesh</p>
    <h2 class="section-title">Legendary Treks in the Heart of the Himalayas</h2>
    <p class="section-sub">From high alpine passes to sacred lakes — we guide you through the finest trails of Himachal Pradesh, with expert local guides and complete logistics support.</p>
  </div>
  <div class="treks-grid">
    <div class="trek-card reveal" data-place="hampta-pass">
      <img src="/images/places/hampta-pass.jpg" alt="Hampta Pass" loading="lazy">
      <div class="trek-card-overlay">
        <span class="trek-difficulty diff-moderate">Moderate</span>
        <div class="trek-elevation">▲ 4,270 m</div>
        <div class="trek-name">Hampta Pass</div>
        <div class="trek-desc">Cross from the lush Kullu valley to the stark moonscapes of Spiti — one of Himachal's most dramatic crossings.</div>
        <div class="trek-meta"><span>5 Days</span><span>Manali base</span></div>
      </div>
    </div>
    <div class="trek-card reveal" data-place="saryolsar-lake">
      <img src="/images/places/saryolsar-lake.jpg" alt="Saryolsar Lake" loading="lazy">
      <div class="trek-card-overlay">
        <span class="trek-difficulty diff-easy">Easy–Moderate</span>
        <div class="trek-elevation">▲ 3,100 m</div>
        <div class="trek-name">Saryolsar Lake</div>
        <div class="trek-desc">A serene trek through ancient cedar forests to the sacred glacial lake of Jalori Pass, revered by locals.</div>
        <div class="trek-meta"><span>3 Days</span><span>Jalori Pass</span></div>
      </div>
    </div>
    <div class="trek-card reveal" data-place="tirthan-valley">
      <img src="/images/places/tirthan-valley.jpg" alt="Tirthan Valley" loading="lazy">
      <div class="trek-card-overlay">
        <span class="trek-difficulty diff-easy">Easy</span>
        <div class="trek-elevation">▲ 2,650 m</div>
        <div class="trek-name">Tirthan Valley</div>
        <div class="trek-desc">Explore the pristine Great Himalayan National Park buffer zone along the turquoise Tirthan river — a hidden gem.</div>
        <div class="trek-meta"><span>2–4 Days</span><span>Banjar</span></div>
      </div>
    </div>
    <div class="trek-card reveal" data-place="prashar-lake">
      <img src="/images/places/prashar-lake.jpg" alt="Prashar Lake" loading="lazy">
      <div class="trek-card-overlay">
        <span class="trek-difficulty diff-easy">Easy</span>
        <div class="trek-elevation">▲ 2,730 m</div>
        <div class="trek-name">Prashar Lake</div>
        <div class="trek-desc">A floating island temple, crystalline lake and sweeping Dhauladhar views — one of Mandi's most beloved treks.</div>
        <div class="trek-meta"><span>2 Days</span><span>Mandi</span></div>
      </div>
    </div>
    <div class="trek-card reveal" data-place="chander-khani">
      <img src="/images/places/chander-khani-pass.jpg" alt="Chander Khani Pass" loading="lazy">
      <div class="trek-card-overlay">
        <span class="trek-difficulty diff-moderate">Moderate</span>
        <div class="trek-elevation">▲ 3,660 m</div>
        <div class="trek-name">Chandrakhani Pass</div>
        <div class="trek-desc">Trek through Naggar's apple orchards and dense forests to a high ridge with 360° views of the Kullu valley.</div>
        <div class="trek-meta"><span>4 Days</span><span>Naggar</span></div>
      </div>
    </div>
    <div class="trek-card reveal" data-place="kareri-lake">
      <img src="/images/places/kareri-lake.jpg" alt="Kareri Lake" loading="lazy">
      <div class="trek-card-overlay">
        <span class="trek-difficulty diff-moderate">Moderate</span>
        <div class="trek-elevation">▲ 2,934 m</div>
        <div class="trek-name">Kareri Lake</div>
        <div class="trek-desc">A magnificent glacial lake above Dharamshala set against the Dhauladhar range — a Kangra classic.</div>
        <div class="trek-meta"><span>2–3 Days</span><span>Dharamshala</span></div>
      </div>
    </div>
    <div class="trek-card reveal" data-place="triund">
      <img src="/images/places/triund.jpg" alt="Triund" loading="lazy">
      <div class="trek-card-overlay">
        <span class="trek-difficulty diff-easy">Easy</span>
        <div class="trek-elevation">▲ 2,828 m</div>
        <div class="trek-name">Triund</div>
        <div class="trek-desc">Dharamshala's crown jewel — a meadow campsite with the Dhauladhar snow wall on one side and the Kangra valley on the other.</div>
        <div class="trek-meta"><span>1–2 Days</span><span>McLeodganj</span></div>
      </div>
    </div>
    <div class="trek-card reveal" data-place="dev-roopa">
      <img src="/images/places/dev-roopa-ghepan-roppa.jpg" alt="Dev Roopa & Ghepan Roppa" loading="lazy">
      <div class="trek-card-overlay">
        <span class="trek-difficulty diff-hard">Challenging</span>
        <div class="trek-elevation">▲ 4,000+ m</div>
        <div class="trek-name">Dev Roopa · Ghepan Roppa</div>
        <div class="trek-desc">Remote, raw and stunningly beautiful — these off-the-beaten-path Lahaul treks are for the true adventurer.</div>
        <div class="trek-meta"><span>6–8 Days</span><span>Lahaul</span></div>
      </div>
    </div>
  </div>
</section>

<!-- DESTINATIONS -->
<section class="destinations-section" id="destinations">
  <div class="section-header reveal">
    <p class="section-eyebrow" style="color:var(--gold-light)">Beyond the Hills</p>
    <h2 class="section-title light">Holiday Destinations Across India</h2>
    <p class="section-sub light">From royal Rajputana to sacred pilgrimages — curated packages with comfortable travel for every kind of journey.</p>
  </div>

  <div class="dest-tabs" role="tablist">
    <div class="dest-tab active" role="tab" aria-selected="true" data-tab="rajasthan" tabindex="0">Rajasthan</div>
    <div class="dest-tab" role="tab" aria-selected="false" data-tab="uttarakhand" tabindex="0">Uttarakhand</div>
    <div class="dest-tab" role="tab" aria-selected="false" data-tab="pilgrimages" tabindex="0">Pilgrimages</div>
  </div>

  <div class="dest-panel active" id="tab-rajasthan" role="tabpanel">
    <div class="dest-card reveal" data-place="jaipur">
      <img src="/images/places/jaipur.jpg" alt="Jaipur" loading="lazy">
      <div class="dest-card-info">
        <div class="dest-badge">Most Popular</div>
        <div class="dest-name">Jaipur</div>
        <div class="dest-tagline">The Pink City — Amber Fort, Hawa Mahal &amp; more</div>
      </div>
    </div>
    <div class="dest-card reveal" data-place="udaipur">
      <img src="/images/places/udaipur.jpg" alt="Udaipur" loading="lazy">
      <div class="dest-card-info">
        <div class="dest-name">Udaipur</div>
        <div class="dest-tagline">City of Lakes &amp; Palaces</div>
      </div>
    </div>
    <div class="dest-card reveal" data-place="jodhpur">
      <img src="/images/places/jodhpur.jpg" alt="Jodhpur" loading="lazy">
      <div class="dest-card-info">
        <div class="dest-name">Jodhpur</div>
        <div class="dest-tagline">The Blue City — Mehrangarh Fort</div>
      </div>
    </div>
    <div class="dest-card reveal" data-place="pushkar">
      <img src="/images/places/pushkar.jpg" alt="Pushkar" loading="lazy">
      <div class="dest-card-info">
        <div class="dest-name">Pushkar</div>
        <div class="dest-tagline">Sacred lake &amp; Brahma Temple</div>
      </div>
    </div>
  </div>

  <div class="dest-panel" id="tab-uttarakhand" role="tabpanel">
    <div class="dest-card reveal" data-place="nainital">
      <img src="/images/places/nainital.jpg" alt="Nainital" loading="lazy">
      <div class="dest-card-info">
        <div class="dest-badge">Hill Station</div>
        <div class="dest-name">Nainital</div>
        <div class="dest-tagline">The Lake District of India</div>
      </div>
    </div>
    <div class="dest-card reveal" data-place="mussoorie">
      <img src="/images/places/mussoorie.jpg" alt="Mussoorie" loading="lazy">
      <div class="dest-card-info">
        <div class="dest-name">Mussoorie</div>
        <div class="dest-tagline">Queen of the Hills</div>
      </div>
    </div>
    <div class="dest-card reveal" data-place="char-dham">
      <img src="/images/places/char-dham.jpg" alt="Char Dham" loading="lazy">
      <div class="dest-card-info">
        <div class="dest-badge">Sacred Circuit</div>
        <div class="dest-name">Char Dham Yatra</div>
        <div class="dest-tagline">Badrinath · Kedarnath · Gangotri · Yamunotri</div>
      </div>
    </div>
    <div class="dest-card reveal" data-place="rishikesh">
      <img src="/images/places/rishikesh.jpg" alt="Rishikesh" loading="lazy">
      <div class="dest-card-info">
        <div class="dest-name">Rishikesh</div>
        <div class="dest-tagline">Yoga capital of the world</div>
      </div>
    </div>
  </div>

  <div class="dest-panel" id="tab-pilgrimages" role="tabpanel">
    <div class="dest-card reveal" data-place="mathura-vrindavan">
      <img src="/images/places/mathura-vrindavan.jpg" alt="Mathura Vrindavan" loading="lazy">
      <div class="dest-card-info">
        <div class="dest-badge">Divine Circuit</div>
        <div class="dest-name">Mathura · Vrindavan</div>
        <div class="dest-tagline">Birthplace of Lord Krishna</div>
      </div>
    </div>
    <div class="dest-card reveal" data-place="ayodhya">
      <img src="/images/places/ayodhya.png" alt="Ayodhya" loading="lazy">
      <div class="dest-card-info">
        <div class="dest-name">Ayodhya</div>
        <div class="dest-tagline">Ram Janmabhoomi — sacred &amp; eternal</div>
      </div>
    </div>
    <div class="dest-card reveal" data-place="khatu-shyam">
      <img src="/images/places/khatu-shyam.jpg" alt="Khatu Shyam" loading="lazy">
      <div class="dest-card-info">
        <div class="dest-name">Khatu Shyam</div>
        <div class="dest-tagline">Sikar, Rajasthan — Shyam Baba's abode</div>
      </div>
    </div>
    <div class="dest-card reveal" data-place="salasar-balaji">
      <img src="/images/places/salasar-balaji.jpg" alt="Salasar Balaji" loading="lazy">
      <div class="dest-card-info">
        <div class="dest-name">Salasar Balaji</div>
        <div class="dest-tagline">Churu, Rajasthan — a major Hanuman pilgrimage shrine</div>
      </div>
    </div>
  </div>

  <!-- LAHAUL SPITI FEATURE -->
  <div class="spiti-feature reveal" data-place="spiti-circuit">
    <div class="spiti-img">
      <img src="/images/places/lahaul-spiti.jpg" alt="Lahaul Spiti" loading="lazy">
    </div>
    <div class="spiti-content">
      <p class="section-eyebrow">Featured Circuit</p>
      <h3 class="section-title">Lahaul Spiti<br>Complete Circuit</h3>
      <p class="section-sub" style="color:rgba(255,255,255,0.65);max-width:100%;margin-top:16px">A bucket-list road journey through the high-altitude cold desert of Spiti valley — ancient monasteries, barren moonscapes, and skies full of stars.</p>
      <div class="spiti-highlights">
        <div class="spiti-hl">
          <div class="spiti-hl-name">Key Monastery</div>
          <div class="spiti-hl-val">4,166 m altitude</div>
        </div>
        <div class="spiti-hl">
          <div class="spiti-hl-name">Chandratal Lake</div>
          <div class="spiti-hl-val">Crescent Moon Lake</div>
        </div>
        <div class="spiti-hl">
          <div class="spiti-hl-name">Kunzum Pass</div>
          <div class="spiti-hl-val">4,551 m high pass</div>
        </div>
        <div class="spiti-hl">
          <div class="spiti-hl-name">Kaza · Pin Valley</div>
          <div class="spiti-hl-val">District HQ &amp; wildlife</div>
        </div>
      </div>
      <a href="#contact" class="btn-primary" style="align-self:flex-start">Enquire Now</a>
    </div>
  </div>
</section>

<!-- FLEET -->
<section class="fleet-section" id="fleet">
  <div class="section-header reveal" style="text-align:center;max-width:640px;margin:0 auto 60px;">
    <p class="section-eyebrow">Our Fleet</p>
    <h2 class="section-title" style="max-width:100%">Complete Fleet of Cabs &amp; Travellers</h2>
    <p class="section-sub" style="max-width:100%">We own and operate our entire fleet — so you get reliable, well-maintained vehicles with experienced hill drivers, every single time.</p>
  </div>
  <div class="fleet-grid">
    <div class="fleet-card reveal">
      <span class="fleet-icon" aria-hidden="true"><svg viewBox="0 0 64 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 18h52M10 18l6-10h24l6 10" stroke="#2d5a27" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><rect x="4" y="18" width="56" height="7" rx="2" stroke="#2d5a27" stroke-width="1.8"/><circle cx="16" cy="26" r="3" fill="#fff" stroke="#2d5a27" stroke-width="1.8"/><circle cx="48" cy="26" r="3" fill="#fff" stroke="#2d5a27" stroke-width="1.8"/><path d="M16 8h14" stroke="#c9872a" stroke-width="1.8" stroke-linecap="round"/></svg></span>
      <div class="fleet-name">Sedan / Hatchback</div>
      <div class="fleet-desc">Swift Dzire, Etios and similar compact sedans — perfect for couples and small families seeking comfort on mountain roads.</div>
      <span class="fleet-capacity">2–4 Passengers</span>
    </div>
    <div class="fleet-card reveal">
      <span class="fleet-icon" aria-hidden="true"><svg viewBox="0 0 64 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 18h56M8 18l4-11h28l6 11" stroke="#2d5a27" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><rect x="2" y="18" width="60" height="7" rx="2" stroke="#2d5a27" stroke-width="1.8"/><circle cx="15" cy="26" r="3" fill="#fff" stroke="#2d5a27" stroke-width="1.8"/><circle cx="49" cy="26" r="3" fill="#fff" stroke="#2d5a27" stroke-width="1.8"/><path d="M12 7h20" stroke="#c9872a" stroke-width="1.8" stroke-linecap="round"/><path d="M4 18v-3" stroke="#2d5a27" stroke-width="1.8" stroke-linecap="round"/></svg></span>
      <div class="fleet-name">SUV &amp; Innova</div>
      <div class="fleet-desc">Toyota Innova Crysta and similar SUVs — a practical choice for group travel on long mountain routes including Spiti and Lahaul.</div>
      <span class="fleet-capacity">5–7 Passengers</span>
    </div>
    <div class="fleet-card reveal">
      <span class="fleet-icon" aria-hidden="true"><svg viewBox="0 0 64 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="6" width="60" height="19" rx="2" stroke="#2d5a27" stroke-width="1.8"/><path d="M2 14h60" stroke="#2d5a27" stroke-width="1.2" stroke-dasharray="3 2"/><circle cx="13" cy="26" r="3" fill="#fff" stroke="#2d5a27" stroke-width="1.8"/><circle cx="51" cy="26" r="3" fill="#fff" stroke="#2d5a27" stroke-width="1.8"/><rect x="8" y="8" width="7" height="5" rx="1" stroke="#c9872a" stroke-width="1.5"/><rect x="20" y="8" width="7" height="5" rx="1" stroke="#c9872a" stroke-width="1.5"/><rect x="32" y="8" width="7" height="5" rx="1" stroke="#c9872a" stroke-width="1.5"/><rect x="44" y="8" width="7" height="5" rx="1" stroke="#c9872a" stroke-width="1.5"/></svg></span>
      <div class="fleet-name">Tempo Traveller</div>
      <div class="fleet-desc">12-seater and 16-seater Tempo Travellers with push-back seats and charging points — ideal for large group tours and pilgrimages.</div>
      <span class="fleet-capacity">10–16 Passengers</span>
    </div>
  </div>
</section>

<!-- WHY US -->
<div class="why-section">
  <div class="why-img reveal-left">
    <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&q=80" alt="Mountain journey" loading="lazy">
  </div>
  <div class="why-content reveal-right">
    <p class="section-eyebrow" style="color:var(--gold-light)">Why Devdhara</p>
    <h2 class="section-title light">Travel with people who know the mountains</h2>
    <div class="why-items">
      <div class="why-item">
        <div class="why-num" aria-hidden="true">01</div>
        <div class="why-text">
          <h4>Local Experts, Deeper Access</h4>
          <p>Our guides know the region well and help shape itineraries around local trail conditions, pacing and viewpoints.</p>
        </div>
      </div>
      <div class="why-item">
        <div class="why-num" aria-hidden="true">02</div>
        <div class="why-text">
          <h4>Complete Fleet Ownership</h4>
          <p>We own every vehicle in our fleet — that means consistent maintenance, experienced hill drivers, and no subcontracting surprises.</p>
        </div>
      </div>
      <div class="why-item">
        <div class="why-num" aria-hidden="true">03</div>
        <div class="why-text">
          <h4>End-to-End Planning</h4>
          <p>From permits and accommodation to meals and emergency protocols — we handle every detail so you can focus on the journey.</p>
        </div>
      </div>
      <div class="why-item">
        <div class="why-num" aria-hidden="true">04</div>
        <div class="why-text">
          <h4>Flexible &amp; Customisable</h4>
          <p>Every trip is tailored to your group's pace, preferences and budget. Small groups or large pilgrimages — we scale with you.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- TESTIMONIALS -->
<section class="testimonials-section">
  <div class="section-header reveal" style="text-align:center;max-width:640px;margin:0 auto 60px;">
    <p class="section-eyebrow">Traveller Stories</p>
    <h2 class="section-title" style="max-width:100%">What our guests say</h2>
  </div>
  <div class="testimonials-grid">
    <div class="testimonial-card reveal">
      <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
      <div class="testimonial-text">"The Hampta Pass trek with Devdhara was absolutely life-changing. The guide knew every turn of the trail and made the entire group feel completely safe."</div>
      <div class="testimonial-author"><strong>Rahul Sharma</strong>Delhi · Hampta Pass Trek</div>
    </div>
    <div class="testimonial-card reveal">
      <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
      <div class="testimonial-text">"We booked a Char Dham Yatra for 14 people. The Tempo Traveller was spotless, the driver excellent on mountain roads, and the logistics were flawless."</div>
      <div class="testimonial-author"><strong>Sunita Agarwal</strong>Chandigarh · Char Dham Yatra</div>
    </div>
    <div class="testimonial-card reveal">
      <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
      <div class="testimonial-text">"Spiti circuit in July — honestly the best trip of my life. Devdhara arranged the route logistics, stays and planning smoothly from start to finish."</div>
      <div class="testimonial-author"><strong>Priya Menon</strong>Bangalore · Lahaul Spiti Circuit</div>
    </div>
  </div>
</section>

<!-- LEAD GEN FORM -->
<div class="form-section" id="contact">
  <div class="form-visual">
    <img src="https://images.unsplash.com/photo-1543877087-ebf71fde2be1?w=900&q=80" alt="Mountain camping" loading="lazy">
    <div class="form-visual-overlay">
      <h2>Your next<br>story awaits.</h2>
      <p>Tell us your dream destination and we'll craft the perfect package — treks, pilgrimages, road trips and more.</p>
      <div class="contact-chips">
        <div class="contact-chip">
          <span class="contact-chip-icon" aria-hidden="true">📞</span>
          <div class="contact-chip-text">
            <strong>Call / WhatsApp</strong>
            ${PHONE_DISPLAY}
          </div>
        </div>
        <div class="contact-chip">
          <span class="contact-chip-icon" aria-hidden="true">✉️</span>
          <div class="contact-chip-text">
            <strong>Email Us</strong>
            ${EMAIL}
          </div>
        </div>
        <div class="contact-chip">
          <span class="contact-chip-icon" aria-hidden="true">📍</span>
          <div class="contact-chip-text">
            <strong>Based in</strong>
            ${LOCATION}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="form-wrapper">
    <div id="formContent">
      <h3 class="form-title">Plan Your Trip</h3>
      <p class="form-subtitle">3 quick fields and we'll get back to you as soon as possible.</p>

      <form id="leadForm" novalidate>
        <div class="form-group">
          <label for="f-name">Your Name *</label>
          <input id="f-name" name="name" type="text" placeholder="e.g. Rahul Sharma" required autocomplete="name">
          <span class="form-error" id="err-name">Please enter your name</span>
        </div>

        <div class="form-group">
          <label for="f-phone">WhatsApp / Phone *</label>
          <div class="phone-wrap">
            <span class="phone-prefix" aria-hidden="true">+91</span>
            <input id="f-phone" name="phone" type="tel" placeholder="98765 43210" required autocomplete="tel" maxlength="10" inputmode="numeric" pattern="[0-9]{10}">
          </div>
          <span class="form-error" id="err-phone">Please enter a valid 10-digit phone number</span>
        </div>

        <div class="form-group">
          <label for="f-dest">Where do you want to go? *</label>
          <select id="f-dest" name="destination" required>
            <option value="">— Pick a destination —</option>
            <optgroup label="Himachal Treks">
              <option>Hampta Pass</option>
              <option>Saryolsar Lake</option>
              <option>Tirthan Valley</option>
              <option>Prashar Lake</option>
              <option>Chandrakhani Pass</option>
              <option>Kareri Lake, Dharamshala</option>
              <option>Triund</option>
              <option>Dev Roopa / Ghepan Roppa</option>
              <option>Lahaul Spiti Circuit</option>
            </optgroup>
            <optgroup label="Rajasthan">
              <option>Jaipur</option>
              <option>Rajasthan Full Circuit</option>
            </optgroup>
            <optgroup label="Uttarakhand">
              <option>Nainital</option>
              <option>Mussoorie</option>
              <option>Char Dham Yatra</option>
            </optgroup>
            <optgroup label="Pilgrimages">
              <option>Khatu Shyam</option>
              <option>Salasar Balaji</option>
              <option>Ayodhya</option>
              <option>Mathura &amp; Vrindavan</option>
            </optgroup>
            <option>Not sure yet / Custom</option>
          </select>
          <span class="form-error" id="err-dest">Please select a destination</span>
        </div>

        <div class="form-group">
          <label>Group Size</label>
          <div class="pill-group" id="groupPills" role="radiogroup" aria-label="Group size">
            <button type="button" class="pill" role="radio" aria-checked="false">Solo</button>
            <button type="button" class="pill" role="radio" aria-checked="false">Couple</button>
            <button type="button" class="pill" role="radio" aria-checked="false">3 – 6</button>
            <button type="button" class="pill" role="radio" aria-checked="false">7 – 15</button>
            <button type="button" class="pill" role="radio" aria-checked="false">16+</button>
          </div>
        </div>

        <div class="form-group">
          <label>When are you planning?</label>
          <div class="pill-group" id="seasonPills" role="radiogroup" aria-label="Travel season">
            <button type="button" class="pill" role="radio" aria-checked="false">Jan – Mar</button>
            <button type="button" class="pill" role="radio" aria-checked="false">Apr – Jun</button>
            <button type="button" class="pill" role="radio" aria-checked="false">Jul – Sep</button>
            <button type="button" class="pill" role="radio" aria-checked="false">Oct – Dec</button>
            <button type="button" class="pill" role="radio" aria-checked="false">Flexible</button>
          </div>
        </div>

        <div class="form-group">
          <label>How should we reach you?</label>
          <div class="contact-pref" id="contactPref" role="radiogroup" aria-label="Contact preference">
            <button type="button" class="pref-btn selected" role="radio" aria-checked="true">WhatsApp</button>
            <button type="button" class="pref-btn" role="radio" aria-checked="false">Phone Call</button>
            <button type="button" class="pref-btn" role="radio" aria-checked="false">Email</button>
          </div>
        </div>

        <div class="form-actions">
          <button type="submit" class="form-submit" id="submitEmail">Get a Free Quote →</button>
          <button type="button" class="form-submit whatsapp-submit" id="submitWhatsapp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Send via WhatsApp
          </button>
        </div>
        <p class="form-note">No spam. We'll reach out on your preferred channel only.</p>
        <p class="form-error form-submit-error" id="form-submit-error" style="display:none;text-align:center;margin-top:8px">Something went wrong. Trying WhatsApp instead...</p>
      </form>
    </div>
    <div class="success-msg" id="successMsg">
      <div style="margin-bottom:20px">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true"><circle cx="28" cy="28" r="27" stroke="#2d5a27" stroke-width="2"/><path d="M16 28l8 8 16-16" stroke="#2d5a27" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <h3>We've got your enquiry!</h3>
      <p>Our travel expert will reach out shortly<br>on your preferred channel.<br><br>Get ready — your story is about to begin.</p>
    </div>
  </div>
</div>

<!-- FOOTER -->
<footer>
  <div class="footer-grid">
    <div>
      <div class="footer-brand">${BUSINESS_NAME.split(' ')[0]} <span>${BUSINESS_NAME.split(' ').slice(1).join(' ')}</span></div>
      <p class="footer-tagline">Where every path leads to a story. We craft journeys through the mountains, plains and sacred lands of India with care, expertise and a personal touch.</p>
      <div class="footer-social">
        ${INSTAGRAM_URL ? `<a href="${INSTAGRAM_URL}" target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Instagram">Ig</a>` : ''}
        ${FACEBOOK_URL ? `<a href="${FACEBOOK_URL}" target="_blank" rel="noopener noreferrer" title="Facebook" aria-label="Facebook">Fb</a>` : ''}
        <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" rel="noopener noreferrer" title="WhatsApp" aria-label="WhatsApp">Wa</a>
        ${YOUTUBE_URL ? `<a href="${YOUTUBE_URL}" target="_blank" rel="noopener noreferrer" title="YouTube" aria-label="YouTube">Yt</a>` : ''}
      </div>
    </div>
    <div class="footer-col">
      <h5>Treks</h5>
      <ul class="footer-links">
        <li><a href="#treks">Hampta Pass</a></li>
        <li><a href="#treks">Triund</a></li>
        <li><a href="#treks">Kareri Lake</a></li>
        <li><a href="#treks">Prashar Lake</a></li>
        <li><a href="#treks">Spiti Circuit</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Destinations</h5>
      <ul class="footer-links">
        <li><a href="#destinations">Rajasthan</a></li>
        <li><a href="#destinations">Char Dham Yatra</a></li>
        <li><a href="#destinations">Nainital</a></li>
        <li><a href="#destinations">Mathura · Vrindavan</a></li>
        <li><a href="#destinations">Ayodhya</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Contact</h5>
      <ul class="footer-links">
        <li><a href="tel:+${WHATSAPP_NUMBER}">${PHONE_DISPLAY}</a></li>
        <li><a href="mailto:${EMAIL}">${EMAIL}</a></li>
        <li><a href="#contact">Book a Package</a></li>
        <li><a href="#fleet">Our Fleet</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© ${new Date().getFullYear()} ${BUSINESS_NAME}. All rights reserved.</p>
    <p>${LOCATION}</p>
  </div>
</footer>

<!-- DETAIL PAGE OVERLAY -->
<div class="detail-overlay" id="detailOverlay">
  <div class="detail-page" id="detailPage"></div>
</div>
<div class="detail-cta-bar" id="detailCtaBar">
  <div class="detail-cta-inner">
    <div class="detail-cta-text">
      <strong id="detailCtaName"></strong>
      <span id="detailCtaSub"></span>
    </div>
    <a href="#contact" class="btn-primary detail-cta-btn" id="detailCtaBtn">Enquire Now</a>
  </div>
</div>

<!-- BACK TO TOP -->
<button class="back-to-top" id="backToTop" aria-label="Back to top">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>
</button>
`

// ── Interactive Logic ──

// Navbar scroll effect
const navbar = document.getElementById('navbar')!
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60)
}, { passive: true })

// Hero parallax
const heroBg = document.getElementById('heroBg')!
window.addEventListener('scroll', () => {
  if (window.scrollY < window.innerHeight) {
    heroBg.style.transform = `translateY(${window.scrollY * 0.35}px)`
  }
}, { passive: true })

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible')
      revealObserver.unobserve(e.target)
    }
  })
}, { threshold: 0.12 })

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => revealObserver.observe(el))

// ── Active nav highlighting ──
const sections = document.querySelectorAll<HTMLElement>('section[id], div[id]')
const navLinksAll = document.querySelectorAll<HTMLAnchorElement>('.nav-links a:not(.nav-cta)')

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id
      navLinksAll.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`)
      })
    }
  })
}, { rootMargin: '-40% 0px -55% 0px' })

sections.forEach(section => {
  if (section.id && section.id !== 'hero') sectionObserver.observe(section)
})

// ── Stats counter animation ──
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return
    const el = entry.target as HTMLElement
    const target = parseInt(el.dataset.target || '0', 10)
    const suffix = el.dataset.suffix || ''
    const duration = 1600
    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * target)
      el.textContent = current + suffix
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
    counterObserver.unobserve(el)
  })
}, { threshold: 0.5 })

document.querySelectorAll<HTMLElement>('.stat-num[data-target]').forEach(el => counterObserver.observe(el))

// ── Back to top ──
const backToTop = document.getElementById('backToTop')!
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 600)
}, { passive: true })
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

// ── Mobile nav toggle with overlay ──
const hamburger = document.getElementById('hamburger')!
const navLinks = document.getElementById('navLinks')!
const navOverlay = document.getElementById('navOverlay')!

function openNav() {
  navLinks.classList.add('open')
  navOverlay.classList.add('visible')
  hamburger.classList.add('is-open')
  hamburger.setAttribute('aria-expanded', 'true')
  document.body.style.overflow = 'hidden'
}

function closeNav() {
  navLinks.classList.remove('open')
  navOverlay.classList.remove('visible')
  hamburger.classList.remove('is-open')
  hamburger.setAttribute('aria-expanded', 'false')
  document.body.style.overflow = ''
}

hamburger.addEventListener('click', () => {
  navLinks.classList.contains('open') ? closeNav() : openNav()
})
navOverlay.addEventListener('click', closeNav)
navLinks.addEventListener('click', e => {
  if ((e.target as HTMLElement).tagName === 'A') closeNav()
})

// Close mobile nav on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && navLinks.classList.contains('open')) closeNav()
})

// ── Destination tabs ──
document.querySelectorAll<HTMLElement>('.dest-tab').forEach(tab => {
  const handler = () => {
    const name = tab.dataset.tab!
    document.querySelectorAll('.dest-tab').forEach(t => {
      t.classList.remove('active')
      t.setAttribute('aria-selected', 'false')
    })
    document.querySelectorAll('.dest-panel').forEach(p => p.classList.remove('active'))
    tab.classList.add('active')
    tab.setAttribute('aria-selected', 'true')
    const panel = document.getElementById('tab-' + name)!
    panel.classList.add('active')
    panel.querySelectorAll('.reveal').forEach(c => c.classList.add('visible'))
  }
  tab.addEventListener('click', handler)
  tab.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler() }
  })
})

// ── Pill selectors with aria ──
document.querySelectorAll('.pill-group').forEach(group => {
  group.addEventListener('click', e => {
    const pill = (e.target as HTMLElement).closest('.pill')
    if (!pill) return
    group.querySelectorAll('.pill').forEach(p => {
      p.classList.remove('selected')
      p.setAttribute('aria-checked', 'false')
    })
    pill.classList.add('selected')
    pill.setAttribute('aria-checked', 'true')
  })
})

// ── Contact preference with aria ──
document.getElementById('contactPref')?.addEventListener('click', e => {
  const btn = (e.target as HTMLElement).closest('.pref-btn')
  if (!btn) return
  document.querySelectorAll('#contactPref .pref-btn').forEach(p => {
    p.classList.remove('selected')
    p.setAttribute('aria-checked', 'false')
  })
  btn.classList.add('selected')
  btn.setAttribute('aria-checked', 'true')
})

// ── Email send tracking (localStorage) ──
const EMAIL_LIMIT = 240 // stay under Web3Forms 250/month free tier

function getMonthKey() {
  const d = new Date()
  return `dh_sends_${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
}

function getSendCount(): number {
  return parseInt(localStorage.getItem(getMonthKey()) || '0', 10)
}

function incrementSendCount() {
  const key = getMonthKey()
  localStorage.setItem(key, String(getSendCount() + 1))
}

function isEmailAvailable(): boolean {
  return !!WEB3FORMS_KEY && WEB3FORMS_KEY !== 'YOUR_ACCESS_KEY_HERE' && getSendCount() < EMAIL_LIMIT
}

function buildWhatsAppUrl(name: string, phone: string, dest: string, groupSize: string, season: string, contactPref: string): string {
  const msg = `Hi, I'm interested in a holiday package with ${BUSINESS_NAME}.\n\n` +
    `*Name:* ${name}\n*Phone:* +91 ${phone}\n*Destination:* ${dest}\n` +
    `*Group Size:* ${groupSize}\n*Travel Season:* ${season}\n*Contact Pref:* ${contactPref}`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
}

// ── Form validation & submit ──
function clearError(id: string) {
  const input = document.getElementById(id) as HTMLInputElement | HTMLSelectElement
  const err = document.getElementById('err-' + id.replace('f-', ''))
  input?.classList.remove('error')
  err?.classList.remove('visible')
}

function showError(id: string) {
  const input = document.getElementById(id) as HTMLInputElement | HTMLSelectElement
  const err = document.getElementById('err-' + id.replace('f-', ''))
  input?.classList.add('error')
  err?.classList.add('visible')
}

// Clear errors on input
;['f-name', 'f-phone', 'f-dest'].forEach(id => {
  document.getElementById(id)?.addEventListener('input', () => clearError(id))
  document.getElementById(id)?.addEventListener('change', () => clearError(id))
})

// Shared form validation + data gathering
function getFormData() {
  const nameInput = document.getElementById('f-name') as HTMLInputElement
  const phoneInput = document.getElementById('f-phone') as HTMLInputElement
  const destInput = document.getElementById('f-dest') as HTMLSelectElement

  let valid = true
  if (!nameInput.value.trim()) { showError('f-name'); valid = false } else { clearError('f-name') }
  const phoneVal = phoneInput.value.replace(/\s/g, '')
  if (!phoneVal || !/^[0-9]{10}$/.test(phoneVal)) { showError('f-phone'); valid = false } else { clearError('f-phone') }
  if (!destInput.value) { showError('f-dest'); valid = false } else { clearError('f-dest') }

  const groupSize = document.querySelector('#groupPills .pill.selected')?.textContent?.trim() || 'Not specified'
  const season = document.querySelector('#seasonPills .pill.selected')?.textContent?.trim() || 'Not specified'
  const contactPref = document.querySelector('#contactPref .pref-btn.selected')?.textContent?.trim() || 'WhatsApp'

  return { valid, name: nameInput.value.trim(), phone: phoneVal, dest: destInput.value, groupSize, season, contactPref }
}

function showSuccess() {
  document.getElementById('formContent')!.style.display = 'none'
  const msg = document.getElementById('successMsg')!
  msg.style.display = 'block'
  msg.style.animation = 'fadeUp 0.6s forwards'
}

function sendViaWhatsApp(data: ReturnType<typeof getFormData>) {
  window.open(buildWhatsAppUrl(data.name, data.phone, data.dest, data.groupSize, data.season, data.contactPref), '_blank')
  showSuccess()
}

// Email submit (auto-fallback to WhatsApp if limit reached or key missing)
document.getElementById('leadForm')?.addEventListener('submit', async (e) => {
  e.preventDefault()
  const data = getFormData()
  if (!data.valid) return

  const submitBtn = document.getElementById('submitEmail') as HTMLButtonElement

  // If email not available, fall back to WhatsApp automatically
  if (!isEmailAvailable()) {
    sendViaWhatsApp(data)
    return
  }

  const originalText = submitBtn.textContent
  submitBtn.disabled = true
  submitBtn.innerHTML = '<span class="spinner"></span>Sending...'

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `New Enquiry: ${data.dest} — ${BUSINESS_NAME}`,
        from_name: BUSINESS_NAME + ' Website',
        name: data.name,
        phone: '+91 ' + data.phone,
        destination: data.dest,
        group_size: data.groupSize,
        travel_season: data.season,
        contact_preference: data.contactPref,
      })
    })

    const result = await res.json()
    if (!result.success) throw new Error('submit failed')

    incrementSendCount()
    showSuccess()

  } catch {
    // Email failed — auto-fallback to WhatsApp
    submitBtn.disabled = false
    submitBtn.textContent = originalText!
    const errEl = document.getElementById('form-submit-error')
    if (errEl) errEl.style.display = 'block'
    setTimeout(() => sendViaWhatsApp(data), 1500)
  }
})

// WhatsApp button — always available
document.getElementById('submitWhatsapp')?.addEventListener('click', () => {
  const data = getFormData()
  if (!data.valid) return
  sendViaWhatsApp(data)
})

// ── Staggered reveal for cards ──
document.querySelectorAll('.treks-grid .trek-card, .dest-panel .dest-card, .fleet-grid .fleet-card, .testimonials-grid .testimonial-card').forEach((card, i) => {
  ;(card as HTMLElement).style.transitionDelay = `${(i % 4) * 80}ms`
})

// ── Image fade-in on load ──
document.querySelectorAll<HTMLImageElement>('.trek-card img, .dest-card img, .spiti-img img, .why-img img, .form-visual > img').forEach(img => {
  const onLoad = () => img.classList.add('loaded')
  if (img.complete) {
    onLoad()
  } else {
    img.addEventListener('load', onLoad)
  }
})

// ── Place Detail Data ──
interface PlaceInfo {
  name: string
  tagline: string
  image: string
  type: 'trek' | 'destination' | 'pilgrimage'
  difficulty?: string
  elevation?: string
  base?: string
  bestTime: string
  overview: string
  highlights: string[]
  itinerary: string[]
  includes: string[]
}

const PLACES: Record<string, PlaceInfo> = {
  'hampta-pass': {
    name: 'Hampta Pass',
    tagline: 'From green valleys to barren moonscapes — Himachal\'s most dramatic crossing',
    image: '/images/places/hampta-pass.jpg',
    type: 'trek',
    difficulty: 'Moderate',
    elevation: '4,270 m',
    base: 'Manali',
    bestTime: 'June – October',
    overview: 'Hampta Pass is one of the most rewarding Himalayan crossings, taking you from the lush green Kullu valley through thick forests and alpine meadows to the stark, arid landscapes of Lahaul. The dramatic contrast of landscapes within a single trek makes this a bucket-list adventure. You\'ll cross glacial streams, camp under star-filled skies at Balu Ka Ghera, and stand at the pass with panoramic views of the Spiti valley below.',
    highlights: [
      'Cross from Kullu\'s green valley into the barren moonscape of Lahaul',
      'Camp at Balu Ka Ghera with views of snow-capped peaks',
      'Visit the stunning Chandratal (Moon Lake) as a bonus trip',
      'Experience dramatic weather and terrain changes in a single trek',
      'Professional guides with deep knowledge of the Pir Panjal range',
    ],
    itinerary: [
      'Day 1: Manali → Jobra → Chika (3,050 m) — Drive to Jobra, trek through forests to Chika campsite',
      'Day 2: Chika → Balu Ka Ghera (3,600 m) — Gradual ascent through meadows along the Rani nala',
      'Day 3: Balu Ka Ghera → Hampta Pass (4,270 m) → Shea Goru (3,500 m) — Summit day! Cross the pass and descend to Lahaul side',
      'Day 4: Shea Goru → Chatru → Chandratal Lake — Drive to the crescent-shaped glacial lake at 4,300 m',
      'Day 5: Chandratal → Manali — Return drive via Batal, Gramphu and the Manali corridor',
    ],
    includes: ['Experienced local mountain guide', 'All meals during trek (veg & non-veg)', 'Quality camping gear (tents, sleeping bags, mats)', 'First aid kit & safety equipment', 'Manali to Manali transport', 'Forest permits & fees'],
  },
  'saryolsar-lake': {
    name: 'Saryolsar Lake',
    tagline: 'A sacred high-altitude lake hidden in ancient cedar forests',
    image: '/images/places/saryolsar-lake.jpg',
    type: 'trek',
    difficulty: 'Easy–Moderate',
    elevation: '3,100 m',
    base: 'Jalori Pass',
    bestTime: 'April – November',
    overview: 'Nestled deep within ancient deodar and oak forest, Saryolsar Lake is a sacred high-altitude lake near Jalori Pass. Local tradition associates the lake with Buddhi Nagin, and the area remains one of the quieter forest walks in this part of Himachal. This gentle trek is ideal for first-timers who want an authentic Himalayan forest experience without a demanding summit climb.',
    highlights: [
      'Trek through centuries-old deodar and oak forests',
      'Visit the sacred lake and Buddhi Nagin temple area',
      'Panoramic views from Jalori Pass (around 3,120 m)',
      'Watch for Himalayan birdlife in the surrounding forests',
      'Experience the old-world charm of Tirthan Valley villages',
    ],
    itinerary: [
      'Day 1: Arrive at Jibhi/Shoja — Settle in, explore the village, acclimatise',
      'Day 2: Drive to Jalori Pass → Trek to Saryolsar Lake (5 km) → Return to Jalori → Drive back',
      'Day 3: Explore Tirthan Valley — Waterfall hike or GHNP buffer zone walk, depart',
    ],
    includes: ['Local forest guide', 'Transport from Aut/Jibhi to Jalori Pass', 'Meals during trek', 'Guesthouse/homestay accommodation', 'First aid & safety kit', 'Permit fees'],
  },
  'tirthan-valley': {
    name: 'Tirthan Valley',
    tagline: 'A hidden gem on the edge of the Great Himalayan National Park',
    image: '/images/places/tirthan-valley.jpg',
    type: 'trek',
    difficulty: 'Easy',
    elevation: '2,650 m',
    base: 'Banjar',
    bestTime: 'March – November',
    overview: 'Tirthan Valley is one of Himachal\'s best-kept secrets — a pristine valley along the turquoise Tirthan river, serving as the gateway to the Great Himalayan National Park (UNESCO World Heritage Site). Unlike crowded hill stations, Tirthan offers a peaceful escape with trout fishing, waterfall hikes, riverside camping, and walks through ancient villages where time stands still.',
    highlights: [
      'Stay beside the crystal-clear Tirthan river',
      'Hike to the Great Himalayan National Park buffer zone',
      'Try trout fishing in pristine mountain streams',
      'Visit hidden waterfalls and ancient village trails',
      'Experience genuine Himachali village hospitality',
    ],
    itinerary: [
      'Day 1: Arrive at Gushaini/Jibhi — Settle into riverside homestay, evening nature walk',
      'Day 2: Waterfall hike & GHNP buffer zone exploration — Full day of trekking through pristine forests',
      'Day 3: Trout fishing & village walks — Visit Nagini waterfall, explore local villages',
      'Day 4: Jalori Pass excursion — Drive up for sunrise views, depart',
    ],
    includes: ['Local guide', 'Homestay accommodation', 'All meals (home-cooked Himachali food)', 'Transport within valley', 'Fishing permits', 'GHNP entry fee'],
  },
  'prashar-lake': {
    name: 'Prashar Lake',
    tagline: 'A floating island temple with sweeping Dhauladhar views',
    image: '/images/places/prashar-lake.jpg',
    type: 'trek',
    difficulty: 'Easy',
    elevation: '2,730 m',
    base: 'Mandi',
    bestTime: 'Year-round (snow in Jan–Feb)',
    overview: 'Prashar Lake sits high above Mandi district with a floating island and a centuries-old pagoda-style temple dedicated to Rishi Prashar. Local belief holds the lake to be bottomless, while the moving island remains one of its best-known features. From the ridge, you get wide views of the Dhauladhar and Pir Panjal ranges. This is one of the easiest yet most rewarding short mountain outings in Himachal.',
    highlights: [
      'See the mysterious floating island in the lake',
      'Visit the ancient three-storey pagoda temple',
      'Wide views of the Dhauladhar and Pir Panjal ranges',
      'Perfect weekend trek — easy for all fitness levels',
      'Camp beside the lake under a canopy of stars',
    ],
    itinerary: [
      'Day 1: Mandi → Bagi → Trek to Prashar Lake (7 km) — Trek through pine forests, arrive at lake by afternoon, camp overnight',
      'Day 2: Sunrise at lake → Temple visit → Trek down → Return to Mandi',
    ],
    includes: ['Mountain guide', 'Camping gear & tents', 'Meals (dinner + breakfast)', 'Mandi to Bagi transport', 'First aid kit', 'Bonfire at camp'],
  },
  'chander-khani': {
    name: 'Chandrakhani Pass',
    tagline: 'Apple orchards to high ridges — sweeping views of the Kullu valley',
    image: '/images/places/chander-khani-pass.jpg',
    type: 'trek',
    difficulty: 'Moderate',
    elevation: '3,660 m',
    base: 'Naggar',
    bestTime: 'May – October',
    overview: 'Starting from the historic village of Naggar — once the capital of the Kullu kingdom — this trek takes you through apple orchards, dense forests of oak and rhododendron, and alpine meadows before reaching the high ridge of Chandrakhani Pass. The pass offers expansive views across the Kullu valley and neighbouring Himalayan ranges.',
    highlights: [
      'Start from historic Naggar village (Roerich Art Gallery nearby)',
      'Walk through apple orchards and rhododendron forests',
      'Panoramic ridge-top views from the pass summit',
      'Descend into the beautiful Malana valley (optional)',
      'Experience authentic rural Himachali culture along the trail',
    ],
    itinerary: [
      'Day 1: Naggar → Rumsu → Forest camp (2,800 m) — Trek through Naggar\'s orchards into dense forests',
      'Day 2: Forest camp → Chandrakhani Pass (3,660 m) → High camp — Summit day with panoramic views',
      'Day 3: High camp → Descent through meadows → Naggar/Malana side',
      'Day 4: Buffer day / return transport to Manali',
    ],
    includes: ['Experienced guide & porter support', 'Camping equipment', 'All trek meals', 'Naggar to Naggar transport', 'Forest permits', 'First aid & safety gear'],
  },
  'kareri-lake': {
    name: 'Kareri Lake',
    tagline: 'A magnificent glacial lake set against the Dhauladhar range',
    image: '/images/places/kareri-lake.jpg',
    type: 'trek',
    difficulty: 'Moderate',
    elevation: '2,934 m',
    base: 'Dharamshala',
    bestTime: 'March – November',
    overview: 'Kareri Lake is a high-altitude freshwater lake in the Dhauladhar range above Dharamshala. Fed by snowmelt from the surrounding peaks, its clear waters reflect the mountains and change character through the seasons. The trek passes through Gaddi shepherd country, forests, and rocky terrain before revealing the lake.',
    highlights: [
      'Crystal-clear glacial lake surrounded by Dhauladhar peaks',
      'Trek through Gaddi shepherd trails and traditional camps',
      'Traditional Gaddi shepherd trails and camps en route',
      'Camp beside the lake at 2,934 m',
      'Combine with a Dharamshala/McLeodganj cultural visit',
    ],
    itinerary: [
      'Day 1: Dharamshala → Ghera → Kareri Village → Trek to Lioti (2,400 m)',
      'Day 2: Lioti → Kareri Lake (2,934 m) — Trek through forests & rocky terrain, camp at lake',
      'Day 3: Kareri Lake → Descent to Kareri Village → Dharamshala',
    ],
    includes: ['Local Gaddi guide', 'Camping equipment', 'All meals on trek', 'Dharamshala transfers', 'Permits & fees', 'Safety kit'],
  },
  'triund': {
    name: 'Triund',
    tagline: 'Dharamshala\'s crown jewel — meadow campsite with the Dhauladhar snow wall',
    image: '/images/places/triund.jpg',
    type: 'trek',
    difficulty: 'Easy',
    elevation: '2,828 m',
    base: 'McLeodganj',
    bestTime: 'Year-round (snow Dec–Feb)',
    overview: 'Triund is the most popular trek near Dharamshala and for good reason — it offers an incredible reward for relatively little effort. The trek ends at a wide meadow ridge with the massive Dhauladhar snow wall rising dramatically on one side and the entire Kangra valley spreading out on the other. Sunset and sunrise from Triund are genuinely unforgettable.',
    highlights: [
      'Dramatic Dhauladhar snow wall rising right above the campsite',
      'Panoramic Kangra valley views stretching to the plains',
      'Unforgettable sunset & sunrise from the ridge',
      'Easy day trek — suitable for beginners and families',
      'Camp under some of the clearest Himalayan night skies',
    ],
    itinerary: [
      'Day 1: McLeodganj → Dharamkot → Triund (9 km, ~4 hrs) — Trek through oak forests, arrive at ridge, camp overnight',
      'Day 2: Sunrise at Triund → Trek down to McLeodganj (3 hrs)',
    ],
    includes: ['Guide', 'Tent & sleeping bag', 'Dinner + breakfast at camp', 'First aid kit'],
  },
  'dev-roopa': {
    name: 'Dev Roopa · Ghepan Roppa',
    tagline: 'Remote, raw and stunningly beautiful — for the true adventurer',
    image: '/images/places/dev-roopa-ghepan-roppa.jpg',
    type: 'trek',
    difficulty: 'Challenging',
    elevation: '4,000+ m',
    base: 'Lahaul',
    bestTime: 'July – September',
    overview: 'Dev Roopa and Ghepan Roppa are among the more remote trekking areas in the Lahaul region. These trails take you through alpine meadows, shepherd camps, high passes, and secluded lakes with very little tourist traffic. If you\'re looking for quieter Himalayan wilderness away from the standard routes, this is the appeal.',
    highlights: [
      'Truly off-the-beaten-path — minimal tourist footfall',
      'Pristine alpine meadows carpeted with wildflowers in season',
      'Remote high-altitude lake camps and meadow sections',
      'Experience authentic Lahauli culture and hospitality',
      'Dramatic high passes with views into the Spiti valley',
    ],
    itinerary: [
      'Day 1: Arrive in Lahaul — Acclimatisation & briefing',
      'Day 2: Base village → Forest camp (3,200 m) — Begin trek through dense forests',
      'Day 3: Forest camp → Alpine meadows (3,600 m) — Open meadows, shepherd trails',
      'Day 4: Meadows → Dev Roopa Lake (4,000 m) — Sacred lake campsite',
      'Day 5: Dev Roopa → High pass → Ghepan Roppa (4,200 m)',
      'Day 6: Ghepan Roppa → Descent to base camp',
      'Day 7-8: Return journey & buffer day for weather',
    ],
    includes: ['Expert high-altitude guide & porters', 'All camping & safety equipment', 'All meals on trek', 'Lahaul transport', 'Emergency evacuation planning'],
  },
  'spiti-circuit': {
    name: 'Lahaul Spiti Complete Circuit',
    tagline: 'A bucket-list road journey through the high-altitude cold desert',
    image: '/images/places/lahaul-spiti.jpg',
    type: 'destination',
    bestTime: 'June – October',
    overview: 'The Lahaul-Spiti circuit is one of India\'s best-known high-altitude road journeys, winding through the cold desert of Spiti valley with ancient Buddhist monasteries, Chandratal Lake, Hikkim\'s high-altitude post office, and dramatic mountain roads through Lahaul and Spiti.',
    highlights: [
      'Key Monastery — 1,000-year-old monastery at 4,166 m',
      'Chandratal Lake — The crescent-shaped lake at around 4,300 m',
      'Kunzum Pass — One of the highest motorable passes at 4,551 m',
      'World\'s highest post office at Hikkim (4,440 m)',
      'Pin Valley National Park — Snow leopard territory',
      'Dhankar Monastery — Perched dramatically on a cliff edge',
      'Tabo Monastery — The "Ajanta of the Himalayas"',
    ],
    itinerary: [
      'Day 1: Manali — Arrival and acclimatisation',
      'Day 2: Manali → Atal Tunnel → Sissu / Jispa — Gradual altitude gain in Lahaul',
      'Day 3: Sissu / Jispa → Gramphu → Kunzum Pass → Kaza',
      'Day 4: Kaza — Key Monastery, Kibber, Chicham Bridge',
      'Day 5: Kaza → Hikkim → Komic → Langza → Kaza',
      'Day 6: Kaza → Dhankar → Tabo',
      'Day 7: Tabo / Kaza side excursion → Pin Valley → Kaza',
      'Day 8: Kaza → Losar → Kunzum Pass → Chandratal Lake',
      'Day 9: Chandratal → Batal → Gramphu → Atal Tunnel → Manali',
      'Day 10: Buffer day / Departure',
    ],
    includes: ['Entire fleet transport (Innova/SUV)', 'Hotel & homestay accommodation', 'All meals (breakfast + dinner)', 'Experienced hill driver', 'Applicable permits & fees', 'Oxygen cylinder & first aid'],
  },
  'jaipur': {
    name: 'Jaipur',
    tagline: 'The Pink City — Amber Fort, Hawa Mahal & royal heritage',
    image: '/images/places/jaipur.jpg',
    type: 'destination',
    bestTime: 'October – March',
    overview: 'Jaipur, the capital of Rajasthan, is a magnificent city where royal palaces, massive forts, and bustling bazaars coexist. Founded in 1727 by Maharaja Sawai Jai Singh II, the city was India\'s first planned city and is known for its distinctive terracotta-pink architecture. From the grandeur of Amber Fort to the intricate lattice windows of Hawa Mahal, every corner tells a story of Rajput valour and artistic genius.',
    highlights: [
      'Amber Fort — Majestic hilltop fortress with mirror palace',
      'Hawa Mahal — Iconic "Palace of Winds" with 953 windows',
      'City Palace — Still home to the Jaipur royal family',
      'Jantar Mantar — UNESCO World Heritage astronomical observatory',
      'Nahargarh Fort — Stunning sunset views over the city',
      'Johari Bazaar — Famous for jewellery and Rajasthani crafts',
    ],
    itinerary: [
      'Day 1: Arrive Jaipur → Hawa Mahal → City Palace → Jantar Mantar → Johari Bazaar',
      'Day 2: Amber Fort (morning) → Jal Mahal → Nahargarh Fort (sunset) → Traditional Rajasthani dinner',
      'Day 3: Albert Hall Museum → Shopping → Departure',
    ],
    includes: ['AC cab for all sightseeing', 'Hotel accommodation', 'Breakfast', 'Local sightseeing guide', 'Monument entry tickets', 'Airport/station transfers'],
  },
  'udaipur': {
    name: 'Udaipur',
    tagline: 'City of Lakes & Palaces — the most romantic city in India',
    image: '/images/places/udaipur.jpg',
    type: 'destination',
    bestTime: 'September – March',
    overview: 'Often called the "Venice of the East", Udaipur is built around a series of stunning artificial lakes and adorned with grand palaces, temples, and havelis. The City Palace complex rising above Lake Pichola is one of Rajasthan\'s most magnificent sights. Whether it\'s a sunset boat ride, exploring the intricate palace rooms, or simply watching the light change over the Aravalli hills, Udaipur casts a spell that lingers.',
    highlights: [
      'City Palace — Rajasthan\'s largest palace complex on Lake Pichola',
      'Lake Pichola boat ride with Taj Lake Palace views',
      'Jagdish Temple — Beautifully carved 17th-century temple',
      'Saheliyon Ki Bari — Garden of the Maidens',
      'Vintage car museum & crystal gallery',
      'Sunset views from Monsoon Palace (Sajjangarh)',
    ],
    itinerary: [
      'Day 1: Arrive → City Palace → Jagdish Temple → Lake Pichola sunset boat ride',
      'Day 2: Saheliyon Ki Bari → Fateh Sagar Lake → Sajjangarh (Monsoon Palace) → Cultural show',
      'Day 3: Haldighati / Kumbhalgarh day trip or shopping → Departure',
    ],
    includes: ['AC transport', 'Lake-view hotel', 'Breakfast', 'Local guide', 'Boat ride tickets', 'Monument entries'],
  },
  'jodhpur': {
    name: 'Jodhpur',
    tagline: 'The Blue City — Mehrangarh Fort & Rajput grandeur',
    image: '/images/places/jodhpur.jpg',
    type: 'destination',
    bestTime: 'October – March',
    overview: 'Jodhpur, the "Blue City," sits at the edge of the Thar Desert with the imposing Mehrangarh Fort towering above a sea of blue-washed houses. The fort — one of the largest in India — is a masterpiece of Rajput architecture with ornate palace rooms, sprawling courtyards, and jaw-dropping views of the blue city below.',
    highlights: [
      'Mehrangarh Fort — One of India\'s most impressive forts',
      'Blue City views from the fort ramparts',
      'Jaswant Thada — Marble memorial overlooking the fort',
      'Clock Tower & Sardar Market — Spices, textiles, crafts',
      'Umaid Bhawan Palace — Art Deco royal residence',
    ],
    itinerary: [
      'Day 1: Arrive → Mehrangarh Fort (half day) → Jaswant Thada → Clock Tower market',
      'Day 2: Umaid Bhawan Palace → Mandore Gardens → Departure',
    ],
    includes: ['AC cab', 'Hotel accommodation', 'Breakfast', 'Fort guide', 'Entry tickets'],
  },
  'pushkar': {
    name: 'Pushkar',
    tagline: 'Sacred lake and Brahma Temple — one of Rajasthan\'s key pilgrimage towns',
    image: '/images/places/pushkar.jpg',
    type: 'pilgrimage',
    bestTime: 'October – March (Pushkar Fair: Nov)',
    overview: 'Pushkar is one of Rajasthan\'s most important pilgrimage towns, centred around a holy lake with 52 bathing ghats and its famous Brahma Temple. The town has an irresistible charm — narrow lanes filled with incense smoke, sunset aarti ceremonies at the ghats, and the vibrant annual Pushkar Fair.',
    highlights: [
      'Brahma Temple — Pushkar\'s best-known shrine',
      'Pushkar Lake — 52 sacred bathing ghats',
      'Sunset aarti ceremony at the ghats',
      'Savitri Temple — Hilltop temple via ropeway with valley views',
      'Pushkar Camel Fair (November) — World-famous cultural event',
    ],
    itinerary: [
      'Day 1: Arrive → Brahma Temple → Pushkar Lake ghats → Sunset aarti → Bazaar walk',
      'Day 2: Savitri Temple (sunrise ropeway) → Rose garden visit → Departure to Ajmer/Jaipur',
    ],
    includes: ['Transport', 'Guesthouse/hotel', 'Breakfast', 'Local guide', 'Ropeway ticket'],
  },
  'nainital': {
    name: 'Nainital',
    tagline: 'The Lake District of India — a Kumaon hill station gem',
    image: '/images/places/nainital.jpg',
    type: 'destination',
    bestTime: 'March – June, September – November',
    overview: 'Nestled in the Kumaon foothills at 1,938 m, Nainital is wrapped around the beautiful emerald-green Naini Lake with seven hills surrounding it like a natural amphitheatre. The British-era charm lingers in its colonial architecture, winding Mall Road, and the Governor\'s House.',
    highlights: [
      'Naini Lake — Boating on the iconic kidney-shaped lake',
      'Snow View Point — Cable car ride with Himalayan panorama',
      'Tiffin Top / Dorothy\'s Seat — Scenic hilltop walk',
      'Naina Devi Temple — Sacred temple at the lake\'s edge',
      'Bhimtal, Sattal & Naukuchiatal — Surrounding lake circuit',
    ],
    itinerary: [
      'Day 1: Arrive Nainital → Mall Road walk → Naini Lake boating → Naina Devi Temple',
      'Day 2: Snow View cable car → Tiffin Top trek → Cave Garden → Eco Cave Garden',
      'Day 3: Bhimtal, Sattal & Naukuchiatal lake circuit day trip',
      'Day 4: Departure (or Jim Corbett extension)',
    ],
    includes: ['AC cab from Haldwani/Kathgodam', 'Lake-view hotel', 'Breakfast', 'Sightseeing guide', 'Boating & cable car tickets'],
  },
  'mussoorie': {
    name: 'Mussoorie',
    tagline: 'Queen of the Hills — colonial charm meets Himalayan beauty',
    image: '/images/places/mussoorie.jpg',
    type: 'destination',
    bestTime: 'March – June, September – November',
    overview: 'Perched on the Garhwal Himalayan foothills at 2,005 m, Mussoorie has been a beloved hill station since the British era. The "Queen of the Hills" offers the perfect mix of colonial heritage, mountain views, and pleasant weather.',
    highlights: [
      'Mall Road — The vibrant heart of Mussoorie with shops & cafes',
      'Gun Hill — Ropeway ride with panoramic Himalayan views',
      'Kempty Falls — Popular cascading waterfall',
      'Lal Tibba — Highest point with telescope views of Himalayan peaks',
      'Landour — Quiet cantonment with charming cafes & walks',
    ],
    itinerary: [
      'Day 1: Arrive Mussoorie → Mall Road → Gun Hill ropeway → Camel\'s Back Road sunset walk',
      'Day 2: Kempty Falls → Company Garden → Lal Tibba → Landour walk',
      'Day 3: Cloud\'s End → Jharipani Falls → Departure',
    ],
    includes: ['AC cab from Dehradun', 'Hotel accommodation', 'Breakfast', 'Sightseeing', 'Ropeway ticket'],
  },
  'char-dham': {
    name: 'Char Dham Yatra',
    tagline: 'Badrinath · Kedarnath · Gangotri · Yamunotri — the sacred circuit',
    image: '/images/places/char-dham.jpg',
    type: 'pilgrimage',
    bestTime: 'May – June, September – October',
    overview: 'The Char Dham Yatra is one of Hinduism\'s best-known pilgrimage circuits, visiting four sacred shrines in the Garhwal Himalayas: Badrinath, Kedarnath, Gangotri, and Yamunotri. Gangotri and Yamunotri are revered as the origin shrines of the Ganga and Yamuna, while the physical glacier sources lie further uphill.',
    highlights: [
      'Badrinath Temple — One of the most sacred Vishnu temples in India',
      'Kedarnath Temple — Ancient Shiva jyotirlinga at 3,583 m',
      'Gangotri — Revered origin shrine of the Ganga',
      'Yamunotri — Shrine of Yamuna with sacred hot springs',
      'Mana Village — Last Indian village before the Tibet border',
    ],
    itinerary: [
      'Day 1: Haridwar/Rishikesh — Assembly & puja',
      'Day 2: Haridwar → Barkot (Yamunotri base)',
      'Day 3: Barkot → Janki Chatti → Yamunotri (approx. 5–6 km trek each way / pony options) → Barkot',
      'Day 4: Barkot → Uttarkashi',
      'Day 5: Uttarkashi → Gangotri → Uttarkashi',
      'Day 6: Uttarkashi → Guptkashi (Kedarnath base)',
      'Day 7: Guptkashi → Gaurikund → Kedarnath (long uphill trek / pony / helicopter options)',
      'Day 8: Kedarnath → Guptkashi/Rudraprayag',
      'Day 9: Rudraprayag → Badrinath',
      'Day 10: Badrinath darshan → Mana Village → Joshimath',
      'Day 11: Joshimath → Haridwar/Rishikesh',
      'Day 12: Buffer day / Departure',
    ],
    includes: ['Tempo Traveller / SUV transport', 'Hotel accommodation (all nights)', 'Breakfast + dinner daily', 'Experienced yatra guide', 'All toll & parking fees', 'Puja arrangements at all four dhams', 'Emergency medical kit & oxygen'],
  },
  'rishikesh': {
    name: 'Rishikesh',
    tagline: 'Yoga capital of the world — adventure meets spirituality',
    image: '/images/places/rishikesh.jpg',
    type: 'destination',
    bestTime: 'September – May',
    overview: 'Rishikesh sits in the Himalayan foothills along the Ganga, creating a blend of spiritual tourism and adventure travel. Often promoted as the yoga capital of the world, it is also one of India\'s best-known white-water rafting bases.',
    highlights: [
      'Ganga Aarti at Triveni Ghat — Mesmerising evening ceremony',
      'White-water rafting on the Ganga (16 km / 26 km stretches)',
      'Laxman Jhula & Ram Jhula — Iconic suspension bridges',
      'Beatles Ashram — Abandoned ashram with incredible street art',
      'Bungee jumping, cliff jumping & giant swing',
      'Yoga & meditation sessions by the river',
    ],
    itinerary: [
      'Day 1: Arrive → Laxman Jhula → Ram Jhula → Beatles Ashram → Ganga Aarti',
      'Day 2: White-water rafting (morning) → Cliff jumping → Riverside yoga session',
      'Day 3: Neelkanth Mahadev Temple trek → Departure',
    ],
    includes: ['Transport from Haridwar/Dehradun', 'Riverside camp or hotel', 'Breakfast', 'Rafting with gear', 'Guide'],
  },
  'mathura-vrindavan': {
    name: 'Mathura · Vrindavan',
    tagline: 'Birthplace of Lord Krishna — a divine circuit of temples and faith',
    image: '/images/places/mathura-vrindavan.jpg',
    type: 'pilgrimage',
    bestTime: 'October – March (Holi: Feb/Mar)',
    overview: 'Mathura and Vrindavan together form one of India\'s most important Krishna pilgrimage circuits. Mathura\'s Krishna Janmabhoomi complex is traditionally revered as the birthplace of Lord Krishna, while Vrindavan\'s temples celebrate Krishna devotion across the region.',
    highlights: [
      'Krishna Janmabhoomi Temple — Traditionally revered as Krishna\'s birthplace',
      'Prem Mandir — Stunning marble temple that lights up at night',
      'Banke Bihari Temple — One of the most visited temples in India',
      'ISKCON Temple — Beautiful complex with deity darshan',
      'Yamuna Aarti — Evening ceremony at the ghats',
    ],
    itinerary: [
      'Day 1: Arrive Mathura → Krishna Janmabhoomi → Dwarkadhish Temple → Vishram Ghat → Yamuna Aarti',
      'Day 2: Vrindavan — Banke Bihari → Prem Mandir → ISKCON → Radha Vallabh Temple → Departure',
    ],
    includes: ['AC transport', 'Hotel near temple area', 'Breakfast', 'Local temple guide', 'Aarti arrangements'],
  },
  'ayodhya': {
    name: 'Ayodhya',
    tagline: 'Ram Janmabhoomi — sacred, eternal, and reborn',
    image: '/images/places/ayodhya.png',
    type: 'pilgrimage',
    bestTime: 'October – March',
    overview: 'Ayodhya is one of the seven sacred cities in Hindu tradition and is revered as the birthplace of Lord Rama. The Ram Mandir at Ram Janmabhoomi is now the city\'s central pilgrimage landmark. Beyond the temple, Ayodhya offers a deeply spiritual experience with the Saryu river ghats and a large network of historic temples.',
    highlights: [
      'Ram Mandir — Major temple complex at Ram Janmabhoomi',
      'Saryu River ghats — Evening deepotsav ceremony',
      'Hanuman Garhi — Hilltop Hanuman temple with city views',
      'Kanak Bhawan — Temple gifted to Sita by Queen Kaikeyi',
      'Ram Ki Paidi — Stepped ghats for holy bathing',
    ],
    itinerary: [
      'Day 1: Arrive Ayodhya → Ram Mandir darshan → Hanuman Garhi → Kanak Bhawan → Saryu Aarti',
      'Day 2: Ram Ki Paidi (morning dip) → Nageshwarnath Temple → Tulsi Smarak → Departure',
    ],
    includes: ['AC transport from Lucknow', 'Hotel accommodation', 'Breakfast', 'Temple guide', 'Aarti arrangements'],
  },
  'khatu-shyam': {
    name: 'Khatu Shyam',
    tagline: 'Sikar, Rajasthan — one of North India\'s best-known Shyam Baba shrines',
    image: '/images/places/khatu-shyam.jpg',
    type: 'pilgrimage',
    bestTime: 'Year-round (Phalguna Mela: Feb/Mar)',
    overview: 'Khatu Shyam Ji temple in Sikar district is one of the most visited pilgrimage sites in Rajasthan. The shrine is dedicated to Shyam Baba, identified in tradition with Barbarika from the Mahabharata. The temple draws large numbers of devotees, especially during the annual Phalguna fair.',
    highlights: [
      'Khatu Shyam Ji Temple — Ornate temple complex in Sikar district',
      'Daily aarti & bhajan — Soul-stirring devotional atmosphere',
      'Phalguna Mela — Massive annual fair (Feb/Mar)',
      'Shyam Kund — Sacred tank near the temple',
      'Often combined with Salasar Balaji for a dual darshan trip',
    ],
    itinerary: [
      'Day 1: Arrive Khatu → Evening aarti & darshan → Shyam Kund visit → Night stay',
      'Day 2: Morning aarti → Final darshan → Departure (or continue to Salasar Balaji)',
    ],
    includes: ['AC transport from Jaipur/Delhi', 'Dharamshala/hotel stay', 'Meals', 'Puja arrangements'],
  },
  'salasar-balaji': {
    name: 'Salasar Balaji',
    tagline: 'Churu, Rajasthan — one of Rajasthan\'s major Hanuman shrines',
    image: '/images/places/salasar-balaji.jpg',
    type: 'pilgrimage',
    bestTime: 'Year-round (Chaitra & Ashwin Purnima)',
    overview: 'Salasar Balaji temple in Churu district is a major Hanuman shrine in Rajasthan. Tradition reveres the idol here as swayambhu (self-manifested), and the temple is especially well known for the deity\'s bearded appearance. Devotees visit year-round, with heavier rush on Tuesdays, Saturdays, and during Chaitra and Ashwin Purnima.',
    highlights: [
      'Salasar Balaji Temple — Major Hanuman shrine in Churu district',
      'Distinctive bearded Hanuman deity revered by devotees',
      'Grand aarti ceremonies on Tuesdays & Saturdays',
      'Temple complex with beautiful Rajasthani architecture',
      'Often paired with Khaatu Shyam for a complete pilgrimage circuit',
    ],
    itinerary: [
      'Day 1: Arrive Salasar → Temple darshan → Evening aarti → Night stay',
      'Day 2: Morning aarti → Final darshan → Departure (or continue to Khaatu Shyam)',
    ],
    includes: ['AC transport from Jaipur/Delhi', 'Dharamshala/hotel', 'Meals', 'Puja samagri'],
  },
}

// ── Detail Page Logic ──
const detailOverlay = document.getElementById('detailOverlay')!
const detailPage = document.getElementById('detailPage')!

function openDetailPage(placeId: string) {
  const place = PLACES[placeId]
  if (!place) return

  // Sticky CTA bar
  document.getElementById('detailCtaName')!.textContent = place.name
  document.getElementById('detailCtaSub')!.textContent = place.tagline
  const ctaBar = document.getElementById('detailCtaBar')!
  ctaBar.classList.add('visible')

  const difficultyBadge = place.difficulty
    ? `<span class="detail-badge diff-${place.difficulty.toLowerCase().replace(/[–\s]/g, '-')}">${place.difficulty}</span>`
    : ''
  const elevationTag = place.elevation ? `<span class="detail-badge detail-badge-outline">▲ ${place.elevation}</span>` : ''
  const typeLabel = place.type === 'trek' ? 'Trek' : place.type === 'pilgrimage' ? 'Pilgrimage' : 'Destination'

  detailPage.innerHTML = `
    <div class="detail-hero">
      <button class="detail-back" id="detailBack" aria-label="Go back">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
      </button>
      <img src="${place.image}" alt="${place.name}">
      <div class="detail-hero-overlay">
        <div class="detail-hero-badges">
          <span class="detail-badge detail-badge-type">${typeLabel}</span>
          ${difficultyBadge}${elevationTag}
        </div>
        <h1 class="detail-hero-title">${place.name}</h1>
        <p class="detail-hero-tagline">${place.tagline}</p>
      </div>
    </div>

    <div class="detail-body">
      <div class="detail-meta-strip">
        ${place.base ? `<div class="detail-meta-item"><span class="detail-meta-icon">📍</span><div><span class="detail-meta-label">Base Camp</span><span class="detail-meta-val">${place.base}</span></div></div>` : ''}
        <div class="detail-meta-item">
          <span class="detail-meta-icon">☀️</span>
          <div><span class="detail-meta-label">Best Time to Visit</span><span class="detail-meta-val">${place.bestTime}</span></div>
        </div>
        ${place.elevation ? `<div class="detail-meta-item"><span class="detail-meta-icon">▲</span><div><span class="detail-meta-label">Max Elevation</span><span class="detail-meta-val">${place.elevation}</span></div></div>` : ''}
        ${place.difficulty ? `<div class="detail-meta-item"><span class="detail-meta-icon">🏔️</span><div><span class="detail-meta-label">Difficulty</span><span class="detail-meta-val">${place.difficulty}</span></div></div>` : ''}
      </div>

      <div class="detail-shell">
        <div class="detail-main">
          <section class="detail-section detail-section-card detail-section-intro">
            <span class="detail-kicker">Why This Trip</span>
            <h2>Overview</h2>
            <p>${place.overview}</p>
          </section>

          <section class="detail-section detail-section-card">
            <span class="detail-kicker">How It Flows</span>
            <h2>${place.type === 'trek' ? 'Sample Itinerary' : 'Suggested Itinerary'}</h2>
            <p class="detail-itin-note">Itineraries are flexible and can be customised to your group's pace and preferences.</p>
            <div class="detail-itinerary">
              ${place.itinerary.map((step, i) => `
                <div class="detail-itin-step">
                  <div class="detail-itin-num">${i + 1}</div>
                  <div class="detail-itin-text">${step}</div>
                </div>
              `).join('')}
            </div>
          </section>
        </div>

        <aside class="detail-side">
          <section class="detail-section detail-section-card detail-side-card">
            <span class="detail-kicker">At A Glance</span>
            <h2>Highlights</h2>
            <ul class="detail-highlights">
              ${place.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
          </section>

          <section class="detail-section detail-section-card detail-side-card">
            <span class="detail-kicker">Package Scope</span>
            <h2>What's Included</h2>
            <div class="detail-includes">
              ${place.includes.map(item => `<span class="detail-include-chip">${item}</span>`).join('')}
            </div>
          </section>

          <section class="detail-section detail-cta-section detail-side-card">
            <span class="detail-kicker">Next Step</span>
            <h2>Ready to go?</h2>
            <p>Tell us your dates, group size and preferences and we’ll shape the package around your plan.</p>
            <div class="detail-cta-buttons">
              <a href="#contact" class="btn-primary detail-enquire-btn" data-dest="${place.name}">Enquire About This Trip</a>
              <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I'm interested in ${place.name} with ${BUSINESS_NAME}. Please share details.`)}" target="_blank" rel="noopener noreferrer" class="btn-outline detail-wa-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us
              </a>
            </div>
          </section>
        </aside>
      </div>
    </div>
  `

  detailOverlay.classList.add('open')
  document.body.style.overflow = 'hidden'
  detailOverlay.scrollTop = 0

  document.getElementById('detailBack')?.addEventListener('click', closeDetailPage)

  // Enquire buttons — close overlay, scroll to form, pre-select destination
  function handleEnquire(ev: Event) {
    ev.preventDefault()
    const destName = (ev.currentTarget as HTMLElement).getAttribute('data-dest')
    closeDetailPage()
    setTimeout(() => {
      const formDest = document.getElementById('f-dest') as HTMLSelectElement
      if (formDest && destName) {
        for (const opt of Array.from(formDest.options)) {
          if (opt.text.includes(destName) || destName.includes(opt.text)) {
            formDest.value = opt.value
            break
          }
        }
      }
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }, 350)
  }

  detailPage.querySelector('.detail-enquire-btn')?.addEventListener('click', handleEnquire)

  // Sticky bar enquire button
  const ctaBtn = document.getElementById('detailCtaBtn')!
  ctaBtn.setAttribute('data-dest', place.name)
  ctaBtn.onclick = handleEnquire
}

function closeDetailPage() {
  detailOverlay.classList.remove('open')
  document.getElementById('detailCtaBar')!.classList.remove('visible')
  document.body.style.overflow = ''
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && detailOverlay.classList.contains('open')) closeDetailPage()
})

// Click handlers for all cards with data-place
document.querySelectorAll<HTMLElement>('[data-place]').forEach(card => {
  card.style.cursor = 'pointer'
  card.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('.btn-primary')) return
    openDetailPage(card.dataset.place!)
  })
})
