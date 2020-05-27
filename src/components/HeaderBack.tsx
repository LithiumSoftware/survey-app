import React from "react";
import styled from "styled-components";
import { View } from "react-native";
import NormalizeSize from "../utils/NormalizeSize";
import { IconButton } from "react-native-paper";
import { BackArrow } from "../assets/icons";

const HeaderBack = ({ navigation }: { navigation: any }) => (
  <View style={{ backgroundColor: "white" }}>
    <StyledIconButton
      color="black"
      icon={() => <BackArrow fill={"#5C5C5C"} />}
      onPress={() => navigation.popToTop()}
    />
  </View>
);

const StyledIconButton = styled(IconButton)`
  margin-top: ${NormalizeSize(26)}px;
  margin-left: ${NormalizeSize(12)}px;
`;

export default HeaderBack;
