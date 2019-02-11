import gql from 'graphql-tag';

export default gql`
  mutation updateGourmet($gourmet: UpdateGourmetInput!) {
    updateGourmet(gourmet: $gourmet) {
      gourmet {
        id
        identity_id
        image {
          key
        }
        username
        gender
        first_name
        last_name
        email
        description
        birthdate
        phone_number
        address
        city
        zip_code
      }
      message
      errors {
        message
      }
    }
  }
`;
