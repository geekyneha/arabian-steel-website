import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import PageBanner from "@/components/common/PageBanner";
import { COMPANY } from "@/data/company";
import { IMAGES } from "@/data/imagery";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import styles from "./Contact.module.css";

export default function Contact() {
  useDocumentTitle("Contact us");
  const [submitted, setSubmitted] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setSubmitted(true);
  };

  return (
    <>
      <PageBanner title="Contact Arabian Steel" trail={[{ label: "Contact us" }]} image={IMAGES.process} eyebrow="Contact information" />
      <section className={`container ${styles.contact}`}>
        <div className={styles.details}>
          <span className="eyebrow">Enquiry details</span>
          <h2>Share your requirements.</h2>
          <p className="lead">Use the form to prepare an enquiry. It validates in your browser and does not send submissions yet.</p>
          <div className={styles.address}>
            <span>Head office</span>
            <p>{COMPANY.fullName}<br />{COMPANY.address}</p>
          </div>
          <div className={styles.registration}>
            <p><span>Commercial registration</span>{COMPANY.crNumber}</p>
            <p><span>VAT number</span>{COMPANY.vatNumber}</p>
          </div>
          <p className={styles.contactPlaceholder}>Email and telephone details will be added when confirmed.</p>
        </div>
        <div className={styles.formColumn}>
          {submitted ? (
            <div className={styles.success} role="status">
              <span className="eyebrow">Enquiry prepared</span>
              <h3>Your details passed validation.</h3>
              <p>This website does not yet send enquiries to a backend. Please use the confirmed company contact details when they are published.</p>
              <button type="button" className="text-link" onClick={() => setSubmitted(false)}>Prepare another enquiry <ArrowUpRight aria-hidden="true" /></button>
            </div>
          ) : (
            <form className={`form ${styles.form}`} onSubmit={submit}>
              <label>Your name (required)<input name="name" autoComplete="name" required maxLength="120" /></label>
              <label>Work email (required)<input name="email" type="email" autoComplete="email" required maxLength="254" /></label>
              <label>Company <span className={styles.optional}>Optional</span><input name="organization" autoComplete="organization" maxLength="160" /></label>
              <label>How can we help? (required)<textarea name="message" rows="5" required minLength="10" maxLength="3000" /></label>
              <button className="btn" type="submit">Review enquiry <ArrowUpRight aria-hidden="true" /></button>
              <p className={styles.formNote}>Fields are validated in your browser. This form does not send submissions yet.</p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
