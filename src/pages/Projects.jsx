import { useMemo, useState } from "react";
import PageBanner from "@/components/common/PageBanner";
import { MAIN_PRODUCTS } from "@/data/products";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import styles from "./Projects.module.css";

const PROJECTS = [];
const FILTERS = ["All", ...MAIN_PRODUCTS.map((product) => product.title)];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects = useMemo(
    () => PROJECTS.filter((project) => activeFilter === "All" || project.category === activeFilter),
    [activeFilter],
  );
  useDocumentTitle("Projects");

  return (
    <>
      <PageBanner title="Projects" trail={[{ label: "Projects" }]} eyebrow="Project information" />
      <section className={`container ${styles.intro}`}>
        <div>
          <span className="eyebrow">Project directory</span>
          <h2>Project profiles</h2>
        </div>
        <p className="lead">Arabian Steel products and services include structural steel, storage tanks, skids, process equipment, weld overlay cladding and plant maintenance. Project names and details have not been provided for publication.</p>
      </section>
      <section className={`section ${styles.listing}`}>
        <div className="container">
          <div className={styles.filters} aria-label="Filter project profiles">
            <span>Filter by capability</span>
            <div role="group" aria-label="Project category">
              {FILTERS.map((filter) => (
                <button key={filter} type="button" className={activeFilter === filter ? styles.selected : ""} aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>
                  {filter}
                </button>
              ))}
            </div>
          </div>
          {filteredProjects.length ? (
            <div className={styles.projectGrid}>{filteredProjects.map((project) => <article key={project.id}>{project.title}</article>)}</div>
          ) : (
            <div className={styles.empty}>
              <span>{activeFilter === "All" ? "Project profiles" : activeFilter}</span>
              <h3>No approved project profiles have been published yet.</h3>
              <p>No project records are currently available.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
