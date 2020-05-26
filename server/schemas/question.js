export const typeDef = `
  type Question {
    id: ID!
    text: String!
    survey: Survey!
    options: [Option!]!
    createdAt: Date
    updatedAt: Date
  }
`;

export const resolvers = {
  Question: {
    survey: (question) => question.getSurvey(),
    options: (question) => question.getOptions(),
  },
};
