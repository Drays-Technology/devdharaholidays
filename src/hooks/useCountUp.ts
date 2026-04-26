import { useEffect, useRef } from 'react'

export function useCountUp() {
  const observed = useRef(false)

  useEffect(() => {
    if (observed.current) return
    observed.current = true

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
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
            el.textContent = Math.round(eased * target) + suffix
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          observer.unobserve(el)
        })
      },
      { threshold: 0.5 },
    )

    document.querySelectorAll<HTMLElement>('.stat-num[data-target]').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
