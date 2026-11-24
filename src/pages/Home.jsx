import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "@/components/home/Hero";
import { COMPANY, VISION_MISSION } from "@/data/company";
import { MAIN_PRODUCTS } from "@/data/products";
import { IMAGES } from "@/data/imagery";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import styles from "./Home.module.css";

const productImages = {
  structural: IMAGES.structure,
  tanks: IMAGES.tanks,
  skids: IMAGES.process,
  "process-equipment": IMAGES.engineering,
  "weld-overlay": IMAGES.workshop,
  "plant-maintenance": IMAGES.maintenance,
};

const TECHNICAL_NOTES = {
  structural: [
    ["Engineering", "In-house engineering team working to international codes and standards."],
    ["Processing", "CNC machines linked directly to engineering for accurate processing."],
    ["Scope", "Design, connection design, detailing, fabrication, surface treatment, supply and delivery."],
  ],
  tanks: [
    ["Design and execution", "Engineering support from pre-bid design through project execution."],
    ["Codes stated", "API, ASME, AWWA and UL."],
    ["Configurations", "Cone roof, dome roof, internal and external floating roof, and open top tanks."],
  ],
  skids: [
    ["Integration", "Designed, developed, manufactured, installed and integrated."],
    ["Verification", "Skids are integrated and tested before shipment."],
    ["Applications", "Upstream, midstream and downstream oil and gas."],
  ],
  "process-equipment": [
    ["Engineering and fabrication", "Complete design, detail engineering and fabrication."],
    ["Testing and treatment", "Non-destructive testing (NDT) and post-weld heat treatment (PWHT)."],
    ["Equipment", "Pressure vessels, shell and tube heat exchangers, tanks, ducts, stacks and piping."],
  ],
  "weld-overlay": [
    ["Application", "Weld overlay cladding for vessel internal surfaces, nozzles and pipework."],
  ],
  "plant-maintenance": [
    ["Site scope", "Design, fabrication, assembly and erection at site for shutdown and maintenance activities."],
    ["Repair references", "Pressure vessel repair and modification (ASME “R” stamp); storage tank repair and modification (API 653)."],
    ["Services", "Heat exchanger maintenance and repair; air cooler, column, pipeline, flare and stack work."],
  ],
};

export default function Home() {
  useDocumentTitle();
  const [selectedId, setSelectedId] = useState(MAIN_PRODUCTS[0].id);
  const selectedProduct = MAIN_PRODUCTS.find((product) => product.id === selectedId) ?? MAIN_PRODUCTS[0];

  return (
    <>
      <Hero />

      <section id="introduction" className={`container ${styles.introduction}`}>
        <div className={styles.introLead}>
          <span className="eyebrow">Company profile</span>
          <h2>{COMPANY.fullName}</h2>
        </div>
        <div className={styles.introCopy}>
          <p className="lead">{COMPANY.description}</p>
          <p>{VISION_MISSION.mission}</p>
          <Link to="/about" className="text-link">Company information <ArrowUpRight aria-hidden="true" /></Link>
        </div>
        <div className={styles.companyFacts}>
          <div><span>Head office</span><p>{COMPANY.address}</p></div>
          <div><span>Commercial registration</span><p>{COMPANY.crNumber}</p></div>
          <div><span>VAT number</span><p>{COMPANY.vatNumber}</p></div>
        </div>
      </section>

      <section className={`section section--alt ${styles.products}`}>
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Products and services</span><h2>Six operating divisions</h2></div>
            <p>{COMPANY.description}</p>
          </div>
          <div className={styles.productLayout}>
            <nav className={styles.productNav} aria-label="Product divisions">
              {MAIN_PRODUCTS.map((product) => (
                <button
                  type="button"
                  key={product.id}
                  className={selectedProduct.id === product.id ? styles.productSelected : ""}
                  aria-pressed={selectedProduct.id === product.id}
                  onClick={() => setSelectedId(product.id)}
                >
                  <span>{product.title}</span><ArrowUpRight aria-hidden="true" />
                </button>
              ))}
              <Link to="/products" className={styles.productIndex}>All products &amp; services <ArrowUpRight aria-hidden="true" /></Link>
            </nav>
            <article className={styles.productDetail}>
              <img src={productImages[selectedProduct.id]} alt={`${selectedProduct.title}; representative industrial imagery`} loading="lazy" />
              <div className={styles.detailBody}>
                <div className={styles.detailHeading}>
                  <div><span className="eyebrow">{selectedProduct.subtitle}</span><h3>{selectedProduct.title}</h3></div>
                  <Link to={`/products/${selectedProduct.id}`} aria-label={`View ${selectedProduct.title}`}><ArrowUpRight aria-hidden="true" /></Link>
                </div>
                <p className={styles.summary}>{selectedProduct.summary ?? selectedProduct.intro[0]}</p>
                <ul className={styles.detailList}>
                  {selectedProduct.items.slice(0, 5).map((item) => <li key={item}>{item}</li>)}
                </ul>
                <Link to={`/products/${selectedProduct.id}`} className="text-link">View division details <ArrowUpRight aria-hidden="true" /></Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={`section ${styles.technical}`}>
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Engineering and execution</span><h2>Scope, materials and standards</h2></div>
            <p>Scope, product names and code references below are taken from the current product information.</p>
          </div>
          <div className={styles.technicalLayout}>
            <div className={styles.technicalImage}>
              <img src={IMAGES.engineering} alt="Representative industrial engineering image" loading="lazy" />
              <span>Representative imagery</span>
            </div>
            <div>
              {MAIN_PRODUCTS.map((product) => (
                <details className={styles.technicalItem} key={product.id}>
                  <summary><span>{product.title}</span><span aria-hidden="true">+</span></summary>
                  <p>{product.intro.join(" ")}</p>
                  <dl>
                    {TECHNICAL_NOTES[product.id].map(([label, value]) => (
                      <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
                    ))}
                  </dl>
                  <Link to={`/products/${product.id}`} className="text-link">Product details <ArrowUpRight aria-hidden="true" /></Link>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.market}`}>
        <div className="container">
          <div className={styles.marketIntro}>
            <span className="eyebrow">Markets and company direction</span>
            <h2>Serving Saudi industry.</h2>
            <p>{VISION_MISSION.vision}</p>
          </div>
          <div className={styles.marketDetails}>
            <div><span>Industries referenced in current product information</span><p>Oil and gas · Power · Water · Industrial</p></div>
            <div><span>Quality approach</span><p>Strict quality control, engineering competence and a customer-focused approach.</p></div>
            <Link to="/about" className="text-link">About the company <ArrowUpRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
