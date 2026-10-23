import { useState } from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
import img1 from "../../assets/img1.png";
const slides = [
  {
    id: "phones",
    variant: 1,
    badge: "Phone sale: save up to $200",
    title: "The new NexGeda phone is here. Trade in and save.",
    text: "Pro camera, all-day battery and 5G speed. Trade in your old phone and get up to $200 off today.",
    cta: { label: "Shop phones", to: "/category/phones" },
    ghost: { label: "Trade-in offers", to: "/deals" },
    url:img1,
    chips: [
      { value: "5G", label: "ultra fast" },
      { value: "50 MP", label: "pro camera" },
    ],
  },
  {
    id: "laptops",
    variant: 0,
    badge: "Up to 30% off",
    title: "Powerful laptops for work and play",
    text: "Fast processors, all-day battery and a two-year warranty on every model.",
    cta: { label: "Shop laptops", to: "/category/laptops" },
    ghost: { label: "View all deals", to: "/deals" },
    icon: "💻",
    chips: [
      { value: "16 GB", label: "memory" },
      { value: "12 hrs", label: "battery" },
    ],
  },
  {
    id: "audio",
    variant: 1,
    badge: "New arrivals",
    title: "Headphones that block the noise",
    text: "Active noise cancelling, 40 hours of playback and a comfortable all-day fit.",
    cta: { label: "Shop audio", to: "/category/audio" },
    ghost: { label: "See new arrivals", to: "/products" },
    icon: "🎧",
    chips: [
      { value: "40 hrs", label: "playback" },
      { value: "ANC", label: "noise cancelling" },
    ],
  },
  
];

export default function Banner() {
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const slide = slides[index];

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  return (
    <section
      className="vl-banner"
      aria-roledescription="carousel"
      aria-label="Featured offers"
    >
      {/* key makes React replay the entrance animation on every slide change */}
      <div key={slide.id} className={`vl-slide vl-slide--${slide.variant}`}>
        <span className="vl-orb vl-orb--one" aria-hidden="true" />
        <span className="vl-orb vl-orb--two" aria-hidden="true" />

        <div className="container position-relative">
          <div className="row align-items-center g-4 g-lg-5">
            {/* Text column */}
            <div className="col-12 col-lg-6 order-2 order-lg-1 text-center text-lg-start">
              <span
                className="badge rounded-pill vl-sale-badge mb-3 vl-rise"
                style={{ "--d": "0s" }}
              >
                {slide.badge}
              </span>

              <h2
                className="vl-title fw-bold mb-3 vl-rise"
                style={{ "--d": ".1s" }}
              >
                {slide.title}
              </h2>

              <p
                className="vl-text mb-4 mx-auto mx-lg-0 vl-rise"
                style={{ "--d": ".2s" }}
              >
                {slide.text}
              </p>

              <div
                className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start vl-rise"
                style={{ "--d": ".3s" }}
              >
                <Link to={slide.cta.to} className="btn btn-lg vl-btn-promo">
                  {slide.cta.label}
                </Link>
                <Link to={slide.ghost.to} className="btn btn-lg vl-btn-ghost">
                  {slide.ghost.label}
                </Link>
              </div>
            </div>

            {/* Visual column */}
            <div className="col-12 col-lg-6 order-1 order-lg-2">
              <div className="vl-visual vl-pop" aria-hidden="true">
                <span className="vl-ring" />
                {slide.url ? (
                  <img src={slide.url} alt="" className="vl-photo" />
                ) : (
                  <span className="vl-device">{slide.icon}</span>
                )}

                <div className="vl-chip vl-chip--a">
                  <strong>{slide.chips[0].value}</strong>
                  <span>{slide.chips[0].label}</span>
                </div>
                <div className="vl-chip vl-chip--b">
                  <strong>{slide.chips[1].value}</strong>
                  <span>{slide.chips[1].label}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="vl-controls container d-flex align-items-center justify-content-between">
        <div
          className="d-flex align-items-center gap-2"
          role="tablist"
          aria-label="Choose slide"
        >
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
              className={`vl-dot ${i === index ? "is-active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        <div className="d-flex gap-2">
          <button
            type="button"
            className="vl-arrow"
            onClick={prev}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            type="button"
            className="vl-arrow"
            onClick={next}
            aria-label="Next slide"
          >
            ›
          </button>
        </div>
      </div>

      {/* Progress bar: when its animation ends, the next slide shows.
          Hovering or focusing the banner pauses it. */}
      <div className="vl-progress" aria-hidden="true">
        <span key={index} className="vl-progress__bar" onAnimationEnd={next} />
      </div>
    </section>
  );
}
