'use client'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const navItems = ['Rooms', 'Amenities', 'Experiences', 'Gallery', 'About', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoMain}>Raja Ampat</span>
          <span className={styles.logoSub}>Sandy Guest House</span>
        </a>

        <ul className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
          {navItems.map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}</a>
            </li>
          ))}
          <li className={styles.navCta}>
            <a href="#booking" className="btnPrimary" onClick={() => setOpen(false)}>
              Book Now
            </a>
          </li>
        </ul>

        <button
          className={`${styles.hamburger} ${open ? styles.hamburgerActive : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
