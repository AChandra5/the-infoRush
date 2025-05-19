/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import Slider from "react-slick";
import styled from "@emotion/styled";
import PostCard from "./PostCard";
import { useTheme } from "@mui/material/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { genereateHref } from "@/utils/commonFunctions";

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
    padding: 0 4px; /* keeps spacing between cards */
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
      color: ${({ theme }) =>
        theme.palette.mode === "dark" ? "#fff" : "#fff"};
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
  width: 80%;
  height: 100%; // ensures cards stretch
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 350px;
  margin: auto;
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
    image: "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/tech-gadgets//iphone-17-announced.jpg",
    category: "tech",
    title: "iPhone 17 Pro Max: What to Expect, What’s New, and Is It Worth the Upgrade?",
    href: genereateHref("tech-gadgets",'iphone-17-pro-max'),
    date: "May 16, 2025",
    },
  {
    image: "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/sports-fitness/test-cricket.png",
    category: "Sports",
    title: "Why is Test Cricket Harder and Important? The Enduring Legacy of the Red Ball Game",
    href: genereateHref('sports-fitness','why-is-test-cricket-harder'),
    date: "May 15, 2025",
    },
  {
    image: "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/sports-fitness/virat-kohli-retires.png",
    category: "Sports",
    title: "Virat Kohli’s Test Retirement: An Emotional Farewell to a Cricket Legend",
    href: genereateHref('sports-fitness','virat-kohli-test-retirement'),
    date: "May 13, 2025",
    },
  {
    image: "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/finance-insurance/how-to-build-an-emergency-fund.png"
    ,
    category: "Finance",
    title: "How to Build an Emergency Fund (Without Stressing About It)?",
    href: genereateHref(
      "finance-insurance",
      "how-to-build-an-emergency-fund"
    ),
    date: "May 13, 2025",
  },
  {
    image:
    "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/finance-insurance/india-pakistan-war-financial-preperation.png",
    category: "Finance",
    title: "India-Pakistan War: How should we prepare our personal finances in case of war?",
    href: genereateHref(
      "finance-insurance",
      "india-pakistan-war-personal-finances-preperation"
    ),
    date: "May 10, 2025",
  },

  {
    image: "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/sports-fitness/rohit-sharma.png",
    category: "Sports",
    title: "Rohit Sharma’s Test Cricket Retirement: A Legendary Career Bows Out",
    href: genereateHref('sports-fitness','rohit-sharma-test-retirement'),
    date: "May 08, 2025",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/finance-insurance/gold-investment.png",
    category: "Finance",
    title: "Digital Gold vs. Gold ETFs vs. Physical Gold",
    href: genereateHref("finance-insurance", "digital-gold-vs-gold-etf-vs-physical-gold"),
    date: "May 06, 2025",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/sports-fitness/champak.jpeg",
    category: "Sports",
    title: "Meet Champak: The Robotic Dog Revolutionising IPL 2025",
    href: genereateHref("sports-fitness", "champak-the-ipl-robot-dog"),
    date: "May 04, 2025",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/tech-gadgets/best-smart-phones-under-15000.png",
      category: "Tech",
    title: "Best smartphones under ₹15000 in 2025. Top pick for you [Every month update]",
    date: "April 24, 2025",
    href: genereateHref("tech-gadgets", "best-smart-phones-under-15000"),
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/finance-insurance/sip-cover.png",
    category: "Finance",
    title: "How to Start SIP in India: Beginner’s Guide for 2025",
    href: genereateHref("finance-insurance", "how-to-start-sip"),
    date: "May 01, 2025",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/sports-fitness/tossing-coin.png",
    category: "Sports",
    title: "Cricket Toss Bias: Does Winning the Toss Really Matter?",
    href: genereateHref("sports-fitness", "does-toss-really-matter"),
    date: "May 01, 2025",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/sports-fitness/select-bat.jpg",
    category: "Sports",
    title: "Cricket Bat Buying Guide – Weight, Willow & Size Explained Simply",
    href: genereateHref("sports-fitness", "how-to-choose-a-cricket-bat"),
    date: "April 23, 2025",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/tech-gadgets/lpddr5-ram.jpg",
    category: "Tech",
    title: "What is LPDDR5 RAM? Should You Care About It in Your Next Phone?",
    href: genereateHref("tech-gadgets", "lpddr5-ram-explained"),
    date: "April 12, 2025",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/sports-fitness/shoe-select.jpg",
    category: "Sports",
    title: "How to Choose Cricket Shoes? A Complete Buying Guide",
    href: genereateHref("sports-fitness", "how-to-choose-cricket-shoes"),
    date: "April 28, 2025",
  },
  {
    image: "/assets/monitor-buying-guide.png",
    category: "Tech",
    title:
      "Best monitor to buy in 2025 and all things you need to now before getting a monitor",
    href: genereateHref("tech-gadgets", "best-27inch-monitor-2025"),
    date: "April 19, 2025",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/finance-insurance/cyberinsurance-2025.png",
    category: "Finance",
    title: "How Cyber Insurance Can Protect Your Money in 2025?",
    href: genereateHref("finance-insurance", "cyber-insurance-2025"),
    date: "April 28, 2025",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/finance-insurance/card-payment.jpg",
    category: "Finance",
    title:
      "Credit card or Debit card as the payment method - Which one to use and when?",
    href: genereateHref("finance-insurance", "creditcard-vs-debitcard"),
    date: "April 23, 2025",
  },
  {
    image: "/assets/robo-mop.jpg",
    category: "Tech",
    title: "Best Robot Vaccum Cleaners in India under 25,000",
    href: genereateHref("tech-gadgets", "best-robot-vaccum-cleaners-in-india"),
    date: "April 19, 2025",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/tech-gadgets/vivot4-vs-oppok13.png",
    category: "Tech",
    title:
      "The latest smartphones released in April 2025: Vivo T4 vs Oppo K13 5G",
    href: genereateHref("tech-gadgets", "vivot4-vs-oppok13"),
    date: "April 23, 2025",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/tech-gadgets/best-smartphones-under-25k.png",
    category: "Tech",
    title: "Best smartphones under ₹25000 in 2025. Top pick for you [Every month update]",
    date: "May 03, 2025",
    href: genereateHref("tech-gadgets", "best-smartphones-under-25000"),
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/tech-gadgets/smartphone-buying-guide.png",
    category: "Tech",
    title: "The Ultimate Smartphone Buying Guide (2025)",
    href: genereateHref("tech-gadgets", "smartphone-buying-guide"),
    date: "April 25, 2025",
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
  centerMode: true,
  centerPadding: "0px",
  swipe: true, // ✅ enables swipe on all devices
  touchMove: true, // ✅ allows finger dragging
  draggable: true, // ✅ mouse dragging on desktop
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
      <Slider {...settings}>
        {BodyPostCardDetails.map((card, index) => (
          <StyledCardWrapper theme={theme} key={`${card.title}-${index}`}>
            <PostCard {...card} />
          </StyledCardWrapper>
        ))}
      </Slider>
    </CarouselWrapper>
  );
};

export default RecentPostsCarousel;
