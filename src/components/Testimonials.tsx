export function Testimonials() {
  return (
    <section className="testimonials-section deferred-section">
      <div className="section-header reveal" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px' }}>
        <p className="section-eyebrow">Traveller Stories</p>
        <h2 className="section-title" style={{ maxWidth: '100%' }}>What our guests say</h2>
      </div>
      <div className="testimonials-grid">
        <div className="testimonial-card reveal">
          <div className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
          <div className="testimonial-text">"The Hampta Pass trek with Devdhara was absolutely life-changing. The guide knew every turn of the trail and made the entire group feel completely safe."</div>
          <div className="testimonial-author"><strong>Rahul Sharma</strong>Delhi · Hampta Pass Trek</div>
        </div>
        <div className="testimonial-card reveal">
          <div className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
          <div className="testimonial-text">"We booked a Char Dham Yatra for 14 people. The Tempo Traveller was spotless, the driver excellent on mountain roads, and the logistics were flawless."</div>
          <div className="testimonial-author"><strong>Sunita Agarwal</strong>Chandigarh · Char Dham Yatra</div>
        </div>
        <div className="testimonial-card reveal">
          <div className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
          <div className="testimonial-text">"Spiti circuit in July — honestly the best trip of my life. Devdhara arranged the route logistics, stays and planning smoothly from start to finish."</div>
          <div className="testimonial-author"><strong>Priya Menon</strong>Bangalore · Lahaul Spiti Circuit</div>
        </div>
      </div>
    </section>
  )
}
