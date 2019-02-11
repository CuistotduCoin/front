import awsServerlessExpressMiddleware from "aws-serverless-express/middleware";
import compression from "compression";
import express from "express";
import * as next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

function createServer() {
  const server = express();
  server.use(compression()); // See https://github.com/expressjs/compression/issues/133
  server.use(awsServerlessExpressMiddleware.eventContext());

  // use next.js
  server.get("*", (req, res) => handle(req, res));
  return server;
}

export default createServer();
