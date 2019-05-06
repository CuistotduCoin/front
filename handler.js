const compat = require("serverless-nextjs-plugin/aws-lambda-compat");
const Raven = require("raven");
const RavenLambdaWrapper = require("serverless-sentry-lib")

module.exports = page => {
    return RavenLambdaWrapper.handler(Raven, (event, context, callback) => {
        compat(page)(event, context, callback);
    })
};