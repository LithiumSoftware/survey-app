import gql from "graphql-tag";

export default gql`
  mutation Signup(
    $username: String!
    $fullname: String!
    $email: String!
    $password: String!
  ) {
    signedUser(
      input: {
        username: $username
        fullName: $fullname
        email: $email
        password: $password
      }
    )
  }
`;
