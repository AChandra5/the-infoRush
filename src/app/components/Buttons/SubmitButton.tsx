import React from "react";
import Button from "@mui/material/Button";

interface SubmitButtonProps {
  children: string;
  bgColor?: string;
  hoverColor?: string;
  color?: string;
}

const SubmitButton = ({
  children,
  bgColor = "#FFEFD2",
  hoverColor,
  color = '#000720',
  ...props
}: SubmitButtonProps) => {
  return (
    <Button
      variant="contained"
      sx={{
        textTransform: "none",
        borderRadius: "8px",
        padding: "5px 15px",
        backgroundColor: bgColor,
        color: color,
        "&:hover": {
          backgroundColor: hoverColor || bgColor,
          opacity: hoverColor ? 1 : 0.9,
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
