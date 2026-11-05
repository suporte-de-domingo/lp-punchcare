import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Pillars } from './components/Pillars'
import { Services } from './components/Services'
import { About } from './components/About'
import { PunchControl } from './components/PunchControl'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pillars />
        <Services />
        <About />
        <PunchControl />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
