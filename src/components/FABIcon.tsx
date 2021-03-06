import styled from "styled-components";
import { FAB } from "react-native-paper";
import NormalizeSize from "../utils/NormalizeSize";

const FABIcon = styled(FAB)`
  position: absolute;
  margin: ${NormalizeSize(28)}px;
  right: 0px;
  bottom: 0px;
  background-color: #ffb900 !important;
`;

export default FABIcon;
