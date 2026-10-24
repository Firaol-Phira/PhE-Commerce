import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Show.css";
import imgs1 from "../../assets/img1.png";
import imgs2 from "../../assets/img2.png";

// Sample data. Replace with products from your API later.
// Use `image: "/img/phone.png"` to show a real picture instead of the emoji.
const SAMPLE_PRODUCTS = [
  {
    id: 1,
    name: "NexGeda Phone",
    category: "Smartphones",
    icon: "📱",
    image: imgs1,
    price: 699,
    oldPrice: 799,
    rating: 4.7,
    reviews: 1284,
    badge: "New",
  },
  {
    id: 2,
    name: "Laptop",
    category: "Laptops",
    image: imgs2,
    icon: "💻",
    price: 949,
    oldPrice: 1099,
    rating: 4.6,
    reviews: 864,
    badge: "-14%",
  },
  {
    id: 3,
    name: "NexGeda Headphones",
    category: "Audio",
    icon: "🎧",
    price: 199,
    oldPrice: 259,
    rating: 4.8,
    reviews: 3412,
    badge: "Best seller",
  },
  {
    id: 4,
    name: "Pulse Smartwatch",
    category: "Wearables",
    icon: "⌚",
    price: 179,
    oldPrice: 229,
    rating: 4.5,
    reviews: 2103,
    badge: "-22%",
  },
  {
    id: 5,
    name: "Vector Console",
    category: "Gaming",
    icon: "🎮",
    price: 449,
    rating: 4.9,
    reviews: 951,
    badge: "New",
  },
  {
    id: 6,
    name: "Smart Speaker",
    category: "Smart home",
    icon: "🔊",
    price: 89,
    oldPrice: 119,
    rating: 4.4,
    reviews: 678,
    badge: "-25%",
  },
  {
    id: 7,
    name: "Frame 4K Camera",
    category: "Cameras",
    icon: "📷",
    price: 529,
    rating: 4.6,
    reviews: 412,
  },
  {
    id: 8,
    name: "Tab S Tablet",
    category: "Tablets",
    icon: "📲",
    price: 379,
    oldPrice: 449,
    rating: 4.5,
    reviews: 733,
    badge: "-16%",
  },
];

function Show({
  title = "Featured products",
  products = SAMPLE_PRODUCTS,
  onAddToCart = () => {},
}) {
  const trackRef = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: false });
  const [addedId, setAddedId] = useState(null);

  // Enable or disable the arrows depending on the scroll position
  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setEdge({
      start: el.scrollLeft <= 2,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2,
    });
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges, products]);

  // Scroll by exactly one card (plus the gap)
  const scrollByCard = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".sc-card");
    const gap = parseFloat(getComputedStyle(el).columnGap) || 16;
    const step = card ? card.offsetWidth + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  const handleAdd = (product) => {
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId((id) => (id === product.id ? null : id)), 1600);
  };

  return (
    <section className="sc py-5" aria-label={title}>
      <div className="container">
        {/* Title + arrows */}
        <div className="d-flex align-items-center justify-content-between mb-4 gap-3">
          <h2 className="sc-title m-0">{title}</h2>

          <div className="d-flex gap-2">
            <button
              type="button"
              className="sc-arrow"
              onClick={() => scrollByCard(-1)}
              disabled={edge.start}
              aria-label="Previous products"
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <button
              type="button"
              className="sc-arrow"
              onClick={() => scrollByCard(1)}
              disabled={edge.end}
              aria-label="Next products"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Scrolling track */}
        <div
          ref={trackRef}
          className="sc-track d-flex"
          onScroll={updateEdges}
          tabIndex={0}
          role="region"
          aria-label={`${title} list, scroll sideways`}
        >
          {products.map((p, i) => (
            <article key={p.id} className="sc-card" style={{ "--i": i }}>
              <Link
                to={`/product/${p.id}`}
                className="sc-media"
                aria-label={p.name}
              >
                {p.badge && <span className="sc-badge">{p.badge}</span>}
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="sc-img"
                  />
                ) : (
                  <span className="sc-emoji" aria-hidden="true">
                    {p.icon}
                  </span>
                )}
              </Link>

              <div className="sc-body">
                <div className="d-flex justify-content-between align-items-start gap-2">
                  <div>
                    <Link to={`/product/${p.id}`} className="sc-name">
                      {p.name}
                    </Link>
                    <div className="sc-category">{p.category}</div>
                  </div>
                  <div className="sc-rating" title={`${p.rating} out of 5`}>
                    <i className="bi bi-star-fill"></i> {p.rating}
                  </div>
                </div>

                <div className="sc-price-row">
                  <span className="sc-price">${p.price.toLocaleString()}</span>
                  {p.oldPrice && (
                    <s className="sc-old">${p.oldPrice.toLocaleString()}</s>
                  )}
                </div>

                <button
                  type="button"
                  className={`sc-add ${addedId === p.id ? "is-added" : ""}`}
                  onClick={() => handleAdd(p)}
                >
                  {addedId === p.id ? (
                    <>
                      <i className="bi bi-check2"></i> Added
                    </>
                  ) : (
                    "Add to cart"
                  )}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Show;
