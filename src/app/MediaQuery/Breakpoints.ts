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

const IsViewportMobile = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

    return isMobile
} 

export default IsViewportMobile