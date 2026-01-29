import { useEffect } from 'react';
import spicesImage from "../assets/images/c.jpg";
import qualityImg from "../assets/images/quality.png";
import fastImg from "../assets/images/fast.png";
import certifiedImg from "../assets/images/certified.webp";
import customerImg from "../assets/images/customer.png";
import Products from './Products';
import About from './About';
import Recipes from './Recipes';
import Contact from './Contact';

function Home({ onNavigate }) {
  useEffect(() => {
    function scrollToHash() {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Scroll on mount and when hash changes
    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  return (
    <section>
      <div id="home" className="hero-hero">
        <div className="hero-powder" aria-hidden></div>
        <div className="hero-powder hero-powder--2" aria-hidden></div>
        <div className="container">
          <div className="hero-row">
            <div className="hero-content">
            <span className="hero-pill">100% Pure & Natural</span>
            <h1>
              Authentic Indian
              <br />
              Spices <span className="accent">for Every Kitchen</span>
            </h1>
            <p>Experience the rich flavors of India with Ruchiva Spices. Premium quality masalas crafted with tradition and excellence.</p>

            <div className="hero-ctas">
              <button onClick={() => { const el = document.getElementById('products'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="btn-primary btn">Explore Products →</button>
              
            </div>
            </div>

            <div className="hero-visual" aria-hidden>
              <div className="hero-visual-card">
                <div className="hero-visual-overlay" aria-hidden></div>
                <div className="hero-visual-dust" aria-hidden></div>
                <img src={spicesImage} alt="Spice assortment" className="hero-visual-img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <About />

      <div id="products" style={{ marginTop: 36 }}>
        <Products />
      </div>

      {/* ===== WHY CHOOSE ===== */}
      <section id="why" className="why-section" style={{ marginTop: 48 }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: 36, marginBottom: 6 }}>Why Choose <span className="accent">Ruchiva Spices</span>?</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-red-muted)', marginBottom: 28 }}>We go beyond just selling spices – we deliver trust, quality, and tradition in every pack</p>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-ico" aria-hidden>
                <img src={qualityImg} alt="Quality Assured" className="feature-img" />
              </div>
              <h3>Quality Assured</h3>
              <p>Every batch undergoes strict quality checks to ensure purity and consistency.</p>
            </div>

            <div className="feature-card">
              <div className="feature-ico" aria-hidden>
                <img src={fastImg} alt="Fast Delivery" className="feature-img" />
              </div>
              <h3>Fast Delivery</h3>
              <p>Reliable logistics ensure timely delivery to retailers and customers.</p>
            </div>

            <div className="feature-card">
              <div className="feature-ico" aria-hidden>
                <img src={certifiedImg} alt="Certified Products" className="feature-img feature-img--stamp" />
              </div>
              <h3>Certified Products</h3>
              <p>Our products are FSSAI certified and meet strict food safety standards.</p>
            </div>

            <div className="feature-card">
              <div className="feature-ico" aria-hidden>
                <img src={customerImg} alt="Customer Support" className="feature-img" />
              </div>
              <h3>Customer Support</h3>
              <p>Dedicated support team to help with orders, bulk enquiries and product information.</p>
            </div>
          </div> 
        </div>
      </section>

      <div id="recipes" style={{ marginTop: 36 }}>
        <Recipes />
      </div>

      <div id="contact" style={{ marginTop: 36 }}>
        <Contact />
      </div>

    </section>
  );
}

export default Home;
