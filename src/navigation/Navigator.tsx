import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SurveysScreen from "../screens/Surveys";
import AnswerSurveyScreen from "../screens/AnswerSurvey";
import ResultsScreen from "../screens/Results";

import LogInScreen from "../screens/LogIn";
import SignUpScreen from "../screens/SignUp";

const Stack = createStackNavigator();

const AppNavigator = ({ loggedUser, setUserToken }: any) => (
  <Stack.Navigator initialRouteName="Surveys" headerMode="none">
    <Stack.Screen
      name="Surveys"
      component={SurveysScreen}
      initialParams={{ loggedUser, setUserToken }}
    />
    <Stack.Screen name="AnswerSurvey" component={AnswerSurveyScreen} />
    <Stack.Screen
      name="LogIn"
      component={LogInScreen}
      initialParams={{ setUserToken }}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUpScreen}
      initialParams={{ setUserToken }}
    />
    <Stack.Screen name="Results" component={ResultsScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
