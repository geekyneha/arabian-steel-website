import { ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import PageBanner from "@/components/common/PageBanner";
import ProductSidebar from "@/components/products/ProductSidebar";
import { getProductById, MAIN_PRODUCTS, SKID_PRODUCTS } from "@/data/products";
import { IMAGES } from "@/data/imagery";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import useReveal from "@/hooks/useReveal";
import NotFound from "./NotFound";
import styles from "./ProductDetail.module.css";

const productImages = {
  structural: IMAGES.structure,
  tanks: IMAGES.tanks,
  skids: IMAGES.process,
  "process-equipment": IMAGES.engineering,
  "weld-overlay": IMAGES.workshop,
  "plant-maintenance": IMAGES.maintenance,
};

export default function ProductDetail() {
  const { productId } = useParams();
  const product = getProductById(productId);
  const reveal = useReveal();
  useDocumentTitle(product?.title);
  if (!product) return <NotFound />;

  const trail = [{ label: "Products & Services", to: "/products" }];
  if (product.parent) trail.push({ label: getProductById(product.parent)?.title ?? "Products", to: `/products/${product.parent}` });
  trail.push({ label: product.title });
  const rootProduct = product.parent ? getProductById(product.parent) : product;
  const related = MAIN_PRODUCTS.filter((item) => item.id !== rootProduct.id).slice(0, 3);
  const skidDetails = rootProduct.id === "skids" ? SKID_PRODUCTS : [];

  return (
    <>
      <PageBanner title={product.title} trail={trail} image={productImages[rootProduct.id]} eyebrow={product.subtitle} />
      <section className={`container ${styles.overview} ${reveal.className}`} ref={reveal.ref}>
        <ProductSidebar product={product} />
        <div className={styles.content}>
          <span className="eyebrow">{product.subtitle}</span>
          {product.intro.map((text, index) => <p key={text} className={index === 0 ? "lead" : ""}>{text}</p>)}
          <div className={styles.image}><img src={productImages[rootProduct.id]} alt={`${product.title} industrial fabrication`} loading="lazy" /></div>
          <div className={styles.specifications}>
            <span className="eyebrow">{product.items.length > 1 ? "Products & scope" : "Service scope"}</span>
            <h2>{product.parent ? "In this range" : "Products, services and applications"}</h2>
            <table>
              <thead><tr><th scope="col">No.</th><th scope="col">Product / service</th></tr></thead>
              <tbody>{product.items.map((item, index) => <tr key={item}><td>{String(index + 1).padStart(2, "0")}</td><td>{item}</td></tr>)}</tbody>
            </table>
          </div>
          {skidDetails.length > 0 && (
            <section className={styles.subProducts}>
              <span className="eyebrow">Skid product details</span>
              <h2>Specialized skid systems</h2>
              <div>{skidDetails.map((item) => (
                <Link key={item.id} to={`/products/${item.id}`}>
                  <span><strong>{item.title}</strong><small>{item.summary ?? item.intro[0]}</small></span>
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              ))}</div>
            </section>
          )}
          <div className={styles.productCta}>
            <div><span className="eyebrow">Product enquiry</span><h2>Contact Arabian Steel</h2></div>
            <Link to="/contact" className="btn">View contact information <ArrowUpRight aria-hidden="true" /></Link>
          </div>
          {related.length > 0 && (
            <div className={styles.related}>
              <span className="eyebrow">Related capabilities</span>
              <div>{related.map((item) => <Link key={item.id} to={`/products/${item.id}`}>{item.title}<ArrowUpRight aria-hidden="true" /></Link>)}</div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
