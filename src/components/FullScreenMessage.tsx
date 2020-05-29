import React from "react";
import styled from "styled-components/native";
import { TouchableWithoutFeedback } from "react-native";
import NormalizeSize from "../utils/NormalizeSize";
import Title from "./Title";
import { IconButton } from "react-native-paper";
import MaxWidthView from "./MaxWidthView";

interface Props {
  navigation: any;
  title: string;
  icon: any;
  message: string;
}

const FullScreenMessage = ({ navigation, title, icon, message }: Props) => (
  <MaxWidthView>
    <StyledTouchableWithoutFeedback
      onPress={() => {
        navigation.canGoBack() && navigation.popToTop();
      }}
    >
      <Container>
        <WhiteTitle>{title}</WhiteTitle>
        <StyledIconButton
          icon={() => {
            return icon;
          }}
        />
        <Message>{message}</Message>
      </Container>
    </StyledTouchableWithoutFeedback>
  </MaxWidthView>
);

const WhiteTitle = styled(Title)`
  color: #f8edd5;
`;

const Message = styled.Text`
  font-size: ${NormalizeSize(22)}px;
  font-weight: 500;
  color: #bdbdbd;
  text-align: center;
  letter-spacing: ${NormalizeSize(-0.5)}px;
  padding-bottom: ${NormalizeSize(8)}px;
`;

const StyledIconButton = styled(IconButton)`
  height: ${NormalizeSize(85)}px;
  width: ${NormalizeSize(100)}px;
  margin-top: ${NormalizeSize(54)}px;
  margin-bottom: ${NormalizeSize(32)}px;
`;

const Container = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #333333;
  align-items: center;
  padding-left: ${NormalizeSize(40)}px;
  padding-top: ${NormalizeSize(89)}px;
  padding-right: ${NormalizeSize(40)}px;
  padding-bottom: ${NormalizeSize(40)}px;
`;

const StyledTouchableWithoutFeedback = styled(TouchableWithoutFeedback)`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

export default FullScreenMessage;
