import gql from "graphql-tag";

export default gql`
  mutation PublishSurvey($id: ID!) {
    publishSurvey(id: $id)
  }
`;
