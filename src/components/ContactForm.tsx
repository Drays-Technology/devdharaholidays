import { useRef, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { WHATSAPP_NUMBER, PHONE_DISPLAY, EMAIL, BUSINESS_NAME, LOCATION, WEB3FORMS_KEY } from '../data/env'

const EMAIL_LIMIT = 240

function getMonthKey() {
  const d = new Date()
  return `dh_sends_${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
}

function getSendCount(): number {
  return parseInt(localStorage.getItem(getMonthKey()) || '0', 10)
}

function incrementSendCount() {
  localStorage.setItem(getMonthKey(), String(getSendCount() + 1))
}

function isEmailAvailable(): boolean {
  return !!WEB3FORMS_KEY && WEB3FORMS_KEY !== 'YOUR_ACCESS_KEY_HERE' && getSendCount() < EMAIL_LIMIT
}

function buildWhatsAppUrl(name: string, phone: string, dest: string, groupSize: string, season: string, contactPref: string): string {
  const msg = `Hi, I'm interested in a holiday package with ${BUSINESS_NAME}.\n\n` +
    `*Name:* ${name}\n*Phone:* +91 ${phone}\n*Destination:* ${dest}\n` +
    `*Group Size:* ${groupSize}\n*Travel Season:* ${season}\n*Contact Pref:* ${contactPref}`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
}

export function ContactForm() {
  const location = useLocation()
  const nameRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const destRef = useRef<HTMLSelectElement>(null)
  const formContentRef = useRef<HTMLDivElement>(null)
  const successRef = useRef<HTMLDivElement>(null)

  const [errors, setErrors] = useState({ name: false, phone: false, dest: false })
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [groupSize, setGroupSize] = useState('')
  const [season, setSeason] = useState('')
  const [contactPref, setContactPref] = useState('WhatsApp')

  // Pre-select destination from route state
  useEffect(() => {
    const state = location.state as { prefillDest?: string; scrollTo?: string } | null
    if (state?.prefillDest && destRef.current) {
      const options = Array.from(destRef.current.options)
      for (const opt of options) {
        if (opt.text.includes(state.prefillDest) || state.prefillDest.includes(opt.text)) {
          destRef.current.value = opt.value
          break
        }
      }
    }
    if (state?.scrollTo) {
      setTimeout(() => {
        document.getElementById(state.scrollTo!)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [location.state])

  function validate() {
    const n = nameRef.current!.value.trim()
    const p = phoneRef.current!.value.replace(/\s/g, '')
    const d = destRef.current!.value
    const newErrors = {
      name: !n,
      phone: !p || !/^[0-9]{10}$/.test(p),
      dest: !d,
    }
    setErrors(newErrors)
    return !newErrors.name && !newErrors.phone && !newErrors.dest
  }

  function getFormData() {
    return {
      name: nameRef.current!.value.trim(),
      phone: phoneRef.current!.value.replace(/\s/g, ''),
      dest: destRef.current!.value,
      groupSize: groupSize || 'Not specified',
      season: season || 'Not specified',
      contactPref,
    }
  }

  function showSuccess() {
    setSuccess(true)
  }

  function sendViaWhatsApp(data: ReturnType<typeof getFormData>) {
    window.open(buildWhatsAppUrl(data.name, data.phone, data.dest, data.groupSize, data.season, data.contactPref), '_blank')
    showSuccess()
  }

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    const data = getFormData()

    if (!isEmailAvailable()) {
      sendViaWhatsApp(data)
      return
    }

    setSubmitting(true)
    setSubmitError(false)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Enquiry: ${data.dest} — ${BUSINESS_NAME}`,
          from_name: BUSINESS_NAME + ' Website',
          name: data.name,
          phone: '+91 ' + data.phone,
          destination: data.dest,
          group_size: data.groupSize,
          travel_season: data.season,
          contact_preference: data.contactPref,
        }),
      })
      const result = await res.json()
      if (!result.success) throw new Error('submit failed')
      incrementSendCount()
      showSuccess()
    } catch {
      setSubmitting(false)
      setSubmitError(true)
      setTimeout(() => sendViaWhatsApp(data), 1500)
    }
  }

  function handleWhatsAppSubmit() {
    if (!validate()) return
    sendViaWhatsApp(getFormData())
  }

  function clearError(field: 'name' | 'phone' | 'dest') {
    setErrors((prev) => ({ ...prev, [field]: false }))
  }

  function PillGroup({ options, value, onChange, label }: { options: string[]; value: string; onChange: (v: string) => void; label: string }) {
    return (
      <div className="pill-group" role="radiogroup" aria-label={label}>
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            className={`pill${value === opt ? ' selected' : ''}`}
            role="radio"
            aria-checked={value === opt}
            onClick={() => onChange(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="form-section deferred-section" id="contact">
      <div className="form-visual">
        <img
          src="/images/places/detail/triund.jpg"
          alt="Mountain camping"
          loading="lazy"
          onLoad={(e) => (e.target as HTMLImageElement).classList.add('loaded')}
        />
        <div className="form-visual-overlay">
          <h2 className="detail-section-title">Your next<br />story awaits.</h2>
          <p>Tell us your dream destination and we'll craft the perfect package — treks, pilgrimages, road trips and more.</p>
          <div className="contact-chips">
            <div className="contact-chip">
              <span className="contact-chip-icon" aria-hidden="true">📞</span>
              <div className="contact-chip-text">
                <strong>Call / WhatsApp</strong>
                {PHONE_DISPLAY}
              </div>
            </div>
            <div className="contact-chip">
              <span className="contact-chip-icon" aria-hidden="true">✉️</span>
              <div className="contact-chip-text">
                <strong>Email Us</strong>
                {EMAIL}
              </div>
            </div>
            <div className="contact-chip">
              <span className="contact-chip-icon" aria-hidden="true">📍</span>
              <div className="contact-chip-text">
                <strong>Based in</strong>
                {LOCATION}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-wrapper">
        {!success ? (
          <div ref={formContentRef}>
            <h3 className="form-title">Plan Your Trip</h3>
            <p className="form-subtitle">3 quick fields and we'll get back to you as soon as possible.</p>

            <form noValidate onSubmit={handleEmailSubmit}>
              <div className="form-group">
                <label htmlFor="f-name">Your Name *</label>
                <input
                  id="f-name"
                  ref={nameRef}
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  required
                  autoComplete="name"
                  className={errors.name ? 'error' : ''}
                  onChange={() => clearError('name')}
                />
                <span className={`form-error${errors.name ? ' visible' : ''}`}>Please enter your name</span>
              </div>

              <div className="form-group">
                <label htmlFor="f-phone">WhatsApp / Phone *</label>
                <div className="phone-wrap">
                  <span className="phone-prefix" aria-hidden="true">+91</span>
                  <input
                    id="f-phone"
                    ref={phoneRef}
                    type="tel"
                    placeholder="98765 43210"
                    required
                    autoComplete="tel"
                    maxLength={10}
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    className={errors.phone ? 'error' : ''}
                    onChange={() => clearError('phone')}
                  />
                </div>
                <span className={`form-error${errors.phone ? ' visible' : ''}`}>Please enter a valid 10-digit phone number</span>
              </div>

              <div className="form-group">
                <label htmlFor="f-dest">Where do you want to go? *</label>
                <select
                  id="f-dest"
                  ref={destRef}
                  required
                  className={errors.dest ? 'error' : ''}
                  onChange={() => clearError('dest')}
                >
                  <option value="">— Pick a destination —</option>
                  <optgroup label="Himachal Treks">
                    <option>Hampta Pass</option>
                    <option>Saryolsar Lake</option>
                    <option>Tirthan Valley</option>
                    <option>Prashar Lake</option>
                    <option>Chandrakhani Pass</option>
                    <option>Kareri Lake, Dharamshala</option>
                    <option>Triund</option>
                    <option>Dev Roopa / Ghepan Roppa</option>
                    <option>Lahaul Spiti Circuit</option>
                  </optgroup>
                  <optgroup label="Rajasthan">
                    <option>Jaipur</option>
                    <option>Rajasthan Full Circuit</option>
                  </optgroup>
                  <optgroup label="Uttarakhand">
                    <option>Nainital</option>
                    <option>Mussoorie</option>
                    <option>Char Dham Yatra</option>
                  </optgroup>
                  <optgroup label="Pilgrimages">
                    <option>Khatu Shyam</option>
                    <option>Salasar Balaji</option>
                    <option>Ayodhya</option>
                    <option>Mathura &amp; Vrindavan</option>
                  </optgroup>
                  <option>Not sure yet / Custom</option>
                </select>
                <span className={`form-error${errors.dest ? ' visible' : ''}`}>Please select a destination</span>
              </div>

              <div className="form-group">
                <label>Group Size</label>
                <PillGroup options={['Solo', 'Couple', '3 – 6', '7 – 15', '16+']} value={groupSize} onChange={setGroupSize} label="Group size" />
              </div>

              <div className="form-group">
                <label>When are you planning?</label>
                <PillGroup options={['Jan – Mar', 'Apr – Jun', 'Jul – Sep', 'Oct – Dec', 'Flexible']} value={season} onChange={setSeason} label="Travel season" />
              </div>

              <div className="form-group">
                <label>How should we reach you?</label>
                <div className="contact-pref" role="radiogroup" aria-label="Contact preference">
                  {['WhatsApp', 'Phone Call', 'Email'].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      className={`pref-btn${contactPref === opt ? ' selected' : ''}`}
                      role="radio"
                      aria-checked={contactPref === opt}
                      onClick={() => setContactPref(opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="form-submit" disabled={submitting}>
                  {submitting ? <><span className="spinner" />Sending...</> : 'Get a Free Quote →'}
                </button>
                <button type="button" className="form-submit whatsapp-submit" onClick={handleWhatsAppSubmit}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send via WhatsApp
                </button>
              </div>
              <p className="form-note">No spam. We'll reach out on your preferred channel only.</p>
              {submitError && (
                <p className="form-error form-submit-error" style={{ display: 'block', textAlign: 'center', marginTop: '8px' }}>
                  Something went wrong. Trying WhatsApp instead...
                </p>
              )}
            </form>
          </div>
        ) : (
          <div className="success-msg" ref={successRef} style={{ display: 'block', animation: 'fadeUp 0.6s forwards' }}>
            <div style={{ marginBottom: '20px' }}>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
                <circle cx="28" cy="28" r="27" stroke="#2d5a27" strokeWidth="2" />
                <path d="M16 28l8 8 16-16" stroke="#2d5a27" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>We've got your enquiry!</h3>
            <p>Our travel expert will reach out shortly<br />on your preferred channel.<br /><br />Get ready — your story is about to begin.</p>
          </div>
        )}
      </div>
    </div>
  )
}
