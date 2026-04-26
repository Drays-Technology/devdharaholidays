import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Hero } from '../components/Hero'
import { Stats } from '../components/Stats'
import { Treks } from '../components/Treks'
import { Destinations } from '../components/Destinations'
import { Fleet } from '../components/Fleet'
import { WhyUs } from '../components/WhyUs'
import { Testimonials } from '../components/Testimonials'
import { ContactForm } from '../components/ContactForm'

export function HomePage() {
  const location = useLocation()
  useScrollReveal([location.pathname])

  // Handle scroll-to from navigation state
  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null
    if (state?.scrollTo) {
      setTimeout(() => {
        document.getElementById(state.scrollTo!)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [location.state])

  return (
    <>
      <a href="#treks" className="skip-nav">Skip to content</a>
      <Hero />
      <Stats />
      <Treks />
      <Destinations />
      <Fleet />
      <WhyUs />
      <Testimonials />
      <ContactForm />
    </>
  )
}
