"use client";
import React from "react";
import styled from "@emotion/styled";
import PostCard from "./PostCard";
import useIsViewportMobile from "../../MediaQuery/Breakpoints";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BodyPostSection = styled.section<{theme?:any}>`
  padding: 40px 16px;
  background-color: ${({theme})=>theme.palette.mode === "dark" ? "#121212" : "#0b2b80"}; /* blue bg like in your screenshot */
  text-align: center;
`;

const SectionHeading = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin-bottom: 32px;
`;

const BodyPostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  justify-items: center;
`;

const BodyPostCardDetails = [
  {
    image: "/assets/HeroImage.png",
    category: "Finance",
    title: "How to invest in the Stock Market",
    author: "Jacob Jones",
    date: "April 3, 2024",
    categoryColor: "#1a202c",
  },
  {
    image: "/assets/HeroImage.png",
    category: "Sports",
    title: "The Rise of Women's Football",
    author: "Kathryn Murphy",
    date: "April 6, 2024",
    categoryColor: "#f97316",
  },
  {
    image: "/assets/HeroImage.png",
    category: "Technology",
    title: "The Future of AI: Trends to Watch",
    author: "Wade Warren",
    date: "April 4",
    categoryColor: "#3b82f6",
  },
  {
    image: "/assets/HeroImage.png",
    category: "Finance",
    title: "How to invest in the Stock Market",
    author: "Jacob Jones",
    date: "April 3, 2024",
    categoryColor: "#1a202c",
  },
  {
    image: "/assets/HeroImage.png",
    category: "Sports",
    title: "The Rise of Women's Football",
    author: "Kathryn Murphy",
    date: "April 6, 2024",
    categoryColor: "#f97316",
  },
  {
    image: "/assets/HeroImage.png",
    category: "Technology",
    title: "The Future of AI: Trends to Watch",
    author: "Wade Warren",
    date: "April 4",
    categoryColor: "#3b82f6",
  },
];

const BodyPost = () => {
  useIsViewportMobile(); // used only for responsive logic inside PostCard if needed

  return (
    <BodyPostSection>
      <SectionHeading>Recent Blog Posts</SectionHeading>
      <BodyPostGrid>
        {BodyPostCardDetails.map((card, index) => (
          <PostCard
            key={`${card.title}-${index}`}
            image={card.image}
            category={card.category}
            title={card.title}
            author={card.author}
            date={card.date}
            categoryColor={card.categoryColor}
          />
        ))}
      </BodyPostGrid>
    </BodyPostSection>
  );
};

export default BodyPost;
