'use client'
import styles from './Experiences.module.css'

const experiences = [
  { title: 'Scuba Diving & Snorkeling', sub: 'The Coral Triangle', img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&q=80', desc: "Dive into the world's richest marine biodiversity — over 1,000 fish species and 600 coral species.", duration: 'Half / Full day', from: '$45' },
  { title: 'Island Hopping Tour',       sub: 'Hidden Lagoons',     img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=700&q=80', desc: 'Navigate emerald islands, hidden lagoons, and pristine white-sand beaches by traditional wooden boat.', duration: 'Full day',         from: '$65' },
  { title: 'Sunrise Kayaking',          sub: 'Golden Hour',        img: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=700&q=80', desc: 'Paddle through still waters as the sun paints the sky in amber, rose, and gold over the islands.', duration: '2 – 3 hours',      from: '$25' },
  { title: 'Village Cultural Tour',     sub: 'Papuan Heritage',    img: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=700&q=80', desc: 'Visit Saonek village, witness traditional crafts, and taste authentic Papuan cuisine with locals.', duration: 'Half day',         from: '$30' },
]

export default function Experiences() {
  return (
    <section id="experiences" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="sectionLabel">Curated Experiences</span>
          <h2 className="sectionTitle">Adventures Await</h2>
          <div className="dividerCenter" />
          <p className={styles.headerDesc}>Go beyond the guest house and discover Raja Ampat's extraordinary natural and cultural tapestry.</p>
        </div>

        <div className={styles.grid}>
          {experiences.map(exp => (
            <div key={exp.title} className={styles.card}>
              <div className={styles.imgWrap}>
                <img src={exp.img} alt={exp.title} className={styles.img} />
                <div className={styles.overlay} />
                <div className={styles.metaOverlay}>
                  <span className={styles.duration}>⏱ {exp.duration}</span>
                  <span className={styles.expPrice}>From {exp.from}</span>
                </div>
              </div>
              <div className={styles.body}>
                <p className={styles.sub}>{exp.sub}</p>
                <h3 className={styles.expTitle}>{exp.title}</h3>
                <p className={styles.expDesc}>{exp.desc}</p>
                <a href="#contact" className={styles.enquire}>Enquire now →</a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>Looking for something special? We'll craft a bespoke experience just for you.</p>
          <a href="#contact" className="btnPrimary">Contact Our Team →</a>
        </div>
      </div>
    </section>
  )
}
