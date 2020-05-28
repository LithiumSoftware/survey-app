import gql from "graphql-tag";

export default gql`
  mutation CreateAnswer($optionId: ID!) {
    createAnswer(input: { optionId: $optionId }) {
      id
      user {
        id
        username
      }
      option {
        id
        text
      }
    }
  }
`;
