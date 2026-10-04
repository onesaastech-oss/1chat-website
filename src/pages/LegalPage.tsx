import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/ui/Navbar";
import { Footer } from "../components/ui/Footer";
import { Reveal } from "../components/motion/Reveal";
import { websiteApi } from "../config/api";

type LegalPageData = {
  title: string;
  subtitle?: string;
  content_html?: string;
};

export default function LegalPage() {
  const { slug = "" } = useParams();
  const [page, setPage] = useState<LegalPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setMissing(false);

    fetch(websiteApi(`/public/website/pages/${encodeURIComponent(slug)}`))
      .then(async (response) => {
        const data = await response.json();
        if (!active) return;
        if (!response.ok || data?.error || !data?.page) {
          setPage(null);
          setMissing(true);
          return;
        }
        setPage(data.page);
      })
      .catch(() => {
        if (active) {
          setPage(null);
          setMissing(true);
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [slug]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-green-100 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-slate-50 to-white py-16 border-b border-slate-100">
          <motion.div
            className="page-container text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl font-black text-slate-900 sm:text-6xl mb-6">
              {page?.title || (loading ? "Loading" : "Page not found")}
            </h1>
            {page?.subtitle ? (
              <p className="text-slate-500 font-medium">{page.subtitle}</p>
            ) : null}
          </motion.div>
        </div>
        <Reveal className="page-container section-pad">
          {loading ? (
            <p className="text-slate-500">Loading page...</p>
          ) : missing ? (
            <div className="text-center py-10">
              <p className="text-slate-600 mb-4">This page is not published.</p>
              <Link to="/" className="text-green-600 font-medium">Back to home</Link>
            </div>
          ) : (
            <article
              className="legal-content space-y-4 text-slate-600 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-slate-900 [&_h3]:mt-6 [&_h3]:mb-2 [&_a]:text-green-600 [&_a]:font-medium [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_strong]:text-slate-900"
              dangerouslySetInnerHTML={{ __html: page?.content_html || "" }}
            />
          )}
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
