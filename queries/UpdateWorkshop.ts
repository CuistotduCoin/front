import gql from 'graphql-tag';

export default gql`
  mutation updateWorkshop($workshop: UpdateWorkshopInput!) {
    updateWorkshop(workshop: $workshop) {
      message
      errors {
        message
      }
    }
  }
`;
