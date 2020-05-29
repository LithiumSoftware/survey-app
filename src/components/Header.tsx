import React from "react";
import styled from "styled-components/native";
//import { TouchableOpacity } from "react-native";
import NormalizeSize from "../utils/NormalizeSize";

const HeaderView = ({ navigation, user }: { navigation: any; user: any }) => (
  <Header>
    <StyledImage source={require("../assets/lithium-logo.png")} />

    {user ? (
      <ButtonText>user</ButtonText>
    ) : (
      <LogInButton onPress={() => navigation.navigate("LogIn")}>
        <ButtonText>Log in</ButtonText>
      </LogInButton>
    )}
  </Header>
);

const StyledImage = styled.Image`
  width: ${NormalizeSize(115)}px;
  height: ${NormalizeSize(38)}px;
  display: flex;
`;

const LogInButton = styled.TouchableOpacity`
  width: 80px;
  height: 26px;
  background-color: #ffb900;
  border-radius: 25px;
  align-items: center;
  padding: 4px;
  display: flex;
  justify-content: center;
`;

const Header = styled.View`
  justify-content: space-between;
  margin-bottom: ${NormalizeSize(36)}px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: black;
  font-weight: 700;
`;

export default HeaderView;
