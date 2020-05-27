import React from "react";
import Surveys from "../components/Surveys";
import ScreenProps from "./ScreenProps";
import HeaderLogo from "../components/HeaderLogo";

const SurveysScreen = ({ route, navigation }: ScreenProps) => (
  <Surveys navigation={navigation} />
);

export default SurveysScreen;
