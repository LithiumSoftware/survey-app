import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SurveysScreen from "../screens/Surveys";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Surveys" component={SurveysScreen} />
    </Stack.Navigator>
  );
}
