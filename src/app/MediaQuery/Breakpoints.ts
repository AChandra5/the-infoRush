/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMediaQuery, useTheme } from "@mui/material";

//Not using anywhere, just for ref.
const defaultMuiBreakpoints = {
    xs : "0-600px",
    sm: "600-960px",
    md: "960-1280px",
    lg: "1280-1920px",
    xl: "1920px+"
}

// ✅ Correct: custom hook

const useIsViewportMobile = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("sm"));
};

export default useIsViewportMobile;


