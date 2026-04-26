import { useCountUp } from '../hooks/useCountUp'

export function Stats() {
  useCountUp()

  return (
    <div className="stats-strip" aria-label="Key numbers">
      <div className="stat-item reveal">
        <div className="stat-num" data-target="500" data-suffix="+">0</div>
        <div className="stat-label">Happy Travellers</div>
      </div>
      <div className="stat-item reveal">
        <div className="stat-num" data-target="15" data-suffix="+">0</div>
        <div className="stat-label">Trek Routes</div>
      </div>
      <div className="stat-item reveal">
        <div className="stat-num" data-target="25" data-suffix="+">0</div>
        <div className="stat-label">Destinations</div>
      </div>
      <div className="stat-item reveal">
        <div className="stat-num" data-target="10" data-suffix="+">0</div>
        <div className="stat-label">Fleet Vehicles</div>
      </div>
    </div>
  )
}
