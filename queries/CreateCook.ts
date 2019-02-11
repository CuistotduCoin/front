import gql from 'graphql-tag';

export default gql`
  mutation CreateCook($cook: CreateCookInput!) {
    createCook(cook: $cook) {
      message,
      errors {
        message
      }
    }
  }
`;
