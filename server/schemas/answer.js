import { ForbiddenError } from "apollo-server-micro";

export const typeDef = `
  extend type Query {
    answers: [Answer]
  }

  extend type Mutation {
    createAnswer(input: CreateAnswerInput!): Answer!
  }

  input CreateAnswerInput {
    optionId: ID!
  }

  type Answer {
    id: ID!
    user: User
    option: Option!
    createdAt: Date
    updatedAt: Date
  }
`;

export const resolvers = {
  Query: {
    answers: (root, args, { db }) =>
      db.answer.findAll({
        order: [["createdAt", "ASC"]],
      }),
  },
  Mutation: {
    createAnswer: (root, { input }, { db, currentUserId }) => {
      if (currentUserId) {
        return db.answer
          .findAll({
            where: { userId: currentUserId, optionId: input?.optionId },
          })
          .then((answer) => {
            if (!answer || answer.length === 0) {
              return db.answer.create({
                optionId: input.optionId,
                userId: currentUserId,
              });
            } else {
              throw new ForbiddenError("You have already answered the survey");
            }
          });
      } else {
        return db.answer.create({
          optionId: input.optionId,
          userId: null,
        });
      }
    },
  },
  Answer: {
    user: (answer) => answer.getUser(),
    option: (answer) => answer.getOption(),
  },
};
