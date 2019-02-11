import gql from 'graphql-tag';

export default gql`
  query GetWorkshop($workshop_id: ID!) {
    getWorkshop(workshop_id: $workshop_id) {
      workshop {
        id
        name
        description
        duration
        price
        date
        confirmed
        min_gourmet
        max_gourmet
        images {
          key
        }
        cook {
          id
          image {
            key
          }
          gourmet {
            identity_id
            first_name
            last_name
          }
          evaluations {
            id
            author {
              identity_id
              first_name
              last_name
              image {
                key
              }
            }
            rating
            comment
            created_at
          }
        }
        bookings {
          id
        }
      }
      message
      errors {
        message
      }
    }
  }
`;