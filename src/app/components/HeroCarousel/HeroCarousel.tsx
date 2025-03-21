import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@emotion/react";
import { Box, Card, CardMedia, IconButton, Typography } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const data = [
  {
    src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
    title: "Night view",
    description: "4.21M views",
  },
  {
    src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
    title: "Lake view",
    description: "4.74M views",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Mountain view",
    description: "3.98M views",
  },
];

export default function HeroCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const theme: any = useTheme();
  console.log("theme", theme);

  const scrollToCard = (index: number) => {
    const container = carouselRef.current;
    if (!container) return;

    const cardWidth = container.offsetWidth;
    container.scrollTo({ left: cardWidth * index, behavior: "smooth" });
    setActiveIndex(index);
  };

  const handleScroll = () => {
    const container = carouselRef.current;
    if (!container) return;

    const cardWidth = container.offsetWidth;
    const scrollLeft = container.scrollLeft;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % data.length;
        scrollToCard(newIndex);
        return newIndex;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 300,
        maxHeight: 200,
        overflow: "hidden",
      }}
    >
      {/* Left Button */}
      <IconButton
        color="default"
        size="small"
        sx={{
          backgroundColor: (theme) => theme.palette.grey[100],
          "&:hover": {
            backgroundColor: (theme) => theme.palette.grey[200],
          },
          color: 'black',
          position: "absolute",
          top: "50%",
          left: 5,
          transform: "translateY(-50%)",
          zIndex: 2,
        }}
        onClick={() => scrollToCard(activeIndex === 0 ? data.length - 1 : activeIndex - 1)}
      >
        <ChevronLeft />
      </IconButton>

      {/* Carousel */}
      <Box
        ref={carouselRef}
        onScroll={handleScroll}
        sx={{
          display: "flex",
          gap: 0,
          py: 1,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          "& > *": {
            scrollSnapAlign: "center",
            flex: "0 0 100%",
          },
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1, x: 50 }}
            animate={{
              opacity: activeIndex === index ? 1 : 0.7,
              scale: activeIndex === index ? 1 : 0.5,
              x: 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            // style={{ width: "70%" }}
          >
            <Card
              variant="outlined"
              sx={{ margin: "auto", cursor: "pointer" }}
            >
              {/* Using MUI's CardMedia to maintain a 1:1 aspect ratio */}
              {/* <CardMedia
                component="img"
                image={`${item.src}?h=120&fit=crop&auto=format`}
                srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                sx={{
                  aspectRatio: "2.3", // CSS property to enforce a 1:1 ratio
                  minWidth: 80,
                  objectFit: "cover",
                  display: "none  ",
                }}
              /> */}
              <Box sx={{ mx: 2, my: 1 }}>
                <Typography variant="subtitle1">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </Box>
            </Card>
          </motion.div>
        ))}
      </Box>

      {/* Right Button */}
      <IconButton
        color="default"
        size="small"
        sx={{
          backgroundColor: (theme) => theme.palette.grey[100],
          "&:hover": {
            backgroundColor: (theme) => theme.palette.grey[200],
          },
          position: "absolute",
          top: "50%",
          right: 5,
          transform: "translateY(-50%)",
          zIndex: 2,
          color: 'black'
        }}
        onClick={() => scrollToCard((activeIndex + 1) % data.length)}
      >
        <ChevronRight />
      </IconButton>

      {/* Dots */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 1, gap: 1, background: 'blue' }}>
        {data.map((_, index) => (
          <Box
            key={index}
            onClick={() => scrollToCard(index)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor:
              activeIndex === index
                ? theme.palette.primary.main // highlight active dot
                : theme.palette.grey[400],   // inactive dot color              cursor: "pointer",
              transition: "background-color 0.3s ease",
              cursor: "pointer",
              border: "1px solid black",
              zIndex: 2,
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
