import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import { Button, IconButton, ProgressBar } from "react-native-paper";
import { MessageBulleted } from "../assets/icons";
import NormalizeSize from "../utils/NormalizeSize";

interface Props {
  totalAnswers: number;
  questionResult: any;
  questionIndex: number;
}

const ResultsQuestion = ({
  totalAnswers,
  questionResult,
  questionIndex,
}: Props) => {
  return (
    <Container>
      <StyledViewRow>
        <QuestionNumber>{questionIndex + 1 + ")"}</QuestionNumber>
        <QuestionTitle>{questionResult.question?.text}</QuestionTitle>
      </StyledViewRow>
      {questionResult?.answers.map((answer: any) => (
        <StyledViewProgress>
          <StyledProgressBar
            progress={answer.count / totalAnswers}
            color="#ffc200"
          />
          <StyledViewText>
            <StyledAnswerName>
              {answer.answer.text.toUpperCase()}
            </StyledAnswerName>
            <StyledAnswerPercentage>
              {(answer.count / totalAnswers) * 100}%
            </StyledAnswerPercentage>
          </StyledViewText>
        </StyledViewProgress>
      ))}
    </Container>
  );
};

const StyledViewProgress = styled.View`
  position: relative;
  padding-bottom: ${NormalizeSize(8)}px;
`;

const StyledProgressBar = styled(ProgressBar)`
  height: ${NormalizeSize(56)}px;
  margin: ${NormalizeSize(4)}px;
`;

const QuestionNumber = styled.Text`
  font-size: ${NormalizeSize(22)}px;
  font-weight: 500;
  letter-spacing: ${NormalizeSize(-0.5)}px;
`;

const QuestionTitle = styled.Text`
  font-size: ${NormalizeSize(22)}px;
  font-weight: 500;
  color: #4f4f4f;
  padding-left: ${NormalizeSize(8)}px;
  letter-spacing: ${NormalizeSize(-0.5)}px;
`;

const StyledViewRow = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: ${NormalizeSize(8)}px;
  padding-top: ${NormalizeSize(8)}px;
  padding-right: ${NormalizeSize(8)}px;
  padding-bottom: ${NormalizeSize(20)}px;
`;

const StyledViewText = styled.View`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: ${NormalizeSize(20)}px;
  padding-right: ${NormalizeSize(20)}px;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 5;
  height: ${NormalizeSize(56)}px;
  width: 100%;
`;

const StyledAnswerName = styled.Text`
  color: rgba(0, 0, 0, 0.6);
  letter-spacing: ${NormalizeSize(1.5)}px;
  font-size: ${NormalizeSize(10)}px;
  font-weight: 500;
`;

const StyledAnswerPercentage = styled.Text`
  color: rgba(0, 0, 0, 0.6);
  letter-spacing: ${NormalizeSize(0.4)}px;
  font-size: ${NormalizeSize(12)}px;
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

export default ResultsQuestion;
