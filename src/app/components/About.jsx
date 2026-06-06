'use client'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <div className={styles.aboutLayout}>
          <div className={styles.imgs}>
            <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=700&q=80" alt="Raja Ampat aerial" className={styles.imgMain} />
            <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=80" alt="Coral reef" className={styles.imgSecondary} />
            <div className={styles.aboutBadge}>
              <span className={styles.badgeNum}>15+</span>
              <span className={styles.badgeText}>Years of<br/>Hospitality</span>
            </div>
          </div>

          <div>
            <span className="sectionLabel">Our Story</span>
            <h2 className="sectionTitle">Born from a Love<br />for Raja Ampat</h2>
            <div className="divider" />
            <p className={styles.aboutText}>
              Nestled in the island village of Saonek, Raja Ampat Sandy Guest House was built with a singular vision: to share this extraordinary paradise with travellers who seek authentic experiences over ordinary tourism.
            </p>
            <p className={styles.aboutText}>
              Our family-run guest house combines warm Indonesian hospitality with genuine local knowledge. Every staff member is from the local community — ensuring your stay benefits both you and the ecosystems of Raja Ampat.
            </p>

            <div className={styles.locationGrid}>
              {[
                { icon: '📍', label: 'Location',        val: 'Saonek, West Papua, Indonesia' },
                { icon: '✈️', label: 'Nearest Airport', val: 'Domine Eduard Osok (SOQ) · 78 km' },
                { icon: '🏖️', label: 'Beach Distance',  val: '15-minute walk to Waisai Beach' },
                { icon: '🌊', label: 'Dive Sites',      val: '50+ world-class dive sites nearby' },
              ].map(i => (
                <div key={i.label} className={styles.locItem}>
                  <span className={styles.locIcon}>{i.icon}</span>
                  <div>
                    <p className={styles.locLabel}>{i.label}</p>
                    <p className={styles.locVal}>{i.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#booking" className="btnPrimary">Plan Your Visit →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
