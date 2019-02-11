import gql from 'graphql-tag';

export default gql`
  mutation updateCook($cook: UpdateCookInput!) {
    updateCook(cook: $cook) {
      message
      errors {
        message
      }
    }
  }
`;
