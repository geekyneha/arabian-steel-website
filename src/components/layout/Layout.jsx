import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import ChatWidget from "@/components/chat/ChatWidget";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main id="main-content">
        <Suspense fallback={<div className="container section">Loading…</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
