import { useEffect, useRef, useState, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const navRef = useRef<HTMLUListElement>(null)
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
      e.preventDefault()
      setMenuOpen(false)
      if (isHome) {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        navigate('/', { state: { scrollTo: hash } })
      }
    },
    [isHome, navigate],
  )

  const links = isHome ? (
    <>
      <li><a href="#treks" onClick={(e) => handleNavClick(e, 'treks')}>Treks</a></li>
      <li><a href="#destinations" onClick={(e) => handleNavClick(e, 'destinations')}>Destinations</a></li>
      <li><a href="#fleet" onClick={(e) => handleNavClick(e, 'fleet')}>Fleet</a></li>
      <li><a href="#contact" className="nav-cta" onClick={(e) => handleNavClick(e, 'contact')}>Book Now</a></li>
    </>
  ) : (
    <>
      <li><a href="/" onClick={(e) => { e.preventDefault(); setMenuOpen(false); navigate('/') }}>Home</a></li>
      <li><a href="#contact" className="nav-cta" onClick={(e) => handleNavClick(e, 'contact')}>Book Now</a></li>
    </>
  )

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''} aria-label="Main navigation">
        <a href="/" className="nav-logo" aria-label="Devdhara Holidays — Home" onClick={(e) => { e.preventDefault(); navigate('/') }}>
          <svg width="230" height="48" viewBox="0 0 230 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="18,36 30,10 42,36" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="30,20 40,36 20,36" fill="#3d7a35" />
            <path d="M26 18 L30 10 L34 18 Z" fill="rgba(255,255,255,0.7)" />
            <polygon points="36,36 46,16 56,36" fill="none" stroke="#c9872a" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="46,24 54,36 38,36" fill="#c9872a" opacity="0.85" />
            <text x="70" y="28" fontFamily="'Spectral', Georgia, serif" fontSize="22" fontWeight="500" fill="#ffffff" letterSpacing="0.5">Devdhara</text>
            <text x="71" y="41" fontFamily="'Karla', sans-serif" fontSize="7.5" fontWeight="400" fill="#c9872a" letterSpacing="4">HOLIDAYS</text>
          </svg>
        </a>

        {/* Desktop links — inside nav */}
        <ul className="nav-links nav-links-desktop" ref={navRef}>
          {links}
        </ul>

        <button
          className={`nav-hamburger${menuOpen ? ' is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile full-screen menu — outside nav so backdrop-filter doesn't break it */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <ul className="mobile-menu-links">
          {links}
        </ul>
      </div>
    </>
  )
}
