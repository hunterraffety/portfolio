import Link from 'next/link'
import styles from './BlogPostCard.module.scss'
import { Post } from '../data/samplePosts'

interface BlogPostCardProps {
  post: Post
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <div className={`${styles.card} ${styles.blogPostCard}`}>
      {post.coverImage && (
        <div className={styles.imageContainer}>
          <img src={post.coverImage} alt={post.title} />
        </div>
      )}
      <div className={styles.content}>
        <h3>
          <Link href={`/blog/${post.slug}`}>
            <span>{post.title}</span>
          </Link>
        </h3>
        <p>{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`}>
          <span className={styles.readMore}>Read More</span>
        </Link>
      </div>
    </div>
  )
}

export default BlogPostCard
