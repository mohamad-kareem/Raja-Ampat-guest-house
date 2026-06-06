"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted((m) => !m);
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* Video Background — using a free Pexels embed URL for ocean/Raja Ampat scenery */}
      <div className={styles.videoBg}>
        <video
          ref={videoRef}
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1800&q=80"
        >
          {/* Primary: tropical ocean drone footage (Pexels free video) */}
          <source
            src="https://videos.pexels.com/video-files/1448735/1448735-uhd_2560_1440_24fps.mp4"
            type="video/mp4"
          />
          {/* Fallback: another ocean video */}
          <source
            src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className={styles.videoOverlay} />
      </div>

      {/* Decorative circles */}
      <div className={`${styles.circle} ${styles.circle1}`} />
      <div className={`${styles.circle} ${styles.circle2}`} />
      <div className={`${styles.circle} ${styles.circle3}`} />
      <div className={`${styles.circle} ${styles.circle4}`} />

      {/* Content */}
      <div className={styles.content}>
        <p className={styles.eyebrow}>Saonek, West Papua · Indonesia</p>

        <h1 className={styles.title}>
          Where Ocean
          <br />
          <span className={styles.titleItalic}>Meets Serenity</span>
        </h1>

        <p className={styles.desc}>
          A boutique retreat at the heart of the world most biodiverse marine
          paradise — Raja Ampat.
        </p>

        <div className={styles.actions}>
          <a href="#booking" className={styles.btnPrimary}>
            Book now →
          </a>
          <a href="#contact" className={styles.btnOutline}>
            Explore Rooms
          </a>
        </div>

        <div className={styles.statsBar}>
          {[
            { num: "4.9★", label: "Guest Rating" },
            { num: "15 min", label: "To Waisai Beach" },
            { num: "50+", label: "Marine Species" },
          ].map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mute toggle */}
      <button
        className={styles.muteBtn}
        onClick={toggleMute}
        aria-label="Toggle sound"
      >
        {muted ? "🔇" : "🔊"}
      </button>

      {/* Scroll hint */}
      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </div>

      {/* Wave transition */}
      <div className={styles.wave}>
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,45 C240,90 480,0 720,45 C960,90 1200,10 1440,45 L1440,90 L0,90 Z"
            fill="#f7f1e6"
          />
        </svg>
      </div>
    </section>
  );
}
