import { useSearchParams } from "react-router-dom";
import PageBanner from "@/components/common/PageBanner";
import ProductGrid from "@/components/common/ProductGrid";
import { searchProducts } from "@/data/products";
import { IMAGES } from "@/data/imagery";
import useDocumentTitle from "@/hooks/useDocumentTitle";

export default function SearchResults() {
  const [params] = useSearchParams();
  const q = params.get("q") ?? "";
  const results = searchProducts(q);
  useDocumentTitle("Search");

  return (
    <>
      <PageBanner title={`Results for “${q || "all capabilities"}”`} trail={[{ label: "Search" }]} image={IMAGES.process} eyebrow="Search" />
      <div className="container section">
        {results.length ? (
          <>
            <p className="lead">Found {results.length} {results.length === 1 ? "capability" : "capabilities"} matching your search.</p>
            <ProductGrid products={results} />
          </>
        ) : (
          <div className="placeholder">Nothing matches that search. Try a product or service such as structural steel, tanks or skids.</div>
        )}
      </div>
    </>
  );
}
