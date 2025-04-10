"use client";

import HeroSection from "./components/Hero";
import Topics from "./components/Topics/Topics";
import ScrollTracker from "../events/gtagEvents/ScrollTracker";
import RecentPostsCarousal from "./components/RecentPosts/RecentPostsCarousal";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import SimpleLoader from "./components/CustomLoader/SimpleLoader";
import { trackClickEvent } from "@/events/gtagEvents/CTATracker";

export default function ClientHome() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(()=> {
    trackClickEvent({
      action: "page_load",
      category: "home_page",
      label: "",
      path: `referrer is ${document.referrer}`
    });
  })

  if (loading) return <SimpleLoader imgSrc={"/assets/loader.gif"} />;

  return (
    <>
      <ScrollTracker />
      <HeroSection />
      <Topics />
      <RecentPostsCarousal />
      <Footer />
    </>
  );
}
