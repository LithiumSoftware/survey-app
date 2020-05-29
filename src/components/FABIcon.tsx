import styled from "styled-components";
import { FAB } from "react-native-paper";
import NormalizeSize from "../utils/NormalizeSize";

const FABIcon = styled(FAB)`
  position: absolute;
  margin: ${NormalizeSize(28)}px;
  right: 0px;
  bottom: 0px;
  border-radius: 55px;
  height: ${NormalizeSize(55)}px;
  width: ${NormalizeSize(55)}px;
  background-color: #ffb900;
`;

export default FABIcon;
