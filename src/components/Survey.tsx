import React from "react";
import styled from "styled-components";
import { View, Text } from "react-native";
import { Button, IconButton } from "react-native-paper";
import { MessageBulleted } from "../assets/icons";
import NormalizeSize from "../utils/NormalizeSize";

interface Props {
  navigation: any;
  survey: any;
}

const Survey = ({ navigation, survey }: Props) => {
  const isActive = survey.published === true && survey.open === true;
  const isClosed = survey.published === true && survey.open === false;

  return (
    <Container>
      <StyledViewRow>
        <StyledIconButton
          color="black"
          icon={() => <MessageBulleted fill={"black"} />}
        />
        <StyledViewColumn>
          <SurveyTitle>{survey.title}</SurveyTitle>
          <QuestionsDetail>
            {survey.questions.length + " QUESTIONS"}
          </QuestionsDetail>
        </StyledViewColumn>
      </StyledViewRow>
      <TakeSurveyButton
        mode="text"
        color="white"
        onPress={() => {
          isActive
            ? navigation.navigate("AnswerSurvey", {
                survey: survey,
                questionIndex: 0,
              })
            : isClosed
            ? console.log("results")
            : console.log("active survey");
        }}
      >
        {isActive ? "TAKE SURVEY" : isClosed ? "RESULTS" : "ACTIVE SURVEY"}
      </TakeSurveyButton>
      {isActive && (
        <CloseSurveyButton mode="text" color="black" onPress={() => {}}>
          CLOSE SURVEY
        </CloseSurveyButton>
      )}
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

const QuestionsDetail = styled(Text)`
  font-size: ${NormalizeSize(12)}px;
  padding-top: ${NormalizeSize(4)}px;
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

export default Survey;
