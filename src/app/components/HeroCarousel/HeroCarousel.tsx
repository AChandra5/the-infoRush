import * as React from "react";
import { useRef, useState, useEffect } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = useTheme();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 3000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <Box sx={{ position: "relative", maxWidth: 360, mx: "auto" }}>
      <Box
        sx={{
          display: "flex",
          // overflow: "hidden",
          borderRadius: 2,
          boxShadow: 2,
          position: "relative",
        }}
      >
        {data.map((item, index) => (
          <Box
            key={index}
            sx={{
              transform: `translateX(-${activeIndex * 100}%)`,
              transition: "transform 0.5s ease-in-out",
              minWidth: "100%",
              height: 200,
              backgroundImage: `url(${item.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              p: 2,
              color: "white",
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ color: '#fff', textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>{item.title}</Typography>
              <Typography variant="caption" sx={{ color: '#ccc' }}>{item.description}</Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <IconButton
        onClick={prevSlide}
        sx={{
          position: "absolute",
          top: "50%",
          left: 8,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.4)",
          color: "white",
          zIndex: 1,
          '&:hover': { backgroundColor: "rgba(0,0,0,0.6)" },
        }}
      >
        <ChevronLeft />
      </IconButton>

      <IconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          top: "50%",
          right: 8,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.4)",
          color: "white",
          zIndex: 1,
          '&:hover': { backgroundColor: "rgba(0,0,0,0.6)" },
        }}
      >
        <ChevronRight />
      </IconButton>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 1, gap: 1 }}>
        {data.map((_, index) => (
          <Box
            key={index}
            onClick={() => setActiveIndex(index)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor:
                activeIndex === index
                  ? theme.palette.primary.main
                  : theme.palette.grey[400],
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
