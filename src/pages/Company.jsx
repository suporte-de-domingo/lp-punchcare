import { useEffect, useRef, useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { Photo } from '../components/Photo'
import { Reveal } from '../components/Reveal'
import { useLanguage } from '../language'
import { images } from '../images'

function CountUp({ value }) {
  const ref = useRef(null)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const element = ref.current
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      if (reduced) return setCurrent(value)
      const start = performance.now()
      const step = (now) => {
        const progress = Math.min((now - start) / 1400, 1)
        setCurrent(Math.round(value * (1 - Math.pow(1 - progress, 3))))
        if (progress < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    })
    observer.observe(element)
    return () => observer.disconnect()
  }, [value])

  return <span ref={ref}>+{current}</span>
}

export function Company() {
  const { t } = useLanguage()
  const page = t.company

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} />

      <section className="section">
        <div className="container split">
          <Reveal>
            <h2>{page.philosophyTitle}</h2>
            <p className="lead strong">{page.philosophyLead}</p>
            {page.philosophy.map((text) => (
              <p key={text} className="text">
                {text}
              </p>
            ))}
          </Reveal>
          <Reveal delay={150}>
            <Photo image={images.tabletsYellow} alt="" className="split-photo" />
          </Reveal>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container split split-reverse">
          <Reveal>
            <h2>{page.historyTitle}</h2>
            <p className="lead strong">{page.historyLead}</p>
            {page.history.map((text) => (
              <p key={text} className="text">
                {text}
              </p>
            ))}
          </Reveal>
          <Reveal delay={150}>
            <Photo image={images.conveyorLine} alt="" className="split-photo" />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <h2>{page.numbersTitle}</h2>
            <p className="lead">{page.numbersText}</p>
          </Reveal>
          <ul className="numbers">
            {page.numbers.map((item, index) => (
              <Reveal as="li" key={item.label} delay={index * 120}>
                <strong>
                  <CountUp value={item.value} />
                </strong>
                <span>{item.label}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
