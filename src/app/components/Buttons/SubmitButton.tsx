import React from "react";
import Button from "@mui/material/Button";

interface SubmitButtonProps {
  text: string;
  bgColor?: string;
  hoverColor?: string;
  color?: string;
  onClick: () => void;
}

const SubmitButton = ({
  text,
  bgColor = "#FFEFD2",
  hoverColor,
  color = '#000720',
  onClick,
  ...props

}: SubmitButtonProps) => {
  return (
    <Button
      variant="contained"
      sx={{
        textTransform: "capitalize",
        borderRadius: "8px",
        padding: "5px 15px",
        backgroundColor: bgColor,
        fontWeight: "bold",
        color: color,
        "&:hover": {
          backgroundColor: hoverColor || bgColor,
          opacity: hoverColor ? 1 : 0.9,
        },
      }}
      {...props}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default SubmitButton;
