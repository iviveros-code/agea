import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SwitchScreen from "../SwitchScreen";

const SwitchStack = createStackNavigator();
export default function SwitchStackScreen() {
  return (
    <SwitchStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <SwitchStack.Screen name="Switch" component={SwitchScreen} />
    </SwitchStack.Navigator>
  );
}
