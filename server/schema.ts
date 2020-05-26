import { merge } from "lodash";

import { typeDef as Answer, resolvers as answerRes } from "./schemas/answer";
import { typeDef as Option, resolvers as optionRes } from "./schemas/option";
import {
  typeDef as Question,
  resolvers as questionRes,
} from "./schemas/question";
import { typeDef as Survey, resolvers as surveyRes } from "./schemas/survey";
import { typeDef as User, resolvers as userRes } from "./schemas/user";
import { typeDef as Scalars, resolvers as scalarsRes } from "./schemas/scalars";

export const typeDefs = [Answer, Option, Question, Survey, User, Scalars];

export const resolvers = merge(
  answerRes,
  optionRes,
  questionRes,
  surveyRes,
  userRes,
  scalarsRes
);
