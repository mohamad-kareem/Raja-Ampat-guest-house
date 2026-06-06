'use client'
import { useEffect, useRef } from 'react'
import styles from './Rooms.module.css'

const rooms = [
  {
    name: 'Ocean Breeze Room',
    type: 'Standard',
    price: 85,
    img: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80',
    features: ['Sea View', 'King Bed', 'Private Bathroom', 'Cable TV'],
    desc: 'Wake to the sound of waves. Natural rattan furnishings, breezy island charm, and a private bathroom stocked with complimentary toiletries.',
    size: '28 m²', guests: 2,
  },
  {
    name: 'Coral Suite',
    type: 'Deluxe',
    price: 145,
    img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
    features: ['Panoramic View', 'King Bed', 'Kitchenette', 'Private Terrace'],
    desc: 'Floor-to-ceiling views of the coral-laced seascape, a private terrace for sunset cocktails, and a fully appointed kitchenette.',
    size: '48 m²', guests: 3, badge: 'Most Popular',
  },
  {
    name: 'Garden Villa',
    type: 'Premium',
    price: 195,
    img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
    features: ['Private Garden', 'Two Bedrooms', 'Full Kitchen', 'Dining Area'],
    desc: 'Nestled among tropical palms, the Garden Villa delivers ultimate privacy with lush surroundings — ideal for families or honeymooners.',
    size: '72 m²', guests: 4,
  },
]

export default function Rooms() {
  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add(styles.cardVisible) }),
      { threshold: 0.12 }
    )
    cardRefs.current.forEach(r => r && observer.observe(r))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="rooms" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="sectionLabel">Accommodations</span>
          <h2 className="sectionTitle">Your Island Sanctuary</h2>
          <div className="dividerCenter" />
          <p className={styles.headerDesc}>
            Each room embraces Raja Ampat's natural beauty — local craftsmanship, modern comfort, and uninterrupted ocean views.
          </p>
        </div>

        <div className={styles.grid}>
          {rooms.map((room, i) => (
            <div
              key={room.name}
              className={styles.card}
              ref={el => cardRefs.current[i] = el}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {room.badge && <div className={styles.badge}>{room.badge}</div>}
              <div className={styles.imgWrap}>
                <img src={room.img} alt={room.name} className={styles.img} />
                <div className={styles.imgOverlay} />
                <span className={styles.roomType}>{room.type}</span>
              </div>
              <div className={styles.body}>
                <div className={styles.meta}>
                  <span>👥 {room.guests} Guests</span>
                  <span>📐 {room.size}</span>
                </div>
                <h3 className={styles.name}>{room.name}</h3>
                <p className={styles.desc}>{room.desc}</p>
                <div className={styles.features}>
                  {room.features.map(f => <span key={f} className={styles.tag}>{f}</span>)}
                </div>
                <div className={styles.footer}>
                  <div className={styles.price}>
                    <span className={styles.priceFrom}>from</span>
                    <span className={styles.priceNum}>${room.price}</span>
                    <span className={styles.pricePer}>/night</span>
                  </div>
                  <a href="#booking" className="btnPrimary">Book →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
