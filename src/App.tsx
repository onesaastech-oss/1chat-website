import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./app/page";
import ContactUs from "./app/contact/page";
import BusinessPolicy from "./app/business-policy/page";
import PrivacyPolicy from "./app/privacy-policy/page";
import TermsAndConditions from "./app/terms/page";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/business-policy" element={<BusinessPolicy />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsAndConditions />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
