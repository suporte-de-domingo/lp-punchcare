import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { PostCard } from '../components/PostCard'
import { Reveal } from '../components/Reveal'
import { useLanguage } from '../language'

const normalize = (text) => text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

export function News() {
  const { t } = useLanguage()
  const [query, setQuery] = useState('')

  const posts = t.posts.filter((post) => normalize(`${post.title} ${post.excerpt}`).includes(normalize(query)))

  return (
    <>
      <PageHeader eyebrow={t.news.eyebrow} title={t.news.title}>
        <input
          className="search hero-step"
          type="search"
          placeholder={t.news.search}
          aria-label={t.news.search}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </PageHeader>

      <section className="section">
        <div className="container">
          {posts.length === 0 && <p className="muted">{t.news.empty}</p>}
          <div className="card-grid card-grid-3">
            {posts.map((post, index) => (
              <Reveal key={post.slug} delay={(index % 3) * 120}>
                <PostCard post={post} headingLevel={2} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
