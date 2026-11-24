import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, Search, X } from "lucide-react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { COMPANY } from "@/data/company";
import { MAIN_PRODUCTS } from "@/data/products";
import styles from "./Header.module.css";

const linkClass = ({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  const onSearch = (event) => {
    event.preventDefault();
    const value = query.trim();
    if (!value) return;
    navigate(`/search?q=${encodeURIComponent(value)}`);
    setMobileOpen(false);
  };

  const closeMenu = () => {
    setMobileOpen(false);
    setProductsOpen(false);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className={styles.meta}>
        <div className={`container ${styles.metaInner}`}>
          <span>Saudi Arabia <span aria-hidden="true">/</span> Tarut</span>
          <span>{COMPANY.fullName}</span>
        </div>
      </div>
      <header className={styles.header}>
        <div className={`container ${styles.inner}`}>
          <Link to="/" className={styles.logo} aria-label={`${COMPANY.fullName} home`} onClick={closeMenu}>
            <span className={styles.mark} aria-hidden="true">AS</span>
            <span className={styles.brand}>
              <strong>ARABIAN STEEL</strong>
              <small>PRODUCTS FACTORY</small>
            </span>
          </Link>
          <button
            className={styles.burger}
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="main-nav"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
          <nav id="main-nav" className={`${styles.nav} ${mobileOpen ? styles.open : ""}`} aria-label="Main navigation">
            <NavLink to="/" end className={linkClass} onClick={closeMenu}>Home</NavLink>
            <NavLink to="/about" className={linkClass} onClick={closeMenu}>About us</NavLink>
            <div className={styles.item} onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
              <button
                type="button"
                className={`${styles.link} ${styles.trigger} ${location.pathname.startsWith("/products") ? styles.active : ""}`}
                aria-expanded={productsOpen}
                aria-haspopup="true"
                aria-controls="products-menu"
                onClick={() => setProductsOpen((value) => !value)}
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    setProductsOpen(false);
                    event.currentTarget.blur();
                  }
                }}
              >
                Products &amp; Services <ChevronDown aria-hidden="true" />
              </button>
              <div id="products-menu" className={`${styles.dropdown} ${productsOpen ? styles.dropdownOpen : ""}`}>
                <div className={styles.menuIntro}>
                  <span className="eyebrow">Our expertise</span>
                  <p>Integrated steel solutions, from engineering through fabrication and site services.</p>
                  <Link to="/products" className={styles.allLink} onClick={closeMenu}>Explore all capabilities <ArrowUpRight aria-hidden="true" /></Link>
                </div>
                <div className={styles.menuList}>
                  {MAIN_PRODUCTS.map((product, index) => (
                    <Link key={product.id} to={`/products/${product.id}`} onClick={closeMenu}>
                      <span className={styles.menuNumber}>0{index + 1}</span>
                      <span>{product.title}</span>
                      <ArrowUpRight aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <NavLink to="/projects" className={linkClass} onClick={closeMenu}>Projects</NavLink>
            <NavLink to="/clients" className={linkClass} onClick={closeMenu}>Clients</NavLink>
            <NavLink to="/career" className={linkClass} onClick={closeMenu}>Careers</NavLink>
            <NavLink to="/contact" className={`${linkClass({ isActive: location.pathname === "/contact" })} ${styles.contactLink}`} onClick={closeMenu}>Contact us <ArrowUpRight aria-hidden="true" /></NavLink>
            <form className={styles.search} onSubmit={onSearch} role="search">
              <input aria-label="Search products and services" placeholder="Search" value={query} onChange={(event) => setQuery(event.target.value)} />
              <button type="submit" aria-label="Submit search"><Search aria-hidden="true" /></button>
            </form>
          </nav>
        </div>
      </header>
    </>
  );
}
