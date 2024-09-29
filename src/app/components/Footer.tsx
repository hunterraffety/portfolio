// components/Footer.tsx
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} Hunter Raffety. All rights reserved.
      </p>
      {/* Social Links */}
    </footer>
  )
}

export default Footer
