"use client";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import SimpleLoader from "../CustomLoader/SimpleLoader";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CategoriesGistWrapper = styled.div<{ theme?: any }>`
  padding: 15px;
  background-color: ${({ theme }) =>
    theme.palette.mode === "dark" ? "#121212" : "#f4f4f4"};
  .data-container {
    display: grid;
    grid-template-columns: 0.5fr 2fr;
    margin: 10px 0 10px 0;
    max-width: 1200px;
    background-color: ${({ theme }) =>
      theme.palette.mode === "dark" ? "#1E1E1E" : "#ffff"};
    margin: 10px auto;
    border-radius: 10px;
  }
  .topic-image {
    max-width: 350px;
    max-height: 230px;
    min-width: 100px;
    min-height: 100px;
  }
  .topic-title {
    font-size: 1.8rem;
    margin: 15px;
  }
  .topic-gist {
    margin: 15px;
  }
`;

interface categoriesData {
  imgSrc: string;
  title: string;
  gist: string;
}

interface CategoriesGistProps {
  categoriesData: categoriesData[];
}

const CategoriesGist = ({ categoriesData }: CategoriesGistProps) => {

  const [loading,setLoading] = useState(true)

  useEffect(()=> {
    setTimeout(()=> {
      setLoading(false)
    }, 500)
  }, [])

  if(loading) return <SimpleLoader imgSrc={"/assets/loader.gif"}/>


  return (
    <>
    <CategoriesGistWrapper>
      {categoriesData.map((data: categoriesData) => (
        <div className="data-container" key={data.title}>
          <div className="topic-image">
            <img
              src={data.imgSrc}
              alt={data.title}
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div>
            <div className="topic-title">{data.title}</div>
            <div className="topic-gist">{data.gist}</div>
          </div>
        </div>
      ))}

    </CategoriesGistWrapper>
        <Footer />
        </>
  );
};

export default CategoriesGist;
