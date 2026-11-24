import PageBanner from "@/components/common/PageBanner";
import { COMPANY } from "@/data/company";
import { IMAGES } from "@/data/imagery";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import styles from "./Clients.module.css";

const INDUSTRIES = ["Oil and gas", "Power", "Water", "Industrial"];

export default function Clients() {
  useDocumentTitle("Clients");

  return (
    <>
      <PageBanner title="Industries and client information" trail={[{ label: "Clients" }]} image={IMAGES.process} eyebrow="Markets served" />
      <section className={`container ${styles.intro}`}>
        <div><span className="eyebrow">{COMPANY.fullName}</span><h2>Industrial products and services for Saudi Arabia.</h2></div>
        <p className="lead">{COMPANY.description} Client names and logos are not included because they have not been provided.</p>
      </section>
      <section className={`section ${styles.industries}`}>
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Industry coverage in company information</span><h2>Industries served</h2></div>
            <p>The company information names these sectors. Client names, logos and individual project references have not been provided.</p>
          </div>
          <div className={styles.rows}>
            {INDUSTRIES.map((industry, index) => <div key={industry}><span>0{index + 1}</span><h3>{industry}</h3></div>)}
          </div>
          <p className={styles.note}>Client list and logos: information not provided.</p>
        </div>
      </section>
    </>
  );
}
