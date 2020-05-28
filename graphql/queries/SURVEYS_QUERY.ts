import gql from "graphql-tag";

export default gql`
  query Surveys {
    surveys {
      id
      title
      questions {
        id
        text
        options {
          id
          text
        }
      }
      opened
      published
    }
  }
`;
