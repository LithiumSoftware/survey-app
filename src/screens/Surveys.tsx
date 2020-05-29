import React from "react";
import Surveys from "../components/Surveys";
import ScreenProps from "./ScreenProps";

const SurveysScreen = ({
  navigation,
  route: {
    params: { setUserToken },
  },
}: ScreenProps) => (
  <Surveys navigation={navigation} setUserToken={setUserToken} />
);

export default SurveysScreen;
