import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
import { languages, paths } from './routes'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {languages.map((content) => (
          <Route
            key={content.lang}
            path={content.prefix || '/'}
            element={
              <LanguageProvider content={content}>
                <Layout />
              </LanguageProvider>
            }
          >
            <Route index element={<Home />} />
            <Route path={paths.solutions.slice(1)} element={<Solutions />} />
            <Route path={paths.company.slice(1)} element={<Company />} />
            <Route path={paths.news.slice(1)} element={<News />} />
            <Route path={`${paths.news.slice(1)}/:slug`} element={<Post />} />
            <Route path={paths.contact.slice(1)} element={<Contact />} />
            <Route path={paths.careers.slice(1)} element={<Careers />} />
            <Route path={paths.privacy.slice(1)} element={<Legal type="privacy" />} />
            <Route path={paths.terms.slice(1)} element={<Legal type="terms" />} />
            {content.prefix && <Route path="*" element={<NotFound />} />}
          </Route>
        ))}
        <Route
          path="*"
          element={
            <LanguageProvider content={languages[0]}>
              <Layout />
            </LanguageProvider>
          }
        >
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
