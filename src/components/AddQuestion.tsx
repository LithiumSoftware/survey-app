import React from "react";
import { QuestionProps, OptionProps } from "../screens/CreateSurvey";
import NormalizeSize from "../utils/NormalizeSize";
import styled from "styled-components/native";
import { TextInput, Button } from "react-native-paper";
import AddOption from "./AddOption";

interface Props {
  questions: QuestionProps[];
  index: number;
  setQuestions: (questions: QuestionProps[]) => void;
}

const AddQuestion = ({ questions, index, setQuestions }: Props) => {
  const setOptions = (options: OptionProps[]) => {
    const newQuestions = questions;
    newQuestions[index].options = options;
    setQuestions(newQuestions);
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
            value={questions[index].text}
            blurOnSubmit={true}
            onChangeText={(text: string) => {
              const newQuestions = questions;
              newQuestions[index].text = text;
              setQuestions(newQuestions);
            }}
          />
        </StyledViewRow>
        {questions[index].options.map((option: OptionProps, index: number) => (
          <AddOption
            options={questions[index].options}
            index={index}
            setOptions={setOptions}
          />
        ))}
        <ButtonViewRow>
          <StyledSaveButton
            mode="text"
            color="#828282"
            onPress={() => {
              const newQuestions = [
                ...questions.slice(0, index),
                ...questions.slice(index + 1, questions.length),
              ];
              setQuestions(newQuestions);
            }}
          >
            DELETE QUESTION
          </StyledSaveButton>
          <StyledPublishButton
            mode="text"
            color="white"
            onPress={() => {
              const newQuestions = questions;
              newQuestions[index].options.push({ text: "" });
              setQuestions(newQuestions);
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
  border-radius: ${NormalizeSize(20)}px;
  width: ${NormalizeSize(146)}px;
  padding: ${NormalizeSize(4)}px;
`;

const StyledPublishButton = styled(Button)`
  border-radius: ${NormalizeSize(20)}px;
  width: ${NormalizeSize(146)}px;
  background-color: #ffb900;
  padding: ${NormalizeSize(4)}px;
`;

const StyledViewRow = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: ${NormalizeSize(4)}px;
  padding-bottom: ${NormalizeSize(20)}px;
`;

const QuestionNumber = styled.Text`
  font-size: ${NormalizeSize(22)}px;
  font-weight: 500;
  letter-spacing: ${NormalizeSize(-0.5)}px;
`;

const QuestionTitleInput = styled(TextInput)`
  font-size: ${NormalizeSize(22)}px;
  font-weight: 500;
  color: #4f4f4f;
  padding-left: ${NormalizeSize(8)}px;
  letter-spacing: ${NormalizeSize(-0.5)}px;
`;

const Container = styled.View`
  justify-content: center;
  background-color: #f2f2f2;
  border-radius: ${NormalizeSize(20)}px;
  padding-left: ${NormalizeSize(8)}px;
  padding-top: ${NormalizeSize(16)}px;
  padding-right: ${NormalizeSize(8)}px;
  padding-bottom: ${NormalizeSize(16)}px;
  margin-bottom: ${NormalizeSize(20)}px;
`;

export default AddQuestion;
