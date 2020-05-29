import React from "react";
import styled from "styled-components";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import MaxWidthView from "./MaxWidthView";

const LoadingView = () => (
  <MaxWidthView>
    <CenterView>
      <ActivityIndicator animating={true} color="#FFC200" />
    </CenterView>
  </MaxWidthView>
);

const CenterView = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default LoadingView;
