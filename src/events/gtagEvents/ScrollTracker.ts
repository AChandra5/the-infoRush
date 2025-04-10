"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollTracker = () => {
  const pathname = usePathname();
  useEffect(() => {
    // Fire blog view only if gtag is available
    console.log("Blog view test");
    if (typeof window.gtag === "function") {
      window.gtag("event", "blog_view", {
        event_category: "Engagement",
        event_label: `viewed_blog_page`,
        page_path: pathname,
      });
    }

    let hasScrolled50 = false;
    let hasScrolled75 = false;

    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight;
      const height = document.body.scrollHeight;
      const scrolled = scrollY / height;

      if (typeof window.gtag === "function") {
        if (!hasScrolled50 && scrolled > 0.5) {
          hasScrolled50 = true;
          console.log("50")
          window.gtag("event", "scroll_50", {
            event_category: "Engagement",
            event_label: `50% scrolled - ${pathname}`,
            page_path: pathname,
          });
        }

        if (!hasScrolled75 && scrolled > 0.75) {
          hasScrolled75 = true;
          window.gtag("event", "scroll_75", {
            event_category: "Engagement",
            event_label: `75% scrolled - ${pathname}`,
            page_path: pathname,
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return null;
};

export default ScrollTracker;
