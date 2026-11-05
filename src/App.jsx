import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Solutions } from './pages/Solutions'
import { Company } from './pages/Company'
import { News } from './pages/News'
import { Post } from './pages/Post'
import { Contact } from './pages/Contact'
import { Careers } from './pages/Careers'
import { Legal } from './pages/Legal'
import { NotFound } from './pages/NotFound'
import { LanguageProvider } from './language'
import { languageFor, paths } from './routes'

const pages = [
  { path: paths.home, element: <Home /> },
  { path: paths.solutions, element: <Solutions /> },
  { path: paths.company, element: <Company /> },
  { path: paths.news, element: <News /> },
  { path: `${paths.news}/:slug`, element: <Post /> },
  { path: paths.contact, element: <Contact /> },
  { path: paths.careers, element: <Careers /> },
  { path: paths.privacy, element: <Legal type="privacy" /> },
  { path: paths.terms, element: <Legal type="terms" /> },
]

function Root() {
  const { pathname } = useLocation()

  return (
    <LanguageProvider content={languageFor(pathname)}>
      <Layout />
    </LanguageProvider>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Root />}>
          {['', '/en'].flatMap((prefix) =>
            pages.map((page) => (
              <Route key={prefix + page.path} path={page.path === '/' ? prefix || '/' : prefix + page.path} element={page.element} />
            )),
          )}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
