# Arabian Steel Products Factory

A React 18 + Vite website for Arabian Steel Products Factory, built with React Router, CSS Modules, and Lucide React.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the build locally
npm run lint
```

## Structure

```text
src/
  components/
    chat/       Chat preview
    common/     Page banners, breadcrumbs, product search results
    home/       Homepage hero
    layout/     Header, responsive navigation, footer, layout
    products/   Product navigation
  data/         Company and product content, image sources
  hooks/        Document title and scroll reveal
  pages/        One page per route, with page-level CSS Modules
  styles/       Global tokens and shared styles
```

Company and product information is maintained in `src/data/company.js` and `src/data/products.js`. Project profiles, client names/logos, current vacancies, and confirmed email/telephone details are intentionally not invented; add them when approved information is available. The industrial photographs are representative imagery served from Unsplash and are labelled as illustrative where shown.

The contact form performs browser-side validation only; it does not transmit submissions until a backend is connected. The chat is a local preview. Static hosting must rewrite client-side routes to `index.html` (for example, Netlify: `/* /index.html 200`).
