import awsServerlessExpress from "aws-serverless-express";
import compression from "compression";
import express from "express";
import path from "path";
import pathMatch from "path-match";
import raven from "raven";
import ravenLambdaWrapper from "serverless-sentry-lib";
import { parse } from "url";

// setup Express and hook up Next.js handler
const app = express();
app.use(compression());

const route = pathMatch();
const matches = [
  { route: route("/workshops/:id/edit"), page: "/workshop-edit" },
  { route: route("/workshops/new"), page: "/workshop-new" },
  { route: route("/workshops/:id"), page: "/workshop" },
];
const binaryMimeTypes = ['*/*'];

app.use("/_next/static", express.static(path.join(__dirname, "./static")));

app.get('/', __non_webpack_require__('./serverless/pages/index').render);
app.get('*', (req, res) => {
  const parsedUrl = parse(req.url, true);
  const { pathname, query } = parsedUrl;

  const rootStaticFiles = ['/robots.txt', '/sitemap.xml', '/browserconfig.xml', 'manifest.json']
  if (rootStaticFiles.indexOf(pathname) > -1) {
    const pathStatic = path.join(__dirname, './static', pathname);
    res.sendFile(pathStatic);
  } else {
    let hasMatch = false;
    for (const match of matches) {
      const params = match.route(pathname);
      if (params) {
        try {
          __non_webpack_require__(`./serverless/pages${pathname}`).render(req, res, match.page, Object.assign(params, query))
        } catch (err) {
          __non_webpack_require__('./serverless/pages/_error').render(req, res, match.page, Object.assign(params, query))
        }
        hasMatch = true;
        break;
      }
    }
    if (!hasMatch) {
      try {
        __non_webpack_require__(`./serverless/pages${pathname}`).render(req, res, parsedUrl)
      } catch (err) {
        __non_webpack_require__('./serverless/pages/_error').render(req, res, parsedUrl)
      }
    }
  }
})

// 404 handler
app.get("*", __non_webpack_require__('./serverless/pages/_error').render);

const server = awsServerlessExpress.createServer(app, null, binaryMimeTypes);
const lambda = (event, context) => awsServerlessExpress.proxy(server, event, context);
const ravenHandler = ravenLambdaWrapper.handler(raven, lambda);

// export the wrapped handler for the Lambda runtime
exports.handler = ravenHandler;