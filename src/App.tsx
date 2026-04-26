import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'
import { HomePage } from './pages/HomePage'
import { PlacePage } from './pages/PlacePage'

export function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/place/:placeId" element={<PlacePage />} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  )
}
