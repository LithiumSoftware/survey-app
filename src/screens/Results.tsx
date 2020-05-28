import React from "react";
import ResultsSurvey from "../components/ResultsSurvey";
import ScreenProps from "./ScreenProps";

const ResultsScreen = ({ route, navigation }: ScreenProps) => (
  <ResultsSurvey navigation={navigation} survey={route.params.survey} />
);

export default ResultsScreen;
