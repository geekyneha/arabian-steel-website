import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY } from "@/data/company";
import { MAIN_PRODUCTS } from "@/data/products";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.cta}`}>
        <div>
          <span className="eyebrow">Enquiries</span>
          <h2>Contact Arabian Steel</h2>
        </div>
        <Link to="/contact" className={`btn btn--light ${styles.ctaButton}`}>View contact details <ArrowUpRight aria-hidden="true" /></Link>
      </div>
      <div className={`container ${styles.cols}`}>
        <section className={styles.company}>
          <Link to="/" className={styles.wordmark}>ARABIAN STEEL <span>PRODUCTS FACTORY</span></Link>
          <p>{COMPANY.description}</p>
        </section>
        <section>
          <h3>Explore</h3>
          <Link to="/about">About us</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/clients">Clients</Link>
          <Link to="/career">Careers</Link>
          <Link to="/contact">Contact us</Link>
        </section>
        <section>
          <h3>Capabilities</h3>
          {MAIN_PRODUCTS.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>{product.title}</Link>
          ))}
        </section>
        <section className={styles.address}>
          <h3>Head office</h3>
          <p>{COMPANY.address}</p>
          <p>C.R. {COMPANY.crNumber}<br />VAT {COMPANY.vatNumber}</p>
        </section>
      </div>
      <div className={`container ${styles.legal}`}>
        <span>© {new Date().getFullYear()} {COMPANY.fullName}</span>
        <span>Tarut, Kingdom of Saudi Arabia</span>
        <a href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Back to top ↑</a>
      </div>
    </footer>
  );
}
