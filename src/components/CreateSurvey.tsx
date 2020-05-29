import React, { useState } from "react";
import styled from "styled-components/native";
import MainScrollableContainer from "./MainScrollableContainer";
import { View, TextInput } from "react-native";
import { Button } from "react-native-paper";
import NormalizeSize from "../utils/NormalizeSize";
import HeaderBack from "./HeaderBack";
import AddQuestion from "./AddQuestion";
import { SurveyProps, QuestionProps } from "../screens/CreateSurvey";
import { MessageBulleted } from "../assets/icons";

interface Props {
  navigation: any;
  createSurvey: (survey: SurveyProps) => void;
}

const CreateSurvey = ({ navigation, createSurvey }: Props) => {
  const [surveyTitle, setSurveyTitle] = useState("Untitled");
  const [questions, setQuestions] = useState<QuestionProps[]>([]);

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
            questions={questions}
            index={index}
            setQuestions={setQuestions}
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
            const newQuestions = questions;
            newQuestions.push({
              text: "",
              options: [{ text: "" }, { text: "" }],
            });
            setQuestions(newQuestions);
          }}
        >
          ADD QUESTION
        </StyledAddQuestionButton>
      </MainScrollableContainer>
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
    </>
  );
};

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
  position: absolute;
  width: 100%;
  padding-left: ${NormalizeSize(20)}px;
  padding-right: ${NormalizeSize(20)}px;
  bottom: ${NormalizeSize(40)}px;
  justify-content: space-between;
  align-items: center;
  height: ${NormalizeSize(41)}px;
`;

const StyledAddQuestionButton = styled(Button)``;

const StyledSaveButton = styled(Button)`
  border-radius: ${NormalizeSize(20)}px;
  width: ${NormalizeSize(146)}px;
  background-color: #4f4f4f;
  padding: ${NormalizeSize(4)}px;
`;

const StyledPublishButton = styled(Button)`
  border-radius: ${NormalizeSize(20)}px;
  width: ${NormalizeSize(146)}px;
  background-color: #ffb900;
  padding: ${NormalizeSize(4)}px;
`;

export default CreateSurvey;
