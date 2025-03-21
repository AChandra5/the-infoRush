"use client";
import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import SubmitButton from "./Buttons/SubmitButton";
import isViewportMobile from "../../../public/MediaQuery/breakpoints";
import CarouselRatio from "./HeroCarousel/HeroCarousel";
import { useTheme } from "@emotion/react";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }: any) => theme.palette.background.hero};
  padding: 20px;

  .hero-healine {
    font-size: 50px;
    color: #fffff0;
  }

  .tips {
    margin: 10px 10px 20px 0px;
  }
`;

const HeroSection = () => {
  const theme = useTheme()
  console.log("theme")
  return (
    <Wrapper>
      <div>
        <div className="hero-healine">
          <strong>Simplifying Family Life, One Step at a Time</strong>
        </div>
        <div className="tips">
          Tips and resources for families on lifestyle, babycare and must do
          financial planning/
        </div>
        <CarouselRatio />
        {/* <SubmitButton>Read more</SubmitButton> */}
      </div>
      <div>
        {!isViewportMobile() && (
          <Image
            src={"/assets/fammily.png"}
            alt={"hero-image"}
            width={450}
            height={350}
          ></Image>
        )}
      </div>
    </Wrapper>
  );
};

export default HeroSection;
