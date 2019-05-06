const compat = require("serverless-nextjs-plugin/aws-lambda-compat");

module.exports = page => {
    return RavenLambdaWrapper.handler(Raven, (event, context, callback) => {
        compat(page)(event, context, callback);
    })
};