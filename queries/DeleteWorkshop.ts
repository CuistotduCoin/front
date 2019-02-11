import gql from 'graphql-tag';

export default gql`
  mutation deleteWorkshop($workshop_id: ID!) {
    deleteWorkshop(workshop_id: $workshop_id) {
      message
      errors {
        message
      }
    }
  }
`;
