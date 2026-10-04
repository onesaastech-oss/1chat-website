import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Features from "./pages/Features";
import GlobalReach from "./pages/GlobalReach";
import Pricing from "./pages/Pricing";
import ContactUs from "./pages/ContactUs";
import LegalPage from "./pages/LegalPage";
import { WebsiteContentProvider } from "./context/WebsiteContent";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.28 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/global-reach" element={<GlobalReach />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/:slug" element={<LegalPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <WebsiteContentProvider>
      <ScrollToTop />
      <AnimatedRoutes />
    </WebsiteContentProvider>
  );
}
