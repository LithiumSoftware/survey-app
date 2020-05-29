import React from "react";
import Surveys from "../components/Surveys";
import ScreenProps from "./ScreenProps";

const SurveysScreen = ({
  navigation,
  route: {
    params: { setUserToken, reloadSurveys },
  },
}: ScreenProps) => (
  <Surveys
    navigation={navigation}
    setUserToken={setUserToken}
    reloadSurveys={reloadSurveys}
  />
);

export default SurveysScreen;
