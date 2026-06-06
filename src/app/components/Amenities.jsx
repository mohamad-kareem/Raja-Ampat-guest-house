'use client'
import { useEffect, useRef } from 'react'
import styles from './Amenities.module.css'

const amenities = [
  { icon: '🌊', title: 'Beach Access',       desc: '15-min walk to pristine Waisai Torang Cinta Beach along scenic coastal paths.' },
  { icon: '🍳', title: 'Daily Breakfast',    desc: 'Buffet, continental, and traditional Full English/Irish options each morning.' },
  { icon: '📶', title: 'Free Wi-Fi',         desc: 'High-speed wireless internet throughout all rooms and common areas.' },
  { icon: '🐾', title: 'Pet Friendly',       desc: 'We welcome your furry companions — every family member deserves paradise.' },
  { icon: '🅿️', title: 'Free Parking',      desc: 'Complimentary private parking on-site for all guests.' },
  { icon: '🏡', title: 'Garden Terrace',     desc: 'Lush terrace for morning coffee, evening cocktails, and stargazing nights.' },
  { icon: '🍽️', title: 'Kitchen Facilities', desc: 'All rooms have kitchen facilities and a cosy dining area for in-room meals.' },
  { icon: '✈️', title: 'Airport Transfer',   desc: '78 km from Domine Eduard Osok Airport — transfers arranged on request.' },
]

export default function Amenities() {
  const gridRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('[data-item]').forEach((el, i) => {
            setTimeout(() => el.classList.add(styles.itemVisible), i * 80)
          })
        }
      }),
      { threshold: 0.1 }
    )
    if (gridRef.current) observer.observe(gridRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="amenities" className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.left}>
            <span className="sectionLabel" style={{ color: 'var(--gold)' }}>What We Offer</span>
            <h2 className="sectionTitle" style={{ color: 'var(--white)' }}>
              Every Comfort,<br />Effortlessly Provided
            </h2>
            <div className="divider" />
            <p className={styles.leftText}>
              At Raja Ampat Sandy Guest House, extraordinary surroundings deserve equally thoughtful hospitality. Every detail is curated for your comfort and joy.
            </p>
            <div className={styles.imgStack}>
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80" alt="Terrace" className={styles.imgBack} />
              <img src="https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=400&q=80" alt="Breakfast" className={styles.imgFront} />
            </div>
          </div>

          <div className={styles.grid} ref={gridRef}>
            {amenities.map(a => (
              <div key={a.title} className={styles.item} data-item>
                <div className={styles.icon}>{a.icon}</div>
                <div>
                  <p className={styles.itemTitle}>{a.title}</p>
                  <p className={styles.itemDesc}>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
