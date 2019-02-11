import gql from 'graphql-tag';

export default gql`
  query GetWorkshops {
    getWorkshops {
      workshops {
        edges {
          node {
            id
            name
          }
          cursor
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
      }
      message
      errors {
        message
      }
    }
  }
`;
