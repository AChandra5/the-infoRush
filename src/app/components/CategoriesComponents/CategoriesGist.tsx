/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import SimpleLoader from "../CustomLoader/SimpleLoader";
import { trackClickEvent } from "@/events/gtagEvents/CTATracker";
import Image from "next/image";

const CategoriesGistWrapper = styled.div<{ theme?: any }>`
  padding: 15px;
  background-color: ${({ theme }) =>
    theme.palette.mode === "dark" ? "#121212" : "#f4f4f4"};

  a {
    color: ${({ theme }) =>
      theme.palette.mode === "dark" ? "#ffffff" : "#0D3483"};
    text-decoration: none;
  }

  .data-container {
    display: grid;
    grid-template-columns: 0.5fr 2fr;
    gap: 10px;
    margin: 20px auto;
    padding: 10px;
    max-width: 1200px;
    background-color: ${({ theme }) =>
      theme.palette.mode === "dark" ? "#1E1E1E" : "#ffffff"};
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 0px 1px rgba(255, 255, 255, 0.9);
    border: ${({ theme }) =>
      theme.palette.mode === "dark" ? "#1E1E1E" : "#dbdde0"};

    &:hover {
      transition: transform 0.3s ease;
      transform: scale(1.009);
      box-shadow: ${({ theme }) =>
        theme.palette.mode === "dark"
          ? `0 1px 3px rgba(255, 255, 255, 0.05),
             0 4px 6px rgba(255, 255, 255, 0.08),
             0 8px 12px rgba(255, 255, 255, 0.06)`
          : `0 1px 1px hsl(0deg 0% 0% / 0.075),
             0 2px 2px hsl(0deg 0% 0% / 0.075),
             0 4px 4px hsl(0deg 0% 0% / 0.075),
             0 8px 8px hsl(0deg 0% 0% / 0.075),
             0 16px 16px hsl(0deg 0% 0% / 0.075)`};
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 0;
      margin: 15px 10px;
      padding: 12px;
    }
  }

  .topic-image {
    max-width: 240px;
    max-height: 160px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      max-width: 100%;
      max-height: unset;
      width: 100%;
    }
  }

  .topic-title {
    font-size: 1.8rem;
    margin: 15px 15px 10px 15px;
    cursor: pointer;
    font-weight: 600;
    line-height: 1.3;
    transition: transform 0.3s ease;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      font-size: 1.3rem;
      margin: 10px 0;
    }
  }

  .data-container:hover .topic-title {
    transform: scale(1.009);
    text-decoration: underline;
  }

  .topic-gist {
    margin: 0 15px 15px 15px;
    line-height: 1.5;

    @media (max-width: 768px) {
      font-size: 0.95rem;
      margin: 0;
    }
  }
`;

interface categoriesData {
  imgSrc: string;
  title: string;
  gist: string;
  href: string;
}

interface CategoriesGistProps {
  categoriesData: categoriesData[];
}

const CategoriesGist = ({ categoriesData }: CategoriesGistProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SimpleLoader imgSrc={"/assets/loader.gif"} />;

  return (
    <>
      <CategoriesGistWrapper>
        {categoriesData.map((data: categoriesData) => (
          <div className="data-container" key={data.title}>
            <div className="topic-image">
              <a
                href={data.href}
                onClick={() =>
                  trackClickEvent({
                    action: "click",
                    category: "navigation_from_gist_card_to_post",
                    label: data.title,
                  })
                }
              >
                <Image
                  src={data.imgSrc}
                  alt={data.title}
                  width={240}
                  height={160}
                  priority
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "auto",
                  }}
                  sizes="(max-width: 768px) 100vw, 240px"
                />
              </a>
            </div>
            <div>
              <a
                href={data.href}
                onClick={() =>
                  trackClickEvent({
                    action: "click",
                    category: "navigation_from_gist_card_to_post",
                    label: data.title,
                  })
                }
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="topic-title">{data.title}</div>
              </a>
              <a href={data.href}
                onClick={() =>
                  trackClickEvent({
                    action: "click",
                    category: "navigation_from_gist_card_to_post",
                    label: data.title,
                  })
                }
                style={{ textDecoration: "none", color: "inherit" }}><div className="topic-gist">{data.gist}</div></a>
            </div>
          </div>
        ))}

        <Footer />
      </CategoriesGistWrapper>
    </>
  );
};

export default CategoriesGist;
