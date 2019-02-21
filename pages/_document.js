import React from 'react';
import PropTypes from 'prop-types';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

class MyDocument extends Document {
  render() {
    const { pageContext } = this.props;

    return (
      <html lang="fr" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          {/* PWA primary color */}
          <meta name="theme-color" content={pageContext.theme.palette.primary.main} />
          <link
            rel="shortcut icon"
            href="https://static.cuistotducoin.com/favicon/favicon.ico"
            type="image/x-icon"
          />
          <link rel="icon" href="https://static.cuistotducoin.com/favicon/favicon.png" type="image/png" />
          <link
            rel="icon"
            sizes="32x32"
            href="https://static.cuistotducoin.com/favicon/favicon-32.png"
            type="image/png"
          />
          <link
            rel="icon"
            sizes="64x64"
            href="https://static.cuistotducoin.com/favicon/favicon-64.png"
            type="image/png"
          />
          <link
            rel="icon"
            sizes="96x96"
            href="https://static.cuistotducoin.com/favicon/favicon-96.png"
            type="image/png"
          />
          <link
            rel="icon"
            sizes="96x96"
            href="https://static.cuistotducoin.com/favicon/favicon-144.png"
            type="image/png"
          />
          <link
            rel="icon"
            sizes="96x96"
            href="https://static.cuistotducoin.com/favicon/favicon-196.png"
            type="image/png"
          />
          <link
            rel="shortcut icon"
            href="https://static.cuistotducoin.com/favicon/favicon.ico"
            type="image/x-icon"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="https://static.cuistotducoin.com/favicon/apple-touch-icon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="https://static.cuistotducoin.com/favicon/apple-touch-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="https://static.cuistotducoin.com/favicon/apple-touch-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="https://static.cuistotducoin.com/favicon/apple-touch-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="https://static.cuistotducoin.com/favicon/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="https://static.cuistotducoin.com/favicon/apple-touch-icon-144x144.png"
          />
          <link
            rel="icon"
            sizes="196x196"
            href="https://static.cuistotducoin.com/favicon/favicon-196.png"
            type="image/png"
          />
          <meta
            name="msapplication-TileImage"
            content="https://static.cuistotducoin.com/favicon/favicon-144.png"
          />
          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <link
            rel="icon"
            href="https://static.cuistotducoin.com/favicon/animated_favicon.gif"
            type="image/gif"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <style>{`
          body {
            margin: 0;
            padding: 0;
            font-family: Roboto;
          }

          a {
            text-decoration: none;
          }

          *[class*="MuiTypography-headline-"] {
            font-family: 'PT Sans', sans-serif !important;
            font-weight: bold !important;
          }

          *[class*="MuiTypography-title-"],
          *[class*="MuiTypography-subheading-"],
          *[class*="MuiTypography-body2-"] {
            font-family: 'PT Sans', sans-serif !important;
          }

          /* Input Range */

          *[class*="input-range__slider"] {
            background: #388e3c;
            border: 1px solid #388e3c;
          }

          *[class*="input-range__track--active"] {
            background: #388e3c;
          }

          /* --- */

          .slick-prev:before,
          .slick-next:before {
            color: black;
          }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  let pageContext;
  const page = ctx.renderPage(Component => {
    const WrappedComponent = props => {
      pageContext = props.pageContext;
      return <Component {...props} />;
    };

    WrappedComponent.propTypes = {
      pageContext: PropTypes.object.isRequired,
    };

    return WrappedComponent;
  });

  let css;
  // It might be undefined, e.g. after an error.
  if (pageContext) {
    css = pageContext.sheetsRegistry.toString();
  }

  return {
    ...page,
    pageContext,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <React.Fragment>
        <style
          id="jss-server-side"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: css }}
        />
        {flush() || null}
      </React.Fragment>
    ),
  };
};

export default MyDocument;