import React from "react";
import styled from "@emotion/styled";
type SimpleLoaderProps = {
  imgSrc: string;
};

const LoaderWrapper = styled.div`
  height: 80vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SimpleLoader = ({ imgSrc }: SimpleLoaderProps) => {
  return (
    <LoaderWrapper>
      <img src={imgSrc} alt="loading" width={150} height={150}/>
    </LoaderWrapper>
  );
};

export default SimpleLoader;
