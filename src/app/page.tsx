import HeroSection from "./components/Hero";
import Topics from "./components/Topics/Topics";
// import BodyPost from "./components/BodyPost/BodyPost";
import ScrollTracker from "../events/ScrollTracker";
import RecentPostsCarousal from "./components/RecentPosts/RecentPostsCarousal";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
    <ScrollTracker/>
    <HeroSection/>
    <Topics />
    {/* <BodyPost/> */}
    <RecentPostsCarousal/> 
    <Footer/>
    </>
  );
}
