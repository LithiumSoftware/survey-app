import { UserInputError } from "apollo-server-micro";
import { authenticated } from "./scalars";

export const typeDef = `
  extend type Query {
    survey(id: ID!): Survey
    surveys: [Survey]
    results(id: ID!): Result
  }

  extend type Mutation {
    createSurvey(input: CreateSurveyInput!): Survey!
    closeSurvey(id: ID!): Boolean!
    publishSurvey(id: ID!): Boolean!
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
    answered: Boolean
    createdAt: Date
    updatedAt: Date
  }

  type Result {
    survey: Survey!
    questionsResults: [QuestionResults!]!
    totalAnswers: Float!
  }

  type QuestionResults {
    question: Question!,
    answers: [QuestionAnswers!]
  }

  type QuestionAnswers {
    answer: Option!
    count: Float!
  }
`;

export const resolvers = {
  Query: {
    survey: (root, { id }, { db }) => db.survey.findByPk(id),
    surveys: (root, args, { db, currentUserId }) => {
      if (currentUserId) {
        return db.user.findByPk(currentUserId).then((user) =>
          user && user.role === "ADMIN"
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
    results: (root, { id }, { db }) => {
      return db.survey.findByPk(id).then(async (survey) => {
        let totalAnswers = 0;
        const questionResults = await db.question
          .findAll({ where: { surveyId: survey.dataValues.id } })
          .map(async (question, index) => {
            const answers = await db.option
              .findAll({ where: { questionId: question.dataValues.id } })
              .map(async (option) => {
                const count = await db.answer.findAll({
                  where: { optionId: option.dataValues.id },
                });
                if (index === 0) totalAnswers += count.length;
                return {
                  answer: option.dataValues,
                  count: count.length,
                };
              });
            return {
              question: question.dataValues,
              answers: answers,
            };
          });
        return {
          survey: survey.dataValues,
          questionsResults: questionResults,
          totalAnswers: totalAnswers,
        };
      });
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
    closeSurvey: (root, { id }, { db, currentUserId }) =>
      db.survey
        .findByPk(id)
        .then((survey) =>
          survey
            .update({ opened: false })
            .then(() => false)
            .catch(() => true)
        )
        .catch(() => true),
    publishSurvey: (root, { id }, { db, currentUserId }) =>
      db.survey
        .findByPk(id)
        .then((survey) =>
          survey
            .update({ published: true })
            .then(() => true)
            .catch(() => false)
        )
        .catch(() => false),
  },
  Survey: {
    user: (survey) => survey.getUser(),
    questions: (survey) => survey.getQuestions(),
    answered: (survey, args, { db, currentUserId }) =>
      survey
        .getQuestions()
        .then((questions) =>
          questions[0].getOptions().then((options) =>
            db.answer
              .findAll({
                where: {
                  optionId: options[0].id,
                  userId: currentUserId,
                },
              })
              .then((data) => !!data[0].dataValues?.id)
          )
        )
        .catch((err) => false),
  },
};
