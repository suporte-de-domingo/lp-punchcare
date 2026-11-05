import { Symbol } from './Logo'

export function PageHeader({ eyebrow, title, children }) {
  return (
    <section className="page-header">
      <div className="container page-header-row">
        <div>
          {eyebrow && <p className="eyebrow eyebrow-light hero-step">{eyebrow}</p>}
          <h1 className="hero-step">{title}</h1>
          {children}
        </div>
        <div className="page-header-mark" aria-hidden="true">
          <Symbol size={220} ring="#FFFFFF" />
        </div>
      </div>
    </section>
  )
}
