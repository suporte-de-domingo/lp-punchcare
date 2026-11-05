export function Symbol({ size = 48, ring = '#012D48' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 300 300" aria-hidden="true">
      <path d="M199.1 250.7A112 112 0 0 1 87.4 57.2" fill="none" stroke="#F2961B" strokeWidth="20" />
      <path d="M111.7 44.8A112 112 0 0 1 230.6 227.8" fill="none" stroke={ring} strokeWidth="20" />
      <path d="M76 132H114L146 190L242 22H284L156 234Z" fill="#ED5B20" />
    </svg>
  )
}

export function Logo({ light = false }) {
  return (
    <svg className="logo" width="228" height="44" viewBox="0 0 228 44" role="img" aria-label="Punch Care, cuidando do seu ferramental">
      <g transform="scale(0.1467)">
        <path d="M199.1 250.7A112 112 0 0 1 87.4 57.2" fill="none" stroke="#F2961B" strokeWidth="20" />
        <path d="M111.7 44.8A112 112 0 0 1 230.6 227.8" fill="none" stroke={light ? '#FFFFFF' : '#012D48'} strokeWidth="20" />
        <path d="M76 132H114L146 190L242 22H284L156 234Z" fill="#ED5B20" />
      </g>
      <text className="logo-name" x="54" y="24" fill={light ? '#FFFFFF' : '#012D48'}>
        PUNCH CARE
      </text>
      <text className="logo-tagline" x="54.5" y="35" fill="#F2961B">
        CUIDANDO DO SEU FERRAMENTAL
      </text>
    </svg>
  )
}
