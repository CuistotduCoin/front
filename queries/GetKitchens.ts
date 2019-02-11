import gql from 'graphql-tag';

export default gql`
  query GetKitchens {
    getKitchens {
      kitchens {
        edges {
          node {
            id
            name
          }
        }
      }
      message
      errors {
        message
      }
    }
  }
`;
