import { useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { useLanguage } from '../language'
import { basePath, pageList } from '../routes'

export function Layout() {
  const { t } = useLanguage()
  const { pathname } = useLocation()
  const previous = useRef({ base: basePath(pathname), lang: t.lang })
  const [fade, setFade] = useState('')

  useEffect(() => {
    const base = basePath(pathname)
    const languageChanged = previous.current.lang !== t.lang
    if (previous.current.base !== base) window.scrollTo(0, 0)
    if (languageChanged) setFade((current) => (current === 'fade-a' ? 'fade-b' : 'fade-a'))
    previous.current = { base, lang: t.lang }

    const page = pageList(t).find((item) => item.url === pathname)
    if (page) document.title = page.title
    document.documentElement.lang = t.lang
  }, [pathname, t])

  return (
    <>
      <Header />
      <main className={fade}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
