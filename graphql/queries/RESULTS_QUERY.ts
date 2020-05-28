import gql from "graphql-tag";

export default gql`
  query Results($id: ID!) {
    results(id: $id) {
      survey {
        id
        title
      }
      questionsResults {
        question {
          id
          text
        }
        answers {
          answer {
            id
            text
          }
          count
        }
      }
      totalAnswers
    }
  }
`;
