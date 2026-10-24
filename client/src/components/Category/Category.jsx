import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Category.css";

// Default data. Replace with categories from your API later.
// Use `image: "/images/categories/phones.webp"` to show a picture instead of the icon.
const DEFAULT_CATEGORIES = [
  { slug: "phones", name: "Phones", icon: "bi-phone", count: 128 },
  { slug: "laptops", name: "Laptops", icon: "bi-laptop", count: 86 },
  { slug: "audio", name: "Audio", icon: "bi-headphones", count: 94 },
  { slug: "gaming", name: "Gaming", icon: "bi-controller", count: 72 },
  { slug: "Watch", name: "Watch", icon: "bi-smartwatch", count: 58 },
  { slug: "Tablet", name: "Tablet", icon: "bi-tablet", count: 63 },
];

function Category({
  title = "Shop by category",
  subtitle = "Jump straight to what you are looking for",
  categories = DEFAULT_CATEGORIES,
}) {


  return (
    <section className="cat py-5" aria-labelledby="cat-title">
      <div className="container">
        {/* Heading row */}
        <div className="d-flex flex-wrap align-items-end justify-content-between gap-2 mb-4">
          <div>
            <h2 id="cat-title" className="cat-title m-0">
              {title}
            </h2>
            <p className="cat-subtitle m-0 mt-1">{subtitle}</p>
          </div>
          <Link to="/categories" className="cat-all">
            View all <i className="bi bi-arrow-right"></i>
          </Link>
        </div>

        {/* Tiles: 2 per row on phones, 3 on tablets, 6 on wide screens */}
        <div className="row g-3 g-lg-4">
          {categories.map((c, i) => (
            <div
              key={c.slug}
              className="col-6 col-md-4 col-xl-2 cat-col"
              style={{ "--i": i }}
            >
              <Link to={`/category/${c.slug}`} className="cat-card">
                <i
                  className="bi bi-arrow-up-right cat-arrow"
                  aria-hidden="true"
                ></i>

                <span className="cat-icon" aria-hidden="true">
                  {c.image ? (
                    <img
                      src={c.image}
                      alt=""
                      loading="lazy"
                      className="cat-img"
                    />
                  ) : (
                    <i className={`bi ${c.icon}`}></i>
                  )}
                </span>

                <span className="cat-name">{c.name}</span>
                {c.count != null && (
                  <span className="cat-count">{c.count} products</span>
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Category;
