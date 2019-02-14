const compression = require("compression");
const express = require("express");
const { parse } = require("url");
const serverless = require("serverless-http");
const isProduction = process.env.NODE_ENV === "production";

// setup Express and hook up Next.js handler
const app = express();
app.use(compression());

// tslint:disable-next-line
const pathMatch = require("path-match");

const getPage = page => require(`./.next/serverless/pages/${page}`).render;
const route = pathMatch();
const matches = [
  { route: route("/"), page: "/home" },
  { route: route("/workshops/:id/edit"), page: "/workshop-edit" },
  { route: route("/workshops/new"), page: "/workshop-new" },
  { route: route("/workshops/:id"), page: "/workshop" },
];

// for local development (serverless offline)
if (!isProduction) {
  // host the static files
  app.use("/_next/static", express.static("./.next/static"));
  app.use("/static", express.static("./static"));
}

app.get('*', (req, res) => {

  const parsedUrl = parse(req.url, true);
  const { pathname, query } = parsedUrl;
  let hasMatch = false;

  for (const match of matches) {
    const params = match.route(pathname);
    if (params) {
      try {
        require(`./.next/serverless/pages${pathname}`).render(req, res, match.page, Object.assign(params, query))
      } catch (err) {
        require('./.next/serverless/pages/_error').render(req, res, match.page, Object.assign(params, query))
      }
      hasMatch = true;
      break;
    }
  }
  if (!hasMatch) {
    try {
      require(`./.next/serverless/pages${pathname}`).render(req, res, parsedUrl)
    } catch (err) {
      require('./.next/serverless/pages/_error').render(req, res, parsedUrl)
    }
  }
})

// 404 handler
app.get("*", require('./.next/serverless/pages/_error').render);

// export the wrapped handler for the Lambda runtime
exports.handler = serverless(app);