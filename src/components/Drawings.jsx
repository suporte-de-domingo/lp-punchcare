export function PunchDrawing() {
  return (
    <svg className="drawing" viewBox="0 0 360 200" aria-hidden="true">
      <path className="draw" pathLength="1" d="M30 70H80L96 86H130L140 78H272L292 92H318L324 98V102L318 108H292L272 122H140L130 114H96L80 130H30Z" />
      <path className="centerline" d="M18 100H340" />
      <path className="draw draw-accent" pathLength="1" d="M30 162H324M30 152V172M324 152V172" />
      <path className="draw draw-accent" pathLength="1" d="M12 70V130M4 70H20M4 130H20" />
      <text x="177" y="186">133,60 mm</text>
      <text x="6" y="60">Ø 25,40</text>
      <text x="282" y="70">R 1,20</text>
    </svg>
  )
}

export function DieDrawing() {
  return (
    <svg className="drawing" viewBox="0 0 360 200" aria-hidden="true">
      <circle className="draw" pathLength="1" cx="130" cy="100" r="74" />
      <circle className="draw" pathLength="1" cx="130" cy="100" r="66" />
      <ellipse className="draw draw-accent" pathLength="1" cx="130" cy="100" rx="34" ry="20" />
      <path className="centerline" d="M40 100H220M130 14V186" />
      <path className="draw" pathLength="1" d="M250 40H330V160H250Z" />
      <path className="draw" pathLength="1" d="M276 40V160M304 40V160" />
      <path className="draw draw-accent" pathLength="1" d="M250 176H330M250 168V184M330 168V184" />
      <text x="114" y="104">18 × 8</text>
      <text x="270" y="196">Ø 38,10</text>
    </svg>
  )
}

export function TabletsDrawing() {
  return (
    <svg className="drawing" viewBox="0 0 360 200" aria-hidden="true">
      <circle className="draw" pathLength="1" cx="70" cy="80" r="48" />
      <path className="draw draw-accent" pathLength="1" d="M22 80H118" />
      <ellipse className="draw" pathLength="1" cx="200" cy="80" rx="62" ry="38" />
      <rect className="draw" pathLength="1" x="40" y="146" width="280" height="40" rx="20" />
      <path className="draw draw-accent" pathLength="1" d="M180 146V186" />
      <path className="draw" pathLength="1" d="M300 52L310 74L334 76L316 92L322 116L300 104L278 116L284 92L266 76L290 74Z" />
      <text x="48" y="144">Ø 10</text>
      <text x="176" y="136">14 × 8</text>
    </svg>
  )
}

export function TrainingDrawing() {
  return (
    <svg className="drawing" viewBox="0 0 360 200" aria-hidden="true">
      <path className="draw" pathLength="1" d="M40 20V170H330" />
      <path className="centerline" d="M40 70H330M40 130H330" />
      <path className="draw draw-accent" pathLength="1" d="M50 112L90 96L130 104L170 84L210 92L250 78L290 86L320 74" />
      <circle className="draw" pathLength="1" cx="170" cy="84" r="5" />
      <circle className="draw" pathLength="1" cx="250" cy="78" r="5" />
      <text x="290" y="64">+0,02</text>
      <text x="290" y="148">−0,02</text>
    </svg>
  )
}
