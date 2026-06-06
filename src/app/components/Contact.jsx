"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

const contactInfo = [
  {
    icon: "📍",
    title: "Address",
    lines: ["Raja Ampat, Indonesia"],
  },
  {
    icon: "📞",
    title: "Contact Person",

    link: {
      label: "+62 852 5455 0411",
      href: "tel:+6285254550411",
    },
  },
  {
    icon: "✉️",
    title: "Email",
    link: {
      label: "lajoangingrajaampattrip@gmail.com",
      href: "mailto:lajoangingrajaampattrip@gmail.com",
    },
  },
  {
    icon: "🕐",
    title: "Reception Hours",
    lines: ["Daily 06:00 – 22:00 "],
  },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/lajoanging_raja_ampat_trip/",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/6285254550411",
  },
];

const subjectOptions = [
  "Room Enquiry",
  "Activity Booking",
  "Transportation",
  "General Question",
  "Special Occasion",
];

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setIsSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.error || "Message could not be sent. Please try again.");
        return;
      }

      setFormData(initialFormData);
      setIsSent(true);
    } catch (err) {
      console.error("CONTACT_FORM_ERROR:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.content}>
            <span className="sectionLabel">Get in Touch</span>

            <h2 className="sectionTitle">
              We&apos;re Here
              <br />
              to Help
            </h2>

            <div className="divider" />

            <p className={styles.description}>
              Need help with rooms, island trips, snorkeling, transportation, or
              your stay in Raja Ampat? Send us a message and we&apos;ll help you
              plan everything.
            </p>

            <div className={styles.infoGrid}>
              {contactInfo.map((item) => (
                <div key={item.title} className={styles.contactItem}>
                  <span className={styles.cIcon}>{item.icon}</span>

                  <div className={styles.cContent}>
                    <p className={styles.cLabel}>{item.title}</p>

                    {item.lines?.map((line) => (
                      <p key={line} className={styles.cLine}>
                        {line}
                      </p>
                    ))}

                    {item.link && (
                      <a href={item.link.href} className={styles.cLink}>
                        {item.link.label}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.socials}>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={styles.socialBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.formWrap}>
            {!isSent ? (
              <>
                <div className={styles.formHeader}>
                  <h3 className={styles.formTitle}>Send Us a Message</h3>
                  <p className={styles.formText}>
                    We usually reply as soon as possible.
                  </p>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.row}>
                    <div className={styles.group}>
                      <label htmlFor="name">Your Name</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Full name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                      />
                    </div>

                    <div className={styles.group}>
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.group}>
                    <label htmlFor="subject">Subject</label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      required
                    >
                      <option value="">Choose a topic...</option>

                      {subjectOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.group}>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us what you need..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                    />
                  </div>

                  {error && <p className={styles.errorText}>{error}</p>}

                  <button
                    type="submit"
                    className={`btnPrimary ${styles.submitButton}`}
                    disabled={isSending}
                  >
                    {isSending ? "Sending..." : "Send Message →"}
                  </button>
                </form>
              </>
            ) : (
              <div className={styles.sentBox}>
                <div className={styles.sentIcon}>✓</div>

                <h4 className={styles.sentTitle}>Message Sent!</h4>

                <p className={styles.sentText}>
                  Thank you for contacting us. We&apos;ll get back to you as
                  soon as possible.
                </p>

                <button
                  type="button"
                  className={`btnPrimary ${styles.submitButton}`}
                  onClick={() => {
                    setError("");
                    setIsSent(false);
                  }}
                >
                  Send Another
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
