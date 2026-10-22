import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./MainHeader.css";

const NAV_LINKS = [
  { label: "Home", href: "/home" },
  { label: "Shop", href: "/shop" },
  { label: "Categories", href: "/categories" },
  { label: "Deals", href: "/deals" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function MainHeader({ cartCount = 0 }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the small-screen menu when the page changes or Escape is pressed
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // "/" also counts as Home
  const isActive = (href) =>
    pathname === href ||
    pathname.startsWith(href + "/") ||
    (href === "/home" && pathname === "/");

  const handleSearch = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (q) navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <header className="main-header sticky-top">
      <div className="container">
        {/* Row 1: brand + icons (+ menu button on small screens) */}
        <div className="d-flex align-items-center justify-content-between py-3">
          <Link
            to="/"
            className="mh-brand d-flex align-items-center gap-3 text-decoration-none"
          >
            <span className="mh-logo" aria-hidden="true">
              <i className="bi bi-lightning-charge"></i>
            </span>
            <span className="d-flex flex-column">
              <span className="mh-name">TechNova</span>
              <span className="mh-tagline d-none d-sm-block">
                Technology Store
              </span>
            </span>
          </Link>

          <div className="d-flex align-items-center gap-1">
            <Link to="/login" className="mh-icon-btn" aria-label="Account">
              <i className="bi bi-person"></i>
            </Link>
            <Link
              to="/cart"
              className="mh-icon-btn position-relative"
              aria-label={`Cart, ${cartCount} items`}
            >
              <i className="bi bi-cart3"></i>
              {cartCount > 0 && <span className="mh-badge">{cartCount}</span>}
            </Link>
            <button
              type="button"
              className="mh-icon-btn d-lg-none"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mh-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`}></i>
            </button>
          </div>
        </div>

        {/* Row 2: links + search.
            Hidden behind the menu button on small screens, always visible on large screens. */}
        <div
          id="mh-menu"
          className={`collapse d-lg-block ${menuOpen ? "show" : ""}`}
        >
          <hr className="mh-divider m-0" />

          <div className="row align-items-center g-2 py-2">
            <div className="col-12 col-lg-auto">
              <nav aria-label="Main navigation">
                <ul className="list-unstyled d-flex flex-column flex-lg-row gap-lg-1 m-0 p-0">
                  {NAV_LINKS.map((link) => {
                    const active = isActive(link.href);
                    return (
                      <li key={link.href}>
                        <Link
                          to={link.href}
                          className={`mh-link ${active ? "is-active" : ""}`}
                          aria-current={active ? "page" : undefined}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            <div className="col-12 col-lg-5 ms-lg-auto pb-2 pb-lg-0">
              <form className="mh-search" role="search" onSubmit={handleSearch}>
                <i
                  className="bi bi-search mh-search-icon"
                  aria-hidden="true"
                ></i>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search smartphones, laptops, accessories..."
                  aria-label="Search products"
                />
                <button
                  type="submit"
                  className="mh-search-btn"
                  aria-label="Search"
                >
                  <i className="bi bi-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
