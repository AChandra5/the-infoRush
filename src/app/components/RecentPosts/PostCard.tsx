"use client";
import React from "react";
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import { trackClickEvent } from "@/events/gtagEvents/CTATracker";
import Image from "next/image";
interface PostCardProps {
  image: string;
  category: string;
  title: string;
  href: string;
  date: string;
  categoryColor?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StyledCard = styled(Card)<{ theme?: any }>`
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

  .MuiCardMedia-root {
    transition: transform 0.3s ease;
  }

  &:hover .MuiCardMedia-root {
    transform: scale(1.05);
  }
`;

const categoryColorMap = {
  Finance: "#7a6e4b",
  Sports: "#f97316",
  Technology: "#3b82f6",
};

const PostCard: React.FC<PostCardProps> = ({
  image,
  category,
  title,
  href,
  date,
}) => {
  const theme = useTheme();
  const categoryColor =
    categoryColorMap[category as keyof typeof categoryColorMap] || "#2d3748";
  return (
    <a
      href={href}
      target="_blank"
      style={{ textDecoration: "none" }}
      onClick={() =>
        trackClickEvent({
          action: "click",
          category: "navigation_from_recent_posts_carousal",
          label: `${title}`,
        })
      }
    >
      <StyledCard theme={theme} sx={{ flex: "1 1 280px", maxWidth: "100%" }}>
        <div style={{ position: "relative", width: "100%", height: "180px" }}>
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "fill" }}
            sizes="(max-width: 600px) 100vw, 400px"
          />
        </div>

        <CardContent sx={{ padding: "12px" }}>
          <Typography
            variant="caption"
            sx={{
              backgroundColor: categoryColor,
              color: "#fff",
              padding: "2px 8px",
              borderRadius: "4px",
              fontSize: "11px",
              display: "inline-block",
              textTransform: "uppercase",
              fontWeight: "bold",
              marginBottom: "6px",
            }}
          >
            {category}
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            sx={{ fontWeight: 600 }}
          >
            {title}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            • {date}
          </Typography>
        </CardContent>
      </StyledCard>
    </a>
  );
};

export default PostCard;
