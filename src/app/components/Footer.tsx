import Link from 'next/link'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} Hunter Raffety. All rights reserved.
      </p>
      {/* Social Links */}
      <ul className={styles.socialLinks}>
        <li>
          <Link
            href='https://www.linkedin.com/in/huntersraffety/'
            target='_blank'
          >
            LinkedIn
          </Link>
        </li>
        <li>
          <Link href='https://github.com/hunterraffety' target='_blank'>
            GitHub
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
