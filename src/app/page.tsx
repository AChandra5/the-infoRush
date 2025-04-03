import HeroSection from "./components/Hero";
import Topics from "./components/Topics/Topics";
import BodyPost from "./components/BodyPost/BodyPost";
import ScrollTracker from "../events/ScrollTracker";

export default function Home() {
  return (
    <>
    <ScrollTracker/>
    <HeroSection/>
    <Topics />
    {/* <BodyPost/>
    <BodyPost/> */}

    </>
  );
}
