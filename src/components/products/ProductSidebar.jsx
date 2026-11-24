import { NavLink } from "react-router-dom";
import { MAIN_PRODUCTS, SKID_PRODUCTS } from "@/data/products";
import styles from "./ProductSidebar.module.css";

const cls = (sub) => ({ isActive }) => `${sub ? styles.sub : ""} ${isActive ? styles.active : ""}`;

/** Skids sub-pages expand only when a skid page is open. */
export default function ProductSidebar({ product }) {
  const activeParent = product.parent ?? product.id;
  return (
    <aside className={styles.side} aria-label="Products">
      {MAIN_PRODUCTS.map((p) => (
        <div key={p.id}>
          <NavLink to={`/products/${p.id}`} end className={cls(false)}>{p.title}</NavLink>
          {p.id === "skids" && activeParent === "skids" &&
            SKID_PRODUCTS.map((s) => (
              <NavLink key={s.id} to={`/products/${s.id}`} className={cls(true)}>{s.title}</NavLink>
            ))}
        </div>
      ))}
    </aside>
  );
}
