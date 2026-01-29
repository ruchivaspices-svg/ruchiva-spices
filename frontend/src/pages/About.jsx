function About(){
  return (
    <section id="about" className="page-section">
      <div className="container about-section" style={{ marginTop: 4 }}>
        <div className="about-intro" style={{ textAlign: 'center', marginBottom: 28 }}>
          <h2>About <span className="accent">Ruchiva Spices</span></h2>
          <p className="about-lead">Since our inception, we've been dedicated to bringing authentic flavors and premium quality to your kitchen, preserving the essence of traditional Indian cuisine.</p>
        </div>

        <div className="about-cards">
          <div className="about-card">
            <div className="icon-circle" aria-hidden>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 11c0-1.5 1-4 6-6 4.8-1.9 10 3 10 8 0 1.8-2.6 3.7-6.4 4.6-2.7.6-5.8-.5-8-2.3-1.1-.9-1.6-2.1-1.6-4.3z" stroke="#37a342" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4>100% Natural</h4>
            <p>No artificial colors or preservatives</p>
          </div>

          <div className="about-card">
            <div className="icon-circle" aria-hidden>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l2.2 4.8L19 8l-3.6 3 1 5-4.4-2.5L8.2 16l1-5L5.6 8l4.8-.9L12 2z" stroke="var(--cta-orange)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4>Premium Quality</h4>
            <p>Carefully selected and processed</p>
          </div>

          <div className="about-card">
            <div className="icon-circle" aria-hidden>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.8 5.6c-1.3-1.3-3.6-1.3-4.9 0L12 9.5 8.1 5.6C6.8 4.3 4.5 4.3 3.2 5.6c-1.3 1.3-1.3 3.6 0 4.9L8.1 15l3.9 3.9 3.9-3.9 4.9-4.5c1.3-1.3 1.3-3.6 0-4.9z" stroke="#e44b4b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4>Traditional Blend</h4>
            <p>Authentic recipes passed through generations</p>
          </div>

          <div className="about-card">
            <div className="icon-circle" aria-hidden>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#4b7bdc" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="7" r="3" stroke="#4b7bdc" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4>Customer First</h4>
            <p>Committed to your satisfaction</p>
          </div>
        </div>

        <div className="story-wrap">
          <div className="story-card">
            <div className="story-left">
              <h2>Our <span className="accent">Story</span></h2>
              <p>Ruchiva Spices was born from a passion for bringing authentic Indian flavors to every home. We believe that exceptional cooking begins with exceptional ingredients, which is why we handpick the finest produce from trusted farmers across India's premier growing regions.</p>

              <p style={{ marginTop: 18 }}>Our modern grinding and packaging facility maintains strict hygiene standards while preserving the natural essence of each ingredient. From traditional blends to specialty masalas, every product reflects generations of culinary wisdom combined with contemporary quality control.</p>
            </div>

            <div className="story-right">
              <div className="stats-grid">
                <div className="stat">
                  <div className="stat-num">New</div>
                  <div className="stat-label">Company</div>
                </div>

                <div className="stat">
                  <div className="stat-num">9</div>
                  <div className="stat-label">Products</div>
                </div>

                <div className="stat">
                  <div className="stat-num">Early</div>
                  <div className="stat-label">Customers</div>
                </div>

                <div className="stat">
                  <div className="stat-num">Onboarding</div>
                  <div className="stat-label">Retailers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About;