import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { useLanguage } from '../language'
import { paths } from '../routes'

export function NotFound() {
  const { t, to } = useLanguage()

  return (
    <PageHeader title={t.notFound.title}>
      <p className="page-header-lead hero-step">{t.notFound.text}</p>
      <div className="actions hero-step">
        <Link className="button" to={to(paths.home)}>
          {t.notFound.back}
        </Link>
      </div>
    </PageHeader>
  )
}
