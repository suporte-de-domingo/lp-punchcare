import { Link } from 'react-router-dom'
import { Photo } from './Photo'
import { useLanguage } from '../language'
import { postPath } from '../routes'
import { images } from '../images'

export function PostCard({ post, headingLevel = 3 }) {
  const Heading = `h${headingLevel}`
  const { t, to } = useLanguage()

  return (
    <article className="post-card">
      <Link to={to(postPath(post.slug))}>
        <Photo
          image={images[post.image]}
          alt={post.title}
          className="post-card-photo"
          sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 400px"
        />
        <div className="post-card-body">
          <p className="post-meta">
            {post.date} · {post.minutes} {t.news.read}
          </p>
          <Heading className="post-card-title">{post.title}</Heading>
          <p className="muted">{post.excerpt}</p>
        </div>
      </Link>
    </article>
  )
}
