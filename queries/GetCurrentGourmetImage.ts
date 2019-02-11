import gql from 'graphql-tag';

export default gql`
  query GetCurrentGourmetImage {
    getCurrentGourmet {
      gourmet {
        image {
          key
        }
      },
      message,
      errors {
        message
      }
    }
  }
`;
