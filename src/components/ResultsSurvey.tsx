import React from "react";
import styled from "styled-components/native";
import MainScrollableContainer from "./MainScrollableContainer";
import Title from "../components/Title";
import { View } from "react-native";
import NormalizeSize from "../utils/NormalizeSize";
import ResultsQuestion from "./ResultsQuestion";
import HeaderBack from "./HeaderBack";
import { NoResults } from "../assets/icons";
import { IconButton } from "react-native-paper";
import MaxWidthView from "./MaxWidthView";

interface Props {
  navigation: any;
  result: any;
}

const ResultsSurvey = ({ navigation, result }: Props) => {
  return (
    <MaxWidthView>
      <MainScrollableContainer>
        <HeaderView>
          <HeaderBack navigation={navigation} />
        </HeaderView>
        <Title>{result?.survey?.title}</Title>
        <View>
          {result?.totalAnswers && result?.totalAnswers > 0 ? (
            result?.questionsResults.map(
              (questionResult: any, index: number) => (
                <ResultsQuestion
                  key={questionResult.question.id}
                  questionResult={questionResult}
                  totalAnswers={result.totalAnswers}
                  questionIndex={index}
                />
              )
            )
          ) : (
            <ContainerError>
              <StyledIconButton
                icon={() => (
                  <NoResults
                    height={NormalizeSize(61)}
                    width={NormalizeSize(65)}
                  />
                )}
              />
              <NoResultsMessage>
                There are not answers for this survey
              </NoResultsMessage>
            </ContainerError>
          )}
        </View>
      </MainScrollableContainer>
    </MaxWidthView>
  );
};

const StyledIconButton = styled(IconButton)`
  height: ${NormalizeSize(63)}px;
  width: ${NormalizeSize(63)}px;
  margin-bottom: ${NormalizeSize(20)}px;
`;

const NoResultsMessage = styled.Text`
  font-size: ${NormalizeSize(22)}px;
  font-weight: 500;
  color: #4f4f4f;
  text-align: center;
  letter-spacing: ${NormalizeSize(-0.5)}px;
`;

const ContainerError = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 20px;
  padding-top: ${NormalizeSize(40)}px;
  padding-bottom: ${NormalizeSize(50)}px;
  margin-bottom: ${NormalizeSize(16)}px;
`;

const HeaderView = styled(View)`
  margin-left: ${NormalizeSize(-20)}px;
`;

export default ResultsSurvey;
