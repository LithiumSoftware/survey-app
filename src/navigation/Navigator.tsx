import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SurveysScreen from "../screens/Surveys";
import AnswerSurveyScreen from "../screens/AnswerSurvey";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Surveys" component={SurveysScreen} />
      <Stack.Screen name="AnswerSurvey" component={AnswerSurveyScreen} />
    </Stack.Navigator>
  );
}
