/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import styled from "@emotion/styled";
import isViewportMobile from "../../MediaQuery/Breakpoints";
import { useTheme } from "@mui/material/styles";

interface Topic {
  label: string;
  imageSrc: string;
  href: string;
}

const TopicsWrapper = styled.div`
  // background: ${({ theme }: any) => theme.palette.background.hero};
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;

  /* Apply flex to the container instead of each card */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 16px;
  //   justify-content: center; /* Centering the cards */
`;

const StyledCard = styled(Card)<{ theme?: any }>`
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  ${({ theme }) =>
    theme.palette.mode === "dark"
      ? `
    box-shadow: 0px 2px 6px rgba(255, 255, 255, 0.1);
  `
      : `
    box-shadow: 0px 2px 6px #0D3483;
  `}

  &:hover {
    transform: scale(1.03);

    ${({ theme }) =>
      theme.palette.mode === "dark"
        ? `box-shadow: 0px 6px 20px rgba(255, 255, 255, 0.25);`
        : `box-shadow: 0px 6px 20px #0D3483;`}
  }

  .MuiCardMedia-root {
    transition: transform 0.3s ease;
  }

  &:hover .MuiCardMedia-root {
    transform: scale(1.05);
  }
`;




const topics: Topic[] = [
  {
    label: "Tech & Gadgets",
    imageSrc: "/assets/tech-gadgets-img.png",
    href: "/categories/tech-gadgets",
  },
  {
    label: "Sports & Fitness",
    imageSrc: "/assets/sports-fitness-img.png",
    href: "/categories/sports-fitness",
  },
  {
    label: "Finance & Insurance",
    imageSrc: "/assets/finance-insurance-img.png",
    href: "/categories/finance-insurance",
},
];

// TODO: send topics as props later
const Topics = () => {
  const theme = useTheme();
  return (
    <>
      <div
        style={{
          // background: theme.palette.background.hero,
          padding: "16px 0 0 16px",
          fontFamily: '"Futura","Roboto","Helvetica","Arial",sans-serif',
          color: theme.palette.text.primary,
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        {/* Explore Topics */}
      </div>
      <TopicsWrapper>
        {topics.map((topic: Topic, index: number) => (
          <StyledCard
            onClick={() => window.location.href = topic.href}
            key={index}
            sx={{
              maxWidth: !isViewportMobile() ? 400 : 100,
              maxHeight: !isViewportMobile() ? 400 : 200,
              textAlign: "center",
              flex: "1 1 180px",
            }}
          >
            <CardContent
              sx={{
                padding: "3px",
                minHeight: "50px",
                backgroundColor:
                  theme.palette.mode === "dark" ? "#141414" : "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  wordWrap: "break-word",
                }}
              >
                {topic.label}
              </Typography>
            </CardContent>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100%"
                width="100%"
                image={topic.imageSrc || "/static/images/cards/default.jpg"} // Default image
                alt={topic.label}
              />
            </CardActionArea>
          </StyledCard>
        ))}
      </TopicsWrapper>
    </>
  );
};

export default Topics;
