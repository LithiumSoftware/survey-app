import React from "react";
import styled from "styled-components";
import { View, Text } from "react-native";
import { IconButton, Button } from "react-native-paper";
import { CheckCircle } from "../assets/icons";
import MainNonScrollableContainer from "../components/MainNonScrollableContainer";
import Title from "../components/Title";
import NormalizeSize from "../utils/NormalizeSize";
import HeaderBack from "./HeaderBack";

interface Props {
  navigation: any;
  survey: any;
}

const FinishAnsweringSurvey = ({ navigation, survey }: Props) => {
  const questionsCount = survey?.questions?.length;
  return (
    <>
      <HeaderBack navigation={navigation} />
      <MainNonScrollableContainer>
        <View>
          <Title>{survey?.title}</Title>
          <Container>
            <StyledIconButton
              color="black"
              icon={() => (
                <CheckCircle
                  height={NormalizeSize(81)}
                  width={NormalizeSize(81)}
                />
              )}
            />
            <SurveyCompleted>Survey is completed</SurveyCompleted>
            <Answers>
              Answers {questionsCount}/{questionsCount}
            </Answers>
          </Container>
        </View>
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
              navigation.popToTop();
            }}
          >
            SUBMIT
          </SubmitButton>
        </ButtonViewRow>
      </MainNonScrollableContainer>
    </>
  );
};

const ButtonViewRow = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${NormalizeSize(41)}px;
`;

const StyledButton = styled(Button)`
  border-radius: ${NormalizeSize(20)}px;
  width: ${NormalizeSize(146)}px;
  background-color: #ffb900;
  padding: ${NormalizeSize(4)}px;
`;

const SubmitButton = styled(Button)`
  border-radius: ${NormalizeSize(20)}px;
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

const Container = styled(View)`
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: ${NormalizeSize(20)}px;
  padding-top: ${NormalizeSize(60)}px;
  padding-bottom: ${NormalizeSize(60)}px;
  margin-bottom: ${NormalizeSize(16)}px;
`;

export default FinishAnsweringSurvey;
