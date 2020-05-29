import React from "react";
import styled from "styled-components";
import { View, Text } from "react-native";
import { Button, IconButton } from "react-native-paper";
import { MessageBulleted } from "../assets/icons";
import NormalizeSize from "../utils/NormalizeSize";

interface Props {
  navigation: any;
  survey: any;
  closeSurvey: (id: string) => void;
}

const Survey = ({ navigation, survey, closeSurvey }: Props) => {
  const isActive = survey.published === true && survey.opened === true;
  const isClosed = survey.published === true && survey.opened === false;

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
      {survey.answered ? (
        <AnsweredSurveyButton mode="text" color="#9a9385">
          Already Completed
        </AnsweredSurveyButton>
      ) : (
        <TakeSurveyButton
          mode="text"
          color="white"
          onPress={() => {
            isActive
              ? navigation.navigate("AnswerSurvey", {
                  survey: survey,
                  questionIndex: 0,
                  selectedOptions: [],
                })
              : isClosed
              ? navigation.navigate("Results", {
                  survey: survey,
                })
              : closeSurvey("active survey");
          }}
        >
          {isActive ? "TAKE SURVEY" : isClosed ? "RESULTS" : "ACTIVE SURVEY"}
        </TakeSurveyButton>
      )}
      {isActive && (
        <CloseSurveyButton
          mode="text"
          color="black"
          onPress={() => {
            closeSurvey(survey.id);
          }}
        >
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
  font-size: ${NormalizeSize(22)}px;
  font-weight: 500;
  letter-spacing: -0.5px;
  color: rgba(0, 0, 0, 0.87);
`;

const QuestionsDetail = styled(Text)`
  font-size: ${NormalizeSize(10)}px;
  padding-top: ${NormalizeSize(4)}px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
  letter-spacing: ${NormalizeSize(1.5)}px;
`;

const AnsweredSurveyButton = styled(Button)`
  height: ${NormalizeSize(36)}px;
  justify-content: center;
  background-color: #f8edd5;
  border-radius: 25px !important;
  margin-top: ${NormalizeSize(8)}px;
  margin-left: ${NormalizeSize(8)}px;
  margin-right: ${NormalizeSize(8)}px;
`;

const TakeSurveyButton = styled(Button)`
  height: ${NormalizeSize(36)}px;
  justify-content: center;
  background-color: #ffb900;
  border-radius: 25px !important;
  margin-top: ${NormalizeSize(8)}px;
  margin-left: ${NormalizeSize(8)}px;
  margin-right: ${NormalizeSize(8)}px;
`;

const CloseSurveyButton = styled(Button)`
  height: ${NormalizeSize(36)}px;
  justify-content: center;
  border-radius: 20px;
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
  border-radius: 20px;
  padding: ${NormalizeSize(8)}px;
  margin-bottom: ${NormalizeSize(16)}px;
`;

export default Survey;
