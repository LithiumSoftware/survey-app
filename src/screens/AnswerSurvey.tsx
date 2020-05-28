import React, { useState } from "react";
import AnswerSurvey from "../components/AnswerSurvey";
import FinishAnsweringSurvey from "../components/FinishAnsweringSurvey";
import ScreenProps from "./ScreenProps";
import { useCreateAnswerMutation } from "../../graphql/generated";

const AnswerSurveyScreen = ({ route, navigation }: ScreenProps) => {
  const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
  const [answer] = useCreateAnswerMutation();
  const selectOption = (id: number, option: any) => {
    selectedOptions[id] = option;
    setSelectedOptions(selectedOptions);
  };
  const answerSurvey = () => {
    if (selectedOptions.filter((option) => option === null)) {
      return null;
    } else {
      selectedOptions.map((option) =>
        answer({ variables: { optionId: option.id } })
      );
      return selectedOptions;
    }
  };

  return route.params.questionIndex < route.params.survey.questions.length ? (
    <AnswerSurvey
      navigation={navigation}
      survey={route.params.survey}
      questionIndex={route.params.questionIndex}
      selectOption={selectOption}
    />
  ) : (
    <FinishAnsweringSurvey
      navigation={navigation}
      survey={route.params.survey}
      answerSurvey={answerSurvey}
    />
  );
};

export default AnswerSurveyScreen;
