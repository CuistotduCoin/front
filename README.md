# [Cuistot du Coin](https://www.cuistotducoin.com) :

## EDITOR SETUP:
  - Use TSLint

## SETUP:
  - Copy the provided secrets file to the root (look at .env-example)
  - `yarn` to install dependencies
  - `yarn start` for development server (careful with env:EXECUTION_ENV, shouldn't be "lambda")
  - `yarn build` for production server
  - `yarn startLambda` for development serverless (careful with env:EXECUTION_ENV, should be "lambda"; use build before lambda)
  - `yarn deploy` for deploying on AWS
 
 ## TECHNOLOGIES:
  1. ### API's
    * [Algolia](https://www.algolia.com/) | Search.
    * [MangoPay](https://www.mangopay.com/) | Payment for Marketplace.
    * [Serverless](http://serverless.com) | Framework covering AWS Lambda.
    * [AWS SES](https://aws.amazon.com/ses/) | Email Notifications.
    * [AWS SNS](https://aws.amazon.com/sns/) | Receiving Backend Push Notifications.
    * [AWS S3](https://aws.amazon.com/s3/) | Static asset hosting.
    * [AWS Route 53](https://aws.amazon.com/route53/) | DNS routing.
    * [AWS CloudFront](https://aws.amazon.com/cloudfront/) | Latency reduction via CDN.
    * [AWS Lambda](https://aws.amazon.com/lambda/) | All Backend Services.
    * [AWS Api-Gateway](https://aws.amazon.com/api-gateway/) | HTTP endpoints for Lambda services.
    * [AWS AppSync](https://aws.amazon.com/appsync/) | GraphQL.
    * [AWS Cognito](https://aws.amazon.com/cognito/) | User Management.

  2. ### Libraries & Packages
    * Uses _TypeScript_ for types with Javascript
    * Uses _MaterialUI_ for Generic Components
    * Uses _Formik_ for form validation
    * Uses _Razzle_ with _After_ for universal server-rendereding
    * Uses _Apollo_, _aws-amplify_, _aws-appsync_ for providing API calls directly to componenents.
    * Uses _React Router (4)_ for routing.
    * Uses Jest + Enzyme for testing.
