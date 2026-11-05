import { Link } from 'react-router-dom'
import { Photo } from './Photo'
import { useLanguage } from '../language'
import { postPath } from '../routes'
import { images } from '../images'

export function PostCard({ post }) {
  const { t, to } = useLanguage()

  return (
    <article className="post-card">
      <Link to={to(postPath(post.slug))}>
        <Photo image={images[post.image]} alt={post.title} className="post-card-photo" />
        <div className="post-card-body">
          <p className="post-meta">
            {post.date} · {post.minutes} {t.news.read}
          </p>
          <h3>{post.title}</h3>
          <p className="muted">{post.excerpt}</p>
        </div>
      </Link>
    </article>
  )
}
