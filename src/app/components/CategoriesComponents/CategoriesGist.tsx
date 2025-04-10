/* eslint-disable @next/next/no-img-element */
"use client";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import SimpleLoader from "../CustomLoader/SimpleLoader";
import { trackClickEvent } from "@/events/gtagEvents/CTATracker";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CategoriesGistWrapper = styled.div<{ theme?: any }>`
  padding: 15px;
  background-color: ${({ theme }) =>
    theme.palette.mode === "dark" ? "#121212" : "#f4f4f4"};

  a {
    color: ${({ theme }) =>
      theme.palette.mode === "dark" ? "#ffff" : "#0D3483"};
    text-decoration: none;
  }

  .data-container {
    display: grid;
    grid-template-columns: 0.5fr 2fr;
    margin: 20px auto;
    max-width: 1200px;
    background-color: ${({ theme }) =>
      theme.palette.mode === "dark" ? "#1E1E1E" : "#ffffff"};
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 0px 1px rgba(255, 255, 255, 0.9);
    border: ${({ theme }) =>
      theme.palette.mode === "dark" ? "#1E1E1E" : "#dbdde0"};;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
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
    margin: 15px;
    cursor: pointer;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      font-size: 1.4rem;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .topic-gist {
    margin: 15px;

    @media (max-width: 768px) {
      font-size: 1rem;
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
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);



  if (loading) return <SimpleLoader imgSrc={"/assets/loader.gif"} />;

  return (
    <>
      <CategoriesGistWrapper>
        {categoriesData.map((data: categoriesData, index) => (
              <a href={data.href} key={data.href}>
          <div className="data-container" key={index}>
            <div className="topic-image">
                <img
                  src={data.imgSrc}
                  alt={data.title}
                  width={"100%"}
                  height={"100%"}
                  onClick={() =>
                    trackClickEvent({
                      action: "click",
                      category: "navigation_from_gist",
                      label: `${data.title}`,
                    })
                  }
                />
            </div>
            <div>
              <a
                href={data.href}
                onClick={() =>
                  trackClickEvent({
                    action: "click",
                    category: "navigation",
                    label: `${data.title}`,
                  })
                }
              >
                <div className="topic-title">{data.title}</div>
              </a>
              <div className="topic-gist">{data.gist}</div>
            </div>
          </div>
          </a>

        ))}
        <Footer />
      </CategoriesGistWrapper>
      {/* <div style={{ position: "relative", bottom: "100%" }}> */}
        {/* <Footer /> */}
      {/* </div> */}
    </>
  );
};

export default CategoriesGist;
