import React from "react";
import "./MainFooter.css";

function MainFooter () {
  return (
    <footer className="nexgeda-footer bg-white text-dark pt-5 border-top">
      <div className="container pb-4">
        <div className="row g-4">
          {/* Brand Column */}
          <div className="col-12 col-lg-4 mb-3 mb-lg-0">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div
                className="logo-icon bg-primary text-white d-flex align-items-center justify-content-center rounded fw-bold"
                style={{ width: "36px", height: "36px" }}
              >
                <i className="bi bi-lightning-charge"></i>
              </div>
              <div>
                <h2 className="h5 text-dark fw-bold mb-0 lh-1">NexGeda</h2>
                <small
                  className="text-muted tracking-wide"
                  style={{ fontSize: "0.75rem" }}
                >
                  Technology Store
                </small>
              </div>
            </div>
            <p className="text-secondary small mb-4">
              Your ultimate destination for cutting-edge technology, premium
              audio gear, and smart devices that elevate your digital lifestyle.
            </p>
            <div className="input-group bg-light rounded border border-light-subtle overflow-hidden">
              <input
                type="email"
                className="form-control bg-transparent border-0 text-dark shadow-none small"
                placeholder="Enter your email"
              />
              <button
                className="btn bg-orange text-white fw-semibold px-3 small"
                type="button"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-4 col-lg-2">
            <h5 className="text-dark fs-6 fw-semibold mb-3">Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a
                  href="#home"
                  className="text-secondary text-decoration-none small"
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#shop"
                  className="text-secondary text-decoration-none small"
                >
                  Shop
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#categories"
                  className="text-secondary text-decoration-none small"
                >
                  Categories
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#deals"
                  className="text-secondary text-decoration-none small"
                >
                  Deals
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="col-6 col-md-4 col-lg-2">
            <h5 className="text-dark fs-6 fw-semibold mb-3">Customer Care</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a
                  href="#about"
                  className="text-secondary text-decoration-none small"
                >
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#contact"
                  className="text-secondary text-decoration-none small"
                >
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#shipping"
                  className="text-secondary text-decoration-none small"
                >
                  Shipping & Returns
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#faq"
                  className="text-secondary text-decoration-none small"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-md-4 col-lg-4">
            <h5 className="text-dark fs-6 fw-semibold mb-3">Connect With Us</h5>
            <p className="text-secondary small mb-2">
              Shegger, Oromia, Ethiopia
            </p>
            <p className="text-secondary small mb-2">support@nexgeda.com</p>
            <p className="text-secondary small mb-3">+251 900 000 000</p>
            <div className="d-flex gap-2">
              <a
                href="#facebook"
                className="social-icon bg-light text-dark rounded-circle d-flex align-items-center justify-content-center text-decoration-none border"
                style={{ width: "32px", height: "32px" }}
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="#instagram"
                className="social-icon bg-light text-dark rounded-circle d-flex align-items-center justify-content-center text-decoration-none border"
                style={{ width: "32px", height: "32px" }}
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="#telegram"
                className="social-icon bg-light text-dark rounded-circle d-flex align-items-center justify-content-center text-decoration-none border"
                style={{ width: "32px", height: "32px" }}
              >
                <i className="bi bi-telegram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-top py-3 text-center bg-light">
        <p className="text-muted small mb-0">
          &copy; {new Date().getFullYear()} NexGeda Technology Store. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default MainFooter;


