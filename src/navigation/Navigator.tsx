import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AsyncStorage } from "react-native";
import LogInScreen from "../screens/LogIn";
import SurveysScreen from "../screens/Surveys";
import AnswerSurveyScreen from "../screens/AnswerSurvey";

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
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Surveys" component={SurveysScreen} />
            <Stack.Screen name="AnswerSurvey" component={AnswerSurveyScreen} />
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
  </Stack.Navigator>
);

export default AppNavigator;