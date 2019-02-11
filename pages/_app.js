import React from 'react';
import App, { Container } from 'next/app';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from './getPageContext';
import ProvidedApp from '../components/App';
import Raven from 'raven-js'
import Head from '../components/Head';

const SENTRY_PUBLIC_DSN = '';

class MyApp extends App {
  constructor(props) {
    super(props);
    this.pageContext = getPageContext();
    Raven.config(SENTRY_PUBLIC_DSN).install()
  }

  pageContext = null;

  componentDidCatch(error, errorInfo) {
    Raven.captureException(error, { extra: errorInfo })

    // This is needed to render errors correctly in development / production
    super.componentDidCatch(error, errorInfo)
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ProvidedApp>
          {/* Wrap every page in Jss and Theme providers */}
          <JssProvider
            registry={this.pageContext.sheetsRegistry}
            generateClassName={this.pageContext.generateClassName}
          >
            {/* MuiThemeProvider makes the theme available down the React
                tree thanks to React context. */}
            <MuiThemeProvider
              theme={this.pageContext.theme}
              sheetsManager={this.pageContext.sheetsManager}
            >
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              {/* Pass pageContext to the _document though the renderPage enhancer
                  to render collected styles on server side. */}
              <Head />
              <Component pageContext={this.pageContext} {...pageProps} />
            </MuiThemeProvider>
          </JssProvider>
        </ProvidedApp>
      </Container>
    );
  }
}

export default MyApp;