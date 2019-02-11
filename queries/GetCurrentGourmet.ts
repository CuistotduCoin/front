import gql from 'graphql-tag';

export default gql`
  query GetCurrentGourmet {
    getCurrentGourmet {
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
        phone_number,
        address
        city
        zip_code
      },
      message,
      errors {
        message
      }
    }
  }
`;
