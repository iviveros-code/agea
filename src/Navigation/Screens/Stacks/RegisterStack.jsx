import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "../RegisterScreen";

const RegisterStack = createStackNavigator();
export default function RegisterStackScreen() {
  return (
    <RegisterStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RegisterStack.Screen name="Registro" component={RegisterScreen} />
    </RegisterStack.Navigator>
  );
}
