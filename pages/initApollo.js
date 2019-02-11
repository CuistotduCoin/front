import { AWSAppSyncClient } from "aws-appsync";
import fetch from "node-fetch";

// https://github.com/dabit3/next-apollo-appsync
let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

function create(initialState, appsyncConfig) {
  const client = new AWSAppSyncClient({
    ...appsyncConfig,
    disableOffline: true
  }, {
    ssrMode: true
  });

  if (initialState) {
    client.cache.restore(initialState);
  }

  return client;
}

export default function initApollo(initialState, appsyncConfig) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState, appsyncConfig);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, appsyncConfig);
  }

  return apolloClient;
}