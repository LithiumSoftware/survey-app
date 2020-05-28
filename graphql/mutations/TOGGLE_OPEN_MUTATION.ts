import gql from "graphql-tag";

export default gql`
  mutation ToggleOpen($id: ID!) {
    toggleOpen(id: $id)
  }
`;
