import React from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";

const MainContainer = (props) => (
  <Container
    contentContainerStyle={{
      justifyContent: "center",
      alignItems: "stretch",
      paddingBottom: 200,
    }}
  >
    {props.children}
  </Container>
);

const Container = styled(ScrollView)`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-left: 5%;
  padding-top: 10%;
  padding-right: 5%;
`;

export default MainContainer;
