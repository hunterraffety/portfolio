import Link from 'next/link'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href='/'>
          <span className={styles.logo}>Hunter Raffety</span>
        </Link>
        <div className={styles.links}>
          <Link href='/about'>
            <span>About</span>
          </Link>
          <Link href='/projects'>
            <span>Projects</span>
          </Link>
          <Link href='/blog'>
            <span>Blog</span>
          </Link>
          <Link href='/contact'>
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
