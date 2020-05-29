import React, { useState } from "react";
import styled from "styled-components/native";
import MainScrollableContainer from "./MainScrollableContainer";
import { View, TextInput, Text } from "react-native";
import { Button } from "react-native-paper";
import NormalizeSize from "../utils/NormalizeSize";
import HeaderBack from "./HeaderBack";
import AddQuestion from "./AddQuestion";
import { SurveyProps, QuestionProps } from "../screens/CreateSurvey";
import { MessageBulleted } from "../assets/icons";

interface Props {
  error: string;
  navigation: any;
  createSurvey: (survey: SurveyProps) => void;
}

const CreateSurvey = ({ error, navigation, createSurvey }: Props) => {
  const [errorMessage, setErrorMessage] = useState(error);
  const [surveyTitle, setSurveyTitle] = useState("Untitled");
  const [questions, setQuestions] = useState<QuestionProps[]>([]);

  const deleteQuestion = (index: number) => {
    setQuestions([]);
    setTimeout(() => {
      setQuestions([
        ...questions.slice(0, index),
        ...questions.slice(index + 1, questions.length),
      ]);
    }, 0);
  };

  return (
    <>
      <MainScrollableContainer>
        <HeaderView>
          <HeaderBack navigation={navigation} />
        </HeaderView>
        <TitleTextInput
          editable={true}
          multiline={true}
          scrollEnabled={false}
          value={surveyTitle}
          blurOnSubmit={true}
          onChangeText={(text: string) => {
            setSurveyTitle(text);
          }}
        />
        {questions.map((question: QuestionProps, index: number) => (
          <AddQuestion
            key={index}
            questions={questions}
            index={index}
            setQuestions={setQuestions}
            deleteQuestion={deleteQuestion}
          />
        ))}
        <StyledAddQuestionButton
          mode="text"
          color="#E09503"
          icon={() => (
            <MessageBulleted
              height={NormalizeSize(16)}
              width={NormalizeSize(20)}
              fill="#E09503"
            />
          )}
          onPress={() => {
            if (questions.length < 10) {
              setQuestions([
                ...questions,
                {
                  text: "",
                  options: [{ text: "" }, { text: "" }],
                },
              ]);
            }
          }}
        >
          ADD QUESTION
        </StyledAddQuestionButton>
      </MainScrollableContainer>

      <ButtonsAndError>
        <ErrorText>{error}</ErrorText>
        <ButtonViewRow>
          <StyledSaveButton
            mode="text"
            color="white"
            onPress={() => {
              createSurvey({
                title: surveyTitle,
                questions: questions,
                published: false,
              });
            }}
          >
            SAVE
          </StyledSaveButton>
          <StyledPublishButton
            mode="text"
            color="#4f4f4f"
            onPress={() => {
              createSurvey({
                title: surveyTitle,
                questions: questions,
                published: true,
              });
            }}
          >
            PUBLISH
          </StyledPublishButton>
        </ButtonViewRow>
      </ButtonsAndError>
    </>
  );
};

const ErrorText = styled.Text`
  color: #ff0c3e;
  font-size: 14px;
  text-align: center;
  padding-bottom: ${NormalizeSize(12)}px;
`;

const ButtonsAndError = styled(View)`
  position: absolute;
  width: 100%;
  padding-left: ${NormalizeSize(20)}px;
  padding-right: ${NormalizeSize(20)}px;
  bottom: ${NormalizeSize(40)}px;
`;

const TitleTextInput = styled(TextInput)`
  font-size: ${NormalizeSize(36)}px;
  text-align: center;
  padding-bottom: ${NormalizeSize(16)}px;
  font-weight: bold;
  letter-spacing: ${NormalizeSize(-1.5)}px;
`;

const HeaderView = styled(View)`
  margin-left: ${NormalizeSize(-20)}px;
`;

const ButtonViewRow = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${NormalizeSize(41)}px;
`;

const StyledAddQuestionButton = styled(Button)`
  margin-bottom: ${NormalizeSize(130)}px;
`;

const StyledSaveButton = styled(Button)`
  border-radius: 20px;
  width: ${NormalizeSize(146)}px;
  background-color: #4f4f4f;
  padding: ${NormalizeSize(4)}px;
`;

const StyledPublishButton = styled(Button)`
  border-radius: 20px;
  width: ${NormalizeSize(146)}px;
  background-color: #ffb900;
  padding: ${NormalizeSize(4)}px;
`;

export default CreateSurvey;
