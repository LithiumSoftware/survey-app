import React from "react";
import AnswerSurvey from "../components/AnswerSurvey";
import FinishAnsweringSurvey from "../components/FinishAnsweringSurvey";
import ScreenProps from "./ScreenProps";

const AnswerSurveyScreen = ({ route, navigation }: ScreenProps) =>
  route.params.questionIndex < route.params.survey.questions.length ? (
    <AnswerSurvey
      navigation={navigation}
      survey={route.params.survey}
      questionIndex={route.params.questionIndex}
    />
  ) : (
    <FinishAnsweringSurvey
      navigation={navigation}
      survey={route.params.survey}
    />
  );

export default AnswerSurveyScreen;
