import styles from './components/Home.module.scss'
import Link from 'next/link'

const HomePage = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.gothicTitle}>Oh! Hello there, I&apos;m Hunter</h1>
        <p>
          I&apos;m a software engineer in the New York City area and I fancy
          transforming ideas into delightful little pixels and solving complex
          problems with <span>others</span> through <span>creativity</span> and{' '}
          <span>code</span>
        </p>
        <Link href='/about'>
          <span className={styles.ctaButton}>learn more</span>
        </Link>
      </div>
    </section>
  )
}

export default HomePage
