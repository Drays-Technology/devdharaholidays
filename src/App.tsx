import { Suspense, lazy, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'
import { HomePage } from './pages/HomePage'

const PlacePage = lazy(() => import('./pages/PlacePage').then((module) => ({ default: module.PlacePage })))

export function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Navbar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/place/:placeId" element={<PlacePage />} />
        </Routes>
      </Suspense>
      <Footer />
      <BackToTop />
    </>
  )
}
