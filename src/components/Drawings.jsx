export function TrainingDrawing() {
  const tops = [98, 104, 94, 100, 108, 96, 62, 102, 92, 106, 98, 100]
  const stems = tops.map((top, index) => `M${60 + index * 20} 170V${top + 4}`).join('')

  return (
    <svg className="drawing" viewBox="0 0 360 200" aria-hidden="true">
      <path className="draw" pathLength="1" d="M40 20V170H330" />
      <path className="centerline" d="M40 70H330M40 130H330" />
      <path className="draw" pathLength="1" d={stems} />
      {tops.map((top, index) => (
        <circle
          key={index}
          className={index === 6 ? 'draw draw-accent' : 'draw'}
          pathLength="1"
          cx={60 + index * 20}
          cy={top}
          r="4"
        />
      ))}
      <text x="298" y="64">+0,02</text>
      <text x="298" y="146">−0,02</text>
      <text x="40" y="190">1</text>
      <text x="274" y="190">12</text>
    </svg>
  )
}
