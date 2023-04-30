import { gql } from '@apollo/client';

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export {
  GET_CHARACTERS
}