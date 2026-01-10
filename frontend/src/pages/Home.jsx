import spicesImage from "../assets/images/spices.png";

function Home({ onNavigate }) {
  return (
    <section className="page-section">
      <div className="container hero">
        <div className="hero-grid">
          <div>
            <h1>Ruchiva Spices — Authentic Flavours, Trusted Quality</h1>
            <p>We source the best produce and process it with care — delivering pure spices and blends that uplift everyday cooking. From farm to pack, our emphasis is on safety, traceability and taste.</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '18px 0 20px' }}>
              <div className="feature-card">
                <strong>Quality Policy</strong>
                <p style={{ margin: '8px 0 0', color: 'rgba(74,36,18,0.85)' }}>Lab-tested; no adulterants; consistent grading.</p>
              </div>

              <div className="feature-card">
                <strong>Sustainable Sourcing</strong>
                <p style={{ margin: '8px 0 0', color: 'rgba(74,36,18,0.85)' }}>Working directly with farmers to ensure fair prices and traceability.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => onNavigate('Products')} className="btn btn-primary">Browse Products</button>
              <button onClick={() => onNavigate('Contact')} className="btn btn-outline">Get in Touch</button>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={spicesImage} alt="Assorted spices" style={{ width: 420, maxWidth: '100%', borderRadius: 8, boxShadow: '0 12px 30px rgba(0,0,0,0.08)' }} />
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: 48 }}>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Hygienic Processing</h3>
            <p>State-of-the-art facilities and routine lab testing to ensure safety.</p>
          </div>

          <div className="feature-card">
            <h3>Quality Packaging</h3>
            <p>Airtight sachets and retail-ready pouches preserving aroma and shelf life.</p>
          </div>

          <div className="feature-card">
            <h3>Bulk & Export</h3>
            <p>Capable of catering to retail and bulk requirements with export compliance.</p>
          </div>
        </div>

      
        </div>

    </section>
  );
}

export default Home;
