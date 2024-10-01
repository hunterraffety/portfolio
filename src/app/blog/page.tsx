// app/blog/page.tsx

// import { samplePosts } from '../data/samplePosts'
import styles from './Blog.module.scss'
import MagnifyingGlass from '../components/icons/MagnifyingGlass'
import Link from 'next/link'

export default function BlogPage() {
  // const posts = samplePosts

  return (
    /*
    <section className={styles.blog}>
      <h2>Blog</h2>
      <div className={styles.postList}>
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
    */
    <section className={styles.placeholder}>
      <div className={styles.iconContainer}>
        <MagnifyingGlass className={styles.icon} />
        {/* <FaSearch className={styles.icon} /> */}{' '}
        {/* If using React Icons */}
      </div>
      <h2 className={styles.title}>
        Blog Coming Soon ... but in the meantime!
      </h2>
      <p className={styles.subtitle}>
        I&apos;m crafting something special! (Building a Roubo workbench in my
        wood shop! I also just got back from traveling (9/24))
        <br />
        <br />
        (Legit! This is my travel and woodworking blog, not for professional
        purposes, but you can look too!~)
        <Link href='/europe'>
          <p>
            Europe (Denmark, Italy, Austria, Germany, France, Switzerland) 2024
            (yay!)
          </p>
        </Link>
        <Link href='/pets'>
          <p>Watson & Sherlock</p>
        </Link>
        <br />
        <br /> Keep an eye out for updates dear friends!
      </p>
    </section>
  )
}
