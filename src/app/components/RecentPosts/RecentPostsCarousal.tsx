/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import Slider from "react-slick";
import styled from "@emotion/styled";
import PostCard from "../BodyPost/PostCard";
import { useTheme } from "@mui/material/styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const CarouselWrapper = styled.section<{ theme?: any }>`
  width: 100%;
  padding: 40px 0 60px;
  text-align: center;
  position: relative;
  background-color: ${({ theme }) =>
    theme.palette.mode === "dark" ? "#121212" : "#0b2b80"};
  overflow: hidden;
  .slick-slider {
    position: relative;
  }

  .slick-list {
    overflow: visible !important;
    // margin: 0 -20px; /* cancels out slide padding for flush alignment */
  }

  .slick-slide {
    padding: 0 20px; /* keeps spacing between cards */
  }

  .slick-prev,
  .slick-next {
    z-index: 5;
    top: 45%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    width: 36px;
    height: 36px;
    display: flex !important;
    align-items: center;
    justify-content: center;
  }

  .slick-prev {
    left: 0px; /* slightly inside */
  }

  .slick-next {
    right: 0px;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 20px;
    color: ${({ theme }) =>
      theme.palette.mode === "dark" ? "#fff" : "#0b2b80"};
    opacity: 1;
  }

  .slick-dots {
    // bottom: -30px;
    li {
      margin: 0 4px;
    }

    li button:before {
      font-size: 10px;
      color: ${({ theme }) => (theme.palette.mode === "dark" ? "#fff" : "#fff")};
      opacity: 0.6;
    }

    li.slick-active button:before {
      opacity: 1;
      color: #ffffff;
    }
  }
`;


const SectionHeading = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin-bottom: 32px;
`;

const StyledCardWrapper = styled.div<{ theme: any }>`
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  ${({ theme }) =>
    theme.palette.mode === "dark"
      ? `box-shadow: 0px 2px 6px rgba(255, 255, 255, 0.1);`
      : `box-shadow: 0px 2px 6px #0D3483;`}

  &:hover {
    transform: scale(1.03);

    ${({ theme }) =>
      theme.palette.mode === "dark"
        ? `box-shadow: 0px 6px 20px rgba(255, 255, 255, 0.25);`
        : `box-shadow: 0px 6px 20px #0D3483;`}
  }
`;

const BodyPostCardDetails = [
  {
    image: "/assets/HeroImage.png",
    category: "Finance",
    title: "How to invest in the Stock Market",
    author: "Jacob Jones",
    date: "April 3, 2024",
  },
  {
    image: "/assets/HeroImage.png",
    category: "Sports",
    title: "The Rise of Women's Football",
    author: "Kathryn Murphy",
    date: "April 6, 2024",
  },
  {
    image: "/assets/HeroImage.png",
    category: "Technology",
    title: "The Future of AI: Trends to Watch",
    author: "Wade Warren",
    date: "April 4, 2024",
  },
  {
    image: "/assets/HeroImage.png",
    category: "Finance",
    title: "Smart Budgeting Tips for 2024",
    author: "Leslie Alexander",
    date: "April 5, 2024",
  },
];

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const RecentPostsCarousel = () => {
  const theme = useTheme();

  return (
    <CarouselWrapper>
      <SectionHeading>Recent Blog Posts</SectionHeading>
      {/* <div style={{   overflow: "hidden" }}> */}
        <Slider {...settings}>
          {BodyPostCardDetails.map((card, index) => (
            <StyledCardWrapper theme={theme} key={`${card.title}-${index}`}>
              <PostCard {...card} />
            </StyledCardWrapper>
          ))}
        </Slider>
      {/* </div> */}
    </CarouselWrapper>
  );
};

export default RecentPostsCarousel;
