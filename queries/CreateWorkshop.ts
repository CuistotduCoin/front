import gql from 'graphql-tag';

export default gql`
  mutation CreateWorkshop($workshop: CreateWorkshopInput!) {
    createWorkshop(workshop: $workshop) {
      workshop {
        id
      }
      message,
      errors {
        message
      }
    }
  }
`;