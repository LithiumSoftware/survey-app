import styled from "styled-components";
import { Text } from "react-native";
import NormalizeSize from "../utils/NormalizeSize";

const Title = styled(Text)`
  font-size: ${NormalizeSize(36)}px;
  text-align: center;
  padding-bottom: ${NormalizeSize(16)}px;
  font-weight: bold;
  letter-spacing: ${NormalizeSize(-1.5)}px;
`;

export default Title;