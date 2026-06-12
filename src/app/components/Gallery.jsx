"use client";
import { useState } from "react";
import styles from "./Gallery.module.css";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    alt: "Raja Ampat Islands",
    cls: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    alt: "Underwater Coral",
  },
  {
    src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
    alt: "Room Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    alt: "Garden Terrace",
    cls: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80",
    alt: "Kayaking at Sunrise",
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    alt: "Sea View Suite",
    cls: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&q=80",
    alt: "Local Village",
  },
  {
    src: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=800&q=80",
    alt: "Breakfast Spread",
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="sectionLabel" style={{ color: "var(--gold)" }}>
            Visual Journey
          </span>
          <h2 className="sectionTitle" style={{ color: "var(--white)" }}>
            A Glimpse of Paradise
          </h2>
          <div className="dividerCenter" />
        </div>

        <div className={styles.grid}>
          {photos.map((p, i) => (
            <div
              key={i}
              className={`${styles.item} ${p.cls ? styles[p.cls] : ""}`}
              onClick={() => setLightbox(p.src)}
            >
              <img src={p.src} alt={p.alt} className={styles.img} />
              <div className={styles.hover}>
                <span className={styles.zoom}>+</span>
                <p className={styles.caption}>{p.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <button className={styles.lightboxClose}>✕</button>
          <img
            src={lightbox}
            alt="Enlarged view"
            className={styles.lightboxImg}
          />
        </div>
      )}
    </section>
  );
}
