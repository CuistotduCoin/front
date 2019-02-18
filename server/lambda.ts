const awsServerlessExpress = require("aws-serverless-express");
const compression = require("compression");
const express = require("express");
const path = require("path");
const pathMatch = require("path-match");
const raven = require("raven");
const ravenLambdaWrapper = require("serverless-sentry-lib");
const { parse } = require("url");

// setup Express and hook up Next.js handler
const app = express();
app.use(compression());

const route = pathMatch();
const matches = [
  { route: route("/"), page: "/home" },
  { route: route("/workshops/:id/edit"), page: "/workshop-edit" },
  { route: route("/workshops/new"), page: "/workshop-new" },
  { route: route("/workshops/:id"), page: "/workshop" },
];
const binaryMimeTypes = ['*/*'];

app.use("/_next/static", express.static(path.join(__dirname, "../static")));

app.get('/', require('../serverless/pages/index').render);
app.get('*', (req, res) => {

  const parsedUrl = parse(req.url, true);
  const { pathname, query } = parsedUrl;
  let hasMatch = false;

  for (const match of matches) {
    const params = match.route(pathname);
    if (params) {
      try {
        require(`../serverless/pages${pathname}`).render(req, res, match.page, Object.assign(params, query))
      } catch (err) {
        require('../serverless/pages/_error').render(req, res, match.page, Object.assign(params, query))
      }
      hasMatch = true;
      break;
    }
  }
  if (!hasMatch) {
    try {
      require(`../serverless/pages${pathname}`).render(req, res, parsedUrl)
    } catch (err) {
      require('../serverless/pages/_error').render(req, res, parsedUrl)
    }
  }
})

// 404 handler
app.get("*", require('../serverless/pages/_error').render);

const server = awsServerlessExpress.createServer(app, null, binaryMimeTypes);
const lambda = (event, context) => awsServerlessExpress.proxy(server, event, context);
const ravenHandler = ravenLambdaWrapper.handler(raven, lambda);

// export the wrapped handler for the Lambda runtime
exports.handler = ravenHandler;