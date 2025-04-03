"use client";
import React from "react";
import styled from "@emotion/styled";
import SubmitButton from "../Buttons/SubmitButton";
import { useRouter } from "next/navigation";

interface ErrorWithImageProps {
  image: string;
  title: string;
  text: string;
}

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75vh;
  gap: 0px;
  text-align: center;
  padding: 0px 20px;
  margin: auto

  .description {
    margin-bottom: 20px;
    color : red;
  }
    .heading {
    margin: 10px;
    }
`;

const ErrorWithImage = ({ image, title, text }: ErrorWithImageProps) => {
    const router = useRouter();
  return (
    <ErrorWrapper>
      <img src={image} alt={title} width={300} height={300} />
      {/* <h1 className="heading">404</h1> */}
      <h1 className="heading">{title}</h1>
      {/* <div className="description">{description}</div> */}
      <SubmitButton text={text}  bgColor="#23CAAE" onClick={() => router.push("/")}/>
    </ErrorWrapper>
  );
};

export default ErrorWithImage;