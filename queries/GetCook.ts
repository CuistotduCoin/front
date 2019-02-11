import gql from 'graphql-tag';

export default gql`
  query GetCook($cook_id: ID!) {
    getCook(cook_id: $cook_id) {
      cook {
        is_pro
        description
        confirmed
        business_name
        siren
        pro_email
        pro_phone_number
        legal_first_name
        legal_last_name
        legal_birthdate
      },
      message,
      errors {
        message
      }
    }
  }
`;
