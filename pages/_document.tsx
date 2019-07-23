import { ServerStyleSheets } from '@material-ui/styles';
import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import theme from '../decorators/theme'

class MyDocument extends Document {
  public render() {
    // @ts-ignore
    const { pageContext } = this.props;

    return (
      <html lang="fr" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
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
            href="https://fonts.googleapis.com/css?family=Advent+Pro:300,400,500,700&display=swap"
          />
          <script src="https://gl.hostcg.com/js/genlead.js" defer />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.ltwAsyncInit = function(){init_multiplegl('https://gl.hostcg.com/',[['https://gl.hostcg.com/','2346','svolxbjcwm']]);};`
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="9be7ee4d-531c-4885-90c7-2a190c06a0cc";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '1669074413375602');fbq('track', 'PageView');`
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `_linkedin_partner_id = "419348"; window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; window._linkedin_data_partner_ids.push(_linkedin_partner_id);(function(){var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script"); b.type = "text/javascript";b.async = true; b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; s.parentNode.insertBefore(b, s);})();`
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");ym(52599466,"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
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
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      // tslint:disable-next-line: variable-name
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>,
    ],
  };
};

export default MyDocument;