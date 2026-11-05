import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../language'
import { basePath, languages, localize, paths } from '../routes'

function pathFor(content, pathname) {
  const base = basePath(pathname)
  const slug = base.startsWith(`${paths.news}/`) && base.slice(paths.news.length + 1)
  const translated = !slug || content.posts.some((post) => post.slug === slug)
  return localize(content, translated ? base : paths.news)
}

export function LanguageToggle() {
  const { t } = useLanguage()
  const { pathname } = useLocation()

  return (
    <div className="language-toggle" role="group" aria-label={t.languageLabel}>
      <svg className="language-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" />
      </svg>
      {languages.map((content) => {
        const active = content === t
        return (
          <Link
            key={content.lang}
            to={pathFor(content, pathname)}
            hrefLang={content.lang}
            lang={content.lang}
            className={active ? 'language-option language-option-active' : 'language-option'}
            aria-current={active ? 'true' : undefined}
            title={content.languageName}
          >
            {content.code}
          </Link>
        )
      })}
    </div>
  )
}
