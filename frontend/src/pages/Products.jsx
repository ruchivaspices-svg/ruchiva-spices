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
        "Our turmeric powder is made from premium-quality turmeric roots, known for high curcumin content, vibrant colour, and earthy aroma. Ideal for cooking and food processing.",
    },
    {
      name: "Red Chilli Powder",
      img: chilliImg,
      details:
        "Finely ground red chillies with rich colour and balanced heat. Hygienically processed to preserve freshness and pungency.",
    },
    {
      name: "Garam Masala",
      img: garamImg,
      details:
        "A traditional blend of aromatic whole spices that adds depth, warmth, and authentic Indian flavour to curries.",
    },
    {
      name: "Kabab Masala",
      img: kababImg,
      details:
        "Expertly blended spices for kababs and grilled dishes, delivering juicy texture and bold taste.",
    },
    {
      name: "Chicken Masala",
      img: chickenImg,
      details:
        "A bold and flavourful spice mix specially crafted for authentic Indian chicken curries and gravies.",
    },
    {
      name: "Fry Masala",
      img: fryImg,
      details:
        "Perfect spice blend for fry dishes, giving a crispy finish and mouth-watering aroma.",
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
              color: "var(--earth-brown)",
              marginBottom: "12px",
            }}
          >
            Our Products
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "36px",
            }}
          >
            {products.map((product) => (
              <div
                key={product.name}
                onClick={() => setSelectedProduct(product)}
                style={{
                  cursor: "pointer",
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  padding: "24px",
                  textAlign: "center",
                  height: "320px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                  transition: "transform 0.22s ease, box-shadow 0.22s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 18px 36px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.06)";
                }}
              >
                <img
                  src={product.img}
                  alt={product.name}
                  style={{
                    width: "160px",
                    margin: "0 auto",
                  }}
                />

                <h3
                  style={{
                    fontSize: "18px",
                    color: "var(--earth-brown)",
                    marginTop: "16px",
                  }}
                >
                  {product.name}
                </h3>
              </div>
            ))}
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
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#fff",
              padding: "40px",
              borderRadius: "12px",
              width: "480px",
              textAlign: "center",
              boxShadow: "0 30px 60px rgba(0,0,0,0.25)",
            }}
          >
            <img
              src={selectedProduct.img}
              alt={selectedProduct.name}
              style={{ width: "200px", marginBottom: "20px" }}
            />

            <h3
              style={{
                fontSize: "22px",
                color: "var(--earth-brown)",
                marginBottom: "12px",
              }}
            >
              {selectedProduct.name}
            </h3>

            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.7",
                color: "rgba(74,36,18,0.9)",
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
