"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";

interface Topic {
  label: string;
  imageSrc: string;
  href: string;
}

const TopicsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
  padding: 20px 40px;
  max-width: 1200px;
  margin: 0 auto;
  border-rdius:25px;

  @media (max-width: 1024px) {
    justify-content: center;
    padding: 20px 24px;
  }

  @media (max-width: 600px) {
    padding: 20px 16px;
  }
`;


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StyledCard = styled(Card)<{ theme?: any }>`
  flex: 1 1 30%;
  max-width: 360px;
  min-width: 260px;
  height: 280px;
  border-radius: 25px;
  overflow: hidden; // 🔑 Ensures content respects the border-radius
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  ${({ theme }) =>
    theme.palette.mode === "dark"
      ? `box-shadow: 0px 2px 6px rgba(255, 255, 255, 0.1);`
      : `box-shadow: 0px 2px 6px #0D3483;`}

  &:hover {
    transform: scale(1.03);
    ${({ theme }) =>
      theme.palette.mode === "dark"
        ? `box-shadow: 0px 6px 20px rgba(255, 255, 255, 0.25);`
        : `box-shadow: 0px 6px 20px #0D3483;`}
  }

  @media (max-width: 768px) {
    width: 100%;
    flex: 1 1 100%;
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

const Topics = () => {
  const theme = useTheme();

  return (
    <>
      <div
        style={{
          padding: "16px",
          fontFamily: '"Futura","Roboto","Helvetica","Arial",sans-serif',
          color: theme.palette.text.primary,
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Explore Topics
      </div>

      <TopicsWrapper>
        {topics.map((topic, index) => (
          <StyledCard
            key={index}
            theme={theme}
            onClick={() => (window.location.href = topic.href)}
          >
            <CardContent
              sx={{
                padding: "8px",
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
                height="220"
                image={topic.imageSrc}
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
