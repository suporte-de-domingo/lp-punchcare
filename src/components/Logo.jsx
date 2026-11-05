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
    <span className={light ? 'logo logo-light' : 'logo'}>
      <Symbol size={44} ring={light ? '#FFFFFF' : '#012D48'} />
      <span className="logo-text">
        <span className="logo-name">PUNCH CARE</span>
        <span className="logo-tagline">CUIDANDO DO SEU FERRAMENTAL</span>
      </span>
    </span>
  )
}
