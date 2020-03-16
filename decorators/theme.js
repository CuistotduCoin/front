import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import { createMuiTheme } from "@material-ui/core/styles";

// Configure Material UI theme
const theme = createMuiTheme({
  palette: {
    primary: {
      dark: green[900],
      light: green[500],
      main: green[700]
    },
    secondary: {
      dark: "#BF263C",
      light: red[300],
      main: "#D8334A"
    },
  },
  typography: {
    color: "rgba(0, 0, 0, 0.87)",
    fontFamily: "Advent Pro",
    fontSize: 15
  }
});

export default theme;
