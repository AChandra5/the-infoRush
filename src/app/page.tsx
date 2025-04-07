"use client"
import HeroSection from "./components/Hero";
import Topics from "./components/Topics/Topics";
// import BodyPost from "./components/BodyPost/BodyPost";
import ScrollTracker from "../events/ScrollTracker";
import RecentPostsCarousal from "./components/RecentPosts/RecentPostsCarousal";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import SimpleLoader from "./components/CustomLoader/SimpleLoader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

if(loading) return <SimpleLoader imgSrc={"/assets/loader.gif"} />

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
