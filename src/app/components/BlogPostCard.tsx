import Image from 'next/image'
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
          <Image
            src={post.coverImage}
            alt={post.title}
            layout='fill'
            objectFit='cover'
          />
        </div>
      )}
      <div className={styles.content}>{/* ... */}</div>
    </div>
  )
}

export default BlogPostCard
