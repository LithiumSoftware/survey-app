export const typeDef = `
  type Option {
    id: ID!
    text: String!
    question: Question!
    createdAt: Date
    updatedAt: Date
  }
`;

export const resolvers = {
  Option: {
    question: (option) => option.getQuestion(),
  },
};
