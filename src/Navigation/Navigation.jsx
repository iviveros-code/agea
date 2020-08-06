import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreenStack from "../Navigation/Screens/Stacks/HomeStack";
import ListsDetailsScreenStack from "../Navigation/Screens/Stacks/ListsStack";
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
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
