import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.grid}>
            <div>
              <span className={styles.logoMain}>Raja Ampat</span>
              <span className={styles.logoSub}>Sandy Guest House</span>
              <p className={styles.tagline}>
                Where the ocean, the jungle, and the sky meet in one of
                Earth&apos;s last true wildernesses.
              </p>
              <div className={styles.certs}>
                {[
                  "🌿 Eco-Conscious",
                  "🤝 Community-Owned",
                  "🐠 Dive Friendly",
                ].map((c) => (
                  <span key={c} className={styles.cert}>
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.col}>
              <p className={styles.colTitle}>Navigation</p>
              <ul>
                {[
                  ["Rooms & Suites", "#rooms"],
                  ["Amenities", "#amenities"],
                  ["Experiences", "#experiences"],
                  ["Photo Gallery", "#gallery"],
                  ["About Us", "#about"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.col}>
              <p className={styles.colTitle}>Our Rooms</p>
              <ul>
                <li>
                  <a href="#rooms">Ocean Breeze — from $85</a>
                </li>
                <li>
                  <a href="#rooms">Coral Suite — from $145</a>
                </li>
                <li>
                  <a href="#rooms">Garden Villa — from $195</a>
                </li>
              </ul>
              <p className={styles.colTitle} style={{ marginTop: "1.5rem" }}>
                Experiences
              </p>
              <ul>
                {[
                  "Scuba Diving",
                  "Island Hopping",
                  "Sunrise Kayaking",
                  "Village Tour",
                ].map((e) => (
                  <li key={e}>
                    <a href="#experiences">{e}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.col}>
              <p className={styles.colTitle}>Contact Us</p>
              <div className={styles.contactItems}>
                <p>📍Raja Ampat, Indonesia</p>
                <p>📱 +62 852 5455 0411 (Husna)</p>
                <p>✉️ lajoangingrajaampattrip@gmail.com</p>
                <p>🕐 Reception: 06:00 – 22:00</p>
              </div>
              <div className={styles.socials}>
                <a
                  href="https://wa.me/6285254550411"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialCircle}
                >
                  WA
                </a>
                <a
                  href="https://instagram.com/lajoanging_raja_ampat_trip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialCircle}
                >
                  IG
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>
            © 2026 Raja Ampat Sandy Guest House. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <a href="/datenschutz">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
