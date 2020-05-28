import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Text, View } from "react-native";
import CheckBox from "react-native-check-box";
import NormalizeSize from "../utils/NormalizeSize";

interface Props {
  option: any;
  isSelected: boolean;
  changeSelected: (index: number) => void;
}

const AnswerOption = ({ option, isSelected, changeSelected }: Props) => {
  const [isChecked, setIsChecked] = useState(isSelected);
  useEffect(() => {
    setIsChecked(isSelected);
  }, [isSelected]);
  return (
    <StyledViewRow>
      <CheckBox
        onClick={() => {
          changeSelected(option);
        }}
        isChecked={isChecked}
        uncheckedCheckBoxColor={"rgba(0, 0, 0, 0.54)"}
      />
      <OptionText>{option.text}</OptionText>
    </StyledViewRow>
  );
};

const OptionText = styled(Text)`
  padding-left: ${NormalizeSize(12)}px;
  font-size: ${NormalizeSize(16)}px;
  color: rgba(0, 0, 0, 0.6);
`;

const StyledViewRow = styled(View)`
  flex-direction: row;
  justify-content: flex-start;
  background-color: #e8e8e8;
  align-items: center;
  padding: ${NormalizeSize(18)}px;
  margin-bottom: ${NormalizeSize(16)}px;
`;

export default AnswerOption;
