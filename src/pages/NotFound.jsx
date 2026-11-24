import { Link } from "react-router-dom";
import PageBanner from "@/components/common/PageBanner";
import useDocumentTitle from "@/hooks/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle("Page not found");
  return (
    <>
      <PageBanner title="Page not found" />
      <div className="container section">
        <p className="lead">The page you are looking for does not exist.</p>
        <Link to="/" className="btn">Back to home</Link>
      </div>
    </>
  );
}
