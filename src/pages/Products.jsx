import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageBanner from "@/components/common/PageBanner";
import { MAIN_PRODUCTS } from "@/data/products";
import { IMAGES } from "@/data/imagery";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import useReveal from "@/hooks/useReveal";
import styles from "./Products.module.css";

const productImages = {
  structural: IMAGES.structure,
  tanks: IMAGES.tanks,
  skids: IMAGES.process,
  "process-equipment": IMAGES.engineering,
  "weld-overlay": IMAGES.workshop,
  "plant-maintenance": IMAGES.maintenance,
};

export default function Products() {
  useDocumentTitle("Products & Services");
  const reveal = useReveal();

  return (
    <>
      <PageBanner title="Products & Services" trail={[{ label: "Products & Services" }]} image={IMAGES.structure} eyebrow="Our capabilities" />
      <section className={`container ${styles.intro}`}>
        <span className="eyebrow">Products and services</span>
        <p className="lead">Arabian Steel delivers products and services across six core divisions. Engineering, fabrication, testing and site execution are shaped around client requirements.</p>
      </section>
      <section className={`section ${styles.catalog}`}>
        <div className={`container ${reveal.className}`} ref={reveal.ref}>
          {MAIN_PRODUCTS.map((product, index) => (
            <article key={product.id} className={styles.row}>
              <Link to={`/products/${product.id}`} className={styles.image}>
                <img src={productImages[product.id]} alt="" loading="lazy" />
                <span>0{index + 1}</span>
              </Link>
              <div className={styles.copy}>
                <span className="eyebrow">Division 0{index + 1}</span>
                <h2>{product.title}</h2>
                <p className="lead">{product.summary}</p>
                <ul>
                  {product.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <Link to={`/products/${product.id}`} className="text-link">Explore this capability <ArrowUpRight aria-hidden="true" /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className={styles.cta}>
        <div className="container">
          <span className="eyebrow">Product enquiries</span>
          <h2>Enquire about products and services</h2>
          <Link to="/contact" className="btn btn--light">Contact Arabian Steel <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  );
}
