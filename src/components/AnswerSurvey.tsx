import React, { useState } from "react";
import styled from "styled-components";
import MainScrollableContainer from "./MainScrollableContainer";
import AnswerOption from "../components/AnswerOption";
import Title from "../components/Title";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import NormalizeSize from "../utils/NormalizeSize";
import HeaderBack from "./HeaderBack";

interface Props {
  navigation: any;
  survey: any;
  questionIndex: number;
  selectedOptions: any[];
}

const AnswerSurvey = ({
  navigation,
  survey,
  questionIndex,
  selectedOptions,
}: Props) => {
  const [selectedOption, setSelectedOption] = useState<any>(null);

  return (
    <>
      <MainScrollableContainer>
        <HeaderView>
          <HeaderBack navigation={navigation} />
        </HeaderView>
        <View>
          <Title>{survey?.title}</Title>
          <Container>
            <StyledViewRow>
              <QuestionNumber>{questionIndex + 1})</QuestionNumber>
              <QuestionTitle>
                {survey?.questions?.[questionIndex]?.text}
              </QuestionTitle>
            </StyledViewRow>
            {survey?.questions?.[questionIndex]?.options?.map(
              (option: any, index: number) => (
                <AnswerOption
                  key={index}
                  option={option}
                  isSelected={option.id === selectedOption?.id}
                  changeSelected={(newOption: any) => {
                    setSelectedOption(
                      newOption?.id !== selectedOption?.id ? newOption : null
                    );
                  }}
                />
              )
            )}
          </Container>
        </View>
      </MainScrollableContainer>
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
        <StyledButton
          mode="text"
          color="#4f4f4f"
          onPress={() => {
            selectedOptions[questionIndex] = selectedOption;
            navigation.push("AnswerSurvey", {
              survey: survey,
              questionIndex: questionIndex + 1,
              selectedOptions: selectedOptions,
            });
          }}
        >
          NEXT
        </StyledButton>
      </ButtonViewRow>
    </>
  );
};

const StyledViewRow = styled(View)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: ${NormalizeSize(4)}px;
  padding-bottom: ${NormalizeSize(20)}px;
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

const StyledButton = styled(Button)`
  border-radius: 20px;
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
  margin-bottom: ${NormalizeSize(80)}px;
`;

export default AnswerSurvey;
