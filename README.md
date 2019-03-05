# [Cuistot du Coin](https://www.cuistotducoin.com) :

## EDITOR SETUP:
  - Use TSLint

## SETUP:
  - Copy the provided secrets file to the root (look at .env-example)
  - `yarn` to install dependencies
  - `yarn dev` for development server
  - `yarn build` for production server (pages)
  - `yarn build-lambda` for production server (lambda)
  - `yarn build-assets` for production files (robots, sitemap)
  - `yarn lambda` for development serverless (use build-phase before lambda)
  - `yarn deploy` for deploying on AWS (circleCI will handle that)
 
 ## TECHNOLOGIES:
   ### Libraries & Packages
    * Uses TypeScript for types with Javascript
    * Uses MaterialUI for Generic Components
    * Uses Formik for form validation
    * Uses Next for universal server-rendering
    * Uses Apollo, aws-amplify, aws-appsync for providing API calls directly to components.
    * Uses Algolia for search