function Footer({ onNavigate }){
  const goToSection = (hash) => {
    window.location.hash = hash;
    if (onNavigate) onNavigate('Home');
  }

  const goToProduct = (name) => {
    const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    window.location.hash = `#product-${slug}`;
    if (onNavigate) onNavigate('Home');
  }

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-column">
          <img src="/src/assets/images/ruchiva-logo.png" alt="Ruchiva logo" style={{ height: 56 }} />
          <p style={{ marginTop: 12, maxWidth: 320, color: 'rgba(255,255,255,0.85)' }}>Bringing authentic Indian flavors to your kitchen with premium quality spices.</p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <div className="footer-links" style={{ marginTop: 8 }}>
            <button className="footer-link" onClick={() => goToSection('#home')}>Home</button>
            <button className="footer-link" onClick={() => goToSection('#about')}>About</button>
            <button className="footer-link" onClick={() => goToSection('#products')}>Products</button>
            <button className="footer-link" onClick={() => goToSection('#contact')}>Contact</button>
          </div>
        </div>

        <div className="footer-column">
          <h4>Our Products</h4>
          <ul style={{ marginTop: 8, listStyle: 'none', padding: 0, color: 'rgba(255,255,255,0.85)' }}>
            <li><button className="footer-link" onClick={() => goToProduct('Red Chilli Powder')}>Red Chilli Powder</button></li>
            <li><button className="footer-link" onClick={() => goToProduct('Turmeric Powder')}>Turmeric Powder</button></li>
            <li><button className="footer-link" onClick={() => goToProduct('Garam Masala')}>Garam Masala</button></li>
            <li><button className="footer-link" onClick={() => goToSection('#products')}>View All Products</button></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>
          <div style={{ display: 'flex', gap: 12, marginTop: 10 }}>
            <a className="social-btn" href="https://www.instagram.com/ruchiva_spices?igsh=MXIzbHFxeGtpYmFo" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="3.2" stroke="#fff" strokeWidth="1.2"/><circle cx="18.5" cy="5.5" r="0.6" fill="#fff"/></svg>
            </a>

            <a className="social-btn" href="https://youtube.com/@ruchivaspices?si=11ziSnhkN9tZKqRr" target="_blank" rel="noreferrer" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 8.2a2.6 2.6 0 0 0-1.8-1.8C18.7 6 12 6 12 6s-6.7 0-8.2.4A2.6 2.6 0 0 0 2 8.2 27.6 27.6 0 0 0 2 15.8a2.6 2.6 0 0 0 1.8 1.8C5.3 18 12 18 12 18s6.7 0 8.2-.4a2.6 2.6 0 0 0 1.8-1.8A27.6 27.6 0 0 0 22 8.2z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 14.2l5-2.6-5-2.6v5.2z" fill="#fff"/></svg>
            </a>

            <a className="social-btn" href="https://www.linkedin.com/in/ruchiva-spices-581a0a3a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-2-2c-1.2 0-2 .8-2 2v6h-4v-12h4v2.2c.7-1 1.9-1.2 3-1.2zM2 9h4v12H2zM4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" fill="#fff"/></svg>
            </a>

            <a className="social-btn" href="https://x.com/RuchivaSpices" target="_blank" rel="noreferrer" aria-label="X">
              <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 4l14 16M19 4L5 20" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>

            <a className="social-btn" href="https://www.facebook.com/share/1AR5cvoCNx/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3V2z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>

          </div>    
        </div>
      </div>

      <div className="footer-legal-row">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <small style={{ color: 'rgba(255,255,255,0.6)' }}>© {new Date().getFullYear()} Ruchiva Spices. All rights reserved.</small>
            <div style={{ color: 'rgba(255,255,255,0.6)', marginTop: 6, fontSize: 13 }}>CIN: U10795KA2025PTC212028</div>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <a className="footer-link" href="#">Privacy</a>
            <a className="footer-link" href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;