import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { WhatsAppButton } from './WhatsAppButton'
import { useLanguage } from '../language'
import { pageList } from '../routes'

export function Layout() {
  const { t } = useLanguage()
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    const page = pageList(t).find((item) => item.url === pathname)
    if (page) document.title = page.title
    document.documentElement.lang = t.lang
  }, [pathname, t])

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
