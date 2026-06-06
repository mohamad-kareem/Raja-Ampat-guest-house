'use client'
import { useState } from 'react'
import styles from './Booking.module.css'

export default function Booking() {
  const [form, setForm] = useState({ checkin:'', checkout:'', guests:'2', room:'', name:'', email:'' })
  const [submitted, setSubmitted] = useState(false)
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  return (
    <section id="booking" className={styles.section}>
      <div className={styles.imgSide}>
        <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=80" alt="Book your stay" />
        <div className={styles.imgOverlay} />
        <div className={styles.imgText}>
          <span className="sectionLabel" style={{ color: 'var(--gold)' }}>Start Your Journey</span>
          <h2 className={styles.imgTitle}>Your paradise<br />awaits you</h2>
          <div className="dividerCenter" />
          <div className={styles.highlights}>
            {['Free Cancellation up to 48hrs', 'Best Rate Guarantee', 'Breakfast Included'].map(h => (
              <p key={h} className={styles.highlight}><span className={styles.checkmark}>✓</span> {h}</p>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.formWrap}>
        <div className={styles.formInner}>
          <h3 className={styles.formTitle}>Reserve Your Room</h3>
          <p className={styles.formSub}>Fill in the details — we confirm within 24 hours.</p>

          {!submitted ? (
            <form className={styles.form} onSubmit={e => { e.preventDefault(); setSubmitted(true) }}>
              <div className={styles.row}>
                <div className={styles.group}>
                  <label>Check-in</label>
                  <input type="date" value={form.checkin} onChange={e => set('checkin', e.target.value)} required />
                </div>
                <div className={styles.group}>
                  <label>Check-out</label>
                  <input type="date" value={form.checkout} onChange={e => set('checkout', e.target.value)} required />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.group}>
                  <label>Guests</label>
                  <select value={form.guests} onChange={e => set('guests', e.target.value)}>
                    {['1','2','3','4'].map(n => <option key={n} value={n}>{n} Guest{n!=='1'?'s':''}</option>)}
                  </select>
                </div>
                <div className={styles.group}>
                  <label>Room Type</label>
                  <select value={form.room} onChange={e => set('room', e.target.value)} required>
                    <option value="">Select a room</option>
                    <option>Ocean Breeze Room</option>
                    <option>Coral Suite</option>
                    <option>Garden Villa</option>
                  </select>
                </div>
              </div>
              <div className={styles.group}>
                <label>Full Name</label>
                <input type="text" placeholder="Your full name" value={form.name} onChange={e => set('name', e.target.value)} required />
              </div>
              <div className={styles.group}>
                <label>Email Address</label>
                <input type="email" placeholder="your@email.com" value={form.email} onChange={e => set('email', e.target.value)} required />
              </div>
              <button type="submit" className="btnPrimary" style={{ width:'100%', justifyContent:'center', padding:'1.1rem' }}>
                Request Booking →
              </button>
              <p className={styles.formNote}>No payment required — we'll confirm availability first.</p>
            </form>
          ) : (
            <div className={styles.successBox}>
              <div className={styles.successIcon}>✓</div>
              <h4 className={styles.successTitle}>Request Received!</h4>
              <p className={styles.successText}>Thank you, {form.name}. We'll reach out to {form.email} within 24 hours to confirm your stay.</p>
              <button className="btnPrimary" style={{ marginTop:'0.5rem' }} onClick={() => setSubmitted(false)}>Make Another Booking</button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
