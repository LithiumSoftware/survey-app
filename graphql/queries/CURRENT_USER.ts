import gql from "graphql-tag";

export default gql`
  query CurrentUser {
    me {
      id
      username
      role
    }
  }
`;
