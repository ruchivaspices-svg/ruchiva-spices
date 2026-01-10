function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-column">
          <h4>Ruchiva Spices</h4>
          <p>Premium Indian spices — pure powders & blends for consumers and bulk trade.</p>

          <div style={{ marginTop: 12 }}>
            <strong>Contact</strong>
            <div style={{ marginTop: 8 }}>
              <a className="footer-link" href="mailto:ruchivaspices@gmail.com">✉️ ruchivaspices@gmail.com</a>
              <br />
              <a className="footer-link" href="tel:+919606399923">📞 +91 96063 99923</a>
            </div>
          </div>
        </div>

        <div className="footer-column">
          <strong>Follow us</strong>
          <div className="footer-links">
            <a href="https://www.instagram.com/ruchiva_spices?igsh=MXIzbHFxeGtpYmFo" target="_blank" rel="noreferrer" style={{ color: '#E1306C' }}>📸 Instagram</a>
            <a href="https://youtube.com/@ruchivaspices?si=11ziSnhkN9tZKqRr" target="_blank" rel="noreferrer" style={{ color: '#FF0000' }}>▶️ YouTube</a>
            {/* Facebook placeholder: pointing to Instagram for now as requested */}
            <a href="https://www.instagram.com/ruchiva_spices?igsh=MXIzbHFxeGtpYmFo" target="_blank" rel="noreferrer" style={{ color: '#1877F2' }}>📘 Facebook</a>
          </div>

          <div style={{ marginTop: 12 }}>
            <strong>Location</strong>
            <p style={{ marginTop: 6 }}><a className="footer-link" href="https://maps.google.com/maps?q=Ruchiva%20Spices" target="_blank" rel="noreferrer">View on map</a></p>
            <div className="footer-map">
              <iframe title="map" src="https://maps.google.com/maps?q=Ruchiva%20Spices&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0 }} loading="lazy" />
            </div>
          </div>
        </div>

        <div className="footer-column">
          <strong>Company</strong>
          <p style={{ marginTop: 8 }}>
            © {new Date().getFullYear()} Ruchiva Spices. All rights reserved.
          </p>
          <p style={{ marginTop: 6 }}>CIN: <em>U10795KA20225PTC212028</em></p>
          <p style={{ marginTop: 6 }}>GST: <em>XXAAAAA0000X1Z0</em></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;