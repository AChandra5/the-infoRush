// components/PostCard.tsx
"use client";
import React from "react";
import styled from "@emotion/styled";

const CardWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  border-radius: 8px;
  // overflow: hidden;
  font-family: sans-serif;
  cursor: pointer;

  .post-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
  }

  .category-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: #2d3748;
    color: white;
    padding: 4px 8px;
    font-size: 12px;
    border-radius: 4px;
    text-transform: uppercase;
  }

  .post-title {
    position: absolute;
    bottom: 50px;
    left: 16px;
    right: 16px;
    font-size: 18px;
    font-weight: bold;
    color: white;
  }

  .post-meta {
    position: absolute;
    bottom: 16px;
    left: 16px;
    font-size: 12px;
    color: white;
  }
`;

interface PostCardProps {
  image: string;
  category: string;
  title: string;
  author: string;
  date: string;
  categoryColor?: string;
}

const PostCard: React.FC<PostCardProps> = ({
  image,
  category,
  title,
  author,
  date,
  categoryColor = "#2d3748", // default gray
}) => {
  return (
    <CardWrapper>
      <a href="localhost:3000/blogs" target="_blank">
      <img className="post-image" src={image} alt={title} />
      <div
        className="category-badge"
        style={{ backgroundColor: categoryColor }}
      >
        {category}
      </div>
      <div className="post-title">{title}</div>
      <div className="post-meta">
        {author} • {date}
      </div>
      </a>
    </CardWrapper>
  );
};

export default PostCard;
