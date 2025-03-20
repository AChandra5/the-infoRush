"use client"
import React from "react";
import styled from "@emotion/styled";
import Image from 'next/image'
import SubmitButton from "./Buttons/SubmitButton";
import isViewportMobile from "../../../public/MediaQuery/breakpoints";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ff8b7c;
  padding: 20px;

  .hero-healine {
  font-size: 50px;
  color: #FFFFF0;

;
  }

  .tips {
  margin: 10px 10px 20px 0px;
  }
`;

const HeroSection = () => {
  return <Wrapper>
    <div>
        <div className="hero-healine"><strong>Simplifying Family Life, One Step at a Time</strong></div>
        <div className="tips">Tips and resources for families on lifestyle, babycare and must do financial planning/</div>
         <SubmitButton>Read more</SubmitButton>
    </div>
    <div>
        {!isViewportMobile() && <Image src={"/assets/fammily.png"} alt={"hero-image"} width={450} height={350}></Image>}
    </div>
  </Wrapper>;
};

export default HeroSection;
