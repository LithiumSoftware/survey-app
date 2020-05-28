import { UserInputError } from "apollo-server-micro";
import { authenticated } from "./scalars";

export const typeDef = `
  extend type Query {
    survey(id: ID!): Survey
    surveys: [Survey]
  }

  extend type Mutation {
    createSurvey(input: CreateSurveyInput!): Survey!
    toggleOpen(id: ID!): Boolean!
  }

  input CreateSurveyInput {
    title: String!
    published: Boolean!
    questions: [CreateQuestionInput!]!
  }

  input CreateQuestionInput {
    text: String!
    options: [CreateOptionInput!]!
  }

  input CreateOptionInput {
    text: String!
  }

  type Survey {
    id: ID!
    user: User
    title: String!
    questions: [Question!]!
    opened: Boolean!
    published: Boolean!
    createdAt: Date
    updatedAt: Date
  }  
`;

export const resolvers = {
  Query: {
    survey: (root, { id }, { db }) => db.survey.findByPk(id),
    surveys: (root, args, { db, currentUserId }) => {
      if (currentUserId) {
        return db.user.findByPk(currentUserId).then((user) =>
          user.role === "ADMIN"
            ? db.survey.findAll({
                order: [["createdAt", "ASC"]],
              })
            : db.survey.findAll({
                where: { published: true },
                order: [["createdAt", "ASC"]],
              })
        );
      } else {
        return db.survey.findAll({
          where: { published: true },
          order: [["createdAt", "ASC"]],
        });
      }
    },
  },
  Mutation: {
    createSurvey: authenticated((root, { input }, { db, currentUserId }) =>
      db.survey
        .create({
          title: input.title,
          opened: true,
          published: input.published,
          userId: currentUserId,
        })
        .then((survey) => {
          if (survey) {
            input.questions.map((createQuestionInput) =>
              db.question
                .create({
                  text: createQuestionInput.text,
                  surveyId: survey.dataValues.id,
                })
                .then((question) => {
                  if (question) {
                    createQuestionInput.options.map((createOptionInput) =>
                      db.option
                        .create({
                          ...createOptionInput,
                          questionId: question.dataValues.id,
                        })
                        .then((option) => {
                          if (!option) {
                            throw new UserInputError(
                              "Something went wrong with the creation of an option."
                            );
                          }
                        })
                        .catch((err) => {
                          throw new UserInputError(
                            "Something went wrong with the creation of an option."
                          );
                        })
                    );
                  } else {
                    throw new UserInputError(
                      "Something went wrong with the creation of a question."
                    );
                  }
                })
                .catch((err) => {
                  throw new UserInputError(
                    "Something went wrong with the creation of a question."
                  );
                })
            );
            return survey;
          } else {
            throw new UserInputError(
              "Something went wrong with the creation of the survey."
            );
          }
        })
        .catch((err) => {
          throw new UserInputError(
            "Something went wrong with the creation of the survey."
          );
        })
    ),
    toggleOpen: authenticated((root, { id }, { db, currentUserId }) =>
      db.survey
        .findByPk(id)
        .then((survey) =>
          survey
            .update({ opened: !survey.dataValues.opened })
            .then((updated) => (updated ? true : false))
            .catch(() => false)
        )
        .catch(() => false)
    ),
  },
  Survey: {
    user: (survey) => survey.getUser(),
    questions: (survey) => survey.getQuestions(),
  },
};
