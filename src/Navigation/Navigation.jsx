import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreenStack from "../Navigation/Screens/Stacks/HomeStack";
import ListsDetailsScreenStack from "../Navigation/Screens/Stacks/ListsStack";
import LoginStackScreen from "../Navigation/Screens/Stacks/LoginStack";
import SignInStackScreen from "../Navigation/Screens/Stacks/SignInStack";
import RegisterStackScreen from "../Navigation/Screens/Stacks/RegisterStack";
import SwitchStackScreen from "../Navigation/Screens/Stacks/SwitchStack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./DrawerContent";

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={HomeScreenStack} />
        <Drawer.Screen name="Lists" component={ListsDetailsScreenStack} />
        <Drawer.Screen
          name="Login"
          component={LoginStackScreen}
          options={{ gestureEnabled: false }}
        />
        <Drawer.Screen
          name="SignIn"
          component={SignInStackScreen}
          options={{ gestureEnabled: false }}
        />
        <Drawer.Screen
          name="Register"
          component={RegisterStackScreen}
          options={{ gestureEnabled: false }}
        />
        <Drawer.Screen
          name="Switch"
          component={SwitchStackScreen}
          options={{ gestureEnabled: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
