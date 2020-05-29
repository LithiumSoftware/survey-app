import React, { useState } from "react";
import { OptionProps } from "../screens/CreateSurvey";
import { TextInput } from "react-native-paper";
import styled from "styled-components/native";
import NormalizeSize from "../utils/NormalizeSize";

interface Props {
  options: OptionProps[];
  index: number;
  setOptions: (questions: OptionProps[]) => void;
}

const AddOption = ({ options, index, setOptions }: Props) => {
  const [optionTitle, setOptionTitle] = useState(options[index].text);

  return (
    <StyledTextInput
      label={`Option ${index + 1}`}
      editable={true}
      maxLength={40}
      scrollEnabled={false}
      value={optionTitle}
      blurOnSubmit={true}
      onChangeText={(text: string) => {
        const newOptions = options;
        newOptions[index].text = text;
        setOptions(newOptions);
        setOptionTitle(text);
      }}
    />
  );
};

const StyledTextInput = styled(TextInput)`
  margin: ${NormalizeSize(8)}px;
`;

export default AddOption;
