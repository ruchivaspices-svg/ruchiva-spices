function Contact(){
  return (
    <section id="contact" className="contact-section">
      <div className="container" style={{ maxWidth: 1200 }}>
        <div className="contact-inner">
          <div className="contact-left">
            <h2>Contact & <span className="accent">Partnerships</span></h2>
            <p style={{ color: 'rgba(43,43,43,0.75)' }}>Whether you're a retailer, distributor, or looking for a custom bulk order, reach out directly — we respond within 48 hours.</p>

            <div className="contact-info">
              <div className="contact-row">
                <div className="contact-ico" aria-hidden>
                  <svg className="contact-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path fill="#fff" d="M6.6 10.8a15 15 0 0 0 6.6 6.6l1.9-1.9a1 1 0 0 1 1-.2c1.1.4 2.4.6 3.6.6a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10 22 2 14 2 4a1 1 0 0 1 1-1h2.4a1 1 0 0 1 1 .7c.2 1 .5 2.1.9 3.2.1.4 0 .8-.3 1.1L6.6 10.8z"/></svg>
                </div>
                <div className="contact-meta">
                  <h4>Phone</h4>
                  <p><a href="tel:+919606399923">+91 96063 99923</a></p>
                </div>
              </div>

              <div className="contact-row">
                <div className="contact-ico" aria-hidden>
                  <svg className="contact-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path fill="#fff" d="M20 4H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1.4 3L12 12 5.4 7h13.2z"/></svg>
                </div>
                <div className="contact-meta">
                  <h4>Email</h4>
                  <p><a href="mailto:ruchivaspices@gmail.com">ruchivaspices@gmail.com</a></p>
                </div>
              </div>

              <div className="contact-row">
                <div className="contact-ico" aria-hidden>
                  <svg className="contact-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path fill="#fff" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/></svg>
                </div>
                <div className="contact-meta address">
                  <h4>Address</h4>
                  <p>#27, Sai Gardenia Enclave, 1st Main, 4th Cross, Behind Orchids International School, Singanayakanahalli, Bengaluru North - 560064</p>
                </div>
              </div>

            </div>

          </div>

          <div className="contact-right">
            <div className="contact-card">
              <h3>Send us a Message</h3>
              <form
                action="https://formsubmit.co/ruchivaspices@gmail.com"
                method="POST"
              >
                <input type="hidden" name="_subject" value="New enquiry from Ruchiva site" />
                <input type="hidden" name="_template" value="table" />
                <input type="text" name="_honey" style={{ display: 'none' }} aria-hidden />

                <label htmlFor="fullName">Full Name *</label>
                <input id="fullName" name="fullName" placeholder="Enter your name" required />

                <label htmlFor="email">Email Address *</label>
                <input id="email" name="email" type="email" placeholder="Enter your email" required />

                <label htmlFor="enquiry">Enquiry Type</label>
                <select id="enquiry" name="enquiry">
                  <option>General</option>
                  <option>Sales / Bulk Orders</option>
                  <option>Quality / Certifications</option>
                  <option>Careers</option>
                </select>

                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" placeholder="Tell us about your requirements" required />

                <div className="contact-note">We aim to respond within 48 hours. By contacting us you agree to our privacy policy.</div>

                <button type="submit" className="btn-primary" style={{ marginTop: 12 }}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
