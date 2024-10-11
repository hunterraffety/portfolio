'use client'

import { useState, useEffect } from 'react'
import styles from './DarkModeToggle.module.scss'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  useEffect(() => {
    const root = window.document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label='Toggle Dark Mode'
      className={styles.toggleButton}
    >
      {darkMode ? '🌙' : '☀️'}
    </button>
  )
}

export default DarkModeToggle
