import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { Platform } from "react-native";

const MaxWidthView = (props: any) =>
  Platform.OS === "web" ? (
    <CenterChild>
      <MaxWidth>{props.children}</MaxWidth>
    </CenterChild>
  ) : (
    <View>{props.children}</View>
  );

const CenterChild = styled.View`
  width: 100%;
  height: 100%
  flex-direction: column;
  align-items: center;
`;

const MaxWidth = styled.View`
  flex-grow: 1;
  margin: auto
  flex-direction: column;
  width: 100%
  max-width: 768px;
`;
export default MaxWidthView;
