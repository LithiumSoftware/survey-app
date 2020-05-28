import React from "react";
import styled from "styled-components";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const LoadingView = () => (
  <CenterView>
    <ActivityIndicator animating={true} color="#FFC200" />
  </CenterView>
);

const CenterView = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default LoadingView;
