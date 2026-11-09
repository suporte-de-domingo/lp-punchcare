import { PageHeader } from '../components/PageHeader'
import { Carousel } from '../components/Carousel'
import { Reveal } from '../components/Reveal'
import { DieDrawing, PunchDrawing, ToolingSetDrawing, TrainingDrawing } from '../components/Drawings'
import { useLanguage } from '../language'
import { images } from '../images'

const drawings = [PunchDrawing, DieDrawing, TrainingDrawing, ToolingSetDrawing]

export function Solutions() {
  const { t } = useLanguage()
  const page = t.solutions

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} />

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <h2>{page.servicesTitle}</h2>
            <p className="lead">{page.servicesText}</p>
          </Reveal>
          <div className="card-grid card-grid-2">
            {page.services.map((service, index) => {
              const Drawing = drawings[index]
              return (
                <Reveal as="article" key={service.title} className="work-card" delay={(index % 2) * 120}>
                  <Drawing />
                  <h3>{service.title}</h3>
                  <p className="muted">{service.text}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <Reveal className="section-head">
            <h2>{page.applicationsTitle}</h2>
            <p className="lead">{page.applicationsText}</p>
          </Reveal>
          <ol className="steps-grid">
            {page.applications.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 120}>
                <span className="number number-light">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
        <Reveal className="carousel-reveal">
          <Carousel
            images={images.gallery}
            label={page.galleryLabel}
            pauseLabel={page.galleryPause}
            playLabel={page.galleryPlay}
          />
        </Reveal>
      </section>
    </>
  )
}
