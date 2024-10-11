import styles from './Blog.module.scss'
import Link from 'next/link'

export default function BlogPage() {
  return (
    <section className={styles.placeholder}>
      <div className={styles.iconContainer}></div>
      <p className={styles.subtitle}>
        <Link href='/europe'>
          <p>Europe 2024</p>
        </Link>
        <Link href='/pets'>
          <p>Watson & Sherlock</p>
        </Link>
      </p>
    </section>
  )
}
