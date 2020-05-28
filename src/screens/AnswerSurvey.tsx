import React, { useState, useEffect } from "react";
import AnswerSurvey from "../components/AnswerSurvey";
import FinishAnsweringSurvey from "../components/FinishAnsweringSurvey";
import ScreenProps from "./ScreenProps";
import { useCreateAnswerMutation } from "../../graphql/generated";

const AnswerSurveyScreen = ({ route, navigation }: ScreenProps) => {
  const [answer] = useCreateAnswerMutation();

  const answerSurvey = () => {
    if (
      route.params.selectedOptions.filter((option: any) => option === null)
        .length > 0
    ) {
      return null;
    } else {
      return route.params.selectedOptions.map((option: any) =>
        answer({ variables: { optionId: option.id } })
          .then((answer) => answer.data?.createAnswer?.option.text)
          .catch(() => null)
      );
    }
  };

  return route.params.questionIndex < route.params.survey.questions.length ? (
    <AnswerSurvey
      navigation={navigation}
      survey={route.params.survey}
      questionIndex={route.params.questionIndex}
      selectedOptions={route.params.selectedOptions}
    />
  ) : (
    <FinishAnsweringSurvey
      navigation={navigation}
      survey={route.params.survey}
      answers={
        route.params.selectedOptions.filter((option: any) => option !== null)
          .length
      }
      answerSurvey={answerSurvey}
    />
  );
};

export default AnswerSurveyScreen;
