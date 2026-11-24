import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import PageBanner from "@/components/common/PageBanner";
import { CAREER_CATEGORIES } from "@/data/company";
import { IMAGES } from "@/data/imagery";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import styles from "./Career.module.css";

const OPENINGS = [];

export default function Career() {
  useDocumentTitle("Careers");
  const [keywords, setKeywords] = useState("");
  const [category, setCategory] = useState("");
  const [filters, setFilters] = useState({ keywords: "", category: "" });
  const [searched, setSearched] = useState(false);
  const matches = useMemo(() => OPENINGS.filter((opening) => {
    const text = `${opening.title} ${opening.category} ${opening.location}`.toLowerCase();
    return text.includes(filters.keywords.toLowerCase()) && (!filters.category || opening.category === filters.category);
  }), [filters]);

  const reset = () => {
    setKeywords("");
    setCategory("");
    setFilters({ keywords: "", category: "" });
    setSearched(false);
  };

  const submit = (event) => {
    event.preventDefault();
    setFilters({ keywords: keywords.trim(), category });
    setSearched(true);
  };

  return (
    <>
      <PageBanner title="Careers" trail={[{ label: "Careers" }]} image={IMAGES.maintenance} eyebrow="Career information" />
      <section className={`container ${styles.intro}`}>
        <div><span className="eyebrow">Careers at Arabian Steel</span><h2>Current opportunities</h2></div>
        <p className="lead">No current vacancy information has been provided. Available positions will be listed here when confirmed.</p>
      </section>
      <section className={styles.jobs}>
        <div className="container">
          <div className={styles.heading}>
            <div><span className="eyebrow">Opportunities</span><h2>Search current openings</h2></div>
            <p>Search current openings by role keywords or area of work.</p>
          </div>
          <form className={styles.searchForm} onSubmit={submit}>
            <label>Keywords
              <input aria-label="Keywords" placeholder="Job title or keyword" value={keywords} onChange={(event) => setKeywords(event.target.value)} />
            </label>
            <label>Area of work
              <select aria-label="Area of work" value={category} onChange={(event) => setCategory(event.target.value)}>
                <option value="">All areas</option>
                {CAREER_CATEGORIES.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
            </label>
            <div className={styles.actions}>
              <button className="btn" type="submit"><Search aria-hidden="true" /> Search roles</button>
              <button className={`btn btn--outline ${styles.clear}`} type="button" onClick={reset}><X aria-hidden="true" /> Clear</button>
            </div>
          </form>
          <div className={styles.results} aria-live="polite">
            {matches.length ? matches.map((opening) => <article key={opening.id}>{opening.title}</article>) : (
              <>
                <span>{searched ? "Search results" : "Current openings"}</span>
                <h3>No open positions are listed at this time.</h3>
                <p>Please check back later for new opportunities.</p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
