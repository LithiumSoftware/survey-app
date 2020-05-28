import React from "react";
import Surveys from "../components/Surveys";
import ScreenProps from "./ScreenProps";

const SurveysScreen = ({
  navigation,
  route: {
    params: { loggedUser },
  },
}: ScreenProps) => <Surveys navigation={navigation} userId={loggedUser} />;

export default SurveysScreen;
