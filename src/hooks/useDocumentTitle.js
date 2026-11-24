import { useEffect } from "react";
import { COMPANY } from "@/data/company";

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${COMPANY.fullName}` : COMPANY.fullName;
  }, [title]);
}
