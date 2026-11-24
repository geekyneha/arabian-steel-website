import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY } from "@/data/company";
import { IMAGES } from "@/data/imagery";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} style={{ "--hero-image": `url("${IMAGES.hero}")` }}>
      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>Saudi Arabia <span aria-hidden="true">·</span> Tarut</p>
        <h1>Steel products<br />and services.</h1>
        <div className={styles.bottom}>
          <p>{COMPANY.description}</p>
          <div className={styles.actions}>
            <Link to="/products" className="btn btn--light">Explore our capabilities <ArrowUpRight aria-hidden="true" /></Link>
            <Link to="/contact" className={styles.enquire}>Make an enquiry <ArrowUpRight aria-hidden="true" /></Link>
          </div>
        </div>
      </div>
      <a className={styles.scroll} href="#introduction"><ArrowDown aria-hidden="true" /> Scroll to explore</a>
      <span className={styles.caption}>Representative industrial imagery <span>—</span> illustrative</span>
    </section>
  );
}
