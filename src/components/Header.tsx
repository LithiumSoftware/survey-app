import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import NormalizeSize from "../utils/NormalizeSize";
import { ExitToApp } from "../assets/icons";
import { IconButton } from "react-native-paper";

const HeaderView = ({
  navigation,
  user,
  logOut,
}: {
  navigation: any;
  user: any;
  logOut: Function;
}) => (
  <Header>
    <StyledImage source={require("../assets/lithium-logo.png")} />

    {user ? (
      <UserInfo>
        <View>
          <Username>{user.username}</Username>
          <Role>{user.role}</Role>
        </View>
        <LogOutButton icon={() => <ExitToApp />} onPress={() => logOut()} />
      </UserInfo>
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

const UserInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Username = styled.Text`
  display: flex;
`;

const Role = styled.Text`
  color: #ffb900;
  display: flex;
  justify-content: flex-end;
`;

const LogOutButton = styled(IconButton)`
  margin: 0px;
`;

export default HeaderView;
