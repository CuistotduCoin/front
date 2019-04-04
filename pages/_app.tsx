import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import App, { Container } from 'next/app';
import Router from 'next/router'
import Raven from 'raven-js'
import React from 'react';
import ProvidedApp from '../components/App';
import getPageContext from '../decorators/getPageContext';
import { initGA, logPageView } from '../shared/analytics'
import { getMetaInfo, renderSEO } from "../shared/seo";

class MyApp extends App {

  public static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  public pageContext = null;

  constructor(props) {
    super(props);
    this.pageContext = getPageContext();
    Raven.config(process.env.SENTRY_PUBLIC_DSN).install()
  }

  public componentDidCatch(error, errorInfo) {
    Raven.captureException(error, { extra: errorInfo })
    // This is needed to render errors correctly in development / production
    super.componentDidCatch(error, errorInfo)
  }

  public componentDidMount() {
    initGA();
    logPageView();
    Router.router.events.on('routeChangeComplete', logPageView);
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  public render() {
    const { Component, pageProps } = this.props;
    const { pathname } = this.props.router;
    let cleanPath = pathname.substr(1);
    if (cleanPath === '') { cleanPath = 'index' }

    return (
      <Container>
        <ProvidedApp>
          {/* Wrap every page in Jss and Theme providers */}
          <StylesProvider
            sheetsRegistry={this.pageContext.sheetsRegistry}
            generateClassName={this.pageContext.generateClassName}
            sheetsManager={this.pageContext.sheetsManager}
          >
            {/* ThemeProvider makes the theme available down the React
                tree thanks to React context. */}
            <ThemeProvider theme={this.pageContext.theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              {/* Pass pageContext to the _document though the renderPage enhancer
                  to render collected styles on server side. */}
              {renderSEO(getMetaInfo(), cleanPath)}
              <Component pageContext={this.pageContext} {...pageProps} />
            </ThemeProvider>
          </StylesProvider>
        </ProvidedApp>
      </Container>
    );
  }
}

export default MyApp;