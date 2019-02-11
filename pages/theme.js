import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import { createMuiTheme } from "@material-ui/core/styles";

// Configure Material UI theme
const theme = createMuiTheme({
  palette: {
    primary: {
      dark: green[700],
      light: green[300],
      main: green[500]
    },
    secondary: {
      dark: red[700],
      light: red[300],
      main: red[500]
    }
  },
  typography: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: 14
  }
});

export default theme;
