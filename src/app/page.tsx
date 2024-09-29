// app/page.tsx
import styles from './components/Home.module.scss'
import Link from 'next/link'

const HomePage = () => {
  /**
   * Returns a cheeky British greeting based on the user's current time of day.
   *
   * Time Segments:
   * - Morning: 5 AM to 12 PM
   * - Afternoon: 12 PM to 5 PM
   * - Evening: 5 PM to 9 PM
   * - Night: 9 PM to 5 AM
   *
   * @returns {string} A cheeky British greeting appropriate for the time of day.
   */
  function getBritishGreeting(): string {
    const now = new Date()
    const hour = now.getHours()

    if (hour >= 5 && hour < 12) {
      // Morning
      return 'Top of the morning to you!'
    } else if (hour >= 12 && hour < 17) {
      // Afternoon
      return "Good afternoon, sunshine! How's tricks?"
    } else if (hour >= 17 && hour < 21) {
      // Evening
      return 'Evening, old chap! Fancy a cuppa?'
    } else {
      // Night
      return "Night, mate! Don't let the bedbugs bite."
    }
  }

  // Example usage:
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.gothicTitle}>Oh! Hello there, I&apos;m Hunter</h1>
        <p>
          I&apos;m a software engineer in the New York City area and I fancy
          transforming ideas into pretty organized pixels and solving complex
          problems with others through <span>creativity</span> and{' '}
          <span>code</span>
        </p>
        <Link href='/about'>
          <span className={styles.ctaButton}>learn more!</span>
        </Link>
      </div>
    </section>
  )
}

export default HomePage
