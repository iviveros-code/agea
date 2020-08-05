import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListsDetailsScreen from "../ListsDetails";

const ListsStack = createStackNavigator();

const ListsStackScreen = ({ navigation }) => {
  return (
    <ListsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#009387",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <ListsStack.Screen name="Home" component={ListsDetailsScreen} />
    </ListsStack.Navigator>
  );
};
export default ListsStackScreen;
