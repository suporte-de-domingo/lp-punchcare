import { Link } from 'react-router-dom'
import { Photo } from '../components/Photo'
import { Reveal } from '../components/Reveal'
import { PostCard } from '../components/PostCard'
import { Adamus } from '../components/Adamus'
import { CardArt } from '../components/CardArt'
import { useLanguage } from '../language'
import { images } from '../images'
import { paths } from '../routes'

const art = ['polishing', 'sizing', 'representation']

export function Home() {
  const { t, to } = useLanguage()
  const home = t.home

  return (
    <>
      <section className="hero">
        <Photo image={images.hero} alt={home.title} className="hero-photo" eager />
        <div className="container hero-content">
          <span className="bar hero-step" />
          <h1 className="hero-step">{home.title}</h1>
          {home.intro.map((text) => (
            <p key={text} className="hero-step">
              {text}
            </p>
          ))}
          <div className="actions hero-step">
            <Link className="button" to={to(paths.solutions)}>
              {home.primary}
            </Link>
            <Link className="button button-ghost" to={to(paths.company)}>
              {home.secondary}
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container statement">
          <Reveal as="h2" className="statement-text">
            {home.statement}
          </Reveal>
          <Reveal className="statement-photos" delay={150}>
            <Photo image={images.pills} alt="" className="statement-photo" sizes="(max-width: 860px) 50vw, 340px" />
            <Photo image={images.punchesDetail} alt="" className="statement-photo" sizes="(max-width: 860px) 50vw, 340px" />
          </Reveal>
        </div>
      </section>

      <section className="section section-ice">
        <div className="container">
          <Reveal className="section-head">
            <h2>{home.workTitle}</h2>
            <p className="lead">{home.workText}</p>
          </Reveal>
          <div className="card-grid card-grid-3">
            {home.work.map((item, index) => {
              return (
                <Reveal as="article" key={item.title} className="work-card" delay={index * 120}>
                  <CardArt name={art[index]} lang={t.lang} />
                  <span className="number">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p className="muted">{item.text}</p>
                </Reveal>
              )
            })}
          </div>
          <Reveal className="section-action">
            <Link className="button button-outline" to={to(paths.solutions)}>
              {home.workMore}
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head section-head-row">
            <h2>{home.newsTitle}</h2>
            <Link className="button button-small" to={to(paths.news)}>
              {home.newsMore}
            </Link>
          </Reveal>
          <div className="card-grid card-grid-3">
            {t.posts.slice(0, 3).map((post, index) => (
              <Reveal key={post.slug} delay={index * 120}>
                <PostCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Adamus title={home.adamusTitle} text={home.adamusText} note={home.adamusNote} />
    </>
  )
}
