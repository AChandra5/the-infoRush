/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import styled from "@emotion/styled";
import { ReactNode } from "react";
import SocialMediaShare from "../Sharing/SocialMediaShare";


const BlogWrapper = styled.div<{ theme: any }>`
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  margin: 5px auto;
  max-width: 1250px;
  text-align: justify;
  width: 90%;

  a:link {
    text-decoration: underline;
    color: ${({ theme }) =>
      theme.palette.mode === "dark" ? "#fff" : "#0D3483"};
    color: ${({ theme }) =>
      theme.palette.mode === "dark" ? "#fff" : "#0D3483"};
  }

  a:visited {
    text-decoration: underline;
    color: ${({ theme }) =>
      theme.palette.mode === "dark" ? "#fff" : "#0D3483"};
    font-weight: 500;
  }

  h1 {
    font-size: 2.5rem;
    text-align: left;
    margin: 20px 0;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }

  .cover-image {
    width: 100%;
    height: auto;
    max-height: 450px;
    border-radius: 10px;
    object-fit: fill;
    // margin-bottom: 20px;

    @media (max-width: 768px) {
      max-height: 250px;
    }
  }

  img:not(.cover-image) {
    width: 100%;
    max-width: 650px;
    height: auto;
    margin: 20px auto;
    border-radius: 8px;
    display: block;
  }

  ul li {
    line-height: 1.7;
    font-size: 1.05rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  p {
    line-height: 1.7;
    font-size: 1.05rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export default function Post({
  title,
  date,
  coverImage,
  description,
  children,
  contentType,
  gistUrl,
}: {
  title: string;
  date: string;
  coverImage: string;
  description?: string;
  children: ReactNode;
  contentType: string;
  gistUrl: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    datePublished: date,
    image: coverImage ? `https://www.theinforush.com/${coverImage}` : undefined,
    description:
      description ||
      "Explore the latest insights on tech, finance, and sports.",
    author: {
      "@type": "Person",
      name: "Akhil Chandra",
    },
    publisher: {
      "@type": "Organization",
      name: "InfoRush",
      logo: {
        "@type": "ImageObject",
        url: "https://www.theinforush.com/assets/logo.png",
      },
    },
  };
  return (
    <BlogWrapper theme={undefined}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <img src={coverImage} alt={title} className="cover-image" />
        <h1 className="title">{title}</h1>
        <p style={{ color: "#888" }}>Last published/edited on {date}</p>
        <div className="">{children}</div>
      </article>
      <SocialMediaShare />

      <div  style={{margin: "15px", fontSize: "1rem"}}>
      <em>
        <a href={`/categories/${gistUrl}`} >
          To read more {contentType} content on the InfoRush click here.
        </a>
      </em>
      </div>
    </BlogWrapper>
  );
}
