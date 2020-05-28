import React from "react";
import styled from "styled-components";
import { View, Text } from "react-native";
import { Button, IconButton } from "react-native-paper";
import { MessageBulleted } from "../assets/icons";
import NormalizeSize from "../utils/NormalizeSize";

interface Props {
  navigation: any;
  question: any;
  questionIndex: number;
}

const ResultsQuestion = ({ navigation, question, questionIndex }: Props) => {
  return (
    <Container>
      <StyledViewRow>
        <QuestionNumber>{questionIndex + 1 + ")"}</QuestionNumber>
        <QuestionTitle>{question?.text}</QuestionTitle>
      </StyledViewRow>
    </Container>
  );
};

const StyledIconButton = styled(IconButton)`
  margin-top: ${NormalizeSize(-3)}px;
`;

const SurveyTitle = styled(Text)`
  font-size: ${NormalizeSize(24)}px;
  font-weight: bold;
`;

const SelectionDetail = styled(Text)`
  font-size: ${NormalizeSize(10)}px;
  padding-top: ${NormalizeSize(4)}px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
  letter-spacing: ${NormalizeSize(1.5)}px;
`;

const QuestionNumber = styled(Text)`
  font-size: ${NormalizeSize(22)}px;
  font-weight: 500;
  letter-spacing: ${NormalizeSize(-0.5)}px;
`;

const QuestionTitle = styled(Text)`
  font-size: ${NormalizeSize(22)}px;
  font-weight: 500;
  color: #4f4f4f;
  padding-left: ${NormalizeSize(8)}px;
  letter-spacing: ${NormalizeSize(-0.5)}px;
`;

const TakeSurveyButton = styled(Button)`
  height: ${NormalizeSize(36)}px;
  justify-content: center;
  background-color: #ffb900;
  border-radius: ${NormalizeSize(20)}px;
  margin-top: ${NormalizeSize(8)}px;
  margin-left: ${NormalizeSize(8)}px;
  margin-right: ${NormalizeSize(8)}px;
`;

const CloseSurveyButton = styled(Button)`
  height: ${NormalizeSize(36)}px;
  justify-content: center;
  border-radius: ${NormalizeSize(20)}px;
  margin-top: ${NormalizeSize(8)}px;
  margin-left: ${NormalizeSize(8)}px;
  margin-right: ${NormalizeSize(8)}px;
`;

const StyledViewRow = styled(View)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: ${NormalizeSize(4)}px;
  padding-bottom: ${NormalizeSize(20)}px;
`;

const StyledViewColumn = styled(View)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: ${NormalizeSize(8)}px;
`;

const Container = styled(View)`
  justify-content: center;
  background-color: #f2f2f2;
  border-radius: ${NormalizeSize(20)}px;
  padding: ${NormalizeSize(8)}px;
  margin-bottom: ${NormalizeSize(16)}px;
`;

export default ResultsQuestion;
