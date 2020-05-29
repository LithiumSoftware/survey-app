import styled from "styled-components";
import { View } from "react-native";
import NormalizeSize from "../utils/NormalizeSize";

const MainNonScrollableContainer = styled(View)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  background-color: white;
  padding-left: ${NormalizeSize(20)}px;
  padding-top: ${NormalizeSize(20)}px;
  padding-right: ${NormalizeSize(20)}px;
  padding-bottom: ${NormalizeSize(40)}px;
  max-width: 768px;
`;

export default MainNonScrollableContainer;
