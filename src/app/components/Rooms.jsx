"use client";
import { useEffect, useRef } from "react";
import styles from "./Rooms.module.css";

const rooms = [
  {
    name: "Option One",
    type: "Standard",
    price: 39,
    img: "/img2.jpeg",
    features: [
      "3 m × 3 m",
      "Private Toilet",
      "Private Shower",
      "Cozy & Compact",
    ],
    desc: "A snug and well-appointed room measuring 3 × 3 m, featuring its own private toilet and shower — everything you need for a comfortable stay.",
    size: "9 m²",
    guests: 2,
  },
  {
    name: "Room Two",
    type: "Standard",
    price: 39,
    img: "/img1.jpeg",
    features: ["4 m × 3 m", "Private Toilet", "Private Shower", "Extra Space"],
    desc: "With a little more room to breathe at 4 × 3 m, this space offers a relaxed layout alongside its own private toilet and shower.",
    size: "12 m²",
    guests: 2,
    badge: "Best Value",
  },
  {
    name: "Room Three",
    type: "Standard",
    price: 39,
    img: "/img3.jpeg",
    features: [
      "3 m × 5 m",
      "Private Toilet",
      "Private Shower",
      "Spacious Layout",
    ],
    desc: "The largest of our standard rooms at 3 × 5 m, giving you generous space to stretch out, all with a private en-suite toilet and shower.",
    size: "15 m²",
    guests: 3,
  },
];

export default function Rooms() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add(styles.cardVisible);
        }),
      { threshold: 0.12 },
    );
    cardRefs.current.forEach((r) => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="rooms" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="sectionLabel">Accommodations</span>
          <h2 className="sectionTitle">Your Island Sanctuary</h2>
          <div className="dividerCenter" />
          <p className={styles.headerDesc}>
            Each room embraces Raja Ampat's natural beauty — local
            craftsmanship, modern comfort, and uninterrupted ocean views.
          </p>
        </div>

        <div className={styles.grid}>
          {rooms.map((room, i) => (
            <div
              key={room.name}
              className={styles.card}
              ref={(el) => (cardRefs.current[i] = el)}
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
                  {room.features.map((f) => (
                    <span key={f} className={styles.tag}>
                      {f}
                    </span>
                  ))}
                </div>
                <div className={styles.footer}>
                  <div className={styles.price}>
                    <span className={styles.priceFrom}>from</span>
                    <span className={styles.priceNum}>${room.price}</span>
                    <span className={styles.pricePer}>/night</span>
                  </div>
                  <a href="#booking" className="btnPrimary">
                    Book →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
