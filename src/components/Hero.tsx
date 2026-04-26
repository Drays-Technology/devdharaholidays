import { useEffect, useRef } from 'react'

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current && window.scrollY < window.innerHeight) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" ref={bgRef} />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-eyebrow">Himachal Pradesh · Rajasthan · Uttarakhand</p>
        <h1 className="hero-title">
          Where every path<br /><em>leads to a story.</em><br />Explore the hills with us.
        </h1>
        <p className="hero-sub">
          Complete holiday packages with a full fleet of cabs &amp; travellers — crafted for every kind of wanderer.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary" onClick={(e) => scrollTo(e, 'contact')}>Plan My Trip</a>
          <a href="#treks" className="btn-outline" onClick={(e) => scrollTo(e, 'treks')}>Explore Treks</a>
        </div>
      </div>
      <div className="hero-scroll-hint" aria-hidden="true">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
