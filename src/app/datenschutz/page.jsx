import styles from "./Datenschutz.module.css";
import Link from "next/link";
export const metadata = {
  title: "Privacy Policy — Raja Ampat Sandy Guest House",
};

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.label}>Legal</span>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.updated}>Last updated: June 2026</p>
          <div className={styles.divider} />
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <Section title="1. What Data We Collect">
          <p>
            We only collect personal data necessary to process your booking or
            enquiry — including your name, email address, phone number, and
            travel dates.
          </p>
        </Section>

        <Section title="2. How We Use Your Data">
          <p>
            Your data is used solely to manage your reservation and communicate
            with you about your stay. We do not use your data for marketing
            without your consent.
          </p>
        </Section>

        <Section title="3. Contact & Enquiries">
          <p>
            If you contact us via our contact form, email, or WhatsApp, your
            details will be used exclusively to handle your enquiry and will not
            be passed on to third parties.
          </p>
        </Section>

        <Section title="4. Cookies">
          <p>
            Our website uses only technically necessary cookies to ensure the
            functionality of the site. No tracking or advertising cookies are
            used.
          </p>
        </Section>

        <Section title="5. Sharing of Data">
          <p>
            We do not share your personal data with third parties unless
            required to fulfil your booking (e.g. local activity providers) or
            where required by law.
          </p>
        </Section>

        <Section title="6. Data Retention">
          <p>
            Your personal data is stored only for as long as necessary to
            process your booking or as required by applicable legal obligations.
          </p>
        </Section>

        <Section title="7. Your Rights">
          <p>
            You have the right to request access to, correction of, or deletion
            of your personal data at any time. Please contact us by email or
            WhatsApp.
          </p>
        </Section>

        <div className={styles.back}>
          <Link href="/">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </div>
  );
}
