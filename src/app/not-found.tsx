"use client";
import ErrorWithImage from "./components/Errors/ErrorWithImage";


const NotFound = () => {
  return (
    <ErrorWithImage image={"/assets/404.svg"} title="Looks like there's nothing here"  text="Let's Go home" />
  );
};

export default NotFound;