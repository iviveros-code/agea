import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreenStack from "../Navigation/Screens/Stacks/HomeStack";
import ListsDetailsScreenStack from "../Navigation/Screens/Stacks/ListsStack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#009387",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        initialRouteName="Home"
      >
        <Drawer.Screen name="Home" component={HomeScreenStack} />
        <Drawer.Screen name="Lists" component={ListsDetailsScreenStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
