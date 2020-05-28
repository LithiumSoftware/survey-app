import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AsyncStorage } from "react-native";
import LogInScreen from "../screens/LogIn";

import SurveysScreen from "../screens/Surveys";
import AnswerSurveyScreen from "../screens/AnswerSurvey";
import ResultsScreen from "../screens/Results";

import SignUpScreen from "../screens/SignUp";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [loggedUser, setUser] = useState<String | null>(null);
  const [loading, setLoading] = useState(true);

  AsyncStorage.getItem("logged_in").then((data) => {
    setUser(data);
    setLoading(false);
  });

  return (
    <>
      {!loading &&
        (loggedUser ? (
          <Stack.Navigator initialRouteName="Surveys" headerMode="none">
            <Stack.Screen name="Surveys" component={SurveysScreen} />
            <Stack.Screen name="AnswerSurvey" component={AnswerSurveyScreen} />
            <Stack.Screen name="Results" component={ResultsScreen} />
          </Stack.Navigator>
        ) : (
          <LoginNavigator initialParams={{ setUser: setUser }} />
        ))}
    </>
  );
};

// This is going to be changed once we have a default screen for all users
// And the login view is going to be under the login button
const LoginNavigator = ({ initialParams: { setUser } }: any) => (
  <Stack.Navigator initialRouteName="LogIn" headerMode="none">
    <Stack.Screen
      name="LogIn"
      component={LogInScreen}
      initialParams={{ setUser }}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUpScreen}
      initialParams={{ setUser }}
    />
  </Stack.Navigator>
);

export default AppNavigator;
