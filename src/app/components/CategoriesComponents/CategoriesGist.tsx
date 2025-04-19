/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import SimpleLoader from "../CustomLoader/SimpleLoader";
import { trackClickEvent } from "@/events/gtagEvents/CTATracker";

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

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }

    @media (max-width: 768px) {
      max-width: 100%;
      max-height: unset;
      width: 100%;

      img {
        width: 100%;
        height: auto;
      }
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
        {categoriesData.map((data: categoriesData, index) => (
          <>
            <a href={data.href}>
              <div className="data-container" key={index}>
                <div className="topic-image">
                  <a
                    href={data.href}
                    onClick={() =>
                      trackClickEvent({
                        action: "click",
                        category: "navigation_from_gist_image_to_post",
                        label: data.title,
                      })
                    }
                  >
                    <img src={data.imgSrc} alt={data.title} />
                  </a>
                </div>
                <div>
                  <a
                    href={data.href}
                    onClick={() =>
                      trackClickEvent({
                        action: "click",
                        category: "navigation_from_gist_title_to_post",
                        label: data.title,
                      })
                    }
                  >
                    <div className="topic-title">{data.title}</div>
                  </a>
                  <div className="topic-gist">{data.gist}</div>
                </div>
              </div>
            </a>
          </>
        ))}
        <Footer />
      </CategoriesGistWrapper>
    </>
  );
};

export default CategoriesGist;
