function Hatch({ id }) {
  return (
    <defs>
      <pattern id={id} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <path d="M0 0V6" />
      </pattern>
    </defs>
  )
}

export function PunchDrawing() {
  return (
    <svg className="drawing" viewBox="0 0 360 200" aria-hidden="true">
      <path
        className="draw"
        pathLength="1"
        d="M30 74L36 58H48L58 72H72L80 65H236L246 73H290L294 75H324V97H294L290 99H246L236 107H80L72 100H58L48 114H36L30 98Z"
      />
      <path className="draw" pathLength="1" d="M48 58V114M58 72V100M72 72V100M80 65V107M236 65V107M246 73V99M294 75V97" />
      <rect className="draw" pathLength="1" x="150" y="65" width="34" height="7" rx="3.5" />
      <path className="centerline" d="M16 86H344" />
      <path className="draw draw-accent" pathLength="1" d="M324 75Q316 86 324 97" />
      <path className="draw draw-accent" pathLength="1" d="M332 68A24 24 0 0 1 332 104" />
      <path className="draw draw-accent" pathLength="1" d="M30 146H324M30 138V154M324 138V154" />
      <path className="draw draw-accent" pathLength="1" d="M14 58V114M8 58H20M8 114H20" />
      <path className="draw draw-accent" pathLength="1" d="M206 65V107" />
      <text x="177" y="168" textAnchor="middle">133,60 mm</text>
      <text x="6" y="48">Ø 25,40</text>
      <text x="206" y="56" textAnchor="middle">Ø 19,00</text>
      <text x="312" y="126">Ra 0,1</text>
    </svg>
  )
}

export function DieDrawing() {
  return (
    <svg className="drawing" viewBox="0 0 360 200" aria-hidden="true">
      <Hatch id="die-hatch" />
      <circle className="draw" pathLength="1" cx="78" cy="92" r="56" />
      <circle className="draw" pathLength="1" cx="78" cy="92" r="51" />
      <rect className="draw draw-accent" pathLength="1" x="44.5" y="77" width="67" height="30" rx="15" />
      <path className="centerline" d="M10 92H146M78 22V162" />
      <path className="hatch" fill="url(#die-hatch)" d="M186 51H204.5L208.5 57V133H186V80H191V70H186ZM298 51H279.5L275.5 57V133H298V80H293V70H298Z" />
      <path className="draw" pathLength="1" d="M186 51H204.5L208.5 57V133H186V80H191V70H186Z" />
      <path className="draw" pathLength="1" d="M298 51H279.5L275.5 57V133H298V80H293V70H298Z" />
      <path className="centerline" d="M242 41V143" />
      <path className="draw draw-accent" pathLength="1" d="M22 172H134M22 164V180M134 164V180" />
      <path className="draw draw-accent" pathLength="1" d="M312 51V133M306 51H318M306 133H318" />
      <text className="halo" x="78" y="128" textAnchor="middle">18 × 8</text>
      <text x="78" y="194" textAnchor="middle">Ø 30,16</text>
      <text x="320" y="96">22,22</text>
    </svg>
  )
}

export function ToolingSetDrawing() {
  return (
    <svg className="drawing" viewBox="0 0 360 200" aria-hidden="true">
      <Hatch id="set-hatch" />
      <path className="hatch" fill="url(#set-hatch)" d="M126 60H162V140H126ZM198 60H234V140H198Z" />
      <path className="draw" pathLength="1" d="M126 60H162V140H126ZM198 60H234V140H198Z" />
      <path className="draw" pathLength="1" d="M146 12Q154.5 7 163 12T180 12T197 12T214 12V36L198 48V95Q180 85 162 95V48L146 36Z" />
      <path className="draw" pathLength="1" d="M162 105Q180 115 198 105V152L214 164V188Q205.5 193 197 188T180 188T163 188T146 188V164L162 152Z" />
      <path className="draw draw-accent" pathLength="1" d="M162 97Q180 86.4 198 97V103Q180 113.6 162 103Z" />
      <path className="centerline" d="M180 0V200" />
      <path className="draw draw-accent" pathLength="1" d="M242 91.7H266M242 108.3H266M260 91.7V108.3" />
      <text x="270" y="104">4,60</text>
      <text x="224" y="28">EU-B</text>
      <text x="224" y="182">EU-B</text>
    </svg>
  )
}

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
