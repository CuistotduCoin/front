import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import App, { Container } from "next/app";
import Router from "next/router";
import React from "react";
import ProvidedApp from "../components/App";
import theme from "../decorators/theme";
import { initGA, logPageView } from "../shared/analytics";

class MyApp extends App {
  public componentDidMount() {
    initGA();
    logPageView();
    Router.router.events.on("routeChangeComplete", logPageView);
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode!.removeChild(jssStyles);
    }
  }

  public render() {
    const { Component, pageProps } = this.props;

    const { pathname } = this.props.router;
    let cleanPath = pathname.substr(1);
    if (cleanPath === "") {
      cleanPath = "index";
    }

    return (
      <Container>
        <ProvidedApp>
          {/* Wrap every page in Jss and Theme providers */}
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </ProvidedApp>
      </Container>
    );
  }
}

export default MyApp;
