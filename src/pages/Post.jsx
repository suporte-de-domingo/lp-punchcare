import { Link, useParams } from 'react-router-dom'
import { Photo } from '../components/Photo'
import { PostCard } from '../components/PostCard'
import { Reveal } from '../components/Reveal'
import { NotFound } from './NotFound'
import { useLanguage } from '../language'
import { images } from '../images'
import { paths } from '../routes'
import { company } from '../content/company'

export function Post() {
  const { slug } = useParams()
  const { t, to } = useLanguage()
  const post = t.posts.find((item) => item.slug === slug)

  if (!post) return <NotFound />

  const recent = t.posts.filter((item) => item.slug !== slug).slice(0, 3)

  return (
    <>
      <article className="article">
        <div className="container article-body">
          <Link className="back hero-step" to={to(paths.news)}>
            ← {t.news.back}
          </Link>
          <h1 className="hero-step">{post.title}</h1>
          <p className="post-meta hero-step">
            {post.author} · {post.date} · {post.minutes} {t.news.read}
            {post.updated && ` · ${t.news.updated} ${post.updated}`}
          </p>
          <Photo image={images[post.image]} alt={post.title} className="article-photo hero-step" eager />
          {post.body.map((block, index) =>
            Array.isArray(block) ? (
              <ul key={index} className="article-list">
                {block.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p key={index}>{block}</p>
            ),
          )}
          {post.adamus && (
            <a className="adamus adamus-inline" href={company.adamus} target="_blank" rel="noreferrer">
              <span className="adamus-name">ADAMUS</span>
            </a>
          )}
        </div>
      </article>

      <section className="section section-ice">
        <div className="container">
          <Reveal className="section-head section-head-row">
            <h2>{t.news.recent}</h2>
            <Link className="button button-small" to={to(paths.news)}>
              {t.news.seeAll}
            </Link>
          </Reveal>
          <div className="card-grid card-grid-3">
            {recent.map((item, index) => (
              <Reveal key={item.slug} delay={index * 120}>
                <PostCard post={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
