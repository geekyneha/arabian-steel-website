import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { getProductById } from "@/data/products";
import { IMAGES } from "@/data/imagery";
import styles from "./ProductGrid.module.css";

const productImages = {
  structural: IMAGES.structure,
  tanks: IMAGES.tanks,
  skids: IMAGES.process,
  "process-equipment": IMAGES.engineering,
  "weld-overlay": IMAGES.workshop,
  "plant-maintenance": IMAGES.maintenance,
};

export default function ProductGrid({ products }) {
  return (
    <div className={styles.results}>
      {products.map((product, index) => {
        const root = product.parent ? getProductById(product.parent) : product;
        return (
          <Link key={product.id} to={`/products/${product.id}`} className={styles.result}>
            <img src={productImages[root.id]} alt="" loading="lazy" />
            <span className={styles.number}>0{index + 1}</span>
            <div><h2>{product.title}</h2><p>{product.summary ?? product.intro[0]}</p></div>
            <ArrowUpRight aria-hidden="true" />
          </Link>
        );
      })}
    </div>
  );
}
