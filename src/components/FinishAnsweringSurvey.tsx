import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { View, Text } from "react-native";
import { IconButton, Button } from "react-native-paper";
import { CheckCircle, AnswerSuccess } from "../assets/icons";
import MainNonScrollableContainer from "../components/MainNonScrollableContainer";
import Title from "../components/Title";
import NormalizeSize from "../utils/NormalizeSize";
import HeaderBack from "./HeaderBack";
import FullScreenMessage from "./FullScreenMessage";
import MaxWidthView from "./MaxWidthView";

interface Props {
  navigation: any;
  survey: any;
  answers: number;
  answerSurvey: () => any;
}

const FinishAnsweringSurvey = ({
  navigation,
  survey,
  answers,
  answerSurvey,
}: Props) => {
  const questionsCount = survey?.questions?.length;
  const [error, setError] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [answersCount, setAnswersCount] = useState(answers);

  useEffect(() => {
    setAnswersCount(answers);
  }, [answers]);

  return (
    <MaxWidthView>
      <HeaderBack navigation={navigation} />
      <MainNonScrollableContainer>
        <View>
          <Title>{survey?.title}</Title>
          <Container>
            <StyledIconButton
              color="black"
              icon={() => <CheckCircle height={40} width={40} />}
            />
            <SurveyCompleted>Survey is completed</SurveyCompleted>
            <Answers>
              Answers {answersCount}/{questionsCount}
            </Answers>
          </Container>
        </View>
      </MainNonScrollableContainer>
      <ButtonsAndError>
        {error && (
          <ErrorText>Please answer all the questions before submit</ErrorText>
        )}
        <ButtonViewRow>
          <StyledButton
            mode="text"
            color="#4f4f4f"
            onPress={() => {
              navigation.goBack();
            }}
          >
            BACK
          </StyledButton>
          <SubmitButton
            mode="text"
            color="white"
            onPress={() => {
              const answer = answerSurvey();
              if (answer) {
                setAnswered(true);
                setTimeout(() => {
                  navigation.navigate("Surveys", { reloadSurveys: new Date() });
                }, 4000);
              } else {
                setError(true);
              }
            }}
          >
            SUBMIT
          </SubmitButton>
        </ButtonViewRow>
      </ButtonsAndError>
      {answered && (
        <FullScreenMessage
          navigation={navigation}
          message="Answer submited successfully"
          title={survey.title}
          icon={
            <AnswerSuccess
              height={NormalizeSize(81)}
              width={NormalizeSize(100)}
            />
          }
        />
      )}
    </MaxWidthView>
  );
};

const ButtonsAndError = styled(View)`
  position: absolute;
  width: 100%;
  padding-left: ${NormalizeSize(20)}px;
  padding-right: ${NormalizeSize(20)}px;
  bottom: ${NormalizeSize(40)}px;
`;

const ButtonViewRow = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${NormalizeSize(41)}px;
`;

const StyledButton = styled(Button)`
  border-radius: 20px;
  width: ${NormalizeSize(146)}px;
  background-color: #ffb900;
  padding: ${NormalizeSize(4)}px;
`;

const SubmitButton = styled(Button)`
  border-radius: 20px;
  width: ${NormalizeSize(146)}px;
  background-color: #4f4f4f;
  padding: ${NormalizeSize(4)}px;
`;

const Answers = styled(Text)`
  font-size: ${NormalizeSize(12)}px;
  color: #4f4f4f;
  letter-spacing: ${NormalizeSize(-0.4)}px;
`;

const SurveyCompleted = styled(Text)`
  font-size: ${NormalizeSize(22)}px;
  font-weight: 500;
  color: #4f4f4f;
  letter-spacing: ${NormalizeSize(-0.5)}px;
  padding-bottom: ${NormalizeSize(8)}px;
`;

const StyledIconButton = styled(IconButton)`
  height: ${NormalizeSize(81)}px;
  width: ${NormalizeSize(81)}px;
  margin-bottom: ${NormalizeSize(28)}px;
`;

const ErrorText = styled(Text)`
  color: #ff0c3e;
  font-size: 14px;
  text-align: center;
  padding-bottom: ${NormalizeSize(12)}px;
`;

const Container = styled(View)`
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 20px;
  padding-top: ${NormalizeSize(60)}px;
  padding-bottom: ${NormalizeSize(60)}px;
  margin-bottom: ${NormalizeSize(16)}px;
`;

export default FinishAnsweringSurvey;
