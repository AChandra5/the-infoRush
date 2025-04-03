"use client";
import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { Typography } from "@mui/material";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;

  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 1.4%;
    padding-right: 5%;
    background: rgba(0, 0, 0, 0.3);
    color: white;
    gap: 1rem;
  }

  .inforush {
    font-size: 4rem;
    font-weight: 900;
    display: inline;
  }

  .inforush .highlight {
    color: #31cccc;
    font-size: 72px;
    font-weight: inherit;
  }

  .hero-headline {
    font-size: 2rem;
    font-weight: 600;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .desktop-only {
    display: inline;
  }

  .headline-text {
    display: inline;
  }

  .hero-subtext {
    font-size: 1.6rem;
    max-width: 600px;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    height: 60vh;

    .hero-overlay {
      font-size: 2rem;
      padding-left: 1rem;
      padding-right: 1rem;
      align-items: flex-start;
    }

    .hero-headline {
      font-size: 1rem;
      flex-direction: column;
      align-items: flex-start;
    }

    .inforush {
      // font-size: 2.5rem;
    }

    .hero-subtext {
      font-size: 1rem;
    }

    .desktop-only {
      display: none;
    }

    .headline-text {
      margin-top: 0.5rem;
      display: block;
    }
  }
`;

const HeroSection = () => {
  return (
    <Wrapper>
      <Image
        src="/assets/hero-img.png"
        alt="hero"
        fill
        priority
        className="hero-image"
      />

      <div className="hero-overlay">
        <Typography className="hero-headline">
          <span className="inforush">
            In<span className="highlight">f</span>oRush
          </span>
          <span className="desktop-only">&nbsp;–&nbsp;</span>
          <span className="headline-text">One Blog, Infinite Value!</span>
        </Typography>

        <Typography className="hero-subtext">
          From gadgets to goals, we got you covered — tech, finance, cricket &
          more.
        </Typography>
      </div>
    </Wrapper>
  );
};

export default HeroSection;

