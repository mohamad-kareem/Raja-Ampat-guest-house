"use client";
import { useState, useEffect } from "react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Sarah & James Mitchell",
    country: "🇬🇧 United Kingdom",
    rating: 5,
    text: "Absolutely breathtaking. We snorkelled from our doorstep, had breakfast on the terrace each morning, and the staff treated us like family. We've stayed at five-star resorts that couldn't match the warmth here.",
    stayed: "Coral Suite · June 2024",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80",
  },
  {
    name: "Hiroshi Tanaka",
    country: "🇯🇵 Japan",
    rating: 5,
    text: "As a marine biologist, Raja Ampat is a dream destination. The guest house arranged all our diving trips efficiently, the rooms are spotlessly clean, and the breakfast is generous and delicious. Will return every year.",
    stayed: "Ocean Breeze Room · March 2024",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=80&q=80",
  },
  {
    name: "Elena & Marco Rossi",
    country: "🇮🇹 Italy",
    rating: 5,
    text: "We came for our honeymoon and couldn't have chosen better. The Garden Villa gave us complete privacy, the sunset views were magical, and the island hopping tour was the highlight of our entire trip.",
    stayed: "Garden Villa · January 2024",
    avatar:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=80&q=80",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setActive((a) => (a + 1) % testimonials.length),
      6000,
    );
    return () => clearInterval(t);
  }, []);

  const t = testimonials[active];

  return (
    <section className={styles.section}>
      <div className={styles.bgLeft} />
      <div className={styles.bgRight} />
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <span className="sectionLabel" style={{ color: "var(--gold)" }}>
              Guest Stories
            </span>
            <h2 className="sectionTitle" style={{ color: "var(--white)" }}>
              Voices from
              <br />
              Our Guests
            </h2>
            <div className="divider" />
            <div className={styles.ratingSummary}>
              <span className={styles.bigRating}>4.9</span>
              <div>
                <div className={styles.stars}>★★★★★</div>
                <p className={styles.starsMeta}>Based on 200+ reviews</p>
              </div>
            </div>
            <div className={styles.badges}>
              {["Booking.com", "TripAdvisor", "Google"].map((p) => (
                <span key={p} className={styles.badge}>
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className={styles.card} key={active}>
              <div className={styles.quote}></div>
              <p className={styles.text}>{t.text}</p>
              <div className={styles.footer}>
                <img src={t.avatar} alt={t.name} className={styles.avatar} />
                <div>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.meta}>
                    {t.country} · {t.stayed}
                  </p>
                </div>
                <div className={styles.tStars}>{"★".repeat(t.rating)}</div>
              </div>
            </div>
            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
