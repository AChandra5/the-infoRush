"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import styled from "@emotion/styled";
import isViewportMobile from "../../../../public/MediaQuery/breakpoints";
import { useTheme } from "@emotion/react";

interface Topic {
  label: string;
  imageSrc: string;
  href: string;
}

const TopicsWrapper = styled.div`
  background: ${({ theme }: any) => theme.palette.background.hero};
  padding: 20px;

  /* Apply flex to the container instead of each card */
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  //   justify-content: center; /* Centering the cards */
`;

const topics: Topic[] = [
  {
    label: "Newborn essentials",
    imageSrc:
      "https://static.vecteezy.com/system/resources/thumbnails/002/423/288/small_2x/happy-family-together-avatar-international-family-day-happy-dad-hugs-mom-and-children-group-of-people-father-mother-daughter-and-son-illustration-vector.jpg",
    href: "",
  },
  {
    label: "Minimal living",
    imageSrc:
      "https://static.vecteezy.com/system/resources/thumbnails/002/423/288/small_2x/happy-family-together-avatar-international-family-day-happy-dad-hugs-mom-and-children-group-of-people-father-mother-daughter-and-son-illustration-vector.jpg",
    href: "",
  },
  {
    label: "Minimal Fin essentials",
    imageSrc:
      "https://static.vecteezy.com/system/resources/thumbnails/002/423/288/small_2x/happy-family-together-avatar-international-family-day-happy-dad-hugs-mom-and-children-group-of-people-father-mother-daughter-and-son-illustration-vector.jpg",
    href: "",
  },
  {
    label: "Minimal living",
    imageSrc:
      "https://static.vecteezy.com/system/resources/thumbnails/002/423/288/small_2x/happy-family-together-avatar-international-family-day-happy-dad-hugs-mom-and-children-group-of-people-father-mother-daughter-and-son-illustration-vector.jpg",
    href: "",
  },
  {
    label: "Newly wed essentials",
    imageSrc:
      "https://static.vecteezy.com/system/resources/thumbnails/002/423/288/small_2x/happy-family-together-avatar-international-family-day-happy-dad-hugs-mom-and-children-group-of-people-father-mother-daughter-and-son-illustration-vector.jpg",
    href: "",
  },
];

// TODO: send topics as props later
const Topics = () => {
  const theme: any = useTheme();
  return (
    <>
      <div
        style={{
          background: theme.palette.background.hero,
          padding: "20px 0 0 20px",
          fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
          color: theme.palette.text.primary,
        }}
      >
        Explore Topics
      </div>
      <TopicsWrapper>
        {topics.map((topic: Topic, index: number) => (
          <Card
            key={index}
            sx={{
              maxWidth: !isViewportMobile() ? 300 : 100,
              textAlign: "center",
              flex: "1 1 180px",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                width="100%"
                image={topic.imageSrc || "/static/images/cards/default.jpg"} // Default image
                alt={topic.label}
              />
              <CardContent sx={{ padding: "8px", minHeight: "50px" }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    wordWrap: "break-word",
                  }}
                >
                  {topic.label}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </TopicsWrapper>
    </>
  );
};

export default Topics;
