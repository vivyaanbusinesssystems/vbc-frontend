import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

// Synchronous Imports (Keep layout components loading instantly)
import Navbar from "../src/pages/Navbar";
import Footer from "../src/pages/Footer";
import WhatsAppWidget from "../src/pages/WhatsAppWidget";

// Lazy Loaded Page Imports (Code splitting for performance)
const Home = lazy(() => import("../src/pages/Home"));
const About = lazy(() => import("../src/pages/About"));
const Services = lazy(() => import("../src/pages/Services"));
const ServiceDetail = lazy(() => import("../src/pages/ServiceDetail"));
const Industries = lazy(() => import("../src/pages/Industries"));
const Contact = lazy(() => import("../src/pages/Contact"));
const Privacy = lazy(() => import("../src/pages/Privacy"));
const Terms = lazy(() => import("../src/pages/Terms"));

const queryClient = new QueryClient();

// Smooth loading fallback while pages are being fetched
function PageLoader() {
  return (
    <div className="flex min-h-[60vh] w-full items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand border-t-transparent"></div>
    </div>
  );
}

function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          {children}
        </Suspense>
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/contact" element={<Contact />} />

              {/* Legal Routes (Paths matched to the Footer links) */}
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/terms-of-service" element={<Terms />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </HelmetProvider>
    </QueryClientProvider>
  );
}