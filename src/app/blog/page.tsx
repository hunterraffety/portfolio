import styles from './Blog.module.scss'
import MagnifyingGlass from '../components/icons/MagnifyingGlass'
import Link from 'next/link'

export default function BlogPage() {
  return (
    <section className={styles.placeholder}>
      <div className={styles.iconContainer}>
        {/* <MagnifyingGlass className={styles.icon} /> */}
      </div>
      {/* <h2 className={styles.title}>
        Learn more about my travels and experiences.
      </h2> */}
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
