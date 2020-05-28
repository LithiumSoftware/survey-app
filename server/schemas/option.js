export const typeDef = `
  type Option {
    id: ID!
    text: String!
    question: Question!
    answers: [Answer!]!
    createdAt: Date
    updatedAt: Date
  }
`;

export const resolvers = {
  Option: {
    question: (option) => option.getQuestion(),
    answers: (option) => option.getAnswers(),
  },
};
