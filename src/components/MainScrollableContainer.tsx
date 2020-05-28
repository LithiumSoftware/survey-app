import React from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import NormalizeSize from "../utils/NormalizeSize";

const MainScrollableContainer = (props: any) => (
  <Container
    contentContainerStyle={{
      flexGrow: 1,
      justifyContent: "space-between",
      alignItems: "stretch",
      paddingBottom: NormalizeSize(150),
    }}
  >
    {props.children}
  </Container>
);

const Container = styled(ScrollView)`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: ${NormalizeSize(20)}px;
`;

export default MainScrollableContainer;
