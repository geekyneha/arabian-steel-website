import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Products = lazy(() => import("@/pages/Products"));
const ProductDetail = lazy(() => import("@/pages/ProductDetail"));
const Projects = lazy(() => import("@/pages/Projects"));
const Clients = lazy(() => import("@/pages/Clients"));
const Career = lazy(() => import("@/pages/Career"));
const Contact = lazy(() => import("@/pages/Contact"));
const SearchResults = lazy(() => import("@/pages/SearchResults"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about/:tab?" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<ProductDetail />} />
        <Route path="projects" element={<Projects />} />
        <Route path="clients" element={<Clients />} />
        <Route path="career" element={<Career />} />
        <Route path="contact" element={<Contact />} />
        <Route path="search" element={<SearchResults />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
