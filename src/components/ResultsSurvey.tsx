import React from "react";
import styled from "styled-components";
import MainScrollableContainer from "./MainScrollableContainer";
import Title from "../components/Title";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import NormalizeSize from "../utils/NormalizeSize";
import ResultsQuestion from "./ResultsQuestion";
import HeaderBack from "./HeaderBack";

interface Props {
  navigation: any;
  survey: any;
}

const ResultsSurvey = ({ navigation, survey }: Props) => {
  return (
    <MainScrollableContainer>
      <HeaderView>
        <HeaderBack navigation={navigation} />
      </HeaderView>
      <Title>{survey?.title}</Title>
      <View>
        {survey.questions.map((question: any, index: number) => (
          <ResultsQuestion
            key={question.id}
            question={question}
            navigation={navigation}
            questionIndex={index}
          />
        ))}
      </View>
    </MainScrollableContainer>
  );
};

const HeaderView = styled(View)`
  margin-left: ${NormalizeSize(-20)}px;
`;

const StyledViewRow = styled(View)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-top: ${NormalizeSize(4)}px;
  padding-bottom: ${NormalizeSize(20)}px;
`;

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

const Container = styled(View)`
  justify-content: center;
  background-color: #f2f2f2;
  border-radius: 20px;
  padding-left: ${NormalizeSize(16)}px;
  padding-top: ${NormalizeSize(16)}px;
  padding-right: ${NormalizeSize(16)}px;
  padding-bottom: ${NormalizeSize(8)}px;
`;

export default ResultsSurvey;
