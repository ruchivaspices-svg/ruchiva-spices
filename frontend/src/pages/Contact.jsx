function Contact(){
  return (
    <section className="page-section">
      <div className="container" style={{ maxWidth: 800 }}>
        <h2 style={{ fontSize: 32, color: 'var(--earth-brown)' }}>Contact Us</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 260px', gap: 20, marginTop: 16 }}>
          <div>
            <p style={{ color: 'rgba(74,36,18,0.95)', lineHeight: 1.7 }}>
              For orders, enquiries or trade partnerships, reach out to us:
            </p>

            <ul style={{ marginTop: 12, color: 'rgba(74,36,18,0.9)' }}>
              <li>Email: <a href="mailto:ruchivaspices@gmail.com">ruchivaspices@gmail.com</a></li>
              <li>Phone: <a href="tel:+919606399923">+91 96063 99923</a></li>
              <li>Business hours: Mon - Sat, 9:00 AM - 6:00 PM</li>
            </ul>

            
          </div>

          <div>
            <strong style={{ color: 'var(--earth-brown)' }}>Location</strong>
            <p style={{ marginTop: 8 }}><a className="footer-link" href="https://maps.google.com/maps?q=Ruchiva%20Spices" target="_blank" rel="noreferrer">View on map</a></p>
            <div className="footer-map" style={{ marginTop: 8 }}>
              <iframe title="map" src="https://maps.google.com/maps?q=Ruchiva%20Spices&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0 }} loading="lazy" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact;
