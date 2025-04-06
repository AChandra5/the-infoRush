import HeroSection from "./components/Hero";
import Topics from "./components/Topics/Topics";
import ScrollTracker from "../events/ScrollTracker";
import RecentPostsCarousal from "./components/RecentPosts/RecentPostsCarousal";
import Footer from "./components/Footer/Footer";
import ErrorWithImage from "./components/Errors/ErrorWithImage";

export default function Home() {
  return (
    <>
    {/* <ScrollTracker/>
    <HeroSection/>
    <Topics />
    <RecentPostsCarousal/> 
    <Footer/> */}
    <ErrorWithImage image={"/assets/under-construction.gif"} 
      title="Page under construction.\nPlease come back later!!"
   text={""} />
    </>
  );
}
