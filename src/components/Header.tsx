import React from "react";
import styled from "styled-components";
import { Image, View } from "react-native";

const Header = () => (
  <View>
    <StyledImage source={require("../assets/lithium-logo.png")} />
  </View>
);

const StyledImage = styled(Image)`
  margin-bottom: 5%;
  width: 115px;
  height: 38px;
`;

export default Header;
