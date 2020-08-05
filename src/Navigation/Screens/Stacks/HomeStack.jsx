import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "../HomeScreen";

const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator
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
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => {
            return (
              <Ionicons
                name="ios-menu"
                size={25}
                backgroundColor="#009387"
                onPress={() => navigation.openDrawer()}
              />
            );
          },
          headerRight: () => {
            return (
              <MaterialIcons
                name="favorite"
                size={25}
                backgroundColor="#009387"
                onPress={() => navigation.navigate("Lists")}
              />
            );
          },
        }}
      />
    </HomeStack.Navigator>
  );
};
export default HomeStackScreen;
