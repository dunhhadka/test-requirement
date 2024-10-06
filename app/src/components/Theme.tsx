import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  spacing: 8, 
  palette: {
    primary: {
      main: "#1976d2", 
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif", 
    fontSize: 14,
  },
});
export default theme;