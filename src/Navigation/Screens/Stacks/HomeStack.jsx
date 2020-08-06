import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../HomeScreen";

const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#88b400",
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
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <MaterialCommunityIcons
                  name="menu"
                  size={30}
                  style={{ marginLeft: 20 }}
                  color="#fff"
                />
              </TouchableOpacity>
            );
          },
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate("Lists")}>
                <MaterialCommunityIcons
                  name="heart"
                  size={30}
                  style={{
                    marginRight: 20,
                  }}
                  color="#e6253b"
                />
              </TouchableOpacity>
            );
          },
          title: (
            <Text
              style={{
                fontWeight: "400",
              }}
            >
              Home -<Text style={{ fontWeight: "900" }}>Videos</Text>
            </Text>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};
export default HomeStackScreen;
