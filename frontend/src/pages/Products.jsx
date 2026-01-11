import { useState } from "react";

import turmericImg from "../assets/images/turmeric.png";
import chilliImg from "../assets/images/chilli.png";
import garamImg from "../assets/images/garam.png";
import kababImg from "../assets/images/kabab.png";
import fryImg from "../assets/images/fry.png";
import chickenImg from "../assets/images/chicken.png";

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      name: "Turmeric Powder",
      img: turmericImg,
      details:
        "Pure turmeric powder with natural golden color and health benefits.",
      available: "Available: 50g, 100g, 200g, 500g",
    },
    {
      name: "Red Chilli Powder",
      img: chilliImg,
      details:
        "Premium quality red chilli powder with perfect heat and color.",
      available: "Available: 50g, 100g, 200g, 500g",
    },
    {
      name: "Garam Masala",
      img: garamImg,
      details:
        "Traditional blend of aromatic spices for authentic Indian flavors.",
      available: "Available: 50g, 100g, 200g",
    },
    {
      name: "Kabab Masala",
      img: kababImg,
      details:
        "Spice mix specially tailored for kebabs and grilled dishes.",
      available: "Available: 50g, 100g, 200g",
    },
    {
      name: "Chicken Masala",
      img: chickenImg,
      details:
        "A bold and flavourful spice mix for chicken curries and gravies.",
      available: "Available: 50g, 100g, 200g",
    },
    {
      name: "Fry Masala",
      img: fryImg,
      details:
        "Perfect spice blend for fry dishes, giving a crispy finish and mouth-watering aroma.",
      available: "Available: 50g, 100g, 200g",
    },
  ];

  return (
    <>
      {/* ===== PRODUCTS SECTION ===== */}
      <section className="page-section">
        <div className="container">
          <h2
            style={{
              fontSize: "34px",
              color: "var(--dark-text)",
              marginBottom: "12px",
            }}
          >
            Our <span className="accent">Premium</span> Products
          </h2>

          <p
            style={{
              maxWidth: 700,
              color: "rgba(74,36,18,0.9)",
              lineHeight: 1.7,
              marginBottom: "48px",
            }}
          >
            Discover our range of authentic Indian spices crafted with precision,
            hygiene, and consistent quality for domestic and global markets.
          </p>

          {/* ===== GRID ===== */}
          <div className="product-grid">
            {products.map((product) => {
              const slug = product.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
              return (
                <div
                  id={`product-${slug}`}
                  key={product.name}
                  onClick={() => setSelectedProduct(product)}
                  className="product-card"
                >
                  <div className="product-image">
                    <img src={product.img} alt={product.name} className="product-img" />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1, marginTop: 12 }}>
                    <div>
                      <h3
                        style={{
                          fontSize: '18px',
                          color: 'var(--text-red)',
                          marginTop: '8px',
                        }}
                      >
                        {product.name}
                      </h3>

                      <p style={{ fontSize: '14px', color: 'rgba(43,43,43,0.8)', lineHeight: 1.6, marginTop: 10, marginBottom: 8 }}>
                        {product.details}
                      </p>

                      <p style={{ fontSize: '13px', color: 'rgba(43,43,43,0.6)', marginTop: 8 }}>
                        {product.available}
                      </p>
                    </div>

                    <div style={{ marginTop: 12 }}>
                      <button
                        className='btn-primary'
                        onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); }}
                        style={{ padding: '12px 18px', backgroundColor: 'var(--cta-orange)', border: 'none', borderRadius: 8, color: '#fff', cursor: 'pointer', fontWeight: 700, width: '100%' }}
                      >
                        🛒 View Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== MODAL ===== */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div onClick={(e) => e.stopPropagation()} className="product-modal">
            <img
              src={selectedProduct.img}
              alt={selectedProduct.name}
              style={{ width: "200px", marginBottom: "20px" }}
            />

            <h3
              style={{
                fontSize: "22px",
                color: "var(--text-red)",
                marginBottom: "12px",
              }}
            >
              {selectedProduct.name}
            </h3>

            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.7",
                color: "var(--text-red-muted)",
              }}
            >
              {selectedProduct.details}
            </p>

            <button
              onClick={() => setSelectedProduct(null)}
              style={{
                marginTop: "24px",
                padding: "12px 28px",
                backgroundColor: "var(--cta-orange)",
                border: "none",
                borderRadius: "6px",
                color: "#fff",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Products;
