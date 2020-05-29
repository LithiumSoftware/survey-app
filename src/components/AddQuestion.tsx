import React, { useState } from "react";
import { QuestionProps, OptionProps } from "../screens/CreateSurvey";
import NormalizeSize from "../utils/NormalizeSize";
import styled from "styled-components/native";
import { Button } from "react-native-paper";
import AddOption from "./AddOption";

interface Props {
  questions: QuestionProps[];
  index: number;
  setQuestions: (questions: QuestionProps[]) => void;
  deleteQuestion: (index: number) => void;
}

const AddQuestion = ({
  questions,
  index,
  setQuestions,
  deleteQuestion,
}: Props) => {
  const [questionTitle, setQuestionTitle] = useState(questions[index].text);
  const [questionOptions, setQuestionOptions] = useState(
    questions[index].options
  );
  const setOptions = (options: OptionProps[]) => {
    const newQuestions = questions;
    newQuestions[index].options = options;
    setQuestions(newQuestions);
    setQuestionOptions(options);
  };

  return (
    <>
      <Container>
        <StyledViewRow>
          <QuestionNumber>{index + 1})</QuestionNumber>
          <QuestionTitleInput
            placeholder={"Write a question here..."}
            editable={true}
            multiline={true}
            scrollEnabled={false}
            value={questionTitle}
            blurOnSubmit={true}
            onChangeText={(text: string) => {
              const newQuestions = questions;
              newQuestions[index].text = text;
              setQuestions(newQuestions);
              setQuestionTitle(text);
            }}
          />
        </StyledViewRow>
        {questionOptions?.map((option: OptionProps, index: number) => (
          <AddOption
            key={index}
            options={questionOptions}
            index={index}
            setOptions={setOptions}
          />
        ))}
        <ButtonViewRow>
          <StyledSaveButton
            mode="text"
            color="#828282"
            onPress={() => {
              deleteQuestion(index);
            }}
          >
            DELETE QUESTION
          </StyledSaveButton>
          <StyledPublishButton
            mode="text"
            color="white"
            onPress={() => {
              if (questionOptions.length < 4) {
                setOptions([...questionOptions, { text: "" }]);
              }
            }}
          >
            ADD OPTION
          </StyledPublishButton>
        </ButtonViewRow>
      </Container>
    </>
  );
};

const ButtonViewRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${NormalizeSize(41)}px;
`;

const StyledSaveButton = styled(Button)`
  border-radius: 20px;
  width: ${NormalizeSize(146)}px;
  padding: ${NormalizeSize(4)}px;
`;

const StyledPublishButton = styled(Button)`
  border-radius: 20px;
  width: ${NormalizeSize(146)}px;
  background-color: #ffb900;
  padding: ${NormalizeSize(4)}px;
`;

const StyledViewRow = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: ${NormalizeSize(8)}px;
  padding-top: ${NormalizeSize(4)}px;
  padding-right: ${NormalizeSize(8)}px;
  padding-bottom: ${NormalizeSize(20)}px;
`;

const QuestionNumber = styled.Text`
  font-size: ${NormalizeSize(22)}px;
  font-weight: 500;
  letter-spacing: ${NormalizeSize(-0.5)}px;
`;

const QuestionTitleInput = styled.TextInput`
  font-size: ${NormalizeSize(22)}px;
  font-weight: 500;
  width: 100%;
  color: #4f4f4f;
  padding-left: ${NormalizeSize(8)}px;
  letter-spacing: ${NormalizeSize(-0.5)}px;
`;

const Container = styled.View`
  justify-content: center;
  background-color: #f2f2f2;
  border-radius: 20px;
  padding-left: ${NormalizeSize(8)}px;
  padding-top: ${NormalizeSize(16)}px;
  padding-right: ${NormalizeSize(8)}px;
  padding-bottom: ${NormalizeSize(16)}px;
  margin-bottom: ${NormalizeSize(20)}px;
`;

export default AddQuestion;
