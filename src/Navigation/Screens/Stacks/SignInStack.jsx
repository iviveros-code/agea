import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../SignInScreen";

const SignInStack = createStackNavigator();

export default function SignInStackScreen() {
  return (
    <SignInStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <SignInStack.Screen name="SignIn" component={SignInScreen} />
    </SignInStack.Navigator>
  );
}
