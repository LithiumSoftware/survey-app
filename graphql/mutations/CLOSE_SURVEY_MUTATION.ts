import gql from "graphql-tag";

export default gql`
  mutation CloseSurvey($id: ID!) {
    closeSurvey(id: $id)
  }
`;
