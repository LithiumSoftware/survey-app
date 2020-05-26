import styled from "styled-components";
import { FAB } from "react-native-paper";
import NormalizeSize from "../utils/NormalizeSize";

const FABIcon = styled(FAB)`
  position: absolute;
  margin: ${NormalizeSize(28)}px;
  right: 0px;
  bottom: ${NormalizeSize(56)}px;
  background-color: #ffb900;
`;

export default FABIcon;
