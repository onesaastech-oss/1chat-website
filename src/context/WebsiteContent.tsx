import React, { createContext, useContext, useEffect, useState } from "react";
import { websiteApi } from "../config/api";

export type WebsiteContact = {
  company_name?: string;
  legal_name?: string;
  cin?: string;
  address?: string;
  phone?: string;
  phone_note?: string;
  email?: string;
  email_note?: string;
  website?: string;
  website_label?: string;
  website_note?: string;
  footer_blurb?: string;
  footer_address?: string;
  copyright?: string;
  cta_title?: string;
  cta_text?: string;
  cta_button?: string;
};

export type WebsitePageSummary = {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  footer_label?: string;
  show_in_footer?: boolean;
  sort_order?: number;
};

type WebsiteContentValue = {
  contact: WebsiteContact | null;
  pages: WebsitePageSummary[];
  loading: boolean;
};

const WebsiteContentContext = createContext<WebsiteContentValue>({
  contact: null,
  pages: [],
  loading: true,
});

export function WebsiteContentProvider({ children }: { children: React.ReactNode }) {
  const [contact, setContact] = useState<WebsiteContact | null>(null);
  const [pages, setPages] = useState<WebsitePageSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    fetch(websiteApi("/public/website"))
      .then((response) => response.json())
      .then((data) => {
        if (!active || data?.error) return;
        setContact(data.contact || null);
        setPages(Array.isArray(data.pages) ? data.pages : []);
      })
      .catch(() => {
        if (active) {
          setContact(null);
          setPages([]);
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <WebsiteContentContext.Provider value={{ contact, pages, loading }}>
      {children}
    </WebsiteContentContext.Provider>
  );
}

export function useWebsiteContent() {
  return useContext(WebsiteContentContext);
}
