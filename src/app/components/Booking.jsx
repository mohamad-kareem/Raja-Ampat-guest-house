"use client";

import { useState } from "react";
import styles from "./Booking.module.css";

const initialForm = {
  checkin: "",
  checkout: "",
  guests: "2",
  room: "",
  name: "",
  email: "",
};

export default function Booking() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  const setValue = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setIsSending(true);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.error || "Booking request could not be sent.");
        return;
      }

      setSubmitted(true);
    } catch (err) {
      console.error("BOOKING_FORM_ERROR:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const resetBooking = () => {
    setForm(initialForm);
    setSubmitted(false);
    setError("");
  };

  return (
    <section id="booking" className={styles.section}>
      <div className={styles.imgSide}>
        <img
          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=80"
          alt="Book your stay"
        />

        <div className={styles.imgOverlay} />

        <div className={styles.imgText}>
          <span className="sectionLabel" style={{ color: "var(--gold)" }}>
            Start Your Journey
          </span>

          <h2 className={styles.imgTitle}>
            Your paradise
            <br />
            awaits you
          </h2>

          <div className="dividerCenter" />

          <div className={styles.highlights}>
            {[
              "Free cancellation up to 48 hours",
              "Best rate guarantee",
              "Breakfast included",
            ].map((item) => (
              <p key={item} className={styles.highlight}>
                <span className={styles.checkmark}>✓</span> {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.formWrap}>
        <div className={styles.formInner}>
          {!submitted ? (
            <>
              <h3 className={styles.formTitle}>Reserve Your Room</h3>

              <p className={styles.formSub}>
                Fill in the details and we will confirm availability as soon as
                possible.
              </p>

              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <div className={styles.group}>
                    <label htmlFor="checkin">Check-in</label>
                    <input
                      id="checkin"
                      type="date"
                      value={form.checkin}
                      onChange={(e) => setValue("checkin", e.target.value)}
                      required
                    />
                  </div>

                  <div className={styles.group}>
                    <label htmlFor="checkout">Check-out</label>
                    <input
                      id="checkout"
                      type="date"
                      value={form.checkout}
                      onChange={(e) => setValue("checkout", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.group}>
                    <label htmlFor="guests">Guests</label>
                    <select
                      id="guests"
                      value={form.guests}
                      onChange={(e) => setValue("guests", e.target.value)}
                      required
                    >
                      {["1", "2", "3", "4"].map((num) => (
                        <option key={num} value={num}>
                          {num} Guest{num !== "1" ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.group}>
                    <label htmlFor="room">Room Type</label>
                    <select
                      id="room"
                      value={form.room}
                      onChange={(e) => setValue("room", e.target.value)}
                      required
                    >
                      <option value="">Select a room</option>
                      <option value="Ocean Breeze Room">
                        Ocean Breeze Room
                      </option>
                      <option value="Coral Suite">Coral Suite</option>
                      <option value="Garden Villa">Garden Villa</option>
                    </select>
                  </div>
                </div>

                <div className={styles.group}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setValue("name", e.target.value)}
                    required
                  />
                </div>

                <div className={styles.group}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setValue("email", e.target.value)}
                    required
                  />
                </div>

                {error && <p className={styles.errorText}>{error}</p>}

                <button
                  type="submit"
                  className={`btnPrimary ${styles.submitButton}`}
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "Request Booking →"}
                </button>

                <p className={styles.formNote}>
                  No payment required — we will confirm availability first.
                </p>
              </form>
            </>
          ) : (
            <div className={styles.successBox}>
              <div className={styles.successIcon}>✓</div>

              <h4 className={styles.successTitle}>Request Received!</h4>

              <p className={styles.successText}>
                Thank you, {form.name}. We will reach out to {form.email} as
                soon as possible to confirm your stay.
              </p>

              <button
                type="button"
                className={`btnPrimary ${styles.submitButton}`}
                onClick={resetBooking}
              >
                Make Another Booking
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
