import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Pillars } from './components/Pillars'
import { Tooling } from './components/Tooling'
import { Services } from './components/Services'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pillars />
        <Tooling />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
