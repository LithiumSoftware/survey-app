import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Text, View } from "react-native";
import NormalizeSize from "../utils/NormalizeSize";
import { CheckedBox, UncheckedBox } from "../assets/icons";
import { IconButton } from "react-native-paper";

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
      {isChecked ? (
        <IconButton
          color="rgba(0, 0, 0, 0.54)"
          icon={() => (
            <CheckedBox height={NormalizeSize(81)} width={NormalizeSize(81)} />
          )}
          onPress={() => changeSelected(option)}
        />
      ) : (
        <IconButton
          color="rgba(0, 0, 0, 0.54)"
          icon={() => (
            <UncheckedBox
              height={NormalizeSize(81)}
              width={NormalizeSize(81)}
            />
          )}
          onPress={() => changeSelected(option)}
        />
      )}
      <OptionText>{option.text}</OptionText>
    </StyledViewRow>
  );
};

const OptionText = styled(Text)`
  padding-left: ${NormalizeSize(8)}px;
  font-size: ${NormalizeSize(16)}px;
  color: rgba(0, 0, 0, 0.6);
`;

const StyledViewRow = styled(View)`
  flex-direction: row;
  justify-content: flex-start;
  background-color: #e8e8e8;
  align-items: center;
  padding-left: ${NormalizeSize(8)}px;
  padding-top: ${NormalizeSize(12)}px;
  padding-right: ${NormalizeSize(8)}px;
  padding-bottom: ${NormalizeSize(12)}px;
  margin-bottom: ${NormalizeSize(16)}px;
`;

export default AnswerOption;
