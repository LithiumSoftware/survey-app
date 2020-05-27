import React from "react";
import styled from "styled-components";
import { Image, View } from "react-native";
import NormalizeSize from "../utils/NormalizeSize";

const HeaderLogo = () => (
  <View>
    <StyledImage source={require("../assets/lithium-logo.png")} />
  </View>
);

const StyledImage = styled(Image)`
  margin-top: ${NormalizeSize(12)}px;
  margin-bottom: ${NormalizeSize(36)}px;
  width: ${NormalizeSize(115)}px;
  height: ${NormalizeSize(38)}px;
`;

export default HeaderLogo;
