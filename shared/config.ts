import Auth from "@aws-amplify/auth";
import { AUTH_TYPE } from "aws-appsync/lib/link/auth-link";

const amplifyConfig = {
  Auth: {
    mandatorySignIn: false,
    region: process.env.AWS_REGION_IRELAND,
    userPoolId: process.env.AWS_USERPOOL_ID,
    userPoolWebClientId: process.env.AWS_APP_CLIENT_ID,
    identityPoolId: process.env.AWS_IDENTITY_POOL_ID
  },
  Storage: {
    bucket: process.env.AWS_STORE_BUCKET,
    region: process.env.AWS_REGION_IRELAND
  },
  aws_appsync_graphqlEndpoint: process.env.GRAPHQL_API_URL,
  aws_appsync_region: process.env.AWS_REGION_IRELAND,
  aws_appsync_authenticationType: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS
};

const apolloConfig = {
  url: process.env.GRAPHQL_API_URL,
  region: process.env.AWS_REGION_IRELAND,
  auth: {
    type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
    jwtToken: async () => {
      return Auth.currentSession()
        .then(currentSession => {
          return currentSession.getIdToken().getJwtToken();
        })
        .catch((err) => {
          console.error(err);
        });
    }
  },
};

export { amplifyConfig, apolloConfig };