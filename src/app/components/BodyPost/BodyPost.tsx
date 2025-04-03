"use client"
import React from "react";
import styled from "@emotion/styled";
import PostCard from "./PostCard";

const BodyPostWrapper = styled.div`
  display: flex;
  gap: 16px;
  height: 100%;
`;

const BodyPostCardDetails = [
    {
        image: "/assets/HeroImage.png",
        category: "Finance",
        title: "How to invest in the Stock Market",
        author: "Jacob Jones",
        date: "April 3, 2024",
        categoryColor: "#1a202c" // navy blue
    },
    {
        image: "/assets/HeroImage.png",
        category: "Sports",
        title: "The Rise of Women's Football",
        author: "Kathryn Murphy",
        date: "April 6, 2024",
        categoryColor: "#f97316" // orange
    },
    {
        image: "/assets/HeroImage.png",
        category: "Technology",
        title: "The Future of AI: Trends to Watch",
        author: "Wade Warren",
        date: "April 4",
        categoryColor: "#3b82f6" // blue
    }
]

const BodyPost = () => {
  return (
    <BodyPostWrapper>
        {BodyPostCardDetails.map((card)=> (
            <PostCard key={card.title}
                image={card.image}
                category={card.category}
                title={card.title}
                author={card.author}
                date={card.date}
                categoryColor={card.categoryColor}
            />
        ))}
    </BodyPostWrapper>
  );
};

export default BodyPost;
