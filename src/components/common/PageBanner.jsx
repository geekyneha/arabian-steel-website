import { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./PageBanner.module.css";

/** trail: [{ label, to? }] shown above the page title. */
export default function PageBanner({ title, trail = [], image, eyebrow = "Arabian Steel Products Factory" }) {
  return (
    <section className={`${styles.banner} ${image ? styles.withImage : ""}`} style={image ? { "--banner-image": `url("${image}")` } : undefined}>
      <div className="container">
        <nav aria-label="Breadcrumb" className={styles.trail}>
          <Link to="/">Overview</Link>
          {trail.map((t) => (
            <Fragment key={t.label}> &gt; {t.to ? <Link to={t.to}>{t.label}</Link> : t.label}</Fragment>
          ))}
        </nav>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1>{title}</h1>
        </div>
      </div>
      <span className={styles.index} aria-hidden="true">ARABIAN STEEL <span>—</span> SAUDI ARABIA</span>
    </section>
  );
}
