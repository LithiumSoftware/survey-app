import gql from "graphql-tag";

export default gql`
  mutation CreateSurvey($input: CreateSurveyInput!) {
    createSurvey(input: $input) {
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
      published
    }
  }
`;
