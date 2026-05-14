"use client";

import { useEffect } from "react";

/**
 * Forces the page to land at the top on every refresh, ignoring the
 * browser's default scroll restoration. Mounted once at the root layout.
 */
export default function ScrollToTopOnLoad() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // If the URL has a #section anchor (e.g. /#features) leave it alone —
    // let the browser scroll to that section instead of forcing top.
    if (window.location.hash) return;
    window.scrollTo(0, 0);
  }, []);
  return null;
}
