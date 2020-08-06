import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import ListsDetailsScreen from "../ListsDetails";

const ListsStack = createStackNavigator();

const ListsStackScreen = ({ navigation }) => {
  return (
    <ListsStack.Navigator
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
      <ListsStack.Screen
        name="Videos Favoritos"
        component={ListsDetailsScreen}
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
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <MaterialCommunityIcons
                  name="home-outline"
                  size={30}
                  style={{
                    marginRight: 20,
                  }}
                  color="#fff"
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
              Videos -<Text style={{ fontWeight: "900" }}>Favoritos</Text>
            </Text>
          ),
        }}
      />
    </ListsStack.Navigator>
  );
};
export default ListsStackScreen;
