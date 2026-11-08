import logo from '../assets/brand/logo.svg'
import logoLight from '../assets/brand/logo-light.svg'
import symbolLight from '../assets/brand/symbol-light.svg'

export function Logo({ light = false }) {
  return <img className="logo" src={light ? logoLight : logo} alt="Punch Care" width="227" height="44" />
}

export function Symbol({ size = 48 }) {
  return <img src={symbolLight} alt="" width={size} height={Math.round(size * 0.91)} />
}
