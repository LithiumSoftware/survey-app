import React from "react";
import Surveys from "../components/Surveys";
import ScreenProps from "./ScreenProps";

const SurveysScreen = ({ navigation }: ScreenProps) => (
  <Surveys navigation={navigation} />
);

export default SurveysScreen;