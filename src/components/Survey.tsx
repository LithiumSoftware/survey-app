import React from "react";
import styled from "styled-components";
import { View, Text } from "react-native";
import { Button, IconButton } from "react-native-paper";
import { MessageBulleted } from "../assets/icons";

const Survey = ({ survey }: { survey: any }) => {
  const isActive = survey.published === true && survey.open === true;
  const isClosed = survey.published === true && survey.open === false;

  return (
    <Container>
      <StyledViewRow>
        <StyledIconButton
          color="black"
          icon={() => <MessageBulleted fill={"black"} />}
          onPress={() => {}}
        />
        <StyledViewColumn>
          <SurveyTitle>{survey.title}</SurveyTitle>
          <QuestionsDetail>
            {survey.questions.length + " QUESTIONS"}
          </QuestionsDetail>
        </StyledViewColumn>
      </StyledViewRow>
      <TakeSurveyButton mode="contained" onPress={() => {}}>
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
  margin-top: -3px;
`;

const SurveyTitle = styled(Text)`
  font-size: 24px;
  font-weight: bold;
`;

const QuestionsDetail = styled(Text)`
  font-size: 12px;
  padding-top: 4px;
`;

const TakeSurveyButton = styled(Button)`
  border-radius: 20px;
  color: white;
  background-color: #ffb900;
  margin: 8px;
`;

const CloseSurveyButton = styled(Button)`
  border-radius: 20px;
  margin-top: 8px;
  margin-left: 8px;
  margin-right: 8px;
`;

const StyledViewRow = styled(View)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 4px;
  padding-bottom: 20px;
`;

const StyledViewColumn = styled(View)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 8px;
`;

const Container = styled(View)`
  justify-content: center;
  background-color: #f2f2f2;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  height: 200px;
`;

export default Survey;
