import { ArrowUpRight } from "lucide-react";
import { Link, NavLink, useParams } from "react-router-dom";
import PageBanner from "@/components/common/PageBanner";
import { COMPANY, VISION_MISSION } from "@/data/company";
import { IMAGES } from "@/data/imagery";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import useReveal from "@/hooks/useReveal";
import styles from "./About.module.css";

const TABS = ["overview", "vision", "mission"];
const cap = (text) => text[0].toUpperCase() + text.slice(1);

export default function About() {
  const { tab } = useParams();
  const current = TABS.includes(tab) ? tab : "overview";
  const reveal = useReveal();
  useDocumentTitle("About us");

  return (
    <>
      <PageBanner title="About Arabian Steel" trail={[{ label: "About us" }]} image={IMAGES.workshop} eyebrow="Company information" />
      <section className={`container ${styles.overview} ${reveal.className}`} ref={reveal.ref}>
        <div>
          <span className="eyebrow">{COMPANY.fullName}</span>
          <h2>Structural steel and industrial services in Saudi Arabia.</h2>
        </div>
        <div className={styles.overviewCopy}>
          <p className="lead">{COMPANY.description}</p>
          <p>{VISION_MISSION.mission}</p>
          <Link to="/contact" className="text-link">Talk to Arabian Steel <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className={styles.imageBand}>
        <img src={IMAGES.structure} alt="Steel fabrication at an industrial construction site" loading="lazy" />
        <span>Representative industrial imagery <span>—</span> illustrative</span>
      </section>

      <section className={`section ${styles.direction}`}>
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Our direction</span><h2>Principles that guide the work.</h2></div>
            <p>Our vision and mission shape how we serve clients and contribute to Saudi industry.</p>
          </div>
          <div className={styles.tabs} role="tablist" aria-label="Company information">
            {TABS.map((item) => (
              <NavLink key={item} to={item === "overview" ? "/about" : `/about/${item}`} className={current === item ? styles.on : ""} role="tab" aria-selected={current === item}>
                {cap(item)}
              </NavLink>
            ))}
          </div>
          <article className={styles.statement}>
            <span>{current === "overview" ? "01" : current === "vision" ? "02" : "03"}</span>
            <div>
              <h3>Our {cap(current === "overview" ? "mission" : current)}</h3>
              <p>{VISION_MISSION[current === "overview" ? "mission" : current]}</p>
            </div>
          </article>
        </div>
      </section>

      <section className={`section section--dark ${styles.registered}`}>
        <div className={`container ${styles.registeredInner}`}>
          <div>
            <span className="eyebrow">Company information</span>
            <h2>Rooted in<br />the Kingdom.</h2>
          </div>
          <div className={styles.details}>
            <div><span>Registered name</span><p>{COMPANY.fullName}</p></div>
            <div><span>Head office</span><p>{COMPANY.address}</p></div>
            <div><span>Commercial registration</span><p>{COMPANY.crNumber}</p></div>
            <div><span>VAT number</span><p>{COMPANY.vatNumber}</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
